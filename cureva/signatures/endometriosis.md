---

title: "Endometriosis — Microbiome Signature"
type: signature
created: 2026-04-09
updated: 2026-04-13
last_substantive_update: 2026-04-13
paper_count: 28
sources: [pendergrass-2026-endometriosis-conference, zinc-endometriosis-2024, lactoferrin-genital-2019, endo-vaginal-microbiota-glycome, altered-microbiota-ovarian-endometrioma-2021, antibiotics-metronidazole-endo-2019, associations-endo-gut-2020, fecal-metabolomics-endo-2020, effect-endo-fecal-bacteriota-2019, endo-induces-gut-alterations-2018, gut-imbalance-hormone-endo-2020, inflammatory-cytokines-peritoneal-2018, microbiome-deep-endo-2020, microbiome-lower-genital-chinese, microbiota-composition-distribution-2020, molecular-intrauterine-colonization-2016, molecular-cervical-mucus-2019, oral-vaginal-stool-signatures-2023, endobiota-study-2018, vaginal-microbiome-rASRM-2019, vaginal-microbiome-pelvic-pain, bacterial-contamination-hypothesis-2017, current-updates-microbiome-endo-2023, gut-vaginal-meta-analysis-2023, gut-microbiome-1000-individuals-2024, bidirectional-endo-microbiome-2023, microbiome-and-endometriosis-2021, vaginal-microecological-2022]
source_count: 28
tags: [gynecological, estrogen-dependent, chronic-inflammatory]

# Confidence per layer
confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: high

# Cross-condition pattern detection
associated_conditions:
  - condition: "[[pcos]]"
    shared_metals: [nickel, iron, zinc]
    shared_taxa: [escherichia-coli, bacteroides-fragilis, lachnospiraceae]
    shared_ecological: [estrogen-recirculation, dysbiosis, hormonal-dysregulation]
    overlap_score: 0.62
  - condition: "[[IBS]]"
    shared_metals: [nickel, iron]
    shared_taxa: [escherichia-coli, lachnospiraceae, ruminococcus]
    shared_ecological: [dysbiosis, leaky-gut, SCFA-depletion]
    overlap_score: 0.51
  - condition: "[[breast-cancer]]"
    shared_metals: [cadmium, iron, nickel]
    shared_taxa: [escherichia-coli, bacteroides-fragilis]
    shared_ecological: [estrogen-recirculation, beta-glucuronidase-activity, biofilm]
    overlap_score: 0.55
  - condition: "[[ovarian-cancer]]"
    shared_metals: [iron, cadmium, nickel]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum]
    shared_ecological: [hypoxia, biofilm, peritoneal-microbiome-disruption]
    overlap_score: 0.47

karen_brain_primitives: [1, 3, 4, 5, 6, 7, 9]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [zinc, iron, cadmium, lead, nickel]
  depleted: [glutathione]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Primary pathogen — all Zn/Fe/Ni enzymes, estrogen deconjugation via beta-glucuronidase"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Zn-dependent BFT toxin, iron piracy via siderophores, beta-glucuronidase, strict anaerobe indicating hypoxia"
    - taxon: "[[streptococcus-agalactiae]]"
      role: "Group B Strep — Zn/Ni critical cofactors, beta-glucuronidase positive, iron piracy"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Zn/Ni-dependent enzymes, oxygen consumption creating local hypoxia, NOT involved in estrogen deconjugation"
    - taxon: "[[candida-albicans]]"
      role: "Functional shielding — biofilms consume O₂, co-aggregates with F. nucleatum and E. coli, enhances epithelial colonization of Strep, NOT noise"
    - taxon: "[[lactobacillus]]"
      role: "Enriched in gut/peritoneum but DEPLETED in vaginal cavity — translocation likely; nickel-dependent, glyoxalase-positive"
  depleted:
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — lost competitive advantage in iron-rich pro-inflammatory environment"
    - taxon: "[[ruminococcus]]"
      role: "SCFA producers — lacked defense systems to survive iron-rich environment"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [calprotectin, lactoferrin, transferrin, hepcidin, lipocalin-2]
  depleted: [glutathione]

# Layer 4: Ecological features
ecological_features: [hypoxia, biofilm, estrogen-recirculation, functional-shielding, fermentative-metabolism, acidic-microenvironment]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [zinc-metalloprotease, NiFe-hydrogenase, nickel-urease, nickel-glyoxalase, beta-glucuronidase, siderophores]

