---
title: Microglia
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [gao-2023-microglia-neurodegenerative-diseases, ahmed-2025-metals-alzheimers-mechanistic-review, pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis, heidari-2022-neuroinflammation-progression-parkinsons, perez-pardo-2022-toll-like-receptors-parkinsons-microbiome-gut-brain, sampson-2019-microbiome-immune-system-parkinsons, campos-acuna-2019-neuroinflammation-microbiome-immune-parkinsons, tizabi-2023-lead-gut-microbiota-asd, chin-chan-2015-environmental-pollutants-ad-pd, passeri-2024-recent-advances-therapeutics-alzheimers]
source_count: 10
tags: [microglia, neuroinflammation, M1-M2-polarization, TREM2, phagocytosis, metal-activation, LPS, gut-brain-axis, neurodegeneration, NF-kB, NLRP3]
karen_brain_primitives: [1, 3, 5]
seo_target: "microglia neuroinflammation metals"
platform: wikibiome
---

# Microglia

Microglia are the resident immune cells of the central nervous system, constituting 5-12% of all brain cells. They function as the brain's surveillance and defense system -- scanning for damage, clearing debris, pruning synapses during development, and mounting inflammatory responses against pathogens. What makes microglia critically relevant to the metallomics-microbiome story is that they are the primary brain cells activated by both heavy metals and gut-derived inflammatory signals, making them the cellular mediator through which the [[gut-brain-axis]] produces neurodegeneration.

## Biology and Polarization States

Microglia derive from yolk sac progenitors during embryonic development and are maintained as a self-renewing population throughout life, distinct from peripheral monocytes and macrophages. In their resting (surveilling) state, they extend highly motile processes that continuously sample the brain parenchyma.

Upon activation, microglia adopt states along a polarization spectrum:

- M1 (pro-inflammatory): Produces TNF-alpha, IL-1beta, IL-6, ROS, and reactive nitrogen species (NO). Mediates neuronal damage through excitotoxicity and oxidative attack. Activated by LPS, IFN-gamma, amyloid-beta, alpha-synuclein, and heavy metals.
- M2 (anti-inflammatory/reparative): Produces IL-10, TGF-beta, and neurotrophic factors (BDNF, NGF). Promotes phagocytic clearance of debris and tissue repair.

The M1/M2 framework is a simplification -- single-cell transcriptomics reveals a diverse landscape of microglial states -- but it captures the essential tension: microglia can protect or destroy neurons depending on their activation state and chronicity.

## Metal Activation of Microglia

Heavy metals are potent and persistent microglial activators:

- Lead: Activates microglia via NF-kB signaling, increasing TNF-alpha and IL-6 production. Lead-activated microglia resist polarization back to the M2 state, creating chronic [[neuroinflammation]] that outlasts the exposure [[chin-chan-2015-environmental-pollutants-ad-pd]].
- Mercury: Methylmercury activates microglial NLRP3 inflammasome, driving IL-1beta release and neuronal apoptosis.
- Manganese: Accumulates preferentially in the basal ganglia (same regions as PD pathology); activates microglia through mitochondrial ROS production and NF-kB signaling [[heidari-2022-neuroinflammation-progression-parkinsons]].
- Cadmium: Activates microglia via TLR4 signaling; Cd-exposed microglia produce exaggerated inflammatory responses to subsequent LPS stimulation (priming effect).
- Aluminum: Activates microglia and promotes amyloid-beta aggregation. Al-activated microglia show impaired phagocytic clearance of amyloid, worsening plaque burden [[ahmed-2025-metals-alzheimers-mechanistic-review]].
- Iron: Excess iron in microglia generates ROS via Fenton chemistry and promotes the pro-inflammatory M1 phenotype. Iron-loaded microglia around amyloid plaques amplify oxidative damage to surrounding neurons [[pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis]].

A critical feature of metal-activated microglia is their resistance to phenotype switching: once pushed into a pro-inflammatory state by metals, microglia remain activated even after metal levels normalize, creating a self-perpetuating neuroinflammatory environment [[gao-2023-microglia-neurodegenerative-diseases]].

