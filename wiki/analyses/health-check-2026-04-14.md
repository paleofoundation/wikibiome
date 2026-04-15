---
title: "Wiki Health Check — 2026-04-14"
type: analysis
created: 2026-04-14
updated: 2026-04-14
tags: [maintenance, health-check, lint, automated]
---

# Wiki Health Check — April 14, 2026

**Automated run.** Scope: full wiki (1,515 sources + 273 content pages).

This report covers what improved since the April 13 lint, what remains unresolved, and what is newly flagged today.

---

## Summary Table

| Category | Index Claims | Actual | Status |
|----------|-------------|--------|--------|
| Sources | 1,515 | 1,515 | ✅ Accurate |
| Entities | 130 | 135 | 🔴 Stale (+5) |
| — Metals/Metalloids | 17 | 17 | ✅ |
| — Microbes | 80 | 82 | 🟡 Stale (+2) |
| — Fungi | 4 | 6 | 🔴 Stale (+2) |
| — Archaea | 1 | 1 | ✅ |
| — Diseases | 28 | 29 | 🟡 Stale (+1) |
| Concepts | 88 | 90 | 🟡 Stale (+2) |
| Disease Signatures | 15 | 15 | ✅ Accurate |
| Interventions | 13 | 13 | ✅ Accurate |
| STOPs | 11 | 14 | 🔴 Stale (+3) |
| Analyses | 10 | 10 | ✅ Accurate |

**Index must be updated:** Entities (+5), Concepts (+2), STOPs (+3).

---

## 🔴 Critical Issues

### 1. All 1,515 Source Pages Missing v2 Frontmatter Fields

Every source page in the vault is missing the following v2-required fields:

- `evidence_level` — 0/1,515 populated
- `karen_brain_primitives` — 0/1,515 populated
- `key_findings` — 0/1,515 populated
- `metals_discussed` — 0/1,515 populated
- `taxa_discussed` — 0/1,515 populated

**Impact:** Cureva's pipeline cannot filter sources by evidence level or reasoning primitive. Cross-condition pattern detection cannot run. This is the known Priority 5 migration backlog.

**Action:** Batch inference run needed. These fields can be inferred programmatically from existing page content (evidence level from study design language, primitives from metals/taxa mentioned). See CLAUDE.md §11 Migration Plan.

**Grep command used:** `grep -rl "^evidence_level:" wiki/sources/ | wc -l` → 0

---

### 2. Akkermansia Misspelling in Parkinson's Signature — Still Unresolved

`parkinsons-disease.md` references `[[akkermansia-mucinicola]]` — this entity does not exist. The correct name is `[[akkermansia-muciniphila]]`.

**Occurrences:** 2 uses in `parkinsons-disease.md` (taxonomic signature section and virulence table).

**Fix:** Find/replace `akkermansia-mucinicola` → `akkermansia-muciniphila` in `wiki/signatures/parkinsons-disease.md`.

---

### 3. DOI Quality Issues in Source Pages

| Issue | Count |
|-------|-------|
| `doi: ""` (empty) | 28 |
| `doi: "various"` | 24 |
| `doi: "N/A"` | 2 |
| **Total problematic** | **54** |

Sources with `doi: "various"` are typically batch-summary pages created before individual paper ingestion. Sources with empty DOIs need manual lookup or should be flagged as `doi: "not yet verified"` per v2 spec.

**Notable examples:** `metabolic-pathways-2023-2025-gut-microbiome-t1d.md`, `fmt-2025-promising-treatment-t2d-insulin-resistance.md`, `high-fiber-diet-2025-gut-microbiome-diabetes-interventions.md`

---

## 🟡 Significant Gaps

### 4. Index Stale — 5 Entity + 2 Concept + 3 STOP Pages Not Listed

**Missing from index entity listings:**
- Entities: 5 new pages created since last index update (actual 135 vs claimed 130). The new fungi/archaea entities (candida-albicans, candida-auris, candida-tropicalis, debaryomyces, methanobrevibacter-smithii, saccharomyces-cerevisiae, torulaspora) account for the discrepancy.
- Concepts: 2 new concept pages not in index (actual 90 vs claimed 88).

**Missing from index STOP listings (3 STOPs not included):**
- `[[stop-iodine-supplementation-hashimotos]]`
- `[[stop-iron-supplementation-alzheimers]]`
- `[[stop-iron-supplementation-colorectal-cancer]]`

