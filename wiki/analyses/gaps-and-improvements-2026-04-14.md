---
title: "WikiBiome / Cureva — Gaps & Improvement Report 2026-04-14"
type: analysis
created: 2026-04-14
updated: 2026-04-14
tags: [maintenance, gaps, improvements, roadmap]
---

# WikiBiome / Cureva — Gaps & Improvement Report

**Generated:** 2026-04-14 (automated scheduled run)
**Scope:** Full audit of wiki content vs prior report; structural integrity checks; new opportunities identified
**Prior reports:** See `wiki/analyses/gaps-and-improvements-2026-04-13.md` and `wiki/analyses/lint-2026-04-13.md`

---

## Progress Since April 13

The April 13 session was highly productive. The remediation log documents significant structural work:

| Category | Apr 13 Count | Apr 14 Count | Delta |
|----------|-------------|-------------|-------|
| Sources | 1,515 | 1,515 | +0 |
| Signatures | 15 | 15 | +0 |
| Interventions | 13 | 13 | +0 |
| STOPs | 11 | 14 | +3 (alzheimers, colorectal-cancer, hashimotos) |
| Entities | 130 | 135 | +5 (bacteroides-thetaiotaomicron, candida-auris, candida-tropicalis, aeromonas, celiac-disease) |
| Concepts | 88 | 90 | +2 (ahr, amyloid-beta) |

**Schema work completed on April 13:**
- `cureva_status:` added to all 13 intervention pages ✅
- `subtype:` added to all 14 entity pages that were missing it ✅
- ASD signature upgraded to `cureva_status: partial` ✅
- GERD triangle in `low-nickel-diet.md` confirmed complete ✅
- All 15 signature pages upgraded to v2 schema (confidence per layer, associated_conditions, overlap scores) ✅
- All STOP pages upgraded to v2 ✅
- All metal, microbe, and disease entity pages upgraded to v2 ✅

---

## Executive Summary

April 13 resolved the majority of immediate schema gaps. However, the sprint created a new category of structural error: **three STOP pages were built but never wired back to their signature pages** — they exist as files but are functionally invisible to Cureva. Additionally, the index was not regenerated after the new entities and concepts were added, leaving counts wrong again. The backslash wikilink fix was also logged as complete but not actually applied.

**The three biggest gaps today:**
1. **4 orphaned STOP pages** — created April 13 but `stops:` fields in their signatures still say `[]` or reference the wrong filename
2. **Index is stale again** — entities (130 → actual 135), concepts (88 → actual 90), STOPs (11 → actual 14); new entities and concepts not in the entity/concept lists
3. **All 90 concept pages and all 1,515 source pages still missing `evidence_level` and `seo_target`** — the largest remaining v2 migration backlog

---

## Section 1: Unresolved Structural Issues

### 1.1 — 🔴 4 Orphaned STOP Pages (created Apr 13, not linked)

Four STOP pages were created on April 13 but the corresponding signature `stops:` fields were never updated. These files exist but are invisible within Cureva navigation.

| STOP File | Signature | Signature's `stops:` Field | Problem |
|-----------|-----------|--------------------------|---------|
| `stop-iron-supplementation-alzheimers.md` | `alzheimers-disease.md` | `stops: []` | Never linked |
| `stop-iron-supplementation-asd.md` | `autism-spectrum-disorder-microbiome-signature.md` | `stops: []` | Never linked |
| `stop-iron-supplementation-colorectal-cancer.md` | `colorectal-cancer.md` | `stops: []` | Never linked |
| `stop-iodine-supplementation-hashimotos.md` | `hashimotos-thyroiditis.md` | `stops: [stop-excess-iodine-supplementation-hashimotos]` | **Name mismatch** — signature references `stop-excess-iodine-supplementation-hashimotos` but file is `stop-iodine-supplementation-hashimotos.md` |

**Action:** Update `stops:` fields in all four signatures to reference the correct filenames.

### 1.2 — 🔴 1 Broken STOP Reference (file doesn't exist)

