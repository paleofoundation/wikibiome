---
title: "Helmann 2025 — Metals in Motion: Understanding Labile Metal Pools in Bacteria"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [John D. Helmann]
year: 2025
journal: "Biochemistry"
doi: "10.1021/acs.biochem.4c00684"
tags: [mismetallation, metal-homeostasis, labile-metal-pool, ribosome, metallochaperone, iron, zinc, copper, manganese, magnesium, potassium, metal-buffering]
library_category: reviews_mechanisms
platform: wikibiome
condition: "bacterial metal physiology"
metals_discussed: [copper, iron, magnesium, manganese, zinc]
taxa_discussed: [escherichia-coli]
karen_brain_primitives: [3, 4, 8]
key_findings: ["Labile metal pools", "Free metal concentrations"]
---

# Why This Paper Matters

This review provides the quantitative foundation for understanding [[mis-metallation]] at the cellular level. Helmann defines the concept of "labile metal pools" -- the rapidly exchanging fraction of intracellular metals that determines which metal gets inserted into nascent metalloproteins. The central insight is that the labile pool is a "turbulent jumble" of metal ions in fleeting interactions with ligands, and the composition of this pool directly determines whether enzymes get their correct metal cofactor or become mis-metallated. For the wiki's framework, this paper quantifies the actual concentrations, buffering systems, and dynamics that make [[metal-homeostasis]] possible -- and reveals how disruption of these pools (by host [[nutritional-immunity]], [[oxidative-stress]], or toxic metal exposure) can cascade into proteome-wide mis-metallation.

# Key Claims

- **Labile metal pools** are the rapidly exchanging fraction of intracellular metals, buffered by transient interactions with metabolites and macromolecules -- the ribosome plays a major buffering role
- **Free metal concentrations** follow the inverse Irving-Williams series: Zn2+ and Cu+ have less than one free atom per cell at equilibrium, while K+ and Mg2+ have massive free pools
- **The ribosome** is a major metal buffer, binding ~300 Mg2+ ions, up to 400 K+ ions per ribosome, and with ~30,000 ribosomes per cell, this represents a huge metal reservoir
- **Metal quotas** are the total cellular content: Fe and Zn reach tenths of millimolar, Mn is variable, Cu is typically 10 uM to 1 mM
- **Sequestered metals** can become conditionally bioavailable through metal ion competition, redox changes, or mobilization from storage (e.g., ferritin releasing Fe)

# Methods & Findings

## Metal Quotas and Free Metal Concentrations

| Metal | Total Quota | Free Concentration | Key Buffering System |
|-------|-----------|-------------------|---------------------|
| K+ | 200-800 mM | ~30-40 M (massive) | Nucleic acids, metabolites |
| Mg2+ | ~100 mM | ~0.3-3 mM free | Ribosomes, nucleic acids, ATP |
| Fe | 0.1-1 mM | ~10-6 M (labile) | Ferritins, Fe-S clusters |
| Mn | Variable, up to 1 mM | ~10-6 M | SOD, metabolites |
| Zn2+ | 10 uM-1 mM | <1 atom/cell free | Extensive protein binding |
| Cu+ | Often < Zn | <1 atom/cell free | Metallochaperones |

## Historical Context: Earth's Metal Availability Shift

- Early Earth's reducing atmosphere with high sulfide levels led to insoluble copper sulfides (Cu2S, Ksp = 6.1 x 10-49) while Fe2+ was readily available
- The Great Oxidation Event changed everything: [[copper]] and [[zinc]] became more available, [[iron]] became scarce (free Fe3+ at ~10-18 M at neutral pH)
- This drove evolution of high-affinity siderophores for [[iron]] acquisition -- directly relevant to [[pathogen-metal-acquisition]]

## The Ribosome as Metal Buffer

- E. coli has ~30,000 ribosomes per cell, each 10-15 liters volume
- Each ribosome binds up to 400 K+ and ~300 Mg2+ site-specifically
- Ribosome-bound metals represent ~10% of K+ quota and ~15-20% of Mg2+ quota
- The ribosome acts as a "counterion condensation" site that buffers K+, Mg2+, and possibly other ions
- During osmotic shock, K+ release (>= 700 mM) mobilizes Mg2+, halting translation until Mg2+ is reimported
- Cryo-EM of E. coli 70S ribosome identified 309 Mg2+, 2 Zn2+; K+ was not included in solvent

## Magnesium Buffering and Dynamics

- Intracellular Mg2+ pool (~50-100 mM) split equally between macromolecule-associated and low molecular weight (LMW) pools
- LMW Mg2+ pool dominated by ATP and NTPs (Kd ~0.1-0.3 mM for ATP:Mg2+)
- B. subtilis MgtE importer regulated by Mg2+-sensing riboswitch with half-maximal repression at 2.7 mM free Mg2+
- Mg2+ in some enzymes can be displaced by Fe2+ or Mn2+, representing [[mis-metallation]] -- e.g., menaquinone, siderophore, and tryptophan (MST) family enzymes bind Mg2+ with Kd ~0.2 mM but this can be displaced

## Sequestered Metal Pools and Conditional Mobilization

- **Ferritins**: hollow 24-subunit spheres that oxidize and store Fe; sequestered Fe can be mobilized during iron deprivation
- **Aconitase**: contains a 4Fe-4S cluster that reversibly loses Fe in response to [[oxidative-stress]] or Fe depletion
- **MnSOD**: contributes a significant fraction of cytosolic Mn2+ pool; SOD is activated by reversible binding of Mn or Fe
- **Carbonic anhydrase**: binds Zn2+ tightly, representing a sequestered Zn pool
- Chlorophyll-Mg complexes in cyanobacteria can sequester up to ~25 mM Mg2+

# Connections

- [[mis-metallation]] -- quantifies the free metal concentrations that determine whether correct metalation occurs
- [[iron]] -- ferritin sequestration, Fe-S cluster lability, and siderophore evolution driven by Fe3+ insolubility
- [[zinc]] -- less than one free Zn2+ ion per cell, yet Zn is essential for >100 enzyme superfamilies
- [[copper]] -- Cu+ also at sub-single-atom free levels, requiring metallochaperones for delivery
- [[manganese]] -- variable quotas, SOD as major Mn reservoir, interchangeability with Fe in some enzymes
- [[metal-homeostasis]] -- the set-point model for metalloregulators defining deficiency/sufficiency/excess transitions
- [[oxidative-stress]] -- Fe-S cluster vulnerability and metal mobilization during stress
- [[nutritional-immunity]] -- host disruption of bacterial labile metal pools
- [[pathogen-metal-acquisition]] -- siderophore evolution driven by iron limitation
- [[escherichia-coli]] -- primary model system for metal pool quantification
- [[biofilm]] -- mentioned as context for metal acquisition in microbial communities
