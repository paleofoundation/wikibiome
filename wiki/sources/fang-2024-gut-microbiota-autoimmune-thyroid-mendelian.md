---
title: "Gut microbiota and autoimmune thyroid disease: a bidirectional Mendelian randomization study and mediation analysis"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Fang Y, Zhang X, Huang R, Liu J, Li Z]
journal: Frontiers in Microbiology
year: 2024
tags: [hashimotos-thyroiditis, thyroid, autoimmune, mendelian-randomization, gut-microbiota, graves-disease, immune-cells, mediation-analysis, causality, cd4-t-cells, dendritic-cells]
doi: "10.3389/fmicb.2024.1443643"
platform: wikibiome
evidence_level: computational-prediction
taxa_discussed: [akkermansia-muciniphila, bacteroides-fragilis, bifidobacterium]
---

# Gut microbiota and autoimmune thyroid disease: a bidirectional Mendelian randomization study and mediation analysis

## Key Claims

- Seven gut microbiota taxa were positively associated with AITD and 14 taxa showed negative correlation, based on bidirectional MR analysis of 211 taxa against both [[hashimotos-thyroiditis]] and [[graves-disease]]
- For HT, six genera and one phylum were causally associated: Eggerthella (OR=0.94), Ruminococcaceae_UCG011 (OR=0.95), Defluviitaleaceae_UCG011 (OR=0.93), Actinobacteria (OR=0.91), Butyrivibrio (OR=0.96) were protective; Holdemanella (OR=1.07) and Intestinimonas (OR=1.06) increased risk
- Actinobacteria (phylum) presented protective effects on HT via CCR2 on myeloid Dendritic Cell (5.0%); Bifidobacterium showed facilitating effects on GD through CD39+ CD4+ T cell %CD4+ T cell (5.0%)
- EM CD4+ T cells, activated CD4 regulatory T cells, and secreting CD4 T cells were identified as key immunophenotype mediators between gut microbiota and HT
- Reverse MR analysis showed no significant causal effect of AITD on gut microbiota composition for most taxa, supporting predominantly unidirectional causality

## Methods/Findings

- **Study type**: Bidirectional two-sample MR with multivariable MR mediation analysis

 - Gut microbiota: MiBioGen consortium (18,340 participants, 24 cohorts, 211 GM taxa)
 - AITD outcomes: FinnGen R10 (HT and GD separately)
 - Immunophenotypes: 731 immune cell traits GWAS (3,757 European subjects)
- **Forward MR for HT** (Figure 3A):
 - Eggerthella: OR=0.94 (95% CI 0.89-0.99, p=0.019)
 - Butyrivibrio: OR=0.96 (95% CI 0.93-0.99, p=0.016)
 - Holdemanella: OR=1.07 (95% CI 1.01-1.13, p=0.026)
 - Intestinimonas: OR=1.06 (95% CI 1.00-1.12, p=0.040)
- **Forward MR for GD** (Figure 3B):
 - Ruminoclostridium5: OR=1.31 (risk); Catenibacterium: OR=1.42 (risk)
 - Coprococcus1, Akkermansia, Victivallis, Bacteroidaceae, Bacteroides all protective

 - Eggerthella mediated via CD25+CD8+ T cell %T cell (beta=0.18), CD3 on activated CD4 regulatory T cell (beta=-0.22), CD3 on CD39+ activated CD4 regulatory T cell (beta=-0.21)
 - Actinobacteria mediated via CCR2 on myeloid Dendritic Cell (beta=-0.23, p=0.006), CD3 on Central Memory CD4+ T cell (beta=0.36, p=0.026)
 - Intestinimonas (risk) mediated via CD27 on IgD- CD38- unswitched memory B cell (beta=0.40, p=0.0001)
- **Bidirectional effects**: After removing taxa with bidirectional effects, 6 genera and 1 phylum remained for HT, 5 genera for GD

## Connections

- Causal associations align with [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] findings on Akkermansia and EM CD4+ T cells
- Eggerthella and Butyrivibrio protective roles complement [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]]
- [[graves-disease]] shares some but not all causal taxa with HT, supporting disease-specific mechanisms
- Dendritic cell mediation connects to immune pathways in [[zhu-2024-intestinal-microbiota-gut-thyroid-axis-hashimotos]]
- Regulatory T cell involvement links to Th17/Treg balance in [[gong-2024-iodine-gut-microbiota-hashimotos]]
- [[dysbiosis]] causality framework supports microbiome-directed therapeutic approaches
