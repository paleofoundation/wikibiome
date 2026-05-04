---
title: "WikiBiome / Cureva — Gaps & Improvement Report 2026-04-12"
type: analysis
platform: cureva
created: 2026-04-12
updated: 2026-04-12
tags: [maintenance, gaps, improvements, roadmap]
---

# WikiBiome / Cureva — Gaps & Improvement Report

Generated: 2026-04-12 (automated scheduled run)
Scope: Full audit of wiki content, raw paper library, index accuracy, and roadmap alignment
Related: See also `wiki/analyses/lint-report-2026-04-12.md` for structural/formatting issues

---

## Executive Summary

The knowledge base is in strong structural shape with 13 complete signatures, 88 concept pages, 130+ entity pages, and ~1,426 source pages. The lint report captures all formatting and schema issues. This report focuses on content gaps and strategic improvements not fully covered by the lint report.

The three biggest gaps:
1. 9 conditions with 65–79 raw papers each have no signature page — Hashimoto's, PPD, Rheumatoid Arthritis, CKD, Schizophrenia, Type 1 Diabetes, GERD, Ovarian Cancer, Pancreatic Cancer
2. 180 unorganized ASD papers remain in the disorganized holding folder and have not been ingested
3. Intervention coverage is thin — only 5 intervention pages exist despite 13 signatures; most conditions have zero linked interventions

---

## Section 1: Missing Signature Pages — Readiness Assessment

The following conditions have raw paper libraries already organized by category (65–79 papers each) but no signature page exists. These are ready to build in order of strategic priority:

| Condition | Raw Papers | Ingested Sources (approx) | Metallomic Angle | Priority |
|-----------|-----------|--------------------------|-----------------|----------|
| Hashimoto's Thyroiditis | 73 | Partial (ingested) | Iodine/selenium/zinc; iodine-autoimmunity paradox | 🔴 Highest |
| Postpartum Depression | 74 | 40 ingested | Iron functional anemia; estrobolome; perinatal window | 🔴 Highest |
| Rheumatoid Arthritis | — (in raw/) | Multiple sources | Copper/zinc/iron signature; E. coli and Prevotella copri | 🔴 Highest |
| Chronic Kidney Disease | 65 | Sources present | Cadmium/arsenic/lead nephrotoxicity; urease pathogens | 🟡 High |
| Schizophrenia | 71 | 14 ingested | Copper/zinc dyshomeostasis; tryptophan pathway disruption | 🟡 High |
| Type 1 Diabetes | 68 | 57 ingested | Iron and zinc in beta-cell destruction; Bacteroides signature | 🟡 High |
| GERD | 70 | Sources present | Nickel allergy connection; H. pylori iron ecology | 🟢 Medium |
| Ovarian Cancer | 68 | Sources present | Metalloestrogen angle; cadmium; Fusobacterium | 🟢 Medium |
| Pancreatic Cancer | 67 | Sources present | Mycobiome (Malassezia); iron ecology; Fusobacterium | 🟢 Medium |

Cerebral Palsy is an additional gap: 79 raw papers exist but there is no entity page, no sources ingested, and no signature. This condition may warrant a dedicated entity page before a signature can be built.

---

## Section 2: 180 Unorganized ASD Papers — Incomplete Ingest

The folder `raw/Autism papers, but disorganized. Not yet added or ingested/UNORGANIZED PAPERS/` contains 180 PDF files that have never been ingested into the wiki. The ASD signature page (`autism-spectrum-disorder-signature.md`) was built from only 21 sources in April 2026. These 180 additional papers may contain:

- Additional metallomic data for the ASD signature (currently `cureva_status: in-progress`)
- Intervention evidence (particularly for the low-nickel and probiotics pages)
- Additional STOP candidates
- Relevant microbe entity data

Recommended action: Run the structured ingest workflow on this folder. Given the volume (180 papers), this is a multi-session effort. Suggest prioritizing: (1) any papers about metals + ASD, (2) any RCT intervention papers, (3) any signature/microbiome composition papers.

---

## Section 3: RE-INGEST-PROMPT.md — Pendergrass Papers Verification

A `raw/RE-INGEST-PROMPT.md` file exists with instructions to verify and re-ingest 9 Karen Pendergrass papers. Cross-checking against the current wiki:

