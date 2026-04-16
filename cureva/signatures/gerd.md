---
title: "Gastroesophageal Reflux Disease — Microbiome Signature"
type: signature
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-14
sources: [chen-2024-esophageal-microbial-dysbiosis-tlr2-gerd.md, ye-2023-gut-microbiota-children-gerd-metagenomics-metabolomics.md, wang-2024-causal-gut-microbiota-gerd-bidirectional-mr.md, deshpande-2018-esophageal-microbiome-signatures-host-genetics.md, sugihartono-2022-gastric-microbiota-h-pylori-gerd.md, shi-2023-ppi-fungal-dysbiosis-gerd.md, park-2020-nerd-treatment-esophageal-microbiome.md, yin-2025-probiotics-ppi-gerd-rct.md, liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts.md, luu-2022-upper-gi-microbiota-children-reflux-metaplasia.md]
source_count: 10
tags: [gerd, esophageal-microbiome, gram-negative-shift, barrett-esophagus, PPI-dysbiosis, nickel, TLR2, NF-kB, prevotella, streptococcus, candida, bile-acids, SIBO]

metallomic_signature:
  elevated: [nickel-dietary, PM2.5-metals]
  depleted: [glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[prevotella]]"
      role: "P. melaninogenica prevalence rises 22%→83% from normal to metaplasia; distinct strain-level genomics in metaplasia; Type II esophageal community marker"
    - taxon: "[[pseudomonas]]"
      role: "Dramatically enriched in GERD/FED esophagus (62% vs 1.2% in healthy); drives LPS-TLR2 activation"
    - taxon: "[[veillonella]]"
      role: "Enriched 52% in Barrett's-to-EAC progression; Gram-negative anaerobe"
    - taxon: "[[leptotrichia]]"
      role: "L. wadei enriched in early EAC cascade; 48% increase in Barrett's progression"
    - taxon: "[[fusobacterium]]"
      role: "F. nucleatum/necrophorum enriched; NF-kB correlated (gamma=0.68); cancer-associated"
    - taxon: "[[enterobacteriaceae]]"
      role: "Family-level increase in gut; MR causal evidence for Barrett's risk (OR=1.10)"
    - taxon: "[[escherichia-coli]]"
      role: "Enriched in GERD gut; causal Barrett's risk factor by MR"
    - taxon: "[[bacteroides]]"
      role: "B. stercoris/vulgatus/uniformis core enriched species; SIBO overlap"
    - taxon: "[[candida-albicans]]"
      role: "96.9% gastric mucosal detection; PPI increases colonization"
  depleted:
    - taxon: "[[streptococcus]]"
      role: "45% decrease from healthy Type I esophageal community; S. mitis/oralis co-excludes with Prevotella"
    - taxon: "[[bifidobacterium]]"
      role: "Multiple species depleted in gut; Bifidobacteriales causally protective by MR (OR=0.90)"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Depleted in gut 16S data; paradoxically causal risk factor by MR — context-dependent"
    - taxon: "[[blautia]]"
      role: "B. wexlerae/obeum depleted; SCFA producer loss"
    - taxon: "[[lachnospiraceae]]"
      role: "UCG004 causally protective by MR (OR=0.91); depleted in GERD gut"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Protective against Barrett's by MR (OR=0.76)"

nutritional_immunity:
  elevated: [IL-6, IL-8, NF-kappaB, TNF-alpha, IL-1beta, TLR2, MMP-3, MMP-9, COX-2, iNOS, prostaglandins, mast-cells, CD8-T-cells]
  depleted: [claudin-1, occludin, dendritic-cells, glutathione]

ecological_features: [type-I-to-type-II-esophageal-shift, LPS-TLR2-IL6-claudin1-DIS-pathway, streptococcus-prevotella-co-exclusion, SIBO-GERD-overlap, bile-acid-mucosal-damage, PPI-induced-secondary-dysbiosis, arachidonic-acid-pathway-disruption, bidirectional-gut-brain-axis]

