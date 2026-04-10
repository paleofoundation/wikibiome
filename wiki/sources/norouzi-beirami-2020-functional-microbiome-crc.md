---
title: "Beyond Taxonomic Analysis of Microbiomes: A Functional Approach for Revisiting Microbiome Changes in Colorectal Cancer"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Norouzi-Beirami MH, Marashi SA, Banaei-Moghaddam AM, Kavousi K]
journal: Frontiers in Microbiology
year: 2020
tags: [colon-cancer, functional-microbiome, KEGG, metagenomics, SVM, enzyme-commission, KO-groups, colorectal-cancer, adenoma, classification]
doi: "10.3389/fmicb.2019.03117"
---

# Beyond Taxonomic Analysis of Microbiomes: A Functional Approach for Revisiting Microbiome Changes in Colorectal Cancer

## Key Claims

- Functional features (KEGG orthology groups, Enzyme Commission numbers, and reactions) outperform species-level taxonomy for classifying CRC progression stages, achieving >85% accuracy using SVM for predicting control, adenoma, and carcinoma categories
- KO-related features were the most successful single feature type for classifying all three disease categories, while species-related features showed the least success
- The intra-diversity of each sample at the level of bacterial species and genes is much more than that of KO groups, EC numbers, and reactions, indicating that functional redundancy masks taxonomic variation
- At all four functional levels (species, gene, KO, EC number, reaction), certain features show significant changing trends during cancer progression from control to adenoma to carcinoma
- The number of specific genes in each sample group generally increases from control to carcinoma, while the percentage of specific KOs, EC numbers, and reactions shows an ascending trend

## Methods/Findings

- **Design**: Reanalysis of published metagenomic datasets using functional profiling at species, gene, KO, EC, and reaction levels
- **Dataset 1**: 156 shotgun-sequenced fecal samples (63 controls, 47 advanced adenomas, 46 carcinomas) from Feng et al. 2015
- **Dataset 2**: Independent validation with 80 samples (24 control, 27 adenoma, 29 carcinoma) from Thomas et al. 2019
- **Methods**: MetaPhlAn v2.0 for taxonomy; gene mapping to IGC catalog (9.88 million genes); GhostKOALA for KEGG annotation; SVM classification with MCFS feature selection
- **Key findings**: Table 2 compiles 40+ bacterial genera with significant differences between CRC and controls across 10 published studies, showing *Fusobacterium*, *Porphyromonas*, *Peptostreptococcus*, *Bacteroides*, and *Escherichia* as most consistently reported

## Connections

- Demonstrates the superiority of functional over taxonomic profiling, complementing [[bars-cortina-2024-16s-vs-shotgun-crc]] methodology comparisons
- KEGG pathway-level analysis connects to [[metabolic-pathways]] in CRC microbiome research
- Adenoma-to-carcinoma progression tracking relates to [[microbiome-and-disease-progression]]
- Cross-study bacterial genera compilation (Table 2) validates [[microbial-biomarkers]] consistency across populations
- [[colorectal-cancer]]
