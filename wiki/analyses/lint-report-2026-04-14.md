---
title: "WikiBiome Lint Report — 2026-04-14"
type: analysis
platform: cureva
created: 2026-04-14
updated: 2026-04-14
tags: [lint, health-check, maintenance]
---

# WikiBiome Lint Report — 2026-04-14

**Scope:** Full health check of 1,773 files (1,515 sources + 258 content pages)
**Run type:** Automated scheduled task

---

## Vault Snapshot

| Category | Count (Index) | Count (Actual) | Delta |
|----------|--------------|----------------|-------|
| Sources | 1,515 ✅ | 1,515 | — |
| Entities | 130 ❌ | 135 | +5 not indexed |
| — Metals/Metalloids | 17 ✅ | 17 | — |
| — Microbes | 80 ❌ | 82 | +2 not indexed |
| — Fungi | 4 ❌ | 6 | +2 not indexed |
| — Archaea | 1 ❌ | 1 (subtype: archaea, not archaeon) | minor |
| — Diseases | 28 ❌ | 29 | +1 not indexed |
| Concepts | 88 ❌ | 90 | +2 not indexed |
| Signatures | 15 ✅ | 15 (excl. template + JSON) | — |
| Interventions | 13 ✅ | 13 (excl. template) | — |
| STOPs | 11 ❌ | 14 (excl. template) | +3 not indexed |
| Analyses | 10 ✅ | 10 | — |

---

## 🔴 Critical Issues (Credibility / Structural Integrity)

### 1. Index Stale — 13 Pages Missing

The following pages exist on the filesystem but are not listed in `wiki/index.md`:

**Entities (5 missing):**
- `aeromonas`
- `bacteroides-thetaiotaomicron`
- `candida-auris`
- `candida-tropicalis`
- `celiac-disease`

**Concepts (2 missing):**
- `ahr`
- `amyloid-beta`

**STOPs (3 missing from index count):**
- `stop-iodine-supplementation-hashimotos`
- `stop-iron-supplementation-alzheimers`
- `stop-iron-supplementation-colorectal-cancer`

**Index also undercounts subtypes:** Fungi listed as 4 (actual 6); Archaea listed as 1 but the page uses `subtype: archaea` not `subtype: archaeon`; Diseases listed as 28 (actual 29); Microbes listed as 80 (actual 82).

**Action:** Update `wiki/index.md` with correct counts and missing page links.

---

### 2. Duplicate Source Files — 36 Duplicate DOIs (64 affected files)

36 distinct DOIs each appear in **two source pages**, meaning ~72 files are duplicates. An additional 28 source pages have **empty DOI fields** (`doi: ""`).

Sample duplicate pairs:
- `vangoitsenhoven-2020-microbiome-antibiotics-autoimmune` and `vangoitsenhoven-2020-microbiome-antibiotics-autoimmune-diseases` → both `doi: "10.1002/ncp.10489"`
- `safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis` and `safadi-2021-gut-dysbiosis-severe-mental-illness-meta-analysis` → both `doi: "10.1038/s41380-021-01032-1"`
- `kinross-2011-gut-microbiome-host-interactions-health-disease` and `kinross-2011-gut-microbiome-host-interactions-health` → both `doi: "10.1186/gm228"`

This issue was flagged in the April 12 and April 13 lint runs and **remains unresolved**. Content pages may be linking to the "wrong" copy of a paper.

**Action:** Manual review required. For each pair, determine which filename is canonical (prefer the more descriptive one), merge any content differences, delete the duplicate, and update all wikilinks pointing to the deleted filename.

---

### 3. `[[akkermansia-mucinicola]]` Misspelling in `parkinsons-disease.md`

The Parkinson's signature page references `[[akkermansia-mucinicola]]` twice (lines with `taxon:` and in the virulence enzyme table). The correct entity filename is `akkermansia-muciniphila.md`. This broken link has been flagged in two prior lint runs (April 12 and April 13) and remains unresolved.

**File:** `wiki/signatures/parkinsons-disease.md`
**Fix:** Replace `[[akkermansia-mucinicola]]` → `[[akkermansia-muciniphila]]`

---

### 4. Malformed Frontmatter — `pancreatic-cancer.md` Entity

