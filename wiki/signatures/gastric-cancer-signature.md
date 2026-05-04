---
title: "Gastric Cancer — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - giambo-2021-toxic-metal-exposure-gut-microbiota-review
  - zhu-2024-toxic-essential-metals-gut-microbiota
  - briffa-2020-heavy-metal-pollution-environment-toxicology
  - jaishankar-2014-heavy-metal-toxicity-mechanisms
  - balali-mood-2021-toxic-mechanisms-five-heavy-metals
  - mishra-2022-molecular-mechanisms-heavy-metals-ckd
  - zhang-2022-metallomics-cancer-review
source_count: 7
tags: [gastric-cancer, helicobacter-pylori, nickel, cadmium, iron, lead, microbiome, carcinogenesis]

metallomic_signature:
  elevated: [nickel, cadmium, lead, iron-luminal]
  depleted: [selenium, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[helicobacter-pylori]]"
      role: "Primary causative organism -- Ni-dependent urease and [Ni-Fe] hydrogenase power colonization, CagA oncoprotein translocation drives Correa cascade"
    - taxon: "[[streptococcus]]"
      role: "Colonizes atrophic gastric mucosa after acid barrier loss; nitrosamine production potential"
    - taxon: "[[prevotella]]"
      role: "Oral/intestinal colonizer of atrophic stomach; contributes to inflammatory milieu"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Enriched in gastric cancer tissue; FadA-mediated E-cadherin disruption; shared with colorectal cancer pathway"
    - taxon: "[[escherichia-coli]]"
      role: "Opportunistic expansion in achlorhydric stomach; siderophore-mediated iron acquisition"
  depleted:
    - taxon: "[[lactobacillus]]"
      role: "Acid-producing competitor of H. pylori; immunomodulatory; protective functions lost in atrophic state"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer depleted in inflammatory environment; loss removes anti-inflammatory protection"

nutritional_immunity:
  elevated: [hepcidin, lactoferrin, calprotectin]
  depleted: [glutathione, selenium, gastric-acid]

ecological_features: [acid-barrier-loss, nickel-dependent-colonization, nitrosamine-production, Correa-cascade-progression, opened-niche-colonization, chronic-NF-kB-inflammation]

virulence_enzymes: [nickel-urease, NiFe-hydrogenase, CagA-T4SS-oncoprotein, siderophores, bacterial-nitrate-reductases]

confidence:
  metallomic: moderate
  taxonomic: high
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: high

associated_conditions:
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, cadmium]
    shared_taxa: [fusobacterium-nucleatum, escherichia-coli]
    shared_ecological: [chronic-inflammation, biofilm, iron-ecology]
    overlap_score: 0.45
  - condition: "[[pancreatic-cancer]]"
    shared_metals: [cadmium, iron]
    shared_taxa: [fusobacterium, porphyromonas-gingivalis]
    shared_ecological: [chronic-inflammation, oral-pathogen-translocation]
    overlap_score: 0.35
  - condition: "[[gerd]]"
    shared_metals: [nickel]
    shared_taxa: [helicobacter-pylori]
    shared_ecological: [acid-barrier-disruption, gastric-microbiome-shift]
    overlap_score: 0.30

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 8, 9]
---

# Gastric Cancer -- Microbiome Signature

## Overview

Gastric cancer is the fifth most common cancer worldwide and the third leading cause of cancer death, with over 1 million new cases annually. It stands unique among human cancers as the disease where a single microorganism -- [[helicobacter-pylori]] -- provides the dominant causal pathway, and where that pathogen's virulence depends critically on nickel-dependent metalloenzymes. The chain from nickel availability to urease/hydrogenase activation to CagA translocation to gastric carcinogenesis is one of the most direct metal-to-cancer pathways in human disease. This signature captures the metallomic environment that enables H. pylori colonization, the taxonomic shifts that occur as the disease progresses through the Correa cascade, and the ecological transformation of the gastric niche from acid-protected to pathogen-colonized.

This signature is built from 7 source pages, with H. pylori biology providing the strongest evidence base. The metallomic layer draws on both gastric-specific metal studies and the broader metal-cancer review literature.

