/* Pure calculations. Units: m³/h, Pa, mm, m. No model data or guessed margins. */
(function (root) {
  "use strict";
  const CFM_TO_M3H = 1.69901079552;
  function number(value, name, min = 0, strict = false) {
    if (
      value === null ||
      value === undefined ||
      String(value).trim() === "" ||
      !Number.isFinite(Number(value)) ||
      Number(value) < min ||
      (strict && Number(value) === min)
    )
      throw new RangeError(name);
    return Number(value);
  }
  function curveValid(points) {
    return (
      Array.isArray(points) &&
      points.length >= 2 &&
      points.every(
        (p, i) =>
          Array.isArray(p) &&
          p.length === 2 &&
          p.every(Number.isFinite) &&
          p[0] >= 0 &&
          p[1] >= 0 &&
          (i === 0 || p[0] > points[i - 1][0]),
      )
    );
  }
  function interpolate(points, q) {
    if (
      !curveValid(points) ||
      !Number.isFinite(q) ||
      q < points[0][0] ||
      q > points.at(-1)[0]
    )
      return null;
    for (let i = 1; i < points.length; i++) {
      const [x0, y0] = points[i - 1],
        [x1, y1] = points[i];
      if (q <= x1) return y0 + ((y1 - y0) * (q - x0)) / (x1 - x0);
    }
    return null;
  }
  function friction(table, velocities, d, v) {
    number(d, "diameter", 0, true);
    number(v, "velocity", 0, true);
    if (
      d < table[0].D ||
      d > table.at(-1).D ||
      v < velocities[0] ||
      v > velocities.at(-1)
    )
      throw new RangeError("friction_range");
    let hi = table.findIndex((r) => r.D >= d);
    let lo = Math.max(0, hi - 1);
    const at = (row) =>
      interpolate(
        velocities.map((x, i) => [x, row.vals[i]]),
        v,
      );
    return hi === lo
      ? at(table[lo])
      : at(table[lo]) +
          ((at(table[hi]) - at(table[lo])) * (d - table[lo].D)) /
            (table[hi].D - table[lo].D);
  }
  function airflow(l, w, h, ach, range) {
    [l, w, h, ach].forEach((v) =>
      number(v, "positive_dimensions_ach", 0, true),
    );
    if (ach < range[0] || ach > range[1]) throw new RangeError("ach_range");
    const volume = l * w * h,
      q = volume * ach;
    number(q, "overflow", 0, true);
    return { volume, ach, q, cfm: q / CFM_TO_M3H, range };
  }
  function esp(input, guidance) {
    const q = number(input.q, "airflow", 0, true),
      length = number(input.length, "length");
    let area, diameter;
    if (input.shape === "round") {
      diameter = number(input.diameter, "diameter", 0, true);
      area = Math.PI * (diameter / 2000) ** 2;
    } else if (input.shape === "rect") {
      const w = number(input.width, "width", 0, true),
        h = number(input.height, "height", 0, true);
      area = (w * h) / 1e6;
      diameter = (2 * w * h) / (w + h);
    } else throw new RangeError("shape");
    const v = q / 3600 / area;
    const factor = input.flex
      ? number(input.factor, "flex_factor", 0, true)
      : 1;
    const rate =
      friction(guidance.frictionTable, guidance.velocities, diameter, v) *
      factor;
    const rho = guidance.density,
      velocityPressure = 0.5 * rho * v * v;
    const breakdown = [{ key: "straight", loss: rate * length }];
    for (const fit of input.fittings || []) {
      const count = number(fit.count, "fitting_count");
      if (!Number.isInteger(count)) throw new RangeError("fitting_count");
      breakdown.push({
        key: fit.key,
        loss: number(fit.k, "coefficient") * velocityPressure * count,
      });
    }
    for (const item of input.losses || [])
      breakdown.push({
        key: item.key,
        loss: number(item.loss, "accessory_loss"),
      });
    const total = breakdown.reduce((sum, row) => sum + row.loss, 0);
    [area, diameter, v, rate, total].forEach((x) => number(x, "overflow"));
    return {
      q,
      area,
      diameter,
      v,
      rate,
      total,
      breakdown,
      rho,
      factor,
      status: "pending_review",
    };
  }
  function intersections(points, q, p) {
    if (!curveValid(points)) return [];
    number(q, "airflow", 0, true);
    number(p, "pressure");
    const system = (x) => p * (x / q) ** 2;
    const roots = [];
    for (let i = 1; i < points.length; i++) {
      let a = points[i - 1][0],
        b = points[i][0];
      const f = (x) => interpolate(points, x) - system(x);
      const fa = f(a),
        fb = f(b);
      if (fa === 0) roots.push({ q: a, p: system(a) });
      if (fa * fb < 0) {
        for (let j = 0; j < 64; j++) {
          const m = (a + b) / 2;
          if (f(a) * f(m) <= 0) b = m;
          else a = m;
        }
        const x = (a + b) / 2;
        roots.push({ q: x, p: system(x) });
      }
      if (i === points.length - 1 && fb === 0)
        roots.push({ q: b, p: system(b) });
    }
    return roots.filter(
      (r, i) => i === 0 || Math.abs(r.q - roots[i - 1].q) > 1e-7,
    );
  }
  function capability(model, q, p, system = true) {
    number(q, "airflow", 0, true);
    number(p, "pressure");
    const data = model.performance;
    if (
      data.status !== "verified" ||
      !data.source ||
      !data.revision ||
      !data.curves.length
    )
      return [
        {
          model: model.id,
          status: "DATA PENDING VERIFICATION",
          reason: "pending_review",
          available: null,
          margin: null,
          operating: [],
        },
      ];
    return data.curves.map((curve) => {
      const base = {
        model: model.id,
        speed: curve.speed,
        source: data.source,
        revision: data.revision,
        points: curve.points,
      };
      if (curve.status !== "verified" || !curveValid(curve.points))
        return {
          model: model.id,
          speed: curve.speed,
          status: "DATA PENDING VERIFICATION",
          available: null,
          margin: null,
          operating: [],
        };
      const available = interpolate(curve.points, q);
      if (available === null)
        return {
          ...base,
          status: "NOT SUITABLE",
          reason: "outside_verified_domain",
          available: null,
          margin: null,
          operating: [],
        };
      const margin = available - p;
      return {
        ...base,
        status: margin >= 0 ? "SUITABLE" : "NOT SUITABLE",
        available,
        margin,
        operating: system ? intersections(curve.points, q, p) : [],
      };
    });
  }
  const api = {
    version: "2.0.0",
    CFM_TO_M3H,
    number,
    curveValid,
    interpolate,
    friction,
    airflow,
    esp,
    intersections,
    capability,
  };
  root.ProdigyEngineering = api;
  if (typeof module !== "undefined") module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
