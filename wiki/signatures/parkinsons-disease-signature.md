---
title: "Parkinson's Disease -- Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md, pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads.md, doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons.md, racette-2017-manganese-parkinsonism-welders.md, scholefield-2024-brain-metallomics-dementia.md, bakulski-2020-heavy-metals-alzheimers-dementias.md, khatoon-2023-gut-microbiota-neurodegenerative.md, alonso-garcia-2021-gut-microbiota-proteinopathies.md, bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota.md, gao-2023-microglia-neurodegenerative-diseases.md, gentile-2020-diet-microbiota-brain-health.md, chin-chan-2015-environmental-pollutants-ad-pd.md, giambo-2021-toxic-metal-exposure-gut-microbiota-review.md, rasin-2025-cadmium-exposure-health-review.md, ghosh-2023-heavy-metals-gut-barrier-integrity.md]
source_count: 15
tags: [neurodegenerative-disease, iron, manganese, copper, ferroptosis, alpha-synuclein, neuromelanin, gut-brain-axis, microbiome, dopaminergic-neurons]

metallomic_signature:
  elevated: [iron-substantia-nigra, manganese-basal-ganglia, lead, cadmium, mercury, nickel]
  depleted: [copper-brain, zinc-serum, selenium, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "Iron-pirating siderophore producers; metal-tolerant pathobionts that outcompete commensals under high-iron conditions"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucin-degrading species consistently increased in PD; may reflect mucosal barrier changes rather than direct pathogenicity"
    - taxon: "[[escherichia-coli]]"
      role: "Curli amyloid producer -- cross-seeds alpha-synuclein aggregation; LPS-driven neuroinflammation"
    - taxon: "[[porphyromonas]]"
      role: "Pro-inflammatory Gram-negative genus enriched in PD gut"
    - taxon: "[[lactobacillus]]"
      role: "Paradoxically enriched in PD (despite being considered beneficial); may reflect compensatory expansion or altered niche availability"
    - taxon: "[[helicobacter-pylori]]"
      role: "Ni-dependent urease producer; H. pylori and SIBO are triggering factors for PD"
  depleted:
    - taxon: "[[prevotella]]"
      role: "Major SCFA producer; reduced Prevotellaceae is the most consistent PD dysbiosis finding across multiple meta-analyses"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family; depletion reduces butyrate availability for gut barrier and BBB maintenance"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Anti-inflammatory butyrate producer; depletion contributes to systemic inflammation and neuroinflammation"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer; depletion impairs gut barrier integrity"
    - taxon: "[[blautia]]"
      role: "Anti-inflammatory SCFA producer; depleted in PD"
    - taxon: "[[coprococcus]]"
      role: "SCFA producer depleted in PD; associated with reduced fecal butyrate levels"

nutritional_immunity:
  elevated: [hepcidin, ferritin, transferrin-receptor-altered, lipocalin-2, calprotectin]
  depleted: [glutathione, GPX4, selenoproteins, neuromelanin-iron-binding-capacity]

ecological_features: [ferroptosis, alpha-synuclein-gut-seeding, blood-brain-barrier-disruption, LPS-endotoxemia, SCFA-depletion, vagal-nerve-propagation, hypoxia-gut, siderophore-competition]

virulence_enzymes: [nickel-urease, NiFe-hydrogenase, curli-amyloid, LPS, siderophores]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[alzheimers-disease]]"
    shared_metals: [iron, copper-depleted, lead, cadmium]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted, roseburia-depleted, faecalibacterium-depleted]
    shared_ecological: [ferroptosis, neuroinflammation, blood-brain-barrier-disruption, SCFA-depletion, LPS-endotoxemia]
    overlap_score: 0.72
  - condition: "[[autism-spectrum-disorder]]"
    shared_metals: [lead, cadmium, mercury, zinc-depleted]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [neuroinflammation, blood-brain-barrier-disruption, SCFA-depletion, gut-barrier-disruption]
    overlap_score: 0.42
  - condition: "[[depression]]"
    shared_metals: [iron, lead, copper-depleted]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, lachnospiraceae-depleted, prevotella-depleted]
    shared_ecological: [SCFA-depletion, neuroinflammation]
    overlap_score: 0.48
  - condition: "[[multiple-sclerosis]]"
    shared_metals: [iron, nickel, copper-depleted, lead]
    shared_taxa: [enterobacteriaceae, faecalibacterium-depleted, prevotella-depleted, roseburia-depleted]
    shared_ecological: [neuroinflammation, blood-brain-barrier-disruption]
    overlap_score: 0.45

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 8, 9]
---

