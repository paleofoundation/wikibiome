---
title: "WikiBiome Lint Report — 2026-04-12"
type: analysis
platform: cureva
created: 2026-04-12
updated: 2026-04-12
tags: [maintenance, lint, health-check]
---

# WikiBiome Lint Report — 2026-04-12

**Automated health check run:** 2026-04-12 
**Wiki pages scanned:** 1,684 total (1,426 sources + 258 content pages) 
**Issues found:** 6 critical, 8 high-priority, 5 medium-priority

---

## 🔴 CRITICAL

### 1. Index is severely stale

`wiki/index.md` has not been regenerated since the April 11 session. Actual counts diverge significantly from what the index claims.

| Category | Index Claims | Actual Count | Delta |
|----------|-------------|--------------|-------|
| Sources | 982 | 1,426 | **+444** |
| Entities (total) | 126 | 130 | +4 |
| — Metals/Metalloids | 19 | 5 w/ correct subtype | — |
| — Microbes | 83 | 79 w/ `subtype: microbe` | — |
| — Diseases | 20 | 28 w/ `subtype: disease` | +8 |
| Concepts | 88 | 88 | ✓ |
| Disease Signatures | 14 | 13 | -1 |
| Interventions | 6 | 5 | -1 |
| STOPs | 12 | 11 | -1 |
| Analyses | 5 | 5 → 6 after this report | +1 |

**Action:** Regenerate `index.md` from filesystem.

---

### 2. 46 duplicate source files confirmed (same DOI, two filenames)

DOI matching identified 46 pairs (and 3 triplets) where the same paper was ingested twice under slightly different filenames. The worst cases involve obviously different papers that were erroneously assigned the same DOI during ingestion.

**Suspected wrong-DOI assignments (different papers, not true duplicates):**

| File A | File B | Shared DOI | Problem |
|--------|--------|-----------|---------|
| `mcewan-2024-metalloproteome-plasticity...` | `sullivan-2024-resisting-death-metal...` | 10.1042/ETLS20230040 | Different authors/years — one DOI is wrong |
| `islam-2022-metal-toxicity-alzheimers...` | `liu-2025-low-concentration-metals-ckd...` | 10.1038/s44439-024-00009-w | Different years (2022 vs 2025) — one DOI is wrong |
| `zhang-2021-cadmium-gut-liver-axis-alzheimers...` | `zhang-2021-cadmium-gut-microbiome-parkinsons...` | 10.1038/s42003-021-02898-1 | Different diseases — one DOI is wrong |
| `borghini-2020-endometriosis-nickel-ibs...` | `borghini-2020-low-nickel-diet-celiac...` | 10.3390/nu12082277 | Different papers (endometriosis vs celiac) in same journal/year — one DOI is wrong |
| `ling-2024-fungal-dysbiosis-gut-brain-axis...` | `liu-2024-oral-fungal-dysbiosis-immune-dysfunction...` | 10.1038/s41398-024-03183-5 | Different authors — one DOI is wrong |

**Confirmed true duplicates (same paper, two filenames — keep one, delete other):**

