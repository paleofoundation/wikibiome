---
title: "Li 2024 — Compositional and Functional Imbalance of Gut Microbiota in CKD Linked to Disease Patterns"
type: source
created: 2026-04-09
updated: 2026-04-17
authors: [Jing Li, Yang Shen, Kaixin Yan, Siyuan Wang, Jie Jiao, Hongjie Chi, Jiu-chang Zhong, Ying Dong, Pan Wang]
year: 2024
journal: "Journal of Translational Medicine"
doi: "10.1186/s12967-024-05578-w"
evidence_level: cross-sectional
sample_size: "n=148"
tags: [chronic-kidney-disease, CKD, gut-microbiota, CKD-subtypes, Klebsiella, Akkermansia, membranous-nephropathy, IgA-nephropathy, 16S-rRNA]
library_category: signatures
platform: both
condition: "chronic-kidney-disease"
karen_brain_primitives: [1, 3, 5]
metals_discussed: []
taxa_discussed: [akkermansia-muciniphila, klebsiella-pneumoniae]
key_findings:
  - "CKD patients show reduced alpha diversity with Klebsiella enrichment and Akkermansia depletion"
  - "Distinct microbial signatures across CKD subtypes (MN, IgAN, MCD, IRI)"
  - "Microbial diagnostic markers discriminate CKD subtypes with high accuracy"
keystone: false
---

# Compositional and Functional Imbalance of Gut Microbiota in CKD

## Key Findings

- **[[chronic-kidney-disease]] subjects show significantly reduced alpha diversity** and disrupted microbial composition compared to healthy controls (Li et al. 2024, cross-sectional, n=148).
- **[[klebsiella-pneumoniae]]** was significantly enriched in CKD patients, while **[[akkermansia-muciniphila]]** was higher in healthy controls -- a pattern consistent with loss of mucosal barrier protection and expansion of opportunistic pathogens.
- **Heterogeneous microbial signatures** were identified across CKD subtypes: membranous nephropathy (MN), IgA nephropathy (IgAN), minimal change disease (MCD), and ischemia-reperfusion injury (IRI) each showed distinct microbiome profiles.
- **Gut microbial diagnostic markers** discriminated between CKD subtypes with high accuracy, suggesting that microbiome profiling could supplement histological classification. <!-- NEEDS VERIFICATION: confirm specific AUC values for subtype discrimination -->
- **Functional analysis** revealed imbalanced metabolic pathways in CKD microbiomes, including altered amino acid and carbohydrate metabolism.

## Methods

- **Study design**: Cross-sectional observational study
- **Population**: 94 CKD patients across multiple disease subtypes and 54 healthy controls (total n=148)
- **Sequencing**: 16S rRNA gene sequencing
- **Analysis**: Alpha/beta diversity, differential abundance, functional prediction, and diagnostic model construction
- **CKD subtypes**: Membranous nephropathy (MN), IgA nephropathy (IgAN), minimal change disease (MCD), ischemia-reperfusion injury (IRI)
- **Limitations**: 16S resolution limits species-level identification; cross-sectional design; single-center cohort

## Detailed Summary

Li et al. provide one of the few studies examining gut microbiome differences across CKD disease subtypes rather than treating CKD as a monolithic entity. The enrichment of Klebsiella -- an iron-pirating, siderophore-producing opportunistic pathogen -- alongside depletion of Akkermansia -- a mucosal barrier protector -- represents a coherent ecological shift: loss of barrier integrity combined with expansion of organisms that exploit the compromised environment. The subtype-specific signatures are particularly valuable because they suggest that different immunological forms of kidney disease (IgAN vs. MN vs. MCD) create distinct ecological niches in the gut, potentially requiring different microbiome-targeted interventions. This complements Feng 2024, which found subtype-specific causal taxa through MR analysis.

## Relevance to WikiBiome

Supports entity pages for **[[akkermansia-muciniphila]]** (depleted in CKD -- protective role) and **[[klebsiella-pneumoniae]]** (enriched in CKD -- pathogenic role). The subtype-specific findings strengthen the CKD disease entity page by emphasizing that CKD is not a single microbiome disease. Informs concept pages on [[dysbiosis]] and [[biomarkers]] with diagnostic marker data.

## Relevance to Cureva

The subtype-specific microbiome profiles (Primitive 1) are critical for Cureva's CKD signature development. If MN, IgAN, MCD, and IRI have different microbial signatures, then intervention strategies should be tailored by CKD subtype. The Akkermansia depletion suggests a restoration target (Primitive 5). The Klebsiella enrichment, given its iron-siderophore ecology, connects to metal-dependent suppression strategies (Primitive 8 -- siderophore competition).

## Open Questions

- Do the subtype-specific microbiome signatures predict treatment response?
- Is Akkermansia depletion a cause or consequence of mucosal barrier damage in CKD?
- Can Klebsiella suppression through iron restriction improve CKD outcomes?
