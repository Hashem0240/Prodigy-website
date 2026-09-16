# Prodigy Ventilation Systems

The **root static HTML/CSS/JavaScript website** is the production source. Serve this directory without a build step:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. GitHub Pages currently serves this static layout under `/Prodogy_enhanced/`.

## Prototype

`src/` and the existing React/Vite dependencies are retained as a non-production prototype/reference. `npm run dev` and `npm run build` are prototype commands, **not** the production static-site workflow. No React migration is part of website-v2.

## Engineering workflow and publication rules

Airflow requirement → System ESP → Fan capability check → Preliminary selection report.

- `data/fans-master.js` is the shared runtime source for model metadata, verified field overrides, pending observations, curves and source revisions.
- `data/fans-master.draft.js` is the original supplied staging inventory. It is retained for provenance and is **not loaded by the website**.
- `data/design-guidance.js` contains explicitly preliminary legacy ACH ranges, friction table and fitting coefficients; an engineering edition/source has not been supplied.
- `scripts/engineering.js` provides pure validation, continuous bilinear friction interpolation, duty checks and fixed-system intersections.
- `scripts/product-data.js` retains each page's original display values while fields are pending. It substitutes only explicitly verified field values, including their display units.
- `scripts/fan-chart.js` shows unsmoothed legacy curves with a pending label until approved curves are supplied. Selector and PDF never use those legacy curves.
- `scripts/selection-report.js` creates a preliminary English PDF with verified technical fields only. Non-Latin project references are explicitly referred back to the website; embedded Arabic PDF typography is not supported in this release.

States are `verified`, `pending_review`, and `do_not_publish`. Do not approve data by changing a status alone. Record the controlled source, revision, units, pressure definition and speed. Approve each curve as well as its parent performance record. See `ENGINEERING_DATA_REVIEW.md`.

## Tests

```sh
npm install
npm run test:website
```

Tests use Node's test runner, jsdom 26.1.0 and jsPDF 2.5.1. The jsdom suite checks DOM interactions and local resources, not actual browser layout. Synthetic verified curves exist only in test fixtures and are never shipped as fan data.

For an isolated test installation that avoids the prototype dependencies:

```sh
npm install --prefix /tmp/prodigy-tests jsdom@26.1.0 jspdf@2.5.1
NODE_PATH=/tmp/prodigy-tests/node_modules node --test tests/*.test.cjs
```

Run the visual acceptance matrix in `docs/VISUAL_QA_CHECKLIST.md` before publishing. Read `TEST_RESULTS.md` for what has actually run and what remains blocked.

## Assets and dependencies

Original product media is preserved. `Media/optimized/` contains web derivatives and gallery thumbnails. Full gallery images load only on demand; video loads after selection and requires playback interaction. The original site’s five stock hero backgrounds are cached locally from their existing URLs, recorded in `docs/external-media-check.json`.

jsPDF 2.5.1 is vendored with its MIT license. Product and selector charts use native SVG, eliminating the previous unpinned Chart.js CDN dependency. Font Awesome remains pinned at version 6.0.0 on its existing CDN.

## Hosting and review

`website-v2` is a review branch. Do not merge or deploy automatically. `main` remains unchanged.

No canonical URL is declared pending the owner’s final-domain decision. The sitemap uses the current GitHub Pages URL explicitly supplied for this task. Regenerate it from `docs/sitemap.template.xml` when a final site base is confirmed. `robots.txt` is effective only when served at the hosting origin's root; GitHub Pages project-path robots files do not control the entire origin.

The contact form opens an email client and does not claim server-side delivery. A real form backend requires a separately configured service.
