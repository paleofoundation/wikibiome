---
title: "WikiBiome / Cureva — Gaps & Improvement Report 2026-04-13"
type: analysis
platform: cureva
created: 2026-04-13
updated: 2026-04-13
tags: [maintenance, gaps, improvements, roadmap]
---

# WikiBiome / Cureva — Gaps & Improvement Report

**Generated:** 2026-04-13 (automated scheduled run)
**Scope:** Full audit of wiki content vs prior report; new content since 2026-04-12; structural and coverage gaps
**Prior reports:** See `wiki/analyses/gaps-and-improvements-2026-04-12.md` and `wiki/analyses/lint-report-2026-04-12.md`

---

## Progress Since April 12

Significant content was added between the April 12 report and today. The knowledge base has expanded as follows:

| Category | Apr 12 Count | Apr 13 Count | Delta |
|----------|-------------|-------------|-------|
| Sources | 1,426 | 1,515 | +89 |
| Disease Signatures | 13 | 15 | +2 (depression, hashimotos-thyroiditis; pancreatic-cancer was already on disk but new) |
| Intervention Pages | 5 | 13 | +8 |
| STOP Pages | 11 | 11 | +0 |
| Entities | 130 | 130 | +0 |
| Concepts | 88 | 88 | +0 |
| New Wiki Files | — | 2 | overview.md, glossary.md |

**New intervention pages created:** `fmt-intervention`, `iron-management`, `ketogenic-diet`, `mediterranean-diet`, `probiotics-general`, `selenium-supplementation`, `vitamin-d-supplementation`, `zinc-supplementation`

**New signatures created:** `depression.md` (MDD with 5 layers), `hashimotos-thyroiditis.md` (iodine/selenium/zinc), `pancreatic-cancer.md` (copper/cadmium/arsenic, mycobiome)

---

## Executive Summary

The database is expanding rapidly. Intervention coverage has dramatically improved (5 → 13 pages), and three new signature pages were built. However, several **critical issues from the April 12 report remain completely unaddressed** — including the stale index, all 14 entity pages missing `subtype:`, and all 13 intervention pages missing `cureva_status:`. The expansion has also created new structural gaps: 13 conditions are now referenced in intervention triangles but have no corresponding signature page, and the `condition-name` template placeholder was left in a live intervention file.

