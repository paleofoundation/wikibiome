---
title: "Long COVID — Microbiome Signature"
type: signature
created: 2026-04-15
updated: 2026-04-15
last_substantive_update: 2026-04-15
sources: [ancona-2023-gut-airway-microbiota-dysbiosis-covid-longcovid.md, li-2025-long-term-gut-microbiota-alterations-covid-recovery.md, li-2024-causal-role-gut-microbiota-long-covid-mendelian-randomization.md, saito-2024-metabolomic-immune-alterations-long-covid-cfs.md, rego-2024-impact-gut-microbiota-long-covid-insights-challenges.md, plummer-2023-gut-brain-pathogenesis-post-acute-covid-neurocognitive.md, didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response.md, brigo-2025-uremic-bacterial-metabolites-post-covid.md, brown-2024-covid-19-neuroinflammation-pathophysiology.md, duve-2024-covid-encephalopathy-gut-brain-axis.md, Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid.md, Ke2022-microbiome-covid-metagenome-genomes.md, xu-2022-probiotics-prebiotics-covid-19-gut-lung-axis.md, lu-2021-intestinal-dna-virome-covid-19.md, arias-borrego-2022-metallomic-metabolomic-covid-mothers.md, mazzarelli-2021-16s-rrna-covid-19.md, ghannoum-2021-microbiome-depression-covid-19.md, zhong-2023-causal-effects-gut-microbiome-covid-19-mendelian-randomization.md]
source_count: 18
tags: [long-covid, PASC, gut-lung-axis, gut-brain-axis, SCFA-depletion, bacterial-translocation, neuroinflammation, persistent-dysbiosis, multi-kingdom-dysbiosis, self-perpetuating-loop, iron-sequestration, selenium, tryptophan-dysmetabolism]

metallomic_signature:
  elevated: [zinc, arsenic, thallium]
  depleted: [iron, selenium, copper, nickel, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[enterobacteriaceae]]"
      role: "LPS producers; translocate to blood (~30% of hospitalized patients); siderophore iron acquisition"
    - taxon: "[[streptococcus]]"
      role: "S. equinus persists at 6 months post-recovery; facultative aerobe filling anaerobic niche"
    - taxon: "[[enterococcus]]"
      role: "Facultative aerobe; translocation marker; persistent dysbiosis indicator"
    - taxon: "[[veillonella]]"
      role: "Enriched in acute COVID dysbiosis; persists in some Long COVID"
    - taxon: "[[candida-albicans]]"
      role: "Multi-kingdom co-expansion; co-expands with bacterial pathobionts"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Enhanced LPS synthesis genes in dysbiotic strains"
    - taxon: "[[aspergillus]]"
      role: "Fungal co-infection in severe/Long COVID"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer; replicated across 6+ studies; hallmark depletion"
    - taxon: "[[roseburia]]"
      role: "SCFA producer; replicated across 5+ studies"
    - taxon: "[[bifidobacterium]]"
      role: "Immune education; SCFA production"
    - taxon: "[[lactobacillus]]"
      role: "Immune modulation; barrier function"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucus layer maintenance; oxygen scavenging"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers; family-level depletion"

nutritional_immunity:
  elevated: [IL-6, TNF-alpha, IL-1beta, IFN-gamma, LPS-in-circulation, PD-1-on-CD8, TIM-3-on-CD8, autoantibodies, hepcidin, calprotectin]
  depleted: [regulatory-T-cells, NK-cell-function, memory-B-cells, sIgA, glutathione, butyrate, selenium]

ecological_features: [self-perpetuating-dysbiosis-loop, anaerobe-to-aerobe-shift, SCFA-collapse, bacterial-translocation-endotoxemia, gut-lung-axis-disruption, gut-brain-axis-disruption, tryptophan-AhR-dysmetabolism, virome-co-dysbiosis, multi-kingdom-dysbiosis, non-linear-recovery-trajectory, strain-level-diversity-collapse, estrobolome-dysfunction, uremic-metabolite-accumulation]

virulence_enzymes: [LPS-synthesis-transport, siderophores, adhesion-invasion-factors, bile-salt-hydrolase, beta-glucuronidase, polysaccharide-degradation]