| Signature | References | Problem |
|-----------|-----------|---------|
| `pancreatic-cancer.md` | `stop-diagnostic-overclaiming-discovery-phase` | File does not exist. This is a placeholder concept, not a real STOP. Either create the page or remove the reference. |

The Hashimoto's name mismatch (above) is also a broken reference that will resolve once the `stops:` field is corrected.

**Action:** Either build `stop-diagnostic-overclaiming-discovery-phase.md` as a real STOP page (likely: "Do not recommend interventions for pancreatic cancer based on microbiome evidence alone at this stage — mycobiome data is preliminary"), or remove the reference from the signature `stops:` field.

### 1.3 — 🔴 Depression Signature Missing Required Frontmatter Fields

`depression.md` was built without `validated_interventions:` and `stops:` fields in its frontmatter. These are required by the v2 schema and would cause rendering errors in Cureva.

**Current state:** The signature page has `karen_brain_primitives: [1, 2, 3, 5]` but is missing both fields entirely.

**Suggested values based on content:**
- `validated_interventions: [zinc-supplementation, mediterranean-diet, vitamin-d-supplementation, fmt-intervention]` (these interventions reference depression in their triangles)
- `stops: []` (no STOP page yet built — see Section 3.3)

**Action:** Add both fields to `depression.md` frontmatter.

### 1.4 — 🔴 Backslash Wikilinks Still Broken in `dietary-metal-microbiome-interactions.md`

The April 13 log states this was fixed. It was not. Four backslash-pipe aliases remain in the file:

```
[[lactobacillus\|Lactobacillus]]
[[bifidobacterium\|Bifidobacterium]]
[[saccharomyces-cerevisiae\|Saccharomyces cerevisiae]]
[[bacillus\|Bacillus]]
```

**Action:** Replace `\|` with `|` on those four lines. This has been flagged in every report since April 12 — three reports and counting.

### 1.5 — 🟡 Index Stale Again (immediately after regeneration)

The index was regenerated on April 13, but new content added that same day was not captured. Current discrepancies:

| Category | Index Claims | Actual | Delta |
|----------|-------------|--------|-------|
| Entities | 130 | 135 | +5 missing |
| Concepts | 88 | 90 | +2 missing |
| STOPs | 11 | 14 | +3 missing |
| Entity list | Missing: bacteroides-thetaiotaomicron, candida-auris, candida-tropicalis, aeromonas, celiac-disease | — | — |
| Concept list | Missing: ahr, amyloid-beta | — | — |
| STOP list | Missing: stop-iron-supplementation-alzheimers, stop-iron-supplementation-colorectal-cancer, stop-iodine-supplementation-hashimotos | — | — |

Note: Fungi entity count is also different — entities now include `saccharomyces.md` in addition to `saccharomyces-cerevisiae.md`, and `candida-auris.md` and `candida-tropicalis.md` are new. The fungi count in the index should be updated.

**Action:** Regenerate `index.md` from the filesystem.

### 1.6 — 🟡 7 Entity Pages Missing `seo_target` (Fungi and Archaea)

The fungi and archaea entity pages were not included in the April 13 v2 migration batch. These 7 pages lack `seo_target:` in frontmatter:

- `candida-albicans.md`
- `candida-auris.md`
- `candida-tropicalis.md`
- `debaryomyces.md`
- `methanobrevibacter-smithii.md`
- `saccharomyces-cerevisiae.md`
- `torulaspora.md`

**Action:** Add `seo_target:` and `wikipedia_differentiation:` to all 7 pages.

---

## Section 2: Signature Coverage Map (Updated)

### Full Coverage Status — April 14

