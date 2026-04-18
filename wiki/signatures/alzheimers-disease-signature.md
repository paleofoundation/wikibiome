---
title: "Alzheimer's Disease -- Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [ahmed-2025-metals-alzheimers-mechanistic-review.md, scholefield-2024-brain-metallomics-dementia.md, bakulski-2020-heavy-metals-alzheimers-dementias.md, bakulski-2025-heavy-metals-late-onset-alzheimers.md, doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons.md, islam-2022-metal-toxicity-alzheimers-extensive-review.md, jakubowska-2024-metal-toxicity-alzheimers-review.md, armstrong-2024-alzheimers-extrinsic-factors-development.md, passeri-2024-recent-advances-therapeutics-alzheimers.md, zhang-2024-recent-advances-alzheimers-mechanisms-trials.md, chin-chan-2015-environmental-pollutants-ad-pd.md, guevara-ramirez-2024-dietary-heavy-metals-neurodegeneration.md, althomali-2024-heavy-metals-neurocognitive-systematic-review.md, gentile-2020-diet-microbiota-brain-health.md, khatoon-2023-gut-microbiota-neurodegenerative.md, alonso-garcia-2021-gut-microbiota-proteinopathies.md, gao-2023-microglia-neurodegenerative-diseases.md, klotz-2017-aluminum-health-effects-review.md, jaishankar-2014-heavy-metal-toxicity-mechanisms.md, rasin-2025-cadmium-exposure-health-review.md, ghosh-2023-heavy-metals-gut-barrier-integrity.md]
source_count: 21
tags: [neurodegenerative-disease, dementia, copper, iron, lead, aluminum, cadmium, mercury, arsenic, amyloid-beta, ferroptosis, gut-brain-axis, microbiome]

metallomic_signature:
  elevated: [iron, lead, cadmium, mercury, arsenic, aluminum, zinc-in-plaques, nickel]
  depleted: [copper-brain, zinc-serum, selenium, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[helicobacter-pylori]]"
      role: "Ni-dependent urease producer; chronic gastric infection associated with AD; ammonia-mediated epithelial damage"
    - taxon: "[[escherichia-coli]]"
      role: "Curli amyloid producer -- cross-seeds amyloid-beta aggregation; LPS-driven neuroinflammation via NF-kB"
    - taxon: "[[bacteroides-fragilis]]"
      role: "LPS producer; enriched in AD gut; contributes to systemic inflammation"
    - taxon: "[[klebsiella-pneumoniae]]"
      role: "Gram-negative pathobiont enriched in AD; siderophore-mediated iron piracy"
  depleted:
    - taxon: "[[eubacterium-rectale]]"
      role: "Major butyrate producer; loss reduces gut barrier integrity and anti-inflammatory signaling"
    - taxon: "[[bacteroides]]"
      role: "Commensal species depleted in AD; reduced diversity in Bacteroidetes phylum"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Anti-inflammatory SCFA producer; depletion contributes to systemic inflammation and neuroinflammation"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family; consistent depletion reduces butyrate availability for BBB maintenance"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer; depletion impairs gut barrier and anti-inflammatory tone"

nutritional_immunity:
  elevated: [hepcidin, transferrin-receptor-altered, ferritin-altered, TREM2]
  depleted: [glutathione, selenoproteins, ceruloplasmin-function]

ecological_features: [neuroinflammation, blood-brain-barrier-disruption, amyloid-cross-seeding, LPS-endotoxemia, SCFA-depletion, TMAO-elevation, ferroptosis, epigenetic-latency]

virulence_enzymes: [nickel-urease, curli-amyloid, LPS, siderophores, beta-glucuronidase]

