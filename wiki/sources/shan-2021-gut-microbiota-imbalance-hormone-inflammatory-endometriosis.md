---
title: "Shan 2021 — Gut Microbiota Imbalance and Correlations with Hormone and Inflammatory Factors in Stage 3/4 Endometriosis"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Jing Shan, Zhexin Ni, Wen Cheng, Ling Zhou, Dongxia Zhai, Shuai Sun, Chaoqin Yu]
corresponding_author: "Shuai Sun; Chaoqin Yu"
corresponding_email: "313767889@qq.com; chqyu81@163.com"
institution: "Laboratory for Reproductive Immunology, Hospital of Obstetrics and Gynecology, Fudan University, Shanghai; Department of Traditional Chinese Medicine, Changhai Hospital, Naval Medical University, Shanghai"
year: 2021
journal: "Archives of Gynecology and Obstetrics"
doi: "https://doi.org/10.1007/s00404-021-06057-z"
pmid: ""
evidence_level: case-control
sample_size: "n=24 (12 EM, 12 controls)"
tags: [endometriosis, gut-microbiota, estradiol, IL-8, IL-17A, dysbiosis, 16S-rRNA, inflammatory-factors, hormones, estrobolome]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 7, 9]
metals_discussed: []
taxa_discussed: [prevotella, coprococcus, blautia, dorea, bifidobacterium, streptococcus, actinobacteria, lachnospira, subdoligranulum, bacteroides, faecalibacterium, roseburia, escherichia-shigella, eubacterium-eligens, eubacterium-hallii, lachnoclostridium, phascolarctobacterium, anaerostipes, klebsiella, ruminococcus, tenericutes, saccharibacteria, fusobacteria, acidobacteria]
key_findings: ["EM patients had lower alpha diversity and higher Firmicutes/Bacteroidetes ratio compared to controls", "Serum estradiol (E2) and IL-8 were significantly elevated in EM patients and correlated with abundances of Blautia, Dorea, and Subdoligranulum", "Gut microbiota in EM was enriched for environmental information processing, endocrine system, and immune system KEGG pathways"]
keystone: false
---

## Key Findings