| Condition | Signature | Interventions Listed | STOPs Listed | Gap Status |
|-----------|-----------|---------------------|--------------|------------|
| Endometriosis | ✅ complete | low-nickel-diet | iron ✅, zinc ✅ | Good |
| Multiple Sclerosis | ✅ partial | ketogenic-diet-ms ✅, b-cell-depletion-ms ✅ | iron ✅, SCFA ✅ | Good |
| Graves' Disease | ✅ partial | selenium-supplementation ✅ | iodine ✅, iron ✅ | Good |
| PCOS | ✅ partial | zinc-supplementation ✅ | iron ✅, zinc ✅ | Good |
| Crohn's Disease | ✅ partial | ecoli-nissle-1917 ✅ | iron ✅, antibiotics ✅ | Good |
| Hashimoto's | ✅ partial | selenium-supplementation ✅, vitamin-d ✅ | **iodine (name mismatch)** | Fix linkage (1.1) |
| ASD | ✅ partial | — (referenced, not in field) | **iron (not linked)** | Fix linkage (1.1) |
| PCOS | ✅ partial | — | iron ✅, zinc ✅ | Needs intervention fields |
| Parkinson's Disease | ✅ partial | — (fmt-intervention refs it) | **NONE** | Needs STOP |
| Depression (MDD) | ✅ partial | — (missing field) | **NONE** (missing field) | Fix fields + build STOP |
| Alzheimer's Disease | ✅ partial | — | **iron (not linked)** | Fix linkage (1.1) |
| Cardiovascular Disease | ✅ partial | — (mediterranean-diet refs it) | **NONE** | Needs STOP |
| Colorectal Cancer | ✅ partial | — (mediterranean-diet refs it) | **iron (not linked)** | Fix linkage (1.1) |
| Obesity | ✅ partial | — | **NONE** | Major gap |
| Type 2 Diabetes | ✅ partial | — (zinc, mediterranean-diet ref it) | **NONE** | Needs STOP |
| Pancreatic Cancer | ✅ partial | — (ferrichrome etc. in field) | **broken ref** | Fix or remove (1.2) |

**Pattern:** 7 of 15 signatures have empty `validated_interventions: []` despite intervention pages that reference them in triangles. The signature fields need to be populated from the intervention pages' `triangles:` blocks.

---

## Section 3: New Gaps Identified

### 3.1 — 🟡 7 Signatures Have Empty `validated_interventions:` Despite Coverage

Several intervention pages reference conditions in their `triangles:` blocks, but the corresponding signatures don't reflect this. Cross-referencing is bidirectional in the schema — the signature should list the intervention and vice versa.