| Paper | Required DOI | Source Page Exists? | Notes |
|-------|-------------|---------------------|-------|
| Dysbiosis to Dyshomeostasis (Parkinson's) | 10.5281/zenodo.18068369 | ✅ Yes (`pendergrass-2025-dysbiosis-dyshomeostasis-parkinsons-metallomic.md`) | DOI confirmed match |
| Age-Window Baby Foods | 10.5281/zenodo.18366816 | ✅ Yes (`pendergrass-2026-age-window-vulnerability-vegetable-baby-foods.md`) | Verify DOI |
| Nickel as Catalytic Driver of NEC | 10.5281/zenodo.18200348 | ✅ Yes (`pendergrass-2026-nickel-nec-preterm-gut.md`) | Verify DOI |
| Microbial Metallomics + Parkinson's | 10.5281/zenodo.17830083 | ✅ Yes (`pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md`) | Verify DOI |
| Pheomelanin / Redheads + Parkinson's | 10.5281/zenodo.17976306 | ✅ Yes (`pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads.md`) | Verify co-author Eyer K is listed |
| Fertilizers Heavy Metals Historical | 10.5281/zenodo.18439158 | ✅ Yes (`pendergrass-2026-fertilizers-heavy-metals-historical.md`) | Verify DOI |
| Heavy Metals + Obesity | 10.5281/zenodo.18434951 | ✅ Yes (`pendergrass-2026-heavy-metals-obesity-epidemic.md`) | Verify DOI |
| Counterproductive Exposé Testing | 10.5281/zenodo.19470572 | ✅ Yes (`pendergrass-2026-counterproductive-expose-testing.md`) | Verify DOI |
| Certification Framework + Infant Foods | 10.5281/zenodo.18905821 | ✅ Yes (`pendergrass-2026-certification-infant-food-metals.md`) | Verify DOI |

All 9 papers appear to have source pages. Recommended action: Verify each DOI matches the actual Zenodo record to guard against hallucinated DOIs (a known past issue per memory). The re-ingest prompt also asks to check whether the content JSON was rebuilt with `node scripts/build-content.cjs --platform all`.

---

## Section 4: Intervention Coverage Gap

Only 5 intervention pages exist for 13 disease signatures. This is the most significant Cureva platform gap. Coverage by condition:

| Condition | Has Linked Intervention? | Has STOP(s)? | Intervention Gap |
|-----------|--------------------------|--------------|-----------------|
| Endometriosis | ✅ (low-nickel-diet) | ✅ (zinc, iron) | Additional interventions possible: lactoferrin, biofilm agents |
| Multiple Sclerosis | ✅ (ketogenic-diet, b-cell-depletion) | ✅ (iron, SCFA) | Well covered for a partial status |
| ASD | ✅ (probiotics-asd-dysbiosis) | ✅ (iron) | 180 unprocessed papers likely contain more |
| Crohn's Disease | ✅ (ecoli-nissle-1917) | ✅ (iron, antibiotics) | Moderately covered |
| Graves' Disease | ❌ | ✅ (iodine, iron) | No intervention page — only STOPs |
| PCOS | ❌ | ✅ (iron, zinc) | No intervention page — only STOPs |
| Parkinson's Disease | ❌ | ❌ | No interventions or STOPs at all |
| Alzheimer's Disease | ❌ | ❌ | No interventions or STOPs at all |
| Cardiovascular Disease | ❌ | ❌ | No interventions or STOPs at all |
| Depression | ❌ | ❌ | No interventions or STOPs at all |
| Colorectal Cancer | ❌ | ❌ | No interventions or STOPs at all |
| Obesity | ❌ | ❌ | No interventions or STOPs at all |
| Type 2 Diabetes | ❌ | ❌ | No interventions or STOPs at all |

8 of 13 signatures have no linked intervention page. This is the core clinical intelligence gap for the Cureva platform.

Recommended quick wins:
- Create `stop-iron-supplementation-parkinsons.md` — Parkinson's has clear hepcidin elevation and siderophore-producing pathobiont enrichment; fits the cross-condition STOP pattern
- Create `stop-iron-supplementation-depression.md` — same pattern; functional anemia vs true deficiency
- Create intervention pages for Parkinson's: low-nickel diet (via shared H. pylori / Proteus mechanism) and iron chelation (ferroptosis angle from the Pendergrass 2025 paper)

---

## Section 5: Index & Count Discrepancies (Beyond Lint Report)

The lint report correctly flags the stale index (claims 982 sources; actual 1,426). Additional discrepancies found in this scan:

| Item | Index Claims | Actual | Action |
|------|-------------|--------|--------|
| Disease Signatures | 14 | 13 on disk | Fix summary count to 13 |
| Interventions | 6 | 5 on disk | Fix summary count to 5 |
| STOPs | 12 | 11 on disk | Fix summary count to 11 |
| Metals list includes `candida-albicans` and `enterococcus` | Misclassified | Move to Microbes | Fix index categorization |
| `pharmacomicrobiomics.md` concept | Not listed in index | File exists | Add to index |
| IBS entity page | Not in index diseases list | File exists | Add |
| GERD entity page | Not in index diseases list | File exists | Add |
| Schizophrenia entity | Not in index diseases list | File exists | Add |
| Type 1 Diabetes entity | Not in index diseases list | File exists | Add |
| Ulcerative Colitis entity | Not in index diseases list | File exists | Add |
| Gastric Cancer entity | Not in index diseases list | File exists | Add |
| Ovarian Cancer entity (in index) | Listed | File exists | ✅ |
| Postpartum Depression entity | In disease list | File exists | ✅ |

---

## Section 6: Gaps the Lint Report Missed

These were not identified in the 2026-04-12 lint report:

### 6.1 — No Cerebral Palsy entity page despite 79 raw papers

The `raw/Cerebral Palsy/` folder has 79 organized papers, but unlike the other conditions with raw folders, there is no entity page in `wiki/entities/`. This condition should be tracked even if signature work is deferred.

### 6.2 — ASD signature status should be `partial`, not `in-progress`

`autism-spectrum-disorder-signature.md` is marked `cureva_status: in-progress` but it has all 5 signature layers populated, has a linked intervention page, and has a STOP page. By the standard applied to other conditions, this should be `partial`. Upgrade to `partial` once the 180 unorganized papers are reviewed.

### 6.3 — `RE-INGEST-PROMPT.md` exists with unexecuted instructions

The file `raw/RE-INGEST-PROMPT.md` contains a detailed re-ingest workflow that may not have been fully executed. Specifically, it asks to run `node scripts/build-content.cjs --platform all` after ingest. This should be verified.

### 6.4 — No concept page for `SNAS` (Systemic Nickel Allergy Syndrome)

This syndrome is referenced in `low-nickel-diet.md` (the most complete intervention page) and is mechanistically central to the nickel-GERD-endometriosis connection. It warrants its own entity or concept page.

### 6.5 — No `rheumatoid-arthritis` signature despite a full paper library

The lint report flags RA as a high-priority signature. RA has one of the best-characterized metallomic signatures in the literature: elevated copper (ceruloplasmin), elevated zinc (synovial fluid), elevated iron (synovitis), depleted selenium. The Prevotella copri–RA connection is well-evidenced. Sources appear to be ingested (the entities page exists). This should be the next signature built after Hashimoto's and PPD.

### 6.6 — `bile-acids` concept page listed in index but file doesn't exist

Index lists `[[bile-acid-metabolism]]` as a concept, but only `bile-acid-metabolism.md` exists on disk. This is a broken wikilink in the index itself.

### 6.7 — `microbiome` and `siderophores` and `tryptophan` concept stubs listed in index but possibly thin

These three appear in the index concept list. Verify they have substantive content and not just stub pages. If stubs, they should be flagged for expansion.

---

## Section 7: WikiBiome v2 Roadmap Alignment

From the v2 roadmap (per memory):
- Signature sidebars — Requires complete intervention + STOP coverage per condition (currently only 4/13 conditions covered)
- 50 microbe pages target — Currently 83 microbe entities, so target is exceeded in count; quality audit of thin pages needed
- Author outreach — Pendergrass paper pages exist; ensure they link back to her Zenodo profile
- Chat feature — Requires structured data quality; index staleness is a blocker
- User accounts — No blockers identified

---

## Recommended Action Sequence for Next Session

### Immediate (< 30 min, no new content required)

1. Fix backslash wikilinks in `dietary-metal-microbiome-interactions.md`
2. Complete GERD triangle in `low-nickel-diet.md`
3. Add `subtype:` to 14 entity pages (aluminum, arsenic, cadmium, candida-albicans, chromium, copper, enterococcus, iron, lead, manganese, mercury, nickel, selenium, zinc)
4. Add `cureva_status:` to 5 intervention pages
5. Fix misspelled `[[akkermansia-mucinicola]]` wikilink
6. Create stub entity page for `cerebral-palsy`
7. Create `[[nickel-allergy|SNAS]]` or `[[nickel-allergy|systemic-nickel-allergy-syndrome]]` concept page
8. Regenerate `index.md` from filesystem

### Short Session (1–2 hours)

9. Build `hashimotos-thyroiditis` signature (73 raw papers, strong iodine/selenium metallomic angle)
10. Create 4 missing entity stubs: `bacteroides-thetaiotaomicron`, `candida-auris`, `candida-tropicalis`, `aeromonas`
11. Create `stop-iron-supplementation-parkinsons.md` and `stop-iron-supplementation-depression.md`
12. Verify Pendergrass DOIs against actual Zenodo records

### Full Session

13. Build `postpartum-depression` signature (74 raw papers, 40 ingested, iron/estrobolome angle)
14. Build `rheumatoid-arthritis` signature (copper/zinc/iron; Prevotella copri)
15. Begin ASD unorganized paper ingest (batch 1 of ~4)
16. Add triangle evidence fields to 4 incomplete intervention pages

---

## Open Questions

- Should `cerebral-palsy` have its own signature, or is the metallomic signature too similar to ASD to justify separation?
- Should `bile-acids` and `bile-acid-metabolism` be merged? The `bile-acids` entry in the index is a broken link.
- The 46 duplicate sources identified in the lint report — before deleting, should Karen confirm which DOI assignments are wrong? The mis-assigned DOIs listed could represent papers she wants to keep as separate entries.
- Is `SNAS / Systemic Nickel Allergy Syndrome` a condition that warrants a full signature page, or should it remain a concept?
- Should `type-1-diabetes` and `type-2-diabetes` have separate signature pages, or a single diabetes signature with subtypes?
