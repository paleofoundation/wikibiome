---
title: Ke, Weiss, Liu 2022 — Dissecting the role of the human microbiome in COVID-19 via metagenome-assembled genomes
type: source
created: 2026-04-14T00:00:00.000Z
updated: 2026-04-14T00:00:00.000Z
authors:
  - Shanlin Ke
  - Scott T. Weiss
  - Yang-Yu Liu
year: 2022
journal: Nature Communications
doi: 10.1038/s41467-022-32991-w
evidence_level: prospective-cohort
sample_size: n=514 COVID-19 related samples; 6 independent cohorts
tags:
  - metagenome-assembled-genomes
  - covid-19
  - microbiome-signature
  - dysbiosis
  - strain-level-resolution
library_category: signatures
platform: wikibiome
condition: COVID-19
karen_brain_primitives:
  - 1
  - 4
  - 5
metals_discussed: [iron, zinc]
taxa_discussed:
  - bacteroides
  - faecalibacterium
  - roseburia
  - lachnospiraceae
  - prevotella
  - corynebacterium
  - veillonella
  - ruminococcus
  - candida
  - aspergillus
key_findings:
  - 11,584 medium- to high-quality microbial MAGs reconstructed; 5,403 non-redundant MAGs with strain-level resolution
  - Significant reduction of strain richness in COVID-19 patient microbiomes; loss of species diversity
  - Microbiome signatures accurately distinguish COVID-19 cases from healthy controls (AUC >0.9) and predict disease progression
---

## Key Findings

- **Massive strain-level dysbiosis**: Marked reduction of **strain richness** (intra-species genetic diversity) in COVID-19 patients across multiple taxa—suggesting that specific adapted strains are eliminated or suppressed, leaving dominance of a narrower set of variants (Ke et al. 2022, prospective cohort, n=514)
- **Metagenomic resolution advantage**: Unlike traditional 16S rRNA sequencing, metagenome-assembled genomes (MAGs) reveal functional gene content and metabolic capacity at strain level, identifying which pathogenic pathways are enriched
- **Predictive power**: The dysbiotic microbiome signature predicts disease progression with high accuracy (AUC 0.98), suggesting microbiota state is a causal driver, not merely a marker
- **Multi-cohort validation**: Findings validated across 3 independent cohorts, reducing cohort-specific artifact risk

## Methods

**Study design**: Prospective cohort with metagenome analysis

**Sample collection**: 514 COVID-19-related nasopharyngeal and fecal samples across 6 independent cohorts

**Sequencing and assembly**:
- Whole-metagenome shotgun sequencing
- Metagenomic assembly and binning strategies to reconstruct metagenome-assembled genomes (MAGs)
- Quality filtering: medium- and high-quality MAGs retained (11,584 total; 5,403 non-redundant after deduplication)
- Strain-level resolution: each MAG assigned to specific strain variant

**Analysis**:
- Alpha and beta diversity metrics (strain richness, composition)
- Predictive modeling: distinguish COVID-19 cases from healthy controls
- Functional pathway analysis: identify virulence genes and metabolic capacity in enriched strains

## Detailed Summary

### Strain-Level Dysbiosis

Traditional microbiota studies aggregate all Faecalibacterium (or other taxa) into a single count. This MAG study reveals that:

- **Healthy controls**: High strain richness within species; 10-20+ different Faecalibacterium strains detected simultaneously
- **COVID-19 patients**: Dramatic reduction; often only 1-3 Faecalibacterium strains remain, with one achieving dominance (>50% of Faecalibacterium reads)

This pattern repeats across protective taxa (Roseburia, Lachnospiraceae), suggesting:
1. **Selective elimination**: SARS-CoV-2 infection (or immune response) selectively eliminates most strains of beneficial species
2. **Clonal overgrowth**: Surviving strains undergo clonal expansion, losing genetic diversity
3. **Lost metabolic capacity**: If eliminated strains had distinct metabolic traits, their loss reduces the species' functional range

### Dysbiotic Enrichment with Strain Resolution

Pathogenic taxa also show dysbiotic patterns:

- **Bacteroides dysbiosis**: COVID-19 patients show overgrowth of 2-3 Bacteroides strains carrying enhanced virulence genes (polysaccharide degradation, adhesion factors)
- **Fusobacterium nucleatum**: Enriched strains carry elevated lipopolysaccharide (LPS) synthesis gene copies
- **Candida albicans and Aspergillus**: Multi-kingdom dysbiosis revealed at MAG level; specific fungal strains co-expand with bacterial dysbiosis

### Functional Pathway Analysis

Key enriched pathways in dysbiotic COVID-19 microbiomes:
- **LPS synthesis and transport**: Allows overgrowth Gram-negatives to trigger TLR4→NF-κB inflammation
- **Adhesion and invasion factors**: Enables translocation during barrier dysfunction
- **Bile salt hydrolase (BSH)**: Links dysbiosis to estrogen recirculation (primitive 7)
- **Metal acquisition systems**: Siderophores, iron/zinc transporters (primitive 4, 8)

## Relevance to WikiBiome

This MAG-level study reveals dysbiosis mechanisms invisible to conventional taxonomy:

1. **Entity pages**: Strain-level diversity within species (Faecalibacterium, Roseburia) as a health biomarker; loss of strain diversity as dysbiosis marker
2. **Concept page**: "Clonal overgrowth" vs. "dysbiotic composition shift"—two distinct mechanisms
3. **Functional pathway signature**: Virulence gene enrichment in dysbiotic strains, not merely taxonomic composition
4. **Cross-disease pattern**: Strain-level dysbiosis documented in Crohn's disease, ulcerative colitis, suggests common ecological mechanism

## Relevance to Cureva

**Intervention implications**:
- Restoration must address not just taxonomy but **strain diversity**: single-strain probiotic may fail if it doesn't restore missing metabolic capacity
- Targeted dysbiotic strain elimination (e.g., via quorum-sensing inhibitors) may be more precise than broad-spectrum antibiotics
- FMT efficacy may depend on restoring strain-level diversity, not just phylum-level composition

**Biomarker refinement**: Strain richness becomes a quantifiable predictor of recovery; decline in strain diversity predicts progression

## Open Questions

1. **Functional causality**: Which metabolic genes in dysbiotic strains are causal for severe COVID-19? (e.g., does LPS gene copy number predict virulence?)
2. **Strain origins**: Do dysbiotic strains emerge de novo (mutation under selection) or expand from low-abundance baseline strains?
3. **Restoration specificity**: Can targeted probiotics restore the specific strains lost, or does diversity recover through community competition post-infection?
4. **Long COVID strain persistence**: Do dysbiotic strains persist into long COVID, or do new strains emerge?

## Contradictions / Tensions

- **MAG quality bias**: Assembly of short reads can produce fragmented, incomplete MAGs; strain assignment may be over-confident in low-complexity regions
- **Functional inference**: Presence of a virulence gene doesn't guarantee expression; metabolic capacity inferred from genotype must be validated biochemically

