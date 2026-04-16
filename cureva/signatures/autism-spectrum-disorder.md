---
title: "Autism Spectrum Disorder — Microbiome Signature"
type: signature
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-14
sources: [blazewicz-2023-metal-profiles-asd.md, ogrady-2025-metal-dyshomeostasis-asd.md, tizabi-2023-lead-gut-microbiota-asd.md, russo-2011-copper-zinc-autism-gi-disease.md, li-2021-fmt-gi-autism-symptoms-open-label.md, mathew-2025-autism-heterogeneity-gi-inflammation-thesis.md, turpin-2021-infant-gut-bacteria-adolescent-autism-autoimmune.md, hardan-2012-nac-pilot-trial-autism-children.md, karakas-2023-ursodeoxycholic-acid-propionic-acid-autism-animal.md, afroz-2021-high-salt-diet-microbiome-autism-behavior-mice.md, akdag-2023-heavy-metal-toxicity-autism-risk-factor.md, orozco-2019-metabolomics-autism-developmental-delays-down-syndrome.md, hoxha-2021-folic-acid-autism-systematic-review.md, good-2018-acetaminophen-amoxicillin-glyphosate-autism.md, lewandowska-2022-microbiota-asd-systematic-review.md, hrnciarova-2021-biological-response-modifier-asd-microbiome.md, roussin-2020-gut-microbiota-pathophysiology-asd.md, alharthi-2021-human-gut-microbiome-asd.md, wang-2023-microbiota-gut-brain-axis-neurodevelopmental.md, zhuang-2024-asd-pathogenesis-biomarker-intervention.md, wang-2024-understanding-autism-causes-diagnosis-therapies.md, fattorusso-2016-asd-gut-microbiota.md]
source_count: 22
tags: [autism-spectrum-disorder, neurodevelopmental, zinc, lead, mercury, cadmium, copper, mis-metallation, SHANK3, gut-brain-axis, propionic-acid, developmental-vulnerability, metal-profile]

metallomic_signature:
  elevated: [lead, mercury, cadmium, copper]
  depleted: [zinc, iron, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[bacteroides]]"
      role: "Increased in ASD; produces propionic acid (PPA), a neurotoxic SCFA elevated in ASD children"
    - taxon: "[[parabacteroides]]"
      role: "Increased in ASD children"
    - taxon: "[[clostridium]]"
      role: "Overgrowth common in ASD; enabled by early antibiotic use; beta-glucuronidase producer"
    - taxon: "[[eubacterium-coprostanoligenes]]"
      role: "Correlated with high GI symptom scores; decreased by FMT"
  depleted:
    - taxon: "[[coprococcus]]"
      role: "SCFA producer; consistently depleted in ASD"
    - taxon: "[[bifidobacterium]]"
      role: "Immune modulator; depleted in ASD children"
    - taxon: "[[lactobacillus]]"
      role: "Immune regulator; depleted by high-salt diet which induces ASD-like behavior in male mice"

nutritional_immunity:
  elevated: [calprotectin, lactoferrin, transferrin, hepcidin, lipocalin-2, TNF-alpha, IL-1, IL-6, IL-2, IL-17, IFN-gamma, NF-kappaB, malondialdehyde, folate-receptor-autoantibodies, propionic-acid]
  depleted: [glutathione, sulfate, zinc, IL-10, TGF-beta, NRF2-function, ZO-1, claudins, occludin]

ecological_features: [gut-barrier-dysfunction, propionic-acid-neurotoxicity, oxidative-stress, BBB-disruption, demyelination, excitatory-inhibitory-imbalance, one-carbon-metabolism-disruption, sulfate-depletion, early-antibiotic-disruption, maternal-microbiome-transmission, microbial-zinc-competition, metal-profile-not-single-metal]

virulence_enzymes: [beta-glucuronidase, ALA-dehydrase-inhibited-by-Pb, CNPase-inhibited-by-Pb]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[depression]]"
    shared_metals: [zinc-depleted, iron]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [gut-barrier-dysfunction, oxidative-stress, tryptophan-metabolism]
    overlap_score: 0.55
  - condition: "[[schizophrenia]]"
    shared_metals: [copper, zinc-dysregulated]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted]
    shared_ecological: [gut-barrier-dysfunction, neuroinflammation, gut-brain-axis]
    overlap_score: 0.50
  - condition: "[[type-1-diabetes]]"
    shared_metals: [zinc-depleted, lead, cadmium]
    shared_taxa: [bacteroides-enriched, bifidobacterium-depleted]
    shared_ecological: [gut-barrier-dysfunction, autoimmunity, early-life-dysbiosis]
    overlap_score: 0.48

