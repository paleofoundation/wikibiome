---
title: "Yang 2024 — The Causal Correlation Between Gut Microbiota Abundance and Pathogenesis of Cervical Cancer: A Bidirectional Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Hao Yang]
institution: "not yet verified"
journal: "Frontiers in Microbiology"
year: 2024
doi: "10.3389/fmicb.2024.1336101"
tags: [cervical-cancer, Mendelian-randomization, gut-microbiota, Clostridia, Bacteroidetes, bidirectional, Dialister, Streptococcaceae]
platform: both
condition: "cervical cancer"
evidence_level: computational-prediction
sample_size: "N/A"
taxa_discussed: [clostridium, dialister]
metals_discussed: []
karen_brain_primitives: [3, 5]
key_findings:
  - "Higher Clostridia/Clostridiales abundance causally predicted higher cervical cancer risk"
  - "Higher Streptococcaceae and Dialister abundance predicted lower CC risk (protective)"
  - "Bidirectional MR confirmed mutual causality between gut microbiota and cervical cancer"
keystone: false
---

## Key Findings

- **Higher abundance of class Clostridia and order Clostridiales** was causally associated with higher cervical cancer (CC) risk through Mendelian randomization ([[yang-2024-causal-gut-microbiota-cervical-cancer-mr|this study]], computational-prediction).
- **Higher abundance of family Streptococcaceae and genus [[Dialister]]** predicted lower CC risk, identifying these as protective taxa.
- **Bidirectional MR analysis confirmed mutual causality** — gut microbiota influences CC risk, and CC in turn alters gut microbiome composition, indicating a feedback loop between cancer and microbial dysbiosis.
- The bidirectional relationship suggests that cancer treatment (surgery, chemotherapy, radiation) disrupts gut microbial ecology, which may in turn influence treatment outcomes and recovery.

## Methods

- **Study type**: Bidirectional two-sample Mendelian randomization study.
- **Exposure/Outcome GWAS**: Gut microbiota abundance from GWAS summary statistics; cervical cancer from large-scale genetic association data.
- **MR methods**: IVW as primary analysis, with MR-Egger, weighted median, and MR-PRESSO for sensitivity analyses and pleiotropy detection.
- **Bidirectional design**: Forward MR (microbiota → CC risk) and reverse MR (CC → microbiota changes) to distinguish cause from consequence.
- **Taxonomic levels**: Analyses conducted at class, order, family, and genus levels.

## Detailed Summary

This study provides genetic evidence for a causal, bidirectional relationship between gut microbiota composition and cervical cancer. The bidirectional design is a methodological strength, as it addresses a fundamental limitation of cross-sectional microbiome studies — the inability to distinguish whether microbial changes cause cancer or result from it.

The identification of Clostridia/Clostridiales as risk-associated is consistent with the broader literature linking certain Clostridia members to pro-inflammatory gut environments. While the Clostridia class is taxonomically diverse (including beneficial butyrate producers like Faecalibacterium and Roseburia), it also includes pathogenic species (Clostridioides difficile, Clostridium perfringens) and organisms capable of producing genotoxic metabolites. The class-level association likely reflects a net enrichment of pro-inflammatory Clostridia members.

The protective role of Dialister in CC is noteworthy because it contrasts with the risk association of Dialister in ovarian cancer found by [[zhang-2024-blood-metabolites-gut-microbiota-ovarian-cancer-mr|Zhang 2024]] and [[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr|Guo 2025]]. This discordance suggests that the same genus may have opposite effects in different cancer contexts — potentially due to species-level differences, tissue-specific mechanisms, or interaction with local (cervical vs. ovarian) microbial communities.

The mutual causality finding has practical implications. Cancer treatments (particularly pelvic radiation for CC) profoundly disrupt the gut microbiome. If this iatrogenic dysbiosis worsens cancer outcomes through the reverse causal pathway, then microbiome preservation during treatment becomes clinically relevant.

## Relevance to WikiBiome

- Informs [[clostridium]] entity page with causal genetic evidence for a risk association with cervical cancer.
- Informs [[dialister]] entity page — notably with a protective association that contrasts with its risk role in OC, creating an important nuance to document.
- Supports [[dysbiosis]] concept page regarding bidirectional gut microbiome-cancer relationships.
- The Dialister discordance (protective in CC, risk in OC) is a key finding for cross-condition pattern detection.

## Relevance to Cureva

- The bidirectional relationship supports microbiome monitoring during CC treatment.
- Microbiome-preserving strategies during pelvic radiation could improve CC treatment outcomes.
- The Dialister context-dependency highlights the need for condition-specific (not generic) microbiome interventions.

## Contradictions / Tensions

- **Dialister discordance**: This study finds Dialister protective against CC, while multiple OC MR studies find it as a risk factor. This tension needs to be documented on the Dialister entity page and investigated for species-level or mechanistic explanations.

## Open Questions

- Which specific Clostridia species or metabolites drive the CC risk association.
- The mechanistic basis for Dialister's opposing roles in cervical vs. ovarian cancer.
- How HPV infection status interacts with the gut microbiome-CC causal relationship — whether the identified causal taxa are relevant specifically to HPV-driven CC.
- Whether microbiome restoration after pelvic radiation can improve CC recurrence-free survival.
