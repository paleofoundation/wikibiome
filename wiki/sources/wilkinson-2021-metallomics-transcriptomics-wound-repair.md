---

title: "Combined Metallomics/Transcriptomics Profiling Reveals a Major Role for Metals in Wound Repair"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Wilkinson HN, Guinn BA, Hardman MJ]
journal: Frontiers in Cell and Developmental Biology
year: 2021
doi: "10.3389/fcell.2021.788596"
tags: [metallomics, transcriptomics, wound-healing, calcium, iron, copper, zinc, magnesium, manganese, cobalt, aluminum, TNF, keratinocyte-differentiation, skin, tissue-repair]
platform: wikibiome
karen_brain_primitives: [1]
metals_discussed: ["aluminum", "cobalt", "copper", "iron", "magnesium", "manganese", "zinc"]
taxa_discussed: []
---

# Combined Metallomics/Transcriptomics Profiling Reveals a Major Role for Metals in Wound Repair

Wilkinson et al. (2021). *Frontiers in Cell and Developmental Biology* 9:788596.

## Overview

This study provides the first comprehensive documentation of the metallomic/transcriptomic landscape of a healing wound. Using ICP-MS to measure 8 metals across a murine wound healing time course (days 0-14) combined with tissue-level RNA-sequencing, the authors reveal that specific metals are linked to distinct wound-healing biological processes, with metal-regulated genes significantly overrepresented in wound transcriptomes. A key novel finding is the identification of TNF as an important regulator of calcium-induced epidermal differentiation.

## Key Findings

### Temporal Metal Changes During Wound Healing
Each metal follows a distinct temporal profile mapped to wound healing phases:

| Metal | Day 1 | Day 3 | Day 7 | Day 14 | Peak Phase |
|-------|-------|-------|-------|--------|------------|
| **Calcium** | -- | Elevated | Elevated | Dropped | Inflammation/proliferation (D3-D7) |
| **Magnesium** | -- | Elevated | -- | -- | Inflammation (D3) |
| **Iron** | -- | -- | Elevated | Elevated | Proliferation/remodeling (D7-D14) |
| **Zinc** | -- | -- | -- | -- | No significant change |
| **Aluminium** | -- | -- | -- | Elevated | Remodeling (D14) |
| **Copper** | -- | -- | Elevated | -- | Proliferation (D7) |
| **Manganese** | -- | -- | -- | Elevated | Remodeling (D14) |
| **Cobalt** | -- | -- | -- | Elevated | Remodeling (D14) |

### Metal-Gene Overrepresentation
- Of 4,228 downregulated wound genes, 684 (16%) were also in the combined UniProt KB metal list
- Metal-linked genes are significantly overrepresented (1.89-fold, p = 10^-94.3) in wound-upregulated DEGs
- Both upregulated and downregulated wound genes enriched for metal genes
- **92 genes overlap** between wound healing (GO:0042060) and metal gene sets (2.85-fold overrepresentation, p = 10^-19.56)
- This metal-wound overlap is consistent in both mouse (RNA-Seq) and human (microarray) data

### Metal-Specific Biological Processes
- **Calcium** (KW-0106): Cell adhesion, signal, EGF-like domain, plasma membrane, ECM, zymogen, blood coagulation, wound healing (rank 13)
- **Zinc** (KW-0862): Transcription, metalloprotease, chromatin binding, zymogen, p53 binding, methylation, apoptosis, differentiation
- **Iron** (KW-0408): Oxidoreductase, heme binding, steroid hydroxylase, aromatase, metabolic processes, PPAR signaling
- **Copper** (KW-0186): Oxidoreductase, electron transport, mineral absorption, removal of free radicals
- **Manganese** (KW-0464): Protein glycosylation, metabolic processes, Mg ion binding, TGF-beta signaling

### Calcium-TNF Axis in Epidermal Differentiation
- Calcium wound genes cluster into 4 functional groups converging on key upstream regulators: SMARCA4, TGFB1, alpha-catenin, VEGFA, TNF, EGF, IL6
- TNF identified as top upstream regulator of calcium cluster 4 (mouse activation score: 4.2, p = 6.83E-06; human: 3.7, p = 5.31E-08)
- TNFa expression peaked at D1 in wound edge epidermis (p < 0.001)
- TNFa inhibitor (C87) treatment impaired calcium-induced keratinocyte differentiation in vitro
- This is the **first time endogenous TNFa has been directly linked to calcium-induced keratinocyte differentiation** in a reparative context

### Tissue-Specific Metal Gene Expression
- Top 1,000 expressed skin and organ genes show differential overrepresentation of UniProt KB metal genes
- Skin/esophagus: highest overrepresentation for Ca, Mg, Fe, Zn, Cu, Mn, Co
- Brain, heart, thymus: not significant for several metals
- Metal genes are overrepresented in the most highly expressed genes across most biological tissues

## Methods

- **Animal model**: C57BL/6 mice, 8-10 weeks old; 4 mm full-thickness excisional dorsal wounds
- **Timepoints**: D0 (unwounded skin), D1, D3, D7, D14 post-wounding (n = 5 mice per timepoint)
- **ICP-MS**: 8 elements (Ca, Mg, Fe, Zn, Al, Cu, Mn, Co) in wound tissue
- **RNA-Seq**: Tissue-level RNA-sequencing at all timepoints
- **Bioinformatics**: UniProt KB metal gene annotation, DEG analysis (log2FC >= 0.58, Padj < 0.05), Markov clustering, Ingenuity Pathway Analysis
- **In vitro**: Primary mouse/human keratinocytes; CaCl2 treatment +/- TNFa inhibitor C87
- **Human validation**: Microarray data from human acute wound biopsies

## Relevance to Wiki

This paper fundamentally reframes metals from passive bystanders to active orchestrators of wound healing. The finding that metal-linked genes constitute 16% of wound-responsive genes -- with nearly 2-fold overrepresentation -- establishes metallomics as an integral layer of the wound healing response. The temporal metal map (iron at D7-D14, calcium at D3-D7, copper at D7) provides a framework for understanding how metal dyshomeostasis in conditions like diabetes leads to impaired healing. The TNF-calcium axis in keratinocyte differentiation is a novel mechanistic link between inflammation, metal signaling, and tissue repair.

## Connections

- -- Central role in wound healing; peak at D3-D7; drives keratinocyte differentiation via TNF
- [[iron]] -- Elevated at D7-D14; linked to oxidoreductase activity and proliferation/remodeling
- [[copper]] -- Peak at D7 during proliferation; role in angiogenesis and free radical removal
- [[zinc]] -- No significant concentration change despite massive zinc-gene transcriptional response; paradox of stable Zn levels with high Zn-gene activity
- [[manganese]] -- Late elevation (D14) during remodeling; linked to TGF-beta signaling and collagen
- [[cobalt]] -- Greatest elevation at D14; late remodeling phase
