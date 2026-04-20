---
title: "Fang et al. 2024 — Gut Microbiota and Autoimmune Thyroid Disease: A Bidirectional Mendelian Randomization Study and Mediation Analysis"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Fang Y, Zhang X, Huang R, Liu J, Li Z]
corresponding_author: "Jiaye Liu / Zhihui Li"
corresponding_email: "bugle25@swchscu.cn / rockoliver@vip.sina.com"
institution: "Division of Thyroid Surgery, West China Hospital, Sichuan University, Chengdu, China"
journal: Frontiers in Microbiology
year: 2024
doi: "10.3389/fmicb.2024.1443643"
evidence_level: computational-prediction
sample_size: "n=18,340 (MiBioGen); FinnGen R10 for HT and GD; 3,757 for immunophenotypes"
tags: [hashimotos-thyroiditis, thyroid, autoimmune, mendelian-randomization, gut-microbiota, graves-disease, immune-cells, mediation-analysis, causality, cd4-t-cells, dendritic-cells]
library_category: causal
platform: wikibiome
condition: "autoimmune thyroid disease"
karen_brain_primitives: [1, 3, 5]
metals_discussed: []
taxa_discussed: [akkermansia-muciniphila, bacteroides-fragilis, bifidobacterium, eggerthella, butyrivibrio, holdemanella, intestinimonas, ruminococcaceae, actinobacteria, catenibacterium]
key_findings:
  - "Seven gut microbiota taxa positively associated with AITD and 14 taxa negatively correlated via bidirectional MR of 211 taxa"
  - "Actinobacteria (phylum) protective for HT mediated via CCR2 on myeloid Dendritic Cells (5.0%); Bifidobacterium facilitates GD through CD39+ CD4+ T cell pathway (5.0%)"
  - "Reverse MR showed no significant causal effect of AITD on gut microbiota for most taxa, supporting predominantly unidirectional gut-to-thyroid causality"
keystone: false
---

# Gut Microbiota and Autoimmune Thyroid Disease: A Bidirectional Mendelian Randomization Study and Mediation Analysis

## Key Findings

- **Seven taxa causally linked to AITD**: Bidirectional MR analysis of 211 taxa against both [[hashimotos-thyroiditis]] and [[graves-disease]] identified 7 GM taxa positively associated with AITD and 14 taxa with negative correlation ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction, n=18,340).
- **HT-specific causal taxa**: Eggerthella (OR=0.94, 95% CI 0.89-0.99, p=0.019), RuminococcaceaeUCG011 (OR=0.95), DefluviitaleaceaeUCG011 (OR=0.93), Actinobacteria (OR=0.91), and Butyrivibrio (OR=0.96) were protective; Holdemanella (OR=1.07, p=0.025) and Intestinimonas (OR=1.06, p=0.040) increased HT risk ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).
- **GD-specific causal taxa**: Coprococcus1 (OR=0.78), Akkermansia (OR=0.77), Victivallis (OR=0.82), Bacteroidaceae (OR=0.75), Bacteroides (OR=0.77) were protective; Ruminiclostridium5 (OR=1.31) and Catenibacterium (OR=1.42) increased GD risk ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).
- **Immune cell mediation identified**: Actinobacteria presented protective effects on HT via CCR2 on myeloid Dendritic Cell (5.0% mediation); Bifidobacterium showed facilitating effects on GD through CD39+ CD4+ T cell %CD4+ T cell (5.0%) and CD14 on CD33+ HLA DR+ CD14dim (12.2%) ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).
- **Predominantly unidirectional causality**: Reverse MR analysis showed no significant causal effect of AITD on gut microbiota composition for most taxa after removing bidirectional effects, supporting gut-to-thyroid directionality ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).

## Methods

- **Study design**: Bidirectional two-sample Mendelian randomization with multivariable MR (MVMR) mediation analysis
- **Exposure data**: MiBioGen consortium — 18,340 participants from 24 cohorts, 211 GM taxa (9 phyla, 20 orders, 16 classes, 35 families, 131 genera)
- **Outcome data**: FinnGen R10 for HT and GD separately
- **Mediator data**: 731 immune cell traits GWAS (3,757 European subjects) — relative cell counts (RC), morphologic parameters (MP), absolute cell counts (AC), median fluorescence intensities (MFI)
- **IV selection**: SNPs at locus-wide significance (p < 1.0 x 10^-5), LD clumping R^2 < 0.001 (window 10,000kb), MAF > 0.01
- **Statistical methods**: IVW meta-analysis (primary), weighted median, MR-Egger regression, simple mode, weighted mode; MR-PRESSO for pleiotropy; Cochrans Q for heterogeneity; random-effects IVW for primary analysis
- **Software**: R (TwoSampleMR v0.5.6, MR-PRESSO v1.0)

