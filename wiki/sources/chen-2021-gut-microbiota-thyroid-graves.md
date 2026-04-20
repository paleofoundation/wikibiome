---
title: "Chen et al. 2021 — Associations between Gut Microbiota and Thyroidal Function Status in Chinese Patients with Graves' Disease"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Chen J, Wang W, Guo Z, Huang S, Lei H, Zang P, Lu B, Shao J, Gu P]
corresponding_author: "J. Shao and P. Gu"
corresponding_email: "shaojing@nju.edu.cn"
institution: "Department of Endocrinology, Jinling Hospital, Southeast University, Nanjing, China"
journal: Journal of Endocrinological Investigation
year: 2021
doi: "10.1007/s40618-021-01507-6"
evidence_level: case-control
sample_size: "n=29 (15 GD patients + 14 healthy controls; 13 re-sequenced post-treatment)"
tags: [graves-disease, thyroid, autoimmune, gut-microbiota, 16S-rRNA, TRAb, Lactobacillus, Phascolarctobacterium, Synergistetes, Ruminococcus, dysbiosis, methimazole, thyroid-antibodies, Blautia, Veillonella, Streptococcus]
platform: wikibiome
condition: "Graves' disease"
metals_discussed: []
taxa_discussed: [bifidobacterium, blautia, lactobacillus, phascolarctobacterium, ruminococcus, streptococcus, veillonella]
key_findings:
  - "Gut microbial diversity is significantly reduced in GD patients (Shannon p=0.014, Simpson p=0.009) and increases after 3-5 months methimazole treatment"
  - "Synergistetes negatively correlated with TRAb (R=-0.702, P=0.000), TGAb (R=-0.624, P=0.003), and TPOAb (R=-0.711, P=0.001), suggesting protective role"
  - "Lactobacillus positively correlated with TRAb (R=0.489, P=0.024) and TPOAb (R=0.607, P=0.006), paradoxically associating with disease activity"
karen_brain_primitives: [1, 4, 5]
keystone: false
library_category: signatures
---

# Associations between Gut Microbiota and Thyroidal Function Status in Chinese Patients with Graves' Disease

## Key Findings

- **Gut microbial diversity is significantly reduced in GD patients** compared to healthy controls: observed OTUs (p=0.037), Shannon index (5.19 vs 4.55, p=0.014), and Simpson index (0.95 vs 0.89, p=0.009) all significantly lower in the hyperthyroid group ([[chen-2021-gut-microbiota-thyroid-graves]], case-control, n=29)
- **Synergistetes showed the strongest negative correlation with thyroid autoantibodies**: TRAb (R=-0.702, P=0.000), TGAb (R=-0.624, P=0.003), and TPOAb (R=-0.711, P=0.001), suggesting a protective role against autoimmune thyroid activity ([[chen-2021-gut-microbiota-thyroid-graves]], case-control, n=29)
- **Lactobacillus paradoxically correlated positively with TRAb** (R=0.489, P=0.024) and TPOAb (R=0.607, P=0.006), challenging its conventional designation as universally beneficial ([[chen-2021-gut-microbiota-thyroid-graves]], case-control, n=29)
- **After 3-5 months methimazole treatment**, gut microbiota diversity significantly improved: Shannon and Chao1 indices increased (P<0.05); Phascolarctobacterium increased while Blautia, Lactobacillus, Veillonella, and Streptococcus decreased ([[chen-2021-gut-microbiota-thyroid-graves]], case-control, n=13 re-sequenced)
- **Ruminococcus and Phascolarctobacterium abundance changes correlated with TRAb changes** during treatment (Ruminococcus: P=0.035, R=0.638; Phascolarctobacterium: P=0.046, R=0.610), suggesting these taxa track with disease activity ([[chen-2021-gut-microbiota-thyroid-graves]], case-control, n=13)

## Methods

- **Study type**: Observational case-control with pre/post treatment follow-up
- **Population**: 15 patients with primary GD (hyperthyroid group, HG) from Jinling Hospital, Nanjing; 14 healthy volunteers as control group (CG); 13 GD patients re-sequenced after 3-5 months oral methimazole treatment (treatment group, TG)
- **Clinical parameters (HG vs CG)**: TSH 0.05 vs 1.90 (p=0.000), T3 4.64 vs 1.40 (p=0.000), T4 275.56 vs 107.06 (p=0.000), FT3 22.18 vs 5.05 (p=0.000), FT4 51.45 vs 11.51 (p=0.000), TRAb 6.62 vs 0.30 (p=0.001), TPOAb 110.55 vs 8.63 (p=0.010)
- **Post-treatment (TG)**: FT3 and FT4 significantly recovered; TRAb decreased from 5.91 to 2.08 (p=0.004)
- **Sequencing**: 16S rDNA V3-V4 region on Illumina MiSeq; QIIME for OTU classification at 99% similarity
- **Statistics**: Kruskal-Wallis non-parametric test (q<0.05), linear discriminant analysis (LDA, LDAscore>2.0), Spearman rank test for microbiota-antibody correlations

