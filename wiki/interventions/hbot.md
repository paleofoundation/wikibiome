---
title: "Hyperbaric Oxygen Therapy (HBOT)"
type: intervention
created: 2026-04-14
updated: 2026-04-22
last_substantive_update: 2026-04-22
sources:
  - carretta-2021-scfas-receptors-gut-inflammation-colon-cancer
  - bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota
  - feitelson-2023-scfas-cancer-pathogenesis
  - shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia
tags: [HBOT, hyperbaric-oxygen, oxygen-therapy, anaerobic-disruption, biofilm, biophysical, microbiome-ecology, hypoxia, facultative-anaerobe, Primitive-9]
intervention_class: biophysical
cureva_status: in-progress

triangles:
  - condition: "[[endometriosis]]"
    I_to_f: "HBOT increases tissue oxygen tension, disrupting the hypoxic microenvironment that sustains obligate anaerobic pathobionts (Prevotella, Porphyromonas, Fusobacterium) and shifting the ecological balance toward facultative aerobes. Elevated O₂ penetrates biofilm matrices more effectively than antibiotics, destabilizing the polymicrobial architecture that enables functional shielding."
    I_to_f_evidence: "preliminary"
    I_to_f_sources: []
    I_to_D: "Preclinical evidence shows HBOT reduces endometriotic lesion size and adhesion formation; limited clinical case series suggest pain reduction"
    I_to_D_evidence: "animal-model"
    I_to_D_sources: []
    f_to_D: "Endometriosis-associated dysbiosis features obligate anaerobes thriving in hypoxic peritoneal microenvironment; oxygen state determines which organisms dominate the ecosystem"
    f_to_D_sources: []
    status: in-progress

targets:
  taxa: [prevotella, porphyromonas-gingivalis, fusobacterium, desulfovibrio, bacteroides-fragilis]
  enzymes: [NiFe-hydrogenase, nitroreductase]
  metals: [iron]
  ecological: [oxygen-restoration, anaerobe-suppression, biofilm-disruption, butyrate-producer-support]
karen_brain_primitives: [5, 9]
platform: cureva
---

> Research summary — not medical advice. This page synthesizes published research on a mechanism-level intervention. It is not a clinical recommendation.

# Hyperbaric Oxygen Therapy (HBOT)

## Overview

Hyperbaric oxygen therapy (HBOT) delivers 100% oxygen at pressures above atmospheric (typically 1.5–3.0 ATA), dramatically increasing tissue oxygen tension. In the WikiBiome framework, HBOT is not merely a wound-healing modality — it is an ecological intervention that directly targets Karen's Brain Primitive 9 (Oxygen State as Ecological Determinant). By changing the oxygen environment, HBOT reshapes which organisms can survive, altering the entire microbial ecosystem without directly killing any specific pathogen.

## The Ecological Mechanism — Why Oxygen Changes the Microbiome

The healthy colon maintains a steep oxygen gradient: the epithelial surface is relatively oxygenated (fed by capillaries), while the lumen is nearly anoxic (<1% O₂). This gradient is maintained by colonocyte oxygen consumption — which depends on [[butyrate]] oxidation as the primary energy source [[carretta-2021-scfas-receptors-gut-inflammation-colon-cancer]].

### The Dysbiosis-Hypoxia Vicious Cycle

1. Dysbiosis depletes butyrate-producing commensals ([[faecalibacterium-prausnitzii]], [[roseburia]]).
2. Lost butyrate → colonocytes switch from butyrate oxidation to glucose fermentation → reduced epithelial oxygen consumption → oxygen leaks into the lumen.
3. Luminal oxygenation paradoxically favors facultative anaerobes (Enterobacteriaceae) that can exploit the newly available oxygen, while obligate anaerobic commensals (Bacteroidetes, Clostridia) lose their competitive advantage [[feitelson-2023-scfas-cancer-pathogenesis]].
4. This is the opposite of what might be expected — in the healthy gut, more oxygen is bad because it disrupts the anaerobic equilibrium. The pathological state is not simply "too anaerobic" but rather a disrupted gradient where oxygen is in the wrong place.

### How HBOT Intervenes

HBOT's ecological effects depend on the tissue compartment:

In hypoxic lesion sites (endometriosis, tumors, chronic wounds):
- These environments are pathologically anaerobic — obligate anaerobes ([[porphyromonas-gingivalis]], [[fusobacterium]], [[prevotella]], [[desulfovibrio]]) thrive because the hypoxic niche excludes aerobic competitors and impairs neutrophil oxidative killing.
- HBOT restores oxygen → disrupts obligate anaerobe viability → collapses [[biofilm]] architecture (biofilm anaerobic cores are destabilized by O₂ penetration) → exposes embedded bacteria to immune clearance.
- Enhanced neutrophil oxidative burst: HBOT provides the O₂ substrate for myeloperoxidase and NADPH oxidase — the primary antimicrobial weapons of [[innate-immunity]].

