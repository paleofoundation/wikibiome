---
title: "Pancreatitis — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis, sun-2023-pancreatic-infections-16s-rrna-pancreatitis, tian-2018-prebiotics-probiotics-synbiotics-severe-acute-pancreatitis-meta-analysis, wang-2023-mendelian-randomization-gut-microbiota-pancreatitis, zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]
source_count: 5
tags: [pancreatitis, acute-pancreatitis, chronic-pancreatitis, bacterial-translocation, fungal-dysbiosis, pancreatic-cancer-precursor]

metallomic_signature:
  elevated: [iron]
  depleted: [zinc, selenium]

taxonomic_signature:
  enriched:
    - taxon: "[[klebsiella-pneumoniae]]"
      role: "Dominant pancreatic infection isolate (48% of SAP samples); siderophore-dependent iron piracy; LPS drives TLR4 inflammatory cascade"
    - taxon: "[[acinetobacter]]"
      role: "A. baumannii enriched in severe/critical AP pancreatic infections; antimicrobial-resistant opportunist"
    - taxon: "[[pseudomonas-aeruginosa]]"
      role: "Enriched in pancreatic infections; iron-dependent virulence, biofilm former"
    - taxon: "[[escherichia-coli]]"
      role: "LPS producer; translocates from gut to pancreas in severe AP"
    - taxon: "[[candida-albicans]]"
      role: "Dominant fungal genus in AP (61.34% of mycobiome); iron-dependent; correlates with inflammatory markers"
    - taxon: "[[aspergillus]]"
      role: "15.18% of AP mycobiome; strong positive correlation with WBC counts"
    - taxon: "[[veillonella]]"
      role: "V. dispar increased in PDAC and AIP; marker of dysbiotic fermentation"
    - taxon: "[[streptococcus]]"
      role: "S. parasanguinis increased in both PDAC and AIP"
    - taxon: "Coprococcus3"
      role: "MR-validated causal risk taxon for acute pancreatitis (OR=1.48)"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer; depleted in PDAC; loss reduces anti-inflammatory signaling and barrier integrity"
    - taxon: "[[roseburia]]"
      role: "R. intestinalis depleted in PDAC; butyrate producer; loss contributes to SCFA deficit"
    - taxon: "[[bifidobacterium]]"
      role: "Depleted; loss reduces colonization resistance and lactate cross-feeding"
    - taxon: "Eubacterium rectale"
      role: "Top discriminating biomarker for PDAC (AUC=90.74%); butyrate producer"
    - taxon: "Prevotella9"
      role: "MR-validated protective taxon for AP (OR=0.82)"

nutritional_immunity:
  elevated: [WBC, IL-6, CRP, lipase, amylase]
  depleted: [butyrate, acetate, SCFA-synthesis-capacity]

ecological_features: [bacterial-translocation, fungal-dysbiosis, polymicrobial-infection, SCFA-synthesis-loss, gut-barrier-dysfunction, biofilm]

virulence_enzymes: [siderophores, type-II-secretion-system, LPS-biosynthesis, fungal-phospholipases]

confidence:
  metallomic: preliminary
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[pancreatic-cancer]]"
    shared_metals: [iron-elevated]
    shared_taxa: [faecalibacterium-depleted, roseburia-depleted, veillonella-enriched, streptococcus-enriched]
    shared_ecological: [SCFA-synthesis-loss, gut-barrier-dysfunction, bacterial-translocation]
    overlap_score: 0.65
  - condition: "[[necrotizing-enterocolitis]]"
    shared_metals: []
    shared_taxa: [klebsiella-enriched, escherichia-coli-enriched, bifidobacterium-depleted]
    shared_ecological: [bacterial-translocation, gut-barrier-dysfunction]
    overlap_score: 0.35
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron-elevated]
    shared_taxa: [faecalibacterium-depleted, roseburia-depleted]
    shared_ecological: [SCFA-synthesis-loss, gut-barrier-dysfunction]
    overlap_score: 0.30

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 5, 6, 8, 9]
---

# Pancreatitis — Microbiome Signature

## Overview

Pancreatitis is inflammation of the pancreas, occurring as acute pancreatitis (AP, 34 per 100,000/year) and chronic pancreatitis (CP, 10 per 100,000). Severe AP carries 20-30% mortality, driven in large part by bacterial translocation from the dysbiotic gut to the pancreas [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]]. CP is the strongest non-genetic risk factor for [[pancreatic-cancer]] (2.7-16x relative risk), making the pancreatitis-to-PDAC progression a clinically important trajectory where microbiome intervention may have preventive value.

The pancreatitis signature is distinctive in two ways: (1) it involves both bacterial and fungal dysbiosis — [[candida-albicans]] dominates the AP mycobiome [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]], and (2) the gut-to-organ translocation pathway is central, with 16S rRNA sequencing identifying 660 bacterial strains in pancreatic infections from intestinal, oral, and airway origins [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]].

