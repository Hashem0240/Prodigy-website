# Engineering data review

Baseline: `f4205e13f04d98d9274868a314c8257d04dca6ef`.

All 12 HS/MS model performance records remain `pending_review`. None can return `SUITABLE`. No supplier-controlled approved curve revision was included in the handoff.

## Holds explicitly identified in the handoff

| Item | Observations retained | Approval needed |
|---|---|---|
| HS-125P | Product and legacy curve exist; old selector omitted it | Approved speed curves and technical revision |
| MS-125M | Product and legacy curve exist; old selector omitted it | Approved curve and technical revision |
| HS-150P high RPM | Product page 2250; old PDF 2550 | Approved RPM |
| HS-150P high current | Product page 0.26 A; old PDF 0.22 A | Approved current |
| MS-250M pressure | Table 570 Pa; product chart shutoff 660 Pa; selector shutoff 670 Pa | Official static-pressure curve and definition of tabulated pressure |

## Additional discrepancies retained

- HS-125P high current: family page 0.14 A versus detail page 0.16 A.
- HS-200P high current: product data 0.62 A versus old PDF 0.53 A.
- HS-250P high current: product data 1.09 A versus old PDF 1.20 A.
- The HS-100P family table splits voltage/frequency across speed rows while the detail table provides the combined string. Original visible strings are retained.
- Multiple legacy chart and selector curves differ in point locations and/or endpoint values. This is not limited to MS-250M. Both full point sets are retained, including low-speed product curves, without smoothing.

`docs/product-field-observations.json` records mapped product/family fields and provenance. `docs/product-field-conflicts.json` flags differing display strings; some differences are units/formatting rather than numerical conflicts. Do not resolve either category automatically. The master’s `observations` also retains old selector, airflow-tool, PDF, chart and excluded airflow-only selection ranges.

## Approved-source activation procedure

1. Obtain the controlled datasheet/curve, model identity, speed, density/test conditions and revision.
2. Have the owner identify the authoritative values and resolve conflicting observations.
3. Enter verified scalar/display fields with exact units into `electrical`, `speeds` and `dimensions`, with source/revision. Existing static cells are fallback observations only.
4. Populate `performance.curves` with `{speed, status, points}` in **m³/h and Pa static pressure**. Both the parent and each curve require `verified`; parent source and revision must be present.
5. Keep ascending flow points, original measured shape, and observed domain. Do not extrapolate, smooth or invent endpoints. The capability engine rejects malformed curves.
6. Re-run tests and compare product page, family page, selection and report against the signed-off source. No automatic publishing follows approval.

## Calculation assumptions requiring approval

- ACH ranges: inherited design guidance; midpoint is visible and editable. No code-compliance claim.
- Friction table: inherited values, hydraulic diameter 100–500 mm and actual velocity 2–10 m/s. Continuous interpolation replaces integer rounding; all unsupported ranges are rejected.
- Rectangular section: actual WH area for velocity; hydraulic diameter `2WH/(W+H)` for the legacy table correlation. Table methodology/source remains pending.
- Density: inherited standard assumption 1.2 kg/m³, displayed. Non-standard-density support was not added.
- Fittings: inherited K values, displayed for the selected type and quantity; actual duct velocity used in `K × 0.5ρV²`. Source edition pending.
- Flexible duct: user-defined preliminary multiplier; legacy default 2 is labeled, not presented as a verified method.
- Accessory losses: user-entered Pa at design airflow, with zero explicitly permitted. Old generic filter defaults are not treated as ratings.
- System curve: fixed-system constant-density quadratic approximation through user duty. All bracketed intersections within a verified fan curve are reported; not an efficiency or optimality determination.
- No extra pressure margin. `available - required` is retained, including negative values.

## Report safety

Pending records omit available fan pressure, pressure margin, fan curve, operating point and unverified technical fields rather than treating them as zero. Required duty and the explicitly requested system approximation can still be shown. Every PDF is preliminary and not for final submittal; pending performance carries the explicit engineering-verification warning. Prior query parameters `sf` and `p` are never trusted as engineering results.