cureva_status: partial
validated_interventions: [nac-autism, zinc-supplementation-autism, fmt-autism]
stops: []
karen_brain_primitives: [1, 2, 3, 5]
---

# Autism Spectrum Disorder — Microbiome Signature

A neurodevelopmental condition affecting ~1 in 36 children, characterized by differences in social communication and repetitive behaviors. ASD presents the most compelling convergence of **essential metal depletion** (Zn, Fe) and **toxic metal elevation** (Pb, Hg, Cd) in the vault. The unifying mechanism is **mis-metallation** — toxic metals displacing zinc from the ~300+ zinc metalloenzymes and synaptic proteins (including SHANK3, a major ASD gene). The gut-brain axis completes the picture: 30-70% of ASD children have GI disturbances, and all four metal exposures (Hg, Cd, Pb) plus zinc deficiency converge on gut barrier dysfunction as a shared pathology.

## Metallomic Signature

**Confidence: moderate** — 25+ individual metal studies reviewed in two systematic analyses; cross-sectional design limits causal inference.

The ASD metallomic signature is distinctive because it is a **metal profile (metallome)**, not a single-metal effect. Changes in one metal trigger parallel changes in others through shared binding sites, transport systems, and competitive interactions [[blazewicz-2023-metal-profiles-asd]].

- **[[Zinc]] depleted**: The most consistent finding. Decreased hair Zn across multiple cohorts. ~10% of the human genome encodes Zn-binding proteins. SHANK3 mutations are among the most common single-gene ASD causes; zinc modulates SHANK3 at the postsynaptic density. Prenatal Zn deficiency causes ASD-like behavior in mice; prenatal zinc therapy prevents VPA-induced ASD-like behaviors. Approximately 20% of dietary zinc may be absorbed by gut bacteria rather than host — microbial competition worsens deficiency.
- **[[Lead]] elevated**: Elevated in hair, blood, teeth, nails across 25+ studies. Even low blood Pb at ages 7-8 predicts more autistic behaviors at 11-12 [[tizabi-2023-lead-gut-microbiota-asd]]. Pb competes with Ca for GABA/glutamate binding sites, disrupting excitatory/inhibitory balance.
- **[[Mercury]] elevated**: Elevated in blood, urine, hair, teeth. Children with ASD had double Hg in baby teeth vs. controls. Hg inhibits glutathione, increases ROS.
- **[[Cadmium]] elevated**: Elevated in hair, urine. Disrupts thiol groups, damages oligodendrocyte progenitors (demyelination), reduces butyrate-producing bacteria.
- **[[Copper]] elevated (variable)**: Significantly elevated plasma Cu and Cu/Zn ratio in ASD vs. controls [[russo-2011-copper-zinc-autism-gi-disease]]. Zinc therapy normalized Cu levels, especially in ASD+GI disease subgroup.
- **[[Iron]] depleted**: Co-occurs with zinc deficiency, compounding neurodevelopmental vulnerability.
- **[[Glutathione]] depleted**: Hg inhibits GSH; Cd disrupts thiol groups. Acetaminophen, glyphosate, and amoxicillin all deplete GSH/sulfate [[good-2018-acetaminophen-amoxicillin-glyphosate-autism]].

## Environmental Exposures

- **Prenatal**: The developing fetus is most vulnerable; immature BBB is more permeable to metals
- **Dietary**: Contaminated baby foods, rice cereals (As), fish (MeHg), tap water (Pb)
- **Household**: Lead paint (pre-1978 housing), contaminated soil
- **Maternal**: Mercury from dental amalgams, occupational exposure
- **Air pollution**: Particulate-bound metals in urban environments
- **Early antibiotics**: Higher antibiotic use in first 3 years in ASD children (P<0.001) — disrupts metal-sequestering commensal colonization during critical windows [[good-2018-acetaminophen-amoxicillin-glyphosate-autism]]

## Nutritional Immunity Response