virulence_enzymes: [nickel-urease, NiFe-hydrogenase, LPS-biosynthesis, arachidonic-acid-enzymes, trypsin-like-PAR2-activators, ABC-transporters]

confidence:
  metallomic: preliminary
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron]
    shared_taxa: [fusobacterium-nucleatum, enterobacteriaceae, prevotella]
    shared_ecological: [gram-negative-enrichment, NF-kB-activation, SCFA-depletion]
    overlap_score: 0.50
  - condition: "[[obesity]]"
    shared_metals: []
    shared_taxa: [enterobacteriaceae, lachnospiraceae-depleted, christensenellaceae-depleted]
    shared_ecological: [gut-barrier-dysfunction, bile-acid-disruption]
    overlap_score: 0.45

cureva_status: complete
validated_interventions: [probiotics-with-ppi-gerd, low-carbohydrate-diet-gerd, mediterranean-diet-gerd]
stops: [stop-ppi-monotherapy-without-microbiome-support-gerd]
karen_brain_primitives: [1, 4, 5, 6, 9]
---

# Gastroesophageal Reflux Disease — Microbiome Signature

GERD affects ~13.3% of the global population and has been reconceptualized from a simple "acid burn" model to a **"cytokine sizzle" model** — inflammation is immune-cell-mediated, driven by microbial dysbiosis and barrier dysfunction, not just chemical acid exposure. The signature is distinctive for its **multi-compartment involvement** (esophagus, stomach, gut, oral) and the paradox that the standard treatment (PPIs) improves esophageal inflammation while simultaneously worsening gut and gastric microbial dysbiosis.

## Metallomic Signature

**Confidence: preliminary** — no direct tissue-level metal measurements in GERD patients exist in the current source corpus.

- **[[Nickel]] — indirect connection**: H. pylori (inversely correlated with erosive reflux disease) depends on nickel-urease and [NiFe]-hydrogenase for gastric colonization. Nickel-free diet enhances H. pylori eradication. Dietary nickel drives dysbiosis: reduces Bifidobacterium/Lactobacillus, increases E. coli/Enterococcus. Nickel allergy prevalence is 60% in obese individuals (vs 12.5% general) — and obesity is the strongest GERD risk factor (OR 1.73-6.1).
- **PM2.5/air pollution metals**: Inhalational exposure associated with GERD risk (OR=1.14-1.71) and esophagitis (OR=1.32). PM2.5 contains metal particulates.
- **Glutathione depleted**: Glutathione metabolism pathway disrupted in GERD children (288 differential metabolites, [[ye-2023-gut-microbiota-children-gerd-metagenomics-metabolomics]]).
- **STEAP2 metalloreductase**: Host SNPs in STEAP2 (iron/copper uptake enzyme) associated with esophageal microbiome composition [[deshpande-2018-esophageal-microbiome-signatures-host-genetics]].

## Nutritional Immunity Response

**Confidence: moderate** — consistent immune markers across 3+ studies with mechanistic validation.

The "cytokine sizzle" model [[park-2020-nerd-treatment-esophageal-microbiome]]:

| Marker | Direction | Evidence |
|--------|-----------|---------|
| **TLR2** | 2.1-fold increase | Only gene significant after BH correction; LPS binds TLR2 on esophageal epithelium [[chen-2024-esophageal-microbial-dysbiosis-tlr2-gerd]] |
| **IL-6** | Elevated; decreased 38% by PPI | Driven by LPS-TLR2 activation; downregulates claudin-1 [[park-2020-nerd-treatment-esophageal-microbiome]] |
| **IL-8** | Elevated; decreased 41% by PPI | Correlated with esophageal Spirochaetes (gamma=0.72) |
| **NF-kB** | Elevated; decreased 29% by PPI | Central hub; correlated with Fusobacteria (gamma=0.68); upregulates COX-2, iNOS, MMPs |
| **TNF-alpha** | Elevated | Mast cell degranulation in NERD; drives PAR-2 activation |
| **Claudin-1** | Depleted (47% decrease) | Barrier dysfunction; DIS formation exposing sensory neurons |
| **Mast cells** | Increased in NERD | Release histamine, TNF-alpha, tryptase; damage occludin/tight junctions via PAR-2 |
| **CD8+ T cells** | Increased with severity | 14% of GERD patients show lymphocytic esophageal inflammation |
| **Prostaglandins** | Elevated (A1, G2) | Arachidonic acid pathway — top metabolic disruption in GERD children |