| Keep | Delete | DOI |
|------|--------|-----|
| `zou-2022-gut-mycobiome-dysbiosis-hypertension-immunoglobulin.md` | `zou-2022-mycobiome-dysbiosis-hypertension-light-chains.md` AND `zou-2022-mycobiome-hypertension-immunoglobulin.md` | 10.3389/fimmu.2022.1089295 |
| `spivak-2022-local-systemic-effects-microbiome-derived-metabolites.md` | `spivak-2023-local-systemic-microbiome-derived-metabolites.md` AND `spivak-2023-microbiome-derived-metabolites-local-systemic-effects.md` | 10.15252/embr.202255664 |
| `eggers-2023-prenatal-lead-exposure-gut-microbiome-childhood.md` | `eggers-2023-prenatal-lead-exposure-gut-microbiome-childhood.md` | 10.3389/fmicb.2023.1193919 |
| `ni-2022-gut-microbiota-psychiatric-disorders-mendelian-randomization.md` | `ni-2022-gut-microbiota-psychiatric-disorders-mr.md` | 10.3389/fmicb.2021.737197 |
| `he-2021-gut-microbiome-sex-hormone-related-diseases.md` | `he-2021-gut-microbiome-sex-hormones-disease.md` | 10.3389/fmicb.2021.711137 |
| `liu-2020-high-fat-diet-heavy-metal-gut-microbiota.md` | `liu-2020-high-fat-diet-heavy-metals-gut-microbiota-kidney.md` | 10.3389/fmicb.2020.01604 |
| `swidsinski-2017-ketogenic-diet-colonic-microbiome-ms.md` | `swidsinski-2017-colonic-microbiome-ms-ketogenic.md` | 10.3389/fmicb.2017.01141 |
| `xu-2022-causal-gut-microbiota-autoimmune-mr.md` | `xu-2022-causal-microbiota-autoimmune-mr.md` | 10.3389/fimmu.2021.746998 |
| `zhang-2017-intestinal-microbiota-host-immune-ibd.md` | `zhang-2017-intestinal-microbiota-immune-response-ibd.md` | 10.3389/fimmu.2017.00942 |
| `zhang-2022-causal-gut-microbiome-cvd-mr.md` | `zhang-2022-causal-microbiome-cvd-mendelian-randomization.md` | 10.3389/fcvm.2022.971376 |
| `dong-2021-salivary-microbiome-tsh-shifts.md` | `dong-2021-tsh-salivary-microbiome-shifts.md` | 10.3389/fcimb.2021.603291 |
| `zhao-2022-gut-microbiota-graves-disease-hashimotos.md` | `zhao-2022-gut-microbiota-graves-hashimotos.md` | 10.33073/pjm-2022-016 |
| `elbere-2018-metformin-gut-microbiome-dysbiosis-healthy.md` | `elbere-2018-metformin-gut-microbiome-dysbiosis.md` | 10.1371/journal.pone.0204317 |
| `dinakaran-2014-circdna-circulating-microbiome-cvd.md` | `dinakaran-2014-circulating-microbiome-cvd.md` | 10.1371/journal.pone.0105221 |
| `wang-2022-gut-microbiota-health-cvd-review.md` | `wang-2022-gut-microbiota-health-cvd.md` | 10.1186/s43556-022-00091-2 |
| `zhou-2022-host-microbiome-protein-interactions-disease-pathways.md` | `zhou-2022-host-microbiome-protein-protein-interactions-disease.md` | 10.1186/s13059-022-02643-9 |
| `zhang-2021-antidepressants-fluoxetine-amitriptyline-gut-microbiome.md` | `zhang-2021-antidepressants-fluoxetine-amitriptyline-gut-microbiota.md` | 10.1038/s41398-021-01254-5 |
| `safadi-2021-gut-dysbiosis-severe-mental-illness-meta-analysis.md` | `safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis.md` | 10.1038/s41380-021-01032-1 |
| `wei-2025-gut-mycobiome-cardiometabolic-disease.md` | `wei-2025-gut-mycobiome-cardiometabolic-progression.md` | 10.3389/fmicb.2025.1659654 |
| `singh-2024-gut-brain-axis-cvd-review.md` | `singh-2024-microbes-myocardium-gut-brain-axis-cvd.md` | 10.7759/cureus.70877 |
| `luqman-2024-intestinal-microbiome-cvd-intervention.md` | `luqman-2024-intestinal-microbiome-cvd-therapeutic.md` | 10.3389/fimmu.2024.1321395 |
| `liu-2018-gut-microbiome-rosuvastatin-lipid-lowering.md` | `liu-2018-rosuvastatin-gut-microbiome-lipid-lowering.md` | 10.3389/fmicb.2018.00530 |

