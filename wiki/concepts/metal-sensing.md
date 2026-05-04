---

title: Metal Sensing
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [capdevila-2024-bacterial-metallostasis-sensing-trafficking, lenner-2025-compatibility-intracellular-binding-metal-sensor-design, palmer-2026-ph-dependent-riboswitch-manganese-sensing, stephen-2025-manganese-sensing-riboswitch-aptamers-expression-platforms, bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus, nies-2025-flow-equilibrium-model-mis-metalation-zinc, akbari-2022-metal-homeostasis-streptococci, maier-2019-nickel-microbial-pathogenesis]
source_count: 8
tags: [metalloregulator, Fur, Zur, MntR, NikR, riboswitch, metal-homeostasis, sensor-compatibility, flow-equilibrium]
karen_brain_primitives: [1, 2, 4]
seo_target: "bacterial metal sensing metalloregulator riboswitch Fur"
platform: wikibiome
---

# Metal Sensing

## Overview

Metal sensing is the set of regulatory mechanisms bacteria use to detect intracellular metal concentrations and adjust gene expression accordingly. Because metal ions cannot be synthesized or degraded -- only imported, exported, sequestered, or trafficked -- sensing and response are the only tools bacteria have for metal homeostasis.

Metal sensors sit at the apex of the metallostasis network [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]]. They interpret the [[labile-metal-pool]] and trigger coordinated responses: importing metals when scarce, exporting when excess, and reprioritizing metalloenzyme expression under stress. In the host-pathogen arena, metal sensors are the pathogen's first responders to [[nutritional-immunity]] -- detecting when the host restricts iron, manganese, or zinc and activating survival programs.

## Protein-Based Metal Sensors (Metalloregulators)

### The Fur Family

The Fur (Ferric Uptake Regulator) superfamily includes the most widely distributed metal sensors in bacteria:

| Sensor | Metal Sensed | Key Targets | Organisms |
|--------|-------------|-------------|-----------|
| Fur | Fe2+ | Siderophore biosynthesis, iron import, virulence factors, acid/oxidative stress defense | Nearly all Gram-negatives; many Gram-positives |
| Zur | Zn2+ | Zinc import (adcABC), Pht proteins | Streptococci, *E. coli*, *B. subtilis* |
| Mur | Mn2+ | Manganese import | Rhizobia, *Deinococcus* |
| PerR | Fe2+/Mn2+ | Peroxide stress response; catalase, Dps | *B. subtilis*, *S. aureus* |

Fur as master regulator: In most bacteria, Fur controls not just iron import but a regulon of 50-100+ genes including virulence factors, toxins, and stress responses. When the host deploys [[calprotectin]] or [[lactoferrin]] to restrict iron, Fur derepresses the entire virulence arsenal [[capdevila-2024-bacterial-metallostasis-sensing-trafficking]].

Fur mis-metallation: Manganese excess can mis-metallate Fur, causing iron import genes to remain repressed even when iron is needed. This is a vulnerability exploited by host Mn flooding of phagosomes.

### Other Metalloregulators

| Sensor | Metal | Key Function | Organisms |
|--------|-------|-------------|-----------|
| MntR | Mn2+ | Manganese import/export balance; works with SczA in pneumococcus | Streptococci, *E. coli*, *B. subtilis* |
| NikR | Ni2+ | Dual activator/repressor; controls [[nickel-urease]] and Ni import | *H. pylori* (essential for gastric survival) [[maier-2019-nickel-microbial-pathogenesis]] |
| CadR | Cd2+ | ~480-fold induction of czcE upon Cd exposure | [[acinetobacter]] |
| CopY/CsoR | Cu+ | Copper efflux pump expression | Streptococci, *M. tuberculosis* |
| SczA | Zn2+ | Zinc efflux; works with MntR for Zn-Mn discrimination | *S. pneumoniae* |
| PexR | Fe2+/peroxide dual sensor | Integrates metal status with oxidative stress | *Myxococcus* [[bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus]] |

