---
title: "Hypertension — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [fan-2025-fmt-hypertension-rct, zou-2022-mycobiome-dysbiosis-hypertension-light-chains, qiu-2023-gut-mycobiome-hypertension-ckd, hoffelner-2025-emerging-therapy-targets-microbiome-cvd, ryan-2017-bile-acids-gut-microbiome-cardiometabolic-interactions, zhen-2023-tmao-cardiovascular-diseases-review, dixon-2020-probiotics-cvd-risk-systematic-review-meta-analysis, spivak-2023-local-systemic-microbiome-derived-metabolites, mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review, nucera-2024-non-essential-heavy-metals-cvd-systematic-review, liu-2025-nickel-cardio-metabolic-effects]
source_count: 11
tags: [hypertension, cardiovascular-disease, blood-pressure, SCFAs, TMAO, mycobiome, lead, cadmium, nickel, renal-metals]

metallomic_signature:
  elevated: [lead, cadmium, nickel]
  depleted: [magnesium, zinc]

taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "LPS producers; TMAO precursor generation via TMA lyases; iron-scavenging siderophore producers that expand under dysbiosis"
    - taxon: "[[streptococcus]]"
      role: "Oral streptococci translocate to gut; enriched in ACVD microbiome"
    - taxon: "[[prevotella]]"
      role: "Increased in hypertensive F/B ratio shift; Prevotella copri increased by FMT"
    - taxon: "[[klebsiella-pneumoniae]]"
      role: "Increased in hypertension; LPS producer contributing to endothelial dysfunction"
    - taxon: "[[eggerthella]]"
      role: "Enriched by GERD/HTN-associated dysbiosis; pro-inflammatory"
    - taxon: "[[malassezia]]"
      role: "Fungal pathobiont — progressive enrichment from normotensive (low) to pre-HTN to HTN (28.45% dominance); produces inflammatory lipases; correlates with immunoglobulin light chain kappa"
  depleted:
    - taxon: "[[roseburia]]"
      role: "Butyrate producer — loss removes GPR41-mediated vasodilation and gut barrier support"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — depletion reduces anti-inflammatory SCFA production"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — loss impairs propionate-mediated vasodilation via GPR41"
    - taxon: "[[bifidobacterium]]"
      role: "Barrier-supportive commensal; depleted across cardiovascular conditions"
    - taxon: "[[mortierella]]"
      role: "Protective fungus — depleted in both pre-HTN and HTN, paralleling loss of protective bacterial taxa"

nutritional_immunity:
  elevated: [hepcidin, crp, il-6, tnf-alpha, il-2r-alpha, il-18]
  depleted: [glutathione, sod]

ecological_features: [SCFA-depletion, elevated-firmicutes-bacteroidetes-ratio, TMAO-elevation, fungal-dysbiosis, LPS-driven-endotoxemia, bile-acid-disruption]

virulence_enzymes: [TMA-lyases-CutC-CutD, siderophores, LPS-biosynthesis-enzymes, fungal-lipases]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[atherosclerosis]]"
    shared_metals: [lead, cadmium, nickel]
    shared_taxa: [enterobacteriaceae, roseburia-depleted, lachnospiraceae-depleted]
    shared_ecological: [TMAO-elevation, SCFA-depletion, LPS-driven-endotoxemia]
    overlap_score: 0.78
  - condition: "[[chronic-kidney-disease]]"
    shared_metals: [lead, cadmium]
    shared_taxa: [enterobacteriaceae, lachnospiraceae-depleted]
    shared_ecological: [TMAO-elevation, SCFA-depletion]
    overlap_score: 0.62
  - condition: "[[type-2-diabetes]]"
    shared_metals: [lead, cadmium, iron]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [elevated-firmicutes-bacteroidetes-ratio, SCFA-depletion]
    overlap_score: 0.65
  - condition: "[[obesity]]"
    shared_metals: [lead, cadmium, nickel]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, roseburia-depleted]
    shared_ecological: [elevated-firmicutes-bacteroidetes-ratio, SCFA-depletion]
    overlap_score: 0.60

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5, 8, 9]
---

# Hypertension — Microbiome Signature

## Overview