---

### 5. Seven Entity Pages Missing Core v2 Fields

The following entity pages (all fungi/archaea added recently) are missing `seo_target`, `wikipedia_differentiation`, and `last_substantive_update`:

- `candida-albicans.md`
- `candida-auris.md`
- `candida-tropicalis.md`
- `debaryomyces.md`
- `methanobrevibacter-smithii.md`
- `saccharomyces-cerevisiae.md`
- `torulaspora.md`

These are high-value pages (Candida species appear in multiple signatures). Each needs an `seo_target` query and a one-line `wikipedia_differentiation` statement before WikiBiome deployment.

---

### 6. Six Intervention Pages Missing `karen_brain_primitives` and `last_substantive_update`

The following intervention pages were created without full v2 frontmatter:

- `mediterranean-diet.md`
- `probiotics-asd-dysbiosis.md`
- `probiotics-general.md`
- `selenium-supplementation.md`
- `vitamin-d-supplementation.md`
- `zinc-supplementation.md`

These are all clinically important pages. Missing `karen_brain_primitives` means Cureva cannot retrieve them by pipeline step.

---

### 7. Seven Signature Pages With No Linked Interventions

The following signature pages have `validated_interventions: []`:

- `alzheimers-disease.md`
- `autism-spectrum-disorder-microbiome-signature.md`
- `cardiovascular-disease.md`
- `colorectal-cancer.md`
- `obesity.md`
- `parkinsons-disease.md`
- `type-2-diabetes.md`

**Impact:** Cureva cannot surface intervention recommendations for these conditions. These represent 7 of the 15 signatures — nearly half the platform's clinical value is blocked.

**Priority order by source library size:** Type-2 Diabetes (30 sources), Parkinson's (118 sources in vault), Alzheimer's (large library), CRC, CVD, Obesity, ASD (173 sources — largest single condition library).

---

### 8. Eight Signature Pages With No Linked STOPs

Signatures with `stops: []` or missing stops field:

- `alzheimers-disease.md`
- `autism-spectrum-disorder-microbiome-signature.md`
- `cardiovascular-disease.md`
- `colorectal-cancer.md`
- `depression.md` *(field absent from frontmatter)*
- `obesity.md`
- `parkinsons-disease.md`
- `type-2-diabetes.md`

**Note on `depression.md`:** The `validated_interventions` and `stops` fields are absent from the frontmatter entirely (not just empty arrays). This needs to be added.

---

### 9. All 29 Disease Entities Missing `signature_page` Frontmatter Field

Every disease entity page is missing the `signature_page:` field in frontmatter. This field enables platform routing (WikiBiome → Cureva cross-link). Even for diseases without a signature yet, the field should be present as blank or pointing to a planned page.

**Disease entities that DO have a companion signature:** alzheimers, autism-spectrum-disorder, cardiovascular-disease, colorectal-cancer, crohns-disease, depression, endometriosis, graves-disease, hashimotos-thyroiditis, multiple-sclerosis, obesity, pancreatic-cancer, parkinsons-disease, pcos, type-2-diabetes (15 total).

---

### 10. All 90 Concept Pages Missing v2 Fields

The entire concept library (90 pages) is missing:
- `karen_brain_primitives` — 0/90
- `seo_target` — 0/90
- `last_substantive_update` — 0/90

This is a known Priority 6 migration item. Concepts without `karen_brain_primitives` cannot be retrieved by Cureva's pipeline step.

---

### 11. 118/135 Entity Pages Missing `source_count` Field

Only 17 entity pages have a `source_count` field. The remaining 118 need this added. Some that do have it show mismatches (e.g., `aluminum.md` declares `source_count: 14` but has an inline sources list in different format — needs verification).

---

## 🟢 Lower Priority Observations

### 12. High-Priority Diseases Lacking Signature Pages

The following diseases have large source libraries but no companion signature page. These represent significant untapped Cureva value:

| Disease | Sources Referencing It |
|---------|------------------------|
| Type 1 Diabetes | ~99 |
| Chronic Kidney Disease | ~97 |
| Postpartum Depression | ~40+ condition-matched |
| Schizophrenia | ~66 |
| Ovarian Cancer | ~75 |
| Hypertension | ~48 |
| GERD | ~41 |
| Breast Cancer | ~17 |
| Ulcerative Colitis | ~12 |
| Rheumatoid Arthritis | ~12 |
| IBS | ~8 |
| Celiac Disease | ~3 |

