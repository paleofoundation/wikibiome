---
title: "Kajfasz 2026 — Zinc-Enhanced Activity of an Antimicrobial Halogenated Phenazine Against Streptococcus mutans and Other Gram-Positive Bacteria"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Jessica K Kajfasz, Hannah B Hosay, Qiwen Gao, Robert W Huigens, Jose A Lemos, Johann Heider]
year: 2026
journal: "mSphere"
doi: "not yet verified"  # <!-- UNVERIFIED DOI: originally stored PMC ID (PMC12931261) in the doi field; real DOI needs manual lookup -->
pmcid: "PMC12931261"
tags: [mismetallation, metal-homeostasis, zinc, zinc-toxicity, manganese, iron, halogenated-phenazine, streptococcus-mutans, staphylococcus-aureus, enterococcus-faecalis, antimicrobial-metals, metal-dyshomeostasis]
library_category: antimicrobial_resistance
platform: wikibiome
condition: "zinc-potentiated antimicrobial disruption of metal homeostasis"
---

# Why This Paper Matters

This study provides the most direct experimental evidence to date that combining a metal-disrupting antimicrobial compound (HP-29) with [[zinc]] causes catastrophic [[mis-metallation]] in Gram-positive bacteria. The halogenated phenazine HP-29 induces rapid iron starvation, and when combined with zinc, it triggers a 5-fold increase in intracellular zinc, a 50% decrease in [[manganese]], and broad disruption of the Mn:Zn ratio -- from the normal ~8:1 favoring manganese to a ratio favoring zinc. This is devastating because manganese serves as a cofactor for Mn-SOD and replaces iron in Fe-binding proteins during oxidative stress, protecting against Fenton chemistry. By simultaneously depleting iron and manganese while flooding cells with zinc, the HP-29/zinc combination creates a "perfect storm" of [[mis-metallation]] where zinc occupies binding sites meant for manganese and iron. The transcriptomic data confirm broad activation of metal transport genes, consistent with cells desperately attempting to restore [[metal-homeostasis]].

# Key Claims

- **HP-29 inhibits S. mutans growth** in a dose-dependent manner (MIC 0.5 uM), with iron supplementation alleviating the effect
- **Zinc synergizes with HP-29** unexpectedly: 0.5 mM ZnSO4 lowered the HP-29 MIC 8-fold to 0.0625 uM, while manganese raised the MIC 32-fold
- **As little as 0.01 mM zinc** increases S. mutans sensitivity to HP-29 by 2-fold
- **HP-29 alone decreases intracellular iron by ~40%**, providing the first direct evidence that HP-29 causes iron starvation in a bacterial species
- **Combined HP-29/zinc treatment** causes: 5-fold increase in intracellular zinc, ~50% decrease in manganese, ~30% decrease in magnesium, 2-fold increase in cobalt
- **The Zn:Mn ratio is reversed** from ~1:8 (normal) to favoring zinc, reflecting zinc-induced manganese deficiency -- a well-documented source of mismetallation
- **Zinc potentiation extends to other Gram-positives**: 64-fold MIC decrease in S. aureus, 2-fold in E. faecalis
- **Transcriptome analysis** reveals upregulation of sloABC (iron/Mn import), mntH (Mn import), zccE (Zn export), copA (Cu export), and oxidative stress genes

# Methods & Findings

## ICP-MS Intracellular Metal Quantification

S. mutans UA159 treated for 90 min with sub-inhibitory concentrations:

| Metal | HP-29 alone | Zinc alone | HP-29 + Zinc | Significance |
|-------|------------|-----------|-------------|-------------|
| Zinc | No change | No change | 5-fold increase | **** |
| Iron | -40% | No change | Decreased | **** |
| Manganese | No change | No change | -50% | **** |
| Magnesium | No change | No change | -30% | * |
| Cobalt | 2-fold increase | No change | 2-fold increase | * |
| Nickel | No change | No change | No change | ns |
| Copper | No change | No change | No change | ns |

## Metal-Dependent Rescue and Potentiation

| Metal Added | Effect on HP-29 MIC | Mechanism |
|------------|-------------------|-----------|
| Iron (1 mM FeSO4) | Partial rescue | Replaces chelated iron |
| Manganese (0.5 mM) | 32-fold increase (rescue) | Replaces iron in enzymes, protects from Fenton chemistry |
| Cobalt (0.25 mM) | 4-fold increase | Partial iron replacement |
| Nickel (0.5 mM) | Partial rescue | Limited metal substitution |
| Zinc (0.5 mM) | 8-fold decrease (potentiation) | Mismetallation, Mn displacement |

## Transcriptomic Evidence of Metal Stress

HP-29 alone (12 differentially expressed genes): sloABC operon (4.7- to 6.3-fold), mntH (1.2-fold), zccE (6.8-fold), smu.236c-238c operon (13- to 46-fold). Dual treatment (301 differentially expressed genes): all HP-29 targets plus copA (copper export), additional oxidative stress genes (ahpCF, gor, gst, tpx, gloA, sodA, trxA), and 66 transport-associated genes.

## Manganese Protection Mechanism

Manganese supplementation rescues HP-29 killing because:
1. Mn-SOD provides oxidative stress defense
2. Mn2+ can replace Fe2+ in iron-binding proteins during iron starvation, preventing Fenton chemistry
3. Mn2+ is not redox-active like Fe2+, so it does not generate hydroxyl radicals

This explains why zinc (which displaces Mn) potentiates while Mn rescues -- they have opposite effects on the Mn-dependent antioxidant defense.

# Connections

- [[mis-metallation]] -- zinc flooding displaces manganese from enzymes, reversing the Zn:Mn ratio
- [[zinc]] -- antimicrobial potentiation through zinc-induced manganese deficiency
- [[manganese]] -- protective role as non-redox-active Fe substitute; depleted by zinc competition
- [[iron]] -- HP-29 causes iron starvation; iron-sulfur cluster vulnerability
- [[oxidative-stress]] -- combined metal dyshomeostasis triggers oxidative stress response
- [[streptococcus-mutans]] -- model for metal homeostasis in oral pathogens
- [[staphylococcus-aureus]] -- 64-fold zinc potentiation of HP-29 in MRSA
- [[antimicrobial-metals]] -- zinc as adjuvant antimicrobial agent
- [[metal-homeostasis]] -- SloR, AdcR metalloregulatory network disrupted by dual treatment
- [[nutritional-immunity]] -- parallels to host zinc/Mn competition at infection sites
- [[copper]] -- CopA copper export upregulated during metal stress
- [[labile-metal-pool]] -- intracellular metal pool disruption measured by ICP-MS
