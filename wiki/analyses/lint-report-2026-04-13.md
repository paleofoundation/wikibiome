---
title: "WikiBiome Lint Report — 2026-04-13"
type: analysis
platform: cureva
created: 2026-04-13
updated: 2026-04-13
tags: [maintenance, lint, health-check]
---

# WikiBiome Lint Report — 2026-04-13

Automated health check run: 2026-04-13 
Wiki pages scanned: 1,773 total (1,515 sources + 258 content pages) 
Issues found: 4 critical, 5 high-priority, 7 medium-priority

---

## PROGRESS SINCE 2026-04-12

Significant work has been done since the last lint report. Before cataloguing new issues, here is what was resolved:

| Issue (from April 12 report) | Status |
|------------------------------|--------|
| GERD triangle incomplete in `low-nickel-diet.md` | ✅ Fixed — all fields populated, `status: promising` |
| 4 intervention pages missing triangle evidence fields | ✅ Fixed — `I_to_f_evidence`, `I_to_D_evidence`, `f_to_D` added to b-cell-depletion-therapy-ms, ecoli-nissle-1917, ketogenic-diet-ms, probiotics-asd-dysbiosis |
| 15 disease entities without signature pages | ⬆️ Partial — 2 new signatures added (hashimotos-thyroiditis, pancreatic-cancer); 13 still missing |
| 9 new intervention pages added | ✅ Good — fmt-intervention, iron-management, ketogenic-diet, mediterranean-diet, probiotics-general, selenium-supplementation, vitamin-d-supplementation, zinc-supplementation all created with triangle structure |
| New glossary and overview pages | ✅ Created |
| 89 new source pages ingested | ✅ +89 sources (1426 → 1515) |
| Depression signature updated | ✅ Full MDD signature page created/expanded |

---

## 🔴 CRITICAL

### 1. Index severely stale (again)

`wiki/index.md` frontmatter still reads `updated: 2026-04-09` and the summary table is significantly out of date.

| Category | Index Claims | Actual Count | Delta |
|----------|-------------|--------------|-------|
| Sources | 1,426 | 1,515 | +89 |
| Disease Signatures | 13 | 15 | +2 |
| Interventions | 5 | 13 | +8 |
| Glossary | — | 1 | new file |
| Overview | — | 1 | new file |

The body of index.md also does not list `hashimotos-thyroiditis`, `pancreatic-cancer`, or `depression` under signatures, and the 8 new intervention pages are absent entirely.

Action: Regenerate `index.md` from filesystem. Update `updated:` date to 2026-04-13.

---

### 2. Backslash-broken wikilinks still present in `dietary-metal-microbiome-interactions.md`

This issue was flagged in the April 12 report and remains unresolved. Line 58 still reads:

```
[[lactobacillus|Lactobacillus]]
```

All four broken links use backslash instead of forward slash. These will render as broken links on WikiBiome.

Action: Fix the four backslash-broken links in `wiki/concepts/dietary-metal-microbiome-interactions.md`. Change `\|` to `|` in all four wikilinks.

---

### 3. Metal entity `subtype:` fields still missing

14 entity pages were flagged for missing `subtype:` in the April 12 report. Checking today: 12 of 19 metal pages still lack the field. Only cobalt, iodine, magnesium, molybdenum, and tin have `subtype:` set.

Still missing:
`aluminum`, `arsenic`, `cadmium`, `chromium`, `copper`, `iron`, `lead`, `manganese`, `mercury`, `nickel`, `selenium`, `zinc`

Also still missing: `candida-albicans` (subtype: fungus), `enterococcus` (subtype: microbe)

Action: Add `subtype: metal` to all 12 metal entity pages. Add `subtype: fungus` to candida-albicans. Add `subtype: microbe` to enterococcus.

---

### 4. All 13 intervention pages missing `cureva_status:` field

Per schema, intervention pages require a `cureva_status: complete | partial | in-progress` field. None of the 13 current intervention pages have it:

Original 5 (carried over from April 12 report):
- `b-cell-depletion-therapy-ms.md`
- `ecoli-nissle-1917.md`
- `ketogenic-diet-ms.md`
- `low-nickel-diet.md`
- `probiotics-asd-dysbiosis.md`

8 new pages (added since April 12):
- `fmt-intervention.md`
- `iron-management.md`
- `ketogenic-diet.md`
- `mediterranean-diet.md`
- `probiotics-general.md`
- `selenium-supplementation.md`
- `vitamin-d-supplementation.md`
- `zinc-supplementation.md`

