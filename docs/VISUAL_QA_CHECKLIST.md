# Browser visual acceptance — not yet executed

The available task browser rejected localhost preview and shared-file URL access. These checks are **BLOCKED**, not passed. No screenshots were fabricated and no different browser was used to bypass the restriction.

Use an approved development preview with the repository's ordinary static HTTP server. Compare the baseline `f4205e13f04d98d9274868a314c8257d04dca6ef` with `website-v2` without changing `main`.

Required matrix: 23 pages × 6 widths × 2 languages × 2 themes = **552 combinations**.

Widths: **360, 390, 430, 768, 1024, 1440 px**.
Languages: English/LTR and Arabic/RTL. Themes: light and dark.

Pages: Home, Products, Accessories, Inline Duct Fan, Mixed Flow index, all six HS detail pages, Backward Centrifugal index, all six MS detail pages, Cabinet Fan, Window Fan, Airflow Calculator, ESP Calculator and Fan Selector.

For each combination:

- [ ] No horizontal **page** overflow; technical tables scroll within their own wrapper.
- [ ] Text, product images, native SVG curves and controls render without clipping.
- [ ] Header/footer and all navigation remain usable; dropdown works after desktop-to-mobile resize.
- [ ] No console errors or CSS/JS/image/font 404 responses.
- [ ] Visible focus, tab order, Escape to close, dropdown ArrowDown and mobile menu states work.
- [ ] Language switching updates dynamic calculation results; model numbers/units remain intelligible in RTL.
- [ ] Adequate contrast in both themes and reduced-motion behavior.
- [ ] Gallery starts with first image, loads subsequent full images only on selection, and video has a poster and controls.

Workflow interaction:

- [ ] Invalid, empty, zero, negative and nonfinite input cannot leave a stale calculation or report available.
- [ ] Airflow → ESP preserves the full-precision flow; ESP → selector preserves flow and pressure.
- [ ] Manual selector entry works; no pending model returns SUITABLE.
- [ ] Native download produces the expected PDF, with image, duty graph, warning, assumptions, date and version. Verify printed page layout and English text.
- [ ] Confirm no pending curve/technical value appears as verified output.

Capture actual before/after screenshots at desktop 1440 px and mobile 390 px for Home, one HS product, ESP and Selector; include Arabic/dark examples. Record preview URL, browser, viewport, timestamp, findings and screenshot paths. Update TEST_RESULTS.md only after actual execution.
