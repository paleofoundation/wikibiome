---
title: "Vernocchi 2023 — Gut Microbiota Functional Profiling in ASD: Bacterial VOCs and Related Metabolic Pathways Acting as Disease Biomarkers and Predictors"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Pamela Vernocchi, Chiara Marangelo, Silvia Guerrera, Federica Del Chierico, Valerio Guarrasi, Simone Gardini, Federica Conte, Paola Paci, Gianluca Ianiro, Antonio Gasbarrini, Stefano Vicari, Lorenza Putignani]
year: 2023
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2023.1287350"
tags: [autism-spectrum-disorder, volatilome, VOCs, GC-MS, indole, skatole, p-cresol, SCFAs, machine-learning, WGCNA, 16S-rRNA, biomarkers, tryptophan-metabolism]
library_category: metabolomics
platform: GC-MS-SPME-16S-rRNA
condition: "autism spectrum disorder"
---

# Overview

Integrated gut volatilome (GC-MS/SPME) and metataxonomic (16S rRNA) study of **41 ASD and 35 control Italian children** (ages 3-15) at Bambino Gesu Children's Hospital, Rome. Identified **626 volatile organic compounds (VOCs)** classified into 23 chemical groups, with 32 statistically significant VOCs differentiating ASD from controls. Machine learning (HistGradientBoostingClassifier) achieved **89% accuracy** classifying ASD. Key ASD-associated VOCs include **indole, skatole (3-methylindole), methyl isobutyl ketone, acetic acid, and p-cresol**.

# Key Findings

## VOC Profiling

### ASD-Associated VOCs (27 of 32 significant)
- **Methyl isobutyl ketone** (p = 0.0001)
- **Acetic acid** (p = 0.001)
- **[[Indole]]** (p = 0.02)
- **Benzeneacetaldehyde** (p = 0.02)
- **3-Methyl indole (skatole)** (p = 0.01)
- **Anethole** (p = 0.0001)
- **3-Methyl butanoic acid** (p = 0.01)
- **Phenyl ethyl alcohol** (p = 0.006)

### Control-Associated VOCs (5 of 32)
- Iso amyl alcohol (p = 0.004)
- Butyl acetate (p = 0.004)
- Methyl acetate (p = 0.01)

## Machine Learning Classification
- **HistGradientBoostingClassifier**: 89% accuracy based on methyl isobutyl ketone, benzeneacetaldehyde, phenyl ethyl alcohol, skatole, and acetic acid
- **LogisticRegression**: corroborated these predictors
- PLS-DA: clear separation along C1 and C2 components (explained 29% variance)

## Clinical Stratification of VOCs
- **Age**: 9 metabolites (including [[p-cresol]], hexanoic acid, benzeneacetaldehyde) differed between age subgroups (>5 years)
- **Gender**: 3-hexanone in female subgroup; 1-heptadecene in male subgroup
- **GI symptoms**: subjects without GI symptoms characterized by 1-tridecene; those with GI symptoms by 2-butanamine
- **ASD severity**: high severity associated with 2,3-butanedione; low severity with indole, propionic acid, and p-cymene
- **Probiotics**: 4 metabolites associated with probiotic supplementation
- **Antibiotics**: [[p-cresol]] and benzaldehyde associated with antibiotic-treated subgroup

## WGCNA Network Analysis
- Integrated 110 VOCs, 161 OTUs, clinical/anamnestic data
- Identified co-expression modules linking VOC and OTU patterns
- Module eigengenes correlated with clinical features

# Relevance to Metallomic Framework

**High relevance** — VOC profiling captures metal-dependent metabolic outputs:

- **[[Indole]]** and **skatole**: tryptophan microbial degradation products — tryptophan metabolism is [[iron]]-dependent (IDO/TDO require iron)
- **[[p-Cresol]]**: tyrosine metabolite produced by [[Clostridium]] — inhibits dopamine-beta-hydroxylase (a [[copper]]-dependent enzyme)
- **Acetic acid**: produced by multiple bacteria including [[Desulfovibrionaceae]] (iron-sequestering sulfate reducers)
- VOC profiles may serve as non-invasive proxy for metal-dependent metabolic pathway disruption
- Machine learning models could incorporate metallomic features for improved classification

# Methodological Notes

- Large Italian cohort from single center (Bambino Gesu, Rome)
- GC-MS/SPME provides comprehensive volatile metabolite coverage
- 626 VOCs detected — far more comprehensive than targeted approaches
- DSM-5 and ADOS-2/ADI-R diagnosis
- Cross-sectional with multiple subgroup stratifications
- Some subjects on probiotics/antibiotics — analyzed as subgroups