confidence:
  metallomic: high
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[parkinsons-disease]]"
    shared_metals: [iron, copper-depleted, lead, cadmium]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted, roseburia-depleted, faecalibacterium-depleted]
    shared_ecological: [ferroptosis, neuroinflammation, blood-brain-barrier-disruption, SCFA-depletion, LPS-endotoxemia]
    overlap_score: 0.72
  - condition: "[[autism-spectrum-disorder]]"
    shared_metals: [lead, cadmium, mercury, zinc-depleted]
    shared_taxa: [lachnospiraceae-depleted, faecalibacterium-depleted]
    shared_ecological: [neuroinflammation, blood-brain-barrier-disruption, SCFA-depletion]
    overlap_score: 0.45
  - condition: "[[depression]]"
    shared_metals: [zinc-depleted, iron]
    shared_taxa: [lachnospiraceae-depleted, faecalibacterium-depleted, roseburia-depleted]
    shared_ecological: [SCFA-depletion, neuroinflammation]
    overlap_score: 0.40

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5, 6, 8, 9]
---

# Alzheimer's Disease -- Microbiome Signature

## Overview

Alzheimer's disease (AD) is the most common form of dementia, affecting approximately 55 million people worldwide and projected to triple by 2050 [[zhang-2024-recent-advances-alzheimers-mechanisms-trials]]. The disease is characterized by amyloid-beta plaques, neurofibrillary tau tangles, and progressive cognitive decline. From a metallomics perspective, AD presents the most complex metal signature of any neurodegenerative disease -- featuring a central **copper paradox** (brain depletion alongside peripheral elevation), iron accumulation driving ferroptosis, and the strongest epidemiological evidence for lead as a latent neurodegenerative risk factor. The gut-brain axis provides a critical intermediary pathway through which metal-driven dysbiosis generates LPS-mediated neuroinflammation and bacterial amyloid cross-seeding of cerebral amyloid-beta.

## Metallomic Signature

**Confidence: high** -- supported by 10+ independent studies including systematic reviews, meta-analyses, and post-mortem brain metallomics [[ahmed-2025-metals-alzheimers-mechanistic-review]], [[scholefield-2024-brain-metallomics-dementia]], [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]], [[bakulski-2020-heavy-metals-alzheimers-dementias]].

### Elevated metals

- **Iron**: Accumulates in hippocampus and cortex; catalyzes Fenton reactions generating hydroxyl radicals; drives ferroptosis via lipid peroxidation [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]]. Transferrin receptor and ferritin alterations documented in AD brain.
- **Lead**: The most extensively studied metal in AD (21 of 46 mechanistic studies reviewed) [[ahmed-2025-metals-alzheimers-mechanistic-review]]. Cumulative bone lead provides better exposure estimates than blood lead [[bakulski-2020-heavy-metals-alzheimers-dementias]]. Early-life Pb exposure produces latent epigenetic effects on AD-related genes that manifest decades later. Pb induces BBB disruption.
- **Zinc (in plaques)**: Accumulates in amyloid plaques, inducing A-beta aggregation; 100 uM Zn2+ produced 5-14 fold increases in aggregation rates in vitro [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Cadmium**: BBB disruption, calcium signaling disruption, mitochondrial dysfunction; blood Cd associated with lower cognitive scores [[bakulski-2020-heavy-metals-alzheimers-dementias]], [[ahmed-2025-metals-alzheimers-mechanistic-review]].
- **Mercury**: Both inorganic and methylmercury increase A-beta production and tau phosphorylation [[bakulski-2020-heavy-metals-alzheimers-dementias]].
- **Arsenic**: Increases A-beta(1-42) production and BACE1 activity; RAGE levels up 220-fold in animal models; dose-dependent tau phosphorylation via GSK3-beta and ERK1/2 [[ahmed-2025-metals-alzheimers-mechanistic-review]].
- **Aluminum**: Accumulates in brain tissue; neurotoxicity via oxidative stress, inflammatory cytokine induction, and interference with iron homeostasis [[klotz-2017-aluminum-health-effects-review]].
- **Nickel**: Enhances A-beta-40 aggregation 5.7-fold at 100 uM; commercial recombinant A-beta preparations contain 1,005 ug Ni per gram of peptide [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]]. <!-- NEEDS VERIFICATION: Ni data from benoit-2021 sources not in current source list -->

### Depleted metals/antioxidants

