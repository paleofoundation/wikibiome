---
title: Ferroptosis
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads, bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota, mishra-2022-molecular-mechanisms-heavy-metals-ckd, brylinski-2025-trace-elements-thyroid-diseases, scholefield-2024-brain-metallomics-dementia, balali-mood-2021-toxic-mechanisms-five-heavy-metals, zhang-2022-metallomics-cancer-review, doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons, riederer-2021-iron-concert-master-parkinsons]
tags: [ferroptosis, iron, lipid-peroxidation, cell-death, GPX4, Fenton-reaction, neurodegeneration, cancer, gut-pathology]
platform: wikibiome
karen_brain_primitives: [1, 2, 3, 5]
seo_target: "ferroptosis microbiome"
last_substantive_update: 2026-04-09
---

# Ferroptosis

## Definition

Ferroptosis is a form of iron-dependent regulated cell death driven by the accumulation of lipid peroxides on cellular membranes [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[riederer-2021-iron-concert-master-parkinsons]]. Unlike apoptosis or necrosis, ferroptosis requires iron, polyunsaturated fatty acid-containing phospholipids, and the failure of lipid peroxide repair systems -- particularly glutathione peroxidase 4 (GPX4) [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[brylinski-2025-trace-elements-thyroid-diseases]]. The term was coined by Dixon et al. in 2012, but the underlying biochemistry connects directly to long-established observations about iron-mediated oxidative damage via Fenton chemistry [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]].

## Core Biochemistry

### The Fenton Reaction and Lipid Peroxidation

Excess labile (free, non-protein-bound) iron catalyzes Fenton reactions, generating hydroxyl radicals (OH.) from hydrogen peroxide:

> Fe2+ + H2O2 --> Fe3+ + OH. + OH-

These hydroxyl radicals attack polyunsaturated fatty acids (PUFAs) in cell membranes, initiating self-propagating lipid peroxidation chain reactions. When membrane lipid peroxide accumulation exceeds the cell's capacity to repair or neutralize them, the membrane loses integrity and the cell dies.

### GPX4: The Central Brake

Glutathione peroxidase 4 (GPX4) is the primary enzyme that reduces lipid hydroperoxides to non-toxic lipid alcohols, using glutathione (GSH) as a cofactor [[brylinski-2025-trace-elements-thyroid-diseases]]. GPX4 is a selenoprotein (requiring selenium for catalytic activity), which connects ferroptosis vulnerability to selenium status [[zhang-2022-metallomics-cancer-review]]. **Loss of GPX4 function** -- whether through genetic deletion, selenium deficiency, GSH depletion, or pharmacological inhibition -- removes the brake on ferroptotic death and is a critical trigger in tubular cells in CKD, dopaminergic neurons in Parkinson's disease, and several cancers [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]], [[riederer-2021-iron-concert-master-parkinsons]], [[brylinski-2025-trace-elements-thyroid-diseases]].

### Iron Homeostasis and Ferroptosis Susceptibility

The hepcidin-ferroportin axis is the master regulator of systemic iron levels. Key iron transport proteins include DMT1 (SLC11A2) for import and ferroportin (SLC40A1/FPN) for export, with hepcidin acting as a negative regulator. Iron regulatory proteins IRP1 and IRP2 sense cellular iron and adjust transferrin receptor and ferritin expression accordingly. Disruption at any point in this regulatory network can tip cells toward iron overload and ferroptotic vulnerability.

## Ferroptosis in Parkinson's Disease

The connection between iron, ferroptosis, and Parkinson's disease (PD) represents one of the most developed threads in the metal toxicology literature.

### Substantia Nigra Iron Accumulation

Iron accumulation in the substantia nigra (SN) is a hallmark of PD — iron acts as the "concert master" coordinating age-dependent accumulation beyond normal aging [[riederer-2021-iron-concert-master-parkinsons]]. Dopaminergic neurons in the SN are uniquely vulnerable because they contain neuromelanin -- a mixed polymer of eumelanin and pheomelanin components that normally sequesters redox-active iron [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]]. When neuromelanin's iron-binding capacity is exceeded or compromised, free iron catalyzes lipid peroxidation and ferroptotic cell death [[riederer-2021-iron-concert-master-parkinsons]], [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

### The Neuromelanin-Metal Hypothesis

The pheomelanin-eumelanin ratio in neuromelanin may modulate ferroptotic vulnerability. Eumelanin contains catechol and carboxyl groups enabling strong chelation of Fe3+ and Cu2+, whereas pheomelanin's benzothiazine units bind metals less effectively and can themselves catalyze pro-oxidant reactions. Individuals with MC1R loss-of-function variants (e.g., redheads) produce more pheomelanin, potentially reducing neuromelanin iron-chelation capacity in the SN and increasing the labile iron pool available to drive ferroptosis. Epidemiological data show approximately 50-100% increased PD risk in individuals with red hair phenotypes.

