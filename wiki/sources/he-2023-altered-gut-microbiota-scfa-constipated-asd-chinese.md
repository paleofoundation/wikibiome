---
title: "He 2023 — Altered Gut Microbiota and Short-Chain Fatty Acids in Chinese Children with Constipated Autism Spectrum Disorder"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Jianquan He, Xiuhua Gong, Bing Hu, Lin Lin, Xiujuan Lin, Wenxiu Gong, Bangzhou Zhang, Man Cao, Yanzhi Xu, Rongmu Xia, Guohua Zheng, Shuijin Wu, Yuying Zhang]
year: 2023
journal: "Scientific Reports"
doi: "10.1038/s41598-023-46566-2"
tags: [autism-spectrum-disorder, SCFAs, constipation, propionic-acid, Lactobacillus, gut-microbiota, 16S-rRNA, GC-MS, random-forest, biomarker, Prevotella, Ruminococcaceae, machine-learning]
library_category: metabolomics
platform: 16S-rRNA-GC-MS
condition: "constipated autism spectrum disorder"
---

# Overview

Integrated 16S rRNA and GC-MS SCFA study comparing **40 constipated ASD (C-ASD) children and 40 TD children** from southern China. Found significantly decreased alpha diversity, elevated **propionate (PPA)** levels, and enrichment of specific taxa in C-ASD. PPA levels were **negatively correlated with Lactobacillus** and **positively correlated with ASD severity** (CARS, ABC scores). A 16-genera random forest model achieved **AUC = 0.924** for C-ASD classification.

# Key Findings

## Alpha and Beta Diversity

- **Observe, Chao1, and ACE indices**: significantly lower in C-ASD (p = 0.024, 0.013, 0.0092)
- Shannon, Simpson, J indices: not significantly different
- **Beta diversity**: significant separation on PCA (p = 0.001, ANOSIM)

## Differentially Abundant Taxa (LEfSe, LDA > 3)

### Enriched in C-ASD
- *Ruminococcaceae_UCG_002*, *Erysipelotrichaceae_UCG_003*
- *Phascolarctobacterium*, *Megamonas*
- *Ruminiclostridium_5*, *Parabacteroides*
- *Prevotella_2*, *Fusobacterium*, *Prevotella_9*

### Enriched in TD
- *Lachnospiraceae_NK4A136_group*, *Ralstonia*
- *[[Eubacterium eligens]]* group, *[[ruminococcus]] gnavus* group
- *[[ruminococcus]]_1*, *[[lactobacillus]]*
- *[[anaerostipes]]*

## SCFA Levels (GC-MS)

- **Propionate (PPA)**: significantly higher in C-ASD (p < 0.05)
- Acetate, butyrate, valerate, isobutyrate, isovalerate, hexanoate: no significant differences

## SCFA-Taxa-Severity Correlations

- **Acetate**: positively correlated with *Parabacteroides* (r = 0.340, p = 0.032), *Ruminococcaceae_UCG002* (r = 0.314, p = 0.049)
- **PPA**: negatively associated with TD-enriched genera (*Lachnospiraceae_NK4A136_group*: r = -0.502, p = 0.001)
- **PPA**: positively associated with *Phascolarctobacterium* (r = 0.367, p = 0.020) and *Prevotella_9* (r = 0.361, p = 0.022)
- **PPA**: positively correlated with **ABC** (r = 0.570, p = 0.001) and **CARS** (r = 0.391, p = 0.027)
- **Isovalerate**: positively associated with ABC (r = 0.335, p = 0.034)
- **[[lactobacillus]]**: negatively correlated with ABC (r = -0.382, p = 0.031) and PPA levels (r = -0.447, p = 0.010)

## Random Forest Classification

- 16 discriminant genera selected (LDA > 3)
- **AUC = 0.924** (95% CI: 0.896-0.953) — excellent classification
- PPA alone: AUC = 0.62 (poor) — microbiota better predictor than single metabolite
- PPA + 16 genera: AUC = 0.924 — no improvement over genera alone

# Relevance to Metallomic Framework

**High relevance** — propionate-microbiota-severity axis intersects metal metabolism:

- **[[Propionate]]** inhibits histone deacetylases (HDACs) — [[zinc]]-dependent metalloenzymes; chronic PPA exposure reproduces ASD-like behaviors in animal models
- PPA affects [[iron]]-dependent mitochondrial function and fatty acid metabolism
- **[[lactobacillus]]** depletion in C-ASD — this genus binds [[heavy metals]] and produces beneficial metabolites; its loss may increase metal bioavailability
- *Phascolarctobacterium* (PPA-producer) enrichment — may reflect altered carbon/metal availability
- Constipation as mediator: extended intestinal transit time increases both metal absorption and bacterial PPA production
- Random forest model (AUC 0.924) could be combined with metallomic biomarkers for improved classification

# Methodological Notes

- Focused specifically on constipated ASD — subgroup with distinct microbiome
- Southern Chinese population (Fujian, Xiamen area)
- Well-matched groups (maternal age, gestational age, BMI, feeding patterns)
- Registered clinical trial (ChiCTR2100052106)
- 16S rRNA + targeted SCFA — complementary approaches
- Cross-sectional design — cannot establish causality
- C-ASD only — findings may not generalize to non-constipated ASD