| Signature | Intervention that References It | Intervention Page Status |
|-----------|-------------------------------|------------------------|
| `alzheimers-disease` | none yet (no Alzheimer's triangle in any intervention) | Gap — no intervention at all |
| `autism-spectrum-disorder` | `probiotics-asd-dysbiosis` | Link both ways |
| `cardiovascular-disease` | `mediterranean-diet`, `fmt-intervention` | Link both ways |
| `colorectal-cancer` | `mediterranean-diet` | Link both ways |
| `depression` | `zinc-supplementation`, `mediterranean-diet`, `vitamin-d-supplementation`, `fmt-intervention` | Fix frontmatter first (1.3), then link |
| `obesity` | none yet | Gap — no intervention at all |
| `type-2-diabetes` | `zinc-supplementation`, `mediterranean-diet` | Link both ways |

**Action:** Populate `validated_interventions:` on each of these signatures with the IDs of existing intervention pages that reference them.

### 3.2 — 🟡 Still 13 Conditions Referenced in Intervention Triangles with No Signature Page

Unchanged from April 13. Practitioners clicking these links would reach empty pages.

| Condition | Referenced By | Priority |
|-----------|-------------|----------|
| `postpartum-depression` | zinc-supplementation, iron-management | 🔴 Highest — 74 raw papers in library |
| `schizophrenia` | fmt-intervention | 🔴 High — 71 raw papers in library |
| `ulcerative-colitis` | fmt-intervention, mediterranean-diet | 🔴 High — UC/Crohn's share the IBD framework |
| `inflammatory-bowel-disease` | mediterranean-diet, vitamin-d-supplementation | 🟡 High — umbrella entity page exists |
| `chronic-kidney-disease` | iron-management | 🟡 High — 65 raw papers; Cd/As/Pb nephrotoxicity angle |
| `ibs` | (entity page exists, no signature) | 🟡 Medium — nickel-GERD-IBS framework |
| `clostridioides-difficile-infection` | fmt-intervention | 🟢 Medium — canonical FMT indication |
| `dysmenorrhea` | zinc-supplementation | 🟢 Medium — endometriosis adjacent |
| `epilepsy` | ketogenic-diet | 🟢 Medium — KD canonical use |
| `hypertension` | fmt-intervention | 🟢 Medium |
| `helicobacter-pylori` | (microbe entity, triangle treats it as condition) | 🟢 Low — refactor triangle reference |
| `prostate-cancer` | selenium-supplementation | 🟢 Low — no source library |

### 3.3 — 🟡 STOPs Still Missing for 5 Conditions with Strong Evidence Basis

| Condition | Evidence Basis for STOP | Source |
|-----------|------------------------|--------|
| Obesity | Fructose/HFCS drives Enterobacteriaceae overgrowth; HFCS impairs zinc absorption | Multiple sources in obesity signature |
| Parkinson's Disease | Iron accumulation in substantia nigra; functional anemia pattern consistent with other neurological conditions | Sources in Parkinson's signature |
| Type 2 Diabetes | Iron supplementation in T2D drives oxidative stress; functional anemia / hepcidin elevation pattern | Sources in T2D signature |
| Depression (MDD) | Low serum iron and zinc in MDD are consistent with nutritional immunity activation, not true deficiency | Sources include ogundare-2024, pourmirzaiee-2024, hiremath-2021 |
| Cardiovascular Disease | Iron + TMAO synergy in atherosclerosis; Bilophila wadsworthia siderophore dependence on sulfate/heme | Sources in CVD signature |

All five fit the established cross-condition iron STOP pattern and would follow the same structural template.

### 3.4 — 🟢 `endometriosis-connection-matrix.json` Awaiting Review

A file `wiki/signatures/endometriosis-connection-matrix.json` exists in the signatures directory. Its metadata states: `"verification_status": "AWAITING KAREN REVIEW — every edge must be verified before visualization"`. This is the data layer for the Cureva signature explorer visualization for endometriosis.

This file is not indexed anywhere and should either be reviewed and moved to `wiki/analyses/` or surfaced for Karen's review explicitly.

---

## Section 4: V2 Migration Backlog

Remaining items from the v2 migration plan in CLAUDE.md, in priority order:

### Priority 5: Source Pages (1,515 pages) — Largest Backlog

All 1,515 source pages are missing v2 frontmatter fields:
- `evidence_level:` — can be batch-inferred from study design keywords in existing summaries
- `karen_brain_primitives:` — can be batch-inferred from metals/taxa/concepts mentioned
- `metals_discussed:` — can be batch-extracted from body content
- `taxa_discussed:` — can be batch-extracted from body content
- `key_findings:` — can be batch-extracted from "Key Claims" sections
- `corresponding_author:` / `corresponding_email:` — opportunistic, when papers are re-examined

**Approach:** Batch scripted inference pass. The fields `evidence_level` and `karen_brain_primitives` are the highest value since Cureva's pipeline retrieves evidence by reasoning step — without these fields, the retrieval layer is keyword-only.

### Priority 6: Concept Pages (90 pages) — Missing Key V2 Fields

All 90 concept pages lack v2 frontmatter:
- `seo_target:` — required for WikiBiome search optimization
- `karen_brain_primitives:` — required for Cureva pipeline retrieval
- `last_substantive_update:` — required for version tracking

Concept pages use an older frontmatter structure predating v2. These can be batch-upgraded in 1–2 sessions without reading each page individually.

### Duplicate DOIs: 37 Pairs Still Unresolved

The April 12 lint report flagged 46 confirmed duplicate source files (same DOI, two filenames). This count is now 37 by current grep. These inflate source counts and create ambiguous wikilink targets. Karen needs to confirm which of the ~5 "suspected wrong DOI" pairs have the wrong DOI assignment before the duplicates can be safely deleted.

---

## Section 5: New Opportunities — Unprocessed Paper Libraries

### 5.1 — Major Condition Libraries Not Yet on Any Roadmap

Several condition-specific paper libraries exist in `raw/` that have never appeared in prior gap reports. These represent significant expansion opportunities for both WikiBiome traffic and Cureva coverage:

| Condition | Papers in raw/ | Current Wiki Status | Strategic Angle |
|-----------|--------------|--------------------|--------------------|
| **Long COVID** | 122 papers | No entity, no signature, no sources | Massive traffic opportunity; metals + gut dysbiosis post-infection; mycobiome involvement |
| **Female Infertility** | 109 papers | No entity, no signature, no sources | Adjacent to endometriosis; metalloestrogens; Prevotella copri; nickel angle |
| **Cerebral Palsy** | 79 papers | No entity, no signature, no sources | Developmental metal vulnerability (primitive 3); NEC overlap |
| **Necrotizing Enterocolitis (NEC)** | 76 papers | No entity, no signature, no sources | Preterm gut; Pendergrass 2026 paper already in vault; nickel-NEC connection |
| **Erectile Dysfunction** | 73 papers | No entity, no signature, no sources | Vascular + microbiome angle; zinc/testosterone; endothelial function |
| **PMDD** | 70 papers | No entity, no signature, no sources | Estrobolome + hormonal cycling; endometriosis adjacent |
| **Fibromyalgia** | 58 papers | No entity (but mentioned in RA haddad source) | Heavy metals (nickel, cadmium, lead); Prevotella copri; immune dysregulation |

**Priority recommendation:** Long COVID (122 papers) is the highest-traffic opportunity in 2026. The condition is widely searched, and the gut microbiome + metal disruption post-infection angle is a highly differentiated WikiBiome story. NEC is strategically important given Karen's existing Pendergrass 2026 paper on nickel in preterm gut — it's a publishable-research adjacent topic.

### 5.2 — 260 Unorganized PDFs in `raw/` Root

The root `raw/` directory contains 260 loose PDF files that haven't been organized into condition subfolders. Based on filename inspection, they include:

- **Alzheimer's Disease**: ~14 numbered papers (numbered 3–18) on metals, neurodegeneration, and therapeutics — these would expand the Alzheimer's signature, which currently has no interventions
- **Rheumatoid Arthritis**: ~6 numbered papers (1–7) on heavy metal exposure and RA — would enable a full RA signature build (only 5 RA sources currently ingested)
- **Mixed neurodegenerative**: Papers on metals in Parkinson's + Alzheimer's together
- **Unidentified hash-named files**: ~40 files with hash names (e.g., `73706124c1e843776aca71ecfb3815c2.pdf`) — likely duplicates or downloaded without metadata

**Action:** Before ingesting, organize these loose PDFs into appropriate condition subdirectories. The Alzheimer's and RA groups are highest-value given the existing entity pages and the upcoming signature build priorities.

### 5.3 — Rheumatoid Arthritis Signature Is Buildable Now

RA has been the second-highest priority missing signature since April 12 (behind Postpartum Depression). Current status:
- Entity page exists (`rheumatoid-arthritis.md`) with 7 ingested sources
- 6 additional PDFs in `raw/` root ready to ingest
- Metal signature visible: elevated copper, zinc dysregulation, lead/cadmium, nickel, chromium
- Key microbe: Prevotella copri (shared with multiple other signatures, strengthening the cross-condition story)
- Associated with MS, Hashimoto's, Crohn's (all three already have signatures)

**Action:** Ingest the 6 raw RA papers first, then build the signature.

---

## Section 6: Carry-Forward Open Questions

These were flagged in prior reports and remain open:

- **Should `bile-acids` and `bile-acid-metabolism` be merged?** `bile-acid-metabolism.md` exists; `bile-acids` is a broken wikilink elsewhere. Recommend: redirect/alias `bile-acids` → `bile-acid-metabolism`.
- **Should `SNAS` (Systemic Nickel Allergy Syndrome) get its own concept page?** It's the explanatory framework for the nickel-GERD-IBS-endometriosis connection. A concept page would anchor the `low-nickel-diet` intervention more clearly and improve SEO.
- **`helicobacter-pylori` as a disease vs. microbe entity:** Currently a microbe entity. Referenced as a condition in the `iron-management` intervention triangle. Recommend either: (a) create an `h-pylori-infection` disease entity that links the microbe page, or (b) refactor the triangle reference to point to `[[gastric-cancer]]` or `[[gerd]]`.
- **`prostate-cancer` in `selenium-supplementation` triangle:** No entity page, no source library. If Karen is not developing this condition, the triangle entry should be noted as provisional.
- **Should `inflammatory-bowel-disease` get an umbrella signature** that links the Crohn's and UC (upcoming) signatures? Or should IBD be concept-only?
- **`dysmenorrhea` signature vs. section in endometriosis:** Referenced in zinc-supplementation triangle. Likely best handled as a prominent "associated conditions" callout in the endometriosis signature rather than a standalone signature page.
- **The 37 duplicate source DOIs:** Karen should confirm the 5 suspected wrong-DOI pairs before batch deletion. The rest can be auto-resolved.

---

## Recommended Action Sequence

### Immediate (< 30 min, no new content needed)

1. **Fix 4 orphaned STOP linkages** — update `stops:` fields in alzheimers, ASD, colorectal-cancer signatures; fix Hashimoto's name mismatch
2. **Add `validated_interventions:` and `stops:` to `depression.md` frontmatter**
3. **Fix backslash wikilinks** in `dietary-metal-microbiome-interactions.md` (4 lines — this has been flagged 3 sessions in a row)
4. **Regenerate `index.md`** — entities (130→135), concepts (88→90), STOPs (11→14); add new entities and concepts to lists
5. **Populate `validated_interventions:` fields** on the 7 signatures with empty fields but known intervention coverage
6. **Add `seo_target:` and `wikipedia_differentiation:`** to 7 fungi/archaea entity pages
7. **Resolve pancreatic cancer's broken STOP reference** — either build `stop-diagnostic-overclaiming-discovery-phase.md` or remove the reference

### Short Session (1–2 hours)

8. **Build 5 iron supplementation STOPs** using established template (obesity, Parkinson's, T2D, depression, CVD) — all follow identical structure with condition-specific citations
9. **Organize 260 loose PDFs** in `raw/` root into condition subfolders — particularly the Alzheimer's and RA groups
10. **Build Rheumatoid Arthritis signature** — 5 sources already ingested + 6 new PDFs ready; RA is the second most complete condition missing a signature
11. **Add v2 fields to 7 fungi/archaea concept pages** (seo_target, wikipedia_differentiation, karen_brain_primitives)
12. **Plan SNAS concept page** and `bile-acids` redirect

### Full Sessions (new content, priority order)

13. **Build Postpartum Depression signature** — 74 raw papers; highest-priority unbuilt signature; referenced in two intervention triangles; estrobolome + iron angle
14. **Batch upgrade concept pages (Priority 6)** — 90 pages, add seo_target + karen_brain_primitives; scriptable
15. **Build Ulcerative Colitis signature** — IBD companion to Crohn's; referenced in multiple intervention triangles
16. **Begin Long COVID library ingest** — 122 papers; highest-traffic opportunity in 2026; no coverage currently
17. **Batch upgrade source pages (Priority 5)** — infer evidence_level from study design keywords; run as scripted pass across all 1,515 files

---

## Updated Evidence Matrix

| Metric | Apr 12 | Apr 13 | Apr 14 | Target |
|--------|--------|--------|--------|--------|
| Signatures | 13 | 15 | 15 | 25+ |
| Signatures complete | 1 | 1 | 1 | 15 |
| Interventions | 5 | 13 | 13 | 25 |
| STOPs | 11 | 14 | 14 | 30+ |
| Orphaned STOPs | 0 | 4 | 4 | 0 |
| Broken STOP refs | 0 | 2 | 2 | 0 |
| Entities w/o seo_target | 14 | 0 | 7 | 0 |
| Duplicate DOI files | 46 | 37 | 37 | 0 |
| Concept pages with v2 fields | 0 | 0 | 0 | 90 |
| Source pages with evidence_level | 0 | 0 | 0 | 1,515 |
| Unprocessed condition libraries | ~5 | ~5 | 7 identified | 0 |