**Hypertension** affects an estimated 1.3 billion adults worldwide and is the leading modifiable risk factor for [[cardiovascular-disease]], stroke, and [[chronic-kidney-disease]]. The gut microbiome-blood pressure axis has emerged as a major research area, with short-chain fatty acids, TMAO, the mycobiome, and microbial metabolites all contributing to blood pressure regulation. Heavy metals — particularly [[lead]] and [[cadmium]] — are established environmental risk factors operating through both direct vascular toxicity and microbiome-mediated pathways. The hypertension signature is notable for its strong mycobiome dimension (Malassezia enrichment) and the opposing SCFA receptor system (GPR41 vasodilation vs. Olfr78 renin release) that links gut dysbiosis directly to blood pressure regulation.

## Metallomic Signature

**Confidence: high**

**Elevated:**
- **Lead (Pb)** — Among the most established environmental risk factors for hypertension. Even low-level chronic exposure (blood Pb <10 ug/dL) is associated with elevated BP. Mechanisms: inhibits endothelial NO synthase, increases oxidative stress, activates RAAS, promotes vascular smooth muscle contraction. Mortality risk rises 5.9-fold at Pb >10 ug/dL in CKD [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Cadmium (Cd)** — Renal nephrotoxicity damages tubules, impairing sodium handling and BP regulation. Cd-induced oxidative stress in vascular endothelium promotes arterial stiffness. Correlates with hypertension even at low concentrations (<1 ug/L plasma); 14 studies in Martins 2021 meta-analysis showed positive BP association [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Nickel (Ni)** — Urinary nickel in the highest quartile associates with 3.57-fold increased CVD risk (NHANES). Nickel exposure correlates with metabolic syndrome features including elevated fasting glucose, hypertension, and dyslipidemia. Mechanism involves SOD depletion and glutathione reduction [[liu-2025-nickel-cardio-metabolic-effects]].

**Depleted:**
- **Magnesium** — Chronic PPI use (common in comorbid GERD) reduces magnesium absorption; Mg deficiency contributes to vascular tone dysregulation.
- **Zinc** — Disrupted by Pb/Cd displacement from metalloenzyme binding sites; Cu/Zn homeostasis disrupted by lead exposure [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].

## Environmental Exposures

- **Lead**: Ubiquitous in soil, food, water, cosmetics, and tobacco. Accumulates in kidney, impairing renal BP regulation. Above reference levels causes 2.24x BP association [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **Cadmium**: Accumulates in renal cortex over decades; renal Cd burden correlates with hypertension risk. Smokers show significantly higher Cd in blood/urine.
- **Nickel**: Dietary exposure through plant-based foods, occupational exposure, and environmental contamination.
- **Renal metal accumulation**: The kidney is a primary target organ for both Pb and Cd. Metal-induced renal damage impairs the kidney's central role in long-term BP regulation (sodium excretion, RAAS modulation, prostaglandin synthesis), creating a direct metal-to-hypertension pathway independent of the microbiome.

## Nutritional Immunity Response

**Confidence: moderate**

**Elevated:**
- **Hepcidin** — Elevated in chronic inflammatory states associated with hypertension.
- **CRP** — Low-grade inflammation consistently elevated; CRP positively associated with Serratia abundance and arterial wall changes [[kashtanova-2017-gut-microbiota-vascular-biomarkers-subclinical-cvd]].
- **IL-6, TNF-alpha** — Pro-inflammatory cytokines driving vascular remodeling.
- **IL-2Ralpha, IL-18** — Elevated in HTN+CKD comorbidity; Candida negatively associated with TNF-alpha [[qiu-2023-gut-mycobiome-hypertension-ckd]].

**Depleted:**
- **Glutathione** — Depleted by Pb, Cd, Ni, and Hg through oxidative stress; all four non-essential metals drive CVD through ROS/oxidative stress and glutathione/SOD/catalase depletion [[nucera-2024-non-essential-heavy-metals-cvd-systematic-review]].
- **SOD (superoxide dismutase)** — Depleted by nickel exposure; critical antioxidant metalloenzyme.

## Taxonomic Analysis

**Confidence: high**

### Enriched Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[enterobacteriaceae]] | LPS producers; TMA lyase gene enrichment (CutC/D, YeaW/X) for TMAO production; siderophore-mediated iron acquisition | [[jie-2017-gut-microbiome-acvd]], [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]] |
| [[streptococcus]] spp. | Oral streptococci relatively higher in gut microbiome of ACVD patients vs. controls | [[jie-2017-gut-microbiome-acvd]], [[herrema-2020-microbiome-cardiovascular-disease-ascvd]] |
| [[prevotella]] | Increased in hypertensive Firmicutes/Bacteroidetes ratio shift; P. copri increased by FMT | [[fan-2025-fmt-hypertension-rct]], [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]] |
| [[klebsiella-pneumoniae]] | Increased in hypertension; LPS producer | [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]] |
| [[malassezia]] (fungal) | Progressive enrichment: 28.45% dominance in HTN vs. lower in NT; inflammatory lipases; correlates with Ig light chain kappa (r=0.510, P=0.044) | [[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]] |

### Depleted Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[roseburia]] | Butyrate producer — loss removes GPR41-mediated vasodilatory brake on BP | [[jie-2017-gut-microbiome-acvd]], [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]] |
| [[faecalibacterium-prausnitzii]] | Major butyrate producer — depletion reduces anti-inflammatory SCFA production | [[jie-2017-gut-microbiome-acvd]] |
| [[lachnospiraceae]] | SCFA producers — loss impairs propionate-mediated vasodilation | [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]] |
| [[bifidobacterium]] | Barrier-supportive commensal; depleted in CVD conditions | Multiple sources |
| [[mortierella]] (fungal) | Protective fungus — depleted in both pre-HTN and HTN, paralleling bacterial taxa losses | [[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]] |

