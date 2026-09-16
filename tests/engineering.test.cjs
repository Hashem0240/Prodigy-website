const { test } = require("node:test"),
  assert = require("node:assert/strict"),
  fs = require("fs"),
  vm = require("vm"),
  path = require("path");
const root = path.resolve(__dirname, "..");
const context = {};
vm.createContext(context);
for (const file of [
  "scripts/engineering.js",
  "data/fans-master.js",
  "data/design-guidance.js",
])
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
const E = context.ProdigyEngineering,
  G = context.ProdigyGuidance,
  D = context.ProdigyFans;
const close = (a, b, tol = 1e-8) =>
  assert.ok(Math.abs(a - b) < tol, `${a} != ${b}`);
test("ACH volume and explicit range, invalid and overflow inputs", () => {
  const a = E.airflow(5, 4, 3, 6.5, [6, 7]);
  close(a.q, 390);
  close(a.volume, 60);
  for (const value of [0, -1, NaN, Infinity])
    assert.throws(() => E.airflow(value, 4, 3, 6.5, [6, 7]));
  assert.throws(() => E.airflow(5, 4, 3, 8, [6, 7]));
  assert.throws(() => E.airflow(1e200, 1e200, 3, 6, [6, 7]));
});
test("CFM conversion uses cubic feet to metres and minutes to hours", () =>
  close(E.CFM_TO_M3H, 0.3048 ** 3 * 60));
test("Bilinear friction interpolation and exact bounds", () => {
  close(
    E.friction(G.frictionTable, G.velocities, 125, 2.5),
    (0.73 + 1.507 + 0.436 + 0.904) / 4,
  );
  close(E.friction(G.frictionTable, G.velocities, 100, 2), 0.73);
  close(E.friction(G.frictionTable, G.velocities, 500, 10), 1.915);
  for (const [d, v] of [
    [99, 2],
    [501, 3],
    [150, 1.99],
    [150, 10.01],
  ])
    assert.throws(() => E.friction(G.frictionTable, G.velocities, d, v));
});
test("Rectangular ESP uses actual velocity, no rounded intermediate and reconciles", () => {
  const input = {
    q: 720,
    length: 10,
    shape: "rect",
    width: 200,
    height: 200,
    flex: false,
    fittings: [{ key: "elbow90", k: 1, count: 2 }],
    losses: [{ key: "filter", loss: 25 }],
  };
  const r = E.esp(input, G);
  close(r.area, 0.04);
  close(r.v, 5);
  close(r.diameter, 200);
  close(r.total, 16.06 + 30 + 25);
  close(
    r.total,
    r.breakdown.reduce((s, b) => s + b.loss, 0),
  );
});
test("ESP rejects malformed/negative losses and fitting counts", () => {
  const base = {
    q: 720,
    length: 10,
    shape: "rect",
    width: 200,
    height: 200,
    flex: false,
  };
  for (const value of ["", -1, NaN, Infinity])
    assert.throws(() =>
      E.esp({ ...base, losses: [{ key: "filter", loss: value }] }, G),
    );
  assert.throws(() =>
    E.esp({ ...base, fittings: [{ key: "a", k: 1, count: 1.5 }] }, G),
  );
  assert.throws(() => E.esp({ ...base, width: 0 }, G));
});
test("Synthetic fixtures: verified duty/margin, no arbitrary threshold or extrapolation", () => {
  const m = {
    id: "TEST ONLY",
    performance: {
      status: "verified",
      source: "Synthetic test fixture; not product data",
      revision: "test",
      curves: [
        {
          speed: "test",
          status: "verified",
          points: [
            [0, 200],
            [200, 0],
          ],
        },
      ],
    },
  };
  close(E.capability(m, 100, 100)[0].margin, 0);
  assert.equal(E.capability(m, 100, 100)[0].status, "SUITABLE");
  assert.equal(E.capability(m, 100, 101)[0].status, "NOT SUITABLE");
  assert.equal(E.capability(m, 201, 0)[0].reason, "outside_verified_domain");
  m.performance.status = "pending_review";
  assert.equal(E.capability(m, 100, 1)[0].status, "DATA PENDING VERIFICATION");
});
test("Synthetic fixed-system intersection / non-monotonic curve multiple roots", () => {
  const roots = E.intersections(
    [
      [0, 200],
      [200, 0],
    ],
    100,
    100,
  );
  close(roots[0].q, 100);
  close(roots[0].p, 100);
  assert.equal(
    E.intersections(
      [
        [0, 100],
        [100, 0],
        [200, 100],
        [300, 0],
      ],
      100,
      10,
    ).length,
    3,
  );
});
test("All actual model curves remain pending, including both 125 models", () => {
  assert.equal(Object.keys(D.models).length, 12);
  for (const m of Object.values(D.models))
    assert.equal(
      E.capability(m, 100, 50)[0].status,
      "DATA PENDING VERIFICATION",
    );
  assert.ok(D.models["HS-125P"]);
  assert.ok(D.models["MS-125M"]);
  assert.equal(D.models["HS-150P"].observations.pdf.value.rpm, 2550);
  assert.equal(
    D.models["HS-150P"].observations.productPage.value.high.rpm,
    2250,
  );
  assert.equal(
    D.models["MS-250M"].observations.chart.value.datasets[0].data[0].y,
    660,
  );
  assert.equal(D.models["MS-250M"].observations.selector.value.data[0][1], 670);
});
test("A pending speed inside a verified record cannot leak a curve into a report", () => {
  const m = {
    id: "TEST ONLY",
    performance: {
      status: "verified",
      source: "Synthetic fixture",
      revision: "test",
      curves: [
        {
          speed: "pending",
          status: "pending_review",
          points: [
            [0, 200],
            [200, 0],
          ],
        },
      ],
    },
  };
  const r = E.capability(m, 100, 10)[0];
  assert.equal(r.status, "DATA PENDING VERIFICATION");
  assert.equal(r.points, undefined);
});
test("Intersections include tangencies and two roots within one rising segment", () => {
  const tangent = E.intersections(
    [
      [1, 0],
      [3, 8],
    ],
    2,
    4,
  );
  assert.equal(tangent.length, 1);
  close(tangent[0].q, 2);
  const dual = E.intersections(
    [
      [1, 0.25],
      [3, 8.25],
    ],
    2,
    4,
  );
  assert.equal(dual.length, 2);
  close(dual[0].q, 1.5);
  close(dual[1].q, 2.5);
});