- **EM patients exhibited reduced alpha diversity** of gut microbiota and a significantly higher *Firmicutes*/*Bacteroidetes* ratio compared to healthy controls, with distinct community structure confirmed by 3D-PCoA (ANOSIM R=0.2616, p=0.001) ([[shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis]], case-control, n=24).
- **Serum estradiol (E2) was significantly elevated** in the EM group (74.7 +/- 22.5 pg/L vs 47.9 +/- 12.5 pg/L, p=0.002), while LH, FSH, and PRL showed no significant differences ([[shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis]], case-control).
- **IL-8 was significantly elevated** in the EM group (6.39 +/- 1.59 pg/mL vs 4.14 +/- 0.73 pg/mL, p<0.05), consistent with EM as an inflammatory disease ([[shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis]], case-control).
- **Genus-level differences** included significantly increased *[[Blautia]]*, *[[Bifidobacterium]]*, *Dorea*, *[[Streptococcus]]*, and *[Eubacterium] eligens* group in EM, with *[[Lachnospira]]* significantly decreased (p=0.00007631) ([[shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis]], case-control).
- **Correlations between microbiota and hormones/cytokines**: *[[Blautia]]* and *Dorea* abundance positively correlated with estradiol level; *Phascolarctobacterium* negatively correlated with PRL; *Subdoligranulum* positively correlated with IL-8 ([[shan-2021-gut-microbiota-imbalance-hormone-inflammatory-endometriosis]], case-control).

## Methods

- **Design**: Case-control study comparing stage 3/4 [[endometriosis]] patients with healthy controls.
- **Participants**: 12 patients with stage 3/4 EM (rASRM classification) and 12 healthy volunteers (CON), all Han women living and working in Shanghai, aged 18-40 years with menstrual regularity.
- **Inclusion criteria (EM)**: histologic diagnosis of EM; stage 3-4 (American Fertility Society Revised Classification 1997).
- **Exclusion criteria**: administration of antibiotics, probiotics, or hormonal agents within 3 months; pregnancy; gynecological infections; adenomyosis; PCOS; gynecological malignancy; inflammatory bowel disease; gastrointestinal cancer or surgical history; acute or severe digestive tract infection.
- **Sample collection**: Fecal samples collected 3-5 days after menstruation at home; peripheral blood for hormones (LH, FSH, PRL, E2) and 21 inflammatory factors via Bio-Plex Pro Human Cytokine Panel and Human 27-plex (#M500KCAF0Y).
- **Sequencing**: 16S rRNA high-throughput sequencing targeting V3-V4 region on Illumina MiSeq platform. OTU clustering at 97% similarity using Uparse (QIIME v7.0). Taxonomy assigned against Silva database (SSU128).
- **Bioinformatics**: Alpha diversity (Sobs, Ace, Shannon, Simpson indices); beta diversity (3D-PCoA); LEfSe analysis (LDA > 2); Spearman correlation analysis; PICRUSt functional prediction (KEGG pathways).
- **Statistics**: Two-tailed p<0.05 considered significant; GraphPad Prism 8 for statistical maps; STAMP (v2.1.3) for group differences.

## Detailed Summary

### Hormones and inflammatory factors

Serum E2 was significantly higher in EM patients (p=0.002). No significant differences were found for LH (p=0.447), FSH (p=0.419), or PRL (p=0.089). Among 21 inflammatory factors measured, only **IL-8** was significantly elevated in EM (EM group 6.39 +/- 1.59 pg/mL vs CON group 4.14 +/- 0.73 pg/mL). IL-17A showed a trend toward elevation but did not reach significance.

### Microbiota community structure

A total of 1,463,557 sequences were obtained from 24 samples with an average length of 433.1 bp. The EM group showed reduced alpha diversity by rank-abundance curve, though Sobs, Ace, Shannon, and Simpson indices did not reach statistical significance (p>0.05). Beta diversity analysis by 3D-PCoA demonstrated significant separation between groups (ANOSIM R=0.2616, p=0.001).

### Phylum-level differences

At the phylum level, the *Firmicutes*/*Bacteroidetes* ratio was increased in EM (3.55 vs 1.99 in controls). Significant differences were found for:
- **Increased in EM**: *[[Actinobacteria]]* (p=0.01325), *Saccharibacteria* (p=0.01846), *Fusobacteria* (p=0.04984), *Acidobacteria* (p=0.001054)
- **Decreased in EM**: *Tenericutes* (p=0.0000374)

### Genus-level differences

Among the top 20 genera:
- **Significantly increased in EM**: *[[Bifidobacterium]]* (p=0.01529), *[[Blautia]]* (p=0.000308), *Dorea* (p=0.008601), *[[Streptococcus]]* (p=0.0179), *[Eubacterium] eligens* group (p=0.0004872), *[Eubacterium] hallii* group (p=0.00258)
- **Significantly decreased in EM**: *[[Lachnospira]]* (p=0.00007631)

LEfSe analysis (LDA > 2) identified 21 genera enriched in EM and 16 genera enriched in CON. *[[Prevotella]]_7* had the highest abundance in EM; *Coprococcus_2* had the highest abundance in controls.

### Unique taxa

EM-only genera included *Corynebacterium*, *Prevotellaceae UCG-001*, *Alistipes*, *Ruminococcaceae UCG-009*, *[Eubacterium] brachy* group. CON-only genera included *Coprococcus_3*, *Ruminoclostridum_6*.

### Correlations with hormones and cytokines

Spearman correlation heatmap analysis revealed:
- **E2 positively correlated** with *[[Blautia]]* and *Dorea* abundance (p<0.05)
- **PRL negatively correlated** with *Phascolarctobacterium* abundance (p<0.05)
- **IL-8 positively correlated** with *Subdoligranulum* abundance
- **IL-17A negatively correlated** with *Subdoligranulum* abundance (inverted to IL-8 pattern)

### Functional prediction (PICRUSt/KEGG)

EM gut microbiota was significantly enriched for:
- **Environmental information processing** (p<0.05) — including "signal transduction" and "signaling molecules and interaction" pathways
- **Endocrine system** pathways (p<0.01)
- **Immune system** pathways (p<0.001) — including RIG-I-like receptor signaling, IL-17 signaling, Th17 cell differentiation

The immune system enrichment, particularly the RIG-I-like receptor pathway, connects to NF-kB target gene activation including IL-8, TNFalpha, apoptosis regulators (Bax, Fas), proliferation (EGF), and angiogenesis (VEGF) — all relevant to [[endometriosis]] pathology.

