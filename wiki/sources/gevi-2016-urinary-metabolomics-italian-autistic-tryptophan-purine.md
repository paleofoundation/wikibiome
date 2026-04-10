---
title: "Gevi 2016 — Urinary Metabolomics of Young Italian Autistic Children Supports Abnormal Tryptophan and Purine Metabolism"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Federica Gevi, Lello Zolla, Stefano Gabriele, Antonio M. Persico]
year: 2016
journal: "Molecular Autism"
doi: "10.1186/s13229-016-0109-5"
tags: [autism-spectrum-disorder, metabolomics, tryptophan, kynurenine, indoxyl-sulfate, indolyl-lactate, melatonin, serotonin, purine, quinolinic-acid, xanthurenic-acid, HILIC-UHPLC, urinary-biomarkers]
library_category: metabolomics
platform: HILIC-UHPLC-MS
condition: "autism spectrum disorder"
---

# Overview

Urinary metabolomics study of **30 young Italian ASD children and 30 age-sex-matched controls** (ages 2-7) using HILIC-UHPLC-MS. Identified **tryptophan metabolism and purine metabolism** as the most perturbed pathways in ASD. ASD children preferentially shunt tryptophan toward the [[kynurenine]] pathway (producing [[xanthurenic acid]] and [[quinolinic acid]]) at the expense of [[serotonin]]/[[melatonin]], with simultaneously elevated microbial degradation products ([[indoxyl sulfate]], [[indolyl-3-acetic acid]], [[indolyl lactate]]).

# Key Findings

## Top 25 Discriminating Metabolites (VIP > 1)

Ranked by OPLS-DA variable importance in projection:
1. **Inosine** (purine metabolism) — elevated in ASD
2. **Uridine** (pyrimidine metabolism) — elevated in ASD
3. **Xanthurenic acid** (tryptophan/kynurenine) — elevated in ASD
4. **Cellobiose** (disaccharide) — elevated in ASD
5. **Phenylalanine** (aromatic amino acid) — elevated in ASD
6. **Pyroglutamic acid** (glutathione metabolism) — elevated in ASD
7. **Methionine** (amino acid) — elevated in ASD
8. **Hypoxanthine** (purine) — elevated in ASD
9. **Quinolinic acid** (tryptophan/kynurenine) — elevated in ASD
10. **Indole-3-carboxylic acid** (tryptophan/microbiome) — low in ASD

## Four Most Perturbed Pathways (MetPA)

1. **Tryptophan metabolism** — largest pathway impact
2. **Purine metabolism** — highest statistical significance
3. **Phenylalanine, tyrosine, tryptophan biosynthesis**
4. **Vitamin B6 metabolism**

## Tryptophan Pathway Dissection (Figure 4)

### Kynurenine Pathway (Elevated in ASD)
- **Kynurenic acid**: increased (p < 0.05)
- **Kynurenine**: increased (p < 0.05)
- **Xanthurenic acid**: increased (p < 0.05)
- **3-Hydroxykynurenine**: increased
- **Quinolinic acid**: increased (p < 0.01) — excitotoxin

### Serotonin/Melatonin Pathway (Decreased in ASD)
- **Serotonin (5-HT)**: decreased (p < 0.05)
- **5-Hydroxyindoleacetic acid**: decreased (p < 0.05)
- **Melatonin**: decreased (p < 0.05)
- **N-acetyl-5-methoxytryptamine**: decreased

### Bacterial Degradation Products (Elevated in ASD)
- **Indican (indoxyl sulfate)**: markedly increased (p < 0.001)
- **Indolyl-3-acetic acid**: increased (p < 0.05)
- **Indolyl lactate**: increased (p < 0.001)

## Classification Performance
- OPLS-DA: clear separation on 3D score plot (31.4% variance in first 3 PCs)
- ROC analysis: AUC = 0.893 (95% CI 0.72-0.96) using top 25 metabolites

# Relevance to Metallomic Framework

**Very high relevance** — tryptophan pathway enzymes are heavily metal-dependent:

- **IDO/TDO** (tryptophan → kynurenine): [[iron]]-containing heme enzymes — iron status directly affects kynurenine/serotonin shunting
- **Kynurenine 3-monooxygenase**: [[iron]]-dependent enzyme producing 3-hydroxykynurenine
- **Quinolinic acid**: excitotoxin that chelates [[iron]] and generates reactive oxygen species via Fenton chemistry
- **Tryptophan hydroxylase** (tryptophan → serotonin/melatonin): [[iron]]-dependent — reduced activity in iron deficiency could explain melatonin deficit
- **Xanthurenic acid**: known [[zinc]] chelator — elevated levels may contribute to zinc depletion
- **[[Indoxyl sulfate]]**: produced by microbial tryptophanase — elevated levels indicate bacterial dysbiosis affecting metal-dependent metabolism
- Purine metabolism perturbation involves [[iron]]-dependent xanthine oxidase

# Methodological Notes

- Well-matched Italian cohort (age, sex, ancestry, city of origin)
- Narrow age window (2-7 years) minimizes age-dependent variability
- HILIC-UHPLC-MS: high sensitivity for polar/small metabolites
- Pathway-centered analysis beyond single metabolite identification
- ~10,000 peaks per sample; 202 metabolites identified from KEGG
- Morning first-void urine — standardized collection
- Previous study by same group confirmed p-cresol elevation
