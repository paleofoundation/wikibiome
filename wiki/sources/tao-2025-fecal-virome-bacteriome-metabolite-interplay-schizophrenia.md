---
title: "Tao 2025 — Alterations in Fecal Bacteriome Virome Interplay and Microbiota-Derived Dysfunction in Patients with Schizophrenia"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Shiwan Tao, Yulu Wu, Liling Xiao, Yunqi Huang, Han Wang, Yiguo Tang, Siyi Liu, Yunjia Liu, Qianshu Ma, Minhan Dai, Min Xie, Jia Cai, Zhengyang Zhao, Qiuyue Lv, Jiashuo Zhang, Mengting Zhang, Menghan Wei, Yang Chen, Mingli Li, Qiang Wang]
year: 2025
journal: "Translational Psychiatry"
doi: "10.1038/s41398-025-03239-0"
tags: [schizophrenia, gut-virome, bacteriome, metabolome, multi-omics, transkingdom-interactions, Coprobacillaceae, Enterococcaceae, Suoliviridae, Rountreeviridae, mediation-analysis, bile-acids, eicosanoids, SCFA, dysbiosis]
platform: wikibiome
taxa_discussed: [aspergillus]
karen_brain_primitives: [3]
---

# Why This Paper Matters

This is the first study to comprehensively characterize the fecal bacteriome, virome, AND host peripheral metabolome simultaneously in schizophrenia patients, revealing that the gut virome significantly mediates the effect of bacteriome dysbiosis on disease. Using Multiple Co-inertia Analysis (MCIA) and structural mediation modeling, the authors demonstrate potential causal chains from gut viruses to gut bacteria to metabolites to schizophrenia. The finding that viral-bacterial transkingdom correlations observed in healthy controls are **dramatically lost** in SCZ patients is particularly striking, suggesting a fundamental disruption of the ecological network that normally maintains gut homeostasis.

# Key Claims

- **49 SCZ patients and 49 HCs** were studied with fecal metagenomics (bacteriome + virome) and serum metabolomics
- SCZ patients show decreased gut bacterial **beta-diversity** (PERMANOVA: P = 0.017 at family level, P = 0.011 at species level) but no significant alpha-diversity difference
- **7 differentially abundant bacterial families** identified, with Coprobacillaceae and Enterococcaceae among the most altered; 14 genera and 45 species also significantly different
- For the virome: 34 viral species (family level), 199 (genus), and 139 (species) showed significant inter-group differences; 249 bacterial and 7 viral species remained significant after FDR correction
- **Transkingdom viral-bacterial correlations** were fundamentally disrupted: SCZ group had 88 positive and 56 negative correlations vs. HC group with 132 significant correlations (chi-squared = 6.457, P = 0.011)
- Increased viral-bacterial correlations in SCZ were primarily driven by **Mimiviridae, Forsteviridae, Duneviridae, and Astiviridae**; decreased correlations driven by **Rountreeviridae and Intestiviridae**
- **Serial mediation models** (SMM) supported causal chains: gut viruses -> gut bacteria -> metabolites -> SCZ/HCs, with virus-bacteria-metabolite integration achieving AUC = 0.986 vs. single-omics models (bacteria: 0.970; viruses: 0.732; metabolites: 0.823)
- **261 differential serum metabolites** enriched in 70 biological pathways and 40 pathways; purines, fatty acids, bile acids, and eicosanoids were significantly enriched
- The Purpureocillium/Aspergillus ratio and Turicibacteraceae/Moraxellaceae abundance emerged as important predictive features

# Methods & Findings

## Bacteriome
- Shotgun metagenomics; MaAsLin2 and ANCOM-BC for differential abundance
- XGBoost classifier: AUC = 0.709 (family level) for distinguishing SCZ from HC
- Turicibacteraceae and Moraxellaceae were top predictors

## Virome
- Virome profiled from same metagenomic data; MCIA integration with bacteria and metabolites
- First 3 PCs of MCIA captured >50% variance across all three datasets
- Virus-host assignments by homology-based and CRISPR spacer matching

## Metabolomics
- LC-MS/MS untargeted metabolomics of serum
- 261 metabolites significantly different; enriched for bile acid, purine, fatty acid, and eicosanoid pathways
- Cross-omic correlations: 8 significant viral-metabolic correlations detected

## Mediation Analysis
- 4 bidirectional mediation models tested
- Model 5 (virus -> bacteria -> metabolites -> SCZ) best supported
- Metabolites as latent mediators representing metabolic patterns associated with gut bacteria

# Connections

- [[schizophrenia]] -- multi-omics characterization of gut microbiome disruption
- [[viral-microbiota|gut-virome]] -- first comprehensive virome-bacteriome-metabolome integration in SCZ
- [[gut-microbiome]] -- transkingdom correlation disruption as disease feature
- [[bile-acid-metabolism]] -- bile acid pathway enrichment in SCZ-associated metabolites
- [[short-chain-fatty-acids]] -- fatty acid and SCFA pathway involvement
- [[dysbiosis]] -- viral dysbiosis mediates bacterial dysbiosis effects
- [[neuroinflammation]] -- eicosanoid pathway alterations suggesting immune-mediated mechanisms