## Detailed Summary

### Alpha and Beta Diversity

GD patients showed significantly lower observed OTUs (155.80 vs 211.43, p=0.037), Shannon index (4.55 vs 5.19, p=0.014), and Simpson index (0.89 vs 0.95, p=0.009) compared to controls. After treatment, Shannon (4.56 vs 4.46) and Chao1 (224.37 vs 191.97, p=0.016) indices significantly increased, suggesting microbial diversity partially recovers with thyroid function normalization.

### Phylum-Level Changes

Firmicutes and Bacteroidetes were dominant in both groups with F/B ratios of 3.79 (CG) vs 3.01 (HG), though this difference was not statistically significant (P=0.444). Proteobacteria and Synergistetes were significantly reduced in HG. Veillonella showed significant difference (P=0.039) at the phylum level.

### Genus-Level Changes (HG vs CG)

Phascolarctobacterium was significantly decreased in GD patients. Lactobacillus, Veillonella, Streptococcus, Blautia, and Bacilli were significantly increased in GD. LDA analysis confirmed enrichment of Lactobacillus, Veillonella, and Streptococcus in HG.

### Post-Treatment Changes (TG vs HG)

After methimazole treatment, Ruminococcus, Streptococcus, and Blautia decreased while Phascolarctobacterium increased. Lactobacillus trended downward. Proteobacteria increased in TG compared to HG. LDA analysis showed Phascolarctobacterium, Lachnospiraceae, Corynebacterium, and Lactococcus were enriched in TG.

### Spearman Correlations with Thyroid Antibodies

**TRAb correlations**: Synergistetes R=-0.702 (P=0.000); Lactobacillus R=0.489 (P=0.024); Phascolarctobacterium R=-0.544 (P=0.011). **TPOAb correlations**: Synergistetes R=-0.711 (P=0.001); Lactobacillus R=0.607 (P=0.006). **TGAb correlations**: Synergistetes R=-0.624 (P=0.003). **Pre/post treatment**: Ruminococcus change correlated with TRAb change (P=0.035, R=0.638); Phascolarctobacterium change correlated with TRAb change (P=0.046, R=0.610).

## Relevance to WikiBiome

- Confirms reduced gut microbial diversity in [[graves-disease]], consistent with findings from [[yang-2022-intestinal-flora-graves-methimazole]] in an independent Nanjing cohort
- Phascolarctobacterium as a protective biomarker connects to [[short-chain-fatty-acids]] production (propionate)
- Synergistetes protective role relevant to understanding immune regulation in autoimmune conditions
- **Lactobacillus paradox** (positive TRAb correlation despite being generally considered beneficial) is critical for [[lactobacillus]] entity page and complicates simplistic probiotic narratives
- Bifidobacterium-TRAb positive correlation replicated, consistent with [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] Mendelian randomization risk finding
- Recovery of microbiome diversity after methimazole treatment supports bidirectional gut-thyroid axis hypothesis

## Relevance to Cureva

- **Intervention hypothesis**: Restoring Phascolarctobacterium and Synergistetes abundance could reduce TRAb levels; propionate supplementation or targeted probiotics may be therapeutic
- **STOP signal**: Indiscriminate Lactobacillus probiotic supplementation in GD may be counterproductive given the positive Lactobacillus-TRAb correlation
- **Biomarker potential**: Ruminococcus and Phascolarctobacterium changes track with TRAb changes during treatment, suggesting use as treatment response monitoring
- **Triangle evidence**: Methimazole (I) restores Phascolarctobacterium and reduces pathogenic taxa (f) in GD (D)

## Contradictions / Tensions

- The positive Lactobacillus-TRAb and Lactobacillus-TPOAb correlations contradict the general assumption that Lactobacillus is universally beneficial; context-dependent virulence is emerging
- F/B ratio was not significantly different between groups despite significant diversity differences, suggesting phylum-level ratios may not capture the dysbiosis in GD
- Small sample size (n=15 GD, n=14 controls) limits statistical power and generalizability
- Not all GD patients were re-sequenced post-treatment (13 of 15), potentially introducing selection bias

## Open Questions

- Which Lactobacillus species are driving the positive correlation with TRAb? Species-level resolution is needed
- Does Synergistetes depletion precede GD onset or result from it? Longitudinal studies needed
- Would Phascolarctobacterium or propionate supplementation reduce TRAb independently of methimazole?
- How does methimazole alter the gut microbiome -- directly (antimicrobial effect) or indirectly (via thyroid hormone normalization)?
- What is the mechanism linking Synergistetes to thyroid autoantibody regulation?
