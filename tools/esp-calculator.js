(function () {
  const { $, t, n, f, error, table, handoff, queryFlow, store } = ProdigyUI;
  const form = $("espForm");
  let result = null;
  let previousUnit = "m3h";
  queryFlow();
  function shape() {
    const rect = $("ductShape").value === "rect";
    for (const id of ["wMm", "hMm"]) {
      $(id).disabled = !rect;
      $(id).parentElement.hidden = !rect;
    }
    $("diaMm").disabled = rect;
    $("diaMm").parentElement.hidden = rect;
    const flex = $("ductType").value === "flex";
    $("flexFactor").disabled = !flex;
    $("flexFactor").parentElement.hidden = !flex;
  }
  function invalidate() {
    result = null;
    $("espResult").hidden = true;
    $("continueSelection").hidden = true;
    $("continueSelection").removeAttribute("href");
    $("formError").textContent = "";
  }
  function render() {
    if (!result) return;
    const names = {
      straight: t("Straight duct", "الدكت المستقيم"),
      elbow90: t("90° elbows", "أكواع 90°"),
      elbow45: t("45° elbows", "أكواع 45°"),
      filter: t("Filter", "الفلتر"),
      damper: t("Damper", "الدامبر"),
      other: t("Other", "إضافي"),
    };
    $("espResult").hidden = false;
    $("espResult").innerHTML =
      table([
        [t("Actual area", "المساحة الفعلية"), f(result.area, 5) + " m²"],
        [
          t("Hydraulic diameter", "القطر الهيدروليكي"),
          f(result.diameter) + " mm",
        ],
        [t("Actual velocity", "السرعة الفعلية"), f(result.v) + " m/s"],
        [t("Friction rate", "معدل الاحتكاك"), f(result.rate, 4) + " Pa/m"],
        [t("Air density", "كثافة الهواء"), f(result.rho) + " kg/m³"],
        ...result.breakdown.map((row) => [
          names[row.key],
          f(row.loss, 4) + " Pa",
        ]),
        [
          t("Total system ESP", "إجمالي ضغط النظام"),
          f(result.total, 4) + " Pa",
        ],
      ]) +
      table(
        result.fittings.map((row) => [
          names[row.key],
          `K = ${row.k}; ${t("quantity", "العدد")} = ${row.count}`,
        ]),
      ) +
      "<p>" +
      t(
        "pending_review — preliminary system resistance. Display rounding does not affect the calculation.",
        "pending_review — مقاومة نظام أولية. التقريب المعروض لا يؤثر على الحساب.",
      ) +
      "</p>";
    $("continueSelection").href =
      "fan-selector.html?" +
      handoff(result.q, result.total, { basis: "preliminary" });
    $("continueSelection").hidden = false;
  }
  form.addEventListener("input", invalidate);
  form.addEventListener("change", () => {
    invalidate();
    shape();
  });
  $("flowUnit").addEventListener("change", () => {
    const v = Number($("flowVal").value);
    if ($("flowVal").value !== "" && Number.isFinite(v))
      $("flowVal").value =
        previousUnit === "cfm"
          ? v * ProdigyEngineering.CFM_TO_M3H
          : v / ProdigyEngineering.CFM_TO_M3H;
    previousUnit = $("flowUnit").value;
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    invalidate();
    try {
      const flex = $("ductType").value === "flex",
        ks = ProdigyGuidance.Kvalues[flex ? "flex" : "GI_PI"];
      const fittings = [90, 45].map((a) => ({
        key: "elbow" + a,
        count: n("elbow" + a + "Qty"),
        k: ks[a + "_" + $("elbow" + a + "Type").value],
      }));
      const input = {
        q:
          n("flowVal", true) *
          ($("flowUnit").value === "cfm" ? ProdigyEngineering.CFM_TO_M3H : 1),
        length: n("ductLen"),
        shape: $("ductShape").value,
        diameter: $("diaMm").value,
        width: $("wMm").value,
        height: $("hMm").value,
        flex,
        factor: $("flexFactor").value,
        fittings,
        losses: ["filter", "damper", "other"].map((key) => ({
          key,
          loss: n(key + "Pa"),
        })),
      };
      result = {
        ...ProdigyEngineering.esp(input, ProdigyGuidance),
        fittings,
        input,
      };
      store("prodigyESP", result);
      render();
    } catch (err) {
      error(err);
    }
  });
  form.addEventListener("reset", () => {
    invalidate();
    setTimeout(() => {
      previousUnit = "m3h";
      shape();
    }, 0);
  });
  document.addEventListener("prodigy:language", render);
  shape();
})();
