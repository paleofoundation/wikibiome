---
title: "Ouattara 2025 — Iron and Peroxide Regulation of the PrrF sRNAs and a Conserved Dps-Like Protein in Pseudomonas aeruginosa and Pseudomonas fluorescens"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Khady O Ouattara, Amanda G Oglesby]
year: 2025
journal: "bioRxiv"
doi: "10.1101/2025.01.15.633217"
tags: [mismetallation, metal-homeostasis, iron, iron-storage, sRNA, PrrF, Fur, BrnD, Dps, ferritin, oxidative-stress, hydrogen-peroxide, Pseudomonas-aeruginosa, Pseudomonas-fluorescens, Fenton-chemistry, cystic-fibrosis, nutritional-immunity]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "iron-responsive sRNA regulation of oxidative stress defense"
---

# Why This Paper Matters

This paper reveals a novel and conserved regulatory link between iron homeostasis and oxidative stress defense in pseudomonads: the iron-responsive PrrF sRNAs (functional analogs of RyhB in enterobacteria) regulate expression of BrnD, a newly characterized Dps-like bacterioferritin protein that protects DNA from iron-mediated oxidative damage. The surprising finding is that **hydrogen peroxide treatment induces the PrrF sRNAs themselves** -- a paradoxical result since PrrF is normally induced under iron limitation (when Fur is de-repressed). For the wiki's [[mis-metallation]] framework, this connects iron sensing, iron storage, and ROS defense into a single regulatory circuit: cells must simultaneously manage iron as an essential cofactor, prevent its mis-metallation into wrong proteins, AND prevent free iron from catalyzing Fenton chemistry.

# Key Claims

- **PrrF1 and PrrF2** are tandem iron-responsive sRNAs in P. aeruginosa (94% sequence homology) that mediate an **iron-sparing response** by downregulating mRNAs encoding non-essential iron-containing proteins
- **BrnD** (PA4880) is a novel **Dps-like protein** that forms 12-mer complexes with a ferroxidase center, structurally similar to Dps but originally annotated as a bacterioferritin (Bfr)
- PrrF sRNAs **negatively regulate** brnD expression by base-pairing with the brnD 5'-UTR -- PrrF-mediated regulation occurs in the 5' UTR via a conserved complementarity region
- **Iron activates brnD expression** in a PrrF-dependent manner: iron supplementation represses PrrF (via Fur), which de-represses brnD transcription/translation
- **Hydrogen peroxide treatment increases both brnD mRNA and PrrF sRNA levels** -- the peroxide-induced PrrF increase occurs specifically at the prrF2 promoter
- The peroxide-induced PrrF response is **conserved in P. fluorescens**, indicating functional conservation across pseudomonads
- BrnD homologs with the predicted PrrF-complementary 5'UTR are **conserved across Pseudomonas species**
- The PrrF regulon includes mRNAs encoding oxidative stress proteins: SodB (iron-cofactored SOD), KatA (catalase), and BrnD (Dps-like iron storage)
- PrrF-mediated iron regulation is most evident during late exponential/stationary phase and in static cultures (low oxygen)

# Methods & Findings

## PrrF-BrnD Regulatory Axis
- brnD-lacZY reporter: induced by as little as 20 uM FeCl3 in WT; constitutively de-repressed in delta-prrF mutant
- In chemically defined medium (CDM): brnD mRNA 20-fold higher in iron-supplemented WT vs iron-depleted
- Translational reporter (brnD 5'UTR-gfp): iron regulation observed in static but not shaking cultures
- PrrF sRNAs pair with brnD 5'UTR to block translation initiation

## Peroxide Induction of PrrF
- H2O2 treatment: brnD mRNA levels increase in WT
- Paradoxically, PrrF sRNA levels also increase upon peroxide treatment
- prrF1 and prrF2 transcriptional reporters: peroxide induction occurs at prrF2 promoter specifically
- AlgR two-component response regulator binds prrF2 but not prrF1 promoter
- PhuS protein binds prrF1 for heme regulation but not prrF2

## Conservation
- P. fluorescens Pf0-1: iron represses PrrF and increases brnD expression, matching P. aeruginosa
- Peroxide treatment induces PrrF in P. fluorescens, confirming conservation
- Predicted PrrF complementarity to brnD 5'UTR is conserved across pseudomonads

# Connections

- [[mis-metallation]] -- free iron from impaired storage catalyzes Fenton chemistry; PrrF/BrnD circuit prevents this
- [[iron]] -- iron-sparing response via PrrF sRNA regulation of non-essential iron proteins
- [[oxidative-stress]] -- novel peroxide-induced PrrF regulation links iron homeostasis to ROS defense
- [[Fenton-chemistry]] -- BrnD (Dps-like) prevents free iron from driving hydroxyl radical generation
- [[sRNA]] -- PrrF as paradigm iron-responsive sRNA in pseudomonads
- [[Pseudomonas-aeruginosa]] -- CF lung pathogen with sophisticated iron regulatory network
- [[nutritional-immunity]] -- host iron restriction and oxidative burst target same PrrF circuit
- [[metal-sensing]] -- Fur as master iron sensor controlling PrrF expression
