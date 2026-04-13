---
title: "Iron Management"
type: intervention
created: 2026-04-09
updated: 2026-04-09
sources: []
tags: [supplement, iron, hepcidin, lactoferrin, anemia, evidence-based]
intervention_class: supplement
cureva_status: partial

triangles:
  - condition: "[[postpartum-depression]]"
    I_to_f: "Iron deficiency anemia during pregnancy and postpartum depletes serotonin and dopamine synthesis (iron is a cofactor for tryptophan hydroxylase and tyrosine hydroxylase). Repletion restores monoamine production capacity."
    I_to_f_evidence: "strong"
    I_to_D: "Peripartum iron deficiency anemia independently predicts PPD (OR ~1.5-2.0). Supplementation during pregnancy reduces PPD incidence. Ferritin <30 ng/mL is the intervention threshold."
    I_to_D_evidence: "cohort"
    f_to_D: "Ferritin correlates inversely with Edinburgh Postnatal Depression Scale scores. Iron deficiency during lactation compounds depletion. Low hepcidin + low ferritin confirms true deficiency requiring supplementation."
    status: promising

  - condition: "[[crohns-disease]]"
    I_to_f: "Chronic mucosal inflammation causes iron deficiency via blood loss and impaired absorption. However, oral iron is poorly tolerated and feeds iron-scavenging pathobionts (E. coli, Klebsiella) in the inflamed gut."
    I_to_f_evidence: "strong"
    I_to_D: "IV iron (ferric carboxymaltose, iron sucrose) corrects anemia without exacerbating gut inflammation. Oral iron worsens dysbiosis and increases calprotectin in active Crohn's. European Crohn's and Colitis Organisation recommends IV iron as first-line."
    I_to_D_evidence: "RCT"
    f_to_D: "Anemia prevalence in Crohn's is 30-70%. Iron deficiency compounds fatigue and impairs quality of life. Unabsorbed oral iron reaches the colon and selectively feeds siderophore-producing pathobionts."
    status: validated

  - condition: "[[chronic-kidney-disease]]"
    I_to_f: "CKD patients have functional iron deficiency driven by high hepcidin (inflammation, reduced renal clearance). Iron is trapped in macrophages and unavailable for erythropoiesis despite adequate stores."
    I_to_f_evidence: "strong"
    I_to_D: "IV iron combined with erythropoiesis-stimulating agents (ESAs) is standard of care. PIVOTAL trial showed high-dose IV iron reduced ESA requirements and cardiovascular events. Oral iron is ineffective when hepcidin is elevated."
    I_to_D_evidence: "RCT"
    f_to_D: "Anemia of CKD is driven by EPO deficiency and hepcidin-mediated iron restriction. TSAT <20% and ferritin <100 ng/mL (or <200 in dialysis) define absolute deficiency; high ferritin + low TSAT defines functional deficiency."
    status: validated

targets:
  taxa: [escherichia-coli, klebsiella-pneumoniae]
  enzymes: [tryptophan-hydroxylase, tyrosine-hydroxylase, aconitase, ribonucleotide-reductase]
  metals: [iron]
  ecological: [pathobiont-feeding-with-oral-iron, siderophore-competition, hepcidin-mediated-restriction]
platform: cureva
---

## Overview

**Iron management** is not a simple supplement-or-restrict decision. The iron paradox -- that both deficiency and excess drive disease -- requires hepcidin as the decision biomarker to distinguish true deficiency from functional iron restriction.

> **Clinical disclaimer:** Iron supplementation decisions must be guided by hepcidin status, ferritin, TSAT, and CRP interpreted together. Oral iron supplementation in inflammatory bowel disease or CKD with elevated hepcidin can worsen outcomes. IV iron carries anaphylaxis risk (rare but serious). All iron decisions require clinical supervision.

---

## The Iron Paradox: Supplement vs. Restrict

### When to Supplement (True Deficiency)
- **Biomarker pattern**: Low hepcidin + low ferritin + low TSAT
- **Mechanism**: Genuine depletion of iron stores; the body is signaling "absorb more iron"
- **Conditions**: [[postpartum-depression]], menorrhagia, celiac disease, post-gastrectomy
- **Route**: Oral iron acceptable when gut is healthy and hepcidin is low

### When to Restrict or Use IV (Functional Anemia)
- **Biomarker pattern**: High hepcidin + normal/high ferritin + low TSAT
- **Mechanism**: Inflammation traps iron in macrophages via hepcidin; iron is present but unavailable
- **Conditions**: [[crohns-disease]], [[chronic-kidney-disease]], cancer-related anemia
- **Route**: IV iron bypasses hepcidin block; oral iron is futile and feeds pathobionts

### Hepcidin as Decision Biomarker

| Hepcidin | Ferritin | TSAT | Interpretation | Action |
|----------|----------|------|----------------|--------|
| Low | Low | Low | True iron deficiency | Oral or IV iron |
| High | Normal/High | Low | Functional deficiency (inflammation) | IV iron only (+ treat inflammation) |
| High | High | Normal | Iron overload or inflammation | Do NOT supplement |
| Low | High | High | Possible hemochromatosis | Do NOT supplement; investigate |

