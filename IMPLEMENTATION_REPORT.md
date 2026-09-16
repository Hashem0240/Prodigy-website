# Website-v2 implementation report

## Review status

Implementation and automated nonvisual QA are complete for the supplied sources. **Final acceptance is not complete:** browser visual QA, breakpoint checks and before/after screenshots are blocked in this environment. Engineering release also depends on the approvals in `UNRESOLVED_OWNER_APPROVALS.md`. Do not treat this branch as approved for production/final submittal.

Baseline main: `f4205e13f04d98d9274868a314c8257d04dca6ef`. Work branch: `website-v2`. No direct changes or merge to `main`; no deployment.

## Supplied package

Read `00_READ_ME_FIRST.md`, the complete master prompt, audit, workflow, conflicts, content/Arabic, SEO/performance, acceptance and owner-approval files.

The supplied `phase1_core.patch` had bare `@@` headers without line numbers and some abbreviated/line-wrapped context. `git apply --check` rejected it. Its exact intended edits were applied against inspected source, before further implementation, together with the two supplied new files. This is the first separate commit. No engineering values were chosen during that repair.

## Implemented

- Shared runtime fan master: 12 models, field state, provenance, revision, separated electrical/speed/dimension/image sections, original product and family cell observations, full legacy chart/selector/airflow/PDF data. Original staging draft retained but not loaded.
- Product detail/family cells consume the master, retaining their page-specific original display values while pending. Explicit verified overrides and approved curves are supported. Old airflow-only selection ranges are recorded `do_not_publish`.
- Airflow tool: positive dimension checks; room volume, ACH range, editable midpoint default, m³/h/CFM; no premature fan recommendation; full-precision ESP handoff.
- ESP: strict finite/nonnegative validation, actual rectangular velocity, hydraulic diameter, continuous diameter/velocity interpolation, bounds rejection, unrounded intermediate calculations, explicit inherited density/K/table assumptions, editable preliminary flexible factor, accessory/custom losses and reconciled breakdown.
- Selector: airflow + system pressure, series/model filters, verified-curve duty interpolation and pressure margin, bounded fixed-system intersections, three prescribed result states, no arbitrary added margin or next-size recommendation. Pending curves cannot enter results or reports, including a pending speed under a verified parent record.
- PDF: real vendored jsPDF 2.5.1; preliminary English report, required duty, available pressure/margin/operating-point fields, source/revision, assumptions, generation date/version, native duty/system/verified-fan graph, product image on download and verified technical fields only. Pending fields remain unavailable, not zero. Old ambiguous pressure wording removed.
- All 23 production pages: shared consistent header/footer, repaired navigation/assets, labelled controls, expanded states, keyboard dropdowns/Escape, focus/skip link, input labels and scrollable tables. Arabic corrupt characters and obvious terminology/letter issues repaired; dynamic tool results translate.
- Unsupported certifications, statistics, awards, accessory specifications and construction/rating claims held with a traceable inventory. Window Fan remains coming soon. No nonexistent catalogue/download is offered.
- Responsive/RTL and theme CSS repairs added without a React rewrite. Original media and `src/` prototype retained. Reduced-motion preferences and background-tab slider pause supported.
- 35 product-image derivatives plus small gallery thumbnails; first-frame rendering and demand-loaded gallery media/video. Five existing stock hero assets downloaded successfully and cached locally, retaining provenance. SVG charts remove the unpinned Chart.js dependency.
- Unique page titles/descriptions, one H1 per page, Open Graph basics, conservative Organization schema, robots and a 23-page sitemap for the user-supplied current site. No assumed canonical production domain.
- README distinguishes static production and React/Vite prototype; tests and publication rules documented.

## Validation limits

`TEST_RESULTS.md` distinguishes automated passes from blocked browser checks. jsdom executes site code and inspects DOM behavior but has no browser layout engine; it cannot establish visual correctness, contrast, image decoding, responsiveness or native downloads. No screenshots are supplied because the supported browser blocked preview access.

Product image derivatives were visually inspected as local images. This verifies representative image output only, not page layout. Quantitative media inventory is in `docs/media-optimization.json`.

Contact remains email-client based and is labelled accurately; form content is not cleared on handoff. A backend is outside the supplied credentials/configuration. PDF export is explicitly English; unsupported non-Latin project reference text is identified rather than silently garbled.

## Review materials

- `ENGINEERING_DATA_REVIEW.md` — sources, conflicts, assumptions and approval procedure.
- `UNRESOLVED_OWNER_APPROVALS.md` — owner approvals and release gates.
- `TEST_RESULTS.md` — exact executed tests and limitations.
- `docs/held-claims.json` and `docs/product-field-conflicts.json` — retained hold/observation inventories.
- `docs/VISUAL_QA_CHECKLIST.md` — mandatory outstanding browser acceptance matrix.

Review the branch diff against main. Do not merge automatically.

## GitHub publication blocker

Local `website-v2` contains all implementation commits. Command-line push had no credentials. The connected GitHub integration confirmed read access to main but rejected branch creation with HTTP 403 (`Resource not accessible by integration`). No remote branch/PR was created. The deliverable includes a verified Git bundle and binary-capable patch series so an authorized repository writer can publish the exact commits without touching main.
