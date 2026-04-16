---
title: "Female Infertility — Microbiome Signature"
type: signature
created: 2026-04-15
updated: 2026-04-15
last_substantive_update: 2026-04-15
sources: [fo-2024-gut-microbiota-ovarian-stimulation-response-metagenomics.md, jiang-2021-hrt-gut-microbiome-premature-ovarian-insufficiency.md, wu-2021-premature-ovarian-insufficiency-gut-microbiota.md, huang-2024-fmt-pcos-metabolic-ovarian-dysfunction.md, kim-2026-estropausal-fmt-ovarian-function-rejuvenation.md, ding-2024-bile-acids-follicular-fluid-ovarian-reserve.md]
source_count: 6
tags: [female-infertility, estrobolome, premature-ovarian-insufficiency, PCOS, IVF, gut-ovarian-axis, beta-glucuronidase, eggerthella, bile-acids, cadmium, metalloestrogens]

metallomic_signature:
  elevated: [cadmium, lead, nickel]
  depleted: [zinc, selenium]

taxonomic_signature:
  enriched:
    - taxon: "[[eggerthella-lenta]]"
      role: "Beta-glucuronidase producer; CAUSES ovarian fibrosis in mouse models; enriched in POI; key estrobolome-ovarian link"
    - taxon: "[[sutterella]]"
      role: "Pro-inflammatory; gut barrier disruption; enriched in POI"
    - taxon: "[[butyricimonas]]"
      role: "Enriched in POI (paradoxical — butyrate producer)"
    - taxon: "[[dorea]]"
      role: "Enriched in POI"
    - taxon: "[[phocaeicola]]"
      role: "Reclassified Bacteroides; enriched in PCOS (transferable via FMT)"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer; depleted in POI"
    - taxon: "[[bifidobacterium]]"
      role: "B. longum abundance correlates with good IVF response; gavage improves outcomes in mice"
    - taxon: "[[lactobacillus]]"
      role: "Vaginal Lactobacillus dominance protective; loss associated with reproductive tract dysbiosis"

nutritional_immunity:
  elevated: [TGF-beta1, FSH, LH]
  depleted: [estradiol, AMH, bile-acids-in-follicular-fluid]

ecological_features: [estrobolome-dysfunction, gut-ovarian-axis, bile-acid-depletion-in-follicular-fluid, microbiome-transferable-hormonal-phenotype, ovarian-fibrosis-from-dysbiosis]

virulence_enzymes: [beta-glucuronidase, bile-salt-hydrolase]

confidence:
  metallomic: preliminary
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[pcos]]"
    shared_metals: [cadmium, lead, nickel, zinc-depleted]
    shared_taxa: [eggerthella, faecalibacterium-depleted]
    shared_ecological: [estrobolome-dysfunction, insulin-resistance]
    overlap_score: 0.70
  - condition: "[[endometriosis]]"
    shared_metals: [cadmium, nickel, iron]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted]
    shared_ecological: [estrogen-recirculation, metalloestrogen-signaling]
    overlap_score: 0.55

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 3, 5, 7]
---

# Female Infertility — Microbiome Signature

An umbrella signature covering microbiome-driven mechanisms across infertility subtypes: premature ovarian insufficiency (POI), PCOS-related infertility, diminished ovarian reserve (DOR), and IVF response variability. The defining insight is the **gut-ovarian axis** — three independent lines of causal evidence (FMT transfers PCOS phenotype, FMT reverses ovarian aging, B. longum gavage improves IVF response) establish that the gut microbiome directly controls ovarian function.

## Metallomic Signature

**Confidence: preliminary** — metal data derived from PCOS metal studies (already ingested elsewhere) and general metalloestrogen literature; no infertility-specific metallomic profiling in current sources.

- **[[Cadmium]]** — primary metalloestrogen; binds ERalpha at picomolar concentrations; 12-30 year half-life creates cumulative ovarian burden
- **[[Lead]]** — disrupts hypothalamic-pituitary-ovarian axis; epidemiological associations with reduced fertility
- **[[Nickel]]** — noncompetitive ERalpha binding; epigenetic carcinogenesis in reproductive tissues
- **[[Zinc]] depleted** — required for oocyte maturation; supplementation enhances fertility in animal models
- **[[Selenium]] depleted** — antioxidant defense in follicular environment

## The Gut-Ovarian Axis

