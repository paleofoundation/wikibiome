---
title: "Nishiwaki 2024 — Meta-analysis of shotgun sequencing of gut microbiota in Parkinson's disease (6 countries, riboflavin/biotin pathway depletion)"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Hiroshi Nishiwaki, Jun Ueyama, Mikako Ito, Tomonari Hamaguchi, Keiichi Takimoto, Tetsuya Maeda, Kenichi Kashihara, Yoshio Tsuboi, Hiroshi Mori, Ken Kurokawa, Masahisa Katsuno, Masaaki Hirayama, Kinji Ohno]
corresponding_author: "Hiroshi Nishiwaki, Masaaki Hirayama, Kinji Ohno"
corresponding_email: "nishiwaki.h@med.nagoya-u.ac.jp"
institution: "Nagoya University Graduate School of Medicine, Japan"
year: 2024
journal: "npj Parkinson's Disease"
doi: "10.1038/s41531-024-00724-z"
evidence_level: systematic-review-meta-analysis
sample_size: "n=94 PD + 73 controls (Japan) + 5 external shotgun datasets (USA, Germany, China1, China2, Taiwan)"
tags: [parkinsons-disease, meta-analysis, shotgun-metagenomics, akkermansia-muciniphila, faecalibacterium-prausnitzii, roseburia-intestinalis, riboflavin, biotin, scfa, polyamines, cazymes]
library_category: signatures
platform: both
condition: "Parkinson's disease"
karen_brain_primitives: [4, 5, 9]
metals_discussed: []
taxa_discussed: [akkermansia-muciniphila, roseburia-intestinalis, faecalibacterium-prausnitzii]
key_findings:
  - "Across 6 shotgun datasets (Japan, USA, Germany, China×2, Taiwan), Akkermansia muciniphila is significantly increased while Roseburia intestinalis and Faecalibacterium prausnitzii are significantly decreased in PD at species-level resolution"
  - "Riboflavin (vitamin B2) biosynthesis and biotin (vitamin B7) biosynthesis pathways are significantly decreased in PD after adjustment for confounders; different bacteria account for the decrease in different countries"
  - "5 of 6 CAZyme categories decreased in PD (extensive bacterial carbohydrate metabolism reduction); fecal acetate, propionate, butyrate, and polyamines all significantly decreased in PD"
---

# Nishiwaki 2024 — Multi-Country Shotgun Meta-analysis of PD Microbiome

## Key Findings

- Meta-analysis integrating **94 PD + 73 Japanese shotgun samples** with 5 external shotgun datasets (USA, Germany, China1, China2, Taiwan) — 6 datasets total.
- **Alpha diversity is increased in PD** across all 6 datasets (higher species richness, more evenly distributed).
- **Species-level signatures (after confounder adjustment)**:
  - Increased: **Akkermansia muciniphila**
  - Decreased: **Roseburia intestinalis, Faecalibacterium prausnitzii**
- **Pathway analysis**: **riboflavin (B2) and biotin (B7) biosynthesis** pathways significantly decreased in PD — both by hypergeometric test and GSEA, surviving adjustment for age, BMI, sex, constipation, disease state, PPI/H2 blockers, anti-cholesterol drugs.
- **CAZymes**: 5 of 6 categories significantly decreased in PD — broad bacterial carbohydrate-metabolism suppression.
- **Metabolomics**: Fecal acetate, propionate, butyrate all significantly decreased in PD. Fecal polyamines (putrescine, spermidine, spermine) all significantly decreased. Branched-chain fatty acids (iso-butyrate, iso-valerate) increased (suggesting amino acid fermentation shift).
- **Mechanistic hypothesis**: Decreased riboflavin/biotin and SCFAs/polyamines reduce the intestinal mucus layer, facilitating abnormal α-synuclein fibril formation in enteric neural plexus, with downstream neuroinflammation.
- Country-specific effects: Different bacteria account for riboflavin/biotin decrease in "Japan/USA/Germany" cluster vs. "China1/China2/Taiwan" cluster — geographic heterogeneity in taxa but functional convergence.

## Methods

- Design: Multi-cohort meta-analysis of shotgun metagenomic data.
- Tools: HUMAnN 3.6 (EC numbers), MaAsLin2 (confounder adjustment), KEGG pathway enrichment.
- Metabolomics: Proprietary GC-MS for SCFAs; LC-MS/MS for polyamines.

## Relevance to WikiBiome

Anchors entity pages: [[akkermansia-muciniphila]] (enriched in PD), [[faecalibacterium-prausnitzii]] (depleted), [[roseburia-intestinalis]] (depleted). Informs concept pages on [[riboflavin]], [[biotin]], [[scfas]], [[polyamines]], [[mucus-layer]], [[parkinsons-disease]]. Strongest evidence level for PD taxonomic signature across countries.

## Relevance to Cureva

- **PD signature Layer 2 (taxonomic)**: High-confidence (6+ independent studies, consistent across countries).
- **PD signature Layer 5 (virulence enzymes)**: Depletion of B2/B7/CAZyme biosynthetic capacity; elevated mucin-degradation via A. muciniphila.
- **Intervention hypothesis**: B2/B7 supplementation, mucin-sparing dietary fibers, polyamine restoration (via Bifidobacterium or dietary), and SCFA-producer restoration.

## Contradictions / Tensions

- Confirms and extends [[nishiwaki-2020-16s-gut-microbiota-parkinsons-eastern-europe]] (16S meta-analysis) at higher resolution.
- Resolves genus-level heterogeneity previously attributed to regional variation — function converges even when taxa differ.
- Akkermansia enrichment in PD conflicts with its "health-associated" framing in metabolic disease literature; evidence supports PD-specific pathogenic role (mucin-layer thinning).

## Open Questions

- Whether the riboflavin/biotin decrease is cause or consequence of dysbiosis.
- Whether vitamin supplementation can restore downstream SCFA/polyamine levels.
- Species-level heterogeneity in A. muciniphila: are specific strains more pathogenic?

## Karen's Brain Primitives

- **Primitive 4** (achilles heels): Depleted riboflavin/biotin-dependent enzymes are therapeutic targets.
- **Primitive 5** (two-sided engineering): Suppress A. muciniphila mucin degradation, restore SCFA producers.
- **Primitive 9** (oxygen state): Loss of butyrate producers and rise of mucin-degraders indicates compromised anaerobic ecology.
