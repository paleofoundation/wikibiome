---
title: "Wang 2024 — Integrated 16S rRNA sequencing and metagenomics insights into microbial dysbiosis and distinct virulence factors in inflammatory bowel disease"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Haijing Wang, Yuanjun Wang, Libin Yang, Jiawen Feng, Shou Tian, Lingyan Chen, Wei Huang, Jia Liu, Xiaojin Wang]
corresponding_author: "Xiaojin Wang"
corresponding_email: "1105465352@qq.com"
institution: "Medical College of Qinghai University, Xining, China"
year: 2024
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2024.1375804"
evidence_level: case-control
sample_size: "n=36 IBD patients (4 CD, 14 UC, 18 controls); 12 metagenomes"
tags: [crohns, ulcerative-colitis, ibd, microbiome-signature, 16s-rrna, metagenomics, virulence-factors, proteobacteria, escherichia-shigella, enterococcus]
library_category: signatures
platform: both
condition: "crohns-disease"
karen_brain_primitives: [1, 4, 9]
metals_discussed: [iron]
taxa_discussed: [escherichia-shigella, enterococcus, christensenellaceae-r7, fusicatenibacter, holdemanella, proteobacteria]
key_findings:
  - "In a multicenter case-control study in Western China (Qinghai), Proteobacteria (particularly Escherichia-Shigella) significantly enriched in CD patients, while Enterococcus was markedly elevated in UC — distinguishing CD from UC taxonomically"
  - "Core microbiota of healthy subjects (Christensenellaceae R-7 group, Fusicatenibacter, Holdemanella) depleted in both CD and UC — these are candidate keystone commensals"
  - "Oxidative stress-associated virulence factors and metabolic pathways (iron acquisition, LPS biosynthesis) significantly enriched in IBD samples, supporting oxidative-stress and iron-dysregulation mechanisms in IBD pathogenesis"
---

# Wang 2024 — Integrated 16S + metagenomics in IBD (Western China)

## Key Findings

- **CD and UC diverge at the phylum level.** Case-control study in Xining, China (Qinghai) with 18 de novo IBD (4 CD, 14 UC) and matched healthy controls. 16S V4-V5 rRNA sequencing on 36 samples and shotgun metagenomics on 12. CD patients showed significant enrichment of Proteobacteria, particularly `Escherichia-Shigella`. UC patients showed markedly elevated `Enterococcus`.
- **Core commensal loss is shared.** Christensenellaceae R-7 group, Fusicatenibacter, and Holdemanella form the healthy core microbiota in this cohort and are consistently depleted in both CD and UC.
- **Virulence factors and oxidative-stress pathways enriched.** Metagenomics identified significant enrichment of oxidative-stress-associated virulence factors and iron-acquisition pathways in IBD samples, consistent with the hypothesis that oxidative stress and iron dysregulation drive IBD pathogenesis.

## Methods

De novo IBD patients diagnosed at Qinghai Provincial People's Hospital (2020–) matched by age and gender with 18 healthy individuals. 16S rRNA V4-V5 sequencing with 338F/806R primers on Illumina MiSeq PE300. QIIME2 pipeline. 12 samples underwent shotgun metagenomics for functional and virulence factor profiling. Regional focus: Western China, addressing geographic heterogeneity in IBD microbiome.

## Relevance to WikiBiome

- Supports [[crohns-disease]] Proteobacteria/E. coli-Shigella enrichment signal in a geographically distinct (non-Western) cohort.
- Supports [[ulcerative-colitis]] `Enterococcus` enrichment — distinguishes UC from CD taxonomically.
- Feeds [[christensenellaceae]] and [[fusicatenibacter]] entity pages as candidate keystone commensals depleted in IBD.
- Informs [[virulence-factors]] concept — IBD enriches oxidative-stress response and iron-acquisition systems.

## Relevance to Cureva

- **[[crohns-disease-signature]] layer 2 and layer 5 reinforcement.** Escherichia-Shigella iron-acquisition pathways are a CD virulence signature. Enterococcus is a UC virulence signature.
- **Cross-population validation.** Prior IBDMDB and Western cohort findings replicate in Chinese cohort, strengthening confidence in taxonomic signature.
- Primitive 1 (oxidative environment selects for Proteobacteria), 4 (iron-dependent virulence factors), 9 (oxygen/oxidative stress as ecological determinant) are active.

## Open Questions

- Is the UC-Enterococcus axis independent of the CD-E. coli axis, or do they share upstream drivers?
- What distinguishes Christensenellaceae R-7 commensals mechanistically — what function is lost when they're depleted?