## Metallomic Signature

Confidence: preliminary

Direct metallomic profiling in pancreatitis is sparse. Available associations:

- Iron (elevated): Iron availability is relevant because the dominant pancreatic infection organisms (Klebsiella, E. coli, Pseudomonas) are highly siderophore-dependent. Parenteral nutrition in severe AP patients may provide unregulated iron that fuels pathobiont expansion. Candida species are also iron-dependent for morphogenesis and virulence [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]].
- Zinc (depleted): Zinc is a cofactor for pancreatic digestive enzymes and Paneth cell defensins. Malnutrition in severe AP compounds zinc deficiency.
- Selenium (depleted): Selenium-dependent glutathione peroxidase is critical for pancreatic antioxidant defense. Oxidative stress is a major driver of pancreatic necrosis.

## Environmental Exposures

Alcohol is the most common cause of AP, directly damaging pancreatic acinar cells and altering gut microbiome composition. MR analysis confirms bidirectional causation between gut microbiota and pancreatitis — pancreatitis itself causally increases Proteobacteria and Lachnospiraceae in the gut, while specific taxa causally increase pancreatitis risk [[wang-2023-mendelian-randomization-gut-microbiota-pancreatitis]]. This bidirectional relationship means early microbiome disruption may initiate a self-reinforcing cycle.

Gallstones (second most common cause) alter bile acid metabolism, which shapes gut microbial ecology. High-fat diets increase bile-resistant organisms including Bilophila and Alistipes [[gudan-2022-ketogenic-diet-gut-microbiota-neurological-disorders]].

## Nutritional Immunity Response

Confidence: moderate

- Elevated WBC and IL-6: The systemic inflammatory response in AP is severe. Aspergillus abundance shows strong positive correlation with WBC counts [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]], suggesting fungal-mediated immune activation.
- Elevated CRP, lipase, amylase: Standard markers of pancreatic inflammation and tissue damage.
- Depleted butyrate: Fecal butyrate is significantly decreased in PDAC patients (confirmed by gas chromatography) [[zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]], and the Wood-Ljungdahl pathway (classical acetate production) is depleted.
- Depleted SCFA synthesis capacity: The gut microbiome in pancreatitis/PDAC shows depleted metabolic capacity for SCFA synthesis at the functional level, not just at the taxonomic level [[zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]].

## Taxonomic Analysis

Confidence: moderate

### Enriched Taxa — Bacterial

Pancreatic infections in severe AP are polymicrobial in 98.21% of samples [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]], with bacterial communities sourced from the intestines (43%), anaerobic reservoirs (43%), and oral cavity/airways (17%).

[[klebsiella-pneumoniae]] is the dominant aerobic isolate (48.08% of samples), followed by [[acinetobacter]] baumannii, [[pseudomonas-aeruginosa]], and [[escherichia-coli]] [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]]. All four are siderophore-producing Proteobacteria whose virulence depends on iron availability.

[[bacteroides-fragilis]] is the dominant anaerobic isolate (16/56 patients), followed by B. kribbi, B. ovatus, and Dialister invisus [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]].

MR-validated causal risk taxa include Coprococcus3 (OR=1.48), Eubacterium fissicatena group (OR=1.24), and Barnesiella (OR=1.48 for chronic pancreatitis) [[wang-2023-mendelian-randomization-gut-microbiota-pancreatitis]].

### Enriched Taxa — Fungal

[[candida-albicans]] dominates the AP mycobiome (61.34%), followed by [[aspergillus]] (15.18%), Penicillium (5.98%), and Apiotrichum (5.23%) [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]]. This is a dramatic shift from healthy controls where Aspergillus, Ganoderma, and Penicillium are dominant and Candida is minor.

### Depleted Taxa

[[faecalibacterium-prausnitzii]] and [[roseburia]] intestinalis are depleted in PDAC [[zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]]. Eubacterium rectale is the top discriminating biomarker (AUC=90.74%) for distinguishing PDAC from healthy controls. The Firmicutes/Bacteroidetes ratio is decreased in PDAC.

MR-validated protective taxa include Prevotella9 (OR=0.82 for AP) and Ruminiclostridium6 (OR=0.70 for AP) [[wang-2023-mendelian-randomization-gut-microbiota-pancreatitis]].

## Virulence Enzymes and Features

Confidence: preliminary

- Siderophores: Klebsiella, E. coli, and Pseudomonas all deploy siderophore systems to pirate iron, enabling their dominance in pancreatic infections.
- Type II secretion system: Enriched in PDAC gut microbiome functional analysis [[zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]], enabling bacterial protein export and toxin delivery.
- LPS biosynthesis: Abundant LPS from translocated Proteobacteria activates TLR4/NF-kB cascades, driving pancreatic necrosis and systemic inflammatory response.
- Fungal phospholipases: Candida species produce phospholipases that damage cell membranes; relevant to pancreatic acinar cell injury in the context of AP.