### The Gut-Brain Ferroptosis Axis

The Pendergrass framework proposes ferroptosis as the convergent cell death mechanism linking peripheral gut pathology to central dopaminergic neuron loss in PD:

1. Dietary/environmental heavy metals (Fe, Mn, Ni) reshape gut microbial communities, favoring metal-tolerant pathogens over SCFA-producing commensals
2. Loss of gut barrier integrity permits bacterial translocation and systemic inflammation
3. Alpha-synuclein aggregation in the enteric nervous system may be triggered by metal-induced oxidative stress
4. Ferroptosis drives both gut epithelial damage and dopaminergic neuron death

PD patients consistently show reduced Prevotellaceae, Lachnospiraceae, and Faecalibacterium with increased Enterobacteriaceae -- a pattern consistent with metal-driven dysbiosis.

## Ferroptosis in Cancer

Ferroptosis has emerged as a therapeutic target in oncology. Cancer cells with disrupted iron homeostasis or elevated iron requirements may be selectively vulnerable to ferroptosis induction. [[platinum|Platinum]]-based chemotherapy (cisplatin, carboplatin) relies partly on ferroptotic cell death, and platinum resistance converges on ferroptosis evasion via the Keap1-Nrf2-GPX4 axis.

### Thyroid Cancer

GPX4 has been identified as a ferroptosis regulator in thyroid cancer. Additionally, cuproptosis (copper-dependent cell death via FDX1) represents a parallel metal-dependent death pathway in thyroid malignancies. The disulfiram/Cu complex inhibits cancer stem cell activity in thyroid cancer, suggesting therapeutic potential for metal-dependent death induction.

### Metallomic Signatures

Across multiple cancer types, copper is nearly universally elevated while selenium tends to decrease in blood/serum -- a pattern that may reflect both altered antioxidant defense (selenium-dependent GPX4) and disrupted metal homeostasis relevant to ferroptotic susceptibility. Metalloprotein gene variants including GPX1, GPX4, TXNRD1/2 are associated with cancer risk across multiple malignancies.

## Ferroptosis in Kidney Disease

In chronic kidney disease (CKD), iron-dependent phospholipid peroxidation in renal tubular cells represents a key pathological mechanism [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]. GPX4 loss of function is a critical trigger, and iron-restricted diet has shown protective effects in animal models [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]. As CKD progresses and GFR decreases, the ability to eliminate environmental toxicants declines, creating a vicious cycle of metal accumulation, further ferroptotic injury, and progressive kidney damage [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]].

## Ferroptosis in Gut Pathology

Iron homeostasis in the intestinal epithelium directly influences ferroptotic susceptibility. Iron excess in the gut lumen -- whether from dietary sources, supplementation, or impaired regulation -- can drive ferroptotic damage to epithelial cells, compromising barrier integrity. This connects to the broader gut-metal-microbiome relationship: iron deficiency reduces commensal beneficial bacteria (Lactobacillus) while iron excess increases harmful bacteria (Bacteroides, E. coli), and both extremes can contribute to epithelial vulnerability.

## Key Molecular Players

| Component | Role in Ferroptosis |
|-----------|-------------------|
| GPX4 | Primary lipid peroxide detoxification enzyme; its loss triggers ferroptosis |
| Glutathione (GSH) | Essential cofactor for GPX4; depletion sensitizes to ferroptosis |
| Selenium | Required for GPX4 catalytic activity; deficiency impairs defense |
| Transferrin/TfR | Iron import; overexpression increases labile iron pool |
| Ferritin | Iron storage; degradation (ferritinophagy) releases iron |
| Hepcidin | Systemic iron regulator; dysregulation alters tissue iron loading |
| System Xc- | Cystine/glutamate antiporter; provides cysteine for GSH synthesis |
| Neuromelanin | Iron chelator in substantia nigra; composition affects PD risk |

## Key Sources

- [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]
- [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]]
- [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]
- [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]
- [[brylinski-2025-trace-elements-thyroid-diseases]]
- [[scholefield-2024-brain-metallomics-dementia]]
- [[balali-mood-2021-toxic-mechanisms-five-heavy-metals]]
- [[zhang-2022-metallomics-cancer-review]]
- [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]]
- [[riederer-2021-iron-concert-master-parkinsons]]

## Connections to Other Concepts

- [[oxidative-stress]] -- ferroptosis is a specific, regulated outcome of iron-driven oxidative damage
- [[gut-metal-microbiome]] -- iron availability shapes microbial communities and gut epithelial ferroptotic vulnerability
- [[metallomics]] -- brain metallomic profiling can detect iron dysregulation patterns associated with neurodegeneration
- [[mis-metallation]] -- displacement of iron from regulatory proteins can disrupt iron homeostasis controls
- [[environmental-metal-exposure]] -- dietary and environmental iron exposure initiates the causal chain leading to ferroptosis in susceptible tissues