Suggested assignments based on triangle completeness:
- `low-nickel-diet.md` → `complete` (5 validated triangles)
- `ecoli-nissle-1917.md` → `partial` (strong endometriosis triangle; other conditions partial)
- `fmt-intervention.md` → `partial` (C. diff validated; IBD promising)
- `iron-management.md` → `partial` (PPD triangle validated; IBD promising; Parkinson's in-progress)
- `selenium-supplementation.md` → `partial` (Hashimoto's triangle strong; Graves' promising)
- `vitamin-d-supplementation.md` → `partial` (MS, Hashimoto's triangles promising)
- `b-cell-depletion-therapy-ms.md`, `ketogenic-diet-ms.md`, `ketogenic-diet.md`, `mediterranean-diet.md`, `probiotics-general.md`, `probiotics-asd-dysbiosis.md`, `zinc-supplementation.md` → `partial`

Action: Add `cureva_status:` field to all 13 intervention pages.

---

## 🟡 HIGH PRIORITY

### 5. 46+ duplicate source files — still unresolved

The duplicate source cleanup identified in the April 12 report was not performed. The zou-2022 triplet (three filenames for one paper) was confirmed still present. Per the April 12 report, there are 46 pairs and 3 triplets total. This inflates the source count by roughly 50 files and clutters cross-references.

Action: Execute the duplicate cleanup from the April 12 report's table. Priority: delete the confirmed duplicates first (22 pairs), then investigate the suspected wrong-DOI assignments.

---

### 6. 13 disease entities still without companion signature pages

Reduced from 15 to 13 since the April 12 report (hashimotos-thyroiditis and pancreatic-cancer signatures now exist). Still missing:

Highest priority (large source libraries, strong metallomic angle):
- `postpartum-depression` — PPD; significant source library; estrobolome, zinc/iron angle; iron-management intervention page exists
- `rheumatoid-arthritis` — RA; copper/zinc/iron signature; heavy source library
- `schizophrenia` — 14+ sources ingested; copper/zinc/tryptophan signature buildable
- `chronic-kidney-disease` — CKD; cadmium, arsenic, lead renal toxicity; large source library

Active research areas:
- `breast-cancer`, `ovarian-cancer`, `gastric-cancer` — Cancer signatures; metalloestrogen angle
- `type-1-diabetes`, `ulcerative-colitis` — Separate from T2D and Crohn's signatures

Foundational work needed:
- `hypertension`, `ibs`, `gerd`, `inflammatory-bowel-disease`

---

### 7. Iron supplementation STOP pages missing for Parkinson's and Depression

The April 12 gaps report explicitly identified this: both Parkinson's disease and Major Depressive Disorder have the same hepcidin/siderophore pattern that warrants an iron supplementation STOP page (matching the pattern already documented for MS, Crohn's, endometriosis, PCOS, ASD, and Graves'). 

The `iron-management.md` intervention page exists but provides conditional guidance, not a categorical STOP. The pattern is clear enough for both conditions to warrant dedicated STOP pages.

Action: Create `stop-iron-supplementation-parkinsons.md` and `stop-iron-supplementation-depression.md` following the existing STOP template.

---

### 8. `[[akkermansia-mucinicola]]` misspelling persists in `parkinsons-disease.md`

Flagged in the April 12 report. The misspelling appears on line 20 and again in the taxa table of `wiki/signatures/parkinsons-disease.md`. The correct entity is `[[akkermansia-muciniphila]]`.

Action: Open `wiki/signatures/parkinsons-disease.md` and replace both instances of `[[akkermansia-mucinicola]]` with `[[akkermansia-muciniphila]]`.

---

### 9. 4 missing entity stubs still not created

Also carried over from the April 12 report without resolution:
- `[[bacteroides-thetaiotaomicron]]` — major zinc-dependent commensal; multiply referenced
- `[[candida-auris]]` — emerging pathogen; referenced in mycobiome contexts
- `[[candida-tropicalis]]` — Candida species; mycobiome contexts
- `[[aeromonas]]` — opportunistic pathogen; gut contexts

Action: Create stub entity pages for these four organisms with at minimum `title`, `type`, `subtype`, `created`, `tags` frontmatter.

---

## 🟢 MEDIUM PRIORITY

### 10. Missing concept pages: `ahr`, `amyloid-beta`, `b-cell-depletion-therapy`, `celiac-disease`

Carried over from April 12. These terms are wikilinked from content pages but have no target pages:

- `[[ahr]]` (Aryl Hydrocarbon Receptor) — referenced in ASD signature, MS, Hashimoto's, depression, and tryptophan-metabolism pages; the glossary defines it briefly but no concept page exists
- `[[amyloid-beta]]` — referenced in Alzheimer's signature; foundational to the amyloid cascade discussion
- `[[autoimmunity|b-cell-depletion-therapy]]` — linked from `b-cell-depletion-therapy-ms.md` as a concept page, but only the intervention page exists
- `[[celiac-disease]]` — referenced in `low-nickel-diet.md`; no entity page

---

### 11. Glossary and overview pages not indexed

`wiki/glossary.md` and `wiki/overview.md` were created since the last index update and are not listed anywhere in `wiki/index.md`. They should appear in the index with their own section.

---

### 12. Cerebral palsy: significant source library, no entity page

Identified in the April 12 gaps report: ~79 raw papers; no entity page; no signature. Still not actioned. Given the source volume, a stub entity and eventual signature are warranted.

Action: Create `wiki/entities/cerebral-palsy.md` stub.

---

### 13. SNAS (Systemic Nickel Allergy Syndrome) has no entity page

SNAS is referenced as a condition in `low-nickel-diet.md` and in several sources, but has no entity page. It sits at the intersection of the nickel, endometriosis, IBS, and GERD signature clusters — a WikiBiome entity page would connect these threads.

Action: Create `wiki/entities/snas.md` entity page.

---

### 14. Schizophrenia entity still has `.md` extensions in sources list

Flagged in April 12 report. `wiki/entities/schizophrenia.md` lists source filenames with `.md` extensions appended (e.g., `saha-2005-prevalence-schizophrenia-systematic-review.md`), inconsistent with convention.

Action: Strip `.md` extensions from the `sources:` list in `wiki/entities/schizophrenia.md`.

---

### 15. `pharmacomicrobiomics` concept page exists but not in index

Confirmed: `wiki/concepts/pharmacomicrobiomics.md` exists on disk but does not appear in the concept list in `wiki/index.md`. This is partly an index-staleness issue, but the page also appears to have few inbound links.

Action: Add to index; verify inbound links from relevant intervention and source pages.

---

### 16. `iodine` listed as `subtype: metalloid` — may be incorrect subtype

`wiki/entities/iodine.md` has `subtype: metalloid`. Iodine is a halogen/nonmetal — it is not a metalloid by standard chemistry classification. Given its context in this wiki (thyroid function, Hashimoto's, Graves', nutritional immunity) it could be `subtype: nutrient-mineral` or simply `subtype: trace-element`. Review for consistency with the other entity pages.

---

## 📊 SUMMARY TABLE

| Severity | Count | Key Items |
|----------|-------|-----------|
| 🔴 Critical | 4 | Index stale (+89 sources, +8 interventions, +2 sigs); backslash links unfixed; 12 metals missing subtype; 13 interventions missing cureva_status |
| 🟡 High | 5 | 46+ duplicate sources unresolved; 13 diseases without signatures; 2 missing STOP pages (PD, MDD); akkermansia misspelling; 4 missing entity stubs |
| 🟢 Medium | 7 | 4 missing concept stubs; glossary/overview not indexed; cerebral palsy no entity; SNAS no entity; schizophrenia .md extensions; pharmacomicrobiomics not indexed; iodine subtype incorrect |

---

## RECOMMENDED ACTION SEQUENCE

Quick wins (< 5 min each):
1. Fix 4 backslash links in `dietary-metal-microbiome-interactions.md`
2. Fix `[[akkermansia-mucinicola]]` misspelling in `parkinsons-disease.md` (2 occurrences)
3. Strip `.md` extensions from schizophrenia entity sources list
4. Add `cureva_status:` to all 13 intervention pages (batch edit)

Short tasks (15–30 min each):
5. Add `subtype: metal` to 12 metal entity pages + candida-albicans + enterococcus
6. Create 4 missing entity stubs (bacteroides-thetaiotaomicron, candida-auris, candida-tropicalis, aeromonas)
7. Create STOP pages for iron supplementation in Parkinson's and Depression
8. Create `ahr` and `amyloid-beta` concept stubs (highest-traffic missing pages)
9. Regenerate `index.md` from filesystem

Longer tasks (next sessions):
10. Execute duplicate source cleanup (46+ pairs from April 12 report)
11. Build signature pages for postpartum-depression and rheumatoid-arthritis
12. Create SNAS entity page; create b-cell-depletion-therapy concept page
13. Build signature pages for schizophrenia, CKD
14. Create cerebral-palsy entity stub

---

## OPEN QUESTIONS

- Should `inflammatory-bowel-disease` get an umbrella signature, or stay as entity-only with separate Crohn's and UC signatures?
- Should the `depression` signature also cover PPD (postpartum-depression), or should PPD get a fully separate signature? The MDD signature currently pulls some PPD sources.
- Is the `iodine` subtype `metalloid` intentional? If not, what's the correct term for thyroid-relevant minerals?
- Should `ketogenic-diet.md` (general) and `ketogenic-diet-ms.md` (MS-specific) coexist, or should the MS-specific page become a triangle inside the general page? Currently the content overlaps significantly.
- The `probiotics-asd-dysbiosis.md` and `probiotics-general.md` pages now have overlapping content. Should the ASD-specific page link to the general page as a parent, or should they remain independent?
