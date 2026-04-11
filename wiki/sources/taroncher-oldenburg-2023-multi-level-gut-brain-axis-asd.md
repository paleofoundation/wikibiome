---
title: "Taroncher-Oldenburg 2023 — Multi-Level Analysis of the Gut-Brain Axis Shows ASD-Associated Molecular and Microbial Profiles"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Gaspar Taroncher-Oldenburg, et al.]
year: 2023
journal: "Nature Neuroscience"
doi: "10.1038/s41593-023-01361-0"
tags: [autism-spectrum-disorder, gut-brain-axis, multi-omics, Bayesian-ranking, Prevotella, Bifidobacterium, Desulfovibrio, Bacteroides, metabolomics, cytokines, TGF-beta, IL-6, diet, amino-acids, carbohydrates, lipids, brain-gene-expression, meta-analysis]
library_category: causal
platform: 16S-SMS-metabolomics-transcriptomics
condition: "autism spectrum disorder"
---

# Overview

Large-scale multi-omic meta-analysis published in **Nature Neuroscience** developing a **Bayesian differential ranking algorithm** to identify ASD-associated molecular and taxa profiles across **10 cross-sectional microbiome datasets and 15 other datasets** (dietary, metabolomic, cytokine, brain gene expression). Identified a functional architecture along the [[gut-brain axis]] characterized by ASD-associated amino acid, carbohydrate, and lipid profiles predominantly encoded by [[prevotella]], [[bifidobacterium]], [[desulfovibrio]], and [[bacteroides-fragilis]]. This architecture is NOT present in age-matched and sex-matched cohorts but IS present in sibling-matched cohorts.

# Key Findings

## Differential Ranking Across Omics

### Microbial Differentials (Age-Sex-Matched)
- Combined 16S + SMS analysis: 1,193 samples, average age 6.5 years, AUC = 0.78
- **Strong ASD-associated enrichment** consistent across datasets
- Single microbial log ratio that strongly separated ASD from controls: enrichment of specific taxa across 88% of age-sex-matched pairs

### Key Microbial Taxa
- **[[prevotella]]**: predominantly associated with cytokine differentials
- **[[bacteroides-fragilis]]**: associated with both cytokine and metabolite profiles
- **[[bifidobacterium]]**: *B. thetaiotaomicron* — second most highly elevated microbe when TGF-beta was depleted
- *B. catenulatum/B. adolescentis*: enriched when IL-6 was in lower concentration
- **[[desulfovibrio]]**: associated with cytokine changes

## Host Cytokine Correlations
- **TGF-beta**: significantly elevated in ASD; positively correlated with global microbial log fold changes (r = 0.237, P = 2.84 x 10^-7)
- **IL-6**: microbial log fold changes highly correlated with both TGF-beta and IL-6 (TGF-beta: r = 0.61, P = 1.84 x 10^-2; IL-6: r = 0.73, P = 5.74 x 10^-9)
- IL concentrations linked to only handful of taxa, whereas TGF-beta linked to larger number

## Microbiome Metabolism Mirrors Brain Metabolism
- 138 microbial and 1,772 human metabolic encoding genes linked to ASD phenotype
- **95 human metabolic pathways** differentially expressed in ASD brain tissues
- ~48.5% overlap between microbiome-associated and brain-associated metabolic pathways (101/208)
- Pathways: amino acid metabolism, carbohydrate metabolism, lipid metabolism

## Diet-Microbiome Correlations
- Re-analysis of Berding et al. paired microbiome-dietary data
- Microbiome-diet co-occurrence analysis: amino acid, carbohydrate, lipid associations
- Autistic children less likely to consume glutamic acid, serine, choline, phenylalanine, leucine, tyrosine, valine, histidine — all neurotransmitter biosynthesis compounds
- Dietary composition that differs in ASD highlighted as 'K' markers (T(ASD-Control))

## FMT Validation
- Longitudinal FMT data: children with ASD showed microbiome behavior improvement
- Temporal changes in microbiome composition correlated with ASD phenotype improvements
- Supports causal role of microbiome in ASD symptoms

## Sibling vs Age-Matched Analysis
- Functional architecture present in **sibling-matched** cohorts
- **NOT present** in age-matched and sex-matched cohorts
- Suggests shared environmental/genetic background preserves microbiome-ASD association

# Relevance to Metallomic Framework

**Very high relevance** — multi-omic framework directly relevant to metal-dependent pathways:

- Amino acid metabolism pathways (phenylalanine, tyrosine, tryptophan) are [[iron]] and [[zinc]]-dependent
- [[desulfovibrio]] is a sulfate-reducing bacterium that sequesters [[iron]] via siderophore-like mechanisms
- TGF-beta and IL-6 are key regulators of [[hepcidin]], the master [[iron]] regulatory hormone
- Dietary amino acid deficits (phenylalanine, tyrosine, histidine) reduce metal chelation capacity
- 48.5% metabolic pathway overlap between microbiome and brain suggests shared metal cofactor requirements
- [[prevotella]] and [[bacteroides-fragilis]] are key [[SCFA]] producers — butyrate regulates [[iron]] transporter expression

# Methodological Notes

- Published in Nature Neuroscience — highest-impact ASD microbiome study to date
- Novel Bayesian differential ranking method avoids pitfalls of standard differential abundance
- Age-sex matching reduces confounding significantly
- Cross-referenced across 25+ datasets including multiple omics layers
- Limitation: most microbiome datasets are 16S (not shotgun) — limits functional resolution
- FMT data provides strongest causal evidence but from single study
