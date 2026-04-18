---
title: "Selenium Supplementation"
type: intervention
created: 2026-04-09
updated: 2026-04-09
last_substantive_update: 2026-04-09
sources: []
tags: [supplement, selenium, thyroid, antioxidant, selenoprotein, evidence-based]
intervention_class: supplement
cureva_status: partial
karen_brain_primitives: [1, 2, 4]

triangles:
  - condition: "[[hashimotos-thyroiditis]]"
    I_to_f: "Selenium is the essential cofactor for selenoprotein synthesis — GPX1-4 (glutathione peroxidases), TrxR (thioredoxin reductases), and deiodinases (T4→T3 conversion). Supplementation restores antioxidant defense in thyroid tissue, reducing oxidative damage that drives autoimmune attack."
    I_to_f_evidence: "strong"
    I_to_D: "200 ug/day selenomethionine reduces anti-TPO antibodies by approximately 40% in multiple RCTs. Meta-analyses confirm significant anti-TPO reduction at 3-6 months."
    I_to_D_evidence: "RCT"
    f_to_D: "Thyroid has the highest selenium concentration per gram of any organ. Selenoprotein deficiency increases thyrocyte oxidative stress, driving autoimmune thyroiditis. Anti-TPO titers correlate with selenoprotein activity."
    status: validated

  - condition: "[[graves-disease]]"
    I_to_f: "Restores selenoprotein-dependent antioxidant capacity in hyperthyroid thyroid tissue. Selenium-dependent deiodinases regulate T4/T3 conversion; restoring balance may attenuate hyperthyroid state."
    I_to_f_evidence: "moderate"
    I_to_D: "CATALYST trial and smaller RCTs show selenium supplementation improves quality of life and may accelerate remission in mild Graves' ophthalmopathy. Evidence for biochemical hyperthyroidism resolution is preliminary."
    I_to_D_evidence: "RCT"
    f_to_D: "Graves' thyroid tissue shows depleted selenoprotein expression. Oxidative stress amplifies TSH-receptor antibody-driven thyrocyte activation."
    status: promising

  - condition: "[[metal-carcinogenesis|prostate-cancer]]"
    I_to_f: "Selenium-dependent GPX enzymes and TrxR detoxify reactive oxygen species in prostatic epithelium. Selenomethionine also modulates NF-kB and androgen receptor signaling."
    I_to_f_evidence: "moderate"
    I_to_D: "SELECT trial found no benefit with selenomethionine 200 ug/day in selenium-replete men. However, subgroup analyses and earlier NPC trial showed 52% reduction in prostate cancer incidence in men with LOW baseline selenium (<106 ng/mL). Benefit appears confined to selenium-deficient populations."
    I_to_D_evidence: "RCT"
    f_to_D: "Prostate tissue accumulates selenium; low selenium status correlates with increased prostate cancer risk in observational studies. GPX1 polymorphisms modify risk."
    status: promising

  - condition: "[[cardiovascular-disease]]"
    I_to_f: "Selenium restores GPX activity in vascular endothelium, reducing lipid peroxidation. The Cu/Se ratio is emerging as a cardiovascular risk biomarker — elevated copper with depleted selenium indicates oxidative vascular stress."
    I_to_f_evidence: "moderate"
    I_to_D: "Observational studies show U-shaped relationship: both low (<70 ng/mL) and high (>150 ng/mL) serum selenium associate with increased CVD risk. Supplementation benefit limited to selenium-deficient populations (Keshan disease is the paradigmatic example)."
    I_to_D_evidence: "cohort"
    f_to_D: "Cu/Se ratio reflects the balance between pro-oxidant copper and antioxidant selenium capacity. Elevated ratio predicts cardiovascular events independently of traditional risk factors."
    status: promising

targets:
  taxa: []
  enzymes: [glutathione-peroxidase-GPX1-4, thioredoxin-reductase-TrxR, iodothyronine-deiodinase-DIO1-3]
  metals: [selenium]
  ecological: [restores-antioxidant-defense, reduces-thyroid-oxidative-stress, modulates-T4-T3-conversion]
platform: cureva
---

> **Research summary — not medical advice.** This page synthesizes published research on a mechanism-level intervention. It is not a clinical recommendation. Consult a qualified healthcare provider before making any changes to diet, supplementation, or treatment.

