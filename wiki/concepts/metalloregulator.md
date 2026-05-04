---
title: Metalloregulator
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [capdevila-2024-bacterial-metallostasis-sensing-trafficking, helmann-2025-labile-metal-pools-bacteria, nies-2025-flow-equilibrium-model-mis-metalation-zinc]
source_count: 3
tags: [metal-sensing, transcription-factor, Fur, Zur, NikR, MntR, metalloprotein, sensor-compatibility, flow-equilibrium]
karen_brain_primitives: [1, 2, 4]
seo_target: "metalloregulator bacterial metal sensor Fur Zur transcription factor"
platform: wikibiome
---

# Metalloregulators

Protein-based transcription factors that sense intracellular metal concentrations and regulate gene expression accordingly. Metalloregulators are the decision-making layer of bacterial [[metal-homeostasis]] -- they read the [[labile-metal-pool]], determine whether a specific metal is scarce or abundant, and activate or repress genes for metal import, export, storage, and enzyme expression. In the host-pathogen arena, metalloregulators are the pathogen's first responders to [[nutritional-immunity]]: when the host deploys [[calprotectin]] or [[lactoferrin]] to restrict iron or zinc, metalloregulators detect the shortage and activate the virulence arsenal.

This page focuses on the protein-based regulators. For RNA-based metal sensors, see [[gene-regulation|riboswitch]]. For the broader regulatory framework, see [[metal-sensing]].

## Operating Principles

### Sensing the Labile Pool

Metalloregulators do not measure total cellular metal content. They sample only the [[labile-metal-pool]] -- the tiny fraction of bioavailable, loosely bound metal ions. This means a cell can have abundant total iron (stored in ferritin) while Fur still senses "iron starvation" because the labile pool is depleted [[helmann-2025-labile-metal-pools-bacteria]].

### Discrimination Challenge

Each metalloregulator must distinguish its cognate metal from all others in the cytoplasm. This is achieved through coordination chemistry [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]]:

- Oxygen (O) and nitrogen (N) donors: Favor hard Lewis acid metals (Mn2+, Fe2+)
- Sulfur (S) donors: Favor soft Lewis acid metals (Cu+, Zn2+)
- Mixed O/N/S coordination: Intermediate metals (Ni2+, Co2+)

Sensors for weak-binding metals (Mn, Fe) must use kinetic discrimination -- sensing metal before thermodynamic equilibrium is reached. Sensors for strong-binding metals (Zn, Cu) can rely on thermodynamic discrimination.

### The Sensor Compatibility Requirement

A critical insight: the entire set of metalloregulators in a cell must be co-evolved to work as a system. Each sensor's set-point (the metal concentration at which it switches) must be compatible with all other sensors' set-points, maintaining the inverse Irving-Williams hierarchy of metal availability. Disrupting a single sensor collapses the network, explaining why single-metal perturbations cascade into multi-metal [[dyshomeostasis]] [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]].

## The Flow Equilibrium Model

Nies (2025) proposed that metalloregulators achieve discrimination not by controlling import (importers lack specificity -- most transition metals are ~0.75 A diameter) but by controlling efflux pumps [[nies-2025-flow-equilibrium-model-mis-metalation-zinc]]:

- Metals flow continuously through the cell: import, labile pool, protein binding or efflux
- Metalloregulators sample the labile pool and adjust [[antimicrobial-resistance|efflux-pumps]] rates
- Correct metalation depends on maintaining the inverse Irving-Williams hierarchy
- Metal-binding buffers (glutathione, polyphosphate, ribosomes) quench oscillations

## Major Metalloregulator Families

### Fur Superfamily

The most widely distributed metal sensors in bacteria. See [[metal-sensing]] for the full table.

- Fur (Ferric Uptake Regulator): Senses Fe2+. When iron is abundant, Fe-Fur represses iron import genes. When iron is scarce (host restriction), Fur derepresses a regulon of 50-100+ genes including siderophore biosynthesis, virulence factors, toxins, and stress responses
- Zur (Zinc Uptake Regulator): Senses Zn2+. Controls zinc import (adcABC), alternative ribosomal proteins, and zinc-independent enzyme paralogs
- PerR: Senses Fe2+ and Mn2+. The peroxide stress regulator -- when mis-metalated by excess zinc, PerR loses function, causing lethal heme toxicity. This is a vulnerability exploited by host zinc flooding

### Other Key Metalloregulators

- MntR: Mn2+ sensor that balances manganese import and export. Works in concert with other sensors (SczA in pneumococcus) to discriminate Mn from Zn
- NikR: Ni2+ sensor. In [[helicobacter-pylori]], NikR is a dual activator/repressor controlling [[urease]] expression and nickel import -- essential for gastric survival
- CopY/CsoR: Cu+ sensors controlling copper [[antimicrobial-resistance|efflux-pumps]] expression
- PexR: A dual Fe2+/peroxide sensor in *Myxococcus* that integrates metal status with oxidative stress

## Clinical Relevance

### Metalloregulators as Drug Targets

Because metalloregulators control virulence gene expression, they are potential anti-virulence targets:

- Disrupting Fur derepresses iron import constitutively, creating toxic iron overload
- Blocking NikR in *H. pylori* would prevent urease expression, eliminating acid survival
- Inhibiting copper efflux regulators (CsoR) would sensitize pathogens to macrophage copper toxicity

### Metalloregulators and Co-Selection

Metalloregulators that control [[antimicrobial-resistance|efflux-pumps]] for metals can also confer antibiotic resistance through cross-resistance -- the same pump expels both metal and antibiotic. This regulatory linkage is a mechanism of [[co-selection]].

## Connections

- [[metal-sensing]] -- metalloregulators are the protein-based component of the broader metal-sensing framework
- [[gene-regulation|riboswitch]] -- RNA-based metal sensors that complement metalloregulators
- [[labile-metal-pool]] -- what metalloregulators actually measure
- [[antimicrobial-resistance|efflux-pumps]] -- primary targets of metalloregulator control
- [[mis-metallation]] -- sensor mis-metalation (e.g., PerR by Zn) is a host killing mechanism
- [[nutritional-immunity]] -- metalloregulators detect and respond to host metal restriction
- [[co-selection]] -- metalloregulator-controlled efflux drives cross-resistance
- [[irving-williams-series]] -- thermodynamic basis for sensor discrimination
