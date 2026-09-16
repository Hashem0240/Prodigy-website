(function () {
  const { $, t, n, f, error, escape, table, queryFlow, read, plot } = ProdigyUI;
  const form = $("selectionForm"),
    params = queryFlow();
  let results = [],
    duty = null;
  if (params.has("esp")) $("pressurePa").value = params.get("esp");
  function models() {
    const old = $("model").value;
    $("model").innerHTML =
      '<option value="all">' +
      t("All models", "جميع الموديلات") +
      "</option>" +
      Object.values(ProdigyFans.models)
        .filter(
          (m) =>
            $("series").value === "all" ||
            m.metadata.series.value === $("series").value,
        )
        .map((m) => "<option>" + m.id + "</option>")
        .join("");
    if ([...$("model").options].some((o) => o.value === old))
      $("model").value = old;
  }
  function invalidate() {
    results = [];
    duty = null;
    window.ProdigySelection = null;
    $("selectionResults").hidden = true;
    $("reportPanel").hidden = true;
    $("formError").textContent = "";
  }
  const statuses = {
    SUITABLE: () => t("SUITABLE", "مناسبة"),
    "NOT SUITABLE": () => t("NOT SUITABLE", "غير مناسبة"),
    "DATA PENDING VERIFICATION": () =>
      t("DATA PENDING VERIFICATION", "البيانات بانتظار التحقق"),
  };
  function render() {
    if (!duty) return;
    $("selectionResults").hidden = false;
    $("selectionResults").innerHTML =
      "<h2>" +
      t("Duty check results", "نتائج فحص نقطة التصميم") +
      "</h2>" +
      results
        .map(
          (r, i) =>
            '<article class="selection-card"><h3>' +
            escape(r.model) +
            (r.speed ? " · " + escape(r.speed) : "") +
            '</h3><p class="status">' +
            statuses[r.status]() +
            "</p>" +
            table([
              [
                t(
                  "Available pressure at required airflow",
                  "الضغط المتاح عند التدفق المطلوب",
                ),
                f(r.available) + " Pa",
              ],
              [t("Pressure margin", "هامش الضغط"), f(r.margin) + " Pa"],
              [
                t("Expected operating points", "نقاط التشغيل المتوقعة"),
                r.operating
                  .map((x) => f(x.q) + " m³/h @ " + f(x.p) + " Pa")
                  .join("; ") || t("Unavailable", "غير متاحة"),
              ],
            ]) +
            (r.reason === "outside_verified_domain"
              ? "<p>" +
                t(
                  "Required airflow is outside the verified curve domain. No extrapolation performed.",
                  "التدفق المطلوب خارج نطاق المنحنى المعتمد؛ لم يتم الاستقراء.",
                ) +
                "</p>"
              : "") +
            '<button type="button" class="btn" data-report="' +
            i +
            '">' +
            t("Prepare report", "إعداد التقرير") +
            "</button></article>",
        )
        .join("");
  }
  function prepare(index) {
    const result = results[index],
      model = ProdigyFans.models[result.model];
    window.ProdigySelection = {
      result,
      duty,
      model,
      project: $("project").value,
      system: $("systemCurve").checked,
      esp: read("prodigyESP"),
      airflow: read("prodigyAirflow"),
    };
    $("reportPanel").hidden = false;
    const isPending = result.status === "DATA PENDING VERIFICATION";
    $("reportPreview").innerHTML =
      "<h3>" +
      escape(result.model) +
      '</h3><p class="review-note">' +
      t(
        "Preliminary report — not for final submittal.",
        "تقرير أولي — غير صالح للاعتماد النهائي.",
      ) +
      "</p>" +
      table([
        [t("Selection status", "حالة الاختيار"), statuses[result.status]()],
        [t("Required airflow", "التدفق المطلوب"), f(duty.q) + " m³/h"],
        [t("Required system ESP", "ضغط النظام المطلوب"), f(duty.p) + " Pa"],
        [
          t("Data source / revision", "مصدر البيانات / الإصدار"),
          result.source
            ? result.source + " / " + result.revision
            : "pending_review",
        ],
      ]) +
      plot(result, duty.q, duty.p, $("systemCurve").checked) +
      (isPending
        ? "<p>" +
          t(
            "Engineering data pending verification — not for final submittal. No unverified fan curve or technical table is included.",
            "البيانات الهندسية بانتظار التحقق — غير صالح للاعتماد النهائي. لم يُدرج منحنى أو جدول فني غير معتمد.",
          ) +
          "</p>"
        : "");
    $("reportError").textContent = "";
  }
  let previousUnit = "m3h";
  $("flowUnit").addEventListener("change", () => {
    const v = Number($("flowVal").value);
    if ($("flowVal").value !== "" && Number.isFinite(v))
      $("flowVal").value =
        previousUnit === "cfm"
          ? v * ProdigyEngineering.CFM_TO_M3H
          : v / ProdigyEngineering.CFM_TO_M3H;
    previousUnit = $("flowUnit").value;
  });
  form.addEventListener("input", invalidate);
  form.addEventListener("change", invalidate);
  $("series").addEventListener("change", models);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    invalidate();
    try {
      duty = {
        q:
          n("flowVal", true) *
          ($("flowUnit").value === "cfm" ? ProdigyEngineering.CFM_TO_M3H : 1),
        p: n("pressurePa"),
        basis: params.get("basis") === "preliminary" ? "preliminary" : "manual",
      };
      results = Object.values(ProdigyFans.models)
        .filter(
          (m) =>
            ($("series").value === "all" ||
              m.metadata.series.value === $("series").value) &&
            ($("model").value === "all" || m.id === $("model").value),
        )
        .flatMap((m) =>
          ProdigyEngineering.capability(
            m,
            duty.q,
            duty.p,
            $("systemCurve").checked,
          ),
        );
      render();
    } catch (err) {
      duty = null;
      error(err);
    }
  });
  $("selectionResults").addEventListener("click", (e) => {
    const button = e.target.closest("[data-report]");
    if (button) prepare(Number(button.dataset.report));
  });
  document.addEventListener("prodigy:language", () => {
    models();
    render();
    if (window.ProdigySelection)
      prepare(results.indexOf(window.ProdigySelection.result));
  });
  models();
})();