# Parkinson's Disease -- Microbiome Signature

## Overview

Parkinson's disease (PD) is the second most common neurodegenerative disease, affecting over 10 million people worldwide. Characterized by progressive loss of dopaminergic neurons in the substantia nigra, alpha-synuclein aggregation (Lewy bodies), and motor symptoms (tremor, rigidity, bradykinesia). PD has the strongest evidence for gut-brain axis involvement among neurodegenerative diseases, and a comprehensive metal-microbiome-neurodegeneration framework has been proposed [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]. Ferroptosis -- iron-dependent lipid peroxidation cell death -- is most directly established as a cell death mechanism in PD, and manganese-parkinsonism provides the clearest occupational dose-response evidence for metal-induced neurodegeneration [[racette-2017-manganese-parkinsonism-welders]]. The PD signature is distinguished by its gut-first origin (Braak hypothesis), where alpha-synuclein deposits appear in the enteric nervous system years before motor symptoms.

## Metallomic Signature

Confidence: high -- supported by 8+ independent studies including systematic reviews, post-mortem brain metallomics, and prospective cohort data [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]], [[scholefield-2024-brain-metallomics-dementia]], [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[racette-2017-manganese-parkinsonism-welders]].

### Elevated metals

- Iron (substantia nigra): The hallmark metallomic finding in PD. Iron accumulates specifically in the substantia nigra, catalyzing Fenton reactions that generate hydroxyl radicals driving lipid peroxidation [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]. GPX4 downregulation removes the brake on ferroptotic cell death. Neuromelanin normally accumulates iron with age; when its binding capacity is exceeded, free iron catalyzes lipid peroxidation [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]]. Iron chelation (deferiprone) shows some benefit in PD trials [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- Manganese (basal ganglia): Progression of parkinsonism increases with cumulative Mn exposure: annual UPDRS3 increase of 0.24 points per mg Mn/m3-year (95% CI 0.10-0.38) [[racette-2017-manganese-parkinsonism-welders]]. Among 886 welders, 15.2% had clinical parkinsonism. Flux core arc welding in confined spaces showed 6.7x higher progression rate (0.67 vs 0.10). Mn primarily affects the basal ganglia (globus pallidus, striatum) rather than the substantia nigra, producing a phenotype distinct from idiopathic PD.
- Lead: Pb mimics Ca in signaling pathways, disrupting neurotransmitter release [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- Cadmium: BBB disruption and mitochondrial damage [[rasin-2025-cadmium-exposure-health-review]].
- Mercury: Elevated in PD; neurotoxic via oxidative stress and protein aggregation.
- Nickel: Ni-dependent bacterial enzymes (urease, [NiFe]-hydrogenase) in gut pathogens contribute to dysbiosis and ammonia-mediated epithelial damage, compounding iron-driven ferroptosis [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

### Depleted metals/antioxidants

- Copper (brain): Widespread Cu decreases across brain regions in PD dementia, including substantia nigra [[scholefield-2024-brain-metallomics-dementia]]. Cu depletion is shared across PD, AD, and DLB, suggesting a common pathway involving disturbed Cu trafficking.
- Zinc (serum): Reduced in PD patients (meta-analysis of 803 PD patients and 796 controls) [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- Selenium: Depletion impairs GPx activity, compounding ferroptotic vulnerability.
- Glutathione: GSH depletion in substantia nigra is an early PD feature; enables ferroptotic cascade.

### The Pheomelanin/Neuromelanin Hypothesis

MC1R loss-of-function variants (red hair phenotype) shift melanogenesis toward pheomelanin in both skin and brain. Pheomelanin has weaker metal-binding capacity than eumelanin and may itself generate ROS upon metal exposure. Proposed mechanism: MC1R variants -> higher pheomelanin fraction in neuromelanin -> reduced iron chelation capacity -> greater labile iron pool -> enhanced Fenton reactions -> ferroptotic neuron death [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]]. Epidemiological support: red hair/fair skin phenotypes associated with 50-100% increased PD risk.

## Environmental Exposures

- Occupational (strongest evidence): Welding (Mn, Fe, Cr, Ni) -- dose-dependent progression in 886 welders over 9.9 years [[racette-2017-manganese-parkinsonism-welders]]. Confined-space flux core arc welding showed dramatically higher risk. Mining and battery manufacturing also relevant.
- Agricultural: Pesticide exposure (many pesticides contain or mobilize metals) associated with PD risk [[chin-chan-2015-environmental-pollutants-ad-pd]].
- Air pollution: Particulate matter carries metals to the brain via olfactory pathway [[chin-chan-2015-environmental-pollutants-ad-pd]].
- Dietary: Iron-rich foods, high-Mn foods (tea, nuts, whole grains), contaminated water.
- Genetic vulnerability: MC1R variants (redhead phenotype) create inborn differential in neuromelanin iron-binding capacity [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]].

## Nutritional Immunity Response

Confidence: moderate -- supported by 3-4 independent studies.

- Hepcidin elevation: Host iron sequestration response; may contribute to functional anemia that should not be treated with iron supplementation (a potential STOP).
- Ferritin/transferrin alterations: Documented in PD brain, indicating disrupted iron trafficking [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- GPX4 downregulation: The master regulator of ferroptosis is suppressed in PD substantia nigra, removing the brake on iron-dependent lipid peroxidation cell death [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- Neuromelanin iron-binding capacity: Exceeded in PD; when neuromelanin can no longer sequester iron, free iron catalyzes lipid peroxidation. Capacity may be genetically reduced in MC1R variant carriers [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]].
- Glutathione depletion: GSH depletion in substantia nigra is one of the earliest PD features, preceding clinical symptoms.
- Selenoprotein impairment: Se deficiency reduces GPx4 activity, compounding ferroptotic vulnerability.

## Taxonomic Analysis

Confidence: high -- supported by 5+ independent studies including meta-analyses, with highly consistent enrichment/depletion patterns [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[khatoon-2023-gut-microbiota-neurodegenerative]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]], [[gentile-2020-diet-microbiota-brain-health]].

### Enriched taxa

- [[enterobacteriaceae]]: Metal-tolerant, siderophore-producing family that outcompetes commensals under high-iron conditions. Enrichment is a consistent PD finding and reflects the metal-driven competitive advantage described in the microbial metallomics framework [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- [[akkermansia-muciniphila]]: Mucin-degrading species consistently increased in PD [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[khatoon-2023-gut-microbiota-neurodegenerative]]. May reflect mucosal barrier remodeling rather than a direct pathogenic role; Pb exposure also reduces Akkermansia in some contexts [[ghosh-2023-heavy-metals-gut-barrier-integrity]].
- [[escherichia-coli]]: Produces curli amyloid fibers that cross-seed alpha-synuclein aggregation -- a direct microbial-to-neurodegeneration pathway [[gentile-2020-diet-microbiota-brain-health]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]].
- [[porphyromonas]]: Pro-inflammatory Gram-negative genus enriched in PD gut [[khatoon-2023-gut-microbiota-neurodegenerative]].
- [[lactobacillus]]: Paradoxically enriched in PD despite being generally considered beneficial [[khatoon-2023-gut-microbiota-neurodegenerative]], [[gentile-2020-diet-microbiota-brain-health]]. May reflect niche availability from loss of other commensals.
- [[helicobacter-pylori]]: Ni-dependent urease producer; H. pylori and SIBO identified as triggering factors for PD [[alonso-garcia-2021-gut-microbiota-proteinopathies]].

### Depleted taxa

- [[prevotella]]: Reduced Prevotellaceae is the single most consistent PD dysbiosis finding across multiple meta-analyses [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]]. Major SCFA producer; its loss is central to the SCFA depletion pattern.
- [[lachnospiraceae]]: SCFA-producing family consistently depleted; butyrate from Lachnospiraceae maintains gut barrier and BBB integrity [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- [[faecalibacterium-prausnitzii]]: Anti-inflammatory butyrate producer; depletion is consistent and contributes to systemic inflammation [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]], [[khatoon-2023-gut-microbiota-neurodegenerative]].
- [[roseburia]]: Butyrate producer depleted in PD; contributes to reduced fecal SCFA levels [[khatoon-2023-gut-microbiota-neurodegenerative]].
- [[blautia]]: Anti-inflammatory SCFA producer depleted in PD [[khatoon-2023-gut-microbiota-neurodegenerative]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]].
- [[coprococcus]]: SCFA producer depleted in PD; associated with motor symptom severity [[alonso-garcia-2021-gut-microbiota-proteinopathies]].

