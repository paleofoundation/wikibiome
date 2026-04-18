---
title: "Diagnosis of Crohn's Disease and Ulcerative Colitis Using the Microbiome"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Kang DY, Park JL, Yeo MK, Kang SB, Kim JM, Kim JS, Kim SY]
journal: BMC Microbiology
year: 2023
tags: [crohns-disease, IBD, ulcerative-colitis, gut-microbiome, machine-learning, diagnostic-biomarkers, dysbiosis, 16S-rRNA, WMS-sequencing, disease-severity]
doi: "10.1186/s12866-023-03084-5"
platform: wikibiome
evidence_level: cross-sectional
taxa_discussed: [alistipes, bacteroides-fragilis, bifidobacterium, collinsella, escherichia-coli, faecalibacterium-prausnitzii, fusobacterium-nucleatum, haemophilus, shigella, streptococcus]
karen_brain_primitives: [2]
---

# Key Claims

- Gut microbiome diversity is significantly lower in IBD patients compared to healthy controls, with Crohn's disease (CD) showing the greatest reduction
- Machine learning (regularized logistic regression) using whole metagenome shotgun (WMS) sequencing can discriminate CD from UC with AUC of 0.873 (training) and 0.633 (independent validation)
- The abundances of *Alistipes shahii* and *Pseudodesulfovibrio aespoeensis* are negatively correlated with CD severity, while *Polynucleobacter wuianus* is positively correlated
- Sixty-eight microbial biomarkers distinguish IBD from healthy controls, with [[escherichia-coli]] and *Shigella* enriched in CD and anti-inflammatory bacteria enriched in UC
- Three overlapping species with previous studies (*Morganella morganii*, [[faecalibacterium-prausnitzii]], *Haemophilus parainfluenzae*) validate cross-study reproducibility

# Methods/Findings

- **Study type**: Cross-sectional observational study; 482 samples (50 HC, 173 CD, 259 UC)
- **Sequencing**: Whole metagenome shotgun (WMS) sequencing; 16S rRNA gene rarefied to 1,222,561 sequences/sample
- **Alpha diversity**: Chao1 index significantly lower in CD than HC (p=1.2e-10) and in UC vs HC (p=1.8e-08); CD lower than UC (p=0.0032)
- **Enterotypes**: Faecalibacterium-dominated enterotype underrepresented in HC (74% vs 37% vs 40%)
- **CD-specific taxa**: Increased Bifidobacterium (11.42-30.44%); increased Escherichia (0.64, 9.48, 2.87%); decreased Faecalibacterium; enriched Fusobacterium, Streptococcus, Rothia, Collinsella
- **Disease severity**: CD activity correlated negatively with A. shahii (R=-0.57) and P. aespoeensis (R=-0.46); UC severity negatively with A. shahii, P. asaccharolytica, A. muciniphila
- **Machine learning**: Penalized logistic regression; AUC 0.873 train, 0.778 test; PRAUC 0.888/0.806/0.474; 68 discriminating microbiomes

# Connections

- Validates [[dysbiosis]] patterns in Crohn's disease with quantitative severity correlations
- [[escherichia-coli]] and Shigella expansion as CD-enriched pathogens, consistent with AIEC hypothesis
- [[faecalibacterium-prausnitzii]] depletion as reproducible CD biomarker across studies
- Links to [[calprotectin]] through disease activity monitoring approaches
- Enterotype analysis relevant to [[gut-metal-microbiome]] -- Bacteroides-dominated enterotype may have different metal handling
- Complements [[jacobs-2022-crohns-remission-obesity-mli-microbiome|jacobs-2022-crohns-remission-obesity-mli-microbiome]] on mucosal microbiome in CD
- [[crohns-disease]]
