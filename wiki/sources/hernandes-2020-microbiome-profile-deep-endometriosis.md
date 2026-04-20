---
title: "Hernandes 2020 — Microbiome Profile of Deep Endometriosis Patients: Comparison of Vaginal Fluid, Endometrium and Lesion"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Camila Hernandes, Paola Silveira, Aline Fernanda Rodrigues Sereia, Ana Paula Christoff, Helen Mendes, Luiz Felipe Valter de Oliveira, Sergio Podgaec]
corresponding_author: "Camila Hernandes"
corresponding_email: "camila.hernandes@einstein.br"
institution: "Hospital Israelita Albert Einstein, Sao Paulo, Brazil; BiomeHub, Florianopolis, Brazil"
year: 2020
journal: "Diagnostics"
doi: "10.3390/diagnostics10030163"
pmid: ""
evidence_level: case-control
sample_size: "n=21 (10 endometriosis, 11 controls); 47 samples total"
tags: [endometriosis, microbiome, vaginal-fluid, endometrium, deep-endometriosis, 16S-rRNA, dysbiosis]
library_category: signatures
platform: both
condition: endometriosis
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [lactobacillus, gardnerella, streptococcus, prevotella, enterococcus, alishewanella, pseudomonas, escherichia, aerococcus, ureaplasma, corynebacterium, atopobium]
key_findings:
  - "Deep endometriotic lesions show distinct bacterial composition with less Lactobacillus and more Alishewanella, Enterococcus, and Pseudomonas compared to vaginal fluid and eutopic endometrium"
  - "Beta-diversity analysis showed significant difference (p=0.036, weighted UniFrac PERMANOVA) in bacterial composition of lesions versus other sample sites"
  - "Vaginal fluid, eutopic endometrium, and endometriotic lesions shared similar dominant genera (Lactobacillus, Gardnerella, Streptococcus, Prevotella) but lesions had greater overall diversity"
keystone: false
---

## Key Findings

- **Deep endometriotic lesions present a distinct bacterial profile** compared to vaginal fluid and eutopic endometrium, with reduced [[lactobacillus]] dominance and increased abundance of [[alishewanella]], [[enterococcus]], and [[pseudomonas]] ([[hernandes-2020-microbiome-profile-deep-endometriosis]], case-control, n=21).
- **Beta-diversity analysis revealed a statistically significant difference** (PERMANOVA p=0.036, weighted UniFrac) in the bacterial composition of endometriotic lesions compared to all other sample types, though Bray-Curtis dissimilarity did not reach significance (p=0.53) ([[hernandes-2020-microbiome-profile-deep-endometriosis]]).
- **No significant differences in alpha-diversity** (Shannon, Simpson) were found between sample groups, though endometriotic lesions showed a tendency toward lower alpha-diversity compared to control vaginal fluid samples ([[hernandes-2020-microbiome-profile-deep-endometriosis]]).
- **51 bacterial genera were identified** across all 47 samples, with an average of 8,465 reads per sample from 16S rRNA V3-V4 amplicon sequencing ([[hernandes-2020-microbiome-profile-deep-endometriosis]]).
- **Endometriotic lesion samples contained the most diverse microorganism profiles**, including [[lactobacillus]], [[enterococcus]], [[gardnerella]], [[pseudomonas]], [[alishewanella]], [[ureaplasma]], and [[aerococcus]] ([[hernandes-2020-microbiome-profile-deep-endometriosis]]).

## Methods

