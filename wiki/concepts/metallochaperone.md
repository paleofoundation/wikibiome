---
title: Metallochaperone
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [capdevila-2024-bacterial-metallostasis-sensing-trafficking, helmann-2025-labile-metal-pools-bacteria, cassat-2012-metal-acquisition-staphylococcus-aureus]
source_count: 3
tags: [metal-trafficking, protein-metalation, metallostasis, copper-chaperone, nickel-chaperone, zinc-delivery, Irving-Williams-series]
karen_brain_primitives: [1, 3, 4]
seo_target: "metallochaperone metal trafficking protein metalation bacteria"
platform: wikibiome
---

# Metallochaperones

Specialized proteins that **escort metal ions from their point of entry to specific metalloenzyme targets**, ensuring correct metalation in a cytoplasm crowded with competing metal-binding sites. Metallochaperones solve a fundamental problem in metal biology: how does the right metal reach the right protein when thermodynamics (the [[irving-williams-series]]) would often favor the wrong metal binding?

The answer is **kinetic control**. Metallochaperones physically hand off metals through protein-protein interactions, bypassing the thermodynamic free-for-all of the [[labile-metal-pool]] [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]].

## Why Metallochaperones Are Necessary

### The Thermodynamic Problem

The Irving-Williams series dictates that Cu2+ and Zn2+ bind most biological ligands more tightly than Fe2+ or Mn2+. Without protective trafficking, copper would displace iron from every iron-binding protein it encountered. Cells solve this by:

1. Keeping the [[labile-metal-pool]] of strong binders (Cu, Zn) at **<1 free atom per cell** [[helmann-2025-labile-metal-pools-bacteria]]
2. Delivering these metals **exclusively via metallochaperones** rather than allowing free diffusion
3. Maintaining weak binders (Fe, Mn) at higher labile concentrations where free diffusion to target proteins is feasible

### The Selectivity Challenge

A metallochaperone must:
- Accept its cognate metal from an importer or storage protein
- Protect the metal from non-specific binding during transit
- Transfer it specifically to the correct apoenzyme through a direct protein-protein docking interaction
- Avoid delivering the metal to the wrong target

## Major Metallochaperone Systems

### Copper Chaperones

Copper is the metal most dependent on chaperone-mediated delivery, because free Cu+ is maintained at essentially **zero** free atoms per bacterial or eukaryotic cell [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]]:

| Chaperone | Target | Function |
|-----------|--------|----------|
| **CopZ** (bacteria) | CopA (Cu-ATPase efflux pump) | Delivers Cu+ for export when copper is in excess |
| **Atx1/ATOX1** (eukaryotes) | ATP7A/ATP7B (Menkes/Wilson proteins) | Delivers Cu to trans-Golgi for [[ceruloplasmin]] loading and biliary excretion |
| **CCS** | Cu/Zn-SOD (SOD1) | Inserts Cu into the antioxidant enzyme; without CCS, SOD1 remains inactive |
| **Cox17** | Cytochrome c oxidase | Delivers Cu to mitochondrial respiratory complex IV |
| **Sco1/Sco2** | Cytochrome c oxidase (CuA site) | Downstream of Cox17; specific for the binuclear CuA center |

### Nickel Chaperones

Nickel-requiring enzymes ([[urease]], [[hydrogenase]]) need specific chaperones for metalation [[cassat-2012-metal-acquisition-staphylococcus-aureus]]:

- **UreE**: Delivers Ni2+ to urease. In [[helicobacter-pylori]], the urease maturation pathway (UreD/UreF/UreG/UreE) forms a multiprotein complex that loads Ni into the urease active site
- **HypA/HypB**: Deliver Ni to NiFe-hydrogenase. GTP hydrolysis by HypB may power the metal insertion step
- **SlyD**: A prolyl isomerase with a metal-binding tail that functions as a nickel reservoir and delivery system

### Iron Chaperones

Iron trafficking is less dependent on dedicated chaperones because labile iron is maintained at micromolar concentrations (higher than Cu or Zn). However:

- **Frataxin**: Delivers iron to Fe-S cluster assembly machinery; frataxin deficiency causes Friedreich's ataxia (iron accumulation in mitochondria)
- **Poly-rC binding proteins (PCBPs)**: Function as cytosolic iron chaperones in eukaryotes, delivering Fe to [[ferritin]] and non-heme iron enzymes

## Metallochaperones in Virulence

For pathogens facing [[nutritional-immunity]], metallochaperones are essential survival tools:

- Under host metal restriction (calprotectin sequestering Zn/Mn, [[lactoferrin]] sequestering Fe), pathogens must traffic their scarce metal supplies with maximum efficiency
- **Staphylopine** and **pseudopaline** function as extracellular metal-scavenging molecules (metallophores) that hand off captured metals to ABC importers, which then rely on intracellular chaperones for target delivery [[cassat-2012-metal-acquisition-staphylococcus-aureus]]
- Disrupting metallochaperone function is a potential anti-virulence strategy: without correct metalation, virulence enzymes remain inactive even if the metal is available

## Relevance to Mis-Metallation

Metallochaperones are the cell's defense against [[mis-metallation]]. When chaperone systems are overwhelmed or disrupted:

- Toxic metals (Cd2+, Ag+, Pb2+) can mis-metalate proteins that would normally receive their correct metal via chaperone delivery
- Zinc flooding by the host immune system (via calprotectin or PGRP-mediated intoxication) can saturate chaperone capacity, leading to Zn mis-metalation of Mn-dependent enzymes
- Copper intoxication in macrophage phagolysosomes overwhelms bacterial copper chaperone/efflux capacity, leading to lethal Cu+ accumulation

## Connections

- [[labile-metal-pool]] -- metallochaperones bypass the labile pool for safe delivery
- [[irving-williams-series]] -- explains why strong-binding metals need chaperone delivery
- [[mis-metallation]] -- chaperone failure enables mis-metallation
- [[nutritional-immunity]] -- metal restriction increases dependence on chaperone efficiency
- [[metal-homeostasis]] -- chaperones are a core component of metallostasis
- [[urease]] -- requires UreE chaperone for nickel loading
- [[hydrogenase]] -- requires HypA/HypB for nickel insertion
- [[copper]] -- most chaperone-dependent metal in biology
