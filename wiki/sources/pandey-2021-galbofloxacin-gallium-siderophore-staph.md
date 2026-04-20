---
title: "Pandey et al. 2021 — Galbofloxacin: Rationally Designed Gallium-Siderophore Antibiotic Against S. aureus"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Pandey, A., et al.]
year: 2021
journal: "Chemical Science"
doi: "10.1039/d1sc04283a"
evidence_level: animal-model
tags: [gallium, siderophore-conjugate, staphylococcus-aureus, trojan-horse, chelation]
library_category: interventions
platform: both
condition: "cross-condition"
karen_brain_primitives: [4, 8]
metals_discussed: [iron, gallium]
taxa_discussed: [staphylococcus-aureus]
key_findings:
  - "First rationally designed Ga-coordination complex antibiotic"
  - "MIC 93 nM against S. aureus via ferrichrome active transport"
  - "Efficient bacterial burden reduction in mouse infection model"
---

## Key Findings

- **First rationally designed gallium-coordination complex antibiotic** — [[gallium]] mimics [[iron]] but is redox-inactive, poisoning iron-dependent enzymes once internalized ([[pandey-2021-galbofloxacin-gallium-siderophore-staph]], animal-model).
- **MIC of 93 nM against [[staphylococcus-aureus]]** via ferrichrome active transport — exploiting the pathogen's own siderophore uptake to deliver a toxic metal mimic. This is orders of magnitude more potent than conventional antibiotics.
- **Efficient bacterial burden reduction** in a mouse infection model, confirming in vivo translation of the Trojan horse mechanism.
- **Rational design approach**: The Ga³⁺ coordination complex was designed to match the geometry and charge of Fe³⁺-siderophore complexes, ensuring recognition by bacterial iron transporters.
- **Dual mechanism of action**: Gallium both disrupts iron-dependent metabolism (as a non-functional iron substitute) and delivers a fluoroquinolone payload, combining metal mimicry with conventional antibiotic activity.

## Methods

- **Study design**: Combined in-vitro characterization and in-vivo mouse infection model
- **Compound**: Galbofloxacin — a rationally designed Ga³⁺-coordination complex conjugated with a fluoroquinolone antibiotic linked to a siderophore (desferrichrome analog)
- **Key measurements**: MIC determination against *S. aureus*; uptake kinetics via ferrichrome transport system; Ga³⁺ intracellular accumulation (ICP-MS); bacterial burden in mouse skin/soft tissue infection model
- **Controls**: Free gallium (without siderophore conjugation), free fluoroquinolone (without gallium), and unconjugated siderophore
- **Sample size**: <!-- NEEDS VERIFICATION --> Mouse numbers not specified in stub

## Detailed Summary

This Chemical Science paper describes the rational design, synthesis, and evaluation of galbofloxacin — the first purpose-built gallium-coordination complex antibiotic. The design exploits a fundamental vulnerability: bacteria cannot distinguish Ga³⁺ from Fe³⁺ because both ions have nearly identical ionic radii and coordination chemistry. However, unlike Fe³⁺, Ga³⁺ cannot undergo the Fe³⁺/Fe²⁺ redox cycling essential for iron-dependent enzyme catalysis. The compound consists of three components: (1) a desferrichrome-type siderophore that serves as the targeting ligand, recognized by **[[staphylococcus-aureus]]** ferrichrome ABC transporters; (2) a Ga³⁺ center that replaces Fe³⁺ in the metal-binding site; and (3) a fluoroquinolone antibiotic payload. When *S. aureus* encounters galbofloxacin, it actively imports the compound through its ferrichrome uptake system — the same system it uses to scavenge iron from the host. Once inside, the Ga³⁺ is released and incorporates into iron-dependent enzymes, poisoning them, while the fluoroquinolone inhibits DNA gyrase. This dual mechanism achieves an MIC of 93 nM — roughly 1000-fold lower than unconjugated fluoroquinolones — because active transport concentrates the drug inside the cell far more efficiently than passive diffusion. The mouse infection model confirmed that galbofloxacin significantly reduced bacterial burden in a skin/soft tissue infection, validating the in vivo relevance of the Trojan horse mechanism.

## Relevance to WikiBiome

Demonstrates [[gallium]] as a therapeutic iron mimic — a metal that bacteria cannot distinguish from iron but cannot use. Informs entity pages for **[[gallium]]**, **[[iron]]**, **[[staphylococcus-aureus]]**, and the concept page for **[[siderophores]]**. Illustrates Primitive 4 (metal dependency as Achilles' heel) at nanomolar potency. The rational design approach showcases how understanding metal biology can drive drug development.

## Relevance to Cureva

Supports Primitive 4 (Achilles' heel — iron dependency exploited with extreme potency) and Primitive 8 (siderophore competition — the Trojan horse is the ultimate exploitation of siderophore uptake). Galbofloxacin as a candidate intervention wherever *S. aureus* appears in disease signatures. The gallium Trojan horse strategy is potentially generalizable to any pathogen with ferrichrome-type siderophore uptake. The dual mechanism (metal poisoning + antibiotic delivery) is a template for intervention design in other metal-dependent infections.

## Contradictions / Tensions

None with existing wiki content. Provides experimental validation for the Trojan horse framework reviewed in [[carvalho-2014-siderophores-trojan-horses-mdr]] and the metal-chelation strategy reviewed in [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]].

## Open Questions

- Can the galbofloxacin design be adapted for Gram-negative pathogens with different siderophore uptake systems?
- What are the pharmacokinetic properties — does gallium accumulate in host tissues with chronic dosing?
- Would resistance evolve through mutations in ferrichrome transporter genes, and would this carry a fitness cost (reduced iron acquisition)?
- Can the gallium Trojan horse concept be extended beyond fluoroquinolones to other antibiotic classes?
