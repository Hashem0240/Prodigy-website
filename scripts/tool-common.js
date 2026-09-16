(function (root) {
  const E = root.ProdigyEngineering;
  const $ = (id) => document.getElementById(id);
  const t = (en, ar) => (document.documentElement.lang === "ar" ? ar : en);
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const n = (id, positive = false) => E.number($(id).value, id, 0, positive);
  const f = (v, d = 2) =>
    v === null || v === undefined
      ? "—"
      : v.toLocaleString(
          document.documentElement.lang === "ar" ? "ar-AE" : "en-GB",
          { maximumFractionDigits: d },
        );
  function error(err) {
    $("formError").textContent =
      err.message === "friction_range"
        ? t(
            "Outside supported friction table: hydraulic diameter 100–500 mm and velocity 2–10 m/s. Revise duct size or use a documented external method.",
            "خارج نطاق جدول الاحتكاك: القطر الهيدروليكي 100–500 mm والسرعة 2–10 m/s. عدّل مقاس الدكت أو استخدم طريقة خارجية موثقة.",
          )
        : t(
            "Enter finite, valid values. Dimensions and airflow must be positive; losses cannot be negative. ACH must be inside the displayed range; fitting quantities must be whole numbers.",
            "أدخل قيماً صالحة ومحدودة. الأبعاد والتدفق موجبة، والفواقد غير سالبة. يجب أن يكون ACH ضمن النطاق المعروض وعدد الوصلات عدداً صحيحاً.",
          );
  }
  function table(rows) {
    return (
      '<div class="table-scroll"><table><tbody>' +
      rows
        .map(
          ([a, b]) =>
            '<tr><th scope="row">' +
            escape(a) +
            "</th><td>" +
            escape(b) +
            "</td></tr>",
        )
        .join("") +
      "</tbody></table></div>"
    );
  }
  function handoff(q, p, extra = {}) {
    const params = new URLSearchParams({ q: String(q), ...extra });
    if (p !== undefined) params.set("esp", String(p));
    return params.toString();
  }
  function queryFlow() {
    const p = new URLSearchParams(location.search);
    const v = p.get("q") ?? p.get("af");
    if (v !== null) $("flowVal").value = v;
    return p;
  }
  function store(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }
  function read(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch {
      return null;
    }
  }
  function plot(result, q, p, showSystem) {
    const pts = result.points || [];
    const maxX = Math.max(q * 1.1, ...pts.map((p) => p[0]), 1),
      maxY = Math.max(p * 1.15, ...pts.map((p) => p[1]), 1);
    const X = (x) => 60 + (x / maxX) * 500,
      Y = (y) => 260 - (y / maxY) * 220;
    const path = (points) =>
      points
        .map(
          ([x, y], i) =>
            (i ? "L" : "M") + X(x).toFixed(2) + "," + Y(y).toFixed(2),
        )
        .join(" ");
    let svg =
      '<svg viewBox="0 0 600 320" role="img" aria-label="' +
      t(
        "Fan and system curves at design duty",
        "منحنيات المروحة والنظام عند نقطة التصميم",
      ) +
      '"><path d="M60,30V260H565" fill="none" stroke="currentColor"/>';
    if (pts.length)
      svg +=
        '<path d="' +
        path(pts) +
        '" fill="none" stroke="#dc2626" stroke-width="3"/>';
    if (showSystem && p > 0) {
      const end = Math.min(maxX, q * Math.sqrt(maxY / p));
      const system = Array.from({ length: 61 }, (_, i) => {
        const x = (end * i) / 60;
        return [x, p * (x / q) ** 2];
      });
      svg +=
        '<path d="' +
        path(system) +
        '" fill="none" stroke="#3789ce" stroke-dasharray="5 4" stroke-width="2"/>';
    }
    svg +=
      '<circle cx="' + X(q) + '" cy="' + Y(p) + '" r="5" fill="currentColor"/>';
    for (const point of result.operating || [])
      svg +=
        '<circle cx="' +
        X(point.q) +
        '" cy="' +
        Y(point.p) +
        '" r="5" fill="#2c986d"/>';
    for (let i = 0; i <= 4; i++) {
      svg +=
        '<text x="' +
        X((maxX * i) / 4) +
        '" y="280" text-anchor="middle" fill="currentColor" font-size="11">' +
        Math.round((maxX * i) / 4) +
        '</text><text x="52" y="' +
        Y((maxY * i) / 4) +
        '" text-anchor="end" fill="currentColor" font-size="11">' +
        Math.round((maxY * i) / 4) +
        "</text>";
    }
    return (
      svg +
      '<text x="260" y="307" fill="currentColor">m³/h</text><text x="16" y="20" fill="currentColor">Pa</text></svg><p>' +
      t(
        "Red: verified fan curve · Blue: fixed-system approximation · Black: required duty · Green: intersection.",
        "الأحمر: منحنى المروحة المعتمد · الأزرق: تقريب النظام الثابت · الأسود: نقطة التصميم · الأخضر: التقاطع.",
      ) +
      "</p>"
    );
  }
  root.ProdigyUI = {
    $,
    t,
    escape,
    n,
    f,
    error,
    table,
    handoff,
    queryFlow,
    store,
    read,
    plot,
  };
})(window);
