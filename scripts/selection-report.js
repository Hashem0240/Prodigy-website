/* Preliminary report: only approved performance and verified technical fields. */
(function () {
  const { $, t } = ProdigyUI;
  function matching(a, b) {
    return (
      Number.isFinite(a) &&
      Number.isFinite(b) &&
      Math.abs(a - b) < 1e-7 * Math.max(1, Math.abs(a), Math.abs(b))
    );
  }
  function report(selection) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const { result: r, duty, model } = selection;
    let y = 18;
    function line(label, value) {
      const text =
        String(label) + (value === undefined ? "" : ": " + String(value));
      const lines = doc.splitTextToSize(text, 178);
      if (y + lines.length * 5 > 278) {
        doc.addPage();
        y = 18;
      }
      doc.setFontSize(10);
      doc.text(lines, 16, y);
      y += lines.length * 5 + 3;
    }
    doc.setTextColor(190, 30, 35);
    doc.setFontSize(18);
    doc.text("PRODIGY | SELECTION REPORT", 16, y);
    y += 12;
    doc.setTextColor(30, 30, 30);
    line("PRELIMINARY - NOT FOR FINAL SUBMITTAL");
    if (r.status === "DATA PENDING VERIFICATION")
      line("Engineering data pending verification — not for final submittal.");
    // Built-in PDF fonts support English; arbitrary Unicode project text is excluded explicitly.
    line(
      "Project / reference",
      /[^\x20-\x7E]/.test(selection.project)
        ? "See website reference (non-Latin text)"
        : selection.project || "Not specified",
    );
    const fmt = (v) =>
      Number.isFinite(v) ? v.toFixed(3) : "pending_review / unavailable";
    line("Selected fan", r.model + (r.speed ? " / " + r.speed : ""));
    line(
      "Required airflow",
      fmt(duty.q) +
        " m3/h; " +
        fmt(duty.q / ProdigyEngineering.CFM_TO_M3H) +
        " CFM",
    );
    line("Required system ESP", fmt(duty.p) + " Pa");
    line(
      "Available fan static pressure at required airflow",
      fmt(r.available) + " Pa",
    );
    line("Pressure margin at required airflow", fmt(r.margin) + " Pa");
    line(
      "Expected operating point(s)",
      r.operating.length
        ? r.operating
            .map((x) => fmt(x.q) + " m3/h @ " + fmt(x.p) + " Pa")
            .join("; ")
        : "Unavailable",
    );
    line("Selection status", r.status);
    line(
      "Performance source / revision",
      r.source ? r.source + " / " + r.revision : "pending_review",
    );
    line("Generated", new Date().toISOString());
    line("Tool version", "Prodigy " + ProdigyEngineering.version);
    doc.addPage();
    y = 18;
    line("CALCULATION ASSUMPTIONS");
    line(
      "Duty basis",
      duty.basis === "preliminary"
        ? "Preliminary ESP calculation; coefficients pending_review"
        : "Manual user-entered duty; not independently verified",
    );
    line(
      "Capability",
      "Piecewise linear interpolation within verified curve domain only; no extrapolation and no added pressure margin.",
    );
    line(
      "System curve",
      selection.system
        ? "P(Q) = P_required * (Q/Q_required)^2; fixed system and constant density approximation. Intersections are estimates, not efficiency optimization."
        : "Disabled",
    );
    if (
      selection.esp &&
      matching(selection.esp.q, duty.q) &&
      matching(selection.esp.total, duty.p)
    ) {
      const e = selection.esp;
      line("ESP method", ProdigyGuidance.source);
      line("Air density", e.rho + " kg/m3");
      line(
        "Area / hydraulic diameter / actual velocity",
        fmt(e.area) + " m2 / " + fmt(e.diameter) + " mm / " + fmt(e.v) + " m/s",
      );
      line(
        "Friction rate / flexible factor",
        fmt(e.rate) + " Pa/m / " + e.factor,
      );
      for (const item of e.fittings)
        line(item.key, "K=" + item.k + "; quantity=" + item.count);
      for (const row of e.breakdown)
        line("Loss: " + row.key, fmt(row.loss) + " Pa");
    }
    if (selection.airflow && matching(selection.airflow.q, duty.q)) {
      const a = selection.airflow;
      line(
        "Airflow basis",
        "Room " +
          a.room +
          "; volume " +
          fmt(a.volume) +
          " m3; ACH " +
          a.ach +
          " from range " +
          a.range.join("-") +
          ". Legacy guidance pending_review.",
      );
    }
    const fields = [];
    function verified(obj, prefix = "") {
      for (const [key, entry] of Object.entries(obj)) {
        if (entry && entry.status === "verified" && entry.value !== null)
          fields.push([
            prefix + key,
            entry.value,
            entry.source,
            entry.revision,
          ]);
        else if (entry && typeof entry === "object" && !("status" in entry))
          verified(entry, prefix + key + ".");
      }
    }
    for (const key of ["electrical", "speeds", "dimensions"])
      verified(model[key], key + ".");
    line("TECHNICAL TABLE");
    if (!fields.length)
      line(
        "No approved technical fields supplied. Values withheld pending_review.",
      );
    else
      for (const [key, value, source, revision] of fields)
        line(key, value + " (" + source + " / " + revision + ")");
    doc.addPage();
    y = 18;
    line("DESIGN DUTY AND PERFORMANCE");
    const pts = r.points || [],
      maxQ = Math.max(duty.q * 1.1, ...pts.map((p) => p[0]), 1),
      maxP = Math.max(duty.p * 1.15, ...pts.map((p) => p[1]), 1);
    const X = (q) => 25 + (q / maxQ) * 160,
      Y = (p) => 145 - (p / maxP) * 105;
    doc.setDrawColor(50);
    doc.line(25, 35, 25, 145);
    doc.line(25, 145, 190, 145);
    doc.text("Pa", 16, 31);
    doc.text("m3/h", 160, 157);
    function path(points, color) {
      doc.setDrawColor(...color);
      for (let i = 1; i < points.length; i++)
        doc.line(
          X(points[i - 1][0]),
          Y(points[i - 1][1]),
          X(points[i][0]),
          Y(points[i][1]),
        );
    }
    if (pts.length) path(pts, [190, 30, 35]);
    if (selection.system && duty.p > 0) {
      const end = Math.min(maxQ, duty.q * Math.sqrt(maxP / duty.p));
      path(
        Array.from({ length: 61 }, (_, i) => [
          (end * i) / 60,
          duty.p * ((end * i) / 60 / duty.q) ** 2,
        ]),
        [35, 100, 180],
      );
    }
    doc.setFillColor(20);
    doc.circle(X(duty.q), Y(duty.p), 1.5, "F");
    doc.setFillColor(30, 130, 70);
    for (const point of r.operating)
      doc.circle(X(point.q), Y(point.p), 1.5, "F");
    doc.setTextColor(30);
    for (let i = 0; i <= 4; i++) {
      doc.text(String(Math.round((maxQ * i) / 4)), X((maxQ * i) / 4) - 3, 151);
      doc.text(String(Math.round((maxP * i) / 4)), 10, Y((maxP * i) / 4));
    }
    y = 170;
    line(
      "Legend",
      "Red: verified fan; blue: fixed system; black: design duty; green: intersection.",
    );
    if (!pts.length)
      line(
        "Fan curve and expected operating point withheld: engineering data pending verification.",
      );
    return doc;
  }
  async function download() {
    const selection = window.ProdigySelection;
    if (!selection) return;
    try {
      const doc = report(selection);
      const imgField = selection.model.images.product;
      if (imgField?.value && imgField.status === "verified") {
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = "../" + imgField.value;
        });
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext("2d").drawImage(img, 0, 0);
        const scale = Math.min(65 / c.width, 55 / c.height);
        doc.addImage(
          c.toDataURL("image/jpeg", 0.9),
          "JPEG",
          25,
          205,
          c.width * scale,
          c.height * scale,
        );
      }
      doc.save("Prodigy-" + selection.result.model + "-preliminary.pdf");
    } catch (err) {
      $("reportError").textContent = t(
        "Report could not be generated. Please retry after reloading.",
        "تعذر إنشاء التقرير. أعد تحميل الصفحة وحاول مجدداً.",
      );
    }
  }
  window.ProdigyReport = { create: report };
  $("downloadPDF").addEventListener("click", download);
})();