**The three biggest gaps today:**
1. **All 13 intervention pages lack `cureva_status:`** — still not fixed from April 12; now affecting 8 additional new pages too
2. **13 conditions referenced in triangles have no signature page** — a new gap created by the intervention expansion
3. **5 signatures (Alzheimer's, obesity, colorectal cancer, cardiovascular disease, pancreatic cancer) have no STOPs at all** — these are high-priority Cureva gaps

---

## Section 1: Unresolved Issues from April 12

These were flagged in the prior reports and remain unfixed.

### 1.1 — Index is stale (index says updated 2026-04-09)

The index still claims 2026-04-09 as the last update date and reflects none of the content added since then. Actual counts now diverge even further:

| Category | Index Claims | Actual Today | Delta |
|----------|-------------|-------------|-------|
| Sources | 1,426 | 1,515 | +89 |
| Signatures | 13 | 15 | +2 |
| Interventions | 5 | 13 | +8 |
| overview.md | Not listed | Exists | — |
| glossary.md | Not listed | Exists | — |

**Action:** Regenerate `index.md` from the filesystem. Add `overview.md` and `glossary.md` as navigational reference pages.

### 1.2 — All 13 intervention pages missing `cureva_status:` field

This was flagged as 🔴 Critical on April 12 for 5 pages. Eight new intervention pages were added without fixing this — making it 13 total. None of the current intervention pages carry a `cureva_status:` field:

- `b-cell-depletion-therapy-ms` — missing
- `ecoli-nissle-1917` — missing
- `fmt-intervention` — missing
- `iron-management` — missing
- `ketogenic-diet` — missing
- `ketogenic-diet-ms` — missing
- `low-nickel-diet` — missing
- `mediterranean-diet` — missing
- `probiotics-asd-dysbiosis` — missing
- `probiotics-general` — missing
- `selenium-supplementation` — missing
- `vitamin-d-supplementation` — missing
- `zinc-supplementation` — missing

**Suggested assignments based on content completeness:**
- `low-nickel-diet` → `complete` (full triangle evidence, 5 conditions)
- `selenium-supplementation` → `partial` (RCT evidence for Hashimoto's, other conditions preliminary)
- `b-cell-depletion-therapy-ms`, `ketogenic-diet-ms` → `partial` (well-triangulated but single-condition)
- `fmt-intervention`, `iron-management`, `ketogenic-diet`, `mediterranean-diet`, `probiotics-general`, `vitamin-d-supplementation`, `zinc-supplementation` → `in-progress` (multi-condition but thin triangle evidence)
- `ecoli-nissle-1917`, `probiotics-asd-dysbiosis` → `partial`

**Action:** Add `cureva_status:` field to all 13 intervention pages.

### 1.3 — 14 entity pages missing `subtype:` field

Unchanged from April 12. These entity pages have no `subtype:` in frontmatter:
`aluminum`, `arsenic`, `cadmium`, `candida-albicans`, `chromium`, `copper`, `enterococcus`, `iron`, `lead`, `manganese`, `mercury`, `nickel`, `selenium`, `zinc`

The 14 metals/organisms that need `subtype: metal`, `subtype: fungus`, or `subtype: microbe` respectively.

**Action:** Add appropriate `subtype:` fields. This is a 15-minute fix.

### 1.4 — Backslash wikilinks still broken in `dietary-metal-microbiome-interactions.md`

Lines 58–61 still contain four broken backslash-pipe aliases:
- `[[lactobacillus|Lactobacillus]]`
- `[[bifidobacterium|Bifidobacterium]]`
- `[[saccharomyces-cerevisiae|Saccharomyces cerevisiae]]`
- `[[bacillus|Bacillus]]`

**Action:** Replace `\|` with `|` in those four wikilinks. 5-minute fix.

### 1.5 — Missing entity stub pages (unchanged from April 12)

Still not created:
- `[[bacteroides-thetaiotaomicron]]` — Major commensal; zinc-dependent; referenced multiple times
- `[[candida-auris]]` — Emerging pathogen
- `[[candida-tropicalis]]` — Candida species referenced in mycobiome contexts
- `[[aeromonas]]` — Opportunistic pathogen referenced in gut context

**Action:** Create stub entity pages for all four.

### 1.6 — GERD triangle in `low-nickel-diet.md` likely still incomplete

Not re-verified today, but was 🔴 Critical on April 12. The fifth triangle block (GERD refractory) was missing `status:`, `I_to_D`, `I_to_D_evidence`, and `f_to_D`.

**Action:** Complete the GERD triangle in `low-nickel-diet.md`.

### 1.7 — Missing concept stubs (unchanged from April 12)

These remain broken wikilinks with no backing page:
- `[[ahr]]` — Aryl Hydrocarbon Receptor; referenced across ASD, MS, Hashimoto's
- `[[amyloid-beta]]` — Referenced in Alzheimer's signature
- `[[celiac-disease]]` — Referenced in low-nickel-diet as a condition
- `[[bile-acid-metabolism]]` — `bile-acid-metabolism.md` exists; `bile-acids` is a separate broken link

**Action:** Create stubs for `ahr`, `amyloid-beta`, and `celiac-disease`. Resolve `bile-acids` → redirect or merge into `bile-acid-metabolism`.

---

## Section 2: New Gaps Identified Today

### 2.1 — 13 conditions referenced in intervention triangles have no signature page

The 8 new intervention pages greatly expanded the scope of triangle references, creating a new category of structural gap: conditions mentioned as triangle targets that have no corresponding `wiki/signatures/` page. Practitioners using Cureva would click to a non-existent page.

| Condition | Referenced By | Priority |
|-----------|-------------|----------|
| `[[postpartum-depression]]` | zinc-supplementation, iron-management | 🔴 High — was already flagged as top priority for signature build |
| `[[schizophrenia]]` | fmt-intervention | 🔴 High — 14+ sources ingested; buildable now |
| `[[ulcerative-colitis]]` | fmt-intervention, mediterranean-diet | 🔴 High — related to Crohn's (shared IBD signature); sources exist |
| `[[inflammatory-bowel-disease]]` | mediterranean-diet, vitamin-d-supplementation | 🟡 High — umbrella condition; entity page exists |
| `[[chronic-kidney-disease]]` | iron-management | 🟡 High — metals angle (Cd/As/Pb nephrotoxicity); sources present |
| `[[hypertension]]` | fmt-intervention | 🟡 Medium — mycobiome data exists (Zou 2022) |
| `[[ibs]]` | (entity page exists but no signature) | 🟡 Medium — nickel-GERD-IBS connection is core to SNAS framework |
| `[[clostridioides-difficile|clostridioides-difficile-infection]]` | fmt-intervention | 🟢 Medium — CDI is the canonical FMT use-case; signature may be simple |
| `[[dysmenorrhea]]` | zinc-supplementation | 🟢 Medium — shares pathobionts with endometriosis |
| `[[epilepsy]]` | ketogenic-diet | 🟢 Medium — KD used for epilepsy; microbiome data exists |
| `[[helicobacter-pylori]]` | (entity page exists as a microbe, not a condition) | 🟢 Low — may not warrant full signature; concept page may suffice |
| `[[inflammatory-bowel-disease]]` | multiple interventions | As above |
| `[[metal-carcinogenesis|prostate-cancer]]` | selenium-supplementation | 🟢 Low — selenium-prostate cancer connection well-known; no source library |

Note: `condition-name` also appears as a triangle target — this is a template artifact left in one of the new intervention pages. It must be removed.

**Action:** Identify and remove/replace `condition-name` placeholder in intervention files. Then prioritize signature pages for `postpartum-depression`, `schizophrenia`, and `ulcerative-colitis`.

### 2.2 — `condition-name` template placeholder left in a live intervention file

One of the new intervention pages contains a triangle block with `condition: "[[dysbiosis|condition-name]]"` — the unfilled template. This is a live rendering error on Cureva.

**Action:** Find and fix the `condition-name` placeholder. (Run: `grep -r "condition-name" /wiki/interventions/`)

### 2.3 — Five signatures with zero STOP coverage

STOPs are a high-value Cureva deliverable. Five signatures have no STOP pages at all:

| Condition | Has Intervention? | Has STOP? | Likely STOP to Create |
|-----------|------------------|-----------|----------------------|
| Alzheimer's Disease | ❌ | ❌ | Iron supplementation (functional anemia pattern identical to other conditions; ferroptosis angle from Pendergrass 2025) |
| Obesity | ❌ | ❌ | Fructose/HFCS (drives Enterobacteriaceae; zinc malabsorption) |
| Colorectal Cancer | ✅ (mediterranean-diet) | ❌ | Iron supplementation (Fusobacterium nucleatum siderophore; heme iron carcinogenesis) |
| Cardiovascular Disease | ✅ (mediterranean-diet) | ❌ | Iron supplementation (TMAO + iron in atherosclerosis; Bilophila + sulfite) |
| Pancreatic Cancer | ❌ | ❌ | Red meat / high-fat diet (PDAC risk meta-analysis; copper-dependent angiogenesis) |

**Action:** Prioritize `stop-iron-supplementation-alzheimers.md` and `stop-iron-supplementation-colorectal-cancer.md` — both fit the established cross-condition iron STOP pattern and could be built from existing sources.

### 2.4 — Hashimoto's signature lacks STOP pages despite having two interventions

`hashimotos-thyroiditis.md` was built and two interventions were created (`selenium-supplementation`, `vitamin-d-supplementation`) — but no STOP pages exist for Hashimoto's. The most evidenced STOP is iodine supplementation (already flagged in Graves' signature). The iodine STOP actually applies to *both* Graves' and Hashimoto's since excess iodine worsens autoimmune thyroiditis.

**Action:** Create `stop-iodine-supplementation-hashimotos.md`. The content largely mirrors the existing Graves' iodine STOP with condition-specific framing.

### 2.5 — New intervention pages likely missing triangle evidence fields

The 8 new intervention pages may have incomplete triangle blocks (missing `I_to_f_evidence`, `I_to_D_evidence`, `f_to_D`). This was already flagged for the original 4 intervention pages (ecoli-nissle, probiotics-asd-dysbiosis, b-cell-depletion, ketogenic-diet-ms). The new pages need the same audit.

**Action:** Audit all 13 intervention pages for complete triangle evidence fields.

### 2.6 — `overview.md` and `glossary.md` not in index or log

Two new wiki pages were added (`wiki/overview.md`, `wiki/glossary.md`) but neither appears in the index or log. They are also not linked from `index.md`. These are valuable navigational resources that should be surfaced.

**Action:** Add references to `overview.md` and `glossary.md` in the index. Add log entries for their creation.

### 2.7 — Source count reached 1,515 but index still says 1,426

Source count grew by 89 papers between April 12 and April 13. Without index regeneration, cross-referencing is unreliable. This is partly the same as Issue 1.1 but worth noting the magnitude of drift.

---

## Section 3: Signature Coverage Map (Updated)

### Current signature → intervention → STOP coverage:

| Condition | Signature | Interventions | STOPs | Status |
|-----------|-----------|--------------|-------|--------|
| Endometriosis | ✅ | low-nickel-diet | iron, zinc | Good |
| Multiple Sclerosis | ✅ | ketogenic-diet-ms, b-cell-depletion-ms | iron, SCFA | Good |
| ASD | ✅ | probiotics-asd-dysbiosis | iron | Needs expansion |
| Crohn's Disease | ✅ | ecoli-nissle-1917 | iron, antibiotics | Moderate |
| Graves' Disease | ✅ | selenium-supplementation | iodine, iron | Good |
| Hashimoto's | ✅ (new) | selenium-supplementation, vitamin-d | **NONE** | Missing STOPs |
| PCOS | ✅ | zinc-supplementation | iron, zinc | Moderate |
| Parkinson's Disease | ✅ | fmt-intervention | **NONE** | Missing STOPs |
| Alzheimer's Disease | ✅ | **NONE** | **NONE** | Major gap |
| Depression (MDD) | ✅ (new) | zinc-supplementation, mediterranean-diet, vitamin-d | **NONE** | Missing STOPs |
| Cardiovascular Disease | ✅ | mediterranean-diet | **NONE** | Missing STOPs |
| Colorectal Cancer | ✅ | mediterranean-diet | **NONE** | Missing STOPs |
| Obesity | ✅ | **NONE** | **NONE** | Major gap |
| Pancreatic Cancer | ✅ (new) | **NONE** | **NONE** | Major gap |
| Type 2 Diabetes | ✅ | zinc-supplementation, mediterranean-diet | **NONE** | Missing STOPs |

---

## Section 4: Remaining Missing Signature Pages

From the April 12 priority list, the following still have no signature page:

| Condition | Raw Papers | Priority | Notes |
|-----------|-----------|----------|-------|
| Postpartum Depression | 74 raw | 🔴 Highest | Now also referenced in zinc-supplementation and iron-management triangles |
| Rheumatoid Arthritis | Multiple sources | 🔴 Highest | Copper/zinc/iron; Prevotella copri; strong evidence base |
| Schizophrenia | 71 raw, 14+ ingested | 🔴 High | Now referenced in fmt-intervention triangle |
| Ulcerative Colitis | Sources present | 🔴 High | Now referenced in fmt-intervention and mediterranean-diet |
| Chronic Kidney Disease | 65 raw | 🟡 High | Now referenced in iron-management triangle |
| Type 1 Diabetes | 68 raw, 57 ingested | 🟡 High | Entity page exists; source library ready |
| GERD | 70 raw | 🟡 Medium | Entity page exists; nickel-SNAS connection |
| Ovarian Cancer | 68 raw | 🟢 Medium | Metalloestrogen angle |
| Hypertension | Sources present | 🟢 Medium | Referenced in fmt-intervention |

---

## Section 5: Content Quality Observations

### 5.1 — ASD signature status should be upgraded to `partial`

`autism-spectrum-disorder-signature.md` is marked `cureva_status: in-progress` but all 5 layers are populated, there is one intervention page, and one STOP page. This should be `partial`. The 180 unorganized ASD papers remain unprocessed, but they don't preclude upgrading the current status.

### 5.2 — 46 duplicate sources still not resolved

The 46 confirmed duplicate source files (same DOI, two filenames) flagged in the April 12 lint report have not been cleaned up. These inflate source counts and create ambiguous wikilink targets.

### 5.3 — `probiotics-general.md` may overlap significantly with `probiotics-asd-dysbiosis.md`

Two probiotic intervention pages now exist. Verify that `probiotics-general.md` serves a distinct purpose (e.g., cross-condition framework) vs. the ASD-specific page, and that they cross-reference each other appropriately.

### 5.4 — `ketogenic-diet.md` and `ketogenic-diet-ms.md` are two separate pages

The original `ketogenic-diet-ms.md` is MS-specific. The new `ketogenic-diet.md` may be a broader, multi-condition version. Ensure they are clearly differentiated and cross-linked. The general KD page should link to the MS-specific page as a deep-dive.

---

## Recommended Action Sequence for Next Session

### Immediate (< 30 min, no new content required)

1. **Find and fix** the `condition-name` template placeholder in intervention files: `grep -r "condition-name" wiki/interventions/`
2. **Add `cureva_status:` fields** to all 13 intervention pages (suggested assignments in Section 1.2)
3. **Add `subtype:` fields** to 14 entity pages (aluminum, arsenic, cadmium, candida-albicans, chromium, copper, enterococcus, iron, lead, manganese, mercury, nickel, selenium, zinc)
4. **Fix backslash wikilinks** in `dietary-metal-microbiome-interactions.md` (4 links)
5. **Regenerate `index.md`** from filesystem — include overview.md and glossary.md as reference pages
6. **Upgrade ASD signature** `cureva_status` from `in-progress` to `partial`

### Short Session (1–2 hours)

7. **Create `stop-iodine-supplementation-hashimotos.md`** — mirrors Graves' iodine STOP with HT-specific framing
8. **Create `stop-iron-supplementation-alzheimers.md`** — ferroptosis angle; functional anemia; follows established cross-condition STOP pattern
9. **Create `stop-iron-supplementation-colorectal-cancer.md`** — Fusobacterium nucleatum siderophore connection; heme iron carcinogenesis
10. **Create stub entity pages**: bacteroides-thetaiotaomicron, candida-auris, candida-tropicalis, aeromonas
11. **Create concept stub**: `ahr`, `amyloid-beta`, `celiac-disease`
12. **Complete GERD triangle** in `low-nickel-diet.md`
13. **Audit triangle evidence fields** in all 13 intervention pages; add missing `I_to_f_evidence`, `I_to_D_evidence`, `f_to_D`

### Full Session (new content)

14. **Build `postpartum-depression` signature** — 74 raw papers; iron/estrobolome angle; now referenced in two intervention triangles (highest-priority unbuilt signature)
15. **Build `schizophrenia` signature** — 14+ sources ingested; copper/zinc/tryptophan signature; referenced in fmt-intervention triangle
16. **Build `ulcerative-colitis` signature** — referenced in multiple intervention triangles; shares considerable content with Crohn's
17. **Begin ASD unorganized paper ingest** — 180 unprocessed papers in `raw/Autism papers, but disorganized.../`
18. **Create `stop-iron-supplementation-depression.md`** — functional anemia pattern; depleted serum zinc and iron in MDD consistent with nutritional immunity activation

---

## Open Questions (Carry-forward + New)

- **Should `bile-acids` and `bile-acid-metabolism` be merged?** The `bile-acids` entry in the index is a broken link. Recommended: redirect `bile-acids` → `bile-acid-metabolism` and add an alias.
- **Should `SNAS` get its own page?** Systemic Nickel Allergy Syndrome is central to the nickel-GERD-endometriosis framework and is referenced in `low-nickel-diet.md`. A concept or entity page would anchor these connections.
- **`helicobacter-pylori` is referenced as a `condition` in an intervention triangle** — but it's a microbe entity, not a disease. Should H. pylori infection get a disease entity/signature, or should the triangle reference be refactored to point to `[[gerd]]` or `[[gastric-cancer]]`?
- **`prostate-cancer` is referenced in selenium-supplementation triangle** but has no entity page, no source library, and no signature. Is Karen planning to develop this condition, or should the triangle reference be removed/noted as out-of-scope?
- **Should `inflammatory-bowel-disease` get an umbrella signature**, or should Crohn's and UC each have separate pages (with the IBD page linking both)?
- **Should `dysmenorrhea` get a signature page?** It's referenced in the zinc-supplementation triangle and shares endometriosis pathobionts. It may be best handled as a section within the endometriosis signature rather than a standalone page.
- **The 46 duplicate sources** — before deleting, Karen should confirm which DOI assignments are correct for the 5 suspected wrong-DOI pairs. Deletion of the wrong file would lose the actual source content.