The `wiki/entities/pancreatic-cancer.md` page has a `subtype:` field appearing at line 64 in body content (not just frontmatter). This appears to be a stray copy of frontmatter language inside a table or body section. Verify the body does not contain raw YAML fragments.

**File:** `wiki/entities/pancreatic-cancer.md`, line 64

---

### 5. Broken Wikilinks in Signature Pages — 606 Unique Targets Missing

A large number of wikilinks in signature pages point to pages that do not exist. 606 unique link targets could not be resolved. Examples:

- `[[inflammation|TNF-α]]`, `[[inflammation|IL-1β]]`, `[[inflammation|IL-6]]` in `alzheimers-disease.md`
- `[[firmicutes]]`, `[[dysbiosis|Pseudomonadota]]` in `autism-spectrum-disorder-signature.md`
- `[[metformin]]`, `[[lactoferrin-supplementation]]`, `[[nac-supplementation]]` in `crohns-disease.md`
- `[[dialister|Dialister invisus]]` in `colorectal-cancer.md`
- `[[high-fiber-prebiotics]]`, `[[short-chain-fatty-acids|tributyrin]]` in `crohns-disease.md`

Many of these are missing microbe entity stubs, missing concept pages for cytokines/immune molecules, or intervention pages not yet created. This is the highest-volume structural gap in the vault.

**Note:** Some of these may be intentional forward references for pages to be created. However, broken links degrade Cureva query reliability.

**Action:** Prioritize creating stubs for the most commonly-referenced missing targets. Consider a "missing entity stub" tracking page.

---

## 🟡 Significant Gaps (Platform Value / Completeness)

### 6. 14 Disease Entities Without Companion Signature Pages

The following disease entity pages exist on WikiBiome but have no corresponding `wiki/signatures/` page for Cureva. These represent the highest commercial gap in the vault:

`breast-cancer`, `celiac-disease`, `chronic-kidney-disease`, `gastric-cancer`, `gerd`, `hypertension`, `ibs`, `inflammatory-bowel-disease`, `ovarian-cancer`, `postpartum-depression`, `rheumatoid-arthritis`, `schizophrenia`, `type-1-diabetes`, `ulcerative-colitis`

Note: `ulcerative-colitis` is particularly notable — it is clinically related to both Crohn's and colorectal cancer (both of which have signatures) and shares significant metallomic and taxonomic overlap.

**Action (priority order):** ulcerative-colitis → rheumatoid-arthritis → type-1-diabetes → postpartum-depression → schizophrenia

---

### 7. Iron STOP Pages Missing for Parkinson's Disease and Depression

Both Parkinson's and Depression have signature pages with clear hepcidin elevation and siderophore-producing pathobionts documented. Iron supplementation STOP pages exist for 10 other conditions but are absent for these two.

This gap was flagged in the April 12 and April 13 lint runs and **remains unresolved**.

**Action:** Create `stop-iron-supplementation-parkinsons.md` and `stop-iron-supplementation-depression.md` using the established STOP template.

---

### 8. 6 Intervention Pages Missing `karen_brain_primitives` and `I_to_f_sources`

The following intervention pages lack both `karen_brain_primitives` (required for Cureva pipeline retrieval) and `I_to_f_sources` (required for complete triangle validation):

- `selenium-supplementation`
- `probiotics-general`
- `zinc-supplementation`
- `mediterranean-diet`
- `vitamin-d-supplementation`
- `probiotics-asd-dysbiosis`

The 4 "original" interventions (`low-nickel-diet`, `iron-management`, `ketogenic-diet-ms`, `ecoli-nissle-1917`, etc.) and the 5 newly created ones have these fields populated. The 6 above appear to be an intermediate cohort added after the first round of completions but before the second round of template discipline was established.

**Action:** Batch-add `karen_brain_primitives` and `I_to_f_sources` fields to these 6 pages.

---

### 9. `"landmark"` Used Without Criteria Verification (14 instances)

Per the quality controls in CLAUDE.md §2d, "landmark" is a classification requiring 3 of 5 verifiable criteria — not a compliment. There are 14 uses of "landmark" in signature and entity pages. Several of these may meet criteria (e.g., Jie 2017 ACVD is widely cited and changed how drug confounding is analyzed; Valles-Colomer 2019 is population-scale) but none have been formally evaluated against the criteria.

