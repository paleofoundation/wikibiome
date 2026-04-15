---

title: "Investigating causal associations among gut microbiota, metabolites and autoimmune hypothyroidism: a univariable and multivariable Mendelian randomization study"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Liu X, Yuan J, Liu S, Tang M, Meng X, Wang Y, Li Y, Chai Y, Kou L, Yang J, Li Z, Zhang L, Guan Q, Zhang H]
journal: Frontiers in Immunology
year: 2024
tags: [hashimotos-thyroiditis, thyroid, autoimmune, mendelian-randomization, gut-microbiota, gut-metabolites, indolelactate, causality, thyroid-gut-axis, bile-acids]
doi: "10.3389/fimmu.2023.1213159"
platform: wikibiome
---

# Investigating causal associations among gut microbiota, metabolites and autoimmune hypothyroidism: a univariable and multivariable Mendelian randomization study

## Key Claims

- Univariable MR analysis identified phylum Actinobacteria (OR=0.871), genus Defluviitaleaceae_UCG011 (OR=0.915), genus Eggerthella (OR=0.933), genus Subdoligranulum, and genus Ruminococcaceae_UCG011 as having borderline negative correlation with autoimmune hypothyroidism risk
- Genus Intestinimonas (OR=1.098, p=0.005) was associated with increased risk of autoimmune hypothyroidism
- Indolelactate was the only gut metabolite positively associated with autoimmune hypothyroidism after FDR correction (OR=1.592; 95% CI 1.228-2.065; P_FDR=0.036)
- N-(3-furoyl)glycine, pipecolate, phenylalanine, allantoin, and alanine were suggestively associated with autoimmune hypothyroidism, though only indolelactate survived FDR correction
- Reverse MR analysis showed no evidence of causal influence of autoimmune hypothyroidism on the identified gut microbiota, confirming unidirectional causality
- Family Defluviitaleaceae and genus Defluviitaleaceae_UCG011 were suggestively significant in multivariable MR (MVMR)

## Methods/Findings

- **Study type**: Univariable and multivariable Mendelian randomization

 - Gut microbiota: MiBioGen consortium (18,340 participants, 24 cohorts, 211 taxa)
 - Gut metabolites: TwinsUK and KORA GWAS (N=7,824); 69 gut microbiota-derived metabolites from MetaCyc
 - Autoimmune hypothyroidism: FinnGen DF8 (36,321 cases, 250,926 controls)
- **MR methods**: IVW (primary), weighted median, MR-PRESSO, MR-Egger; significance at FDR-corrected P<0.05
- **Univariable MR results for gut microbiota** (Figure 2):
 - 7 taxa showed suggestive associations with autoimmune hypothyroidism
 - All heterogeneity test Q p-values >0.05; MR-Egger intercept tests showed no horizontal pleiotropy (P>0.05)
 - Leave-one-out analysis confirmed no single outlier SNP drove the results
- **Metabolite MR results** (Figure 3):
 - Indolelactate: OR=1.592 (IVW), 1.463 (weighted median), 1.592 (MR-PRESSO); all p<0.01 except MR-Egger
 - N-(3-furoyl)glycine: OR=0.947 (protective); pipecolate: OR=0.765; phenylalanine: OR=0.287 (protective)
 - Alanine: OR=1.518 (risk factor); allantoin: OR=0.815 (protective)
- **Enrichment analysis**: GO and KEGG analyses of lead SNPs from causal microbiota and metabolites revealed significantly enriched regulatory pathways

## Connections

- Indolelactate as causal metabolite connects to [[zhang-2025-tryptophan-metabolism-hashimotos]] on tryptophan-derived indole metabolism
- Causal framework complements [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] immune cell mediation findings
- [[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]] provides parallel bidirectional MR for both HT and GD
- Eggerthella and Ruminococcaceae findings consistent with [[liu-2022-gut-microbiota-diversity-hashimotos]]
- Indole metabolite pathway links to [[dysbiosis]]-driven metabolic changes in [[gong-2024-iodine-gut-microbiota-hashimotos]]
- Phenylalanine as protective metabolite relevant to metabolism in HT
