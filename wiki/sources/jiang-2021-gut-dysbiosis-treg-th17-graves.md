---
title: "Su et al. 2020 — Gut Dysbiosis Contributes to the Imbalance of Treg and Th17 Cells in Graves' Disease Patients by Propionic Acid"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Su X, Yin X, Liu Y, Yan X, Zhang S, Wang X, Lin Z, Zhou X, Gao J, Wang Z, Zhang Q]
corresponding_author: "Qunye Zhang"
institution: "Shandong Provincial Hospital, Cheeloo College of Medicine, Shandong University, Jinan, China"
journal: The Journal of Clinical Endocrinology & Metabolism
year: 2020
doi: "10.1210/clinem/dgaa511"
evidence_level: case-control
sample_size: "n=121 (58 GD patients + 63 healthy controls)"
tags: [graves-disease, thyroid, autoimmune, gut-microbiota, dysbiosis, Treg, Th17, immune-imbalance, SCFA, short-chain-fatty-acids, Bacteroides, propionic-acid, Bacteroides-fragilis, Alistipes, Prevotella, fecal-microbiota-transplantation, 16S-rRNA, metabolomics, cytokines]
platform: wikibiome
condition: "Graves' disease"
metals_discussed: []
taxa_discussed: [alistipes, bacteroides-fragilis, blautia, eubacterium, faecalibacterium-prausnitzii, prevotella, ruminococcus, streptococcus, veillonella]
key_findings:
  - "GD patients show significantly reduced alpha diversity (Ace, Chao1, Shannon, Simpson all P<0.0001) and distinct beta diversity separation from controls"
  - "Three genera (Bacteroides, Alistipes, Prevotella) could distinguish GD from healthy with 85% accuracy via Random Forest; FMT of GD microbiota into mice significantly increased GD incidence"
  - "B. fragilis YCH46 supernatant containing propionic acid increased Treg cells and decreased Th17 cells in PBMCs, establishing a causal mechanism"
karen_brain_primitives: [1, 4, 5]
keystone: false
library_category: signatures
---

# Gut Dysbiosis Contributes to the Imbalance of Treg and Th17 Cells in Graves' Disease Patients by Propionic Acid

## Key Findings

- **GD patients show dramatically reduced alpha diversity**: Ace (P<0.0001), Chao1 (P<0.0001), Shannon (P<0.0001), and Simpson (P<0.0001) indices all significantly lower than healthy controls; all diversity measures negatively correlated with TSH, TRAb, TGAb, and TPOAb ([[jiang-2021-gut-dysbiosis-treg-th17-graves]], case-control, n=121)
- **Treg cells significantly decreased and Th17 cells significantly increased in GD**: Treg (CD4+CD25+FOXP3+) percentage was significantly lower (P<0.05), Th17 (CD4+IL17+) percentage was significantly higher (P<0.0001), and Treg/Th17 ratio significantly decreased (P<0.001) in GD ([[jiang-2021-gut-dysbiosis-treg-th17-graves]], case-control, n=121)
- **Three bacterial genera (Bacteroides, Alistipes, Prevotella) distinguished GD from healthy with 85% accuracy** using Random Forest analysis; these were among the top contributors by MeanDecreaseAccuracy ([[jiang-2021-gut-dysbiosis-treg-th17-graves]], case-control, n=121)
- **Fecal microbiota transplantation (FMT) from GD patients into antibiotic-treated BALB/c mice significantly increased GD incidence** compared to FMT from healthy donors, providing causal evidence that gut dysbiosis drives disease ([[jiang-2021-gut-dysbiosis-treg-th17-graves]], animal-model)
- **B. fragilis YCH46 strain produces propionic acid that increases Treg cells and decreases Th17 cells** in a PBMC co-culture system, establishing the mechanistic link between specific bacteria, metabolites, and immune imbalance ([[jiang-2021-gut-dysbiosis-treg-th17-graves]], in-vitro)

## Methods

- **Study type**: Multi-method case-control with animal model validation and in-vitro mechanism studies
- **Human cohort**: 58 initially untreated GD patients and 63 healthy individuals from Shandong Provincial Hospital, matched for age, sex, and BMI
- **Clinical parameters (GD vs Control)**: TSH 0.005 vs 1.92 (P<0.0001), FT3 4.85 vs 3.08 (P<0.0001), FT4 15.83 vs 2.18 (P<0.0001), TRAb 0.54 vs 0.47 (P<0.0001), TGAb 67.70 vs 33.10 (P<0.0001), TPOAb 206.75 vs 10.78 (P<0.0001)
- **Sequencing**: 16S rRNA V1-V2 region on Illumina HiSeq 2500; QIIME with Silva 12.8; LDA/LEfSe (LDA score >4, P<0.05)
- **Metabolomics**: Targeted SCFAs by GC-MS (acetic, propionic, butyric, isobutyric, valeric, isovaleric, caproic acids); Untargeted metabolomics by UPLC-AB SCIEX Triple TOF 5600
- **Flow cytometry**: Treg (CD4+CD25+FOXP3+) and Th17 (CD4+IL17+) quantification from PBMCs; CCR9+ subsets analyzed
- **Cytokines**: IL-2, IL-6, IL-10, IL-12, IL-17A, IL-18, IL-1beta, TGF-beta, sCD14, sCD25 by Luminex/ELISA
- **Mouse model**: BALB/c mice, antibiotics x5 days, FMT from GD or healthy donors, Ad-TSHR289 immunization, 6-week follow-up
- **In vitro**: B. fragilis YCH46 in M2GSC medium, supernatant applied to PBMCs with CD3/CD28 stimulation; Treg and Th17 assessed by flow cytometry
- **Bacterial culture**: Yersinia enterocolitica detected by selective culture from GD fecal samples with/without diarrhea