- **Design:** Case-control study (pilot investigation) at Hospital Israelita Albert Einstein (HIAE), Sao Paulo, Brazil. Ethics approval December 2017 (project 80280317.5.0000.0071).
- **Participants:** 21 women total — 10 in the endometriosis group (deep endometriosis confirmed by laparoscopy and histopathology), 11 in the control group (women undergoing laparoscopic surgery for benign gynecologic diseases or elective tubal ligation with confirmed absence of endometriosis). Women aged 18-50 with eumenorrheic cycles. Exclusion: autoimmune, inflammatory, or neoplastic disease; antibiotic/antimycotic use within 30 days.
- **Samples collected:** 47 total — 21 vaginal fluid samples, 18 eutopic endometrium samples, 8 endometriotic lesion samples. Collected during surgery to minimize contamination.
- **Sequencing:** 16S rRNA gene V3-V4 region amplicon sequencing on Illumina MiSeq (V2 x 300 kit). DNA extracted with DNeasy Power Soil Kit (tissue) and QIAamp DNA Blood Mini Kit (vaginal fluid). BioProject PRJNA546137.
- **Bioinformatics:** EncodeTools Metabarcode Pipeline (BiomeHub), Deblur for denoising, VSEARCH for chimera removal, BLAST for taxonomy. Alpha diversity (Phyloseq), beta diversity (weighted UniFrac, Bray-Curtis), differential abundance (DESeq2). Nonparametric tests (Kruskal-Wallis, Wilcoxon).

## Detailed Summary

This study is among the first to characterize the microbiome directly within deep endometriotic lesions and compare it to the microbial communities of vaginal fluid and eutopic endometrium from the same patients and controls.

### Sample Composition

Across all sites and subjects, the dominant genera were [[lactobacillus]], [[gardnerella]], [[streptococcus]], and [[prevotella]]. Eutopic endometrium and endometriotic lesion samples yielded fewer total reads than vaginal fluid samples but showed marked [[lactobacillus]] predominance in vaginal fluid and endometrium.

### Lesion-Specific Findings

Deep endometriotic lesions showed the most notable differences in microbial composition. DESeq2 differential abundance analysis confirmed that lesions had:
- **Less [[lactobacillus]]** than vaginal fluid or eutopic endometrium
- **More [[alishewanella]]** — a genus not typically associated with the female reproductive tract
- **More [[enterococcus]]** — an opportunistic pathogen
- **More [[pseudomonas]]** — associated with biofilm formation and opportunistic infection

The bacterial profile of lesions was confirmed as significantly different by DESeq2 analysis. The heatmap (Figure 4B) showed lesion vs. other site comparisons had the most pronounced log2 fold-change values across multiple genera.

### Diversity Metrics

- **Alpha diversity:** Shannon and Simpson indices were highly variable across groups. No statistically significant differences were observed between endometriosis and control groups at the same anatomical site. There was a non-significant tendency toward lower alpha-diversity in endometriotic lesions compared to control vaginal fluid.
- **Beta diversity:** Weighted UniFrac PERMANOVA showed a significant difference (p=0.036) in the bacterial composition of lesions compared to other sample types. Bray-Curtis dissimilarity did not reach significance (p=0.53).

### Inflammatory Context

The authors connect their findings to prior work by the same group showing altered TLR expression in regulatory T cells from peritoneal fluid of endometriosis patients — TLR 1-8 were expressed in the endometriosis group versus only TLR1 and TLR2 in controls. This suggests the microbial diversity in lesions triggers broader innate immune activation via pathogen-associated molecular patterns (PAMPs) and inflammasome pathways.

### Limitations

The authors explicitly acknowledge: (1) small sample size (pilot study), (2) need for larger confirmatory studies, (3) unexplored relationship between microbial metabolites and immune responses in endometriotic tissue, (4) the study characterizes the microbiome at the genus level only (16S V3-V4), not species level.

## Relevance to WikiBiome

- **[[endometriosis]] entity page:** This study provides direct evidence that deep endometriotic lesions harbor a distinct bacterial community compared to healthy endometrium, supporting the concept that microbial colonization of ectopic tissue may contribute to disease maintenance. Updates the "Microbiome Associations" section.
- **[[lactobacillus]] entity page:** Demonstrates reduced Lactobacillus in endometriotic lesions relative to vaginal fluid and eutopic endometrium — relevant to the organism's protective ecological role.
- **[[enterococcus]] entity page:** Documents enrichment in endometriotic lesions, expanding the genus's disease association profile.
- **[[pseudomonas]] entity page:** Documents enrichment in endometriotic lesions; relevant given Pseudomonas biofilm-forming capacity.
- **[[alishewanella]] entity page:** Unusual finding — this genus is not commonly reported in the female reproductive tract. Worth tracking as a potential lesion-associated taxon pending replication.
- **Concept: [[bacterial-contamination-hypothesis]]:** The finding of bacteria within the lesions themselves supports the hypothesis (Khan et al. 2018, ref 13 in the paper) that bacterial contamination of endometriotic tissue contributes to disease pathogenesis, though this study does not establish causality.