# Cureva pipeline status
cureva_status: complete
validated_interventions: [low-nickel-diet, low-red-meat-diet, low-fat-diet, citrus-fruits, ecoli-nissle-1917, saccharomyces-boulardii, lactoferrin-supplementation, nac-supplementation, hbot]
stops: [stop-iron-supplementation-endometriosis, stop-zinc-supplementation-endometriosis]
platform: cureva
---

## Overview

**Endometriosis** is a chronic estrogen-dependent inflammatory condition affecting approximately 10% of reproductive-age women worldwide. The conventional view treats it as a hormonal or immune disorder. The microbiome signature framework reveals it as an **ecological disease** driven by metal-dependent microbial communities that perpetuate the condition through estrogen recirculation, hypoxia, biofilm formation, and functional shielding.

This is the first disease signature fully analyzed using the Karen's Brain pipeline, presented at the Amsterdam Endometriosis Conference by **[[karen-pendergrass]]** [[pendergrass-2026-endometriosis-conference]]. The signature has been validated and expanded with data from **27 additional peer-reviewed papers** spanning microbiome profiling, metabolomics, multi-site sequencing, and meta-analyses.

## Metallomic Signature

The tissue metallomic signature in endometriosis is characterized by **elevated zinc, iron, cadmium, lead, and nickel** [[pendergrass-2026-endometriosis-conference]]. Cross-referencing 27 additional papers confirms this with quantified consensus frequencies:

| Metal | Literature Frequency | Role |
|-------|---------------------|------|
| **Nickel** | 77.8% (21/27 papers) | Highest consensus — cofactor for urease, glyoxalase, hydrogenase; Candida biofilm enhancer |
| **Iron** | 70.4% (19/27 papers) | Siderophore competition; functional anemia via hepcidin; retrograde menstruation exposure |
| **Lead** | 59.3% (16/27 papers) | Environmental burden; mis-metallation via Ca channels; synergistic with Cd for oxidative stress |
| **Manganese** | 25.9% (7/27 papers) | Cofactor for superoxide dismutase in pathogenic taxa |
| **Cadmium** | 18.5% (5/27 papers) | Mis-metallation; synergistic with Pb; metalloestrogen activity |
| **Zinc** | 14.8% (4/27 papers) | Metalloprotease cofactor; calprotectin target; immune function |
| **Copper** | 14.8% (4/27 papers) | Microbial virulence cofactor; ceruloplasmin involvement |

This metal profile creates the selective pressure that shapes which taxa thrive and which taxa die. Taxa with robust efflux pumps or those that can survive iron-rich, pro-inflammatory environments outcompete taxa that lack these defenses (Primitive 1: Metals as Selective Pressures).

**Glutathione is depleted** — and this is the only nutritional immunity factor capable of neutralizing cadmium and lead. This gap in host defense is a key vulnerability in the signature.

## Environmental Exposures

Sources of the metal burden include:

| Exposure | Metals Contributed |
|----------|-------------------|
| **Smoking** | Cd, Pb, Ni |
| **Stainless steel cookware** | Ni, Cr, Fe |
| **Pesticides (organophosphates)** | Various heavy metals |
| **Water supply** | Pb, Cd, variable |
| **Cosmetics** | Pb, Ni, Cd |
| **Jewelry** | Ni |
| **Retrograde menstruation** | Fe (microenvironment exposure) |
| **Diet** (largest contributor) | Zn, Fe, Ni, Cd, Pb |

**Brassica vegetables** are cadmium, lead, zinc, and nickel hyperaccumulators — and increased brassica consumption was found as a **risk factor** for endometriosis, consistent with the metallomic signature [[pendergrass-2026-endometriosis-conference]].

## Nutritional Immunity Response

The host is actively fighting the metal/microbial imbalance. All of the following are **elevated** in endometriosis [[pendergrass-2026-endometriosis-conference]]:

| Factor | Function |
|--------|----------|
| **[[calprotectin]]** | Chelates and sequesters zinc |
| **[[lactoferrin]]** | Chelates iron (and nickel) |
| **[[transferrin]]** | Chelates iron locally |
| **[[hepcidin]]** | Increased — indicator of **functional anemia**, NOT true iron deficiency |
| **[[lipocalin-2]]** | Siderophore-binding protein — blocks pathogen iron acquisition |

**[[glutathione]]** is **depleted** — the only factor that can neutralize cadmium and lead (Primitive 2: Nutritional Immunity as Interpretive Constraint).

The elevation of hepcidin is particularly important: it signals that the body is deliberately withholding iron from pathogens. Low serum iron in endometriosis patients is a host defense strategy, not a nutritional deficiency.

## Mis-metallation Events

