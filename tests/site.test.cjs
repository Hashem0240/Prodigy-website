const { test } = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("fs"),
  path = require("path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");
const root = path.resolve(__dirname, "..");
const walk = (p) =>
  fs
    .readdirSync(p, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(p, e.name)) : [path.join(p, e.name)],
    );
const pages = [
  "index.html",
  "products.html",
  ...walk(root + "/products")
    .filter((p) => p.endsWith(".html"))
    .map((p) => path.relative(root, p)),
  ...walk(root + "/tools")
    .filter((p) => p.endsWith(".html"))
    .map((p) => path.relative(root, p)),
];
class Loader extends ResourceLoader {
  fetch(url) {
    const u = new URL(url);
    if (u.hostname !== "prodigy.test") return Promise.resolve(Buffer.from(""));
    const file = path.join(root, decodeURIComponent(u.pathname));
    if (!fs.existsSync(file))
      return Promise.reject(new Error("Missing " + u.pathname));
    if (file.endsWith("jspdf.umd.min.js"))
      return Promise.resolve(Buffer.from(""));
    return Promise.resolve(fs.readFileSync(file));
  }
}
async function load(page, language = "en", theme = "light") {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", (e) => errors.push(e.message));
  const dom = new JSDOM(fs.readFileSync(root + "/" + page, "utf8"), {
    url: "https://prodigy.test/" + page,
    runScripts: "dangerously",
    resources: new Loader(),
    pretendToBeVisual: true,
    virtualConsole: vc,
    beforeParse(w) {
      w.localStorage.setItem("language", language);
      w.localStorage.setItem("theme", theme);
      w.matchMedia = () => ({ matches: false, addEventListener() {} });
      w.scrollTo = () => {};
      w.HTMLElement.prototype.scrollIntoView = () => {};
    },
  });
  await new Promise((resolve) => dom.window.addEventListener("load", resolve));
  return { dom, errors };
}
const titles = new Set();
for (const page of pages)
  test("Static structure and resources: " + page, () => {
    const dom = new JSDOM(fs.readFileSync(root + "/" + page, "utf8"));
    const d = dom.window.document;
    assert.equal(d.querySelectorAll("h1").length, 1);
    assert.ok(d.querySelector("meta[name=description]"));
    assert.ok(d.querySelector("header"));
    assert.ok(d.querySelector("footer"));
    assert.ok(!titles.has(d.title), "duplicate title");
    titles.add(d.title);
    assert.equal(d.querySelectorAll('a[href="#"]').length, 0);
    assert.ok(!d.body.textContent.includes("�"), "corrupt character");
    for (const el of d.querySelectorAll("[src],link[href],a[href]")) {
      const v = el.getAttribute("src") || el.getAttribute("href");
      if (!v || /^(https?:|mailto:|tel:|data:)/.test(v)) continue;
      const [rawFile, hash] = decodeURIComponent(v).split("#");
      const file = rawFile.split("?")[0];
      const target = path.resolve(
        root,
        path.dirname(page),
        file || path.basename(page),
      );
      assert.ok(fs.existsSync(target), page + " missing " + v);
      if (hash && target.endsWith(".html")) {
        const targetDOM = new JSDOM(fs.readFileSync(target, "utf8"));
        assert.ok(
          targetDOM.window.document.getElementById(hash),
          page + " dead anchor " + v,
        );
        targetDOM.window.close();
      }
    }
    dom.window.close();
  });
for (const page of pages)
  for (const lang of ["en", "ar"])
    for (const theme of ["light", "dark"])
      test(`DOM scripts ${page} ${lang}/${theme}`, async () => {
        const { dom, errors } = await load(page, lang, theme);
        try {
          const d = dom.window.document;
          assert.deepEqual(errors, []);
          assert.equal(d.documentElement.dir, lang === "ar" ? "rtl" : "ltr");
          assert.equal(d.documentElement.dataset.theme, theme);
          d.getElementById("menuToggle").click();
          assert.equal(
            d.getElementById("menuToggle").getAttribute("aria-expanded"),
            "true",
          );
          const toggle = d.querySelector(".dropdown-toggle");
          toggle.click();
          assert.equal(toggle.getAttribute("aria-expanded"), "true");
          toggle.dispatchEvent(
            new dom.window.KeyboardEvent("keydown", {
              key: "Escape",
              bubbles: true,
            }),
          );
          assert.equal(toggle.getAttribute("aria-expanded"), "false");
          d.getElementById("languageToggle").click();
          assert.equal(d.documentElement.lang, lang === "en" ? "ar" : "en");
          d.getElementById("themeToggle").click();
          assert.equal(
            d.documentElement.dataset.theme,
            theme === "light" ? "dark" : "light",
          );
          if (/\/(hs-\d+p|ms-\d+m)\.html$/.test(page))
            assert.ok(d.querySelector("svg[role=img]"), "model chart");
        } finally {
          dom.window.close();
        }
      });
