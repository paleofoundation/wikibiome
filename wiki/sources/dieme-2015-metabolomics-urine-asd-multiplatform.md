---
title: "Dieme 2015 — Metabolomics Study of Urine in Autism Spectrum Disorders Using a Multiplatform Analytical Methodology"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Binta Dieme, Sylvie Mavel, Helene Blasco, Gabriele Tripi, Frederique Bonnet-Brilhault, Joelle Malvy, Cinzia Bocca, Christian R. Andres, Lydie Nadal-Desbarats, Patrick Emond]
year: 2015
journal: "Journal of Proteome Research"
doi: "10.1021/acs.jproteome.5b00699"
tags: [autism-spectrum-disorder, metabolomics, urine, NMR, LC-HRMS, data-fusion, OPLS-DA, indoxyl-sulfate, phenylacetylglutamine, methylguanidine, biomarkers]
library_category: metabolomics
platform: NMR-LC-HRMS
condition: "autism spectrum disorder"
metals_discussed: [iron]
taxa_discussed: [clostridium]
karen_brain_primitives: [4]
key_findings: ["Fused OPLS-DA model", "Prediction set"]
---

# Overview

Multi-platform urinary metabolomics study combining **1H-NMR, 1H-13C-HSQC-NMR, and LC-HRMS** (ESI+ and ESI- on HILIC and C18 columns) to characterize a metabolic signature of ASD. Analyzed urine from **22 autistic children and 24 controls** using OPLS-DA multivariate modeling. Data fusion of 6 analytical modalities yielded enhanced classification performance (AUC = 0.91, p = 0.006). Key discriminating metabolites include **[[tmao|indoxyl sulfate]]**, **N-acetyl-L-arginine**, **methylguanidine**, and **phenylacetylglutamine**.

# Key Findings

## Classification Performance

- Individual platform OPLS-DA models: variable performance
- **Fused OPLS-DA model** (block-scaling of 6 modalities): R2Y(cum) = 0.88, Q2(cum) = 0.75
- **Prediction set** (8 ASD, 8 controls): AUC = 0.91, p = 0.006
- Data fusion approach outperformed any single analytical platform

## Discriminating Metabolites (p < 0.05)

- **[[tmao|Indoxyl sulfate]]** — tryptophan-derived microbial metabolite
- **N-Acetyl-L-arginine** — arginine derivative
- **Methylguanidine** — creatinine metabolism product
- **Phenylacetylglutamine** — phenylalanine microbial metabolite

## Analytical Approach

- 6 analytical modalities: 1H-NMR, 1H-13C-HSQC-NMR, LC-HRMS (HILIC ESI+, HILIC ESI-, C18 ESI+, C18 ESI-)
- Training set: 46 urines (22 ASD, 24 controls)
- Prediction set: 16 samples (8 ASD, 8 controls)
- OPLS-DA for each modality, then data fusion via block-scaling

# Relevance to Metallomic Framework

**High relevance** — key discriminating metabolites are products of metal-dependent microbial pathways:

- **[[tmao|Indoxyl sulfate]]**: produced from [[tryptophan-metabolism]] by gut bacteria via indole pathway, then sulfated in liver; tryptophan metabolism is [[iron]]-dependent (IDO/TDO enzymes)
- **Phenylacetylglutamine**: microbial metabolism of [[phenylalanine]] — related to [[clostridium]] activity
- **Methylguanidine**: creatinine-derived uremic toxin — accumulates when kidney function impaired by metal toxicity
- Multi-platform data fusion approach could be applied to metal-metabolite interaction studies

# Methodological Notes

- French population (CHRU de Tours)
- Small sample size (22 ASD, 24 controls)
- Urine as matrix — non-invasive, captures microbial metabolites
- First study combining NMR and LC-HRMS with data fusion in ASD
- "Just accepted" manuscript format — pre-proof version
- Limited clinical phenotyping described in first 6 pages
