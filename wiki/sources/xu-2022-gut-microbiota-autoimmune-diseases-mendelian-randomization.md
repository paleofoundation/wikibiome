---
title: "Xu 2022 — Causal relationship between gut microbiota and autoimmune diseases (SLE, RA, IBD, MS, T1D, CeD): two-sample Mendelian randomization"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Qian Xu, Jing-Jing Ni, Bai-Xue Han, Shan-Shan Yan, Xin-Tong Wei, Gui-Juan Feng, Hong Zhang, Lei Zhang, Bin Li, Yu-Fang Pei]
corresponding_author: "Lei Zhang, Bin Li, Yu-Fang Pei"
corresponding_email: "lzhang6@suda.edu.cn; bli4004@suda.edu.cn; ypei@suda.edu.cn"
institution: "Medical College of Soochow University, Suzhou"
year: 2022
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2021.746998"
pmid: "35140703"
evidence_level: quasi-experimental
sample_size: "MiBioGen n=18,340; MS discovery n=41,505 + replication n=451,629; 6 AD outcomes total"
tags: [multiple-sclerosis, autoimmune, mendelian-randomization, gut-microbiome, bifidobacterium, type-1-diabetes, celiac-disease, systemic-lupus, rheumatoid-arthritis, inflammatory-bowel-disease, mibiogen, causal-inference]
library_category: causal
platform: both
condition: "multiple-sclerosis"
karen_brain_primitives: [1, 4, 5]
metals_discussed: []
taxa_discussed: [bifidobacterium, methanobrevibacter, akkermansia, paraprevotella, butyricimonas, amucimphila, eggerthellaceae, bifidobacterium-adolescentis, ruminococcus, faecalibacterium]
key_findings:
  - "Across 6 autoimmune diseases (SLE, RA, IBD, MS, T1D, CeD), only Bifidobacterium genus showed a replicable causal signal — positively associated with T1D (OR 1.605, p_FDR=4.19×10⁻⁷) and celiac disease (OR 1.401, p_FDR=2.03×10⁻³)"
  - "For MS specifically, MR analysis did not identify replicable causal taxa passing discovery + UK Biobank replication with FDR correction — suggesting MS microbiome signal is polymicrobial or confounded by environmental factors"
  - "Reverse MR showed no evidence of T1D or CeD causally altering Bifidobacterium — directionality supports microbiome → autoimmunity"
---

# Causal Relationship Between Gut Microbiota and Autoimmune Diseases: A Two-Sample Mendelian Randomization Study

## Key Findings

- Two-sample MR across 6 autoimmune diseases using MiBioGen (n=18,340) as exposure. MS outcome from IMSGC GWAS (14,802 cases / 26,703 controls discovery; 1,406 / 449,223 UKB replication).
- **Only replicable causal genus**: *Bifidobacterium* — positive risk for T1D (OR 1.605, 95% CI 1.339–1.922, p_FDR=4.19×10⁻⁷) and celiac disease (OR 1.401, 95% CI 1.139–1.722, p_FDR=2.03×10⁻³).
- **MS**: no causal taxa survived discovery + replication + FDR correction. Null result informative — rules out strong single-taxon causation signal at European-ancestry GWAS power.
- **Reverse MR**: no reverse causality for Bifidobacterium ← T1D/CeD.
- **Prior observational signals** (MS-associated *Methanobrevibacter* enrichment, *Butyricimonas* depletion, *Akkermansia* variability) did **not** replicate as causal in MR — suggesting confounding or reverse causation in cross-sectional studies.

## Methods

2-sample MR with IVW as primary, weighted median, MR-Egger as sensitivity. 211 taxa (131 genera, 35 families, 20 orders, 16 classes, 9 phyla). SNP p<5×10⁻⁸ threshold; LD clumping R²<0.01 window 500 kb. MR-PRESSO outlier test. Wald ratio where single SNP. Discovery replicated in independent cohorts (UK Biobank for RA, IBD, MS, T1D).

## Relevance to WikiBiome

- Important *negative* finding for **[[multiple-sclerosis]]** entity: cross-sectional microbiome differences in MS patients do NOT establish causal direction at MR-grade evidence. Disease entity page should temper single-taxon causal claims.
- Supports **[[bifidobacterium]]** entity page: genus-level increase is NOT universally protective — elevates T1D/CeD risk, context-dependent.
- Informs **[[mendelian-randomization]]** concept page: method's discriminating power between association vs causation, limits at small autoimmune-disease sample sizes.

## Relevance to Cureva

- **MS signature caveat**: Do not designate individual enriched/depleted taxa as "causal" based on cross-sectional data alone. Mark confidence as *preliminary* for taxonomic signature pending larger GWAS.
- **T1D signature**: Bifidobacterium as risk factor challenges the "probiotics are good for autoimmunity" heuristic — at genus level, Bifidobacterium supplementation warrants caution in T1D-risk children.
- **CeD signature**: Similar Bifidobacterium caution.
- **MS intervention hypothesis (probiotic)**: null MR signal + positive intervention trials (e.g., Zangeneh 2025 meta-analysis) implies intervention effects may be strain-specific or via non-causal-taxon mechanisms (SCFAs, epithelial barrier).

## Open Questions

- Why does Bifidobacterium emerge as a risk genus for two autoimmune conditions — strain heterogeneity, IgA induction, or early-life immune imprinting?
- Whether MR at species-level resolution (e.g., via shotgun metagenomics GWAS) will recover MS causal signals.
- Whether MS-associated taxa from observational studies are mediators of other exposures (diet, geography, smoking) rather than independent causes.