**Confidence: moderate** — GSH depletion well-supported; cytokine data from reviews + animal models.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| **Glutathione** | Depleted | Hg, Cd deplete GSH; acetaminophen/amoxicillin/glyphosate compound depletion; NAC (GSH precursor) improved ASD irritability |
| **TNF-alpha, IL-1, IL-6** | Elevated | Pb and Hg trigger proinflammatory cytokines |
| **IL-2, IL-17** | Elevated | PPA-induced ASD model |
| **NF-kB** | Activated | PPA-induced model; reduced by UDCA |
| **Folate receptor autoantibodies** | Present | Block folate transport across BBB causing cerebral folate deficiency [[hoxha-2021-folic-acid-autism-systematic-review]] |
| **Cu/Zn ratio** | Elevated | Candidate biomarker; normalized by zinc therapy [[russo-2011-copper-zinc-autism-gi-disease]] |

## Mis-metallation Events

**Mis-metallation is proposed as the unifying mechanism for ASD** ([[blazewicz-2023-metal-profiles-asd]], [[ogrady-2025-metal-dyshomeostasis-asd]]):

- **Pb/Hg/Cd displacing Zn**: Toxic metals compete with zinc for protein binding sites in the ~300+ zinc metalloenzymes, creating **functional zinc deficiency** even when absolute Zn levels are borderline. The zinc is displaced, not absent.
- **Pb mimicking Ca**: Lead substitutes for calcium in GABA receptors, glutamate transporters, and voltage-gated calcium channels, disrupting excitatory/inhibitory balance — a core ASD neurophysiological feature.
- **Cd replacing Zn in DNA-binding motifs**: Cadmium displaces zinc in zinc-finger transcription factors and metallothionein.
- **SHANK3 mis-metallation**: The NLGN-NRXN-SHANK synaptic pathway is zinc-dependent. SHANK3 protein function at the postsynaptic density requires zinc. Toxic metal displacement here directly impairs synaptogenesis.

## Taxonomic Analysis

**Confidence: moderate** — multiple sources describe ASD-associated taxa but with some inconsistencies; FMT trial provides interventional evidence.

### Enriched in ASD

| Taxon | Role | Evidence |
|-------|------|---------|
| [[Bacteroides]] | Produces propionic acid (PPA), the neurotoxic SCFA elevated in ASD | [[tizabi-2023-lead-gut-microbiota-asd]] |
| [[Parabacteroides]] | Increased in ASD children | [[tizabi-2023-lead-gut-microbiota-asd]] |
| [[Clostridium]] | Overgrowth enabled by early antibiotic use; beta-glucuronidase producer | [[good-2018-acetaminophen-amoxicillin-glyphosate-autism]], [[tizabi-2023-lead-gut-microbiota-asd]] |

### Depleted in ASD

| Taxon | Role | Evidence |
|-------|------|---------|
| [[Coprococcus]] | SCFA producer | [[tizabi-2023-lead-gut-microbiota-asd]] |
| [[Bifidobacterium]] | Immune modulator, commensal | [[tizabi-2023-lead-gut-microbiota-asd]] |
| [[Lactobacillus]] | Immune regulator; depleted by HSD which induces ASD-like behavior | [[afroz-2021-high-salt-diet-microbiome-autism-behavior-mice]] |

### Phylum-Level Shift (Pb-Induced)
Pb exposure increases Firmicutes and Bacteroidetes (inflammatory) while decreasing Proteobacteria and Fusobacteria. This is time-dependent — more prominent in the first 4 weeks, with compensatory mechanisms developing later.

## Ecological State

**Confidence: high** — gut barrier dysfunction established across systematic review of 37 studies.

### 1. Metal-Driven Gut Barrier Dysfunction
All four metal exposures (Hg, Cd, Pb) AND zinc deficiency converge on intestinal barrier dysfunction and increased permeability ([[ogrady-2025-metal-dyshomeostasis-asd]], systematic review, 37 studies). GI symptoms correlate with ASD severity. 30-70% of ASD children have GI disturbances.

### 2. Propionic Acid Neurotoxicity
PPA (produced by Bacteroidetes) is elevated in ASD children and causes brain morphological changes, neuroinflammation, and ASD-like behavior in rodent models. PPA injection is an established ASD animal model. UDCA ameliorated PPA-induced damage [[karakas-2023-ursodeoxycholic-acid-propionic-acid-autism-animal]].