test("Airflow invalidation and explicit ESP handoff", async () => {
  const { dom } = await load("tools/airflow-calculator.html");
  const w = dom.window,
    d = w.document;
  const submit = () =>
    d
      .getElementById("airflowForm")
      .dispatchEvent(new w.Event("submit", { cancelable: true }));
  submit();
  assert.ok(d.getElementById("formError").textContent);
  for (const [id, v] of Object.entries({ length: 5, width: 4, height: 3 }))
    d.getElementById(id).value = v;
  submit();
  assert.equal(d.getElementById("result").hidden, false);
  assert.match(
    d.getElementById("continueESP").href,
    /esp-calculator.html\?q=210/,
  );
  d.getElementById("length").value = "0";
  d.getElementById("length").dispatchEvent(
    new w.Event("input", { bubbles: true }),
  );
  assert.equal(d.getElementById("result").hidden, true);
  dom.window.close();
});
test("ESP user input computes reconciled losses and selection handoff", async () => {
  const { dom } = await load("tools/esp-calculator.html");
  const w = dom.window,
    d = w.document;
  for (const [id, v] of Object.entries({
    flowVal: 720,
    ductShape: "rect",
    wMm: 200,
    hMm: 200,
    ductLen: 10,
    elbow90Qty: 2,
    filterPa: 25,
  }))
    d.getElementById(id).value = v;
  d.getElementById("espForm").dispatchEvent(
    new w.Event("submit", { cancelable: true }),
  );
  assert.equal(
    d.getElementById("espResult").hidden,
    false,
    d.getElementById("formError").textContent,
  );
  assert.match(d.getElementById("continueSelection").href, /esp=71.06/);
  dom.window.close();
});
test("Selector never recommends legacy models and report context is invalidated", async () => {
  const { dom } = await load("tools/fan-selector.html");
  const w = dom.window,
    d = w.document;
  d.getElementById("flowVal").value = 100;
  d.getElementById("pressurePa").value = 50;
  d.getElementById("selectionForm").dispatchEvent(
    new w.Event("submit", { cancelable: true }),
  );
  assert.equal(d.querySelectorAll(".selection-card").length, 12);
  assert.equal(
    d.querySelectorAll(".status")[0].textContent,
    "DATA PENDING VERIFICATION",
  );
  d.querySelector("[data-report]").click();
  assert.ok(w.ProdigySelection);
  d.getElementById("pressurePa").dispatchEvent(
    new w.Event("input", { bubbles: true }),
  );
  assert.equal(w.ProdigySelection, null);
  dom.window.close();
});
module.exports = { load };
test("Real jsPDF creates a three-page preliminary report without legacy technical values", async () => {
  const { dom } = await load("tools/fan-selector.html");
  try {
    const w = dom.window,
      d = w.document;
    w.jspdf = { jsPDF: require("jspdf").jsPDF };
    d.getElementById("flowVal").value = 100;
    d.getElementById("pressurePa").value = 50;
    d.getElementById("model").value = "HS-150P";
    d.getElementById("selectionForm").dispatchEvent(
      new w.Event("submit", { cancelable: true }),
    );
    d.querySelector("[data-report]").click();
    const pdf = w.ProdigyReport.create(w.ProdigySelection);
    const text = pdf.output();
    assert.equal(pdf.getNumberOfPages(), 3);
    assert.match(text, /%PDF/);
    assert.match(text, /DATA PENDING VERIFICATION/);
    assert.match(text, /Available fan static pressure/);
    assert.match(text, /No approved technical fields supplied/);
    assert.ok(!text.includes("2550"), "legacy conflicting RPM leaked");
    assert.ok(!text.includes("Pressure After ESP Resistance"));
  } finally {
    dom.window.close();
  }
});
