---
title: "Feng 2024 — Causal Relationship between Gut Microbiota and Kidney Diseases: Mendelian Randomization"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Zhoushan Feng, Yuliang Zhang, Yiyu Lai, Chunhong Jia, Fan Wu, Dunjin Chen]
year: 2024
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2023.1277554"
evidence_level: quasi-experimental
sample_size: "GWAS summary statistics"
tags: [chronic-kidney-disease, CKD, mendelian-randomization, kidney-diseases, nephrotic-syndrome, glomerulonephritis, IgA-nephropathy, causal-inference]
library_category: causal
platform: both
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 3]
metals_discussed: []
taxa_discussed: [lachnospiraceae]
key_findings:
  - "12 bacterial genera causally associated with nephrotic syndrome via MR"
  - "7 genera associated with CKD; reverse MR shows no causal effect of kidney disease on gut microbiota"
  - "Disease-subtype-specific causal taxa identified for CKD, MN, glomerulonephritis, and IgA nephropathy"
keystone: false
---

# Causal Relationship between Gut Microbiota and Kidney Diseases

## Key Findings

- **12 bacterial genera** showed significant causal associations with nephrotic syndrome, and **7 genera** were causally associated with [[chronic-kidney-disease]] through Mendelian randomization (Feng et al. 2024, quasi-experimental/MR).
- **7 bacterial genera** were causally associated with membranous nephropathy and **3 with glomerulonephritis**, revealing disease-subtype-specific causal relationships.
- **Reverse MR did not reveal causal relationships** from kidney diseases to gut microbiota composition, strengthening the interpretation that the microbiome drives renal disease rather than the reverse.
- The study extends beyond CKD to include **IgA nephropathy, nephrotic syndrome, membranous nephropathy, and glomerulonephritis**, providing the broadest MR assessment of gut-kidney causal relationships to date.

## Methods

- **Study design**: Two-sample Mendelian randomization using GWAS summary statistics
- **Exposures**: Genetically predicted abundances of gut bacterial taxa
- **Outcomes**: Multiple kidney disease subtypes -- CKD, nephrotic syndrome, glomerulonephritis, membranous nephropathy, IgA nephropathy
- **MR methods**: Inverse variance weighted, MR-Egger, weighted median, and sensitivity analyses
- **Bidirectional**: Forward and reverse MR performed to test directionality
- **Limitations**: MR assumes no horizontal pleiotropy; genus-level resolution limits mechanistic interpretation; European-ancestry GWAS may not generalize <!-- NEEDS VERIFICATION: confirm specific taxa identified for each kidney disease subtype -->

## Detailed Summary

Feng et al. applied two-sample MR across multiple kidney disease subtypes, providing the most comprehensive causal assessment of gut-kidney relationships in the MR literature. The key methodological contribution is the bidirectional design: the absence of reverse causation (kidney disease to microbiome) in MR analysis supports the hypothesis that gut dysbiosis drives renal pathology rather than merely reflecting it. This is consistent with Luo 2023 (which identified Desulfovibrionales and Lachnospiraceae in CKD specifically) and Ren 2023 (which linked taxa to inflammatory markers). The disease-subtype specificity is particularly valuable -- different kidney diseases appear to have distinct causal microbiome profiles, arguing against a single "gut-kidney axis" model and in favor of disease-specific ecological disruptions.

## Relevance to WikiBiome

Strengthens the CKD disease entity page with causal (MR) evidence. The subtype-specific findings are important for distinguishing CKD from IgA nephropathy and glomerulonephritis entity pages. The unidirectional causality finding is a key talking point for WikiBiome's coverage of the gut-kidney axis. Supports the [[lachnospiraceae]] entity page if confirmed among the protective taxa.

## Relevance to Cureva

The subtype-specific causal taxa inform disease-specific intervention targeting (Primitive 1). If different kidney diseases have different causal microbiome profiles, then CKD interventions should differ from IgA nephropathy interventions at the microbial level. The absence of reverse causation supports the value of early microbiome intervention before significant renal damage. Complements Luo 2023 and Ren 2023 in building the causal evidence layer for the CKD signature page.

## Open Questions

- Which specific genera drive the nephrotic syndrome association? <!-- NEEDS VERIFICATION -->
- Do the CKD-causal genera overlap with the ESRD-enriched taxa identified by Zhang 2023 in observational data?
- Can MR findings guide strain-level probiotic selection for kidney disease subtypes?
