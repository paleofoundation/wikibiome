---
title: Coronary Artery Disease
type: entity
subtype: disease
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-22
sources:
  - mcvary-2007-erectile-dysfunction-clinical-review
  - liu-2019-gut-microbiome-metabolism-cad-severity
  - rahman-2022-gut-microbiota-cvd-therapeutic-regulation
  - tonelli-2023-oral-microbiome-cvd-pathophysiology
  - dai-2024-gut-microbiota-cvd-bidirectional-mr
  - wang-2023-gut-microbiota-cad-mi-mendelian-randomization
  - toya-2020-coronary-artery-disease-altered-gut-microbiome
  - zhen-2023-tmao-cardiovascular-diseases-review
source_count: 8
tags: [coronary-artery-disease, CAD, atherosclerosis, TMAO, microbiome, copper, selenium, lead, cadmium, CVD, plaque, endothelial-dysfunction, SCFAs, bile-acids]
platform: wikibiome
icd_10: "I25"
global_prevalence: "~7-9% of adults; leading global cause of death (~9 million deaths/year)"
associated_conditions: [cardiovascular-disease, atherosclerosis, type-2-diabetes, hypertension, chronic-kidney-disease, erectile-dysfunction]
shared_signature_metals: {cardiovascular-disease: [copper, selenium-depleted, lead, cadmium], atherosclerosis: [copper, iron, lead], type-2-diabetes: [cadmium, nickel, iron], hypertension: [lead, cadmium]}
shared_signature_taxa: {cardiovascular-disease: [enterobacteriaceae, lachnospiraceae, roseburia-depleted, faecalibacterium-depleted], atherosclerosis: [enterobacteriaceae, fusobacterium-nucleatum], type-2-diabetes: [enterobacteriaceae, escherichia-coli, roseburia-depleted]}
seo_target: "coronary artery disease microbiome TMAO gut bacteria plaque"
wikipedia_differentiation: "Gut microbial metabolite-driven plaque progression with TMAO-bile acid-SCFA metabolic profiling correlated to stenosis severity; oral-to-coronary bacterial translocation into atherosclerotic plaques; Cu/Se ratio as metallomic marker for acute coronary events"
---

# Coronary Artery Disease

## Overview

Coronary artery disease (CAD) -- the progressive narrowing of coronary arteries by atherosclerotic plaque -- is the single leading cause of death globally, responsible for approximately 9 million deaths annually. CAD encompasses stable angina, unstable angina, and myocardial infarction (heart attack). While conventional risk factors (hypertension, dyslipidemia, smoking, diabetes) are well established, the gut microbiome adds an underappreciated dimension: microbial metabolites directly promote plaque formation, bacteria translocate into arterial plaques, and the metal environment modulates both microbial and vascular pathology.

CAD is closely related to the broader [[cardiovascular-disease]] and [[atherosclerosis]] pages in this wiki, but is distinguished by its focus on coronary-specific pathology and the increasingly detailed metabolomic-microbiome data linking gut bacteria to plaque severity.

## Metallomic Signature

CAD shares the metallomic profile described for acute cardiovascular events (see [[cardiovascular-disease]]):

| Metal | Direction | Mechanism |
|-------|-----------|-----------|
| [[copper]] | Elevated | Ceruloplasmin acute-phase response; oxidative damage to LDL |
| [[selenium]] | Depleted | Impaired selenoprotein antioxidant defense (GPX1, GPX4) |
| [[iron]] | Dysregulated | Free iron catalyzes LDL oxidation; heme iron from dietary red meat |
| [[lead]] | Chronic elevation | Hypertension, endothelial dysfunction, accelerated atherosclerosis |
| [[cadmium]] | Chronic elevation | Smoking-associated; vascular endothelial toxicity |

### Cu/Se Ratio

The Cu/Se ratio is the most discriminating metallomic marker for acute coronary events, capturing both copper elevation and selenium depletion in a single metric. This ratio, combined with Fe/Cu, achieves an AUC of 0.942 for AMI prediction in random forest modeling.

## Microbiome Associations

### Gut Microbiome in CAD

CAD patients have distinct gut microbial communities compared to healthy controls [[toya-2020-coronary-artery-disease-altered-gut-microbiome]]:

- Enriched: [[enterobacteriaceae]], [[escherichia-coli]], Streptococcus, Lactobacillales
- Depleted: [[roseburia]], [[faecalibacterium-prausnitzii]], [[coprococcus]], Eubacterium -- butyrate producers
- Functional: Increased TMAO production, reduced SCFA biosynthesis, altered bile acid metabolism

