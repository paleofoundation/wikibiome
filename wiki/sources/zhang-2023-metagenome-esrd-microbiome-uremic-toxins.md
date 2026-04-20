---
title: "Zhang 2023 — Metagenome-Wide Analysis of ESRD Microbiome and Uremic Toxins"
type: source
created: 2026-04-14
updated: 2026-04-17
authors: [Zhang, Liao, Mei, Peng, Li, Qi, Li]
year: 2023
journal: "Genome Biology"
doi: "10.1186/s13059-023-03056-y"
evidence_level: cross-sectional
sample_size: "n=715"
tags: [chronic-kidney-disease, ESRD, metagenomics, uremic-toxins, antimicrobial-resistance, microbiome-signature]
library_category: signatures
platform: both
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 4, 5, 9]
metals_discussed: []
taxa_discussed: [eggerthella-lenta, flavonifractor, roseburia, faecalibacterium-prausnitzii, prevotella, lachnospira, blautia]
key_findings:
  - "353 differentially abundant species identified in ESRD vs healthy controls"
  - "Gut microbiota explains 21-48% of serum uremic toxin variance, exceeding host genetic contribution"
  - "Diagnostic AUC 0.96-0.98 for distinguishing ESRD from healthy; ESRD signatures detectable at CKD stages 3-4"
---

## Key Findings

- **353 species** were differentially abundant in ESRD compared to healthy controls — one of the largest CKD metagenome studies to date.
- Gut microbiota composition **explains 21–48% of serum uremic toxin variance**, substantially exceeding the contribution of host genetics. This positions the microbiome as the primary modifiable driver of uremic toxin burden.
- Diagnostic models achieved **AUC 0.96–0.98** for ESRD detection, with ESRD-associated microbial signatures already present at CKD stages 3/4, suggesting the gut disruption precedes or tracks with renal decline.
- **39.4% increase in antimicrobial resistance (AMR) genes** in ESRD, reflecting the ecological disruption and selection pressure in the CKD gut.
- Uremic toxin producers like **[[eggerthella-lenta]]** and **[[flavonifractor]]** were enriched, while SCFA producers **[[faecalibacterium-prausnitzii]]**, **[[roseburia]]**, **[[blautia]]**, and **[[lachnospira]]** were depleted.

## Methods

- **Study design**: Cross-sectional metagenome-wide association study
- **Population**: 715 subjects including ESRD patients on dialysis and healthy controls, with additional validation in CKD stages 3-4
- **Sequencing**: Shotgun metagenomics enabling species-level resolution, functional pathway analysis, and AMR gene detection
- **Analysis**: Differential abundance testing, serum uremic toxin quantification, microbiome-toxin variance decomposition, diagnostic model construction
- **Strengths**: One of the largest CKD metagenome studies; multi-omic (metagenome + serum metabolomics); AMR analysis
- **Limitations**: Cross-sectional design; ESRD endpoint may not reflect earlier CKD stages; cohort from a single geographic region <!-- NEEDS VERIFICATION: confirm study geography -->

## Detailed Summary

Zhang et al. conducted one of the most comprehensive metagenome-wide analyses of the ESRD gut microbiome, identifying 353 differentially abundant species and demonstrating that the microbiome explains a substantially larger fraction of serum uremic toxin variance (21-48%) than host genetics. This finding reframes CKD as partly a microbiome-driven disease: the uremic toxin burden that accelerates cardiovascular damage and further renal decline is primarily determined by gut microbial composition rather than host genetic variation. The diagnostic models (AUC 0.96-0.98) and early-stage detectability (CKD 3/4) suggest clinical utility for microbiome-based screening. The 39.4% increase in AMR genes adds an important dimension: the CKD gut is not only dysbiotic but also enriched for antibiotic resistance, which constrains therapeutic options and may reflect prior antibiotic exposure in this heavily-medicated population.

## Relevance to WikiBiome

A major signature study for the CKD disease entity page. The finding that gut microbiota explains more uremic toxin variance than host genetics reframes CKD as partly a microbiome-driven disease. Supports entity pages for depleted taxa (Faecalibacterium, Roseburia, Blautia) and enriched toxin producers (Eggerthella lenta, Flavonifractor). The early detectability at CKD 3/4 is relevant to the [[biomarkers]] entity page.

## Relevance to Cureva

Critical for CKD signature development across all layers. The 21–48% variance explained by microbiota provides strong justification for microbiome-targeted interventions. The AMR gene enrichment (Primitive 1) constrains antibiotic-based approaches. The early-stage detectability supports Cureva's diagnostic value proposition — microbiome signatures may flag CKD progression before conventional biomarkers. Informs Primitive 9 (oxygen state) given the ecological shifts described.

## Open Questions

- Which specific microbial metabolic pathways account for the 21-48% uremic toxin variance?
- Can the CKD 3/4 early-detection signature be validated in a prospective screening cohort?
- Does the AMR gene enrichment in ESRD reflect antibiotic selection pressure or intrinsic properties of the enriched taxa?
