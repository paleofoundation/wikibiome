---
title: "Ingest Completeness Audit — 2026-04-18"
type: analysis
platform: cureva
created: 2026-04-18
updated: 2026-04-18
tags: [audit, data-quality, frontmatter, wikilinks, ghost-pages]
---

# Ingest Completeness Audit

Scope: Full audit of `/wiki/` against 6 completeness checks.
Run date: 2026-04-18
Inventory: 1,706 source pages | 162 entities | 108 concepts | 41 signatures | 30 interventions | 8 STOPs

## Summary

| # | Check | Count | Severity |
|---|-------|-------|----------|
| 1 | Orphan PDFs (raw/ with no source page) | ~3,548 of 5,420 PDFs | High (many are duplicates/hash-named files) |
| 2 | Frontmatter gaps (source pages) | 982 missing library_category; 1,094 missing key_findings; 695 missing taxa_discussed; 642 missing metals_discussed; 560 missing/empty karen_brain_primitives; 434 missing/invalid evidence_level | High |
| 3 | Unreferenced source pages | 905 of 1,706 (53%) | High |
| 4 | source_count drift | 0 mismatches | Clean |
| 5 | Ghost wikilink targets | 1,200 unique ghosts | High |
| 6 | Disease-signature gaps | 6 real gaps (82 are non-disease condition values) | Low-Moderate |

---

## Check 1: Orphan PDFs

5,420 PDFs found in `raw/` (including subdirectories). ~3,548 lack a clearly matching source page.

Many orphans are expected: hash-named files (`337cd8506ea601f8edce5cf40e4e2206.pdf`), duplicates with slight name variations, supplementary tables, and non-research PDFs. A substantial subset are legitimately un-ingested papers.

Representative orphan examples:

| PDF | Likely reason |
|-----|--------------|
| `libbey2018.pdf` | Short name, no matching slug |
| `lowNiDiet_r8.0_summaryTables.pdf` | Supplementary tables, not a paper |
| `3ff6169a5627da186ac47a49976b6fd1 1.pdf` | Hash-named download |
| `ZNinPPD-JCDR-2021.pdf` | Abbreviated name, not yet ingested |
| `12_Chouari_Environmental_EEET_2024_7.pdf` | Numbered file, not yet ingested |
| `ijerph-17-03782.pdf` | Journal code only |
| `nickel-children-review.pdf` | Generic name, not yet ingested |
| `73706124c1e843776aca71ecfb3815c2 2.pdf` | Hash-named duplicate |
| `s00018-018-2988-4.pdf` | DOI-based filename |
| `out110_en.pdf` | Regulatory document |

Action: Batch-triage orphan PDFs. Hash-named and duplicate files can be identified and excluded. Remaining un-ingested papers should be queued for ingest.

---

## Check 2: Frontmatter Gaps

Total source pages: 1,706. Fields checked against v2 schema requirements.

| Field | Missing | Invalid/Empty | Total gap | % gap |
|-------|---------|---------------|-----------|-------|
| `platform` | 0 | 0 | 0 | 0% |
| `doi` | 0 | 0 | 0 | 0% |
| `evidence_level` | 430 | 4 ("not yet classified") | 434 | 25% |
| `karen_brain_primitives` | 528 | 32 (empty `[]`) | 560 | 33% |
| `metals_discussed` | 642 | -- | 642 | 38% |
| `taxa_discussed` | 695 | -- | 695 | 41% |
| `library_category` | 982 | -- | 982 | 58% |
| `key_findings` | 1,092 | 2 (empty `[]`) | 1,094 | 64% |

5 examples per gap:

evidence_level missing:
- `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`
- `dinakaran-2014-circdna-circulating-microbiome-cvd.md`
- `jie-2017-gut-microbiome-acvd.md`
- `pendergrass-2026-counterproductive-expose-testing.md`