- **Copper (brain)**: Widespread Cu decreases across hippocampus, cingulate gyrus, middle temporal gyrus, substantia nigra, primary visual cortex, and putamen [[scholefield-2024-brain-metallomics-dementia]]. Cu contributed most to multivariate separation between dementia types. This reflects disturbed Cu trafficking rather than simple depletion -- ceruloplasmin dysfunction elevates circulating Cu while failing to deliver Cu to the brain [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Zinc (serum)**: Reduced systemically despite plaque accumulation; zinc transporter dysfunction documented [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Selenium**: Deficiency impairs selenoproteins (glutathione peroxidases, thioredoxin reductases), increasing neurodegeneration vulnerability [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Glutathione**: GSH depletion in AD brain enables iron-driven oxidative damage.

## Environmental Exposures

- **Occupational**: Welding, mining, battery manufacturing provide high-dose Pb and Mn exposure [[bakulski-2020-heavy-metals-alzheimers-dementias]].
- **Drinking water**: Arsenic contamination linked to cognitive deficits [[bakulski-2020-heavy-metals-alzheimers-dementias]].
- **Air pollution**: Particulate matter carries metals (Pb, Mn, Ni) to the brain via olfactory pathway [[chin-chan-2015-environmental-pollutants-ad-pd]].
- **Dietary**: Fish (MeHg but also omega-3), contaminated rice (As, Cd), processed foods [[guevara-ramirez-2024-dietary-heavy-metals-neurodegeneration]].
- **Cigarette smoking**: Major non-dietary Cd source [[bakulski-2020-heavy-metals-alzheimers-dementias]].
- **Developmental**: Early-life Pb exposure alters epigenetic programming of AD-related genes, manifesting as disease 40-60 years later [[bakulski-2020-heavy-metals-alzheimers-dementias]].

## Nutritional Immunity Response

**Confidence: moderate** -- supported by 3-4 independent studies with broadly consistent findings.

- **Hepcidin elevation**: Reflects host attempt to sequester iron from circulation; may be misinterpreted as iron deficiency [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Transferrin/ferritin alterations**: Documented in AD brain, indicating disrupted iron trafficking [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **TREM2**: Variants (R47H) associated with 2-4 fold increased AD risk; TREM2-dependent disease-associated microglia limit tau seeding around plaques [[gao-2023-microglia-neurodegenerative-diseases]].
- **Ceruloplasmin dysfunction**: Fails to deliver Cu to the brain while elevating circulating Cu -- the central mechanism of the copper paradox [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
- **Glutathione depletion**: GSH levels reduced in AD brain, removing antioxidant defense against iron-catalyzed lipid peroxidation.
- **Selenoprotein impairment**: Se deficiency reduces GPx and thioredoxin reductase activity [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].

## Taxonomic Analysis

**Confidence: moderate** -- supported by 3-4 independent studies with consistent enrichment/depletion patterns.

### Enriched taxa

- **[[helicobacter-pylori]]**: Increased in AD gut; nickel-dependent urease enables gastric colonization and ammonia production; chronic infection associated with AD risk [[khatoon-2023-gut-microbiota-neurodegenerative]].
- **[[escherichia-coli]] / Shigella**: Enriched in AD; produces curli amyloid fibers that cross-seed amyloid-beta aggregation, providing a direct microbial-to-neurodegeneration pathway [[gentile-2020-diet-microbiota-brain-health]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]]. LPS from E. coli enhances A-beta fibrillization and triggers NF-kB signaling.
- **[[bacteroides-fragilis]]**: Enriched in AD gut; LPS producer contributing to systemic inflammation [[khatoon-2023-gut-microbiota-neurodegenerative]].
- **[[klebsiella-pneumoniae]]**: Gram-negative pathobiont enriched in AD; siderophore-producing species thrives in iron-rich conditions [[khatoon-2023-gut-microbiota-neurodegenerative]].

### Depleted taxa

- **[[eubacterium-rectale]]**: Major butyrate producer depleted in AD; its loss reduces gut barrier integrity and SCFA-mediated neuroprotection [[khatoon-2023-gut-microbiota-neurodegenerative]].
- **[[faecalibacterium-prausnitzii]]**: Anti-inflammatory SCFA producer; depletion is consistent across AD studies and contributes to systemic and neuroinflammation.
- **[[lachnospiraceae]]**: SCFA-producing family consistently depleted in AD; butyrate from Lachnospiraceae maintains BBB integrity.
- **[[roseburia]]**: Butyrate producer; depletion impairs gut barrier and reduces anti-inflammatory tone.
- **Bacteroides (commensal species)**: Overall Bacteroidetes diversity reduced in AD [[gentile-2020-diet-microbiota-brain-health]].

## Virulence Enzymes and Features

**Confidence: preliminary** -- mechanistic links established but limited direct evidence from AD-specific studies.

- **Curli amyloid**: Produced by [[escherichia-coli]]; cross-seeds with cerebral amyloid-beta, providing a direct bacterial-to-brain aggregation pathway [[gentile-2020-diet-microbiota-brain-health]], [[alonso-garcia-2021-gut-microbiota-proteinopathies]].
- **Nickel-urease**: Produced by [[helicobacter-pylori]]; Ni-dependent enzyme enabling gastric colonization and ammonia-mediated epithelial damage.
- **LPS (lipopolysaccharide)**: From Gram-negative enriched taxa; enhances A-beta fibrillization, triggers NF-kB neuroinflammatory signaling, disrupts BBB [[gentile-2020-diet-microbiota-brain-health]], [[gao-2023-microglia-neurodegenerative-diseases]].
- **Siderophores**: Produced by Enterobacteriaceae; enable iron piracy in high-iron conditions, outcompeting commensals.
- **Beta-glucuronidase**: Produced by enriched Gram-negative taxa; may contribute to xenobiotic reactivation and inflammatory load.

## Ecological State

**Confidence: moderate** -- supported by convergent evidence from multiple independent pathways.

The AD gut-brain ecosystem is characterized by:

1. **Neuroinflammation**: Metal-activated microglia produce inflammatory cytokines; peripheral immune cell infiltration shapes microglia into pro-inflammatory phenotype [[gao-2023-microglia-neurodegenerative-diseases]]. NLRP3 inflammasome activation drives tau spreading.
2. **Blood-brain barrier disruption**: Pb and Cd specifically damage the BBB [[ahmed-2025-metals-alzheimers-mechanistic-review]]; LPS from gut bacteria further impairs BBB integrity [[khatoon-2023-gut-microbiota-neurodegenerative]].
3. **Amyloid cross-seeding**: Bacterial curli from gut E. coli cross-seeds with cerebral A-beta, creating a gut-to-brain protein aggregation pathway [[gentile-2020-diet-microbiota-brain-health]].
4. **LPS endotoxemia**: Increased Gram-negative bacteria in AD gut produce LPS that traverses the compromised gut barrier, driving systemic inflammation and enhancing A-beta fibrillization.
5. **SCFA depletion**: Loss of butyrate-producing commensals (Eubacterium rectale, Faecalibacterium, Lachnospiraceae) reduces gut barrier maintenance, BBB support, and anti-inflammatory signaling [[gentile-2020-diet-microbiota-brain-health]].
6. **TMAO elevation**: Gut bacteria-derived TMAO traverses the BBB and is found at increased levels in CSF of cognitively impaired AD patients [[khatoon-2023-gut-microbiota-neurodegenerative]].
7. **Ferroptosis**: Iron-catalyzed lipid peroxidation cell death in hippocampal and cortical neurons; GPX4 downregulation removes the brake [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]].
8. **Epigenetic latency**: Early-life Pb exposure produces latent effects on AD-related gene expression through epigenetic mechanisms that manifest decades later [[bakulski-2020-heavy-metals-alzheimers-dementias]], [[bakulski-2025-heavy-metals-late-onset-alzheimers]].

## Associated Conditions

Alzheimer's disease shares substantial signature overlap with several other conditions:

### [[parkinsons-disease]] (overlap score: 0.72)

The highest overlap among neurodegenerative diseases. Shared features include iron accumulation driving ferroptosis, brain copper depletion [[scholefield-2024-brain-metallomics-dementia]], lead neurotoxicity, and gut-brain axis disruption with depletion of identical SCFA-producing taxa (Lachnospiraceae, Roseburia, Faecalibacterium). The key distinguishing feature is the regional specificity of iron accumulation (hippocampus/cortex in AD vs. substantia nigra in PD) and the alpha-synuclein vs. amyloid-beta aggregation pathway.

### [[autism-spectrum-disorder]] (overlap score: 0.45)

Shared toxic metal elevation (Pb, Cd, Hg), zinc depletion, and gut barrier disruption. Both conditions feature SCFA-producing commensal depletion and neuroinflammation. Key differences: ASD is a developmental condition where metal exposure during critical windows produces immediate effects, while AD involves cumulative lifetime exposure with epigenetic latency. ASD features mis-metallation of zinc-dependent synaptic proteins (SHANK3) rather than amyloid aggregation.

### [[depression]] (overlap score: 0.40)

Shared zinc depletion, SCFA-producing taxa depletion (Lachnospiraceae, Faecalibacterium, Roseburia), and neuroinflammation. Depression frequently co-occurs with AD and shares gut-brain axis disruption patterns.

## Open Questions

1. **Can brain Cu be restored without raising peripheral levels?** The copper paradox demands compartment-specific therapeutics -- a major pharmacological challenge.
2. **Is the gut-brain amyloid cross-seeding pathway targetable?** If bacterial curli from E. coli seeds cerebral A-beta, could reducing gut E. coli burden slow AD progression?
3. **What is the critical window for Pb exposure?** Epigenetic evidence points to early life, but cumulative bone Pb suggests lifelong accumulation also matters [[bakulski-2020-heavy-metals-alzheimers-dementias]].
4. **Can metallomic brain profiling become an in vivo diagnostic?** Post-mortem brain metallomic data distinguishes AD from DLB and PDD [[scholefield-2024-brain-metallomics-dementia]]; translation to in vivo imaging is the challenge.
5. **How do metal mixtures interact in AD risk?** Nearly all studies examine single metals, but real-world exposure involves complex mixtures [[bakulski-2020-heavy-metals-alzheimers-dementias]].
6. **APOE4 gene-metal interactions**: Does APOE genotype modify susceptibility to metal-driven AD pathways? APOE4 shows altered cellular metabolism and increased lipid accumulation in microglia [[gao-2023-microglia-neurodegenerative-diseases]].
7. **Can SCFA supplementation or FMT slow AD progression?** FMT from wild-type to AD mice reduced A-beta plaque burden [[gentile-2020-diet-microbiota-brain-health]]; human trials are needed.
8. **Does aluminum genuinely contribute to AD, or is brain Al accumulation an epiphenomenon?** Decades of debate remain unresolved.

## Karen's Brain Primitives Active

1. **Metals as Selective Pressures** -- Pb, Cd, Hg, As reshape the gut microbiome toward metal-tolerant Gram-negative species, depleting SCFA producers.
2. **Nutritional Immunity as Interpretive Constraint** -- Hepcidin elevation and ceruloplasmin dysfunction may reflect host defense (iron sequestration), not simple metal excess or deficiency.
3. **Mis-metallation and Toxic Metal Entry** -- Pb mimics Ca in signaling pathways; Cd displaces Zn; As depletes SAM (universal methyl donor).
4. **Microbial Metal Dependencies as Achilles' Heels** -- H. pylori requires Ni for urease; iron chelation could starve siderophore-dependent Enterobacteriaceae.
5. **Two-Sided Ecological Engineering** -- Suppress LPS-producing Gram-negatives AND restore SCFA-producing commensals (Faecalibacterium, Lachnospiraceae, Roseburia).
6. **Interkingdom Relationships and Functional Shielding** -- Not yet characterized in AD gut; represents a knowledge gap.
8. **Siderophore Competition and Iron Ecology** -- Enterobacteriaceae enrichment under high-iron conditions via siderophore-mediated competitive exclusion of commensals.
9. **Oxygen State as Ecological Determinant** -- SCFA depletion and loss of anaerobic fermenters suggest a shift toward aerotolerant conditions in the AD gut.
