---
title: "A two-sample Mendelian randomization study reveals the causal effects of statin medication on gut microbiota abundance"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Zhou P, Qiu C, Zhuang Z, Shi K, Yang Z, Ding Y, Qu H, Xia J]
journal: Frontiers in Genetics
year: 2024
doi: "10.3389/fgene.2024.1380830"
tags: [ovarian-cancer, statins, gut-microbiota, Mendelian-randomization, Parabacteroides, Desulfovibrio, Ruminococcaceae]
platform: wikibiome
evidence_level: mendelian-randomization
taxa_discussed: [desulfovibrio, parabacteroides]
karen_brain_primitives: [3]
evidence_level: computational-prediction
sample_size: "GWAS summary statistics"
library_category: causal
condition: "ovarian-cancer"
metals_discussed: []
key_findings:
  - "Statin use causally reduces abundance of five gut taxa including Parabacteroides and Ruminococcaceae"
  - "Statin use causally increases Desulfovibrio abundance"
  - "Two-sample MR design using GWAS summary statistics supports causal direction from statin exposure to microbiome shifts"
---

# Statin Medication Causal Effects on Gut Microbiota Abundance

## Key Findings

- **Statin medication causally reduces abundance of five gut taxa**, including Parabacteroides and members of Ruminococcaceae, according to two-sample Mendelian randomization analysis.
- **Desulfovibrio abundance is causally increased** by statin exposure, a finding with potential implications for sulfur metabolism and hydrogen sulfide production in the gut.
- The study leveraged GWAS summary statistics for both statin use and gut microbiota composition (from MiBioGen and related consortia), applying inverse-variance weighted (IVW), MR-Egger, and weighted median approaches to establish causal direction.
- Sensitivity analyses (MR-Egger intercept, Cochran's Q, leave-one-out) were performed to test for horizontal pleiotropy and heterogeneity.

## Methods

- **Design**: Two-sample Mendelian randomization using publicly available GWAS summary statistics.
- **Exposure**: Genetic instruments for statin medication use derived from large-scale pharmacogenomic GWAS data.
- **Outcome**: Gut microbiota abundance data from the MiBioGen consortium and related datasets.
- **Statistical approaches**: IVW (primary), MR-Egger, weighted median, simple mode, and weighted mode as complementary methods.
- **Sensitivity**: MR-Egger intercept test for pleiotropy, Cochran's Q test for heterogeneity, leave-one-out analysis for robustness.

## Detailed Summary

This study applied a two-sample Mendelian randomization framework to infer causal relationships between statin medication and gut microbiota composition. By using genetic variants associated with statin use as instrumental variables, the authors circumvented confounding inherent in observational pharmacoepidemiological studies. The primary finding was a negative causal effect of statins on five gut taxa, most notably [[parabacteroides]] and members of Ruminococcaceae, families typically associated with SCFA production and gut barrier integrity. Conversely, [[desulfovibrio]] — a sulfate-reducing genus implicated in hydrogen sulfide production and potential gut inflammation — was causally increased by statin exposure. The biological plausibility of these findings rests on statins' known effects on bile acid metabolism and cholesterol availability in the gut lumen, both of which serve as substrates and ecological selectors for microbial communities.

## Relevance to WikiBiome

Informs the [[desulfovibrio]] entity page with evidence that pharmaceutical exposures (statins) can causally shift its abundance. Relevant to the broader concept of drug-microbiome interactions and the ecological effects of altering bile acid pools. The Parabacteroides and Ruminococcaceae depletion finding is relevant to understanding SCFA-producer loss under pharmacological pressure. Connects to [[bile-acid-metabolism]] concepts.

## Open Questions

- Whether the Desulfovibrio increase from statin use translates to clinically meaningful hydrogen sulfide elevation or gut inflammation.
- Whether statin-induced microbiome shifts differ between statin types (lipophilic vs. hydrophilic).
- How these MR-inferred causal effects compare to longitudinal clinical data from statin-treated cohorts with serial microbiome sampling.