## The Gut-Brain-Microglia Axis

The gut microbiome controls microglial function through several routes:

### LPS Translocation
When [[gut-barrier-dysfunction]] permits LPS translocation into the bloodstream, circulating LPS reaches the brain through circumventricular organs (which lack a BBB) and through TLR4-mediated transcytosis. LPS is among the most potent microglial activators, driving rapid M1 polarization via the TLR4/NF-kB pathway [[perez-pardo-2022-toll-like-receptors-parkinsons-microbiome-gut-brain]].

### SCFA-Mediated Regulation
[[short-chain-fatty-acids|Short-chain-fatty-acids]] (particularly butyrate) suppress microglial activation through HDAC inhibition and GPR109A receptor signaling. Germ-free mice show profound microglial abnormalities -- immature morphology, impaired phagocytic capacity, exaggerated inflammatory responses -- that normalize with SCFA supplementation [[sampson-2019-microbiome-immune-system-parkinsons]].

### Tryptophan Metabolites
[[tryptophan|Tryptophan]] metabolites from the [[kynurenine-pathway]] (particularly quinolinic acid) directly activate microglia. Microbial indole derivatives acting through AhR on astrocytes modulate the astrocyte-microglia crosstalk [[campos-acuna-2019-neuroinflammation-microbiome-immune-parkinsons]].

## TREM2: The Key Therapeutic Target

TREM2 (triggering receptor expressed on myeloid cells 2) is a microglial surface receptor critical for phagocytic clearance and inflammatory regulation:

- TREM2 variants (R47H) are associated with 2-4 fold increased Alzheimer's disease risk
- TREM2 enables disease-associated microglia (DAM) to transition from homeostatic to phagocytic states
- TREM2-dependent DAM limit tau seeding and amyloid-beta spreading around plaques
- Loss of TREM2 function impairs amyloid-beta phagocytosis and increases amyloid seeding
- MgND (microglial neurodegenerative) state microglia hypersecrete extracellular vesicles containing phosphorylated tau [[gao-2023-microglia-neurodegenerative-diseases]]

## Disease Involvement

### Alzheimer's Disease
Microglia both protect against and promote AD pathology. Initially, phagocytic microglia clear amyloid-beta. With chronic activation (driven by metals and LPS), microglia shift to a pro-inflammatory state that promotes [[amyloid-beta]] aggregation, [[tau-phosphorylation]], and synaptic stripping. APOE4 allele alters microglial metabolism, increasing intracellular lipid accumulation [[gao-2023-microglia-neurodegenerative-diseases]] [[passeri-2024-recent-advances-therapeutics-alzheimers]].

### Parkinson's Disease
Reactive microglia are detected in the substantia nigra of PD patients with higher NLRP3 inflammasome activation. The CCL2-CCR2 axis recruits peripheral monocytes that further amplify neuroinflammation. MPTP-induced parkinsonism produces long-lasting reactive microgliosis preceding astrogliosis [[gao-2023-microglia-neurodegenerative-diseases]] [[heidari-2022-neuroinflammation-progression-parkinsons]].

### Autism Spectrum Disorder
Microglial activation and neuroinflammation are documented in post-mortem ASD brains. Lead-induced microglial activation during neurodevelopment may contribute to the neuroinflammatory component of ASD [[tizabi-2023-lead-gut-microbiota-asd]].

## Cross-References

- [[neuroinflammation]] -- the broader inflammatory response microglia mediate
- [[gut-brain-axis]] -- the communication route through which gut signals reach microglia
- [[amyloid-beta]] -- protein aggregate that activates and is cleared by microglia
- [[tau-phosphorylation]] -- promoted by microglial inflammatory mediators
- [[alpha-synuclein]] -- PD-associated protein that activates microglia
- [[blood-brain-barrier]] -- its breach permits LPS access to microglia
- [[oxidative-stress]] -- microglial ROS production damages neurons
- [[short-chain-fatty-acids]] -- microbial regulators of microglial function
- [[kynurenine-pathway]] -- quinolinic acid activates microglia
- [[iron]] -- excess microglial iron amplifies Fenton-driven damage
