---
title: "Yang 2025 — The Causal Relationship Between the Gut Microbiota and Endometrial Cancer: A Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Chunyan Yang, Luolan Qin, Ling Li, Qian Wei, Long Long, Junyi Liao]
institution: "not yet verified"
journal: "BMC Cancer"
year: 2025
doi: "10.1186/s12885-025-13656-5"
tags: [endometrial-cancer, Mendelian-randomization, gut-microbiota, Acidaminococcaceae, Butyrivibrio, Lactobacillaceae, Coprococcus, estrobolome]
platform: both
condition: "endometrial cancer"
evidence_level: computational-prediction
sample_size: "N/A"
metals_discussed: []
taxa_discussed: [butyrivibrio, lactobacillus]
karen_brain_primitives: [3, 7]
key_findings:
  - "Acidaminococcaceae and Butyrivibrio identified as causal risk factors for general endometrial cancer"
  - "Lactobacillaceae and Coprococcus3 protective for non-endometrioid histology EC"
  - "Gut microbiota causally associated with different pathological subtypes of endometrial cancer"
keystone: false
---

## Key Findings

- **Family Acidaminococcaceae and genus Butyrivibrio** were identified as causal risk factors for general endometrial cancer (EC) through Mendelian randomization ([[yang-2025-gut-microbiota-endometrial-cancer-mr|this study]], computational-prediction).
- **Family Lactobacillaceae and genus Coprococcus3** were protective specifically for non-endometrioid histology EC, suggesting that gut microbial influences differ by cancer subtype.
- **Specific gut microbiota were associated with different pathological types of EC**, indicating that the gut-uterine axis operates through distinct mechanisms depending on the molecular and histological classification of the cancer.
- The differential associations by EC subtype support the concept that gut microbial ecology influences cancer biology through multiple pathways rather than a single universal mechanism.

## Methods

- **Study type**: Two-sample Mendelian randomization study.
- **Exposure data**: Genetically predicted gut microbiota abundance from GWAS summary statistics (likely MiBioGen consortium).
- **Outcome data**: Endometrial cancer cases stratified by histological subtype (endometrioid vs. non-endometrioid) from large-scale GWAS or biobank data.
- **MR methods**: IVW, MR-Egger, weighted median, and sensitivity analyses for pleiotropy and instrument strength.
- **Subtype analysis**: Separate MR analyses for overall EC, endometrioid EC, and non-endometrioid EC.

## Detailed Summary

This study applies Mendelian randomization to assess causal relationships between gut microbiota and endometrial cancer, with the added refinement of subtype-specific analyses. Endometrial cancer is the most common gynecological malignancy in high-income countries, and its incidence is rising alongside obesity prevalence — connecting it to metabolic pathways that the gut microbiome heavily influences.

The identification of Acidaminococcaceae as a risk factor is biologically plausible. This family includes genera involved in amino acid fermentation, producing branched-chain fatty acids and potentially ammonia, which at elevated levels can promote inflammatory signaling. The Butyrivibrio finding is more paradoxical, as this genus is a known butyrate producer typically considered beneficial. This may reflect context-dependent effects or the complexity of MR causal inference.

The protective role of [[Lactobacillus]]ceae for non-endometrioid EC connects to the broader pattern of Lactobacillus protection in gynecological health. Lactobacillus species maintain low-pH environments and produce antimicrobial compounds that prevent pathogenic overgrowth. Their gut abundance may reflect systemic influences on immune regulation and estrogen metabolism through the estrobolome.

The estrobolome connection (primitive 7) is particularly relevant for endometrial cancer, which is strongly estrogen-driven (type I/endometrioid EC). Gut bacteria with beta-glucuronidase activity deconjugate estrogens, increasing their reabsorption and raising systemic estrogen levels. Dysbiotic gut communities with altered beta-glucuronidase activity could contribute to the hyperestrogenic state that drives endometrial carcinogenesis.

## Relevance to WikiBiome

- Informs [[lactobacillus]] entity page with genetic evidence for protective role against non-endometrioid EC.
- Relevant to [[dysbiosis]] concept page with causal evidence for gut microbial contributions to endometrial carcinogenesis.
- Supports the [[beta-glucuronidase]] and estrobolome framework for understanding estrogen-driven gynecological cancers.
- Cross-condition relevance: compare with MR findings from OC, cervical cancer, and ovarian cyst studies to identify shared and unique gut microbial risk/protective factors across gynecological conditions.

## Relevance to Cureva

- The estrobolome mechanism (primitive 7) connects to intervention strategies targeting estrogen recirculation.
- Subtype-specific microbial associations support personalized treatment approaches based on EC histological classification.
- The Lactobacillaceae protective effect supports probiotic strategies for EC risk reduction.

## Open Questions

- Why Butyrivibrio, a nominally beneficial butyrate producer, appears as a risk factor — whether this reflects a genuine causal effect, pleiotropy, or subpopulation heterogeneity.
- Whether the identified taxa overlap with those from OC and cervical cancer MR studies, indicating shared gynecological cancer risk pathways.
- How metal exposures influence the abundance of Acidaminococcaceae and Lactobacillaceae in the gut.
- Whether the estrobolome hypothesis can be directly tested by measuring beta-glucuronidase activity in the identified risk and protective taxa.
