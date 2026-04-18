---
title: "NiFe-Hydrogenase"
type: concept
created: 2026-04-10
updated: 2026-04-10
sources: []
tags: [virulence-enzyme, nickel-biology, iron-biology, metal-cofactor, anaerobic-metabolism]
karen_brain_primitive: "Primitive 4: Microbial Metal Dependencies as Achilles' Heels; Primitive 9: Oxygen State as Ecological Determinant"
platform: wikibiome
karen_brain_primitives: [1, 2, 4, 6, 8, 9]
seo_target: "nife-hydrogenase microbiome"
last_substantive_update: 2026-04-10
---

## Overview

**NiFe-hydrogenase** (also called [Ni-Fe] hydrogenase or nickel-iron hydrogenase) is a class of enzymes that catalyze reversible hydrogen (H₂) oxidation. The active site contains both **nickel (Ni)** and **iron (Fe)** metal atoms arranged in a sophisticated bimetallic cluster. The reaction catalyzed is:

```
H₂ ↔ 2H⁺ + 2e⁻
```

In the forward direction, H₂ is oxidized to protons and electrons, releasing energy that powers ATP synthesis (in some bacteria). In the reverse direction, protons are reduced to H₂ (used for energy storage or stress relief).

NiFe-hydrogenases are found in:
- [[helicobacter-pylori|H. pylori]] (survival in the microaerophilic gastric niche)
- [[methanobrevibacter-smithii|Methanobrevibacter smithii]] (methane production; H₂ consumption)
- **Sulfate-reducing bacteria** ([[desulfovibrio]], [[desulfomonas]]) — H₂ is the preferred electron donor in sulfate reduction

NiFe-hydrogenases are virulence factors enabling **anaerobic persistence** and **interkingdom cooperation** (H₂ produced by one organism consumed by another in the same biofilm).

## Mechanism

**Active site structure:**

The NiFe-hydrogenase active site is a bi-metallic cluster containing:
- **Nickel (Ni)** — the main catalytic site
- **Iron (Fe)** — coordinates the substrate and facilitates electron transfer
- **Bridging ligands**: cyanide (CN⁻) and carbonyl (CO) groups stabilize the Fe center
- **Nickel coordination**: Histidine and cysteine residues

The bimetallic arrangement is critical: neither metal alone is sufficient; both Ni and Fe are required for catalysis.

**Catalytic cycle:**

```
H₂ binding → heterolytic cleavage of H-H → H⁺ released to solvent
 → 2e⁻ transferred to electron transport chain (quinone, NAD⁺, etc.)
```

This is energetically favorable under anaerobic or microaerophilic conditions (when dissolved O₂ is low).

**Nickel and iron acquisition:**

- Bacteria must acquire both Ni and Fe from the environment
- [[helicobacter-pylori|H. pylori]]: Uses NixA (nickel permease) and iron transporters; competes with host [[transferrin]] and [[lactoferrin]] for iron
- **Sulfate-reducing bacteria**: Acquire metals from sediment or gut contents; highly dependent on [[iron]] and [[nickel]] availability

## Role in Disease

**H. pylori persistence in the microaerophilic gastric niche:**

[[helicobacter-pylori|H. pylori]] lives in the mucus layer where O₂ is scarce but not zero (microaerophilic, ~1–5% O₂). Under these conditions:

- **Oxidative phosphorylation is insufficient** (not enough O₂ for efficient ATP synthesis)
- **H₂ oxidation via NiFe-hydrogenase becomes critical** — provides additional ATP and electrons for reducing O₂ via cytochrome c oxidase
- Without NiFe-hydrogenase: H. pylori cannot thrive in low-O₂ niches; burden is reduced

**Related conditions:**

- [[gastric-ulcer]], [[gastric-adenocarcinoma]] — H. pylori NiFe-hydrogenase enables persistent colonization
- **Methane-predominant SIBO** (small intestinal bacterial overgrowth): [[methanobrevibacter-smithii|M. smithii]] NiFe-hydrogenase consumes H₂ produced by fermentative bacteria; enables overgrowth by reducing H₂-induced inhibition

