(function () {
  const { $, t, n, f, error, table, handoff, store } = ProdigyUI;
  const form = $("airflowForm");
  let result = null;
  function invalidate() {
    result = null;
    $("result").hidden = true;
    $("continueESP").hidden = true;
    $("continueESP").removeAttribute("href");
    $("formError").textContent = "";
  }
  function guidance(reset = false) {
    const range = ProdigyGuidance.roomACH[$("room").value];
    if (reset) $("ach").value = (range[0] + range[1]) / 2;
    $("ach").min = range[0];
    $("ach").max = range[1];
    $("achGuidance").textContent =
      t("ACH guidance range: ", "نطاق ACH الإرشادي: ") +
      range.join("–") +
      t(
        ". Default is the arithmetic midpoint; edit within this range.",
        ". القيمة الافتراضية هي المتوسط الحسابي؛ يمكن تعديلها ضمن النطاق.",
      );
  }
  function render() {
    if (!result) return;
    $("result").hidden = false;
    $("result").innerHTML = table([
      [t("Room volume", "حجم الغرفة"), f(result.volume) + " m³"],
      [
        t("ACH range / selected ACH", "نطاق ACH / القيمة المختارة"),
        result.range.join("–") + " / " + f(result.ach),
      ],
      [
        t("Required airflow", "تدفق الهواء المطلوب"),
        f(result.q) + " m³/h / " + f(result.cfm) + " CFM",
      ],
    ]);
    $("continueESP").hidden = false;
    $("continueESP").href = "esp-calculator.html?" + handoff(result.q);
  }
  form.addEventListener("input", invalidate);
  $("room").addEventListener("change", () => {
    invalidate();
    guidance(true);
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    invalidate();
    try {
      result = ProdigyEngineering.airflow(
        n("length", true),
        n("width", true),
        n("height", true),
        n("ach", true),
        ProdigyGuidance.roomACH[$("room").value],
      );
      store("prodigyAirflow", {
        ...result,
        room: $("room").value,
        status: "pending_review",
      });
      render();
    } catch (err) {
      error(err);
    }
  });
  document.addEventListener("prodigy:language", () => {
    guidance();
    render();
  });
  guidance(true);
})();
