---
title: "Cao 2021 — Dysbiotic Gut Microbiota and Dysregulation of Cytokine Profile in Children and Teens With Autism Spectrum Disorder"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Xia Cao, Kevin Liu, Jun Liu, Yen-Wenn Liu, Li Xu, Hua Wang, Yunhui Zhu, Pengfei Wang, Zhiwei Li, Jie Wen, Chen Shen, Meng Li, Zuqing Nie, Xue-Jun Kong]
year: 2021
journal: "Frontiers in Neuroscience"
doi: "10.3389/fnins.2021.635925"
tags: [autism-spectrum-disorder, dysbiosis, cytokines, inflammation, Clostridium, Desulfovibrio, Streptococcus, Bacteroides, Lachnospiraceae, butyrate, SCFAs, co-abundance-network]
library_category: immune-microbiome
platform: 16S-rRNA-V4
condition: "autism spectrum disorder"
---

# Overview

Case-control study of **45 ASD children/teens and 41 healthy controls** (ages 2-19) from Kunming, China, integrating gut microbiota composition via 16S rRNA sequencing with **plasma cytokine profiling**. Found significantly elevated pro-inflammatory cytokines and enrichment of pathogenic genera in ASD, with direct correlations between specific cytokines and dysbiotic taxa.

# Key Findings

## Cytokine Dysregulation

Significantly elevated in ASD (FDR-adjusted):
- **IL-2**: 31.23 vs 3.58 pg/ml (p < 0.0001)
- **IL-4**: 8.88 vs 5.26 (p = 0.007)
- **IL-5**: 3.92 vs 2.71 (p = 0.018)
- **IL-6**: 20.54 vs 5.54 (p = 0.0001)
- **IL-10**: 9.64 vs 6.04 (p = 0.0003)
- **TNF-alpha**: 6.92 vs 3.91 (p = 0.003)
- **TNF-beta**: 4.50 vs 3.05 (p < 0.0001)
- **IFN-gamma**: 5.96 vs 3.50 (p = 0.001)

No significant differences: IL-1beta, IL-8, IL-12 p70, IL-17A, IL-17F, IL-22

## Microbiota Dysbiosis

### Reduced alpha diversity in ASD
- Shannon index significantly lower in ASD (p < 0.001, Wilcoxon rank-sum)

### Depleted in ASD
- **[[bacteroides-fragilis]]** (FDR p < 0.01)
- **[[Lachnospiraceae]]** family (FDR p < 0.001)
- These beneficial taxa negatively correlated with pro-inflammatory cytokines IFN-gamma and IL-6

### Enriched in ASD
- **[[clostridium]]** (FDR p < 0.001)
- **[[desulfovibrio]]** (FDR p < 0.001)
- **[[streptococcus-pneumoniae]]** (FDR p < 0.05)
- Also: [[Neisseria]], [[Bacillus]], [[Streptomyces]]

## Cytokine-Microbiota Correlations

- **IFN-gamma and IL-6** associated with several pathogenic genera enriched in ASD
- [[Lachnospiraceae]] abundance negatively correlated with IFN-gamma and IL-6 in subjects with severe ASD (CARS p < 0.05)
- **IL-4** significantly negatively correlated with CARS total score (p < 0.05)

## Co-Abundance Network Analysis

- ASD group: **443 edges** in network vs only **54 edges** in control group
- Indicates dramatically altered microbial community interactions in ASD
- All correlations significant at p < 0.05

## Functional Profiling

- **Saturated SCFA/butyrate biosynthesis**: significantly reduced in ASD (FDR p < 0.001)
- **Unsaturated fatty acid biosynthesis**: increased in ASD
- ASD gut microbiome harbors lower capacity for [[butyrate]] and other [[short-chain-fatty-acids]]

# Relevance to Metallomic Framework

**High relevance** — links [[dysbiosis]], [[inflammation]], and metabolite production:

- Elevated [[desulfovibrio]] is a sulfate-reducing genus that produces hydrogen sulfide and can mobilize [[iron]] and other metals
- Depleted [[bacteroides-fragilis]] reduces [[SCFA]] production — [[butyrate]] is critical for [[iron]] transporter expression
- Pro-inflammatory cytokine storm (IL-6, TNF-alpha, IFN-gamma) drives [[zinc]] redistribution via metallothionein induction
- [[clostridium]] enrichment links to [[p-cresol]] production — a known uremic toxin affecting metal metabolism
- Co-abundance network disruption suggests loss of ecological stability

# Methodological Notes

- Drug-naive ASD subjects (rigorous exclusion criteria)
- No antibiotics, probiotics, or yogurt in preceding 3 months
- Both 16S and cytokine data from same individuals enables correlation
- Chinese population from Kunming — may not generalize
- Cross-sectional design limits causal inference
- CARS score stratification (mild-moderate 30-36, severe > 37)
