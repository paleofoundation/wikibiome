---
title: "Blume 2026 — Combined Metallomics and Metabolomics Reveal Impact of Metal Homeostasis on Biological Pathways in C. elegans"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Bastian Blume, Philippe Schmitt-Kopplin, Bernhard Michalke]
year: 2026
journal: "Analytical and Bioanalytical Chemistry"
doi: "not yet verified"  # <!-- DOI lookup needed: Analytical and Bioanalytical Chemistry 2026 -->
pmcid: "PMC12909348"
tags: [mismetallation, metal-homeostasis, iron, manganese, zinc, ferroptosis, metal-speciation, c-elegans, parkinsons-disease, metallomics, metabolomics, neurodegenerative-disease]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "cross-metal effects and mis-metallation in a eukaryotic model"
metals_discussed: [copper, iron, manganese, zinc]
karen_brain_primitives: [2, 3, 4]
---

# Why This Paper Matters

This study provides the first combined metallomics-metabolomics analysis of [[mis-metallation]] consequences in a whole-organism model (C. elegans). The key finding is that exposure to one metal systematically disrupts the homeostasis of other metals -- zinc exposure decreases manganese levels, manganese and iron exposure decrease zinc levels, and iron treatment alters manganese speciation. The paper explicitly uses the term "mis-metalation" and identifies competitive displacement at binding sites as the mechanism: "zinc competes with other free metal ions with similar ionic radii and coordination" leading to "misfunction of proteins." For the [[mis-metallation]] concept page, this provides direct experimental evidence that excess of any single transition metal cascades into disruption of the entire metallome, with implications for [[ferroptosis]] and [[parkinsons-disease]] where metal dyshomeostasis is a recognized pathological feature.

# Key Claims

- **Zinc exposure decreases manganese levels** significantly (p = 0.001) through competitive displacement, and chronic manganese exposure decreases zinc levels (p = 0.03)
- **Iron treatment shifts manganese speciation** from LMM to HMM fractions, indicating iron competes for manganese binding sites on low-molecular-mass ligands
- **Zinc is released from proteins** under manganese and iron exposure conditions, displaced to inorganic fractions -- direct evidence of mis-metallation at protein binding sites
- **Iron exposure causes distinct metabolomic patterns** indicative of impaired energy metabolism and exhaustion of cellular metabolic capacity
- **Metal species distribute across three compartments**: high-molecular-mass (HMM, >100 kDa), low-molecular-mass (LMM, <100 kDa), and inorganic species -- each affected differently by metal exposure
- **Ferritin is the primary iron buffer** in both C. elegans and mammals, binding iron at 400-500 Fe atoms per molecule (36-37 kDa), with metallothioneins serving as zinc/copper buffers
- **Cross-metal effects are bidirectional**: excess of one metal can increase or decrease levels of others depending on the specific pair and exposure duration

# Methods & Findings

## Metallomic Analysis: Cross-Metal Displacement

Using ICP-OES for total metals and SEC-ICP-MS for metal speciation:

| Treatment | Effect on Fe | Effect on Mn | Effect on Zn |
|-----------|-------------|-------------|-------------|
| Iron (acute) | Increased total | No change | Decreased total |
| Iron (chronic) | Increased total | No change | No change |
| Manganese (acute) | No change | Increased total | Decreased total |
| Manganese (chronic) | No change | Increased total | Decreased (p=0.03) |
| Zinc (acute) | No change | No change | Increased total |
| Zinc (chronic) | No change | Decreased (p=0.001) | Increased total |

## Metal Speciation Changes Under Stress

Key metalloproteins identified by SEC-ICP-MS:

| Metal Species | Size (kDa) | Identity | Compartment |
|--------------|-----------|----------|-------------|
| Fe | 400-500 | Ferritin | HMM |
| Fe, Mn | 78 | Transferrin receptor-like | HMM |
| Zn | 592.8 | Hemosiderin-like | HMM |
| Mn, Fe | 500-750 | Glutamine synthetase aggregate | HMM |
| Mn, Cu, Zn | 32.5 | SOD (superoxide dismutase) | LMM |
| Fe, Mn | 38-41 | Mn-dependent phosphatases | LMM |
| Zn | 20-45 | Ferritin family iron binding (FET-3) | LMM |
| Fe, Zn | 45 | Zinc transporter (ZIP-1, 2, 4, 7) | LMM |

Under zinc treatment, iron is displaced from LMM fractions to inorganic species. Under manganese exposure, a novel hydrophobic manganese species appears (possibly Golgi-associated), and zinc shifts from LMM/HMM to inorganic fractions. This redistribution demonstrates that metal excess causes competitive displacement from protein binding sites.

## Metabolomic Consequences

Iron exposure produced the most distinct metabolomic signature, with patterns consistent with:
- Impaired energy metabolism
- Exhaustion of cellular metabolic energy capacity
- Potential ferroptotic pathways (non-apoptotic cell death from iron-dependent lipid peroxidation)

## Relevance to Neurodegeneration

The paper explicitly connects metal dyshomeostasis to [[parkinsons-disease]], noting that:
- Viral infections, environmental factors, genetic defects, and aging alter the metallome
- Metal imbalance leads to ROS generation and neurodegeneration
- Ferroptosis (non-apoptotic, iron-dependent cell death) is a recognized mechanism in C. elegans and implicated in PD

# Connections

- [[mis-metallation]] -- direct demonstration of competitive metal displacement at protein binding sites in a whole organism
- [[iron]] -- ferritin buffering, iron-induced metabolic exhaustion, ferroptosis connection
- [[manganese]] -- cross-metal effects with zinc and iron; SOD as major Mn reservoir
- [[zinc]] -- zinc displacement from proteins by Fe and Mn; zinc as regulator of other metal species
- [[ferroptosis]] -- iron-dependent non-apoptotic cell death linked to metal imbalance
- [[metal-homeostasis]] -- metallothionein and ferritin as primary metal buffering systems
- [[parkinsons-disease]] -- metal dyshomeostasis as pathological mechanism
- [[oxidative-stress]] -- ROS generation from displaced redox-active metals
- [[labile-metal-pool]] -- metal speciation analysis reveals dynamics of labile vs. bound pools
- [[metallomics]] -- combined metallomics-metabolomics as analytical approach
- [[superoxide-dismutase]] -- Mn/Cu/Zn-SOD identified in metal speciation analysis
