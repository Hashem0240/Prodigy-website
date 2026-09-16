# Test results

Date: 2026-09-16. Source under test: local `website-v2`, based on main `f4205e13f04d98d9274868a314c8257d04dca6ef`.

## Executed: 129 passing, 0 failing

```sh
NODE_PATH=/tmp/prodigy-qa/node_modules node --test --test-reporter=tap tests/*.test.cjs
```

Full output: `docs/test-results.tap`.

| Coverage | Result |
|---|---|
| 10 pure engineering/data tests | PASS |
| 23 production-page static checks | PASS |
| 92 page/language/theme DOM execution cases | PASS |
| 3 calculator/workflow interaction tests | PASS |
| 1 real jsPDF report-generation test | PASS |

Engineering coverage: volume/ACH, unit conversion, invalid/overflow values, bilinear interpolation, exact endpoints/out-of-range rejection, rectangular actual velocity, loss reconciliation, nonnegative losses, integer fitting quantities, zero pressure margin, domain rejection, all actual models held, pending-speed curve withholding, fixed-system intersections including tangencies and multiple intersections within one segment. Verified fixtures are synthetic and test-only.

Page checks: exactly one H1, unique titles, meta descriptions, header/footer presence, no dead `#` links, local src/href existence, fragment targets, no visible replacement characters. DOM execution checks: no jsdom script exceptions, saved language/theme, switching, menu expanded state and Escape, model SVG chart presence.

Workflow checks: invalid dimensions, displayed results and invalidation, flow-to-ESP URL, rectangular ESP-to-selection URL and pressure, all 12 selector models pending, report context cleared when inputs change.

PDF: real jsPDF library produces three pages and expected fields/warnings; conflicting legacy RPM excluded; ambiguous old pressure wording absent. Native browser download, image decoding/addition and PDF visual layout have not been verified in the blocked task browser.

Other executed checks:

- `git diff --check`: clean.
- `git diff main -- src`: empty; prototype unchanged.
- Local main and remote main observed at original baseline SHA.
- Five inherited stock-image URLs returned HTTP 200 and were cached locally.
- Representative Cabinet Fan and HS-150P WebP derivatives visually inspected as images.
- Cabinet image reduced from 12,309,370 to 95,636 bytes; all 35 product derivatives total 694,830 bytes versus 117,572,745 original bytes. Thumbnails and cached hero images are additional files; originals preserved.

## Blocked — not passed

- Browser-rendered tests at 360, 390, 430, 768, 1024 and 1440 px.
- All 552 visual page/width/language/theme combinations.
- Before/after screenshots, actual overflow measurement, contrast, actual browser keyboard focus and native PDF download.
- Browser network/console inspection and image/font decoding.

The supported browser rejected localhost and shared-file preview URLs; its policy disallowed alternate access to the blocked preview. jsdom has no layout engine and is **not** a substitute for these checks. Follow `docs/VISUAL_QA_CHECKLIST.md` before release.

## Remote publication

Command-line push failed: no GitHub credentials available. Connected GitHub read access succeeded and confirmed main, but branch creation failed with HTTP 403, `Resource not accessible by integration`. No remote website-v2 branch or PR was created by this task. Local commits and a verified Git bundle/patch handoff preserve all work. Publishing requires repository write access; no remote permissions were changed.