**Cadmium and lead both enter cells through calcium channels**, displacing correct cofactors like zinc or iron (Primitive 3: Mis-metallation and Toxic Metal Entry). When cadmium and lead are combined in the environment, they produce a **synergistic effect** generating even more oxidative stress and hypoxia than either metal alone [[pendergrass-2026-endometriosis-conference]].

This mis-metallation event likely contributes to the initial ecological disruption that shifts the microbiome toward its disease state.

## Taxonomic Analysis

Paper-validated consensus from 27 studies confirms the conference transcript findings. Enriched taxa frequencies: Proteobacteria (22.2%), Streptococcus (22.2%), Firmicutes (14.8%), [[gardnerella|Gardnerella]] (11.1%), Candida (7.4%), Bacteroides (7.4%), Fusobacterium (7.4%). Depleted: Lactobacillus (11.1% — specifically vaginal depletion). The multi-site nature of endometriosis dysbiosis is confirmed across gut, vaginal, cervical, and peritoneal compartments.

### Enriched Taxa

| Taxon | Metal Dependencies | Key Enzymes | Pathogenic Role |
|-------|-------------------|-------------|-----------------|
| **[[escherichia-coli]]** | Zn, Fe, Ni | Zn-metalloprotease, NiFe-hydrogenase, Ni-urease, Ni-glyoxalase, beta-glucuronidase, siderophores | Primary pathogen — ticks ALL enzyme and feature boxes; estrogen deconjugation ability |
| **[[bacteroides-fragilis]]** | Zn, Fe | BFT (Zn-dependent), hydrogenase (Fe), beta-glucuronidase | Iron piracy from other microbes; strict anaerobe = hypoxia indicator |
| **[[streptococcus-agalactiae]]** | Zn, Ni | Beta-glucuronidase | Group B Strep; iron piracy |
| **[[fusobacterium-nucleatum]]** | Zn, Ni | O₂ consumption enzymes | Decreases local O₂ by metabolizing it; NOT involved in estrogen deconjugation |
| **[[candida-albicans]]** | Ni (biofilm enhancement) | Biofilm formation, functional shielding | Biofilms consume O₂ → anaerobic pockets for B. fragilis and F. nucleatum; co-aggregates with F. nucleatum show reduced cytokine output (functional shielding); mixed biofilms with E. coli reduce host defenses; nickel increases co-aggregate biofilm biomass |
| **[[lactobacillus]]** | Ni | Glyoxalase (Ni-dependent) | PARADOX: enriched in gut/peritoneum but depleted in vaginal cavity; translocation likely; gut microbiome is better predictor of endometriosis than vaginal microbiome |

### Depleted Taxa

| Taxon | Normal Function | Why Lost |
|-------|----------------|----------|
| **[[lachnospiraceae]]** | SCFA production (butyrate), colonocyte nutrition | Lacked robust efflux pump systems to survive in iron-rich, pro-inflammatory environment |
| **[[ruminococcus]]** | SCFA production, fiber fermentation | Same — lacked defense systems for the metal-enriched niche |

The loss of SCFA producers has downstream consequences: **colonocyte dysfunction → intestinal permeability → translocation** — further perpetuating the disease cycle.

## Virulence Enzymes and Features