Studies using "landmark" without verification:
- Schilling et al. (2020) urine metallomics in PDAC — `pancreatic-cancer.md` entity + signature
- Jie et al. (2017) ACVD metagenomics — `cardiovascular-disease.md` entity + signature + `ruminococcus.md`, `roseburia.md`
- Jangi (2016) MS microbiome — `methanobrevibacter.md`, `butyricimonas.md`
- Valles-Colomer (2019) depression — `coprococcus.md`
- Coryell et al. (2018) arsenic/F. prausnitzii — `faecalibacterium-prausnitzii.md`
- Kouchaki et al. (2017) MS probiotic trial — `multiple-sclerosis.md` entity
- Rebelo et al. (2021) Enterococcus resistance — `enterococcus.md`
- ZIP8 A391T finding — `crohns-disease.md` signature

**Action:** Evaluate each use against the 5 criteria (§2d) and either confirm (with brief criteria note in a comment) or replace with "influential" / "widely-cited" / neutral language.

---

### 10. Missing Entity/Concept Pages Referenced in Content

Three types of entities are referenced in wiki content but have no page:
- **`snas`** — Systemic Nickel Allergy Syndrome. Referenced in `low-nickel-diet.md` intervention. Should be a concept or disease entity page.
- **`cerebral-palsy`** — 79+ raw papers in source library; no entity page, no signature page.
- **`bile-acids`** — `bile-acid-metabolism.md` concept exists, but direct `[[bile-acid-metabolism]]` links in content will resolve to nothing. Need an alias or redirect stub.

---

## 🟠 V2 Schema Migration Progress

The full v2 schema migration (CLAUDE.md §11) is ongoing. Current status:

### Priority 1: Signature Pages (15 pages) — MOSTLY COMPLETE ✅
- All 15 active signature pages have `confidence` per layer ✅
- All 15 have `associated_conditions` with `overlap_score` values ✅
- All 15 have `karen_brain_primitives` ✅
- `last_substantive_update` present on all 15 ✅
- **Remaining gap:** `[[akkermansia-mucinicola]]` misspelling in Parkinson's (item 3 above)

### Priority 2: Disease Entity Pages (29 pages) — COMPLETE ✅
- All 29 disease entities have `associated_conditions` in frontmatter ✅
- All 29 have `seo_target` and `wikipedia_differentiation` ✅
- All 29 have "Associated Conditions" section in body ✅
- `last_substantive_update` on all 29 ✅

### Priority 3: Metal/Microbe Entity Pages (99 pages) — LARGELY COMPLETE
- All 17 metal/metalloid entity pages have `subtype:` field ✅
- All 82 microbe entity pages have `subtype: microbe` ✅
- 7 fungal/archaea entity pages **missing** `seo_target` and `wikipedia_differentiation`: `torulaspora`, `debaryomyces`, `candida-tropicalis`, `candida-auris`, `saccharomyces-cerevisiae`, `methanobrevibacter-smithii`, `candida-albicans`
- All microbe entities have `conditions_enriched_in` populated ✅

### Priority 4: Intervention/STOP Pages — MOSTLY COMPLETE
- All 14 STOP pages have all required v2 fields ✅
- 6 intervention pages missing `karen_brain_primitives` + `I_to_f_sources` (item 8 above)
- All interventions have `cureva_status` ✅

### Priority 5: Source Pages (1,515 pages) — NOT YET STARTED 🔴
- **0 of 1,515** source pages have `evidence_level` field
- **0 of 1,515** have `karen_brain_primitives`
- **0 of 1,515** have `metals_discussed`
- **0 of 1,515** have `taxa_discussed`
- **0 of 1,515** have `key_findings`
- 1,001 of 1,515 **missing `library_category`**
- 1,001 of 1,515 **missing `condition`**
- All 1,515 have `platform` field ✅

This is the largest single migration item. Recommended approach: batch-infer `evidence_level` from study design keywords in existing summaries using a grep/regex pass.

### Priority 6: Concept Pages (90 pages) — NOT YET STARTED 🔴
- **0 of 90** concept pages have `karen_brain_primitives`
- **0 of 90** have `seo_target`
- **0 of 90** have `last_substantive_update`

---

## 🟢 Minor Issues