## Ecological State

Confidence: moderate

### Bacterial Translocation

The central ecological event in severe AP is gut-to-pancreas bacterial translocation. A dysbiotic gut with compromised barrier integrity permits bacteria (and fungi) to reach the pancreas via portal circulation, lymphatics, and direct transmural migration. 16S rRNA sequencing reveals that pancreatic infections originate from the intestines (43%), anaerobic reservoirs (43%), and the oral cavity/airways (17%) [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]].

### Dynamic Polymicrobial Communities

Pancreatic infection communities are not static — when sampling intervals exceed 2 weeks, bacterial composition changes significantly, and low-abundance species can become dominant pathogens [[sun-2023-pancreatic-infections-16s-rrna-pancreatitis]]. This temporal evolution has implications for antibiotic strategy.

### Fungal Dysbiosis

AP involves a collapse of fungal diversity alongside bacterial dysbiosis. The shift from a balanced mycobiome (Aspergillus/Ganoderma/Penicillium-dominated) to Candida dominance (61.34%) parallels the bacterial Proteobacteria bloom seen in other conditions [[zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis]].

### SCFA Synthesis Loss

The gut microbiome in the pancreatitis-to-PDAC trajectory loses not just SCFA-producing taxa but the functional metabolic pathways for SCFA synthesis itself. The Wood-Ljungdahl pathway is depleted, and fatty acid degradation capacity increases while synthesis capacity decreases [[zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics]].

## Associated Conditions

### [[pancreatic-cancer]] — Overlap Score: 0.65

Chronic pancreatitis is an 8-9 fold risk factor for PDAC. Shared features include Faecalibacterium/Roseburia depletion, Veillonella/Streptococcus enrichment, SCFA synthesis loss, and gut barrier dysfunction. The microbiome changes may create a pro-tumorigenic environment through chronic TLR4/NF-kB activation and impaired immune surveillance.

### [[necrotizing-enterocolitis]] — Overlap Score: 0.35

Shared Klebsiella and E. coli enrichment with Bifidobacterium depletion. Both conditions feature gut barrier dysfunction and bacterial translocation as central pathogenic events, though NEC occurs in the immature neonatal gut while pancreatitis occurs in adults.

### [[colorectal-cancer]] — Overlap Score: 0.30

Shared iron elevation, Faecalibacterium/Roseburia depletion, and SCFA synthesis loss. Both conditions involve the transition from a butyrate-producing, barrier-protective gut ecology to a pro-inflammatory, barrier-compromised state.

## Open Questions

1. Can early mycobiome profiling (Candida dominance) predict progression from mild to severe AP?
2. Does the pancreatitis-to-PDAC microbiome trajectory offer a prevention window where probiotic/synbiotic intervention could reduce cancer risk?
3. What is the optimal timing for probiotic intervention in AP — do the 13 RCTs showing benefit represent a generalizable strategy or a population-specific effect (all Chinese SAP cohorts) [[tian-2018-prebiotics-probiotics-synbiotics-severe-acute-pancreatitis-meta-analysis]]?
4. Can lactoferrin-based iron chelation reduce siderophore-dependent pathobiont expansion in severe AP?
5. How do specific Bacteroides species (B. fragilis, B. kribbi, B. ovatus) colonize the pancreas — as passive translocators or active invaders?
6. Does alcohol's direct effect on gut microbiome composition fully explain its role in AP, or does alcohol-induced metal redistribution (zinc depletion, copper mobilization) play a mediating role?

## Karen's Brain Primitives Active

- Primitive 1 (Metals as Selective Pressures): Iron availability selects for siderophore-producing Proteobacteria (Klebsiella, E. coli, Pseudomonas) that dominate pancreatic infections. Candida iron-dependence suggests metal ecology shapes the mycobiome as well.
- Primitive 5 (Two-Sided Ecological Engineering): The meta-analysis of 13 RCTs supports probiotic/synbiotic intervention (shortened hospital stay by 5.57 days) — the "restore" side of the equation. The "suppress" side (targeting translocating pathogens) is less developed.
- Primitive 6 (Interkingdom Relationships and Functional Shielding): The simultaneous bacterial and fungal dysbiosis in AP suggests interkingdom interactions. Candida-bacterial biofilms may protect translocating organisms from immune clearance and antibiotics.
- Primitive 8 (Siderophore Competition and Iron Ecology): The top four aerobic pathogens in pancreatic infections (Klebsiella, Acinetobacter, Pseudomonas, E. coli) all deploy siderophore systems. Iron chelation as intervention is mechanistically supported.
- Primitive 9 (Oxygen State as Ecological Determinant): Anaerobic bacteria constitute 43% of pancreatic infection isolates, indicating that the pancreatic necrotic environment supports both aerobic and anaerobic pathobionts.