confidence:
  metallomic: preliminary
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[depression]]"
    shared_metals: [iron-dysregulated, zinc]
    shared_taxa: [faecalibacterium-depleted, roseburia-depleted, bifidobacterium-depleted]
    shared_ecological: [SCFA-depletion, tryptophan-dysmetabolism, gut-brain-axis, Th17-Treg-imbalance]
    overlap_score: 0.65
  - condition: "[[chronic-kidney-disease]]"
    shared_metals: [iron-sequestered]
    shared_taxa: [enterobacteriaceae-enriched, faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [SCFA-depletion, bacterial-translocation, uremic-metabolite-accumulation]
    overlap_score: 0.50
  - condition: "[[alzheimers-disease]]"
    shared_metals: [iron, zinc]
    shared_taxa: [faecalibacterium-depleted, enterobacteriaceae]
    shared_ecological: [neuroinflammation, BBB-disruption, gut-brain-axis]
    overlap_score: 0.45

cureva_status: partial
validated_interventions: []
stops: [stop-iron-supplementation-long-covid, stop-broad-spectrum-antibiotics-long-covid]
karen_brain_primitives: [1, 2, 4, 5, 7, 9]
---

# Long COVID — Microbiome Signature

Post-acute sequelae of SARS-CoV-2 (PASC) affects 10-30% of COVID survivors with symptoms persisting >12 weeks. The signature is distinctive for its **self-perpetuating feedback loop**: persistent gut dysbiosis → SCFA depletion → barrier dysfunction → bacterial translocation → systemic inflammation → further dysbiosis. This loop explains why symptoms persist long after viral clearance and distinguishes Long COVID from acute infection recovery. Mendelian randomization confirms the relationship is **causal** — dysbiosis drives Long COVID susceptibility, not merely correlating with it [[li-2024-causal-role-gut-microbiota-long-covid-mendelian-randomization]].

## Metallomic Signature

**Confidence: preliminary** — single metallomic study (human milk) plus metabolomic mineral data.

The metallomic pattern reflects **nutritional immunity in overdrive**:

- **[[iron]] sequestered**: 10-fold decrease in COVID+ human milk. Hepcidin elevation drives iron sequestration as antiviral host defense — functional anemia, not true deficiency [[arias-borrego-2022-metallomic-metabolomic-covid-mothers]]. This is a Primitive 2 insight: iron supplementation would feed siderophore-producing Proteobacteria pathobionts.
- **[[selenium]] depleted**: 2-fold decrease; lower Se associated with COVID mortality. Se is required for glutathione peroxidase (antioxidant defense).
- **[[zinc]] elevated**: 1.7-fold increase as antiviral defense mechanism (P=0.0001).
- **[[copper]] depleted**: 10-fold decrease in human milk — tissue-specific; Cu/Zn ratio inverted vs. serum.
- **[[Glutathione]] depleted**: Reduced antioxidant metabolites including glutathione and cysteine [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]].

## Nutritional Immunity Response

**Confidence: moderate** — detailed immune profiling from Saito 2024, mechanistic support from multiple reviews.

The hallmark is **persistent Th1/Th17 dominance with Treg suppression and T-cell exhaustion**:

| Marker | Direction | Evidence |
|--------|-----------|---------|
| **IL-6** | Persistently elevated | [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]], [[brown-2024-covid-19-neuroinflammation-pathophysiology]] |
| **TNF-alpha, IL-1beta** | Elevated | Persistent Th1 activation |
| **PD-1/TIM-3 on CD8+ T cells** | Elevated | T-cell exhaustion despite activation — hallmark of chronic antigen exposure [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]] |
| **LPS in circulation** | Elevated | From translocation; ~30% of hospitalized patients had positive blood cultures [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]] |
| **Autoantibodies** | Present | Altered isotype switching [[saito-2024-metabolomic-immune-alterations-long-covid-cfs]] |
| **Tregs** | Reduced/dysfunctional | Impaired suppressive function |
| **NK cells** | Reduced killing capacity | Exhaustion phenotype |
| **sIgA** | Depleted | Impaired mucosal immunity [[xu-2022-probiotics-prebiotics-covid-19-gut-lung-axis]] |
| **Butyrate** | Reduced to 40-50% of normal | Direct measurement, n=112 [[didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response]] |

## Taxonomic Analysis

**Confidence: high** — 6+ independent studies with consistent findings; prospective cohorts n=96, n=514.

