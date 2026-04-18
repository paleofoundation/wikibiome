---
title: Efflux Pumps
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [baker-austin-2006-co-selection-antibiotic-metal-resistance, wales-2015-co-selection-resistance-antibiotics-biocides-metals, nies-2025-flow-equilibrium-model-mis-metalation-zinc]
source_count: 3
tags: [metal-resistance, antibiotic-resistance, cross-resistance, co-selection, flow-equilibrium, CzcCBA, AcrAB-TolC, metal-efflux]
karen_brain_primitives: [1, 4, 6]
seo_target: "efflux pump metal resistance antibiotic resistance bacteria"
platform: wikibiome
---

# Efflux Pumps

Membrane-spanning protein complexes that **actively export substrates from the bacterial cell**, using energy from ATP hydrolysis or the proton motive force. In the context of metal-microbiome biology, efflux pumps serve a dual role that has profound clinical consequences: they export toxic metals to maintain [[metal-homeostasis]], but many of the same pumps also export antibiotics -- creating **cross-resistance** that links environmental metal exposure directly to antimicrobial resistance.

## Role in Metal Homeostasis

### The Flow Equilibrium Model

Nies (2025) proposed that efflux pumps, not importers, are the primary determinants of intracellular metal speciation [[nies-2025-flow-equilibrium-model-mis-metalation-zinc]]:

- Metal importers lack specificity -- most divalent transition metals are ~0.75 A diameter and enter through the same channels
- **[[metalloregulator|Metalloregulator]] control efflux pump expression**, adjusting export rates to maintain correct metal concentrations
- Metals flow continuously through the cell: import into the [[labile-metal-pool]], protein binding or efflux
- The balance between import and efflux determines the steady-state labile pool concentration

### Metal-Specific Efflux Systems

| Pump Family | Metals Exported | Energy Source | Key Examples |
|-------------|----------------|---------------|--------------|
| **P-type ATPases** | Cu+, Zn2+, Cd2+, Pb2+ | ATP | CopA (Cu export), ZntA (Zn/Cd/Pb export) |
| **RND (Resistance-Nodulation-Division)** | Co2+, Zn2+, Cd2+, Ni2+ | Proton motive force | CzcCBA (Co/Zn/Cd in *Ralstonia*) |
| **CDF (Cation Diffusion Facilitator)** | Zn2+, Fe2+, Co2+, Mn2+ | Proton antiport | YiiP/FieF (Fe/Zn), MntP (Mn) |
| **MFS (Major Facilitator Superfamily)** | Various | Proton antiport | Some metal-specific members |

## Cross-Resistance: The Metal-Antibiotic Bridge

The most clinically consequential feature of efflux pumps: many have **broad substrate ranges** that encompass both metals and antibiotics [[baker-austin-2006-co-selection-antibiotic-metal-resistance]]:

### Direct Cross-Resistance Examples

- **CzcCBA** (RND family): Expels cobalt, zinc, and cadmium -- but its broad substrate range also includes certain antibiotics. Metal exposure selects for CzcCBA overexpression, conferring antibiotic resistance without any antibiotic exposure
- **AcrAB-TolC** (RND family): The major multidrug efflux system in Gram-negative bacteria. Copper stress activates the MarR repressor, which induces AcrAB-TolC expression, creating broad-spectrum antibiotic resistance via a **metal intermediate** [[wales-2015-co-selection-resistance-antibiotics-biocides-metals]]
- **TetL**: Transports both tetracycline and cobalt
- **MexAB-OprM**: The *Pseudomonas aeruginosa* multidrug efflux pump that also exports metals; linked to imipenem resistance through co-regulatory circuits with metal efflux operons

### The Regulatory Cascade

Metal exposure does not always directly induce antibiotic efflux pumps. Sometimes the connection is indirect:

1. Metal stress damages the cell envelope
2. Envelope stress activates sigma factors or two-component systems
3. These regulators induce efflux pump expression as part of a general stress response
4. The induced pumps happen to also export antibiotics

This mechanism means that **sub-inhibitory metal concentrations** -- levels too low to kill bacteria -- can still drive antibiotic resistance by activating stress-response efflux systems.

## Relevance to Co-Selection

Efflux pumps are the dominant mechanism of the **cross-resistance** arm of [[co-selection]] [[baker-austin-2006-co-selection-antibiotic-metal-resistance]]:

- Unlike **co-resistance** (where distinct resistance genes ride the same mobile element), cross-resistance requires no genetic linkage -- a single pump does double duty
- This means cross-resistance can arise in any bacterium with broad-substrate efflux pumps, without horizontal gene transfer
- Reduced outer membrane permeability (another cross-resistance mechanism selected by metals) further reduces antibiotic entry, compounding efflux-mediated resistance

## Efflux Pumps as Drug Targets

### Efflux Pump Inhibitors (EPIs)

Blocking efflux could simultaneously resensitize bacteria to both metals and antibiotics:

- PAβN (phenylalanine-arginine beta-naphthylamide) inhibits RND efflux pumps
- Combining EPIs with antibiotics reverses resistance in some clinical isolates
- The challenge: EPIs must be non-toxic to host cells and specific enough to avoid disrupting essential mammalian transporters

### Antimicrobial Metal Strategies

[[antimicrobial-metals|Antimicrobial-metals]] exploit efflux pump limitations:

- Silver, copper, and zinc can overwhelm efflux capacity at sufficient concentrations
- Zinc ionophores (e.g., PBT2) bypass the pump entirely by importing zinc faster than efflux can export it
- Combining metals with antibiotics can saturate efflux pumps with metal substrates, reducing antibiotic export capacity

## Connections

- [[co-selection]] -- efflux pumps are the primary mechanism of cross-resistance
- [[metalloregulator]] -- metalloregulators control efflux pump expression
- [[labile-metal-pool]] -- efflux pumps maintain the labile pool steady state
- [[antimicrobial-resistance]] -- efflux-mediated antibiotic resistance
- [[antimicrobial-metals]] -- metals exploit efflux capacity limitations
- [[metal-homeostasis]] -- efflux is one of the three pillars (import, storage, efflux)
- [[metal-sensing]] -- efflux pump expression is controlled by metal sensors
- [[biofilm]] -- biofilm formation can be an alternative to efflux for metal tolerance