**Recommendation:** Prioritize Type 1 Diabetes, CKD, and Postpartum Depression signatures next — each has 40+ sources and a complete entity page already in place.

---

### 13. Missing Concept and Entity Pages Referenced by Wikilinks

The following pages are linked from signatures/entities but do not exist:

**Concepts/entities that need pages:**
- `[[bile-acids]]` (concept — links exist in multiple signatures; `bile-acid-metabolism.md` exists but not `bile-acids.md`)
- `[[dietary-fiber]]` (concept)
- `[[firmicutes]]` (should be entity — phylum-level)
- `[[hbot]]` (intervention linked from endometriosis signature)
- `[[lactoferrin-supplementation]]` (intervention — linked from signatures)
- `[[faecalibacterium-restoration]]` (intervention — linked from crohns signature)
- `[[high-fiber-prebiotics]]` (intervention — linked from crohns signature)
- `[[berberine-methimazole]]` (intervention — linked from graves signature)
- `[[citrus-fruits]]` (intervention — linked from endometriosis signature)
- `[[low-fat-diet]]` (intervention — linked from endometriosis signature)
- `[[synbiotics-pdac]]`, `[[quercetin]]`, `[[ferrichrome-probiotics]]` (interventions in pancreatic-cancer signature)
- `[[acarbose-fiber-synergy]]`, `[[vitamin-d-probiotic-synergy]]`, `[[magnesium-supplementation]]` (interventions in pcos signature)

Several of these are referenced in signature `validated_interventions` lists but have no intervention page — meaning the signature links are broken.

---

### 14. Near-Orphan Entity: `lachnospira.md`

`lachnospira.md` has only 1 inbound link. `lachnospiraceae.md` is the more commonly referenced entity. This may be a duplicate or a page that needs promotion into more signature pages.

---

## ✅ Issues Resolved Since April 13

- **Backslash-broken wikilinks** in `dietary-metal-microbiome-interactions.md` — ✅ Fixed
- **Metal entity pages missing `subtype:` field** — ✅ All metal/metalloid entities now have subtype
- **Missing entity stubs** (bacteroides-thetaiotaomicron, candida-auris, candida-tropicalis, aeromonas) — ✅ Stub pages now exist (though lacking full v2 fields)
- **Index source count** — ✅ 1,515 accurate
- **All 15 signature pages have full v2 confidence blocks** — ✅ Confirmed
- **All 14 STOP pages have complete frontmatter** — ✅ Confirmed
- **New ASD-related stops added** (stop-iron-supplementation-asd) — ✅ Confirmed

---

## Action Priority Queue

**Immediate (before next content session):**
1. Fix `akkermansia-mucinicola` → `akkermansia-muciniphila` in `parkinsons-disease.md` (2 occurrences)
2. Update index: add 5 entities, 2 concepts, 3 STOPs to listings; update counts table
3. Add `validated_interventions` and `stops` fields to `depression.md` frontmatter

**High priority (next 1–2 sessions):**
4. Add `karen_brain_primitives` and `last_substantive_update` to 6 intervention pages
5. Add `seo_target`, `wikipedia_differentiation`, `last_substantive_update` to 7 fungi/archaea entity pages
6. Create intervention pages for conditions listed in signatures but lacking pages (lactoferrin-supplementation, hbot, faecalibacterium-restoration, berberine-methimazole, high-fiber-prebiotics)
7. Add `signature_page:` field to all 29 disease entity frontmatters

**Medium priority (migration batch work):**
8. Add `signature_page` links for the 15 diseases with existing signatures
9. Begin source page v2 migration: batch-infer `evidence_level`, `karen_brain_primitives`, `metals_discussed` for highest-traffic condition source libraries (start with Parkinson's 118, ASD 173, T2D 30)
10. Add `source_count` field to 118 entity pages missing it

**Longer term:**
11. Build signature pages for T1D, CKD, Postpartum Depression, Schizophrenia (high source support)
12. Add `karen_brain_primitives` and `seo_target` to all 90 concept pages
13. Resolve 54 source pages with problematic DOIs (empty, "various", "N/A")

---

*Automated health check — 2026-04-14. Grep commands used are noted inline. No content was modified during this run.*