## Relevance to Cureva

- **[[endometriosis-signature]]:** Provides taxonomic signature data for the lesion microenvironment. The enrichment of [[enterococcus]] and [[pseudomonas]] (both biofilm-forming organisms) in lesions is relevant to Layer 4 (ecological features — biofilm) and Layer 2 (taxonomic signature — enriched taxa). The reduced [[lactobacillus]] in lesions contributes to Layer 2 (depleted taxa).
- **Intervention hypotheses:** The finding that lesions have reduced Lactobacillus and increased opportunistic pathogens suggests potential for: (a) probiotic interventions targeting Lactobacillus restoration, (b) anti-biofilm strategies targeting Pseudomonas/Enterococcus, (c) investigation of whether antibiotic therapy targeting lesion-associated bacteria could reduce disease burden (note: Chadchan et al. ref 18 showed metronidazole reduced endometriosis progression in mice).
- **Primitive 5 (Two-Sided Ecological Engineering):** Suppress opportunistic colonizers (Enterococcus, Pseudomonas) while restoring Lactobacillus-dominant ecology.
- **Primitive 9 (Oxygen State):** The shift from Lactobacillus-dominant (anaerobic/microaerophilic) to a more diverse community including aerobic organisms (Pseudomonas) may reflect altered oxygen ecology in the peritoneal environment where lesions reside.

## Contradictions / Tensions

- **Ata et al. 2019 (ref 24):** Found similar overall vaginal, cervical, and gut microbiota between endometriosis (Stage 3/4) and healthy controls but noted genus-level differences including absence of [[atopobium]] and enhanced [[gardnerella]], [[streptococcus]], [[escherichia]], [[shigella]], and [[ureaplasma]] in the endometriosis group. The current study found no significant vaginal fluid differences between groups — the key difference was in the lesions themselves, which Ata et al. did not sample.
- **Chen et al. 2017 (ref 23):** Showed a microbiota continuum along the female reproductive tract. Hernandes et al. found that endometrium samples did not show sufficient differentiation from vaginal samples, partially supporting Chen's continuum concept, but the lesion samples did diverge.
- **Diversity direction:** Some prior endometriosis microbiome studies report increased diversity in the vaginal/cervical compartment of endometriosis patients. This study found no significant alpha-diversity differences in vaginal fluid between groups — the diversity increase was specific to the lesion tissue itself.

## Open Questions

1. **What species within the enriched genera are present?** The 16S V3-V4 approach limits resolution to genus level. Species-level identification (e.g., via shotgun metagenomics) would clarify whether the Enterococcus and Pseudomonas species in lesions are known pathogens or commensal relatives.
2. **Are the bacteria in lesions metabolically active or remnants?** 16S DNA sequencing detects both viable and dead organisms. Metatranscriptomics or culture-based approaches would determine whether these organisms are actively colonizing lesion tissue.
3. **What is the metal profile of the lesion microenvironment?** Iron overload in endometriotic tissue from hemorrhage is well-documented. The shift from Lactobacillus (low iron requirement) to Enterococcus and Pseudomonas (siderophore producers, iron-dependent) in lesions may reflect iron-driven ecological selection — a direct test of Primitive 1. <!-- NEEDS VERIFICATION: metal dependency profiles of Alishewanella, Enterococcus, and Pseudomonas in the context of endometriotic iron excess -->
4. **Does the lesion microbiome drive inflammation or follow it?** The TLR/inflammasome connection is correlational. Temporal studies or gnotobiotic models would establish directionality.
5. **Is Alishewanella a consistent finding in endometriotic lesions?** This genus is unusual in a human clinical context and needs replication across independent cohorts.
