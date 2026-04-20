---
title: Metal Resistance Genes
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [baker-austin-2006-co-selection-antibiotic-metal-resistance, rebelo-2021-enterococcus-metal-antibiotic-resistance, cheng-2021-cadmium-enterococcus-metabolic]
source_count: 3
tags: [metal-resistance, mobile-genetic-elements, co-selection, AMR, cadA, arsC, horizontal-gene-transfer, plasmid]
karen_brain_primitives: [1, 4]
seo_target: "metal resistance genes bacteria antibiotic co-selection"
platform: wikibiome
---

# Metal Resistance Genes

## Overview

**Metal resistance genes** encode proteins that allow bacteria to survive toxic metal concentrations through efflux pumps, enzymatic detoxification, or sequestration mechanisms. These genes are frequently carried on **mobile genetic elements** (plasmids, transposons, integrative conjugative elements) — the same vehicles that carry antibiotic resistance genes. This physical co-location on shared genetic elements creates the phenomenon of **[[co-selection]]**: exposure to metals selects for antibiotic resistance, and antibiotic exposure selects for metal resistance, even without direct selective pressure from both agents simultaneously.

## Key Metal Resistance Systems

| Gene/System | Metal Target | Mechanism | Notable Carriers |
|-------------|-------------|-----------|-----------------|
| **cadA** | Cadmium, zinc | P-type ATPase efflux pump | *Staphylococcus*, [[enterococcus]], [[dysbiosis|listeria-monocytogenes]] |
| **arsC** / **arsABC** | Arsenic | Arsenate reductase + efflux | Widely distributed; *E. coli*, [[pseudomonas-aeruginosa]] |
| **merA** / **merB** | Mercury | Mercuric reductase (Hg2+ to Hg0) | *Pseudomonas*, *Serratia*, *Staphylococcus* |
| **tcrB** | Copper | Copper efflux | [[enterococcus-faecium]] — co-located with vanA and ermB |
| **czc** operon | Cadmium, zinc, cobalt | Cation-diffusion facilitator efflux | [[pseudomonas-aeruginosa]], *Ralstonia* |
| **czcD** | Zinc, cadmium | Efflux transporter | *Cupriavidus*, [[clostridioides-difficile]] |

## Co-Selection with Antibiotic Resistance

The clinical significance of metal resistance genes extends far beyond metal tolerance. When metal resistance and antibiotic resistance genes reside on the same mobile element, selecting for one automatically selects for the other:

- In [[enterococcus-faecium]], copper resistance gene *tcrB* is physically linked to vancomycin resistance (*vanA*) and macrolide resistance (*ermB*) on a single transferable plasmid — copper exposure alone co-selects for glycopeptide and macrolide resistance [[baker-austin-2006-co-selection-antibiotic-metal-resistance]]
- Hospital copper surfaces, intended to reduce infection, may paradoxically drive vancomycin-resistant Enterococcus (VRE) by selecting for copper-resistant strains carrying *vanA* [[rebelo-2021-enterococcus-metal-antibiotic-resistance]]
- Cadmium exposure from agricultural soils, dietary sources, and industrial contamination selects for cadmium-resistant gut bacteria that simultaneously carry aminoglycoside and tetracycline resistance

## Environmental Reservoirs

Wastewater treatment plants, agricultural soils amended with metal-containing fertilizers, and aquaculture environments are convergence points where metals and antibiotics co-occur. These environments serve as evolutionary crucibles for metal-antibiotic co-resistance, producing resistant strains that enter the human gut through food, water, and environmental contact.

## Metabolic Cost and Compensation

Metal resistance imposes a metabolic burden. [[enterococcus-faecium]] CX 2-6 under cadmium stress reprograms **1,152 genes (47% of its genome)**, massively upregulating EPS production, stress response pathways, and efflux systems [[cheng-2021-cadmium-enterococcus-metabolic]]. This metabolic cost means that in the absence of metal pressure, resistant strains are outcompeted — but in metal-enriched environments (including the dysbiotic gut with elevated luminal metals), resistance provides a decisive competitive advantage.

## Cross-References

- [[co-selection]] — the overarching framework for metal-antibiotic cross-resistance
- [[antimicrobial-resistance]] — clinical consequences of co-selection
- [[enterococcus]] — canonical co-selection organism
- [[cadmium]] — dietary and environmental source driving gut metal resistance
- [[copper]] — hospital surfaces as co-selection drivers