## Detailed Summary

**Forward MR for HT**: After removing taxa with bidirectional effects, 6 genera and 1 phylum remained significantly associated. Key protective taxa include Eggerthella (p=0.019), Butyrivibrio (p=0.016), and phylum Actinobacteria (p=0.011). Risk-increasing taxa were Holdemanella (p=0.025) and Intestinimonas (p=0.040). The median F-statistic was 21.03 (range 14.58-88.42) across IVs ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).

**Forward MR for GD**: Five genera remained after bidirectional filtering. Protective: Coprococcus1 (p=0.037), Akkermansia (p=0.023), Victivallis (p=0.010), Bacteroidaceae (p=0.046), Bacteroides (p=0.046), Verrucomicrobiales (p=0.023). Risk: Ruminiclostridium5 (p=0.029), Catenibacterium (p=0.006). LachnospiraceaeND3007group (OR=1.85, p=0.030) was also positively associated ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).

**Mediation analysis** (Table 1): For HT, Intestinimonas (risk) mediated via CD4 regulatory T cell %CD4+ T cell (11.2%), CD27 on IgD+ CD38- unswitched memory B cell (10.8%), and CD28 on CD45RA+ CD4+ T cell (30.2%). Eggerthella (protective) mediated via CD25++ CD8+ T cell %T cell, CD3 on activated CD4 regulatory T cell, and CD3 on CD39+ activated CD4 regulatory T cell. For GD, Bifidobacterium mediated its facilitating effect via CD39+ activated CD4 regulatory T cell (beta=-0.38, p=0.033), CD39+ CD4+ T cell %CD4+ T cell (beta=-0.26, p=0.045), and CD14 on CD33+ HLA DR+ CD14dim (beta=0.52, p=0.014) ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).

**Reverse MR**: No significant reverse causal effects from HT on any of the 7 associated GM taxa (all OR ~1.0, p > 0.3). For GD, reverse analysis showed Bacteroides (OR=0.96, p=0.017) and several other taxa with marginal significance, but after correction these were not robust ([[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]], computational-prediction).

## Relevance to WikiBiome

- Provides causal evidence framework for [[gut-microbiome]] influence on thyroid autoimmunity, moving beyond observational associations
- Actinobacteria and Bifidobacterium have disease-specific causal directions (protective in HT, facilitating in GD) — critical nuance for entity pages
- CCR2 on myeloid dendritic cells as a mediator connects to [[inflammation]] concept page
- Supports the narrative that gut microbiota composition precedes thyroid disease onset (unidirectional causality)

## Relevance to Cureva

- Identifies specific mediating immune cell traits that could serve as biomarkers for treatment response monitoring
- Bifidobacterium's paradoxical facilitating role in GD challenges blanket probiotic supplementation — important STOP signal consideration
- Regulatory T cell pathways (CD4 Treg, CD39+ Tregs) as mediators suggest that interventions targeting Treg function may be effective
- Intestinimonas as an HT risk factor via B cell pathways (CD27 on unswitched memory B cells, 10.8% mediation) suggests humoral immune mechanisms as intervention targets

## Contradictions / Tensions

- Bifidobacterium is generally considered protective and is depleted in thyroid disease patients observationally, yet MR analysis suggests it facilitates GD through CD39+ CD4+ T cell pathways — this paradox may reflect strain-level differences not captured at genus-level GWAS resolution
- The MR approach uses European-ancestry GWAS data predominantly, limiting generalizability to other ethnic groups
- Genus-level resolution of MiBioGen may miss species-level effects that drive the observed associations

## Open Questions

- Whether species-level MR (when data become available) would resolve the Bifidobacterium paradox in GD
- Whether the identified immune cell mediators (CCR2 on myeloid DCs, CD39+ Tregs) are druggable intervention targets
- Whether Holdemanella and Intestinimonas represent direct pathogenic agents or markers of a broader dysbiotic state
- Future RCTs testing AITD-specific probiotic formulations guided by these causal taxa
