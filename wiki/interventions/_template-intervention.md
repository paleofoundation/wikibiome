---
title: "Intervention Name"
type: intervention
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []
tags: []
intervention_class: dietary | supplement | pharmaceutical | biophysical | probiotic | chelation

# Triangle validation for each condition
triangles:
  - condition: "[[condition-name]]"
    I_to_f: "How intervention affects the signature feature"
    I_to_f_evidence: "strong | moderate | preliminary"
    I_to_D: "Clinical evidence for this condition"
    I_to_D_evidence: "RCT | quasi-experimental | cohort | case-series | animal-model"
    f_to_D: "Mechanistic link between feature and disease"
    status: validated | promising | in-progress

targets:
  taxa: []
  enzymes: []
  metals: []
  ecological: []
---

## Mechanism of Action

How this intervention works at the metallomic/microbiome level.

## Triangle Evidence

### Condition: [[condition-name]]

**I → f (Intervention affects feature):**
Evidence that the intervention modifies the signature feature.

**I → D (Intervention affects disease):**
Independent clinical evidence that the intervention helps the condition.

**f → D (Feature linked to disease):**
Evidence that the feature is mechanistically linked to the disease.

**Status:** validated | promising | in-progress

## Dosage and Administration

If applicable: evidence-based dosing, timing, form.

## Contraindications and Interactions

Known risks or interactions.

## Sources

Cited evidence with `[[wikilinks]]` to source pages.
