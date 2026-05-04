---
title: "Omega-3 Fatty Acids (EPA/DHA)"
type: intervention
created: 2026-04-18
updated: 2026-04-21
last_substantive_update: 2026-04-21
sources:
  - bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity
  - shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia
  - katzsand-2018-diet-ms-mechanistic-review
  - puszkarz-2018-food-nutrition-hashimotos-prevention
  - ben-khedher-2017-fatty-acids-diabetic-erectile-dysfunction
  - malekpour-2025-anti-inflammatory-interventions-mental-health-sexual-performance
  - hoffman-2023-dietary-strategies-eae-ms
  - martin-2015-dietary-polyphenols-ibd-models
tags: [supplement, anti-inflammatory, fatty-acids, EPA, DHA, omega-3, pro-resolving, SPMs, microbiome-modulator]
intervention_class: supplement
cureva_status: in-progress

triangles:
  - condition: "[[type-1-diabetes]]"
    I_to_f: "Omega-3 PUFAs shift gut microbiome toward anti-inflammatory composition; increase Lactobacillus and Bifidobacterium; reduce Proteobacteria"
    I_to_f_evidence: "moderate"
    I_to_f_sources: [bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity]
    I_to_D: "Omega-3 supplementation ameliorates autoimmune diabetes in NOD mice"
    I_to_D_evidence: "animal-model"
    I_to_D_sources: [bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity]
    f_to_D: "Dysbiosis and inflammation drive beta-cell autoimmunity"
    f_to_D_sources: [bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity]
    status: promising

  - condition: "[[erectile-dysfunction]]"
    I_to_f: "Omega-3 PUFAs reduce arachidonic acid-derived prostaglandins and improve endothelial NO signaling"
    I_to_f_evidence: "moderate"
    I_to_f_sources: [shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia, ben-khedher-2017-fatty-acids-diabetic-erectile-dysfunction]
    I_to_D: "EPA/DHA supplementation improves erectile function in chronic pelvic ischemia model"
    I_to_D_evidence: "animal-model"
    I_to_D_sources: [shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia]
    f_to_D: "Altered fatty acid profiles in diabetic ED; arachidonic acid excess drives endothelial dysfunction"
    f_to_D_sources: [ben-khedher-2017-fatty-acids-diabetic-erectile-dysfunction]
    status: promising

targets:
  taxa: [proteobacteria, lactobacillus, bifidobacterium]
  enzymes: [COX-2, 5-LOX]
  metals: []
  ecological: [inflammation-reduction, barrier-integrity, resolvin-production]
karen_brain_primitives: [5]
---

# Omega-3 Fatty Acids (EPA/DHA)

## Overview

Omega-3 fatty acids — eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) — are anti-inflammatory [[polyunsaturated-fatty-acids]] that counterbalance the pro-inflammatory effects of omega-6 [[arachidonic-acid]]. They act through multiple mechanisms: competitive COX-2/5-LOX substrate (reducing prostaglandin/leukotriene production), precursors to specialized pro-resolving mediators (SPMs) (resolvins, protectins, maresins), and direct microbiome modulators.

## Microbiome Effects

- Omega-3 supplementation increases Lactobacillus and Bifidobacterium while reducing Proteobacteria — shifting the microbiome toward an anti-inflammatory composition [[bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity]].
- EPA/DHA enhance intestinal barrier integrity, reducing [[endotoxemia]].
- The microbiome-mediated effects may explain why omega-3 supplementation has broader anti-inflammatory effects than expected from direct COX inhibition alone.

## Condition-Specific Evidence

- T1D autoimmunity: Ameliorates autoimmune diabetes in NOD mice via microbiome + immune modulation [[bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity]].
- ED: Improves endothelial function in chronic pelvic ischemia [[shim-2016-omega3-erectile-dysfunction-chronic-pelvic-ischemia]]; altered FA profiles in diabetic ED [[ben-khedher-2017-fatty-acids-diabetic-erectile-dysfunction]].
- MS: Dietary omega-3 studied for neuroinflammation modulation [[katzsand-2018-diet-ms-mechanistic-review]] [[hoffman-2023-dietary-strategies-eae-ms]].
- Depression/sexual dysfunction: Systematic review evidence for anti-inflammatory interventions including omega-3 [[malekpour-2025-anti-inflammatory-interventions-mental-health-sexual-performance]].
- Hashimoto's: Part of dietary prevention strategies [[puszkarz-2018-food-nutrition-hashimotos-prevention]].

## Cross-References

- [[polyunsaturated-fatty-acids]] — PUFA umbrella concept
- [[arachidonic-acid]] — pro-inflammatory omega-6 counterpart
- [[inflammation]] — omega-3 reduces NF-kB/COX-2/IL-6
- [[interleukin-6]] — reduced by omega-3 supplementation
- [[endothelial-dysfunction]] — omega-3 improves endothelial NO signaling
- [[lipid-peroxidation]] — PUFAs as both target and defense substrate
