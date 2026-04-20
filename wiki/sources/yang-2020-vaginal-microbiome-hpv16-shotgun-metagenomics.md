---
title: "Yang 2020 — Vaginal Microbiome Alterations in HPV16 Infection by Shotgun Metagenomics"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Qian Yang, Yaping Wang, Xinyi Wei, Jiawei Zhu, Xinyu Wang, Xing Xie, Weiguo Lu]
corresponding_author: "Weiguo Lu"
corresponding_email: "lbwg@zju.edu.cn"
institution: "Women's Reproductive Health Laboratory of Zhejiang Province, Women's Hospital, Zhejiang University School of Medicine, Hangzhou, China"
year: 2020
journal: "Frontiers in Cellular and Infection Microbiology"
doi: "10.3389/fcimb.2020.00286"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=52 exploratory (27 HPV16+, 25 controls); n=169 validation cohort (88 HPV16+, 81 controls); n=98 species validation subset (53 HPV16+, 45 controls)"
tags: [vaginal-microbiome, HPV, HPV16, cervical-cancer, metagenomics, shotgun-sequencing, biomarkers, dysbiosis]
library_category: signatures
platform: both
condition: "HPV16 infection / cervical cancer"
karen_brain_primitives: [1, 5, 6, 9]
metals_discussed: []
taxa_discussed: [gardnerella-vaginalis, atopobium-vaginae, peptostreptococcus-anaerobius, candida-albicans, lactobacillus, prevotella, fusobacterium-nucleatum, megasphaera, mobiluncus-curtisii, veillonella, methanobrevibacter-oralis]
key_findings:
  - "HPV16+ women show decreased Firmicutes (Lactobacillus) and increased Actinobacteria, Fusobacteria, and viruses compared to controls"
  - "Random forest classifiers using 12 genes, 17 genera, or 7 species achieved AUC of 0.861, 0.819, and 0.918 respectively for predicting HPV16 status"
  - "Atopobium vaginae, Peptostreptococcus anaerobius, and Candida albicans were significantly enriched in HPV16+ women in the validation cohort (p < 0.001)"
keystone: false
---

## Key Findings

- **Firmicutes depletion and Actinobacteria enrichment** define the HPV16-positive vaginal microbiome: Firmicutes (primarily *Lactobacillus*) was significantly lower while Actinobacteria (primarily *Gardnerella*), Fusobacteria, and viruses were significantly higher in HPV16+ women ([[yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics]], cross-sectional, n=52).
- **Microbial biomarker panels** distinguished HPV16+ from controls with high accuracy: 12 gene markers (AUC 0.861), 17 genus markers (AUC 0.819), and 7 species markers (AUC 0.918) using random forest classifiers ([[yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics]], cross-sectional).
- **Three species validated by qPCR** in an independent cohort of 98 women: *Atopobium vaginae* (p = 2.66E-08), *Peptostreptococcus anaerobius* (p = 2.79E-08), and *Candida albicans* (p = 2.54E-06) were significantly enriched in HPV16+ women ([[yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics]], cross-sectional, n=98).
- **Non-bacterial taxa enriched in HPV16+** women included the archaeon *Methanobrevibacter oralis*, the fungus *Candida albicans*, and *Alphapapillomavirus 9* (the species containing HPV16), demonstrating multi-kingdom dysbiosis ([[yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics]], cross-sectional).
- **Functional enrichment** in HPV16+ vaginal microbiomes included metabolism, membrane transport, carbohydrate metabolism, and amino acid metabolism pathways; controls were enriched in glycan biosynthesis, replication, and repair ([[yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics]], cross-sectional).

## Methods

