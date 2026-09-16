/* Legacy chart rendering and future verified curves consume the shared master. No smoothing. */
function loadFanChart(canvasId, key) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const id = key.startsWith("HS")
    ? key.replace(/^HS/, "HS-")
    : key.replace(/^MS/, "MS-").replace(/M?$/, "M");
  const model = ProdigyFans.models[id];
  if (!model) return;
  const approved =
    model.performance.status === "verified" &&
    model.performance.source &&
    model.performance.revision;
  const datasets = approved
    ? model.performance.curves
        .filter(
          (c) =>
            c.status === "verified" && ProdigyEngineering.curveValid(c.points),
        )
        .map((c) => ({
          label: c.speed,
          data: c.points.map(([x, y]) => ({ x, y })),
          borderColor: "#dc2626",
        }))
    : model.observations.chart.value.datasets;
  const legacy = model.observations.chart.value;
  const maxX = approved
    ? Math.max(...datasets.flatMap((d) => d.data.map((p) => p.x)))
    : legacy.maxX;
  const maxY = approved
    ? Math.max(...datasets.flatMap((d) => d.data.map((p) => p.y)))
    : legacy.maxY;
  const X = (x) => 65 + (x / maxX) * 490,
    Y = (y) => 255 - (y / maxY) * 215;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 600 315");
  svg.setAttribute("role", "img");
  svg.setAttribute(
    "aria-label",
    id +
      " airflow and static pressure curves; " +
      (approved ? "verified" : "pending_review"),
  );
  svg.style.width = "100%";
  const add = (tag, attrs, text) => {
    const el = document.createElementNS(ns, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (text) el.textContent = text;
    svg.append(el);
  };
  add("path", { d: "M65 30 V255 H565", stroke: "currentColor", fill: "none" });
  datasets.forEach((d, i) => {
    add("path", {
      d: d.data
        .map((p, j) => (j ? "L" : "M") + X(p.x) + "," + Y(p.y))
        .join(" "),
      stroke: d.borderColor || "#dc2626",
      "stroke-width": 3,
      fill: "none",
    });
    add(
      "text",
      {
        x: 80 + i * 210,
        y: 18,
        fill: d.borderColor || "#dc2626",
        "font-size": 13,
      },
      d.label,
    );
  });
  for (let i = 0; i <= 4; i++) {
    add(
      "text",
      {
        x: X((maxX * i) / 4),
        y: 274,
        fill: "currentColor",
        "font-size": 11,
        "text-anchor": "middle",
      },
      String(Math.round((maxX * i) / 4)),
    );
    add(
      "text",
      {
        x: 54,
        y: Y((maxY * i) / 4),
        fill: "currentColor",
        "font-size": 11,
        "text-anchor": "end",
      },
      String(Math.round((maxY * i) / 4)),
    );
  }
  add("text", { x: 250, y: 300, fill: "currentColor" }, "m³/h");
  add("text", { x: 10, y: 20, fill: "currentColor" }, "Pa");
  canvas.replaceWith(svg);
  const note = document.createElement("p");
  note.className = "review-note";
  note.dataset.en = approved
    ? "Verified curve"
    : "Legacy curve — pending_review; not for engineering selection.";
  note.dataset.ar = approved
    ? "منحنى معتمد"
    : "منحنى موروث — pending_review؛ غير معتمد للاختيار الهندسي.";
  note.textContent =
    note.dataset[document.documentElement.lang === "ar" ? "ar" : "en"];
  svg.after(note);
}
