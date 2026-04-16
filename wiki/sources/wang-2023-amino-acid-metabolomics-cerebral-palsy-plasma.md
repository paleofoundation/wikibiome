---
title: "Wang 2023 — Plasma amino acid metabolomics identifies diagnostic signature for cerebral palsy"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Dan Wang, Juan Song, Ye Cheng, Yiran Xu, Lili Song, Yimeng Qiao, Li B, Bingbing Li, Lei Xia, Ming Li, Jin Zhang, Yu Su, Ting Wang, Jian Ding, Xiaoyang Wang, Sujuan Wang, Changlian Zhu, Qinghe Xing]
corresponding_author: "Qinghe Xing; Changlian Zhu; Sujuan Wang"
corresponding_email: "qhxing@fudan.edu.cn; changlian.zhu@neuro.gu.se; sujuanw@163.com"
institution: "Fudan University, Shanghai, China; Zhengzhou University; University of Gothenburg"
year: 2023
journal: "Frontiers in Molecular Neuroscience"
doi: "10.3389/fnmol.2023.1237745"
pmid: "not yet verified"
evidence_level: case-control
sample_size: "n=122 (62 CP, 60 healthy controls)"
tags: [cerebral-palsy, amino-acid-metabolomics, plasma, biomarker, preterm, tryptophan, BAIBA, taurine, cystine, valine]
library_category: metabolites
platform: both
condition: cerebral-palsy
karen_brain_primitives: [4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "33 amino acids profiled in plasma by HPLC; β-amino-isobutyric acid (BAIBA), tryptophan, and asparagine were the top three AAs differentiating CP from controls (all p<1e-4)"
  - "Preterm CP infants differed from controls by BAIBA, tryptophan, asparagine, phenylalanine, arginine, taurine, α-aminoadipic acid"
  - "Machine-learning (Lasso) combination of BAIBA + tryptophan + taurine gave AUC 0.8741 (95%CI 0.7322–1.000) for preterm CP diagnosis"
  - "Tryptophan was significantly reduced in CP — consistent with reduced kynurenine/serotonin precursor pool and gut-microbial tryptophan metabolism"
---

## Key Findings

- Targeted plasma amino acid metabolomics (HPLC, 33 AAs detected) in 62 CP children (42 male, 20 female; 29 preterm, 33 full-term) vs 60 age/sex-matched healthy controls at the Third Affiliated Hospital of Zhengzhou University.
- Univariate analysis: 10 AAs differed significantly (p<0.05) — including cystine, valine, asparagine, citrulline, tryptophan, urinary sulfur ether (cystathionine), leucine, α-aminoadipic acid, **β-amino-isobutyric acid (BAIBA)**.
- After Bonferroni correction, **BAIBA, tryptophan, and asparagine remained significant** (all p<1e-4). BAIBA had the largest fold change (FC 0.76). Tryptophan FC 0.87 (VIP 2.22). Asparagine FC 0.82 (VIP 1.64).
- Subgroup (preterm CP, n=29 vs preterm controls, n=20): 7 AAs differed — BAIBA, tryptophan, asparagine, phenylalanine, arginine, taurine, α-AAA. BAIBA p=5.6e-6; tryptophan p=6.6e-6 (strongest signals).
- OPLS-DA model separated CP from controls clearly; Lasso regression selected **tryptophan, cystine, serine** as most stable features overall.
- Best diagnostic combination for preterm CP: **BAIBA + tryptophan + taurine** — training AUC 0.9286, validation AUC **0.8741 (95%CI 0.7322–1.000)**. Full-term CP combination (cysteine + cystathionine + proline) had weaker AUC 0.7152.

## Relevance to WikiBiome

- Strengthens [[cerebral-palsy]] disease entity page with a metabolomic dimension: reduced tryptophan and BAIBA are systemic signatures.
- Feeds [[tryptophan]] / tryptophan-kynurenine concept page: reduced plasma Trp in CP aligns with the hypothesis of altered gut-microbial tryptophan metabolism (indole pathway) affecting brain development.
- Informs the gut-brain axis narrative for CP: amino acid dysregulation is measurable in plasma and correlates with prematurity.
- Taurine depletion in preterm CP connects to [[bile-acid-metabolism]] (taurine-conjugated bile acids) and potential neurosteroid signaling.

## Relevance to Cureva

- Provides a validated metabolomic biomarker panel (BAIBA + tryptophan + taurine) for auxiliary CP diagnosis in preterm infants (AUC 0.87).
- Intervention hypothesis: correcting tryptophan/taurine/BAIBA deficiency in at-risk preterm infants — mechanistic link via microbial tryptophan metabolism (indole-3-propionic acid, AhR activation) and gut-brain axis.
- Signature layer: supports tryptophan-pathway disruption as a mechanistic feature of CP (links to [[ahr]] concept).

## Contradictions / Tensions

- BAIBA source (mitochondrial β-oxidation of thymine/valine) is not obviously microbial — mechanism for its reduction in CP unclear; may be secondary to muscle atrophy or altered exercise capacity in CP children.
- Full-term CP had weaker biomarker signal (AUC 0.72), suggesting the metabolomic signature is stronger in preterm/prenatal-injury CP subtypes.

## Open Questions

- Link tryptophan depletion to gut microbiome composition in these CP children (not measured here).
- Whether BAIBA/tryptophan supplementation or a tryptophan-metabolizing probiotic can modify CP trajectory.
