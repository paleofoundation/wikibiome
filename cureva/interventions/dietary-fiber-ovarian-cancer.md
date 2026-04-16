---
title: "Dietary Fiber for Ovarian Cancer Risk Reduction"
type: intervention
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-14
sources: [zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis.md, gong-2025-gut-microbiota-diagnostic-ovarian-tumor.md]
tags: [ovarian-cancer, dietary-fiber, SCFA, butyrate, risk-reduction]
intervention_class: dietary
cureva_status: complete

triangles:
  - condition: "[[ovarian-cancer]]"
    I_to_f: "Dietary fiber serves as prebiotic supporting SCFA-producing bacteria (Coprococcus, Butyricicoccus, Oscillibacter) that are systematically depleted in OC"
    I_to_f_evidence: "strong"
    I_to_f_sources: [zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis.md]
    I_to_D: "Pooled RR 0.78 (95% CI 0.70-0.88) for highest vs. lowest fiber intake; 12% risk reduction per 10 g/day increase; dose-response confirmed"
    I_to_D_evidence: "systematic-review-meta-analysis"
    I_to_D_sources: [zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis.md]
    f_to_D: "Butyrate-producing genera (Coprococcus, Fusicatenibacter, Butyricicoccus, Oscillibacter) are significantly depleted in OC patients; butyric acid identified as protective factor by MR"
    f_to_D_sources: [gong-2025-gut-microbiota-diagnostic-ovarian-tumor.md, guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr.md]
    status: validated

targets:
  taxa: [coprococcus, butyricicoccus, oscillibacter, fusicatenibacter, bifidobacterium]
  enzymes: []
  metals: []
  ecological: [SCFA-restoration, anti-inflammatory, microbiome-diversity]
karen_brain_primitives: [5]
---

# Dietary Fiber for Ovarian Cancer Risk Reduction

## Intervention Summary

High dietary fiber intake as a preventive strategy against ovarian cancer. This is the strongest epidemiological evidence for any dietary intervention in OC, with meta-analytic dose-response data from 13 studies and 142,189 participants.

## Evidence

### Meta-Analysis (Zheng 2018)
- **Design**: Systematic review and meta-analysis, 13 studies, 5,777 OC cases, 142,189 participants
- **Primary outcome**: Highest vs. lowest fiber intake: RR = 0.78 (95% CI: 0.70-0.88), no heterogeneity
- **Dose-response**: Each 10 g/day increase = 12% reduced OC risk (RR: 0.88)
- Source: [[zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis]]

## Mechanism

Fiber targets the core ecological disruption in OC — SCFA depletion from loss of butyrate-producing genera:

1. **Prebiotic effect**: Fermentable fiber feeds Coprococcus, Butyricicoccus, Oscillibacter, Fusicatenibacter — all significantly depleted in OC patients ([[gong-2025-gut-microbiota-diagnostic-ovarian-tumor]], n=382)
2. **Butyrate production**: Butyrate has direct anti-inflammatory and anti-tumor properties; identified as a causal protective factor by Mendelian randomization [[guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr]]
3. **Estrogen metabolism**: Fiber may modulate estrobolome activity by altering the microbial community responsible for beta-glucuronidase production, reducing estrogen recirculation relevant to estrogen-dependent OC