**Interkingdom cooperation in biofilms:**

In polymicrobial biofilms (e.g., cystic fibrosis lung, diabetic foot ulcers):
- Fermentative bacteria (e.g., [[bacteroides-fragilis|bacteroides]]) produce H₂ as a metabolic byproduct
- [[methanobrevibacter-smithii|M. smithii]] or sulfate-reducers (via NiFe-hydrogenase) consume H₂
- This removes H₂ (which inhibits fermentation), enabling primary fermenters to proliferate
- The biofilm becomes self-sustaining; difficult to eradicate

## Metal Connections

NiFe-hydrogenase is a paradigm for **Primitive 4: Metal Dependencies as Achilles' Heels**:

**Dual metal requirement:**
- Bacteria cannot substitute monometallic hydrogenases if both Ni and Fe are depleted
- **Simultaneous Ni and Fe starvation is more potent than either metal alone**
- This is clinically relevant for [[helicobacter-pylori|H. pylori]] and dysbiotic methanogens

**Nickel availability in the stomach:**

- [[helicobacter-pylori|H. pylori]] gastric infection depends on both NiFe-hydrogenase AND [[nickel-urease]]
- Both enzymes require Ni; nickel-limited conditions → both virulence pathways compromised
- **Therapeutic target**: Nickel chelation or dietary nickel restriction in H. pylori-infected patients

**Iron availability and bacterial competition:**

- [[helicobacter-pylori|H. pylori]] must compete with host [[transferrin]], [[lactoferrin]], and [[lipocalin-2]] for iron
- In dysbiotic states with [[iron]] overload (e.g., [[crohns-disease]], [[iron|hemochromatosis]]), H. pylori thrives
- [[iron]] sequestration via nutritional immunity limits H. pylori burden

**Sulfate-reducer ecology:**

- Sulfate-reducing bacteria (via NiFe-hydrogenase) thrive in [[iron]]-rich, anaerobic environments
- They produce H₂S, which precipitates bioavailable [[zinc]] and [[iron]], creating further metal dysbiosis
- This is a self-amplifying pathological cycle: [[iron]] overload → H₂S production → further metal dysbiosis

## Connections

**Related enzymes:**
- [[nickel-urease]] — complementary H. pylori virulence factor; both require nickel
- **[FeFe]-hydrogenases** — simpler hydrogenases containing only iron; less common in pathogens
- **Cytochrome c oxidase** — uses H₂ electrons; works in tandem with NiFe-hydrogenase in H. pylori

**Related organisms:**
- [[helicobacter-pylori|H. pylori]] — primary pathogen expressing NiFe-hydrogenase; microaerophilic survival
- [[methanobrevibacter-smithii|M. smithii]] — methane-producing archaeon; H₂ consumer in the gut
- **Sulfate-reducing bacteria** ([[desulfovibrio]], ) — H₂-dependent sulfate reducers in anaerobic environments
- [[bacteroides-fragilis|bacteroides]] — H₂ producers in fermentation; work synergistically with H₂-consuming methanogens

**Related concepts:**
- [[hypoxia]]/ — low-O₂ niches where NiFe-hydrogenase enables survival
- [[nutritional-immunity]] — nickel and [[iron]] sequestration as defenses against NiFe-hydrogenase-dependent pathogens
- [[biofilm]] — interkingdom cooperation via H₂ consumption
- — H. pylori NiFe-hydrogenase enables co-persistence with other microaerophiles
- [[metal-dependent-virulence|metal-cofactor-dependency]] — dual-metal requirement is a strategic vulnerability

**Related metals and proteins:**
- [[nickel]] — essential cofactor; nickel depletion disables NiFe-hydrogenase
- [[iron]] — essential cofactor; iron sequestration limits H. pylori persistence
- — product of sulfate-reducer NiFe-hydrogenase coupled to sulfate reduction; dysbiotic byproduct

**Disease pages:**
- , — H. pylori-driven diseases where NiFe-hydrogenase enables microaerophilic survival
- **SIBO**, **methane-predominant dysbiosis** — conditions with elevated [[methanobrevibacter-smithii|M. smithii]] and H₂-consuming activity
