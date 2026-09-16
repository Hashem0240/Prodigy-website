# Unresolved approvals and release gates

The implementation does not require these approvals to run in preliminary mode. They are required before final technical publication or submittal use.

| Approval | Current treatment |
|---|---|
| Controlled HS and MS datasheets and curve revisions, all speeds | All fan performance pending_review; no suitability claims |
| HS-125P / MS-125M approved curves | Models included in review results, not activated for selection |
| HS-150P RPM/current and all newly recorded product/family/PDF conflicts | Every observed variant retained; no number chosen |
| MS-250M pressure meaning and official curve | 570/660/670 Pa observations remain separate |
| ACH sources; friction-table method, air conditions and source edition; fitting K references; flexible-duct method | Transparent preliminary calculations only |
| Authorized certificates and model scope | Unsupported claims held; no certificate marks added |
| Accessory materials, sizes, insulation R-value, temperature/velocity and compliance ratings | Specifications withheld pending approved documentation |
| Cabinet fan construction, IP rating, claimed range and duty documentation | Unsupported claims held; legacy table values clearly preliminary |
| Approved Window Fan specifications and images | Coming-soon page |
| Official catalogue file/URL | Catalogue links absent |
| Final canonical production domain | No canonical tags; sitemap uses the supplied current GitHub Pages URL |
| Awards, project counts, satisfaction figures, certified staff and warranties | Unsupported claims held |

## Non-owner technical release gates

- Browser-rendered QA and before/after screenshots are **not completed**. The task browser blocked localhost and shared-file URLs. Its security policy forbids alternate routes to that blocked preview. See `docs/VISUAL_QA_CHECKLIST.md` for the required 552 page/width/language/theme combinations.
- Verify actual mobile layout, horizontal overflow, keyboard focus visibility, contrast and native PDF download in a supported preview before merging.
- GitHub Pages origin-level robots policy needs hosting confirmation; project-path robots.txt alone is not authoritative for the origin.

No merge or production deployment is authorized by this deliverable. The user requested a separate review branch; `main` must remain untouched.

## Repository access needed

The GitHub integration lacks permission to create the requested branch (HTTP 403). Enable repository Contents write access in an authorized connection, or have an authorized maintainer import the supplied bundle and push `website-v2`. This is an access blocker, not a request to approve disputed engineering values. No remote branch or PR exists from this task yet.
