---

title: "Causal Relationship Between Gut Microbiota and Autoimmune Diseases: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Xu Q, Ni JJ, Han BX, Yan SS, Wei XT, Feng GJ, Zhang H, Zhang L, Li B, Pei YF]
journal: Frontiers in Immunology
year: 2022
tags: [Mendelian-randomization, gut-microbiome, autoimmune-diseases, multiple-sclerosis, Bifidobacterium, Ruminococcus, GWAS, causal-inference]
doi: "10.3389/fimmu.2021.746998"
platform: wikibiome
---

# Causal Relationship Between Gut Microbiota and Autoimmune Diseases: A Two-Sample Mendelian Randomization Study

## Key Claims

- [[Bifidobacterium]] was the only genus with a replicated causal relationship to autoimmune diseases, specifically increasing risk of type 1 diabetes (OR 1.605, P_FDR = 4.19 x 10^-7) and celiac disease (OR 1.401, P_FDR = 2.03 x 10^-3)
- For [[multiple-sclerosis]] specifically, higher genetically predicted [[Bifidobacterium]] showed a trend toward increased risk (OR 1.384, P_FDR = 0.012 in discovery; OR 1.001 in replication) but did not reach significance after replication
- [[Ruminococcus]] was associated with higher risk of SLE (OR 5.593), IBD (OR 2.141), and MS (OR 2.890) in discovery samples, but these associations did not replicate
- Reverse MR analysis showed no evidence that T1D or CeD causally affect Bifidobacterium abundance, supporting a microbiota-to-disease causal direction
- The causal effects of Bifidobacterium may be species- and strain-specific, as some strains have pro-inflammatory effects while others are anti-inflammatory

## Methods/Findings

- **Design**: Two-sample [[Mendelian-randomization]] using publicly available GWAS summary statistics
- **Data Sources**: Gut microbiota GWAS from 18,340 individuals across 24 cohorts; MS GWAS from IMSGC (14,802 cases, 26,703 controls); replication via UK Biobank
- **Methods**: IVW, weighted median, MR-Egger regression; MR-PRESSO for pleiotropy detection; 211 bacterial taxa analyzed (131 genera); SNPs with P < 5 x 10^-8 selected as instruments
- **Quality control**: F-statistics ranged 29.78 to 2,074.13 (all >10); no evidence of horizontal pleiotropy; leave-one-out sensitivity analyses confirmed robustness
- **MS-specific results**: 13 SNPs as instruments for MS; Bifidobacterium showed suggestive but non-significant association after FDR correction in replication

## Connections

- Provides genetic evidence framework for the observational gut dysbiosis findings in [[jangi-2016-gut-microbiome-alterations-ms]] and [[miyake-2015-dysbiosis-ms-clostridia-depletion]]
- The Bifidobacterium findings are particularly relevant to [[probiotics]] research: [[tamtaji-2017-probiotic-gene-expression-ms]] used *Bifidobacterium bifidum* as part of a probiotic intervention in MS
- Connects to the broader [[causal-microbiome-relationships]] literature and the question of whether [[gut-dysbiosis]] is a cause or consequence of MS
- The Ruminococcus-MS association (albeit unreplicated) aligns with Ruminococcaceae changes observed in MS cohorts
- Methodological template for other [[Mendelian-randomization]] studies in the MS-microbiome field
