---
title: "Strati 2017 — New Evidences on the Altered Gut Microbiota in Autism Spectrum Disorders"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Francesco Strati, Duccio Cavalieri, Davide Albanese, Claudio De Felice, Claudio Donati, Joussef Hayek, Olivier Jousson, Silvia Leoncini, Daniela Renzi, Antonio Calabro, Carlotta De Filippo]
year: 2017
journal: "Microbiome"
doi: "10.1186/s40168-017-0242-1"
tags: [autism-spectrum-disorder, dysbiosis, mycobiome, Candida, Firmicutes-Bacteroidetes-ratio, constipation, Lactobacillus, Collinsella, Corynebacterium, fungal-microbiota, metataxonomy]
library_category: microbiome-signature
platform: amplicon-16S-ITS1
condition: "autism spectrum disorder"
evidence_level: cross-sectional
metals_discussed: [iron, zinc]
taxa_discussed: [alistipes, aspergillus, bifidobacterium, bilophila, candida-albicans, clostridium, collinsella, corynebacterium, dialister, dorea, escherichia-coli, lactobacillus, malassezia, parabacteroides, ruminococcus, shigella, veillonella]
karen_brain_primitives: [2, 4, 6, 8]
---

# Overview

Characterization of both **bacterial and fungal (mycobiota) gut communities** in 40 autistic vs 40 neurotypical Italian subjects using amplicon-based metataxonomic sequencing of 16S rRNA (V3-V5) and fungal ITS1. Found altered Firmicutes/Bacteroidetes ratio, enrichment of [[lactobacillus]], [[collinsella]], [[corynebacterium|Corynebacterium]], and notably a trend toward doubled [[candida-albicans]] abundance in ASD. First study to characterize gut mycobiota in ASD.

# Key Findings

## Bacterial Microbiota

### Phylum-Level Shifts
- **Higher Firmicutes/Bacteroidetes ratio** in ASD (p < 0.005, Wilcoxon)
- Bacteroidetes reduced: 9.2% ASD vs 19.4% NT (FDR p < 0.05)

### Enriched in ASD (LEfSe, LDA > 2.0)
- **[[lactobacillus]]**
- **[[collinsella]]**
- **[[corynebacterium|Corynebacterium]]**
- **[[dorea]]**

### Depleted in ASD
- **[[alistipes]]**
- **[[bilophila]]**
- **[[dialister]]**
- **[[parabacteroides]]**
- **[[veillonella]]**

### Constipation Effects
- [[escherichia-coli|Escherichia/Shigella]] and [[clostridium|Clostridium cluster XVIII]] significantly more abundant in constipated ASD (FDR p < 0.05)
- [[dysbiosis|Gemmiger]] anticorrelated with constipation (Spearman's r = -0.39, FDR p < 0.05)
- [[ruminococcus]] also anticorrelated with constipation (r = -0.36, FDR p < 0.05)
- Constipation had significant effect on beta diversity in NT (p = 0.046) but not within ASD subjects

## Fungal Mycobiota (First in ASD)

- **No significant alpha diversity difference** between AD and NT for fungi
- **Beta diversity significantly different** (PCoA, PERMANOVA p < 0.05 on weighted UniFrac and Bray-Curtis)
- Constipation significantly affected fungal beta diversity in NT but not ASD

### Key Fungal Genera
- **[[aspergillus]]**: 24.2% AD vs 28% NT
- **[[candida-albicans]]**: 37.7% AD vs 23.5% NT (>2x in ASD, but high dispersion; uncorrected p = 0.006, FDR p = 0.09)
- **[[mycobiome|Penicillium]]**: 13.2% AD vs 23.5% NT
- **[[malassezia]]**: 3.05% AD vs 3.3% NT

### Candida Correlations
- [[candida-albicans]] abundance positively correlated with fungal genera [[aspergillus]] and [[malassezia]]
- Negative correlation with [[bifidobacterium]] in neurotypical individuals (Spearman's r = 0.6, FDR p = 0.004)

## Severity Findings
- CARS scores did not affect bacterial community structure (PERMANOVA p > 0.05)
- CARS scores did not affect fungal mycobiota structure (p > 0.05)
- No significant inflammation differences (calprotectin, IgA, ESR) between constipated and non-constipated ASD

# Relevance to Metallomic Framework

**High relevance** — fungal-bacterial interactions and metal metabolism:

- **[[candida-albicans]]** is a potent [[iron]] scavenger via siderophore-like mechanisms and can sequester [[zinc]]
- Elevated Candida in ASD may contribute to host metal depletion
- [[candida-albicans]] overgrowth shifts indoleamine 2,3-dioxygenase activity, reducing [[kynurenine]] (a neuroprotective agent) — this enzyme is [[iron]]-dependent
- [[lactobacillus]] enrichment — this genus binds heavy metals on cell surfaces
- Firmicutes/Bacteroidetes ratio shift linked to altered [[short-chain-fatty-acids]] production
- [[collinsella]] enrichment — associated with altered [[bile-acid-metabolism]] metabolism

# Methodological Notes

- 90% of ASD subjects classified as severe (CARS >= 37)
- Italian population — Mediterranean diet context
- First ASD study to include fungal ITS1 sequencing
- No significant age or gender differences between groups
- Cross-sectional design
- Candida finding borderline significant after FDR correction (p = 0.09) — requires replication