### 11. `pancreatic-cancer.md` Entity — Body Contains Raw "subtype:" Text (line 64)

The word "subtype" appears in line 64 of the entity body in the context "varies by PDAC molecular subtype: basal-like tumors…" — this is valid prose, not a malformed frontmatter fragment. The automated detector flagged it as a false positive. **No action needed.**

### 12. Empty DOIs on 28 Source Pages

28 source pages have `doi: ""`. These include theses, conference presentations, book chapters, and posters where no DOI exists by design (e.g., `pendergrass-2026-endometriosis-conference`, `novikova-2025-microbiome-derived-metabolites-parkinsons-thesis`). The field should be set to `doi: "N/A"` or `doi: "not-applicable"` rather than empty string, for clarity and to avoid false-positive DOI-validation alerts in future lint runs.

**Action:** Low-priority batch update; replace `doi: ""` with `doi: "N/A"` on non-journal source pages.

### 13. `wiki/index.md` Source Count Correct, But Update Date May Lag

Index `updated: 2026-04-13` is one day behind today. The counts for sources (1,515) are accurate, but entities, concepts, and STOPs are stale as documented above. After fixing the index page counts, update the `updated:` field to 2026-04-14.

---

## Progress Since April 13 Lint

| Issue | Apr 13 Status | Apr 14 Status |
|-------|--------------|---------------|
| Backslash-broken wikilinks in `dietary-metal-microbiome-interactions.md` | 🔴 Unresolved | ✅ **Fixed** |
| 12/19 metal entity pages missing `subtype:` field | 🔴 Unresolved | ✅ **Fixed** (17/17 have subtype) |
| All intervention pages missing `cureva_status` | 🔴 Unresolved | ✅ **Fixed** (all 13 have it) |
| 4 missing entity stubs (bacteroides-thetaiotaomicron, aeromonas, candida-auris, candida-tropicalis) | 🟡 Missing | ✅ **Created** |
| `[[akkermansia-mucinicola]]` misspelling in parkinsons-disease.md | 🟡 Unresolved | 🟡 **Still unresolved** |
| Iron STOP pages for Parkinson's and Depression | 🟡 Missing | 🟡 **Still missing** |
| Duplicate source files (46+) | 🟡 Unresolved | 🟡 **Still unresolved (now 36 DOIs = ~72 files)** |
| Index stale counts | 🔴 Severely stale | 🟡 **Partially stale** (sources correct; entities/concepts/STOPs off) |

**Net new issues found this run:**
- 606 broken wikilink targets in signature pages (large, pre-existing; first time quantified)
- 14 unverified "landmark" usages identified and inventoried

---

## Recommended Action Queue (Priority Order)

1. **Fix `[[akkermansia-mucinicola]]` → `[[akkermansia-muciniphila]]` in parkinsons-disease.md** — 2 occurrences, 5-minute fix, 3rd lint cycle unresolved.
2. **Update `wiki/index.md`** — Add 13 missing pages, correct all subcategory counts, update date to 2026-04-14.
3. **Create `stop-iron-supplementation-parkinsons.md` and `stop-iron-supplementation-depression.md`** — Pattern is established; use existing STOP pages as template.
4. **Add `karen_brain_primitives` and `I_to_f_sources` to 6 incomplete intervention pages** — Batch operation, ~30 minutes.
5. **Resolve duplicate source files** — 36 DOI pairs (~72 files). Requires manual review to identify canonical filename, merge content, delete duplicate, update wikilinks.
6. **Add `seo_target` and `wikipedia_differentiation` to 7 fungal/archaea entity pages** — Missing since original creation.
7. **Create `snas.md` entity/concept page** — Referenced in `low-nickel-diet.md`; condition has substantial source material.
8. **Create stub pages for highest-frequency broken wikilink targets** — Prioritize cytokines (`tnf-alpha`, `il-1beta`, `il-6`), phyla (`firmicutes`, `pseudomonadota`), and key metabolites.
9. **Build `ulcerative-colitis` signature page** — Highest-priority missing signature given its IBD overlap with Crohn's.
10. **Begin Priority 5 migration (source pages)** — Batch inference of `evidence_level` from study design keywords is the scalable path; start with a condition-specific batch (e.g., all Parkinson's sources).
