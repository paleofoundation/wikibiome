---
title: Tryptophan
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [aziz-zadeh-2025-brain-activity-tryptophan-gut-metabolites-asd, yu-2025-faecalibacterium-hominis-indole-ahr-asd-btbr, wang-2023-microbiota-indole-3-propionic-acid-brain-asd-iugr, gevi-2016-urinary-metabolomics-italian-autistic-tryptophan-purine, hoffelner-2025-emerging-therapy-targets-microbiome-cvd, pendergrass-2026-heavy-metals-obesity-epidemic, krawczyk-2025-fmt-fungal-archaeal-species-rat-schizophrenia-model, szeligowski-2020-gut-microbiome-schizophrenia-review, capuco-2020-gut-microbiome-dysbiosis-depression-review, cheng-2025-neuroinflammation-pms-pmdd-review, wehedy-2022-human-microbiome-ckd-double-edged-sword, barba-2021-low-aromatic-amino-acid-diet-ckd, martinelli-2022-gut-oriented-interventions-ms, wang-2023-amino-acid-metabolomics-cerebral-palsy-plasma, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]
source_count: 15
tags: [tryptophan, essential-amino-acid, serotonin, kynurenine, indole, AhR, neurotransmitter, gut-brain-axis, microbiome-metabolites, metal-cofactors]
karen_brain_primitives: [1, 4, 5]
seo_target: "tryptophan gut microbiome"
platform: wikibiome
---

# Tryptophan

**Tryptophan** (Trp) is an essential amino acid that the human body cannot synthesize and must obtain from diet. It occupies a uniquely important position at the intersection of neuroscience, immunology, and microbial ecology because it is the sole precursor to serotonin, a major substrate for the [[kynurenine-pathway]], and the raw material for a suite of microbial metabolites that shape gut-brain communication. What makes tryptophan particularly relevant to the metallomics story is that the enzymes controlling its fate are metal-dependent: the rate-limiting enzymes of the kynurenine pathway (IDO and TDO) both require heme [[iron]] as a cofactor, meaning that metal availability directly determines how tryptophan is metabolized and which downstream products predominate.

## Dietary Sources and Absorption

Tryptophan is the least abundant essential amino acid in the diet, found in protein-rich foods including poultry, eggs, cheese, nuts, seeds, and legumes. Dietary intake typically ranges from 250 to 1,000 mg/day. Absorption occurs primarily in the small intestine via the large neutral amino acid transporter (LAT1), where tryptophan competes with other large neutral amino acids (leucine, isoleucine, valine, phenylalanine, tyrosine) for transport across both the intestinal epithelium and the [[blood-brain-barrier]].

This competition has a practical consequence: the ratio of tryptophan to competing amino acids, rather than absolute tryptophan levels, determines how much reaches the brain. High-protein meals can paradoxically reduce brain tryptophan availability because branched-chain amino acids flood the transporter.

## Three Metabolic Fates

Only about 1% of ingested tryptophan is used for serotonin synthesis. The vast majority is metabolized via three competing pathways, each with distinct biological consequences. For detailed pathway biochemistry, see [[tryptophan-metabolism]].

### The Kynurenine Pathway (~95% of Trp catabolism)

The dominant route, controlled by iron-dependent IDO1/IDO2 (in immune and gut cells) and TDO (in liver). [[inflammation|Inflammation]] upregulates IDO via IFN-gamma, diverting tryptophan away from serotonin and toward kynurenine metabolites. This produces a spectrum of neuroactive compounds ranging from neuroprotective (kynurenic acid) to neurotoxic (quinolinic acid). See [[kynurenine-pathway]] for the full cascade.

The metal dependency here is critical: both IDO and TDO require heme iron, and [[iron]] availability modulates pathway flux. In iron-overloaded inflammatory states, IDO activity increases, amplifying the shift toward neurotoxic metabolites.

### The Serotonin Pathway (~1-2%)

Tryptophan hydroxylase (TPH1 in gut, TPH2 in brain) converts tryptophan to 5-HTP, then to serotonin (5-HT). Approximately 95% of the body's serotonin is produced in the gut by enterochromaffin cells, regulated by gut bacteria -- particularly spore-forming Clostridia. Gut serotonin does not cross the BBB but regulates motility, secretion, and visceral sensation, and signals to the brain via vagal afferents ([[gut-brain-axis]]).