### Metabolomic Correlation with Stenosis Severity

A critical observation: gut microbiome metabolic capacity correlates with CAD severity [[liu-2019-gut-microbiome-metabolism-cad-severity]]:

- Patients with more severe coronary stenosis (higher Gensini scores) show more pronounced dysbiosis
- TMAO-producing bacterial pathways are enriched in proportion to plaque burden
- SCFA-producing pathways are depleted in proportion to disease severity
- This suggests a dose-response relationship between microbial metabolic output and coronary pathology

## TMAO: The Microbial Metabolite Driving Plaque

[[tmao|Trimethylamine N-oxide (TMAO)]] is the most direct metabolite link between gut bacteria and CAD:

1. Dietary choline, carnitine, and betaine (red meat, eggs, dairy) are metabolized by gut bacteria to trimethylamine (TMA)
2. TMA is absorbed and oxidized to TMAO by hepatic FMO3
3. TMAO promotes atherosclerosis through:
   - Enhanced macrophage foam cell formation (cholesterol uptake, impaired efflux)
   - Increased platelet hyperreactivity and thrombosis risk
   - Promotion of endothelial inflammation
   - Altered bile acid and cholesterol metabolism

TMAO levels predict cardiovascular events independent of traditional risk factors, and the TMAO-producing capacity of an individual's microbiome is a modifiable risk factor.

## Oral-to-Coronary Bacterial Translocation

Oral bacteria, particularly [[porphyromonas-gingivalis]] and other periodontal pathogens, have been detected within coronary atherosclerotic plaques:

- Periodontal disease is an independent CAD risk factor
- Oral bacteria reach coronary arteries via transient bacteremia during dental procedures, eating, and tooth brushing
- Within plaques, bacteria sustain local inflammation and may contribute to plaque instability
- The oral microbiome is therefore a direct contributor to coronary pathology, not merely a systemic inflammation marker

## SCFA Protection

Butyrate and propionate from gut commensals protect against CAD through:

- Anti-inflammatory signaling: Butyrate suppresses NF-kB in vascular endothelial cells
- Blood pressure regulation: Propionate activates Olfr78 and GPR41 receptors, modulating renin secretion
- Barrier integrity: SCFAs maintain intestinal barrier, preventing LPS-driven endothelial activation
- Cholesterol metabolism: SCFAs influence hepatic cholesterol synthesis

The depletion of SCFA-producing bacteria in CAD removes these protective effects.

## Associated Conditions

| Condition | Relationship | Shared Metallomic/Microbiome Features |
|-----------|-------------|--------------------------------------|
| [[atherosclerosis]] | CAD is atherosclerosis of the coronary arteries | Same process, same taxa, same metals |
| [[type-2-diabetes]] | Major risk factor; 2-4x CAD risk | Cadmium, Enterobacteriaceae enrichment, SCFA depletion |
| [[hypertension]] | Major risk factor | Lead, cadmium vascular toxicity |
| [[chronic-kidney-disease]] | Bidirectional risk | Lead/cadmium retention, uremic toxins, TMAO |
| [[erectile-dysfunction]] | Sentinel marker (ED precedes CAD by 3-5 years) | Shared endothelial dysfunction, same gut-vascular axis |

## Open Questions

- Can TMAO-lowering interventions (dietary or microbial) reduce coronary events in clinical trials?
- Does the oral microbiome composition predict CAD independent of periodontal disease severity?
- Can the Cu/Se ratio serve as a screening biomarker for subclinical CAD?
- Do statin-microbiome interactions (see [[statins]]) contribute to cardiovascular protection beyond cholesterol lowering?
- Can precision probiotics targeting butyrate production reduce CAD progression?

## Key Studies

- [[toya-2020-coronary-artery-disease-altered-gut-microbiome]] -- gut microbiome composition in CAD
- [[liu-2019-gut-microbiome-metabolism-cad-severity]] -- metabolomic correlation with stenosis severity

## Cross-References

- [[cardiovascular-disease]] -- broader CVD context
- [[atherosclerosis]] -- underlying pathological process
- [[tmao]] -- microbial metabolite driving plaque
- [[butyrate]] -- protective SCFA depleted in CAD
- [[copper]] -- elevated acute-phase metal
- [[selenium]] -- depleted antioxidant cofactor
- [[erectile-dysfunction]] -- sentinel marker condition
- [[statins]] -- primary pharmacotherapy