### The Anaerobe-to-Aerobe Shift

The ecological transformation is a shift from obligate anaerobes (SCFA producers, barrier-protective) to facultative aerobes (LPS producers, translocation-capable). This suggests disrupted luminal oxygen environment.

### Enriched in Long COVID

| Taxon | Role | Key Evidence |
|-------|------|-------------|
| Proteobacteria / [[enterobacteriaceae]] | LPS production; siderophore iron acquisition; blood translocation | [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]] (n=96), [[didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response]] (n=112) |
| [[streptococcus]] (S. equinus) | Facultative aerobe; persists 6 months post-recovery | [[li-2025-long-term-gut-microbiota-alterations-covid-recovery]] (prospective, n=53) |
| [[enterococcus]] | Translocation marker | [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]] |
| [[candida-albicans]] | Multi-kingdom co-expansion | [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]], [[Ke2022-microbiome-covid-metagenome-genomes]] |
| [[fusobacterium-nucleatum]] | Enhanced LPS synthesis genes | [[Ke2022-microbiome-covid-metagenome-genomes]] (n=514) |

### Depleted in Long COVID

| Taxon | Lost Function | Key Evidence |
|-------|--------------|-------------|
| [[faecalibacterium-prausnitzii]] | Primary butyrate producer; anti-inflammatory | 6+ studies: Ancona, Didenko, Rego, Ghannoum, Ke, Mazzarelli |
| [[roseburia]] | SCFA producer; barrier support | 5+ studies: Ancona, Didenko, Rego, Ghannoum, Ke |
| [[bifidobacterium]] | Immune education; SCFA | [[didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response]], [[xu-2022-probiotics-prebiotics-covid-19-gut-lung-axis]] |
| [[akkermansia-muciniphila]] | Mucus maintenance; O2 scavenging | [[rego-2024-impact-gut-microbiota-long-covid-insights-challenges]], [[plummer-2023-gut-brain-pathogenesis-post-acute-covid-neurocognitive]] |
| [[lachnospiraceae]] (family) | SCFA production | [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]], [[Ke2022-microbiome-covid-metagenome-genomes]] |

### What Distinguishes Long COVID from Recovery

1. **Persistence**: Long COVID patients maintain Grade II dysbiosis while recovered patients show partial resolution [[rego-2024-impact-gut-microbiota-long-covid-insights-challenges]]
2. **Non-linear recovery failure**: Beneficial taxa enriched at 3 months regress; persistent pathogens (Streptococcus equinus, Gibberella) remain at 6 months [[li-2025-long-term-gut-microbiota-alterations-covid-recovery]]
3. **Strain-level diversity collapse**: Not just species depletion but loss of intra-species genetic diversity — 10-20 strains reduced to 1-3 [[Ke2022-microbiome-covid-metagenome-genomes]]
4. **Ongoing metabolite abnormalities**: Uremic bacterial metabolites remain elevated months/years post-infection [[brigo-2025-uremic-bacterial-metabolites-post-covid]]

## Ecological State

**Confidence: high**

### 1. The Self-Perpetuating Loop
**Dysbiosis → SCFA depletion → barrier dysfunction → LPS translocation → systemic inflammation → further dysbiosis.** This is the defining ecological feature. Each component feeds the others. Breaking the loop requires simultaneous intervention at multiple points.

### 2. SCFA Collapse
Butyrate reduced to 40-50% of normal; propionate and acetate also reduced ([[didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response]], n=112). This is the central metabolic consequence driving barrier dysfunction, immune dysregulation, and neuroinflammation.

### 3. Bacterial Translocation / Endotoxemia
Dysbiotic bacteria detected in blood cultures matching gut organisms. Paneth cell + goblet cell loss documented in mouse models. 5-fold increase in FITC-dextran translocation [[Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid]].

### 4. Gut-Brain Axis Disruption
LPS translocation crosses BBB → microglial activation → neuroinflammation → "brain fog." Tryptophan dysmetabolism (reduced kynurenine/AhR signaling) correlates with IL-6 and fatigue severity ([[plummer-2023-gut-brain-pathogenesis-post-acute-covid-neurocognitive]], [[duve-2024-covid-encephalopathy-gut-brain-axis]]).