## Mis-metallation Events

- **Nickel and H. pylori ecology**: H. pylori requires nickel for urease (acid buffering) and [NiFe]-hydrogenase (energy from H2 in gastric niche). The inverse relationship between H. pylori and erosive reflux disease creates a paradox: declining H. pylori (from hygiene improvements) may partly explain rising GERD prevalence. Nickel-free diets both reduce dysbiosis symptoms AND enhance H. pylori eradication.
- **STEAP2-mediated iron/copper handling**: Genetic variation in STEAP2 metalloreductase influences esophageal microbiome composition, suggesting host metal handling shapes the microbial ecosystem.

## Taxonomic Analysis

**Confidence: high** — systematic review of 11 studies, 5 independent MR studies, shotgun metagenomics, and multi-compartment profiling.

### The Central Shift: Type I → Type II Esophageal Microbiome

The healthy esophagus is dominated by **Streptococcus** (Gram-positive, Type I). GERD shifts toward **Gram-negative anaerobes** (Type II): Prevotella, Pseudomonas, Veillonella, Fusobacterium, Haemophilus. This 35% increase in Gram-negative bacteria drives the LPS-TLR2-IL6-claudin-1-DIS cascade.

### Esophageal Taxa

| Enriched in GERD/Barrett's | Evidence | Role |
|---------------------------|---------|------|
| [[Prevotella]] (P. melaninogenica) | 4 studies; prevalence 22%→83% normal to metaplasia | Key Barrett's biomarker; distinct strain genomics in metaplasia [[luu-2022-upper-gi-microbiota-children-reflux-metaplasia]] |
| [[Pseudomonas]] | Chen 2024 (62% vs 1.2%) | Massive enrichment in GERD/FED; LPS production |
| [[Veillonella]] | Deshpande, Park, Alageel | 52% increase in BE-to-EAC cascade |
| [[Leptotrichia]] (L. wadei) | Deshpande 2018 | Early EAC marker; 48% increase |
| [[Fusobacterium]] (F. nucleatum) | Deshpande, Park | NF-kB correlated; cancer-associated |
| [[Haemophilus]] (H. parainfluenzae) | Deshpande, Park, Ye | Cluster 1 marker; LPS producer |
| [[Campylobacter]] | Deshpande, Luu | Enriched in metaplastic esophagus |

| Depleted in GERD | Evidence | Role |
|-------------------|---------|------|
| [[Streptococcus]] (S. mitis/oralis) | 3+ studies; 45% decrease | Type I (healthy) community anchor; co-excludes Prevotella |

### Gut Taxa

| Enriched | Evidence | Role |
|----------|---------|------|
| Bacteroides (B. stercoris, vulgatus, uniformis) | Ye 2023, Alageel 2025 | Core species; SIBO overlap |
| Escherichia-Shigella | Ye 2023; MR causal for Barrett's (OR=1.10) | LPS, NF-kB activation |
| Enterobacteriaceae | Ye 2023; MR causal for Barrett's | Proteolytic; esophagitis link |
| Mollicutes/Tenericutes | 3 independent MR studies | Consistent causal risk (OR=1.09-1.11) |
| Collinsella, Eggerthella | Wang 2024 reverse MR | GERD causes their increase |