### 3. BBB Disruption
The developing BBB is particularly vulnerable to metals. Pb crosses the BBB; combined with gut barrier dysfunction, toxic metals and bacterial products gain systemic and CNS access.

### 4. Demyelination
Pb reduces CNPase activity in oligodendrocytes. Cd damages oligodendrocyte progenitors. MeHg downregulates MBP. Multiple metals converge on white matter damage.

### 5. Sulfate and One-Carbon Metabolism Disruption
Acetaminophen, glyphosate, and amoxicillin all deplete sulfate required for detoxification [[good-2018-acetaminophen-amoxicillin-glyphosate-autism]]. One-carbon metabolism (folate-methionine cycle) disrupted across ASD and shared with Down syndrome [[orozco-2019-metabolomics-autism-developmental-delays-down-syndrome]].

### 6. Maternal Microbiome Transmission
High-salt diet altered maternal gut microbiome, transmitted to offspring, caused ASD-like behavior in **male mice only** — recapitulating the ~4:1 male predominance in ASD [[afroz-2021-high-salt-diet-microbiome-autism-behavior-mice]].

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[Depression]]** | Zn depleted, Fe | F. prausnitzii depl., Lachnospiraceae depl. | Gut barrier, oxidative stress, tryptophan | 0.55 |
| **[[Schizophrenia]]** | Cu, Zn dysregulated | E. coli, Lachnospiraceae depl. | Gut barrier, neuroinflammation, gut-brain | 0.50 |
| **[[Type 1 Diabetes]]** | Zn depleted, Pb, Cd | Bacteroides enriched, Bifidobacterium depl. | Gut barrier, autoimmunity, early-life dysbiosis | 0.48 |

## Validated Interventions

| Intervention | Class | Evidence | Key Outcome |
|-------------|-------|---------|-------------|
| **N-acetylcysteine (NAC)** | Supplement | RCT pilot, n=33, 12 weeks | ABC irritability improved (d=0.96, P<0.01); glutathione precursor |
| **Zinc supplementation** | Supplement | Case-series | Zn increased, Cu decreased, hyperactivity/stimming improved in ASD+GI subgroup |
| **FMT** | Biophysical | Open-label, n=40, 4 weeks | GI symptoms decreased 35%; microbiota shifted toward TD; benefits lost after cessation |

**Promising:**
- UDCA (ursodeoxycholic acid) — ameliorated PPA-induced ASD-like changes in animal model [[karakas-2023-ursodeoxycholic-acid-propionic-acid-autism-animal]]
- Prenatal folic acid — 600 ug may reduce ASD risk; post-diagnosis folinic acid improved symptoms [[hoxha-2021-folic-acid-autism-systematic-review]]
- Metal chelation (EDTA, DMSA) — reduces toxic metal burden in animal models [[ogrady-2025-metal-dyshomeostasis-asd]]
- GOS prebiotics — promote beneficial bacteria; may reduce metal absorption [[tizabi-2023-lead-gut-microbiota-asd]]

## Open Questions

1. **Is mis-metallation testable as a diagnostic biomarker?** Could measurement of metal occupancy at SHANK3 or SOD1 binding sites serve as a diagnostic marker?
2. **Can prenatal zinc supplementation prevent ASD?** Animal evidence is strong; human trials in at-risk populations are warranted.
3. **Does microbial zinc competition contribute meaningfully to host Zn deficiency?** The 20% absorption figure implies significant diversion.
4. **Is PPA the causal neurotoxic mediator?** PPA injection models ASD, but is endogenous PPA from Bacteroidetes sufficient at physiological concentrations?
5. **Why the male predominance?** Maternal microbiome transmission in HSD model affected only male offspring — hormonal or immune sexual dimorphism?

## Knowledge Primitives Applied

- **1. Metals as Selective Pressures** — Pb, Hg, Cd alter gut microbiota composition; metal profile shapes the ecological landscape
- **2. Nutritional Immunity as Interpretive Constraint** — Zn depletion may partly reflect microbial competition, not just dietary deficiency
- **3. Mis-metallation and Toxic Metal Entry** — Pb/Hg/Cd displacing Zn from SHANK3, metalloenzymes, and transcription factors; Pb mimicking Ca in synaptic signaling
- **5. Two-Sided Ecological Engineering** — Restore butyrate producers AND restrict toxic metals; NAC addresses glutathione while FMT addresses dysbiosis