## Relevance to WikiBiome

This study provides genus-level microbiota data for the [[endometriosis]] entity page, specifically:
- Evidence for dysbiosis patterns: elevated *Firmicutes*/*Bacteroidetes* ratio, reduced *[[Lachnospira]]*, increased *[[Blautia]]* and *[[Bifidobacterium]]*
- Direct correlation between gut taxa and serum estradiol, supporting the [[estrobolome]] concept (Karen's Brain Primitive 7)
- The *[[Blautia]]* and *Dorea* correlation with E2 suggests these taxa may participate in estrogen recirculation via [[beta-glucuronidase]] activity
- Cross-references to entity pages: *[[Blautia]]*, *[[Bifidobacterium]]*, *[[Streptococcus]]*, *[[Lachnospira]]*, *[[Prevotella]]*, *[[Actinobacteria]]*

## Relevance to Cureva

- **Taxonomic signature layer**: Enriched taxa (*[[Blautia]]*, *Dorea*, *[[Bifidobacterium]]*, *[[Streptococcus]]*, *Eubacterium* groups) and depleted taxa (*[[Lachnospira]]*, *Tenericutes*) feed directly into the [[endometriosis-signature]] taxonomic layer.
- **Ecological features**: The elevated *Firmicutes*/*Bacteroidetes* ratio and enriched immune/endocrine pathways support the ecological layer of the signature (Primitive 9 — oxygen state and ecological determinants).
- **Estrobolome connection**: The *[[Blautia]]*-E2 and *Dorea*-E2 correlations support Primitive 7 (estrobolome and hormone recirculation), suggesting these taxa contribute to estrogen deconjugation and recirculation that drives EM progression.
- **Inflammatory axis**: IL-8 elevation correlated with *Subdoligranulum* abundance provides a potential biomarker target and intervention monitoring endpoint.
- **Functional predictions**: Enriched immune system pathways (RIG-I-like receptor, IL-17 signaling) suggest the dysbiotic microbiota actively promotes the inflammatory milieu of EM.

## Contradictions / Tensions

- **Alpha diversity**: This study found no significant difference in alpha diversity indices (Sobs, Ace, Shannon, Simpson) between EM and controls, though the rank-abundance curve suggested reduced diversity. Some other EM microbiome studies report significant alpha diversity reductions. The small sample size (n=12 per group) may explain the failure to reach significance.
- **Bifidobacterium enrichment in EM**: *[[Bifidobacterium]]* is generally considered a beneficial commensal, yet it was significantly increased in EM patients here. This conflicts with the conventional expectation that beneficial taxa are depleted in disease states. The authors do not discuss this finding in depth. Possible explanations include compensatory bloom or strain-level differences not captured by 16S sequencing.
- **Firmicutes/Bacteroidetes ratio**: The elevated ratio in EM is directionally consistent with obesity and metabolic disease literature but has not been consistently reported across all EM microbiome studies. The ratio metric itself is increasingly considered an oversimplification.

## Open Questions

1. **Strain-level resolution**: 16S sequencing cannot distinguish between beneficial and pathogenic strains within genera like *[[Bifidobacterium]]* and *[[Streptococcus]]*. Metagenomic sequencing would clarify whether the enriched strains carry beta-glucuronidase genes relevant to estrogen recirculation.
2. **Causal direction**: Does the gut dysbiosis drive elevated E2 (via estrobolome activity), or does elevated E2 from ectopic endometrial tissue reshape the gut microbiota? This cross-sectional design cannot resolve causality.
3. **Temporal dynamics**: Samples were collected 3-5 days post-menstruation. How does the microbiota profile shift across the menstrual cycle in EM patients?
4. **Stage specificity**: Only stage 3/4 EM was studied. Whether earlier stages show the same microbial signature is unknown.
5. **Beta-glucuronidase activity**: The correlation between *[[Blautia]]*/*Dorea* and E2 suggests estrogen deconjugation, but beta-glucuronidase activity was not directly measured. This is a critical gap for the [[estrobolome]] hypothesis.
6. **IL-8 mechanism**: The *Subdoligranulum*-IL-8 correlation is intriguing but the mechanistic pathway is uncharacterized. Is this direct microbial stimulation or indirect via metabolites?
