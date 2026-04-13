---
title: "Vitamin D Supplementation"
type: intervention
created: 2026-04-09
updated: 2026-04-09
sources: []
tags: [supplement, vitamin-d, immunomodulation, autoimmune, evidence-based]
intervention_class: supplement
cureva_status: partial

triangles:
  - condition: "[[multiple-sclerosis]]"
    I_to_f: "Vitamin D activates VDR on T cells, promoting Treg differentiation and suppressing Th17 responses. Restores immune tolerance and reduces pro-inflammatory cytokine production (IL-17, IFN-gamma). Enhances intestinal barrier integrity via VDR-mediated tight junction expression."
    I_to_f_evidence: "strong"
    I_to_D: "Multiple RCTs (SOLAR, CHOLINE, D-Lay-MS) demonstrate that high-dose vitamin D (4000-7000 IU/day) reduces new T2 lesions on MRI and annualized relapse rate. VITAL subgroup and Mendelian randomization studies confirm causal relationship between 25(OH)D levels and MS risk."
    I_to_D_evidence: "RCT"
    f_to_D: "25(OH)D levels <30 nmol/L associate with 2-fold increased MS risk. Latitude gradient of MS incidence mirrors UV/vitamin D availability. Vitamin D deficiency precedes disease onset and predicts worse EDSS progression."
    status: validated

  - condition: "[[hashimotos-thyroiditis]]"
    I_to_f: "VDR activation suppresses Th1-driven autoimmune thyroiditis. Vitamin D reduces anti-TPO antibody production and modulates dendritic cell tolerogenicity. Synergistic with selenium — both required for thyroid antioxidant defense."
    I_to_f_evidence: "moderate"
    I_to_D: "RCTs show vitamin D (2000-4000 IU/day) combined with selenium (200 ug/day) reduces anti-TPO titers more than either alone. Vitamin D monotherapy shows inconsistent results; combination with selenium appears necessary."
    I_to_D_evidence: "RCT"
    f_to_D: "Hashimoto's patients have significantly lower 25(OH)D than controls. Vitamin D deficiency correlates with higher anti-TPO and anti-Tg titers. VDR polymorphisms associate with Hashimoto's susceptibility."
    status: promising

  - condition: "[[inflammatory-bowel-disease]]"
    I_to_f: "VDR is highly expressed in colonic epithelium; activation maintains barrier integrity, promotes antimicrobial peptide secretion (cathelicidin, beta-defensins), and suppresses NF-kB-driven inflammation. Vitamin D modulates the gut microbiome composition toward anti-inflammatory taxa."
    I_to_f_evidence: "moderate"
    I_to_D: "RCTs in Crohn's disease show 2000-4000 IU/day reduces relapse rates. UC evidence is less robust but supportive. The Cochrane review notes moderate-quality evidence for maintaining remission."
    I_to_D_evidence: "RCT"
    f_to_D: "IBD patients show 25(OH)D deficiency in 30-60% of cases. Low vitamin D predicts flares, hospitalizations, and surgery. VDR knockout mice develop spontaneous colitis."
    status: promising

  - condition: "[[depression]]"
    I_to_f: "VDR is expressed throughout the brain, particularly in hippocampus and prefrontal cortex. Vitamin D regulates serotonin synthesis (activates TPH2 transcription), BDNF expression, and neuroinflammatory pathways. Modulates HPA axis reactivity."
    I_to_f_evidence: "moderate"
    I_to_D: "Meta-analyses of RCTs show modest but significant antidepressant effect of vitamin D supplementation (2000-4000 IU/day), particularly in patients with documented deficiency. Effect size larger in clinical depression than subclinical symptoms."
    I_to_D_evidence: "RCT"
    f_to_D: "25(OH)D levels inversely correlate with depression severity across multiple cohort studies. Deficiency is more prevalent in depressed patients than matched controls. Seasonal depression mirrors vitamin D seasonal variation."
    status: promising

  - condition: "[[pcos]]"
    I_to_f: "Vitamin D deficiency in PCOS compounds insulin resistance (VDR modulates insulin receptor signaling), hyperandrogenism, and chronic low-grade inflammation. VDR activation in ovarian theca cells modulates androgen synthesis."
    I_to_f_evidence: "moderate"
    I_to_D: "RCTs show vitamin D supplementation (2000-4000 IU/day) combined with probiotics improves HOMA-IR, total testosterone, and menstrual regularity in PCOS. Vitamin D alone improves 25(OH)D and some metabolic markers; combination with probiotics shows synergistic metabolic benefit."
    I_to_D_evidence: "RCT"
    f_to_D: "PCOS patients are vitamin D deficient in 67-85% of cases. 25(OH)D levels correlate inversely with HOMA-IR, free testosterone, and AMH in PCOS. VDR polymorphisms associate with PCOS susceptibility."
    status: promising

targets:
  taxa: []
  enzymes: [VDR, CYP27B1, CYP24A1, TPH2]
  metals: []
  ecological: [Treg-induction, Th17-suppression, barrier-integrity, antimicrobial-peptide-secretion]
platform: cureva
---

## Overview

