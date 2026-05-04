---
title: "Microbiome Diversity Metrics (Alpha and Beta Diversity)"
type: concept
created: 2026-04-22
updated: 2026-04-22
last_substantive_update: 2026-04-22
sources:
  - osman-2018-16s-rrna-crc-protocols-workflows
  - bars-cortina-2024-16s-vs-shotgun-crc
  - safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis
  - wu-2022-oral-fecal-microbiome-breast-cancer-ghana
source_count: 4
tags: [alpha-diversity, beta-diversity, Shannon, Simpson, Chao1, Bray-Curtis, UniFrac, dysbiosis-marker, richness, evenness]
seo_target: "alpha diversity beta diversity microbiome Shannon Simpson"
platform: wikibiome
karen_brain_primitives: [1, 5]
---

# Microbiome Diversity Metrics

## Alpha Diversity — Within-Sample

Alpha diversity measures the diversity within a single sample. Three dimensions:

- Richness (how many species): Chao1, ACE, observed OTUs/ASVs.
- Evenness (how evenly distributed): Pielou's J.
- Combined (richness + evenness): Shannon index (most commonly reported in this wiki), Simpson index (probability two random sequences are different species).

Clinical pattern: Reduced alpha diversity is the most consistent microbiome finding across disease states — IBD, CRC, depression, schizophrenia, ASD, obesity, CVD, and endometriosis all show lower Shannon indices compared to healthy controls. Oral alpha diversity is inversely associated with breast cancer risk (OR 0.86 per SD) [[wu-2022-oral-fecal-microbiome-breast-cancer-ghana]]. However, reduced diversity is not always pathological — the healthy vaginal microbiome is naturally low-diversity (Lactobacillus-dominant), and high vaginal diversity indicates dysbiosis.

## Beta Diversity — Between-Sample

Beta diversity measures how different two microbial communities are from each other:

- Bray-Curtis dissimilarity: Based on abundance differences (ignores phylogeny).
- UniFrac (weighted/unweighted): Incorporates phylogenetic distances between taxa.
- Jaccard index: Presence/absence only (ignores abundance).

Visualized via PCoA, NMDS, or PERMANOVA. Disease vs. control groups typically show significant beta-diversity separation (PERMANOVA p < 0.05), indicating distinct community structures.

## Limitations

- Alpha/beta diversity are summary statistics — they tell you the community is different but not *how* or *why*. Two communities with identical Shannon indices can have completely different species compositions.
- [[16s-rrna-sequencing]] primer choice affects diversity estimates.
- Relative abundance data (standard in 16S) can inflate apparent diversity changes when a single dominant taxon shifts.

## Cross-References

- [[16s-rrna-sequencing]] — primary method generating diversity metrics
- [[shotgun-metagenomics]] — provides functional diversity beyond taxonomic
- [[dysbiosis]] — reduced alpha diversity as hallmark