### 5. Gut-Lung Axis Disruption
SCFA depletion impairs respiratory mucosal immunity; reduced sIgA; impaired Treg migration to airways [[xu-2022-probiotics-prebiotics-covid-19-gut-lung-axis]].

### 6. Multi-Kingdom Dysbiosis
Coordinated bacterial + fungal (Candida, Aspergillus, Gibberella) + viral (phage diversity loss) community disruption ([[Ke2022-microbiome-covid-metagenome-genomes]], [[li-2025-long-term-gut-microbiota-alterations-covid-recovery]]).

### 7. Estrobolome Dysfunction
Dysbiosis impairs estrogen deconjugation → altered hormone metabolism → may explain female Long COVID predominance [[plummer-2023-gut-brain-pathogenesis-post-acute-covid-neurocognitive]].

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap |
|-----------|--------------|-------------|----------------|---------|
| **[[depression]]** | Fe dysregulated, Zn | F. prausnitzii depl., Roseburia depl., Bifidobacterium depl. | SCFA depletion, tryptophan dysmetabolism, gut-brain axis | 0.65 |
| **[[CKD]]** | Fe sequestered | Enterobacteriaceae enriched, F. prausnitzii depl. | SCFA depletion, bacterial translocation, uremic metabolites | 0.50 |
| **[[Alzheimer's]]** | Fe, Zn | F. prausnitzii depl., Enterobacteriaceae | Neuroinflammation, BBB disruption, gut-brain axis | 0.45 |

## STOPs

- **[[stop-iron-supplementation-long-covid|STOP: Iron Supplementation for Long COVID]]** — Hepcidin elevation indicates functional anemia (host antiviral defense), not true deficiency; iron supplementation feeds siderophore-producing Proteobacteria already driving the dysbiosis-translocation-inflammation loop. Evidence: cross-sectional.
- **[[stop-broad-spectrum-antibiotics-long-covid|STOP: Broad-Spectrum Antibiotics for Long COVID]]** — Destroys residual SCFA-producing anaerobes (Faecalibacterium, Roseburia, Bifidobacterium) already critically depleted, worsening the self-perpetuating dysbiosis-translocation-inflammation loop that drives Long COVID persistence. Evidence: animal-model.

| STOP | Rationale |
|------|-----------|
| **Iron supplementation** | Hepcidin elevation indicates functional anemia (host defense), not deficiency. Iron feeds siderophore-producing Proteobacteria driving the translocation loop. |
| **Broad-spectrum antibiotics** | Destroy residual SCFA producers, worsening the loop. Documented to increase translocation risk. |

## Promising Interventions (No Validated RCTs Yet)

- **Dietary fiber** (>30g/day) — essential substrate for SCFA producer restoration
- **Probiotics** (Lactobacillus, Bifidobacterium) — some acute COVID RCT evidence
- **Butyrate supplementation** (sodium butyrate, tributyrin) — directly addresses SCFA collapse
- **Omega-3 PUFAs** — depleted per metabolomics; anti-inflammatory
- **NAC / glutathione precursors** — addresses glutathione depletion
- **Selenium supplementation** — depleted; associated with mortality
- **Lactoferrin** — iron-binding alternative to iron supplementation; barrier support

## Open Questions

1. Can targeted microbiome restoration (FMT, specific probiotics, fiber) break the self-perpetuating loop and resolve Long COVID symptoms?
2. Does strain-level diversity collapse require FMT or can dietary intervention restore it?
3. Why does recovery stall at 3-6 months in some patients but not others?
4. Is estrobolome disruption driving the female predominance?
5. Can SCFA measurement serve as a Long COVID biomarker and treatment response marker?

## Knowledge Primitives Applied

- **1. Metals as Selective Pressures** — Iron/zinc/selenium dysregulation selects for metal-tolerant pathobionts
- **2. Nutritional Immunity as Interpretive Constraint** — Iron depletion is host defense (hepcidin); iron supplementation is a STOP
- **4. Microbial Metal Dependencies as Achilles' Heels** — Proteobacteria depend on siderophore iron; restrict iron to suppress
- **5. Two-Sided Ecological Engineering** — Suppress pathobionts AND restore SCFA producers simultaneously
- **7. Estrobolome** — Dysbiosis-driven hormone dysregulation may explain female predominance
- **9. Oxygen State** — Anaerobe-to-aerobe shift is the hallmark ecological transformation