**Additional duplicates to verify** (partial DOI match, need manual check): `hashimoto-2023-host-microbiome-neuropsychiatric-disorders-review.md` vs `hashimoto-2023-host-microbiome-neuropsychiatric-disorders.md`, `virili-2024-thyroid-human-microbiota-systematic-review-reviews.md` vs `virili-2024-thyroid-microbiota-systematic-review.md`, and ~18 more pairs.

**Action:** For each confirmed pair, check whether wikilinks reference either file, consolidate, update wikilinks, delete the duplicate.

---

### 3. 14 entity pages missing `subtype:` field

These metal and organism pages have no `subtype:` in their frontmatter, which breaks entity filtering in any pipeline that depends on it:

aluminum, arsenic, cadmium, candida-albicans, chromium, copper, enterococcus, iron, lead, manganese, mercury, nickel, selenium, zinc

**Action:** Add appropriate `subtype:` field. Metals get `subtype: metal`. Candida albicans is `subtype: fungus`. Enterococcus is `subtype: microbe`.

---

### 4. All 5 intervention pages are missing `cureva_status:` frontmatter field

Per schema, intervention pages require a `cureva_status: complete | partial | in-progress` field. None of the current intervention pages have it:

- `b-cell-depletion-therapy-ms.md`
- `ecoli-nissle-1917.md`
- `ketogenic-diet-ms.md`
- `low-nickel-diet.md`
- `probiotics-asd-dysbiosis.md`

**Action:** Add `cureva_status:` field to each intervention page. Based on content completeness: `low-nickel-diet.md` → `complete`; others → `partial`.

---

### 5. Broken wikilinks in `dietary-metal-microbiome-interactions.md`

Four wikilinks in a table (lines 58–61) use pipe-alias syntax with backslashes instead of forward slashes, rendering as broken:

```
[[lactobacillus|Lactobacillus]] → should be [[lactobacillus|Lactobacillus]]
[[bifidobacterium|Bifidobacterium]] → should be [[bifidobacterium|Bifidobacterium]]
[[saccharomyces-cerevisiae|Saccharomyces cerevisiae]] → should be [[saccharomyces-cerevisiae|Saccharomyces cerevisiae]]
[[bacillus|Bacillus]] → should be [[bacillus|Bacillus]]
```

**Action:** Fix the four backslash-broken links in `wiki/concepts/dietary-metal-microbiome-interactions.md`.

---

### 6. GERD triangle in `low-nickel-diet.md` is incomplete (missing `status:` field)

The fifth triangle condition (`GERD (refractory)`) in `wiki/interventions/low-nickel-diet.md` has `I_to_f` defined but is missing `status:`, `I_to_D`, `I_to_D_evidence`, `I_to_f_evidence`, and `f_to_D`. This will cause rendering errors on Cureva.

**Action:** Complete the GERD triangle block. Based on the current text, `status: promising` is appropriate.

---

## 🟡 HIGH PRIORITY

### 7. 15 disease entity pages have no companion signature page

The following diseases have `subtype: disease` entity pages but no corresponding page in `wiki/signatures/`. These represent the biggest content gaps for Cureva pipeline completeness:

**High clinical relevance (likely to be built first):**
- `hashimotos-thyroiditis` — Thyroid autoimmunity; iodine/selenium/zinc signature likely exists in sources
- `postpartum-depression` — PPD; significant source library ingested; links to estrobolome
- `rheumatoid-arthritis` — RA; copper/zinc/iron signature; heavy source library
- `inflammatory-bowel-disease` — IBD umbrella; Crohn's signature exists; UC and IBD-general still missing
- `chronic-kidney-disease` — CKD; significant metals angle (cadmium, arsenic, lead renal toxicity)