### The Microbial Indole Pathway

Gut bacteria directly metabolize tryptophan via tryptophanase and other enzymes to produce indole derivatives: indole-3-propionic acid (IPA), indole-3-acetic acid (IAA), indole-3-aldehyde (IAld), and tryptamine. These metabolites activate the aryl hydrocarbon receptor ([[ahr|AhR]]) on gut epithelial cells and immune cells, driving IL-22 production and strengthening barrier integrity. IPA produced by *Clostridium sporogenes* is atheroprotective and inversely correlated with arterial plaque burden [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]].

## Metal Connections

Tryptophan metabolism is intimately tied to metal biology through several mechanisms:

- **Iron as IDO/TDO cofactor**: The rate-limiting enzymes of the kynurenine pathway are heme-iron-dependent. Iron dysregulation -- whether excess or deficiency -- alters pathway flux and shifts the balance between neuroprotective and neurotoxic metabolites [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- **Zinc and serotonin**: Zinc is required for aromatic amino acid decarboxylase activity and modulates serotonin receptor binding. Zinc deficiency, common in many of the conditions discussed in this wiki, compounds tryptophan pathway disruption.
- **Manganese and tryptophan hydroxylase**: Mn exposure can alter TPH activity, disrupting serotonin synthesis in both gut and brain.
- **Cadmium and tryptophan depletion**: Cd exposure is associated with altered tryptophan metabolism in animal models, potentially through oxidative depletion of cofactors [[rasin-2025-cadmium-exposure-health-review]].

## Disease Relevance

Tryptophan depletion or pathway imbalance appears across a remarkable range of conditions:

- **Autism spectrum disorder**: Fecal kynurenate, indolelactate, and 5-HTP are significantly lower in ASD children. Brain activity in the insula and cingulate cortex mediates the relationship between tryptophan metabolite levels and ASD severity [[aziz-zadeh-2025-brain-activity-tryptophan-gut-metabolites-asd]].
- **Depression**: The "serotonin hypothesis" is an oversimplification, but IDO-mediated tryptophan steal -- diverting substrate from serotonin to kynurenine -- is well-documented in inflammatory depression [[capuco-2020-gut-microbiome-dysbiosis-depression-review]].
- **Schizophrenia**: Kynurenine pathway dysregulation with elevated kynurenic acid (an NMDA antagonist) is implicated in cognitive deficits [[szeligowski-2020-gut-microbiome-schizophrenia-review]].
- **Chronic kidney disease**: Indoxyl sulfate, a uremic toxin derived from bacterial tryptophan metabolism, is a key driver of CKD progression and cardiovascular complications. See [[tmao|uremic-toxins]] [[wehedy-2022-human-microbiome-ckd-double-edged-sword]].
- **Cardiovascular disease**: Microbial IPA is atheroprotective; its depletion in dysbiosis may accelerate atherosclerosis [[hoffelner-2025-emerging-therapy-targets-microbiome-cvd]].
- **PMDD**: Tryptophan-serotonin pathway alterations are implicated in the neuroinflammatory component of premenstrual dysphoric disorder [[cheng-2025-neuroinflammation-pms-pmdd-review]].
- **Parkinson's disease**: Kynurenine pathway metabolites contribute to neuroinflammation and dopaminergic neuron damage [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Cross-References

- [[tryptophan-metabolism]] -- detailed pathway biochemistry and regulation
- [[kynurenine-pathway]] -- the dominant catabolic route and its neuroactive products
- [[ahr]] -- aryl hydrocarbon receptor activation by microbial indoles
- [[indoles]] -- microbial tryptophan derivatives
- [[serotonin]] -- the neurotransmitter product
- [[iron]] -- cofactor for IDO/TDO
- [[gut-brain-axis]] -- the communication system tryptophan metabolites mediate
- [[microbiome-derived-metabolites]] -- broader context for microbial tryptophan products
- [[neuroinflammation]] -- downstream consequence of kynurenine pathway imbalance
