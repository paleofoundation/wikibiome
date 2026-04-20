---
title: Enterococcus faecium
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [cheng-2021-cadmium-enterococcus-metabolic, rebelo-2021-enterococcus-metal-antibiotic-resistance, baker-austin-2006-co-selection-antibiotic-metal-resistance]
source_count: 3
tags: [Enterococcus, VRE, cadmium-resistance, co-selection, ESKAPE, hospital-acquired, mobile-genetic-elements, AMR]
seo_target: "Enterococcus faecium cadmium resistance antibiotic co-selection"
wikipedia_differentiation: "Cadmium stress triggers reprogramming of 47% of the E. faecium genome (1,152 genes); copper resistance gene tcrB physically linked to vancomycin resistance vanA and macrolide resistance ermB on a single transferable plasmid — copper exposure alone co-selects for glycopeptide and macrolide resistance"
gram_stain: "positive"
oxygen_requirement: "facultative anaerobe"
metal_dependencies: [manganese]
key_enzymes: [EPS-biosynthesis, cadA-efflux-pump, tcrB-copper-efflux]
pathogenic_potential: "opportunistic"
conditions_enriched_in: [hospital-acquired-infections]
conditions_depleted_in: []
platform: wikibiome
---

# Enterococcus faecium

## Overview

***Enterococcus faecium*** is a Gram-positive, facultatively anaerobic bacterium that epitomizes the metal-antibiotic [[co-selection]] problem in modern medicine. As one of the six **ESKAPE** pathogens (the group responsible for the majority of hospital-acquired infections that fail conventional treatment), *E. faecium* is a leading cause of vancomycin-resistant enterococcal (VRE) infections. Its story in the WikiBiome framework is not one of metal-dependent virulence enzymes, but of **resistance and co-selection** — where metal exposure drives antibiotic resistance through shared mobile genetic elements.

## Metal Dependencies

*E. faecium* relies on manganese rather than iron for its superoxide dismutase and core metabolic enzymes, giving it intrinsic resistance to host iron-restriction strategies. This manganese preference contributes to its survival in hospital environments where iron-chelating nutritional immunity is an ineffective defense.

## Metal Resistance and Co-Selection

### Cadmium Response

*E. faecium* CX 2-6 responds to cadmium stress with **massive transcriptional reprogramming**: 1,152 differentially expressed genes — fully 47% of its genome — are activated under Cd exposure [[cheng-2021-cadmium-enterococcus-metabolic]]. The response includes:

- Upregulation of **cadA** (P-type ATPase cadmium efflux pump)
- Massive EPS (exopolysaccharide) production increase — biofilm matrix that sequesters metals
- Stress response pathway activation
- Metabolic restructuring to compensate for metal-enzyme interference

### Copper-Vancomycin Co-Selection

The most clinically alarming feature of *E. faecium* is the physical co-location of metal and antibiotic resistance on transferable plasmids:

- **tcrB** (copper resistance) is linked to **vanA** (vancomycin resistance) and **ermB** (macrolide resistance) on a single mobile element
- Copper exposure alone — such as from hospital copper surfaces intended to reduce infection — selects for this entire resistance cassette [[baker-austin-2006-co-selection-antibiotic-metal-resistance]]
- This means that environmental metal contamination in hospital water, surfaces, or soil can drive the emergence of multi-drug resistant Enterococcus without any antibiotic exposure

## Ecological Role

In the healthy gut, *E. faecium* is a minor community member. Its ecological significance emerges under disrupted conditions:

- **Post-antibiotic expansion** — Inherent resistance to many antibiotics allows rapid colonization of the depleted niche
- **Hospital environment adaptation** — Survives on dry surfaces for weeks; tolerates alcohol-based disinfectants; persists through cleaning protocols
- **Biofilm formation** — EPS production under metal stress creates protective communities that resist both antimicrobials and host immune clearance

## Conditions Associated

| Context | Role |
|---------|------|
| Hospital-acquired infections | VRE bloodstream infections; urinary tract infections |
| Post-antibiotic dysbiosis | Opportunistic expansion after broad-spectrum antibiotic use |
| [[type-2-diabetes]] metformin response | Enriched in metformin responders (along with *Odoribacter* and *Lactococcus*) |

## Interkingdom Relationships

*E. faecium* forms mixed biofilms with *Candida* species in hospital settings, where fungal EPS provides additional structural protection. These interkingdom biofilms on medical devices (catheters, implants) are particularly recalcitrant to treatment.

## Cross-References

- [[enterococcus]] — genus overview with full co-selection framework
- [[co-selection]] — metal-antibiotic resistance co-location mechanism
- [[antimicrobial-resistance]] — ESKAPE pathogen context
- [[cadmium]] — drives massive transcriptional reprogramming
- [[copper]] — hospital surfaces may paradoxically select for VRE
- [[metal-resistance-genes]] — cadA, tcrB as canonical examples