In the gut lumen:
- The effect is more nuanced. HBOT increases mucosal oxygenation → may enhance colonocyte butyrate oxidation capacity → potentially restore the normal oxygen gradient that favors obligate anaerobic commensals.
- This is Karen's key insight: HBOT may help restore the conditions under which butyrate-producing obligate anaerobes thrive — not by feeding them oxygen (they're strict anaerobes) but by restoring the colonocyte oxygen consumption that maintains their anoxic habitat.

## Fermentation and Oxygen

Oxygen state determines which fermentation mode dominates:

| Oxygen State | Dominant Organisms | Fermentation | Products |
|-------------|-------------------|--------------|----------|
| Normal gradient (epithelium oxygenated, lumen anoxic) | Obligate anaerobes (Bacteroidetes, Clostridia) | [[saccharolytic-fermentation]] | [[butyrate]], [[acetate]], propionate (beneficial) |
| Disrupted gradient (oxygen leaking into lumen) | Facultative anaerobes (Enterobacteriaceae) | Aerobic/mixed | LPS, [[endotoxemia]], less SCFA |
| Pathological hypoxia (lesion/tumor sites) | Obligate anaerobes + biofilm consortia | Proteolytic/sulfidogenic | [[hydrogen-sulfide]], [[cadaverine]], ammonia (toxic) |

HBOT targets the pathological hypoxia compartment specifically — it does not flood the colonic lumen with oxygen but increases tissue oxygenation at hypoxic lesion sites and mucosal surfaces.

## Iron-Oxygen Interface

Oxygen state and iron ecology are inseparable:
- Hypoxia stabilizes HIF-1α → upregulates ferroportin → increases iron export from cells → increases luminal iron → favors siderophore-producing Enterobacteriaceae [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]].
- HBOT reverses hypoxia → destabilizes HIF-1α → normalizes iron handling → reduces the iron windfall that feeds pathobionts.
- NiFe-hydrogenases (nickel-iron enzymes used by Enterobacteriaceae for anaerobic H₂ oxidation) are oxygen-sensitive — HBOT inactivates them, removing a key competitive advantage of pathobionts.

## Conditions with HBOT Evidence

| Condition | Rationale | Evidence |
|-----------|-----------|----------|
| Endometriosis | Peritoneal hypoxia sustains anaerobic pathobionts and biofilm | Animal models + case series |
| Chronic wounds / diabetic ulcers | Wound hypoxia impairs neutrophil killing; polymicrobial biofilm | RCTs (FDA-approved indication) |
| IBD | Mucosal hypoxia drives inflammatory cycle | Case series, small trials |
| Chronic fatigue / Long COVID | Tissue hypoperfusion, neuroinflammation | Emerging RCT evidence |
| Neurodegeneration | Cerebral hypoperfusion, microglial activation | Preclinical + early clinical |
| Chronic pelvic pain / ED | Pelvic ischemia drives tissue hypoxia | [[shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia]] (ischemia context) |

## Limitations and Open Questions

- Gut lumen effects are indirect: HBOT primarily affects tissue oxygenation, not luminal oxygen. The microbiome effects are mediated through colonocyte physiology and immune function, not direct O₂ exposure to luminal bacteria.
- Rebound risk: If the underlying dysbiosis (butyrate producer depletion) is not addressed, the hypoxic niche may re-establish after HBOT cessation.
- Oxidative stress: Repeated HBOT sessions generate [[reactive-oxygen-species]] — beneficial for antimicrobial killing but potentially damaging to host tissue. Balance is critical.
- No RCTs for microbiome-specific endpoints: Current HBOT trials measure clinical outcomes, not microbiome composition. Studies measuring 16S/shotgun metagenomics before and after HBOT courses are needed.

## Cross-References

- [[hypoxia]] — the ecological condition HBOT targets
- [[biofilm]] — anaerobic cores destabilized by O₂ penetration
- [[functional-shielding]] — hypoxia enables interkingdom biofilm shielding
- [[butyrate]] — colonocyte butyrate oxidation maintains the oxygen gradient
- [[faecalibacterium-prausnitzii]] — obligate anaerobe requiring anoxic lumen (paradoxically supported by HBOT restoring the gradient)
- [[saccharolytic-fermentation]] — the beneficial fermentation mode favored by normal oxygen gradients
- [[innate-immunity]] — HBOT enhances neutrophil oxidative burst
- [[reactive-oxygen-species]] — HBOT generates therapeutic ROS
- [[iron]] — oxygen-iron-HIF-1α axis determines pathobiont iron access
- [[endometriosis]] — primary disease target
- [[cortisol]] — stress compounds hypoxia-driven dysbiosis
