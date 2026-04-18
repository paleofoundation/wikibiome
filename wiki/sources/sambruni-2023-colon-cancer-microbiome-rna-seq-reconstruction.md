---
title: "Location and condition based reconstruction of colon cancer microbiome from human RNA sequencing data"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Gaia Sambruni, Angeli D. Macandog, Jakob Wirbel, Danilo Cagnina, Carlotta Catozzi, Tiziano Dallavilla, Francesca Borgo, Nicola Fazio, Uberto Fumagalli-Romario, Wanda L. Petz, Teresa Manzo, Simona P. Ravenda, Georg Zeller, Luigi Nezi, Martin H. Schaefer]
journal: Genome Medicine
year: 2023
doi: "10.1186/s13073-023-01180-9"
tags: [colon-cancer, colorectal-cancer, microbiome-signature, RNA-seq, TCGA, tumor-microbiome, Faecalibacterium-prausnitzii, Fusobacterium-nucleatum, Clostridium, immune-infiltration, molecular-subtypes]
platform: wikibiome
evidence_level: computational-prediction
taxa_discussed: [bacteroides-fragilis, clostridium, coprococcus, faecalibacterium-prausnitzii, fusobacterium-nucleatum]
---

# Sambruni 2023 -- Location and Condition Based Reconstruction of Colon Cancer Microbiome from RNA-Seq Data

## Key Claims

- Intratumoural microbiome composition is correlated with survival, anatomic location, microsatellite instability, consensus molecular subtype, and immune cell infiltration in colon tumors
- *Faecalibacterium prausnitzii*, *Coprococcus comes*, *Bacteroides* spp., *Fusobacterium* spp., and *Clostridium* spp. are strongly associated with tumour properties
- A computational approach to detect bacterial signals in human RNA sequencing data can reconstruct the tumour-specific microbiome across multiple cancer types
- The method was validated on a new cohort of 30 resectable colon cancer patients from the European Institute of Oncology

## Methods/Findings

- **Type**: Computational analysis of TCGA datasets plus validation cohort (3737 primary tumour and 318 solid tissue normal from TCGA; 30 IEO colon cancer patients)
- **Methods**: PathSeq bacterial read extraction from RNA-Seq; LASSO regression for clinical property association; CIBERSORTx immune deconvolution; HUMAnN 3.0 pathway profiling

 - Microbiome reconstruction from RNA-Seq detected 59,592,060 bacterial reads (0.02% of total)
 - In 12,961 bacterial species; cancer type-specific bacterial compositions identified
 - COAD samples showed distinct bacterial composition separating by clinical and molecular properties
 - MSI status, CIMP, CMS classification, aneuploidy, and driver gene mutations all associated with microbiome composition
 - Survival analysis: specific bacteria associated with relapse probability in colon cancer

## Connections

- [[dysbiosis]] -- tumour microbiome composition varies by molecular subtype and is associated with clinical outcomes
- [[metal-carcinogenesis]] -- bacterial metabolic pathways enriched in tumour colon tissue include pathways relevant to environmental toxin processing
- [[oxidative-stress]] -- immune infiltration patterns correlate with bacterial composition, linking microbiome to inflammatory tumor microenvironment
- [[colorectal-cancer]]
