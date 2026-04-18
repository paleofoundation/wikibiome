---
title: "West 2014 — Metabolomics as a Tool for Discovery of Biomarkers of Autism Spectrum Disorder in the Blood Plasma of Children"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Paul R. West, David G. Amaral, Preeti Bais, Alan M. Smith, Laura A. Egnash, Mark E. Ross, Jessica A. Palmer, Burr R. Fontaine, Kevin R. Conard, Blythe A. Corbett, Gabriela G. Cezar, Elizabeth L. R. Donley, Robert E. Burrier]
year: 2014
journal: "PLOS ONE"
doi: "10.1371/journal.pone.0112445"
tags: [autism-spectrum-disorder, metabolomics, plasma-biomarkers, mass-spectrometry, LC-HRMS, GC-MS, machine-learning, SVM, PLS-DA, diagnostic]
library_category: metabolomics
platform: LC-HRMS-GC-MS
condition: "autism spectrum disorder"
metals_discussed: [iron, zinc]
karen_brain_primitives: [4]
key_findings: ["Training set", "Independent validation set"]
---

# Overview

Multi-platform metabolomics study analyzing **blood plasma from 52 ASD and 30 TD children** (ages 4-6) using 5 mass spectrometry-based methods (4 LC-HRMS + 1 GC-MS). Identified **179 statistically significant features** from univariate analysis, with **SVM and PLS-DA classification models** achieving up to 81% accuracy in an independent 21-sample validation set. Demonstrates feasibility of blood-based metabolomic biomarkers for early ASD diagnosis.

# Key Findings

## Classification Performance

- **Training set** (61 samples): SVM average AUC = 0.86; PLS-DA average AUC = 0.84
- **SVM** with 80 features: accuracy 90%, sensitivity 92%, specificity 87%, AUC = 0.95
- **Independent validation set** (21 samples): up to 81% accuracy
- Random permutation confirmed non-random classification (AUC = 0.52 for random labels)

## Analytical Platform Contributions

- **HILIC LC-HRMS**: highest number of discriminative mass features
- **C8 LC-HRMS**: second most discriminative
- **GC-MS**: contributed ~8% of features
- Approximately 60% of LC-HRMS features annotated with chemical structures
- 36% (142) of GC-MS features confirmed as identified metabolites

## Feature Selection

- 389 statistically significant features from univariate analysis
- Quality-controlled to 179 features for classification modeling
- Feature elimination (in 20-feature steps) identified optimal subsets
- 80 features provided best SVM performance

## Study Design

- Children aged 4-6.92 years
- 18 of 52 ASD subjects on medications (risperidone, sertraline, aripiprazole, etc.)
- 10 of 52 ASD subjects on gluten/casein-free diet
- Blood draws in morning, fasting, at M.I.N.D. Institute

# Relevance to Metallomic Framework

**Moderate relevance** — plasma metabolomics captures metal-dependent pathway outputs:

- Many discriminative metabolites likely include metal-cofactor-dependent enzymatic products
- [[iron]]-dependent tryptophan and phenylalanine metabolism products likely among features
- [[zinc]]-dependent metalloenzyme products captured in metabolomic profiles
- Multi-platform approach provides comprehensive small-molecule coverage
- Potential to identify metal-binding metabolites (e.g., citrate, amino acids)

# Methodological Notes

- Relatively small sample sizes for metabolomics (52 ASD, 30 TD)
- Some ASD subjects on medications and restricted diets — potential confounders
- Multi-platform approach (5 MS methods) maximizes metabolome coverage
- Stemina Biomarker Discovery — commercial interest noted in competing interests
- 2014 study — analytical methods have improved significantly since
- No specific metabolite identification reported in first 6 pages — likely in supplemental data
