---
title: "Nies 2025 — A Flow Equilibrium Model Controlling Cytoplasmic Transition Metal Cation Pools and Preventing Mis-Metalation"
type: source
created: 2026-04-09
updated: 2026-04-09
authors: [Dietrich H Nies, Julie A Maupin-Furlow]
year: 2025
journal: "Journal of Bacteriology"
doi: "not yet verified"  # <!-- UNVERIFIED DOI: originally stored PMC ID (PMC12632275) in the doi field; real DOI needs manual lookup -->
pmcid: "PMC12632275"
tags: [mismetallation, metal-homeostasis, zinc, iron, copper, cobalt, nickel, manganese, Irving-Williams-series, flow-equilibrium, Cupriavidus-metallidurans, metalloregulator, metal-transport]
library_category: metal_homeostasis_bacteria
platform: wikibiome
condition: "theoretical framework for preventing mis-metalation through flow equilibrium"
---

# Why This Paper Matters

This paper presents the most comprehensive theoretical framework for how bacteria prevent [[mis-metallation]] through a "flow equilibrium" of continuous metal import and export. Using the metal-resistant bacterium Cupriavidus metallidurans as the primary model, Nies proposes that cells maintain correct metalation not by achieving static metal concentrations but through continuous cycling of metals in and out of the cytoplasm. The flow equilibrium is formed by broad-specificity importers (that bring in multiple metals simultaneously) balanced against metal-specific efflux systems whose regulators perform the critical discrimination between metals. This framework explains why mis-metalation is an ever-present threat: importers cannot distinguish between metals with nearly identical ionic radii (~0.75 A for Mn2+ through Zn2+), so the cell must rely on post-import sorting via metalloregulators and efflux pumps. The paper provides quantitative metal quotas for C. metallidurans and integrates the [[Irving-Williams-series]] into a predictive model for metal competition.

# Key Claims

- **The flow equilibrium** is formed by continuous parallel operation of broad-specificity importers and metal-specific efflux pumps, maintaining correct cytoplasmic metal pools
- **Importers cannot afford high substrate specificity** because the ionic radii of useful transition metals are all ~0.75 A; high discrimination would require prohibitively slow transport rates
- **Metal discrimination is delegated to metalloregulators** that control efflux pump expression -- these regulators have time to discriminate because they function catalytically rather than stoichiometrically
- **C. metallidurans metal quotas**: Mg > 14,000,000 > Fe > 91,000 > Zn > 61,000 > Cu > 11,000 > Ni > 4,000 > Co > 993 > Mn atoms per cell
- **Zinc homeostasis in C. metallidurans** requires 200 nM Zn(II) with ~120,000 zinc-binding protein sites; ZupT import and ZntA/CadA/CdfX efflux operate in parallel
- **Mn(II) is substituted for Fe(II)** in E. coli under oxidative stress conditions, representing beneficial mis-metallation
- **Cu(I) toxicity** operates through binding to sulfur atoms in iron-sulfur clusters and thiol residues, and must be kept at sub-single-atom free concentration
- **Cobalt at higher concentrations** interferes with iron metabolism by mis-metalation of iron-sulfur centers and protoporphyrin IX

# Methods & Findings

## The Flow Equilibrium Concept

The flow equilibrium maintains steady-state cytoplasmic metal concentrations (ci) through:
- ci = constant when uptake velocity = efflux velocity
- Regulated by adjusting Vmax-ef/Vmax-up ratios of transport systems
- Metal-binding components (glutathione, polyphosphate) act as buffers to quench oscillations
- The energy cost of this "futile cycle" is justified by preventing mis-metalation

## Transition Metal Properties and Mis-Metalation Risk

| Metal | 3d Electrons | Redox Active | Irving-Williams Rank | Key Mis-Metalation Risks |
|-------|-------------|-------------|---------------------|------------------------|
| Mn(II) | 3d5 | Yes | Lowest stability | Can substitute for Fe(II) beneficially |
| Fe(II) | 3d6 | Yes | Low-moderate | Fenton chemistry; Fe-S cluster vulnerability |
| Co(II) | 3d7 | Yes | Moderate | Mis-metalates iron-sulfur centers, protoporphyrin |
| Ni(II) | 3d8 | No | Moderate-high | Interferes with Fe(II) and Zn(II) homeostasis |
| Cu(II/I) | 3d9/3d10 | Yes | Highest (Cu) | Only "soft" cation; targets sulfur atoms |
| Zn(II) | 3d10 | No | High | Kinetically trapped in proteins after metalation |

## Metal Discrimination by Regulators

Metalloregulators discriminate metals through their primary binding site coordination chemistry:
- **Mn(II) and Fe(II) sensors** use O and N (not S) as first-shell atoms, consistent with Mn(II) being a hard Lewis acid
- **Fe(II) sensors** use O and N equally
- **Zn(II) sensors** use S atoms extensively (Cys residues), exploiting Zn2+'s preference for tetrahedral thiolate coordination
- **Cu(I) sensors** use exclusively S atoms, reflecting copper's soft Lewis acid character

## Zinc as the "Final Destination" Metal

Zn(II) is uniquely problematic because:
1. It forms the most stable complexes (Irving-Williams) among essential divalent metals
2. It cannot be reduced or oxidized under physiological conditions (3d10 filled)
3. Once Zn(II) binds a protein, it is often kinetically trapped -- permanently occupying the site
4. C. metallidurans has ~120,000 potential zinc-binding protein copies but only ~80,000 Zn atoms, ensuring binding sites remain available

# Connections

- [[mis-metallation]] -- comprehensive theoretical framework for why mis-metalation occurs and how cells prevent it
- [[Irving-Williams-series]] -- thermodynamic basis integrated into transport kinetics model
- [[zinc]] -- detailed zinc homeostasis model; Zn as kinetically trapped final-destination metal
- [[iron]] -- Fe-S cluster vulnerability; Mn substitution during oxidative stress
- [[copper]] -- Cu(I) as only soft transition metal cation; extreme toxicity through sulfur targeting
- [[manganese]] -- beneficial mis-metalation replacing Fe in oxidative stress
- [[cobalt]] -- interference with iron metabolism at elevated concentrations
- [[nickel]] -- interference with Fe and Zn homeostasis
- [[metal-homeostasis]] -- flow equilibrium as fundamental mechanism
- [[labile-metal-pool]] -- Boltzmann distribution of metals across cytoplasmic binding sites
- [[metalloregulator]] -- discrimination delegated to regulators rather than transporters