evidence_level "not yet classified" (invalid):
- `16s-rrna-t2d-subgingival-plaque-microbiota.md`
- `NOTE-evaluation-risk-ptes-italy-fish-products.md`
- `16s-rrna-yu-ye-tang-t2d-metabolomics.md`
- `16s-rrna-t1d-t2d-gut-microbiota-adults-fragment-analysis.md`

library_category missing:
- `ghorbani-2024-gut-microbiome-dopamine-serotonin-bdnf-schizophrenia.md`
- `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md`
- `saha-2005-prevalence-schizophrenia-systematic-review.md`
- `atabilen-2022-dietary-interventions-ms-systematic-review.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`

karen_brain_primitives missing:
- `ghorbani-2024-gut-microbiome-dopamine-serotonin-bdnf-schizophrenia.md`
- `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md`
- `saha-2005-prevalence-schizophrenia-systematic-review.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`
- `luo-2022-gut-microbiota-metabolites-heart-failure-mr.md`

karen_brain_primitives empty `[]`:
- `west-2022-multi-angle-meta-analysis-gut-microbiome-asd.md`
- `zhang-2021-fluoxetine-amitriptyline-gut-microbiota-cums-rats.md`
- `wang-2026-fecal-metabolomics-ms.md`
- `alibek-2022-torch-infections-dysbiotic-microbiome-asd.md`
- `van-sadelhoff-2019-gut-immune-brain-axis-asd-amino-acids.md`

key_findings missing:
- `ghorbani-2024-gut-microbiome-dopamine-serotonin-bdnf-schizophrenia.md`
- `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md`
- `saha-2005-prevalence-schizophrenia-systematic-review.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`
- `dinakaran-2014-circdna-circulating-microbiome-cvd.md`

metals_discussed missing:
- `ghorbani-2024-gut-microbiome-dopamine-serotonin-bdnf-schizophrenia.md`
- `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md`
- `saha-2005-prevalence-schizophrenia-systematic-review.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`
- `luo-2022-gut-microbiota-metabolites-heart-failure-mr.md`

taxa_discussed missing:
- `saha-2005-prevalence-schizophrenia-systematic-review.md`
- `mafra-2022-fermented-food-cardiometabolic-diseases.md`
- `pendergrass-2026-counterproductive-expose-testing.md`
- `liu-2025-immune-gut-microbiota-crc-mr-mediation.md`
- `liu-2019-urinary-amino-acids-asd-biomarkers.md`

Pattern: The same ~500-1000 source pages consistently lack multiple v2 fields. These are v1-era batch-migrated pages that received only `platform` and `doi` but not the deeper classification fields. A single batch migration pass targeting these pages would close most gaps.

---

## Check 3: Unreferenced Source Pages

905 of 1,706 source pages (53%) are not referenced by any entity, concept, signature, intervention, or STOP page.

These sources exist in isolation -- they have been ingested and summarized but their findings have not been wired into the knowledge graph.

15 representative unreferenced sources:
- `16s-rrna-t2d-subgingival-plaque-microbiota`
- `16s-rrna-yu-ye-tang-t2d-metabolomics`
- `Chen2023-gut-microbiota-inflammatory-mendelian-covid`
- `Li2023-genetic-causal-gut-microbiome-covid`
- `NOTE-evaluation-risk-ptes-italy-fish-products`
- `Russell2023-comorbidities-multimorbidity-covid`
- `abbott-2019-aip-diet-hashimotos-lifestyle-intervention`
- `abdollahpour-2026-lactobacillus-casei-ppd-rct`
- `abedi-2023-arsenic-mercury-hen-eggs-iran`
- `achdout-2021-influenza-sars-cov2-coinfection-lethality`
- `adapa-2023-microbiome-thyroid-link-gut-microbiota-review`
- `adhikari-2024-leafy-vegetables-heavy-metals-johannesburg`
- `afroz-2021-high-salt-diet-microbiome-autism-behavior-mice`
- `agagunduz-2023-dietary-lipids-lipidomics-gut-brain-t2d`
- `agrawal-2022-risk-factors-ppd`

