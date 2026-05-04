---
title: Chlamydia trachomatis
type: entity
subtype: microbe
created: 2026-04-17T00:00:00.000Z
updated: 2026-04-17T00:00:00.000Z
last_substantive_update: 2026-04-21
sources:
  - chen-2021-chlamydia-vaginal-microbiota-tubal-infertility
  - yang-2020-vaginal-microbiome-hpv16-shotgun-metagenomics
  - magri-2018-multidisciplinary-prostatitis
  - jin-2025-dietary-fiber-pelvic-inflammatory-disease-nhanes
  - gargiulo-isacco-2024-ssris-cervical-cancer-microbiome
  - sipos-2021-microbiome-ovarian-cancer-oncobiosis-review
source_count: 6
tags:
  - Chlamydia
  - obligate-intracellular
  - iron-dependency
  - trachoma
  - infertility
  - tubal-factor
  - STI
  - tryptophan-starvation
seo_target: Chlamydia trachomatis iron microbiome infertility
wikipedia_differentiation: >-
  Iron dependency as Achilles' heel — Chlamydia's developmental cycle requires host cell iron, and IFN-gamma-induced
  iron restriction via ferroportin export and ferritin sequestration is the host's primary defense; vaginal microbiome
  composition (L. crispatus vs. L. iners dominance) determines susceptibility to CT colonization and tubal infertility
  risk
gram_stain: negative
oxygen_requirement: obligate intracellular
metal_dependencies:
  - iron
  - zinc
key_enzymes:
  - type-III-secretion-system
  - zinc-finger-effectors
pathogenic_potential: obligate
conditions_enriched_in:
  - female-infertility
  - pelvic-inflammatory-disease
  - trachoma
conditions_depleted_in: []
platform: wikibiome
---

# Chlamydia trachomatis

## Overview

*Chlamydia trachomatis* is a Gram-negative, obligate intracellular bacterium and the most common bacterial sexually transmitted infection worldwide. Its biphasic developmental cycle — alternating between the infectious elementary body (EB) and the replicative reticulate body (RB) — makes it uniquely dependent on host cell resources, particularly iron. In the WikiBiome framework, *C. trachomatis* exemplifies how an organism's absolute metal dependency becomes its Achilles' heel, and how the surrounding microbial community (vaginal [[lactobacillus]] species) determines whether that vulnerability is exploited.

## Metal Dependencies

### Iron — The Critical Requirement

*C. trachomatis* cannot synthesize heme or acquire iron independently. The reticulate body replicating within its intracellular inclusion vacuole depends entirely on host cell iron delivered via transferrin receptor-mediated endocytosis and the labile iron pool. This creates a decisive vulnerability:

- IFN-gamma — The host's primary anti-chlamydial defense upregulates ferroportin (iron export) and ferritin (iron sequestration), starving the inclusion vacuole of iron. This is nutritional immunity in its most direct form.
- Iron supplementation paradox — Exogenous iron supplementation in iron-deficient women may inadvertently support chlamydial replication by overriding the host's iron-restriction defense.
- Persistent state — Under iron deprivation, *C. trachomatis* enters a non-replicating persistent form (aberrant bodies) that can reactivate when iron becomes available again. This persistence mechanism explains chronic and recurrent infections.

### Zinc

Zinc-finger motifs in chlamydial type III secretion system effectors are essential for host cell manipulation. Zinc-dependent effectors modulate host signaling to maintain the inclusion vacuole and prevent lysosomal fusion.

## Key Enzymes and Virulence Factors

- Type III secretion system (T3SS) — Injects effector proteins into the host cell to maintain the inclusion vacuole, prevent apoptosis, and redirect nutrient trafficking
- Zinc-finger effectors — Multiple zinc-containing proteins that manipulate host signaling
- Tryptophan synthase — Genital serovars (D-K) encode a functional tryptophan synthase that can use indole (provided by certain vaginal bacteria) as a substrate, partially rescuing IFN-gamma-induced tryptophan starvation

## Ecological Role — Vaginal Microbiome Context

The vaginal microbiome determines *C. trachomatis* susceptibility and disease outcomes:

- [[lactobacillus-crispatus]] dominance — Protective. *L. crispatus* produces high levels of D-lactic acid and hydrogen peroxide, maintaining low vaginal pH and directly inhibiting *C. trachomatis* EB infectivity. Women with *L. crispatus*-dominant communities have lower CT acquisition and clearance rates.
- [[lactobacillus-iners]] dominance — Permissive. In women with tubal infertility and CT infection, the vaginal microbiota was *L. iners*-dominated rather than *L. crispatus*-dominated, with significantly lower Shannon diversity [[chen-2021-chlamydia-vaginal-microbiota-tubal-infertility]]. *L. iners* produces only L-lactic acid (less potent than D-lactic acid) and generates less H2O2.
- BV-associated dysbiosis — *Prevotella*, *Gardnerella*, and *Atopobium* dominance provides indole (rescuing CT tryptophan starvation) and reduces lactic acid defense.

## Conditions Associated

| Condition | Mechanism |
|-----------|-----------|
| [[female-infertility]] (tubal factor) | Ascending infection → salpingitis → tubal scarring and occlusion |
| Pelvic inflammatory disease | Endometrial and tubal inflammation |
| Ectopic pregnancy | Tubal damage from prior CT infection |
| Trachoma | Ocular serovars (A-C) cause conjunctival scarring → blindness |
| Reactive arthritis | Post-infectious autoimmune joint inflammation |

## Cross-References

- [[iron]] — absolute requirement for CT developmental cycle; nutritional immunity target
- [[lactobacillus-iners]] — permissive vaginal community member
- [[female-infertility]] — tubal factor infertility from ascending CT infection
- [[tryptophan-metabolism]] — IFN-gamma induces IDO-mediated tryptophan starvation as anti-CT defense
- [[nutritional-immunity]] — host iron restriction as primary anti-chlamydial mechanism
