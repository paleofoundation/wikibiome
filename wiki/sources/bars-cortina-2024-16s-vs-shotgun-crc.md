---

title: "Comparison between 16S rRNA and Shotgun Sequencing in Colorectal Cancer, Advanced Colorectal Lesions, and Healthy Human Gut Microbiota"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Bars-Cortina D, Ramon E, Rius-Sansalvador B, Guino E, Garcia-Serrano A, Mach N, Khannous-Lleiffe O, Saus E, Gabaldon T, Ibanez-Sanz G, Rodriguez-Alonso L, Mata A, Garcia-Rodriguez A, Obon-Santacana M, Moreno V]
journal: BMC Genomics
year: 2024
tags: [colon-cancer, 16S-rRNA, shotgun-metagenomics, sequencing-comparison, colorectal-cancer, Parvimonas-micra, microbial-signatures, machine-learning, COLSCREEN]
doi: "10.1186/s12864-024-10621-7"
platform: wikibiome
---

# Comparison between 16S rRNA and Shotgun Sequencing in Colorectal Cancer, Advanced Colorectal Lesions, and Healthy Human Gut Microbiota

## Key Claims

- Shotgun metagenomics detected 4,512 species belonging to 1,049 genera and 214 families, while 16S rRNA detected 525 species from 239 genera and 80 families, confirming that 16S taxa are largely a subset of shotgun taxa
- The 16S abundance data was sparser and exhibited lower alpha diversity compared to shotgun; at lower taxonomic ranks (genus, species), the two methods highly differed due to disagreement in reference databases
- Spearman correlation between 16S and shotgun abundance counts ranged from 0.50 to 0.53 for shared taxa at species, genus, and family levels
- Both sequencing techniques revealed microbial signatures of taxa previously associated with CRC development, including *Parvimonas micra*, though shotgun often provides a more detailed snapshot
- Shotgun sequencing is recommended for stool microbiome samples and in-depth analyses, while 16S is more suitable for tissue samples and targeted studies

## Methods/Findings

- **Design**: Head-to-head comparison of 16S rRNA V3-V4 and shotgun metagenomics on 156 matched human stool samples
- **Participants**: Healthy controls, high-risk colorectal lesion (HRL), and CRC cases from the COLSCREEN study, Barcelona, Spain
- **Methods**: 16S via Illumina V3-V4 amplicons with DADA2; shotgun via Illumina whole-genome sequencing with Kraken2/Bracken2; SVM and Random Forest ML models for disease classification
- **Taxonomic overlap**: At species level, 272 species shared between methods; 666 shotgun-only and 203 16S-only species
- **ML classification**: Both methods showed some predictive power for disease classification, but neither demonstrated clear superiority; Cohen's Kappa agreement was modest (0.07-0.73 range depending on taxonomic level)
- **Key finding**: *Faecalibacterium prausnitzii* was the predominant species in both 16S and shotgun datasets

## Connections

- Directly informs methodology choices discussed in [[osman-2018-16s-rrna-crc-protocols-workflows]] and [[shotgun-metagenomics]] studies
- The COLSCREEN cohort data complements population-based screening approaches using [[microbial-biomarkers]]
- *Parvimonas micra* detection by both methods reinforces its role as a consistent CRC biomarker across methodologies
- ML classification approaches connect to diagnostic [[microbial-biomarkers]] panel development efforts
- [[colorectal-cancer]]