---

## Mechanism of Action

Iron operates through two opposing pathways relevant to intervention:

1. **Erythropoiesis and enzyme function**: Iron is essential for hemoglobin, myoglobin, cytochrome enzymes, and neurotransmitter-synthesizing enzymes (tryptophan hydroxylase, tyrosine hydroxylase). Deficiency causes anemia, fatigue, cognitive impairment, and depression.

2. **Pathobiont feeding and oxidative damage**: Unabsorbed oral iron reaching the colon feeds siderophore-producing pathobionts ([[escherichia-coli]], [[klebsiella-pneumoniae]]). Excess tissue iron drives Fenton chemistry (Fe2+ + H2O2 -> OH radical), causing oxidative damage and [[ferroptosis]].

---

## Disease-Specific Guidance

### Postpartum Depression — Supplement
- **Route**: Oral iron (ferrous bisglycinate preferred for tolerability)
- **Dose**: 60-120 mg elemental iron daily until ferritin >50 ng/mL
- **Rationale**: True deficiency (low hepcidin) from pregnancy depletion; iron required for monoamine synthesis
- **Co-factors**: Vitamin C enhances absorption; separate from [[zinc-supplementation]] by 2+ hours

### Crohn's Disease — IV Iron Only
- **Route**: IV ferric carboxymaltose or iron sucrose; NEVER oral iron in active disease
- **Dose**: Based on Ganzoni formula or simplified dosing (ferric carboxymaltose 500-1000 mg per infusion)
- **Rationale**: Oral iron worsens dysbiosis, increases calprotectin, and feeds [[escherichia-coli]] in inflamed mucosa. High hepcidin blocks oral absorption anyway.
- **Monitoring**: Ferritin, TSAT, CRP, calprotectin

### Chronic Kidney Disease — ESA + IV Iron
- **Route**: IV iron (iron sucrose for dialysis patients; ferric carboxymaltose for non-dialysis)
- **Dose**: Target ferritin 200-500 ng/mL and TSAT 20-30% in dialysis; adjust with ESA co-therapy
- **Rationale**: Hepcidin is chronically elevated from reduced renal clearance and inflammation. Oral iron is ineffective. ESAs require adequate iron availability.
- **Monitoring**: Monthly ferritin and TSAT; avoid ferritin >800 ng/mL (iron overload risk)

---

## Lactoferrin as Alternative

**Lactoferrin** (bovine or recombinant) offers an alternative iron delivery mechanism:
- Binds two Fe3+ ions with extremely high affinity
- Delivers iron via lactoferrin receptors on enterocytes, bypassing the DMT1/hepcidin axis
- Has intrinsic antimicrobial activity (sequesters iron from pathobionts)
- Does NOT feed gut pathobionts like oral ferrous salts
- RCT evidence in pregnancy anemia shows lactoferrin 200 mg/day is as effective as ferrous sulfate 520 mg/day with fewer GI side effects

**Clinical role**: Consider lactoferrin when oral iron is indicated but poorly tolerated, or in mild-moderate deficiency where pathobiont feeding is a concern.

---

## Monitoring

- **Ferritin**: Primary storage marker; <30 ng/mL = deficiency; >500 ng/mL = overload risk. Acute phase reactant -- interpret with CRP.
- **TSAT (transferrin saturation)**: <20% = functional iron deficiency; >45% = overload concern
- **Hepcidin**: The key decision biomarker; distinguishes true from functional deficiency
- **CRP**: Must co-interpret with ferritin (ferritin rises as acute phase reactant)
- **Calprotectin**: In IBD patients, monitor to ensure oral iron is not worsening inflammation
- **Reticulocyte hemoglobin (CHr)**: Real-time marker of iron available for erythropoiesis

---

## Contraindications and Risks

- **Oral iron in active IBD**: Feeds pathobionts, worsens dysbiosis, increases oxidative mucosal damage
- **Iron supplementation in infection**: Iron feeds most bacterial pathogens; avoid during acute infection unless severe anemia
- **Hemochromatosis**: Genetic iron overload; supplementation is dangerous
- **IV iron anaphylaxis**: Rare (<1:200,000 with modern formulations) but requires monitoring during infusion
- **Iron-zinc competition**: High-dose oral iron impairs zinc absorption; separate dosing by 2+ hours
- **Ferroptosis risk**: Excess tissue iron drives ferroptosis in neurodegenerative disease, cancer, and CKD

---

## Connections

**Entities:** [[iron]], [[escherichia-coli]], [[klebsiella-pneumoniae]]

**Concepts:** [[ferroptosis]], [[nutritional-immunity]], [[gut-metal-microbiome]], [[dietary-iron-gut-ecology]], [[glutathione]]

**Related interventions:** [[zinc-supplementation]] (Fe/Zn absorption competition), [[selenium-supplementation]] (GPX requires both Se and Fe-dependent pathways)

**Signatures:** [[postpartum-depression]], [[crohns-disease]], [[chronic-kidney-disease]]