The taxa that persist in endometriosis express a consistent set of metal-dependent virulence enzymes (Primitive 4: Microbial Metal Dependencies as Achilles' Heels):

| Enzyme | Metal Cofactor | Function | Taxa Expressing |
|--------|---------------|----------|-----------------|
| **Zinc metalloprotease** | Zn | Degrades host tissues, inhibits host immune system | E. coli, B. fragilis (BFT) |
| **NiFe-hydrogenase (I, II, III)** | Fe, Ni | Decreases local O₂ saturation → hypoxic environment for strict/facultative anaerobes | E. coli |
| **Nickel urease** | Ni | Increases local pH via ammonia + CO₂ — disrupts vaginal Lactobacillus pH requirements | E. coli, others |
| **Nickel glyoxalase** | Ni | Enables persistence against neutrophils in blood — allows pathogens to circulate systemically | E. coli, Lactobacillus, others |
| **Beta-glucuronidase** | — | Deconjugates estrogen glucuronides → increases hepatic estrogen recirculation (estrobolome) | E. coli, B. fragilis, GBS |
| **Siderophores** | Fe (acquisition) | Chelate and uptake host iron — essential for growth and biofilm formation | E. coli, B. fragilis |

**Key insight**: Glyoxalase is the enzyme that allows pathogens to evade neutrophils in the bloodstream. It is **nickel-dependent**. Remove the nickel, and you disable this evasion mechanism across all glyoxalase-positive pathogens simultaneously [[pendergrass-2026-endometriosis-conference]].

## Interkingdom Relationships

**[[candida-albicans]]** is NOT an incidental finding and is NOT noise — it is a critical component of the disease ecology that 16S studies fail to detect [[pendergrass-2026-endometriosis-conference]] (Primitive 6: Interkingdom Relationships and Functional Shielding).

Candida performs multiple ecological functions in the endometriosis signature:

**Oxygen depletion**: Candida biofilms consume oxygen, creating anaerobic pockets that allow obligate anaerobes like **B. fragilis** and **F. nucleatum** to thrive.

**Functional shielding**: Co-aggregates of Candida with F. nucleatum show tight cohesion and **reduced cytokine output** — suggesting the fungal biofilm shields bacteria from immune detection by neutrophils and natural killer cells.

**Epithelial colonization enhancement**: Candida enhances epithelial colonization by Streptococcus species.

**Mixed biofilms**: Candida creates mixed biofilms with E. coli that reduce host defenses. Nickel **significantly increases the biomass** of these co-aggregate biofilms.

## Dominant Mechanisms (Paper-Validated)

Cross-paper analysis of 27 studies confirms the following mechanisms by frequency:

| Mechanism | Frequency | Significance |
|-----------|-----------|-------------|
| **Inflammation** | 74.1% (20/27) | Near-universal finding; IL-6, TNF-a, NF-kB activation |
| **Endotoxin/LPS** | 59.3% (16/27) | LPS from Gram-negative dominance drives innate immune activation |
| **Dysbiosis** | 55.6% (15/27) | Multi-site (gut, vaginal, peritoneal) microbial disruption |
| **Oxidative stress** | 22.2% (6/27) | Iron-catalyzed Fenton chemistry; depleted glutathione |
| **Estrobolome dysfunction** | 22.2% (6/27) | Beta-glucuronidase-mediated estrogen recirculation |
| **Epithelial barrier dysfunction** | 7.4% (2/27) | Tight junction loss → translocation |
| **Leaky gut** | 7.4% (2/27) | Gut-to-peritoneum microbial translocation |

**Key metabolite**: Lipopolysaccharide was discussed in 15/27 papers (55.6%), making it the most consistently reported metabolite in endometriosis microbiome research. Beta-glucuronidase was documented in 2 papers linking estrobolome activity to disease progression.

## Ecological State

The endometriosis lesion microenvironment is characterized by:

**Hypoxia**: Driven by NiFe-hydrogenase activity (E. coli), oxygen consumption (F. nucleatum), and oxygen depletion by Candida biofilms. This creates a suitable environment for strict and facultative anaerobes.

**Fermentative metabolism**: Facultative anaerobes switch to fermentation in low-oxygen conditions. This makes the lesion microenvironment **acidic, zinc-rich, iron-rich, and pro-inflammatory** — which is growth-promoting, further amplifying lesion survival and invasion. This is a self-perpetuating cycle.

**pH disruption**: Nickel-dependent urease increases local pH via ammonia and CO₂, disrupting the tightly regulated acidic pH that vaginal Lactobacillus require.

**Estrogen recirculation**: Beta-glucuronidase-positive taxa deconjugate estrogen glucuronides, driving hepatic estrogen recirculation — a hallmark of endometriosis (Primitive 7: Estrobolome and Hormone Recirculation).

**Biofilm architecture**: Siderophore-producing pathogens form biofilms that are iron-dependent and resist immune clearance, particularly when reinforced by Candida functional shielding.

## Validated Interventions

### Dietary

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[low-nickel-diet]]** | Disables Ni-dependent glyoxalase (immune evasion), urease (pH disruption), hydrogenase (hypoxia); reduces Candida co-aggregate biofilm biomass | **Validated** — multiple clinical studies show efficacy, mechanism now explained |
| **[[low-red-meat-diet]]** | Reduces free iron and zinc available to pathogens | **Validated** |
| **[[low-fat-diet]]** | Reduces E. coli growth (E. coli thrives on high-fat substrates) | **Validated** |
| **[[citrus-fruits]]** | Reduce circulating LPS; protective especially in smokers | **Validated** |
| **Avoid brassica vegetables** | Brassicas are Cd/Pb/Zn/Ni hyperaccumulators — directly feed the metallomic signature | **Validated** — brassica consumption is a risk factor |

### Probiotic / Microbial Competition

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[ecoli-nissle-1917]]** | Lacks virulence genes; outcompetes pathogenic E. coli, B. fragilis, GBS, F. nucleatum, C. albicans via superior siderophore systems + Ni uptake; competes even in hypoxic environments | **Validated** |
| **[[saccharomyces-boulardii]]** | Non-pathogenic yeast that outcompetes Candida; cell walls bind cadmium and lead | **Validated** |