Three causal demonstrations establish this axis:

### 1. PCOS Phenotype is Microbiome-Transferable
FMT from PCOS patients into germ-free mice transferred insulin resistance + obesity + disrupted ovarian function [[huang-2024-fmt-pcos-metabolic-ovarian-dysfunction]]. The microbiome can "set the hormonal phenotype."

### 2. Young Microbiome Reverses Ovarian Aging
Heterochronic FMT from young mice reversed age-related ovarian transcriptome changes, reduced inflammation, and increased fertility ([[kim-2026-estropausal-fmt-ovarian-function-rejuvenation]], Nature Aging 2026).

### 3. B. longum Improves IVF Response
Bifidobacterium longum abundance correlated with good ovarian stimulation response (follicle-to-oocyte index >= 0.5); gavage in mice validated the effect [[fo-2024-gut-microbiota-ovarian-stimulation-response-metagenomics]].

## Eggerthella: The Estrobolome-Ovarian Bridge

**[[Eggerthella lenta]]** is the critical organism:
- Enriched in POI patients [[jiang-2021-hrt-gut-microbiome-premature-ovarian-insufficiency]]
- Known beta-glucuronidase producer — deconjugates estrogen metabolites, driving estrogen recirculation
- **Caused ovarian fibrosis** in mouse models via TGF-beta1 elevation
- HRT reversed both the Eggerthella enrichment and the ovarian fibrosis
- This positions Eggerthella as both a biomarker and a therapeutic target for POI

## Taxonomic Analysis

**Confidence: moderate** — two independent POI studies, one PCOS FMT study, one IVF response study.

### POI Signature (Wu 2021 + Jiang 2021)
**Enriched:** Eggerthella, Butyricimonas, Dorea, Sutterella
**Depleted:** Faecalibacterium, Bulleidia
Microbial alterations correlated with FSH, LH, E2, AMH, and FSH/LH ratio.

### PCOS Signature (Huang 2024)
**Enriched:** Phocaeicola, Mediterraneibacter, Oscillospiraceae, Lawsonibacter
Full PCOS signature at [[pcos]].

## Bile Acids in Follicular Fluid

Gut bacteria produce secondary bile acids that reach follicular fluid and influence oocyte quality:
- **All major bile acids depleted in DOR**: lithocholic acid, chenodeoxycholic acid, ursodeoxycholic acid, deoxycholic acid, cholic acid
- 5-bile-acid panel achieves AUC = 0.964 for DOR diagnosis ([[ding-2024-bile-acids-follicular-fluid-ovarian-reserve]], n=182)
- This directly links gut microbial bile acid metabolism to ovarian reserve

## Ecological State

**Confidence: moderate**

### 1. Estrobolome Dysfunction
Beta-glucuronidase-producing organisms (Eggerthella) drive estrogen deconjugation and recirculation, disrupting the hormonal environment required for normal ovarian function. This mechanism is shared with [[endometriosis]] and [[breast-cancer]].

### 2. Microbiome-Transferable Hormonal Phenotype
The PCOS FMT demonstration establishes that gut dysbiosis is not merely correlated with hormonal disruption — it is causal. The microbiome directly programs metabolic and reproductive outcomes.

### 3. Bile Acid-Oocyte Quality Link
Microbially-produced secondary bile acids in follicular fluid represent a direct communication pathway between gut bacteria and the oocyte environment.

## Open Questions

1. Can Eggerthella-targeting (antibiotic or probiotic competition) prevent or reverse POI?
2. Can B. longum supplementation improve IVF outcomes in clinical trials?
3. What is the relative contribution of gut vs. vaginal/endometrial microbiome to infertility?
4. Does cadmium exposure drive estrobolome dysfunction → infertility in contaminated regions?
5. Can bile acid supplementation (UDCA) improve ovarian reserve in DOR patients?

## Knowledge Primitives Applied

- **1. Metals as Selective Pressures** — Cadmium metalloestrogen binding drives reproductive tissue disruption
- **3. Mis-metallation** — Cd/Pb/Ni displacing endogenous estrogen at ERalpha
- **5. Two-Sided Ecological Engineering** — Suppress Eggerthella AND restore Bifidobacterium/Faecalibacterium
- **7. Estrobolome** — Central primitive; beta-glucuronidase-mediated estrogen recirculation is the primary mechanism