| Depleted | Evidence | Role |
|----------|---------|------|
| [[Bifidobacterium]] (multiple spp.) | Ye 2023; MR protective (OR=0.90) | B. longum, B. bifidum, B. adolescentis all depleted |
| [[Lachnospiraceae]] UCG004 | 3 MR studies (OR=0.91); mediated by weight | Causally protective; SCFA producer |
| [[Christensenellaceae]] | 3 MR studies (OR=0.85-0.92) | Causally protective |
| Methanobrevibacter | 2 MR studies (OR=0.95) | Causally protective archaeon |
| [[Akkermansia muciniphila]] | MR protective for Barrett's (OR=0.76) | Barrier protection |
| Blautia, Lachnospira, Eubacterium hallii | Ye 2023 | SCFA producers depleted |

### Mycobiome

**Candida albicans** detected in 96.9% of gastric mucosal samples. PPI treatment significantly increases Candida colonization. Fungal dysbiosis present in GERD regardless of PPI use; PPI further exacerbates it ([[shi-2023-ppi-fungal-dysbiosis-gerd]], n=65).

## Virulence Enzymes and Features

**Confidence: moderate**

- **LPS biosynthesis**: Enriched in Prevotella-dominated esophageal community (esotype Cluster 3). LPS activates TLR2 → IL-6 → claudin-1 downregulation → dilated intercellular spaces.
- **Nickel-urease** (H. pylori): Buffering enzyme for gastric acid survival; inversely correlated with ERD.
- **[NiFe]-hydrogenase** (H. pylori): Energy from hydrogen in gastric niche.
- **Arachidonic acid enzymes** (COX-2, 5-lipoxygenase): Top metabolic disruption in GERD; produce inflammatory leukotrienes and prostaglandins.
- **PAR-2 activating proteases**: Mast cell tryptase activates PAR-2, destroying occludin/tight junctions.
- **ABC transporters**: Upregulated in SIBO-GERD overlap.

## Ecological State

**Confidence: high**

### 1. LPS-TLR2-IL6-Claudin-1-DIS Cascade
The mechanistic pathway from dysbiosis to symptoms: Gram-negative bacteria produce LPS → LPS binds TLR2 (2.1-fold upregulation) → IL-6 secretion → claudin-1 downregulation (47%) → dilated intercellular spaces → submucosal sensory neuron exposure → symptoms. **This pathway operates even when acid reflux is normal** (functional esophageal disorder patients have the same microbial shift, [[chen-2024-esophageal-microbial-dysbiosis-tlr2-gerd]]).

### 2. Streptococcus-Prevotella Co-Exclusion
A consistent antagonistic relationship across all disease stages. The Streptococcus:Prevotella ratio correlates inversely with Barrett's segment length and hiatal hernia length (r2=0.60). This ratio may serve as a progression biomarker.

### 3. SIBO-GERD Overlap
Positive correlation between GERD and SIBO (P=0.007). Bacteroides uniformis (28%) and B. stercoris (22%) prominent. Methane-positive patients at higher risk — increased gas production raises intra-abdominal pressure, promoting reflux.

### 4. PPI-Induced Secondary Dysbiosis (The Treatment Paradox)
PPIs reduce esophageal inflammation (IL-6 ↓38%, IL-8 ↓41%) but simultaneously: increase Enterococcaceae, Streptococcaceae, Enterobacteriaceae in gut; decrease Bifidobacteriaceae, Ruminococcaceae, Lachnospiraceae; promote Candida gastric colonization; and have the most significant microbiome impact after antibiotics. In children: 56.2% on PPI+placebo developed gut dysbiosis vs. 6.2% on PPI+probiotics.

### 5. Bidirectional Causality
MR studies confirm GERD both **results from** and **causes** gut dysbiosis. GERD specifically depletes Christensenellaceae, Rikenellaceae, Ruminococcaceae while enriching Collinsella, Eggerthella. This creates a self-perpetuating cycle.