**Active research area, ready for signature build:**
- `schizophrenia` — 14 sources ingested; copper/zinc/tryptophan signature likely buildable
- `pancreatic-cancer` — Source library exists; mycobiome and iron angle
- `colorectal-cancer` — Wait, `colorectal-cancer.md` IS in signatures — but the entity page may need a signature link check

**Early-stage, foundational work needed:**
- `breast-cancer`, `ovarian-cancer`, `gastric-cancer` — Cancer signatures; metalloestrogen angle
- `hypertension`, `ibs`, `gerd`, `ulcerative-colitis`, `type-1-diabetes`

**Action:** Prioritize `hashimotos-thyroiditis`, `postpartum-depression`, and `rheumatoid-arthritis` for signature build next session.

---

### 8. Index lists `[[colorectal-cancer]]` in Disease Signatures but missing from entity links section

Cross-referencing: `wiki/signatures/colorectal-cancer.md` exists, but the entity page for `colorectal-cancer` should link to it explicitly. Verify bidirectional link is present.

---

### 9. 4 microbe entity pages referenced in content but never created

The following organisms are wikilinked from content pages but have no entity file:

- `[[bacteroides-thetaiotaomicron]]` — Major commensal; zinc-dependent; referenced multiple times
- `[[candida-auris]]` — Emerging pathogen; referenced in candida context
- `[[candida-tropicalis]]` — Candida species; referenced in mycobiome contexts
- `[[aeromonas]]` — Opportunistic pathogen; referenced in gut context

**Action:** Create stub entity pages for these four organisms.

---

### 10. `[[autoimmunity|b-cell-depletion-therapy]]` concept page is missing

The intervention page `b-cell-depletion-therapy-ms.md` links to `[[autoimmunity|b-cell-depletion-therapy]]` as a standalone concept, but this page doesn't exist. Only the intervention page exists. A concept stub explaining the mechanism class would prevent the broken link.

---

### 11. 7 new disease entities not yet reflected in index metadata

Since the last index regeneration, 7 disease entity pages were added that don't appear in the index disease list: `gastric-cancer`, `gerd`, `ibs`, `ovarian-cancer`, `schizophrenia`, `type-1-diabetes`, `ulcerative-colitis`. These are legitimate new pages, not duplicates.

---

### 12. Intervention triangle fields inconsistently applied

Three intervention pages are missing the full triangle field set (`I_to_f_evidence`, `I_to_D_evidence`, `f_to_D`):

- `ecoli-nissle-1917.md` — Triangle present but missing evidence fields and `f_to_D`
- `probiotics-asd-dysbiosis.md` — Triangle present but missing evidence fields and `f_to_D`
- `b-cell-depletion-therapy-ms.md` — Triangle present but missing evidence fields and `f_to_D`
- `ketogenic-diet-ms.md` — Triangle present but missing evidence fields and `f_to_D`

`low-nickel-diet.md` has all fields correctly populated for its completed triangles.

**Action:** Add `I_to_f_evidence`, `I_to_D_evidence`, and `f_to_D` to these four pages.

---

## 🟢 MEDIUM PRIORITY

### 13. Missing concept pages referenced in content

These terms appear as wikilinks across multiple content pages but have no page of their own:

- `[[ahr]]` (Aryl Hydrocarbon Receptor) — Referenced across ASD, MS, and Hashimoto's content
- `[[amyloid-beta]]` — Referenced in Alzheimer's signature
- `[[bile-acid-metabolism]]` — `[[bile-acid-metabolism]]` exists but `[[bile-acid-metabolism]]` is a separate referenced stub; should redirect or merge
- `[[celiac-disease]]` — Referenced in low-nickel-diet intervention as a condition; no entity page
- `[[metal-chelation-therapy|activated charcoal]]` — Referenced in intervention context but no page
- `[[short-chain-fatty-acids|butyrate supplementation]]` — Referenced separately from `[[butyrate]]`; consider whether a stub is needed

