---
title: "Identification of colorectal cancer progression-associated intestinal microbiome and predictive signature construction"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Jungang Liu, Xiaoliang Huang, Chuanbin Chen, Zhen Wang, Zigui Huang, Mingjian Qin, Fuhai He, Binzhe Tang, Chenyan Long, Hong Hu, Shuibo Pan, Junduan Wu, Weizhong Tang]
journal: Journal of Translational Medicine
year: 2023
doi: "10.1186/s12967-023-04119-1"
tags: [colon-cancer, colorectal-cancer, microbiome-signature, CRC-progression, staging, Alistipes-indistinctus, machine-learning, immune-infiltration, mast-cells]
platform: wikibiome
evidence_level: computational-prediction
taxa_discussed: [alistipes, citrobacter, corynebacterium, faecalibacterium-prausnitzii, parabacteroides, proteus, roseburia, ruminococcus]
---

# Liu 2023 -- CRC Progression-Associated Intestinal Microbiome and Predictive Signature

## Key Claims

- Simpson index of intestinal microbiome in stage III-IV CRC was significantly lower than in stage I-II CRC (p = 0.043)
- *Proteus*, *Parabacteroides*, *Alistipes*, and *Ruminococcus* may contribute to CRC progression; enhanced synthesis of O-glycan biosynthesis is relevant to CRC progression
- *Alistipes indistinctus* was positively correlated with mast cells, IL-6, and IL6R immune activators, and with GOBP_PROTEIN_FOLDING_IN_ENDOPLASMIC_RETICULUM pathway
- Random Forest and XGBoost models with 42 CRC progression-associated differential bacteria effectively distinguished stage I-II from stage III-IV CRC

## Methods/Findings

- **Type**: Observational cohort (192 CRC patients: 62 stage I-II, 130 stage III-IV)
- **Methods**: 16S rDNA sequencing of preoperative stools; transcriptome sequencing of 17 CRC tumor samples; CIBERSORT immune deconvolution; XGBoost and Random Forest machine learning

 - 41 bacteria with significant abundance differences between early and advanced CRC
 - LDA analysis identified top bacteria: *Ruminococcaceae*, *Faecalibacterium*, *Roseburia*, *Butyricicoccus* enriched in early CRC (stage I-II)
 - *Corynebacterium*, *Morganella*, *Proteus*, *Citrobacter* enriched in advanced CRC (stage III-IV)
 - O-glycan biosynthesis (ko00514) significantly higher in stage III-IV; arachidonic acid metabolism (ko00590) higher in stage I-II
 - Stage I-II CRC bacteria positively correlated with NK cell resting and B cells naive
 - Stage III-IV bacteria positively correlated with mast cells resting and dendritic cells activated

## Connections

- [[dysbiosis]] -- CRC progression is associated with progressive loss of beneficial bacteria and enrichment of pathogenic genera
- [[oxidative-stress]] -- ER stress and unfolded protein response pathways linked to *Alistipes indistinctus* in advanced CRC
- [[metal-carcinogenesis]] -- inorganic ion transport and metabolism pathways significantly different between CRC stages
- [[colorectal-cancer]]