## RNA-Based Metal Sensors (Riboswitches)

### yybP-ykoY Family
The yybP-ykoY riboswitch family is the largest metal-sensing riboswitch family (>1,000 members across bacteria). Members sense Mn2+ and control Mn efflux pumps (MntP) and other Mn-responsive genes [[stephen-2025-manganese-sensing-riboswitch-aptamers-expression-platforms]].

Key features:
- Co-transcriptional sensing: RNA folds and binds Mn2+ as it is being synthesized, enabling real-time metal detection during transcription.
- Dual metal sensing: The alx riboswitch integrates both Mn2+ and pH, with 1000-fold sensitivity shift at alkaline pH [[palmer-2026-ph-dependent-riboswitch-manganese-sensing]]. This pH integration is relevant to gut ecology, where pH varies dramatically along the intestinal tract.
- The yybP-ykoY riboswitch in *S. pneumoniae* senses both Mn2+ and Ca2+ -- linking [[calcium]] biology to manganese homeostasis.

### NiCo Riboswitches
Nickel/cobalt-sensing riboswitches control metal efflux in some bacteria, providing an alternative to protein-based Ni sensing (NikR).

## Sensor Compatibility Theory

A critical insight from Lenner et al. (2025): the entire set of metal sensors in a cell must be co-evolved [[lenner-2025-compatibility-intracellular-binding-metal-sensor-design]]. Each sensor must discriminate its cognate metal from all others using coordination chemistry (O, N, S donor atoms) and thermodynamics ([[irving-williams-series]]).

- Sensors for weak-binding metals (Mn, Fe) must use kinetic discrimination, sensing metals before they reach thermodynamic equilibrium with stronger binders.
- Sensors for strong-binding metals (Zn, Cu) can rely on thermodynamic discrimination.
- Disrupting one sensor collapses the network -- explaining why single-metal perturbations (e.g., zinc flooding) cascade into multi-metal dyshomeostasis.

## Flow Equilibrium Model

Nies (2025) proposed that metal discrimination is not achieved by importers (which lack specificity -- most transition metals are ~0.75 A diameter) but by metalloregulators controlling efflux pumps [[nies-2025-flow-equilibrium-model-mis-metalation-zinc]]:

- Metals flow continuously through the cell: import → [[labile-metal-pool]] → protein binding or efflux.
- Metal-binding buffers (glutathione, polyphosphate, ribosomes) quench oscillations.
- Metalloregulators sample the labile pool and adjust efflux rates to maintain homeostasis.
- Correct metalation of proteins depends on maintaining the inverse Irving-Williams hierarchy of metal availability.

## Clinical Relevance

Metal sensors are potential therapeutic targets:
- Inhibiting Fur would prevent pathogens from responding to host iron restriction, keeping virulence genes repressed.
- Disrupting NikR in *H. pylori* would prevent urease induction, disabling gastric acid resistance.
- Zinc ionophores (PBT2) overwhelm zinc efflux capacity, mis-metallating Mn-dependent enzymes like [[superoxide-dismutase]] [[wang-2025-zinc-ionophore-pbt2-tigecycline-resistance-klebsiella]].

## Cross-References

- [[labile-metal-pool]] -- What sensors detect
- [[metal-homeostasis]] -- The system sensors regulate
- [[pathogen-metal-acquisition]] -- Sensors trigger acquisition programs
- [[mis-metallation]] -- Sensor mis-metallation as vulnerability
- [[irving-williams-series]] -- Thermodynamic basis for sensor design
- [[nutritional-immunity]] -- Host pressure that sensors respond to
- [[nickel-urease]] -- NikR-controlled virulence system
- [[calprotectin]] -- Host metal restriction triggering sensor responses
- [[iron-sulfur-clusters]] -- IscR as Fe-S-dependent metal sensor
- [[calcium]] -- yybP-ykoY dual Mn/Ca sensing