### 6. Barrett's Progression Cascade
Prevotella melaninogenica prevalence rises linearly: 22% (normal) → 50% (GERD) → 58% (erosive esophagitis) → 83% (metaplasia). Metaplasia-associated P. melaninogenica strains carry distinct genomic features (MlaD, TonB_C domain). Gram-negative enrichment is exclusively associated with Barrett's risk in MR (all risk taxa G-).

## Validated Interventions

| Intervention | Class | Evidence | Key Outcome | Page |
|-------------|-------|---------|-------------|------|
| **Probiotics with PPI** | Probiotic | RCT, n=60 | Bifidobacterium/Lactobacillus restored; CRP reduced; adverse events 6.6% vs 16.6% | [[probiotics-with-ppi-gerd]] |
| **Low-carbohydrate diet** | Dietary | RCTs + meta-analysis | Acid exposure time reduced 5.1% to 2.5% (P=0.022) | [[low-carbohydrate-diet-gerd]] |
| **Mediterranean diet** | Dietary | Cross-sectional, n=5,141 | 47% lower GERD odds (OR=0.53) in highest adherence | [[mediterranean-diet-gerd]] |

**Promising:**
- Melatonin + vitamins + amino acids: 100% symptom improvement vs 65.7% omeprazole (P=0.001)
- Soluble fiber: 60% achieved 7-day heartburn-free in NERD
- Berberine: activates AMPK, inhibits TNF-alpha/IL-1beta/IL-6/NF-kB
- Quercetin: inhibits NF-kB p65 and IL-8 signaling

## STOPs

| STOP | Rationale | Page |
|------|-----------|------|
| **Long-term PPI monotherapy without microbiome support** | PPIs worsen gut dysbiosis (most significant impact after antibiotics); promote Candida gastric colonization; 56.2% of children develop dysbiosis vs 6.2% with PPI+probiotics; associated with C. difficile, SIBO, nutritional deficiencies | [[stop-ppi-monotherapy-without-microbiome-support-gerd]] |

## Open Questions

1. **Metallomic quantification**: No study has measured tissue metals in GERD patients alongside microbiome profiling. The nickel-H. pylori-GERD connection needs direct metallomic validation.
2. **Faecalibacterium paradox**: Depleted in GERD gut by 16S but causally increases GERD and Barrett's risk by MR (OR=1.09-1.39). Context-dependent effects? Butyrate's dual role?
3. **Streptococcus:Prevotella ratio as clinical biomarker**: Can this ratio predict Barrett's progression risk and guide surveillance intervals?
4. **PPI alternatives**: Can Mediterranean diet + probiotics + low-carb approach replace PPI in mild-moderate GERD?
5. **Candida in GERD**: Does PPI-induced Candida gastric colonization contribute to symptoms or just co-occur?
6. **STEAP2 pharmacogenomics**: Can STEAP2 genotyping predict microbiome response to treatment?

## Knowledge Primitives Applied

- **1. Metals as Selective Pressures** — Nickel shapes H. pylori ecology and gastric niche; dietary nickel drives dysbiosis; STEAP2 iron/copper handling influences microbiome
- **4. Microbial Metal Dependencies as Achilles' Heels** — H. pylori depends on nickel-urease and NiFe-hydrogenase; nickel-free diet enhances eradication
- **5. Two-Sided Ecological Engineering** — Suppress Gram-negative pathobionts AND restore Streptococcus/Bifidobacterium; probiotics + PPI achieves this
- **6. Interkingdom Relationships and Functional Shielding** — Candida colonization after PPI; fungal-bacterial interactions in gastric mucosa
- **9. Oxygen State as Ecological Determinant** — Type I (aerotolerant Streptococcus) to Type II (anaerobic Prevotella/Veillonella) shift reflects oxygen gradient changes
