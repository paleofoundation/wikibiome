---
title: "Peralta-Marzal 2024 — A Robust Microbiome Signature for Autism Spectrum Disorder Across Different Studies Using Machine Learning"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Lucia N. Peralta-Marzal, David Rojas-Velazquez, Douwe Rigters, Naika Prince, Johan Garssen, Aletta D. Kraneveld, Paula Perez-Pardo, Alejandro Lopez-Rincon]
year: 2024
journal: "Scientific Reports"
doi: "10.1038/s41598-023-50601-7"
tags: [autism-spectrum-disorder, microbiome-signature, machine-learning, REFS, 16S-rRNA, ASVs, Clostridium, Lachnospiraceae, Enterobacteriaceae, biomarker, classification]
library_category: microbiome-signature
platform: 16S-rRNA
condition: "autism spectrum disorder"
---

# Overview

Machine learning study applying **Recursive Ensemble Feature Selection (REFS)** to 16S rRNA gene sequencing data from 117 subjects (60 ASD, 57 siblings as controls) to identify a signature of **26 bacterial ASVs** that discriminate ASD from controls. Validated across two independent cohorts (223 total samples). Achieved AUC of 0.816 in discovery and 0.748-0.740 in validation datasets, demonstrating a **cross-study reproducible microbiome signature** for ASD.

# Key Findings

## Machine Learning Classification

### Discovery Dataset (Sibling-Controlled)
- 60 ASD cases, 57 sibling controls
- REFS reduced 2,040 ASVs to **26 discriminatory ASVs**
- Best classifier: **Multi-Layer Perceptron (MLP)** — AUC = 0.900
- Average AUC across 8 classifiers: **0.816** (vs 0.41 using all 2,040 features)

### Validation Across Independent Cohorts
- Validation set 1 (125 ASD, 98 controls): average AUC = 0.748, best = 0.840 (Extra Trees)
- Validation set 2: average AUC = 0.740, best = 0.840 (Extra Trees)
- 22 of 26 ASVs found in validation set 1; 20 of 26 in validation set 2

## The 26-ASV Signature — Taxonomic Composition

### By Phylum
- **Firmicutes**: 17 ASVs (dominant)
- **Proteobacteria**: 3 ASVs
- **Bacteroidota**: 2 ASVs
- **Actinobacteria**: 2 ASVs
- Unassigned: 2 ASVs

### Key ASD-Increased Taxa
- **[[Clostridium]]** (multiple ASVs — genus level, family Clostridiaceae)
- **[[Lachnospiraceae]]** (multiple ASVs including [[Lachnospira]], [[Sarcina]])
- **[[Enterobacteriaceae]]** (multiple ASVs)
- [[Anaerotruncus]], [[Butyricicoccus]], [[Eubacterium eligens]]
- [[Oscillospira]], [[Clostridium]] assigned to Lachnospiraceae

### Key ASD-Decreased Taxa
- **[[Bifidobacterium]]** (Actinobacteria)
- **[[Collinsella]]** (Actinobacteria)
- *Prevotellaceae* and *Parabacteroides* (Bacteroidota)
- *Erysipelatoclostridium*, *Marvinbryantia*, *Butyricicoccus*
- *Lachnospiraceae UCG-004*
- *Mordavella* (Fusobacteriota)

## Key Taxonomic Patterns
- Actinobacteria (Bifidobacterium, Collinsella) **decreased** in ASD
- Bacteroidota (Prevotellaceae, Parabacteroides) **decreased** in ASD
- Multiple Firmicutes (Clostridium, Lachnospiraceae) **increased** in ASD
- Proteobacteria (Enterobacteriaceae) **increased** in ASD

# Relevance to Metallomic Framework

**Moderate-high relevance** — the 26-ASV signature includes several metal-relevant taxa:

- **[[Clostridium]]** enrichment — produces [[p-cresol]] and other neurotoxins; some species reduce metals
- **[[Enterobacteriaceae]]** enrichment — this family includes siderophore-producing [[iron]] scavengers
- **[[Bifidobacterium]]** depletion — key genus for [[iron]] metabolism, bile acid deconjugation, and barrier integrity
- **[[Desulfovibrio]]**-related taxa — sulfate reducers that mobilize metals
- Reproducibility across cohorts strengthens the case for a core ASD microbiome disruption pattern
- The 26-ASV panel could serve as biomarker for metal-microbiome interaction studies

# Methodological Notes

- Sibling-controlled discovery dataset reduces genetic/environmental confounding
- REFS method prevents overfitting with small sample sizes
- DADA2 processing (ASV-level, not OTU) provides higher taxonomic resolution
- Independent validation across geographically distinct cohorts
- Limitation: 16S data only — no functional/metabolic information
- Limitation: SILVA taxonomy assignment — some ASVs not classified to genus/species level
- Feature reduction from 2,040 to 26 ASVs demonstrates parsimony
