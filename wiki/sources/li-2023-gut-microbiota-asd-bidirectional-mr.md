---
title: "Li 2023 — Gut Microbiota and Autism Spectrum Disorders: A Bidirectional Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Zhi Li, Shuai Liu, Fang Liu, Nannan Dai, Rujia Liang, Shaoguang Lv, Lisha Bao]
year: 2023
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2023.1267721"
tags: [autism-spectrum-disorder, mendelian-randomization, Prevotellaceae, Ruminococcaceae, causal-inference, gut-microbiota, GWAS]
library_category: "Mendelian randomization"
platform: genetic
condition: "autism spectrum disorder"
source_pages: "pp. 1-8"
---

# Overview

Bidirectional two-sample **Mendelian randomization (MR)** study using summary statistics from the **MiBioGen consortium** (206 gut microbiota taxa) and the **Psychiatric Genomics Consortium** GWAS for ASD (18,381 cases, 27,969 controls). Identifies genetically predicted causal relationships between specific gut microbiota and ASD risk.

# Key Findings

## Risk-Increasing Taxa

- **Family Prevotellaceae** positively correlated with ASD (IVW OR = 1.24, 95% CI: 1.09-1.40, P = 9.2x10^-4)
- **Genus Turicibacter** showed possible positive association with ASD (IVW OR = 1.14, 95% CI: 1.00-1.29)
- After FDR correction, only Prevotellaceae and *Ruminococcaceae UCG005* remained significant

## Protective Taxa

- **Genus *Ruminococcaceae* UCG005** negatively correlated with ASD (IVW OR = 0.78, 95% CI: 0.67-0.90)
- **Genus *Dorea*** (OR = 0.81), **genus *Ruminiclostridium5*** (OR = 0.81), **genus *Ruminococcus1*** (OR = 0.83), and **genus *Sutterella*** (OR = 0.82) all showed protective effects

## Reverse MR and Enrichment

- Reverse MR analysis showed **no discernible causal link from ASD to gut bacteria**, suggesting the relationship is unidirectional
- GO enrichment analysis of causal gut microbiota identified **16 significantly enriched regulatory pathways**

## Mechanistic Insights

- [[Prevotellaceae]] promotes inflammation, infiltrates mucosal layers, triggers T-cell and antibody responses
- *Ruminococcaceae UCG005* produces [[SCFAs]] including butyrate, which is widely considered beneficial for gut health
- *Turicibacter* fermentation enhances inhibitory effects on serotonin signaling and Wnt signaling pathways

# Connections

- Complements [[ni-2022-gut-microbiota-psychiatric-disorders-mr]] which also found Prevotellaceae-ASD link
- Protective role of Ruminococcaceae aligns with [[coretti-2018-gut-microbiota-young-asd-children]]
- Supports causal framework discussed in [[autism-spectrum-disorder-microbiome-signature]]