### Supplemental / Supportive

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[lactoferrin-supplementation]]** | Supports existing nutritional immunity (already elevated); chelates iron + nickel away from pathogens; ALTERNATIVE to iron supplementation | **Validated** |
| **[[nac-supplementation]]** | Replenishes depleted glutathione — the only factor that neutralizes Cd and Pb | **Validated** |

### Novel / Biophysical

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[hbot]]** | Hyperbaric oxygen therapy — directly counters hypoxic niche exploited by strict/facultative anaerobes | **Promising** — complete remission in animal model; not yet clinically investigated in humans |

### Prebiotic Strategy (Two-Sided Ecological Engineering)

Restoring depleted SCFA producers ([[lachnospiraceae]], [[ruminococcus]]) requires **distal-fermenting prebiotics** with high molecular weight to reach the lower colon: gum arabic, PHGG (partially hydrolyzed guar gum), psyllium husk. Avoid inulin if E. coli overgrowth is present (proximal fermentation feeds SIBO). **Tributyrin** supplementation provides missing butyrate directly to support colonocyte function while the ecosystem is being restored (Primitive 5: Two-Sided Ecological Engineering).

## STOPs

| STOP | Conventional Rationale | Why Counterproductive |
|------|----------------------|----------------------|
| **[[stop-iron-supplementation-endometriosis]]** | Patient presents with anemia/low serum iron | Hepcidin elevation indicates **functional anemia** (host defense), NOT true deficiency. Iron feeds siderophore-producing pathogens, amplifies the iron-rich pro-inflammatory environment |
| **[[stop-zinc-supplementation-endometriosis]]** | Patient presents with low serum zinc | Calprotectin is already sequestering zinc as host defense. Zinc supplementation feeds Zn-metalloprotease-producing pathogens that degrade host tissues |

## Open Questions

- **HBOT in humans**: Complete remission in animal models — when will this be clinically investigated?
- **Metformin + lactoferrin synergy**: Does combined biofilm disruption + iron chelation show synergistic clinical benefit?
- **Vaginal vs. gut Lactobacillus paradox**: Why is Lactobacillus enriched in gut/peritoneum but depleted in vaginal cavity? Is translocation the complete explanation?
- **Chlorhexidine/dental exposure**: Parallel to breast cancer mouthwash finding — does dental work or antiseptic use correlate with endometriosis onset?
- **Cadmium-lead synergy quantification**: What is the dose-response curve for the synergistic oxidative stress from combined Cd+Pb exposure?

## Knowledge Primitives Applied

All 9 Karen's Brain primitives are active in this signature:

1. **Metals as Selective Pressures** — Zn/Fe/Cd/Pb/Ni profile selects for tolerant/dependent organisms
2. **Nutritional Immunity as Interpretive Constraint** — Hepcidin elevation = functional anemia, not deficiency
3. **Mis-metallation and Toxic Metal Entry** — Cd/Pb displace Zn/Fe via calcium channels
4. **Microbial Metal Dependencies as Achilles' Heels** — Ni restriction disables glyoxalase across all pathogens
5. **Two-Sided Ecological Engineering** — Suppress pathogens AND restore SCFA producers with distal prebiotics
6. **Interkingdom Relationships and Functional Shielding** — Candida biofilms shield bacteria from immune detection
7. **Estrobolome and Hormone Recirculation** — Beta-glucuronidase drives estrogen-dependent disease progression
8. **Siderophore Competition and Iron Ecology** — E. coli Nissle 1917 outcompetes via superior siderophores
9. **Oxygen State as Ecological Determinant** — Hypoxia maintained by hydrogenase + Candida → HBOT as intervention

## Key Sources

- [[zinc-endometriosis-2024]]
- [[lactoferrin-genital-2019]]
- [[endo-vaginal-microbiota-glycome]]
- [[altered-microbiota-ovarian-endometrioma-2021]]
- [[antibiotics-metronidazole-endo-2019]]
- [[associations-endo-gut-2020]]
- [[fecal-metabolomics-endo-2020]]
- [[effect-endo-fecal-bacteriota-2019]]
- [[endo-induces-gut-alterations-2018]]
- [[gut-imbalance-hormone-endo-2020]]
- [[inflammatory-cytokines-peritoneal-2018]]
- [[microbiome-deep-endo-2020]]
- [[microbiome-lower-genital-chinese]]
- [[microbiota-composition-distribution-2020]]
- [[molecular-intrauterine-colonization-2016]]