**Vitamin D supplementation** provides the secosteroid hormone precursor that activates the vitamin D receptor (VDR) -- a nuclear receptor expressed in virtually every immune cell, enterocyte, and neuron. Vitamin D deficiency is pandemic (estimated 1 billion people worldwide) and intersects with autoimmune, neurological, metabolic, and gastrointestinal diseases through immunomodulatory, barrier-protective, and neuroendocrine pathways.

> **Clinical disclaimer:** Vitamin D supplementation should be guided by measured 25(OH)D levels. Target 40-60 ng/mL (100-150 nmol/L) for autoimmune and neurological conditions. Doses above 4000 IU/day require monitoring to avoid hypercalcemia. Vitamin D is fat-soluble and accumulates; toxicity is rare below 10,000 IU/day but possible with impaired renal function. All dosing decisions require clinical supervision.

---

## Mechanism of Action

Vitamin D operates through three primary pathways:

1. **Immune modulation**: VDR activation on T cells promotes Treg differentiation (IL-10, TGF-beta), suppresses Th17 polarization (IL-17, IL-22), and induces tolerogenic dendritic cells. This rebalances the Th17/Treg axis disrupted in autoimmune diseases.

2. **Barrier integrity**: VDR in intestinal epithelium upregulates tight junction proteins (claudin-2, occludin, ZO-1) and antimicrobial peptides (cathelicidin LL-37, beta-defensin 2). Deficiency increases intestinal permeability.

3. **Neuroendocrine regulation**: VDR in hippocampal and prefrontal neurons activates TPH2 (tryptophan hydroxylase 2) transcription, directly increasing brain serotonin synthesis. Also upregulates BDNF and modulates HPA axis reactivity.

---

## Dosage and Administration

| Condition | Dose | Form | Duration | Notes |
|-----------|------|------|----------|-------|
| [[multiple-sclerosis]] | 4000 IU/day (up to 7000 IU/day in trials) | Cholecalciferol (D3) | Ongoing | Target 25(OH)D 40-60 ng/mL; adjunct to DMT |
| [[hashimotos-thyroiditis]] | 2000-4000 IU/day | Cholecalciferol (D3) | Ongoing | Combine with [[selenium-supplementation]] 200 ug/day |
| [[inflammatory-bowel-disease]] | 2000-4000 IU/day | Cholecalciferol (D3) | Ongoing | Higher doses during flares; monitor absorption |
| [[depression]] | 2000-4000 IU/day | Cholecalciferol (D3) | 8-12 weeks minimum | Best evidence in documented deficiency |
| [[pcos]] | 2000-4000 IU/day | Cholecalciferol (D3) | 12+ weeks | Combine with [[probiotics-general]] for synergistic metabolic effect |

**General notes:**
- Cholecalciferol (D3) is preferred over ergocalciferol (D2) for efficacy and half-life
- Take with a fat-containing meal to optimize absorption
- Loading doses (50,000 IU weekly for 8 weeks) appropriate for severe deficiency (<20 ng/mL)
- Maintenance range: 2000-4000 IU/day for most adults

---

## Monitoring

- **25(OH)D (calcidiol)**: The standard monitoring biomarker. Measure at baseline, 8-12 weeks, then every 6 months.
  - Deficiency: <20 ng/mL (<50 nmol/L)
  - Insufficiency: 20-30 ng/mL (50-75 nmol/L)
  - Optimal for autoimmune/neurological: 40-60 ng/mL (100-150 nmol/L)
  - Toxicity concern: >100 ng/mL (>250 nmol/L)
- **Calcium (serum)**: Check at baseline and if dosing >4000 IU/day; hypercalcemia is the primary toxicity
- **PTH (parathyroid hormone)**: Elevated PTH with low 25(OH)D confirms functional deficiency
- **1,25(OH)2D (calcitriol)**: NOT a routine monitoring marker (short half-life, tightly regulated); useful only in granulomatous disease or renal failure

---

## Contraindications and Risks

- **Hypercalcemia**: Primary toxicity risk; more likely with granulomatous diseases (sarcoidosis, tuberculosis) where unregulated 1-alpha-hydroxylase converts 25(OH)D to active calcitriol
- **Renal impairment**: Reduced calcitriol clearance increases hypercalcemia risk; dose adjustment required
- **Hyperphosphatemia**: May compound in CKD
- **Drug interactions**: Corticosteroids reduce vitamin D efficacy; thiazide diuretics increase calcium retention
- **Fat malabsorption**: IBD, celiac, or short-bowel patients may require higher doses or intramuscular administration

---

## Connections

**Entities:** [[selenium]], [[zinc]], [[iron]]

**Concepts:** [[immune-balance]], [[intestinal-permeability]], [[gut-brain-axis]], [[neuroinflammation]], [[dysbiosis]]

**Related interventions:** [[selenium-supplementation]] (synergistic in Hashimoto's), [[probiotics-general]] (synergistic in PCOS), [[zinc-supplementation]] (complementary immune support)

**Signatures:** [[multiple-sclerosis]], [[hashimotos-thyroiditis]], [[inflammatory-bowel-disease]], [[depression]], [[pcos]]