**Action:** Create stub entity/concept pages for `ahr` and `amyloid-beta` at minimum. Consider redirect for `bile-acids → bile-acid-metabolism`. Add `celiac-disease` as a disease entity.

---

### 14. `[[akkermansia-mucinicola]]` is a misspelling

One content page links to `[[akkermansia-mucinicola]]`, which doesn't exist. The correct entity is `[[akkermansia-muciniphila]]`. Misspelling appears to be a one-off wikilink error.

**Action:** Find and correct the misspelled wikilink.

---

### 15. `gerd` and `ibs` entity pages have no sources in frontmatter

The newly created entity pages for `gerd` and `type-1-diabetes` and `ovarian-cancer` have `sources: []` — empty source lists — suggesting they were scaffolded but never connected to ingested papers. Both conditions have relevant sources in `wiki/sources/`.

**Action:** Review `wiki/sources/` for GERD, T1D, and ovarian cancer papers and add source filenames to these entity page frontmatter `sources:` fields.

---

### 16. Schizophrenia entity has `.md` extensions in source filenames

The `schizophrenia` entity page lists sources with `.md` extensions appended (e.g., `saha-2005-prevalence-schizophrenia-systematic-review.md`), which is inconsistent with the convention of listing bare filenames without the extension. Other entity pages use bare filenames.

**Action:** Strip `.md` extensions from the `sources:` list in `wiki/entities/schizophrenia.md`.

---

### 17. `pharmacomicrobiomics` concept page exists but is not in the index

The file `wiki/concepts/pharmacomicrobiomics.md` exists on disk but doesn't appear in the index concept list. Minor index staleness aside, verify the page exists and is linked from relevant content.

---

## 📊 SUMMARY TABLE

| Severity | Count | Description |
|----------|-------|-------------|
| 🔴 Critical | 6 | Index stale, 46 duplicate sources, 14 missing subtypes, 5 missing cureva_status, 4 backslash links, 1 incomplete triangle |
| 🟡 High | 6 | 15 diseases without signatures, 4 missing entity pages, missing b-cell-depletion concept, 7 entities not in index, 4 incomplete triangles, GERD entity empty sources |
| 🟢 Medium | 5 | 6 missing concept pages, misspelling, empty source lists on 3 entities, .md extensions in frontmatter, pharmacomicrobiomics not indexed |

---

## RECOMMENDED ACTION SEQUENCE

1. **Fix backslash links** in `dietary-metal-microbiome-interactions.md` (5 minutes)
2. **Complete GERD triangle** in `low-nickel-diet.md` (10 minutes)
3. **Add `subtype:` fields** to 14 entity pages (15 minutes)
4. **Add `cureva_status:` fields** to 5 intervention pages (10 minutes)
5. **Add triangle evidence fields** to 4 intervention pages (30 minutes)
6. **Create stub entity pages** for `bacteroides-thetaiotaomicron`, `candida-auris`, `candida-tropicalis`, `aeromonas` (20 minutes)
7. **Resolve 46 duplicate sources** — consolidate and delete duplicates; verify DOIs on suspected mis-assigned pairs (60–90 minutes)
8. **Regenerate `index.md`** from filesystem (10 minutes)
9. **Begin signature pages** for `hashimotos-thyroiditis` and `postpartum-depression` (next full session)

---

## OPEN QUESTIONS

- Should `inflammatory-bowel-disease` get a signature page as an umbrella, or should `crohns-disease` and `ulcerative-colitis` each get their own (in addition to the existing Crohn's page)?
- Is `SNAS / Systemic Nickel Allergy Syndrome` a disease that warrants its own entity page? It's referenced in the low-nickel-diet intervention but has no entity page.
- Should `bile-acids` and `bile-acid-metabolism` be merged into one page, or kept separate (concept vs metabolite)?
- The `pharmacomicrobiomics` concept page exists but appears underlinked — is it meant to be a prominent concept or a niche stub?