Action: Prioritize wiring these into entity and concept pages. Many are condition-specific papers that should update their respective disease entity and signature pages.

---

## Check 4: source_count Drift

0 mismatches found. All entity pages with both `source_count` and `sources` array have matching counts. Clean.

---

## Check 5: Ghost Pages (Broken Wikilinks)

2,425 unique wikilink targets found across all wiki pages. 1,200 targets (49%) have no corresponding file.

### By category:

| Category | Count | Description |
|----------|-------|-------------|
| Entity-level ghosts | 1,084 | Missing microbe, disease, metal, metabolite pages |
| Concept-level ghosts | 83 | Missing mechanism/pathway pages |
| Source reference ghosts | 15 | Wikilinks to source slugs that don't exist |
| Case-mismatch ghosts | 21 | File exists but with different capitalization |

### Case-mismatch ghosts (21 -- easy fixes):
- `Amyloid-Beta` -> `amyloid-beta`
- `Bacteroides-thetaiotaomicron` -> `bacteroides-thetaiotaomicron`
- `Comorbidities` -> `comorbidities`
- `Dietary-nickel-exposure` -> `dietary-nickel-exposure`
- `Gordonibacter-urolithinfaciens` -> `gordonibacter-urolithinfaciens`
- `Gut-microbiome` -> `gut-microbiome`
- `Heavy-metals` -> `heavy-metals`
- `Hepcidin` -> `hepcidin`
- `Hydrogenase` -> `hydrogenase`
- `Irving-Williams-series` -> `irving-williams-series`
- `Mediterranean-diet` -> `mediterranean-diet`
- `Metabolic-syndrome` -> `metabolic-syndrome`
- `Metallomics` -> `metallomics`
- `Nickel-allergy` -> `nickel-allergy`
- `Prebiotics` -> `prebiotics`
- `Pseudomonas-aeruginosa` -> `pseudomonas-aeruginosa`
- `Quercetin` -> `quercetin`
- `Rheumatoid-arthritis` -> `rheumatoid-arthritis`
- `Streptococcus-pneumoniae` -> `streptococcus-pneumoniae`
- `Urease` -> `urease`
- `note-evaluation-risk-ptes-italy-fish-products` -> `NOTE-evaluation-risk-ptes-italy-fish-products`

### Source reference ghosts (15 -- missing source pages):
- `eggers-2023-prenatal-lead-exposure-gut-microbiome-childhood`
- `gong-2024-iodine-intake-gut-microbiota-metabolites-hashimotos`
- `guthrie-2017-microbiome-consensus-molecular-subtypes-crc`
- `li-2025-viral-infection-thyroid-disorders`
- `morton-2023-multi-level-gut-brain-axis-asd`
- `pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian-randomization`
- `rizzi-2017-ibs-nickel-diet`
- `saito-2019-metagenomic-gut-microtiota-colorectal-adenoma`
- `saresella-2017-diet-modulation-microbiome-ms-pilot`
- `saresella-2020-fatty-acids-dysbiosis-inflammation-ms`
- `strati-2017-altered-gut-microbiota-mycobiota-asd`
- `wu-2024-sex-hormones-microbiota-crc`
- `zhang-2015-arsenic-cadmium-microbiota-liver-toxicity-mice`
- `zhao-2023-altered-gut-microbiota-biomarkers-asd`
- `zhou-2025-gut-microbiota-immune-nervous-system-asd`

### Concept-level ghosts (83 -- top 30):
- `AhR-signaling`
- `amino-acid-metabolism`
- `antibiotic-resistance`
- `antibiotic-resistance-genes`
- `autoimmunity`
- `barrier-integrity`
- `blood-brain barrier`
- `bone metabolism`
- `colonization-resistance`
- `copper-dysregulation`
- `drug-metabolism-variability`
- `gut barrier`
- `gut barrier function`
- `gut-barrier`
- `gut-brain axis`
- `gut-gonadal-axis`
- `gut-heart axis`
- `gut-kidney-axis`
- `gut-permeability`
- `gut-thyroid axis`
- `gut-thyroid-axis`
- `gut-vagina-axis`
- `immune dysregulation`
- `insulin resistance`
- `intestinal barrier`
- `intestinal permeability`
- `iron homeostasis`
- `iron-dysregulation`
- `kynurenine-pathway`
- `lipid metabolism`