- **Study design:** Cross-sectional case-control with exploratory and validation cohorts.
- **Exploratory cohort:** 27 HPV16-positive women (histology normal) and 25 HPV-negative controls, recruited from colposcopy clinic at Women's Hospital, Zhejiang University. Age-matched, no significant demographic differences.
- **Validation cohort 1 (gene/genus markers):** 88 HPV16+ and 81 HPV-negative women, qPCR validation of two selected gene markers.
- **Validation cohort 2 (species markers):** 53 HPV16+ and 45 HPV-negative women, qPCR validation of six species markers.
- **Sequencing:** Shotgun metagenomic sequencing on Illumina HiSeq platform; average 7.49 million clean reads per sample. Rarefaction analysis confirmed adequate sequencing depth.
- **Bioinformatics:** Reads assembled by SOAPdenovo, gene prediction by MetaGeneMark, functional annotation by KEGG BLAST. Taxonomic classification via alignment to NCBI database.
- **Statistics:** Wilcoxon rank-sum test with Benjamin-Hochberg FDR correction (adjusted p < 0.05). Linear discriminant analysis (LDA) effect size (LEfSe). Random forest classifiers with ROC analysis. Principal component analysis (PCA).
- **Exclusion criteria:** Antibiotic use within 1 month, infection within 2 months, history of LEEP/CKC/hysterectomy, other diseases, abnormal cytology or histology.

## Detailed Summary

### Taxonomic Alterations

At the phylum level, *Lactobacillus* (Firmicutes) dominated both groups but was significantly less abundant in HPV16+ women. Actinobacteria (p = 0.00803), Fusobacteria (p = 0.0010), and viruses (p = 0.0006) were significantly higher in HPV16+ women.

At the genus level, **[[gardnerella-vaginalis|Gardnerella]]** was the most prominently enriched genus in HPV16+ women, followed by **[[prevotella|Prevotella]]** and **Peptostreptococcus**. The community type distribution also shifted: a lower proportion of HPV16+ women had lactobacillus-dominant community type L (55.6% vs. 80% in controls), and more had community type O (44.4% vs. 20%).

At the species level, 77 genera including *Gardnerella*, *Peptostreptococcus*, and *Prevotella* were significantly higher in HPV16+ women, while 20 genera including *Lactobacillus* and *Aerococcus* were lower. Specific species enriched in HPV16+ women included:
- *Gardnerella vaginalis* (p = 0.0172)
- *Gardnerella sp_304* (p = 0.0022)
- *Gardnerella sp_2612* (p = 0.0011)
- *Mobiluncus curtisii* (p = 0.0106)
- *Peptostreptococcus anaerobius* (p = 0.0067)
- *Veillonella montpellierensis* (p = 0.0019)
- *Megasphaera sp UPII_135E* (p = 0.0352)
- *Corioacteriales bacterium DNF00809* (p = 0.0050)

### Non-Bacterial Taxa

Archaea: *Methanobrevibacter oralis* was the only archaeon significantly enriched in HPV16+ women.

Eukaryotes: **[[candida-albicans|Candida albicans]]** was significantly enriched in HPV16+ women, along with *Candida glabrata* and *Mucor ambiguus*. Several fungi including *Malassezia* species were depleted.

Viruses: *Alphapapillomavirus 9* (containing HPV16) was enriched, as expected. Additionally, *Suid herpesvirus 1* and *Alphapapillomavirus 13* were identified.

### Functional Analysis

A total of 373 KEGG orthologies (KOs) were identified in 88 pathways significantly different between groups (p < 0.05). Twenty-two KOs had significantly different abundance (FDR p < 0.05). HPV16+ microbiomes were enriched in metabolism, membrane transport, carbohydrate metabolism, amino acid metabolism, energy metabolism, and signal transduction. Controls were enriched in glycan biosynthesis and metabolism, and replication and repair.

### Biomarker Validation

Random forest ensemble learning identified optimal biomarker panels:
- **12 genes:** AUC = 0.861 (95% CI: 0.739-0.983)
- **17 genera:** AUC = 0.819 (95% CI: 0.684-0.954)
- **7 species:** AUC = 0.918 (95% CI: 0.839-0.997)

qPCR validation in independent cohorts confirmed the gene markers (GI_0004362, C69 family dipeptidase from *G. vaginalis*; GI_0014455, GBSi1 group II intron maturase) and three of six species markers (*A. vaginae*, *P. anaerobius*, *C. albicans*). Three other species (*G. vaginalis*, *L. iners*, *Chlamydia trachomatis*) showed trends but did not reach significance in the validation cohort.

## Relevance to WikiBiome

This study provides shotgun metagenomic evidence for the compositional and functional alteration of the vaginal microbiome during persistent HPV16 infection — an important precursor to cervical cancer. Key entity and concept connections:

- **[[gardnerella-vaginalis]]** — Enriched in HPV16+ women; its vaginolysin drives epithelial ultrastructural responses. The enrichment of multiple *Gardnerella* species/strains suggests species-level resolution matters.
- **[[candida-albicans]]** — Significantly enriched in HPV16+ women, demonstrating interkingdom (fungal-bacterial) dysbiosis in the context of viral infection.
- **[[prevotella]]** — Enriched at genus level in HPV16+ women, consistent with its association with bacterial vaginosis and cervical dysbiosis more broadly.
- **[[fusobacterium-nucleatum]]** — Enriched in HPV16+ women; notable given its established role in colorectal cancer and other malignancies.
- **[[peptostreptococcus-anaerobius]]** — One of the strongest validated biomarkers; known to induce intracellular cholesterol biosynthesis and cause dysplasia in mice (Tsoi et al., 2017), connecting vaginal dysbiosis to carcinogenesis.
- **Concept: [[vaginal-microbiome]]** — The shift from lactobacillus-dominant to diverse anaerobe-dominant communities parallels the community state type framework.
- **Concept: [[interkingdom-relationships]]** — Multi-kingdom dysbiosis (bacteria + fungi + archaea + viruses) in HPV16 infection.

## Relevance to Cureva

- **Signature building:** The taxonomic data contributes to a potential cervical cancer / HPV persistence signature — enrichment of *Gardnerella*, *Prevotella*, *Peptostreptococcus*, *Fusobacterium*, *Candida*, and depletion of *Lactobacillus* define a recognizable dysbiotic ecology.
- **Ecological state:** The shift from lactobacillus dominance (low pH, lactic acid production) to anaerobe dominance suggests an ecological transition relevant to primitive 9 (oxygen state as ecological determinant) — loss of protective *Lactobacillus* acidification enables anaerobic pathobiont expansion.
- **Intervention hypotheses:** Restoring *Lactobacillus* dominance (probiotic intervention) or targeting *Gardnerella*/*Peptostreptococcus* may support HPV clearance — consistent with primitive 5 (two-sided ecological engineering).
- **Interkingdom considerations (primitive 6):** The co-enrichment of *Candida albicans* with bacterial pathobionts raises questions about fungal-bacterial synergy in creating a permissive environment for HPV persistence.
- **Biomarker potential:** The 7-species panel (AUC 0.918) could inform non-invasive screening approaches for HPV-associated cervical dysbiosis risk.

## Contradictions / Tensions

- **Gardnerella vaginalis** enrichment in HPV16+ women reached significance in the exploratory cohort (p = 0.0172) but only trended in the qPCR validation cohort (p = 0.054). The authors note this as a limitation; however, multiple *Gardnerella* strains/species were individually significant, suggesting species-level heterogeneity complicates genus-level validation.
- **Lactobacillus iners** — often considered an ambiguous species (not clearly protective like *L. crispatus*) — did not reach significance in the validation cohort (p = 0.13), leaving its role in HPV16 infection unclear in this dataset.
- **No metal data:** This study does not measure metal concentrations, so the metallomic layer of any HPV/cervical cancer signature cannot be informed by this source alone. The functional enrichment data (membrane transport, metabolism) could indirectly connect to metal acquisition pathways but this is not explored.

## Open Questions

1. **Does the vaginal dysbiosis precede or follow HPV16 infection?** The cross-sectional design cannot establish causality. Longitudinal studies tracking microbiome composition through HPV acquisition and clearance/persistence are needed.
2. **What drives the fungal co-enrichment?** Is *Candida albicans* enrichment a consequence of lactobacillus depletion (loss of competitive exclusion), a direct effect of HPV-induced immune changes, or a cooperative relationship with enriched bacteria?
3. **What is the metal ecology of the HPV16+ vaginal environment?** Iron, zinc, and manganese availability in the cervicovaginal niche could explain selective pressures favoring the observed enriched taxa — *Gardnerella*, *Prevotella*, and *Fusobacterium* all have known metal dependencies.
4. **Does *Peptostreptococcus anaerobius* contribute to cervical carcinogenesis** as it does in colorectal cancer (inducing cholesterol biosynthesis and dysplasia)? The strong enrichment in HPV16+ women warrants mechanistic investigation.
5. **Would the biomarker panels generalize across HPV types** beyond HPV16, and across different populations (this study was limited to Chinese women)?