## Virulence Enzymes and Features

Confidence: moderate -- supported by mechanistic evidence from the microbial metallomics framework and cross-seeding studies.

- Curli amyloid: Produced by [[escherichia-coli]]; cross-seeds alpha-synuclein aggregation in the enteric nervous system, providing the molecular mechanism for the Braak gut-first hypothesis [[gentile-2020-diet-microbiota-brain-health]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]].
- Nickel-urease: Produced by [[helicobacter-pylori]] and other gut pathogens; Ni-dependent enzyme enables colonization and produces ammonia-mediated epithelial damage [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- [NiFe]-hydrogenase: Nickel-iron dependent enzyme in gut pathogens; contributes to dysbiosis by enabling energy metabolism under metal-stress conditions [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].
- LPS (lipopolysaccharide): From enriched Enterobacteriaceae; disrupts BBB and increases alpha-synuclein deposition [[gentile-2020-diet-microbiota-brain-health]]. Endotoxemia is a key mediator of gut-brain inflammation.
- Siderophores: Produced by Enterobacteriaceae; enable competitive iron acquisition, outcompeting commensals under high-iron gut conditions [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Ecological State

Confidence: high -- supported by a comprehensive unified framework with convergent evidence from multiple independent studies.

The PD gut-brain ecosystem is characterized by a multi-step causal cascade [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]:

1. Dietary/environmental metal exposure (Fe, Mn, Ni, Pb, Cd) enters the gut lumen.
2. Gut microbial metal stress -- heavy metals create selective pressure favoring metal-tolerant species.
3. Enrichment of metal-resistant pathobionts -- Enterobacteriaceae with siderophores outcompete commensals; Akkermansia expands.
4. Loss of SCFA-producing commensals -- Prevotellaceae, Lachnospiraceae, Faecalibacterium, Roseburia decline, reducing butyrate, propionate, and acetate production.
5. Impaired gut barrier -- reduced tight junction integrity from SCFA depletion and direct metal damage to epithelium. Heavy metals (Pb, Cd, Hg) specifically reduce ZO-1, claudin-1, occludin expression [[ghosh-2023-heavy-metals-gut-barrier-integrity]].
6. LPS/bacterial product translocation -- endotoxemia from Gram-negative overgrowth.
7. Systemic and neuroinflammation -- microglia activation, NLRP3 inflammasome, cytokine cascades [[gao-2023-microglia-neurodegenerative-diseases]]. Peripheral immune cell infiltration shapes microglia into pro-inflammatory phenotype.
8. Alpha-synuclein misfolding -- in enteric nervous system first (gut-first/Braak hypothesis), propagating to CNS via vagus nerve. Bacterial curli cross-seeds aggregation. Alpha-synuclein deposits found in gut years before motor symptoms [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]. Vagotomy is associated with lower PD risk [[gentile-2020-diet-microbiota-brain-health]].
9. Ferroptotic dopaminergic neuron death -- iron accumulation in substantia nigra exceeds neuromelanin binding capacity; GPX4 downregulation removes the brake on lipid peroxidation; dopaminergic neurons die via ferroptosis.

Siderophore competition is a key ecological feature: under high iron conditions, siderophore-producing Enterobacteriaceae gain competitive advantage over commensals that lack these iron-acquisition systems [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

## Associated Conditions

### [[alzheimers-disease]] (overlap score: 0.72)

Highest overlap. Both share iron accumulation (different brain regions), brain copper depletion, lead/cadmium elevation, and identical SCFA-producer depletion pattern. Both feature ferroptosis and bacterial amyloid cross-seeding (curli with A-beta in AD, curli with alpha-synuclein in PD). Key difference: regional iron specificity (hippocampus/cortex vs. substantia nigra) and protein aggregation pathway (amyloid-beta/tau vs. alpha-synuclein).

### [[depression]] (overlap score: 0.48)

Depression affects 30-40% of PD patients, often preceding motor symptoms by years. Shared gut-brain axis disruption via SCFA depletion and tryptophan pathway shifts. Serotonergic neuron loss in the raphe nuclei parallels dopaminergic loss in the substantia nigra. L-DOPA treatment can worsen depression by depleting serotonin precursors.

### [[multiple-sclerosis]] (overlap score: 0.45)

Shared iron, nickel, copper (depleted), and lead involvement. Both feature Enterobacteriaceae enrichment, Prevotella and Faecalibacterium depletion, neuroinflammation, and BBB disruption. MS involves demyelination while PD involves dopaminergic neuron loss.

### [[autism-spectrum-disorder]] (overlap score: 0.42)

Shared Pb, Cd, Hg elevation and Zn depletion. Both feature SCFA-producer depletion and gut barrier disruption. Key difference: ASD is developmental with immediate effects during critical windows; PD involves cumulative lifetime exposure with gut-first onset decades before symptoms.

## Open Questions

1. Can the gut-brain metal cascade be interrupted at any stage? The multi-step framework [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]] predicts that intervention at any point should provide partial benefit -- but which stage is most tractable?
2. Does neuromelanin composition differ by MC1R genotype? The pheomelanin hypothesis makes testable predictions about post-mortem neuromelanin composition [[pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads]].
3. Are metal-tolerant gut bacteria sufficient to drive PD? The microbial metallomics framework proposes causality, but direct evidence is lacking.
4. Why is Mn-parkinsonism clinically distinct from idiopathic PD? Different metal, different brain region (globus pallidus vs. substantia nigra), similar phenotype [[racette-2017-manganese-parkinsonism-welders]].
5. Can ferroptosis be specifically blocked in dopaminergic neurons? GPX4 activators and iron chelators work systemically; targeted delivery to the substantia nigra would be transformative.
6. What is the relative contribution of vagal vs. systemic pathways? Alpha-synuclein propagates via vagus nerve; inflammation propagates systemically. Which dominates?
7. Is dietary Ni exposure via its effects on gut pathogens (urease, hydrogenase) a modifiable PD risk factor? [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]]

## Karen's Brain Primitives Active

1. Metals as Selective Pressures -- Fe, Mn, Ni from dietary/environmental sources selectively reshape gut microbial communities, favoring metal-tolerant Enterobacteriaceae over SCFA-producing commensals.
2. Nutritional Immunity as Interpretive Constraint -- Hepcidin elevation indicates functional iron sequestration (host defense), not deficiency. Iron supplementation would feed siderophore-producing pathogens.
4. Microbial Metal Dependencies as Achilles' Heels -- H. pylori requires Ni for urease; Enterobacteriaceae depend on siderophores for iron. Restrict these metals, disable these organisms.
5. Two-Sided Ecological Engineering -- Suppress metal-tolerant pathobionts (Enterobacteriaceae) AND restore SCFA-producing commensals (Prevotella, Lachnospiraceae, Faecalibacterium, Roseburia).
8. Siderophore Competition and Iron Ecology -- Enterobacteriaceae enrichment is driven by siderophore-mediated competitive exclusion under high-iron gut conditions. This is the central ecological mechanism in the PD gut.
9. Oxygen State as Ecological Determinant -- Loss of obligate anaerobes (Prevotella, Faecalibacterium) and expansion of facultative anaerobes (Enterobacteriaceae) suggests a shift toward aerotolerant conditions in the PD gut.