## Metallomic Signature

Confidence: moderate -- nickel-H. pylori connection is well-established mechanistically; cadmium and lead epidemiology is consistent but not all from gastric-specific cohorts.

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| [[nickel]] | Elevated / dietary exposure | Essential cofactor for H. pylori urease (24 Ni ions per holoenzyme) and [Ni-Fe] hydrogenase; dietary nickel provides substrate for metalloenzymes; IARC Group 1 carcinogen (inhalation) [[giambo-2021-toxic-metal-exposure-gut-microbiota-review]] |
| [[cadmium]] | Elevated | IARC Group 1 carcinogen with stomach as target organ; accumulates in gastric mucosa; generates [[oxidative-stress]] and inhibits DNA repair [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| [[lead]] | Elevated / occupational | Associated with gastric cancer risk in occupational cohorts; inhibits DNA repair enzymes (PARP, OGG1); promotes epigenetic silencing of tumor suppressors [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| [[iron]] | Dysregulated (luminal excess / systemic deficiency) | H. pylori sequesters host iron; chronic gastritis causes iron deficiency anemia; paradoxically, luminal iron in atrophic state feeds pathobionts [[zhang-2022-metallomics-cancer-review]] |
| [[selenium]] | Depleted | Se deficiency associates with gastric cancer risk; impaired selenoprotein antioxidant defense via glutathione peroxidase [[zhang-2022-metallomics-cancer-review]] |
| Glutathione | Depleted | Nearly all toxic metals deplete GSH through direct conjugation or inhibition of recycling enzymes [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |

The critical insight: nickel is not merely a cofactor but a rate-limiting enabler of H. pylori virulence. Higher nickel availability drives more active urease and hydrogenase, enabling denser colonization, more CagA delivery, and higher cancer risk. This creates a direct, quantitative link between dietary/environmental nickel exposure and carcinogenic potential.

## Environmental Exposures

| Source | Metals | Relevance |
|--------|--------|-----------|
| Diet | Nickel (cocoa, nuts, legumes, whole grains) | Provides substrate for H. pylori metalloenzymes in infected individuals |
| Smoking | Cadmium (primary), lead | Each cigarette contains 1-2 ug Cd; 50% absorbed via lungs [[jaishankar-2014-heavy-metal-toxicity-mechanisms]] |
| Occupational | Nickel, cadmium, lead | Smelting, battery production, electroplating |
| Diet (salt) | -- | High salt intake damages gastric mucosa, enhances CagA expression |
| Smoked/processed foods | Cadmium, PAHs | Nitrosamines + metals compound carcinogenic exposure |
| Water contamination | Lead, arsenic | Variable by geography |

## Nutritional Immunity Response

Confidence: preliminary -- nutritional immunity markers not systematically profiled in the gastric cancer source corpus; inferred from general metal-cancer biology and H. pylori iron competition.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| Hepcidin | Elevated | Host iron sequestration response to chronic H. pylori infection; drives functional iron deficiency |
| Lactoferrin | Elevated | Iron-binding glycoprotein elevated in gastric inflammation; competes with H. pylori for iron |
| Calprotectin | Elevated | Zinc/manganese-sequestering protein; marker of gastric inflammation |
| Gastric acid | Depleted (progressive) | Parietal cell loss in atrophic gastritis eliminates acid barrier; transforms gastric ecology |
| Glutathione | Depleted | Metal-induced depletion removes antioxidant protection; permits oxidative DNA damage |
| Selenium/selenoproteins | Depleted | Impaired GPx-mediated antioxidant defense |

The progressive loss of gastric acid represents a unique nutritional immunity failure: the stomach's primary antimicrobial defense is destroyed by the pathogen itself, opening the niche to secondary colonizers.

## Taxonomic Analysis

Confidence: high -- H. pylori causality is IARC-established (Group 1 biological carcinogen); secondary colonizer patterns in atrophic gastritis are well-documented.

### Enriched Taxa

| Taxon | Role | Evidence |
|-------|------|---------|
| [[helicobacter-pylori]] | Primary causative organism. Ni-dependent urease neutralizes gastric acid (24 Ni ions/holoenzyme). [Ni-Fe] hydrogenase oxidizes H2 for energy. CagA oncoprotein translocation via T4SS drives Correa cascade from gastritis to adenocarcinoma. | Entity page; multiple sources |
| [[streptococcus]] | Colonizes atrophic gastric mucosa after acid barrier loss. Oral and intestinal origin. Potential nitrosamine production via nitrate reductase. | Entity page |
| [[prevotella]] | Oral/intestinal colonizer of the opened niche in atrophic gastritis. LPS production amplifies inflammatory cascade. | Entity page |
| [[fusobacterium-nucleatum]] | Enriched in gastric cancer tissue. FadA adhesin disrupts E-cadherin/beta-catenin signaling. Shared carcinogenic pathway with colorectal cancer. | [[zhang-2022-metallomics-cancer-review]] |
| [[escherichia-coli]] | Opportunistic expansion in achlorhydric stomach. Siderophore-mediated iron acquisition in the iron-dysregulated environment. | Inferred from metal-microbiome interaction data [[zhu-2024-toxic-essential-metals-gut-microbiota]] |

### Depleted Taxa

| Taxon | Normal Function | Why Lost |
|-------|----------------|----------|
| [[lactobacillus]] | Acid production; competition with H. pylori; immunomodulation | Outcompeted by H. pylori in acid-producing niche; becomes irrelevant when acid barrier is lost |
| [[faecalibacterium-prausnitzii]] | Primary butyrate producer; anti-inflammatory | Depleted in systemic inflammatory environment; loss removes Treg induction |

### The Correa Cascade as Ecological Succession

The gastric cancer microbiome is not static -- it evolves through the Correa cascade:
1. Normal mucosa: Acid-dominated, low bacterial diversity, H. pylori may colonize
2. Chronic gastritis: H. pylori dominant, nickel-dependent enzymes enable persistence, inflammation begins
3. Atrophic gastritis: Parietal cell loss, acid barrier fails, oral and intestinal bacteria colonize (Streptococcus, Prevotella, Neisseria, Rothia)
4. Intestinal metaplasia/dysplasia: Diverse pathobiont community, nitrosamine production, compounding carcinogenesis
5. Adenocarcinoma: Tumor microbiome dominated by pathobionts; Fusobacterium enrichment parallels CRC

## Virulence Enzymes and Features

Confidence: high -- H. pylori enzyme biochemistry is extensively characterized at the molecular level.

| Enzyme/Feature | Metal Cofactor | Function | Taxon |
|----------------|---------------|----------|-------|
| Nickel-urease | Ni (24 ions/holoenzyme) | Hydrolyzes urea to ammonia + CO2; locally neutralizes gastric acid; essential for colonization | H. pylori |
| [Ni-Fe] hydrogenase | Ni, Fe | Oxidizes H2 for energy generation in microaerobic gastric niche; essential for full colonization density | H. pylori |
| CagA oncoprotein + T4SS | ATP (hydrogenase-dependent) | Type IV secretion system injects CagA into epithelial cells; hijacks SHP-2, Grb2; disrupts cell polarity and proliferation control | H. pylori |
| Siderophores | Fe (acquisition) | Iron piracy from host iron-binding proteins; competitive advantage in iron-sequestered environment | E. coli, Enterobacteriaceae |
| Bacterial nitrate reductases | Mo, Fe | Convert dietary nitrates to N-nitroso compounds (potent mutagens) in achlorhydric stomach | Streptococcus, oral colonizers |

The nickel-urease and [Ni-Fe] hydrogenase represent the most clearly defined microbial metal dependency as Achilles' heel in the entire WikiBiome knowledge base. Without nickel, H. pylori cannot colonize, cannot deliver CagA, and cannot initiate the carcinogenic cascade.

## Ecological State

Confidence: moderate -- ecological progression well-described clinically; metal ecology dimension is inferred but mechanistically sound.

### 1. Nickel-Dependent Colonization
H. pylori's survival in the stomach depends entirely on nickel metalloenzymes. The gastric niche is uniquely hostile (pH 1-2), and nickel-urease is the sole mechanism by which H. pylori creates a survivable microenvironment. This is the defining ecological feature of the gastric cancer signature.

### 2. Acid Barrier Loss and Niche Opening
Progressive atrophic gastritis destroys the acid barrier, transforming the stomach from a low-diversity, H. pylori-dominated environment to a high-diversity community of oral and intestinal bacteria. This ecological transformation is irreversible without intervention and enables secondary carcinogenic mechanisms (nitrosamine production, additional LPS-driven inflammation).

### 3. Chronic NF-kB-Driven Inflammation
H. pylori CagA, LPS, and VacA toxin drive persistent NF-kB activation over decades. This chronic inflammatory state, compounded by metal-induced oxidative stress (Cd, Pb), provides the mutagenic environment for the Correa cascade progression.

### 4. Nitrosamine Production
Secondary colonizers in the atrophic stomach produce N-nitroso compounds from dietary nitrates via bacterial nitrate reductases. These are among the most potent known mutagens and represent a microbiome-dependent carcinogenic mechanism that emerges only after H. pylori has destroyed the acid barrier.

### 5. Iron Ecology Paradox
H. pylori sequesters host iron while the host mounts a nutritional immunity response (hepcidin, lactoferrin). The result is systemic iron deficiency anemia with paradoxical luminal iron availability in the atrophic stomach, feeding secondary pathobionts and creating a self-reinforcing dysbiotic cycle.

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| [[colorectal-cancer]] | Iron, cadmium | F. nucleatum, E. coli | Chronic inflammation, biofilm, iron ecology | 0.45 |
| [[pancreatic-cancer]] | Cadmium, iron | Fusobacterium, P. gingivalis | Chronic inflammation, oral pathogen translocation | 0.35 |
| [[gerd]] | Nickel | H. pylori | Acid barrier disruption, gastric microbiome shift | 0.30 |

The gastric-colorectal cancer overlap is notable: Fusobacterium nucleatum enrichment in both cancers suggests a shared oral-GI translocation carcinogenic pathway. The cadmium connection links gastric and pancreatic cancers through a common environmental carcinogen.

## Open Questions

1. Nickel restriction as intervention: Would dietary nickel restriction in H. pylori-infected individuals reduce virulence factor expression and slow Correa cascade progression? No clinical trials exist.
2. Atrophic gastritis microbiome mapping: Systematic characterization of the "opened niche" microbiome at each Correa cascade stage, with metal profiling, is needed.
3. Selenium supplementation: Does selenium supplementation in gastric cancer risk populations provide GPx-mediated protection against metal-induced oxidative DNA damage?
4. Post-eradication microbiome recovery: H. pylori eradication alters the gastric and intestinal microbiome ([[pharmacomicrobiomics]]). What is the optimal strategy for microbiome restoration after eradication therapy?
5. Metal co-exposure: What is the combined carcinogenic impact of simultaneous nickel, cadmium, and lead exposure in H. pylori-infected individuals?

## Karen's Brain Primitives Active

- 1. Metals as Selective Pressures -- Nickel availability determines H. pylori colonization density; cadmium/lead add carcinogenic metal burden
- 2. Nutritional Immunity as Interpretive Constraint -- Iron deficiency anemia in gastric cancer may be host defense (hepcidin-driven iron sequestration), not simple deficiency
- 4. Microbial Metal Dependencies as Achilles' Heels -- H. pylori's absolute dependence on nickel for urease and hydrogenase is the clearest metal dependency vulnerability in the knowledge base
- 5. Two-Sided Ecological Engineering -- Eradicate H. pylori (suppress pathogen) AND restore Lactobacillus/SCFA producers (ecological restoration)
- 8. Siderophore Competition and Iron Ecology -- Iron piracy by H. pylori and secondary colonizers shapes the gastric metal ecology
- 9. Oxygen State as Ecological Determinant -- Microaerobic gastric niche selects for H. pylori; atrophic gastritis changes oxygen availability, enabling new colonizers