## Detailed Summary

### Cytokine Profile

GD patients showed significantly elevated pro-inflammatory cytokines: IL-17A (P<0.001), IL-6 (P<0.001), IL-12 (P<0.01), IL-1beta (P<0.05), IL-18 (P<0.001), sCD14 (P<0.05), sCD25 (P<0.0001), IL-2 (P<0.05). Anti-inflammatory markers were reduced: IL-10 (P<0.001), TGF-beta (P<0.01). CCR9+ Treg cells were decreased (P<0.05) while CCR9+ Th17 cells were increased (P<0.05), indicating gut-homing immune cells are specifically affected.

### Gut Microbiota Composition

At phylum level: Firmicutes and Bacteroidetes decreased; Proteobacteria significantly increased (P<0.0001) in GD. F/B ratio significantly higher in GD (P<0.001). Synergistetes, Saccharibacteria, and Firmicutes decreased. At genus level by LEfSe: Bacteroidales, Clostridiales, Lachnospiraceae enriched in controls; Enterobacteriaceae, Enterobacteriales, Gammaproteobacteria enriched in GD. The top discriminating genera by Random Forest MeanDecreaseAccuracy: Bacteroides, Alistipes, Prevotella, Turicibacter, Christensenellaceae_R-7, Desulfovibrio, Prevotella_7, Subdoligranulum, Phascolarctobacterium, Parasutterella.

### SCFA Measurements

All seven measured SCFAs were reduced in GD fecal samples (exact values from GC-MS). Propionic acid was particularly noteworthy: significantly reduced in GD, negatively correlated with FT3, FT4, and TRAb, and positively correlated with TSH.

### FMT Mouse Model

Mice receiving FMT from GD patients showed significantly increased GD incidence after Ad-TSHR289 immunization compared to those receiving healthy donor FMT, providing the first causal evidence that GD-associated gut dysbiosis contributes to disease development.

### B. fragilis YCH46 Mechanism

The supernatant of B. fragilis YCH46 (cultured in M2GSC medium) when applied to PBMCs: increased the number of Treg cells, decreased Th17 cells, and these effects were attributed to propionic acid production. This demonstrates a specific bacterium-metabolite-immune cell causal chain.

## Relevance to WikiBiome

- Provides the strongest mechanistic evidence linking [[gut-microbiome]] to [[graves-disease]] via Treg/Th17 axis
- FMT causal evidence is foundational for the gut-thyroid axis concept
- [[bacteroides-fragilis]] entity: YCH46 strain as propionic acid producer with immune regulatory function
- [[alistipes]], [[prevotella]] entities: diagnostic biomarker potential in GD
- [[short-chain-fatty-acids]] concept: propionic acid as specific mediator of Treg induction
- CCR9+ cell data links gut-homing immune cells to thyroid autoimmunity

## Relevance to Cureva

- **Intervention hypothesis**: B. fragilis YCH46 as therapeutic probiotic for GD; propionic acid supplementation
- **Intervention hypothesis**: Dietary fiber/prebiotics to restore SCFA production
- **Diagnostic biomarker**: 3-genus panel (Bacteroides/Alistipes/Prevotella) at 85% accuracy for GD screening
- **Triangle evidence**: SCFA restoration (I) rebalances Treg/Th17 (f) in GD (D) with causal evidence from FMT
- **STOP signal**: Antibiotics that deplete SCFA producers may worsen GD course

## Contradictions / Tensions

- The F/B ratio was significantly higher in GD (more Firmicutes depletion), which differs from some other GD studies showing non-significant F/B changes ([[chen-2021-gut-microbiota-thyroid-graves]])
- Proteobacteria enrichment in GD is consistent across studies, but some taxa within Firmicutes show inconsistent directions
- The mouse FMT model uses Ad-TSHR immunization, which may not fully recapitulate spontaneous GD

## Open Questions

- Can B. fragilis YCH46 supplementation reduce TRAb in human GD patients?
- What is the optimal propionic acid dose for Treg induction without adverse effects?
- Do the diagnostic biomarker genera validate in non-Chinese populations?
- How quickly does the gut microbiome change after GD onset, and can early intervention prevent full disease?
- What role does Yersinia enterocolitica (detected in GD patients with diarrhea) play in GD pathogenesis?