## Overview

**Selenium supplementation** provides the essential trace element required for synthesis of 25 human selenoproteins, including the glutathione peroxidase family (GPX1-4), thioredoxin reductases (TrxR1-3), and iodothyronine deiodinases (DIO1-3). The thyroid gland has the highest selenium concentration per gram of any human organ, making thyroid autoimmune conditions the primary indication.

> **Clinical disclaimer:** Selenium has a narrow therapeutic window. The difference between therapeutic dose (200 ug/day) and toxicity threshold (400 ug/day) is only 2x. All supplementation should include baseline and follow-up serum selenium monitoring.

---

## Mechanism of Action

Selenium is incorporated as **selenocysteine** (the "21st amino acid") into selenoproteins via a unique UGA codon recoding mechanism. Key functional classes:

- **GPX1-4**: Reduce hydrogen peroxide and lipid hydroperoxides, protecting cell membranes from oxidative damage
- **TrxR1-3**: Regenerate thioredoxin, maintaining intracellular redox balance and regulating NF-kB signaling
- **DIO1-3**: Catalyze T4→T3 conversion (DIO1/2) and T4/T3 inactivation (DIO3), governing thyroid hormone metabolism

In selenium deficiency, these enzymes lose function in a hierarchical manner — brain and endocrine tissues are protected last, but thyroid GPX activity drops early, increasing vulnerability to [[oxidative-stress|hydrogen-peroxide]]-mediated autoimmune attack.

---

## Dosage and Administration

| Parameter | Recommendation |
|-----------|---------------|
| **Form** | Selenomethionine (best absorbed, most studied in RCTs) |
| **Therapeutic dose** | 200 ug/day for autoimmune thyroid conditions |
| **Maintenance dose** | 55-100 ug/day (varies by baseline status) |
| **Duration** | Minimum 3 months for anti-TPO response; 6-12 months for full assessment |
| **Upper limit** | 400 ug/day (includes dietary intake) |
| **Dietary sources** | Brazil nuts (1-2 nuts = ~100 ug; highly variable by soil), seafood, organ meats |

---

## Monitoring

- **Serum selenium**: Baseline and at 3 months. Target range 100-130 ng/mL. Below 70 ng/mL indicates deficiency; above 150 ng/mL increases toxicity risk.
- **Anti-TPO antibodies**: For [[hashimotos-thyroiditis]] — check at baseline, 3 months, 6 months.
- **Cu/Se ratio**: For cardiovascular risk assessment. Elevated ratio warrants selenium repletion before copper reduction.
- **Selenosis signs**: Monitor for garlic breath, brittle nails/hair, GI disturbance, peripheral neuropathy.

---

## Contraindications and Risks

- **Toxicity above 400 ug/day**: Selenosis presents as hair loss, nail brittleness, garlic-odor breath, fatigue, irritability, and peripheral neuropathy. Chronic excess may increase type 2 diabetes risk (SELECT trial signal).
- **Selenium-replete populations**: No benefit demonstrated in individuals with adequate baseline selenium (>106 ng/mL for prostate cancer; >100 ng/mL generally). The SELECT trial's null result likely reflects supplementation of already-replete American men.
- **U-shaped dose-response**: Both deficiency and excess associate with adverse outcomes. "More is not better" applies strongly to selenium.
- **Drug interactions**: May potentiate anticoagulant effects; may interact with statins and cisplatin.

---

## Connections

**Entities:** [[selenium]], [[copper]]

**Concepts:** [[selenium|selenoprotein-synthesis]], [[nutritional-immunity]], [[oxidative-stress]], [[thyroid-autoimmunity]]

**Related interventions:** [[vitamin-d-supplementation]] (synergistic with Se for Hashimoto's), [[iron-management]] (thyroid function requires both Se and Fe)

**Signatures:** [[hashimotos-thyroiditis]], [[graves-disease]], [[cardiovascular-disease]]


---

> **Educational content, not medical advice.** This page describes mechanisms by which the intervention interacts with the microbiome and metal ecology. It is not a treatment recommendation. Clinical decisions about any intervention should be made with a qualified healthcare practitioner who knows your individual history.