### Entity-level ghosts (1,084 -- top 50):
- `acinetobacter-baumannii`
- `adenomyosis`
- `alternaria`
- `amino acids`
- `anemia`
- `antibiotics`
- `archaea`
- `arginine`
- `autoimmune thyroid disease`
- `bacterial vaginosis`
- `bacteroides-caccae`
- `bacteroides-uniformis`
- `bdnf`
- `bifidobacterium-longum`
- `bipolar-disorder`
- `bladder-cancer`
- `campylobacter`
- `candida`
- `candida-glabrata`
- `chelation-therapy`
- `cholesterol`
- `chronic-fatigue-syndrome`
- `citrobacter`
- `clostridioides-difficile-infection`
- `constipation`
- `coronary-artery-disease`
- `corynebacterium`
- `curcumin`
- `diabetic-kidney-disease`
- `disulfiram`
- `enterobacter`
- `enterococcus-faecalis`
- `enterococcus-faecium`
- `ergothioneine`
- `estrogen`
- `eubacterium-rectale`
- `faecalibacterium`
- `ferritin`
- `ferroportin`
- `folate`
- `fungal dysbiosis`
- `haemophilus`
- `heart-failure`
- `helicobacter`
- `hypothyroidism`
- `indoxyl sulfate`
- `irritable-bowel-syndrome`
- `lactobacillus-rhamnosus`
- `lung-cancer`
- `metabolic-syndrome` (note: exists as entity but linked with wrong case elsewhere)

Action: Prioritize creating entity pages for high-frequency ghost targets. Fix 21 case-mismatch links. Create or locate the 15 missing source pages.

---

## Check 6: Disease-Signature Gaps

124 unique `condition` values found across source pages. 41 signature pages exist.

Many condition values are not diseases (e.g., "cross-condition", "RNA-based dual-input metal and pH sensing in bacteria"). After excluding non-disease values and accounting for slug variations (e.g., "Parkinson's disease" matches `parkinsons-disease-signature.md`, "polycystic ovary syndrome" matches `pcos-signature.md`, "gastroesophageal-reflux-disease" matches `gerd-signature.md`), the true gaps are:

| Condition | Source count | Status |
|-----------|-------------|--------|
| COVID-19 | 9 | No signature (related: `long-covid-signature.md` exists) |
| gestational diabetes | 5 | No signature |
| major depressive disorder | 2 | No signature (related: `depression-signature.md` exists) |
| prediabetes | 1 | No signature |
| preterm delivery | 1 | No signature |

Action: COVID-19 (9 sources) and gestational diabetes (5 sources) are strong candidates for new signature pages. MDD may be covered by the existing depression signature -- verify and either merge or create separately.

---

## Priority Recommendations

1. Batch frontmatter migration -- ~700 source pages lack multiple v2 fields. A programmatic pass can infer `evidence_level` from study-design keywords, extract `key_findings` from existing body text, and populate `library_category` from tags.
2. Wire unreferenced sources -- 905 source pages (53%) are disconnected from the knowledge graph. Prioritize by condition to maximize signature depth.
3. Fix case-mismatch wikilinks -- 21 trivial fixes.
4. Create high-value entity pages -- Focus on frequently-linked ghosts: `irritable-bowel-syndrome`, `bipolar-disorder`, `hypothyroidism`, `heart-failure`, `estrogen`, `campylobacter`, `enterococcus-faecalis`.
5. Create missing concept pages -- `gut-brain axis`, `gut-barrier`, `insulin resistance`, `intestinal permeability`, `iron homeostasis`, `kynurenine-pathway`.
6. Resolve source ghosts -- 15 source slugs are referenced but don't exist. Either create the pages or fix the broken links.