### FMT Evidence (First Human RCT)

Fan et al. 2025 conducted the first multicenter RCT of oral FMT for stage 1 hypertension (n=124, 7 centers) [[fan-2025-fmt-hypertension-rct]]:
- Transient SBP reduction at 1 week: -4.34 mmHg between-arm difference (P=0.024), not persisting at day 30
- Age >48 subgroup: significant SBP reduction of 7.65 mmHg (P=0.029)
- Microbial shifts: increased Parabacteroides merdae, Prevotella copri, Eubacterium sp.; decreased Eggerthella lenta, Streptococcus vestibularis
- Implication: microbial BP modulation is real but transient, suggesting sustained intervention is needed

## Virulence Enzymes and Features

**Confidence: moderate**

- **TMA lyases (CutC/D, YeaW/X)** — Enriched in ACVD microbiome; convert dietary choline, phosphatidylcholine, and L-carnitine to TMA, which liver FMO3 oxidizes to TMAO [[jie-2017-gut-microbiome-acvd]], [[zhen-2023-tmao-cardiovascular-diseases-review]].
- **Siderophores** — Enterobacteriaceae iron acquisition systems; expanded in dysbiotic hypertensive gut.
- **LPS biosynthesis enzymes** — Enriched in ACVD microbiome; LPS activates TLR4-mediated NADPH oxidase pathway generating ROS [[jie-2017-gut-microbiome-acvd]], [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].
- **Fungal lipases** — Malassezia-produced inflammatory lipases activate immune cells, compounding bacterial dysbiosis-driven inflammation [[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]].

## Ecological State

**Confidence: high**

The hypertensive gut ecosystem is characterized by multiple interacting metabolite and ecological disruptions:

- **SCFA depletion** — Loss of Roseburia, F. prausnitzii, and Lachnospiraceae reduces butyrate, propionate, and acetate production. SCFAs regulate BP through opposing receptor systems: GPR41 (vasodilation, net BP reduction at physiological concentrations) vs. Olfr78 (renal renin release, BP increase). SCFA depletion removes the vasodilatory brake [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]], [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].
- **Elevated Firmicutes/Bacteroidetes ratio** — Characteristic of hypertensive and TMAO-elevated microbiomes [[zhen-2023-tmao-cardiovascular-diseases-review]].
- **TMAO elevation** — TMAO activates pro-inflammatory vascular remodeling, HMGB1/TLR4 signaling, tight junction destruction, endothelial dysfunction, and platelet hyperreactivity [[zhen-2023-tmao-cardiovascular-diseases-review]].
- **Fungal dysbiosis** — Malassezia enrichment occurs at the pre-hypertension stage, suggesting it precedes clinical disease. HTN+CKD comorbidity shows the most severe mycobiome disruption [[zou-2022-mycobiome-dysbiosis-hypertension-light-chains]], [[qiu-2023-gut-mycobiome-hypertension-ckd]].
- **LPS-driven endotoxemia** — Enterobacteriaceae-derived LPS causes endothelial dysfunction through TLR4-mediated oxidative pathway and vascular inflammation through p38MAPK/NF-kB [[mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review]].
- **Bile acid disruption** — FXR agonist CDCA reduces blood pressure in spontaneously hypertensive rats through iNOS expression; FXR downregulation compounds SCFA depletion [[ryan-2017-bile-acids-gut-microbiome-cardiometabolic-interactions]].

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[atherosclerosis]]** | Pb, Cd, Ni | Enterobacteriaceae, Roseburia depleted, Lachnospiraceae depleted | TMAO elevation, SCFA depletion, LPS endotoxemia | 0.78 |
| **[[chronic-kidney-disease]]** | Pb, Cd | Enterobacteriaceae, Lachnospiraceae depleted | TMAO elevation, SCFA depletion | 0.62 |
| **[[type-2-diabetes]]** | Pb, Cd, Fe | Enterobacteriaceae, F. prausnitzii depleted, Lachnospiraceae depleted | Elevated F/B ratio, SCFA depletion | 0.65 |
| **[[obesity]]** | Pb, Cd, Ni | Enterobacteriaceae, F. prausnitzii depleted, Roseburia depleted | Elevated F/B ratio, SCFA depletion | 0.60 |

The overlap with atherosclerosis is particularly high (0.78), reflecting the shared cardiometabolic disease continuum where hypertension and atherosclerosis share nearly identical metallomic burdens, taxonomic disruptions, and metabolite pathways.

## Open Questions

1. Can sustained microbiome restoration (repeated FMT, targeted probiotics) produce durable blood pressure reduction beyond the transient 1-week effect observed in Fan et al. 2025?
2. Does Malassezia-targeted antifungal therapy reduce BP in patients with documented fungal dysbiosis?
3. What is the relative contribution of direct metal vascular toxicity vs. microbiome-mediated metabolite pathways to hypertension?
4. Can TMA lyase inhibitors (3,3-DMB) reduce TMAO and lower BP in hypertensive patients?
5. Does combined Pb+Cd chelation plus microbiome restoration produce synergistic BP reduction?
6. Is the Mortierella depletion a cause or consequence of hypertension — and can Mortierella supplementation be protective?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Pb and Cd accumulation in kidneys selects for metal-tolerant organisms while impairing renal BP regulation; Ni drives SOD depletion and oxidative stress.
- **Primitive 2 (Nutritional Immunity as Interpretive Constraint)**: Elevated hepcidin and CRP reflect systemic inflammatory response; iron supplementation may feed siderophore-producing Enterobacteriaceae.
- **Primitive 3 (Mis-metallation and Toxic Metal Entry)**: Pb/Cd displace Ca2+, Zn, Cu from metalloenzymes (eNOS, Na+/K+ ATPase, SOD), directly impairing vascular function.
- **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels)**: Enterobacteriaceae depend on iron (siderophores); restricting iron access could reduce their TMAO-producing and LPS-generating capacity.
- **Primitive 5 (Two-Sided Ecological Engineering)**: Suppress TMAO-producing Enterobacteriaceae AND restore SCFA-producing Roseburia/Faecalibacterium/Lachnospiraceae to re-engage the GPR41 vasodilatory brake.
- **Primitive 8 (Siderophore Competition and Iron Ecology)**: Enterobacteriaceae siderophore production in ACVD represents an iron ecology problem; competitive exclusion via beneficial siderophore producers warrants investigation.
- **Primitive 9 (Oxygen State as Ecological Determinant)**: SCFA-producing obligate anaerobes (Roseburia, F. prausnitzii) are depleted, suggesting colonic oxygenation shift may be contributing to dysbiosis.
