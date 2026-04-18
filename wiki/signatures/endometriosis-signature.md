---
title: "Endometriosis -- Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - borghini-2020-endometriosis-nickel-ibs
  - lopez-botella-2023-peritoneal-fluid-metals-endometriosis
  - aquino-2012-cadmium-nickel-metalloestrogens
  - huang-2024-zinc-intake-endometriosis-risk
  - lei-2018-h2s-endometrial-stromal-cells-nfkb
  - barnard-2023-nutrition-prevention-treatment-endometriosis
  - colonetti-2023-gut-vaginal-microbiota-endometriosis-meta-analysis
  - perez-prieto-2024-gut-microbiome-endometriosis-1000-cohort
  - svensson-2021-endometriosis-gut-microbiota-associations
  - shan-2021-gut-microbiota-hormone-inflammatory-endometriosis
  - ata-2019-endobiota-vaginal-cervical-gut-microbiota-endometriosis
  - khan-2018-bacterial-contamination-hypothesis-endometriosis
  - ni-2020-fecal-metabolomics-gut-microbiota-endometriosis-mice
  - uzuner-2023-bidirectional-relationship-endometriosis-microbiome
  - piecuch-2022-nutrition-endometriosis-review
  - harris-2018-fruit-vegetable-consumption-endometriosis
  - microbiome-diet-endometriosis-food-tables
  - khan-2016-intrauterine-microbial-colonization-endometriosis
source_count: 18
tags: [gynecological, estrogen-dependent, chronic-inflammatory, nickel-allergy, metalloestrogens, estrobolome]

metallomic_signature:
  elevated: [nickel, iron, lead, cadmium, zinc, copper, bismuth]
  depleted: [glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Primary pathobiont -- siderophore-mediated iron acquisition, LPS/TLR4 activation, beta-glucuronidase-driven estrogen deconjugation; LPS 4-6x higher in menstrual fluid of patients"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Zn-dependent BFT toxin cleaves E-cadherin; beta-glucuronidase activity drives estrogen recirculation; iron piracy via siderophores"
    - taxon: "[[gardnerella]]"
      role: "Enriched in cervicovaginal niche (67.7% vs 36.8% of non-Lactobacillus taxa); sialidase-driven mucus degradation facilitates pathobiont colonization"
    - taxon: "[[candida-albicans]]"
      role: "Interkingdom biofilm partner; oxygen consumption creates anaerobic niches; functional shielding of bacterial pathogens; increased biomass in presence of nickel"
    - taxon: "[[streptococcus]]"
      role: "Enriched in cervical microbiota; beta-glucuronidase-producing species contribute to estrogen recirculation"
    - taxon: "[[blautia]]"
      role: "Abundance positively correlated with serum estradiol; beta-glucuronidase activity links to estrobolome dysbiosis"
  depleted:
    - taxon: "[[lachnospiraceae-family]]"
      role: "SCFA producers -- lost competitive advantage in metal-rich, pro-inflammatory environment; Lachnospira significantly decreased in stage 3/4 patients"
    - taxon: "[[ruminococcus]]"
      role: "Decreased in endometriosis; fecal calprotectin correlated with Ruminococcus abundance suggesting inflammatory displacement"
    - taxon: "[[roseburia]]"
      role: "SCFA producer depleted in endometriosis gut; lacks robust efflux pumps to survive metal-rich environment"

nutritional_immunity:
  elevated: [calprotectin, hepcidin, lactoferrin]
  depleted: [glutathione]

ecological_features: [hypoxia, biofilm, estrogen-recirculation, functional-shielding, LPS-TLR4-NF-kB-loop, H2S-NF-kB-amplification]

virulence_enzymes: [nickel-urease, nickel-glyoxalase, NiFe-hydrogenase, zinc-metalloprotease, beta-glucuronidase, siderophores, sialidase, BFT-fragilysin]

confidence:
  metallomic: high
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[pcos]]"
    shared_metals: [nickel, iron, zinc]
    shared_taxa: [escherichia-coli, bacteroides-fragilis, lachnospiraceae-depleted]
    shared_ecological: [estrogen-recirculation]
    overlap_score: 0.55
  - condition: "[[breast-cancer]]"
    shared_metals: [cadmium, iron, nickel]
    shared_taxa: [escherichia-coli, bacteroides-fragilis]
    shared_ecological: [estrogen-recirculation, biofilm]
    overlap_score: 0.48
  - condition: "[[inflammatory-bowel-disease]]"
    shared_metals: [iron, nickel, zinc]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted, ruminococcus-depleted]
    shared_ecological: [biofilm, hypoxia]
    overlap_score: 0.45
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum]
    shared_ecological: [biofilm, hypoxia]
    overlap_score: 0.38

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5, 6, 7, 8, 9]
---

# Endometriosis -- Microbiome Signature

## Overview

**Endometriosis** is a chronic estrogen-dependent inflammatory condition affecting approximately 10% of reproductive-age women, characterized by growth of endometrial-like tissue outside the uterus. The conventional framing treats it as a hormonal or immune disorder. The 5-layer signature reveals it as an **ecological disease driven by metal-dependent microbial communities** operating within a self-reinforcing cycle of metalloestrogen exposure, estrobolome dysbiosis, and NF-kB-mediated inflammation.

The pioneering finding is the extraordinary prevalence of nickel allergy: **90.3% of symptomatic endometriosis patients tested positive for nickel allergic contact mucositis (Ni ACM)** ([[borghini-2020-endometriosis-nickel-ibs]], open-label pilot, n=31). Peritoneal fluid metal analysis revealed dramatically elevated nickel (4:1 ratio vs control), lead (90:1 ratio), and bismuth (1.5:1 ratio) even in patients without occupational exposure ([[lopez-botella-2023-peritoneal-fluid-metals-endometriosis]], case report).

## Metallomic Signature

The metallomic layer is the strongest in this signature, supported by multiple independent lines of evidence.

| Metal | Evidence | Confidence |
|-------|----------|------------|
| **[[nickel]]** | Peritoneal fluid 40.4 ug/L vs <LOD in control (4:1 ratio); 77.8% literature consensus; Ni ACM prevalence 90.3% in symptomatic patients ([[borghini-2020-endometriosis-nickel-ibs]]; [[lopez-botella-2023-peritoneal-fluid-metals-endometriosis]]) | High |
| **[[iron]]** | Elevated in peritoneal fluid via retrograde menstruation; 70.4% literature consensus; hepcidin elevation indicates functional anemia (host defense, NOT deficiency) ([[khan-2018-bacterial-contamination-hypothesis-endometriosis]]) | High |
| **[[lead]]** | 75 ug/L vs 0.72 ug/L in control (90:1 ratio); 59.3% consensus; mis-metallation via Ca channels ([[lopez-botella-2023-peritoneal-fluid-metals-endometriosis]]) | Moderate |
| **[[cadmium]]** | Metalloestrogen binding ERa with Kd 4.5x10^-10 M (near estradiol affinity); peritoneal accumulation; 18.5% consensus ([[aquino-2012-cadmium-nickel-metalloestrogens]]) | Moderate |
| **[[zinc]]** | Higher dietary intake (>14 mg/day) associated with 60% increased odds of endometriosis (OR 1.6, 95% CI 1.12-2.27, n=4,315); MMP cofactor enabling tissue invasion ([[huang-2024-zinc-intake-endometriosis-risk]], cross-sectional) | Moderate |
| **[[copper]]** | Elevated in peritoneal environment; 14.8% consensus; microbial virulence cofactor | Preliminary |
| **Glutathione** (depleted) | Primary neutralization pathway for Cd and Pb; depletion creates vulnerability loop | Moderate |

**The nickel-estrogen convergence.** Cadmium binds ERa with affinity near estradiol, activating classical estrogen target genes ([[aquino-2012-cadmium-nickel-metalloestrogens]], expert opinion). Nickel acts via noncompetitive ERa binding and epigenetic mechanisms (histone deacetylation, H3K9 methylation). Both are classified as [[metalloestrogens]], and both accumulate in the peritoneal environment where endometriotic lesions reside.

## Environmental Exposures

Sources of the metal burden include:

- **Diet** (largest contributor): Nickel, zinc, iron, cadmium, lead through plant-based foods, nuts, legumes, whole grains. A lacto-ovo vegetarian patient with no occupational exposure showed dramatically elevated peritoneal metals ([[lopez-botella-2023-peritoneal-fluid-metals-endometriosis]])
- **Retrograde menstruation**: Iron exposure to the peritoneal microenvironment; LPS-contaminated menstrual blood drives cyclical inflammation ([[khan-2018-bacterial-contamination-hypothesis-endometriosis]])
- **Brassica vegetables**: Cadmium, lead, zinc, and nickel hyperaccumulators; increased brassica consumption identified as an endometriosis risk factor ([[harris-2018-fruit-vegetable-consumption-endometriosis]])
- **Stainless steel cookware**: Nickel, chromium, iron leaching
- **Smoking**: Cadmium, lead, nickel

**The plant-based diet paradox.** Plant-based diets reduce circulating estrogen by 10-25% through increased fiber ([[barnard-2023-nutrition-prevention-treatment-endometriosis]], prospective cohort review), which should benefit this estrogen-dependent disease. Yet the recommended foods -- legumes, whole grains, nuts, soy -- are among the highest-nickel foods. For the 90.3% of patients with nickel sensitivity, standard plant-based dietary guidance may paradoxically worsen symptoms.

## Nutritional Immunity Response

The host deploys multiple nutritional immunity mechanisms:

- **[[hepcidin]]** elevation: Blocks ferroportin-mediated iron export, deliberately withholding iron from siderophore-producing pathogens. Low serum iron represents a **host defense strategy (functional anemia), not a nutritional deficiency**. This is the basis for the iron supplementation STOP.
- **[[calprotectin]]** elevation: Sequestering zinc (and manganese) from pathogenic taxa. Fecal calprotectin correlates with Ruminococcus abundance in endometriosis patients ([[svensson-2021-endometriosis-gut-microbiota-associations]], case-control, n=264). The zinc supplementation STOP is based on this active sequestration.
- **[[lactoferrin]]** elevation: Iron-binding protein deployed at mucosal surfaces.
- **Glutathione** depletion: The only factor neutralizing cadmium and lead is consumed faster than it is replenished, creating a critical vulnerability.

## Taxonomic Analysis

The taxonomic layer is supported by multiple independent studies, though a meta-analysis of 16 studies (n=1,151) found no significant pooled difference in alpha diversity ([[colonetti-2023-gut-vaginal-microbiota-endometriosis-meta-analysis]], systematic review), and the largest shotgun metagenomics study (n=1,000) found no robust differences after FDR correction ([[perez-prieto-2024-gut-microbiome-endometriosis-1000-cohort]], case-control). This suggests that **specific taxa rather than overall diversity** are the informative signal.

### Enriched Taxa

**[[escherichia-coli]]** -- The primary pathobiont. Found at 75% prevalence in ileal CD mucosa, E. coli is also central to endometriosis via the bacterial contamination hypothesis: LPS concentration in menstrual fluid is 4-6x higher in endometriosis patients ([[khan-2018-bacterial-contamination-hypothesis-endometriosis]], expert opinion). E. coli drives the LPS/TLR4/NF-kB cascade activating peritoneal macrophages. Its beta-glucuronidase activity deconjugates estrogen glucuronides, driving hepatic estrogen recirculation that fuels estrogen-dependent disease progression ([[uzuner-2023-bidirectional-relationship-endometriosis-microbiome]]).

**[[bacteroides-fragilis]]** -- Enterotoxigenic strains produce fragilysin (BFT), a zinc-dependent metalloprotease that cleaves E-cadherin and disrupts tight junctions. Beta-glucuronidase-producing strains contribute to the estrobolome.

**[[gardnerella]]** -- Enriched in the cervicovaginal niche (67.7% vs 36.8% of non-Lactobacillus taxa in sensitivity analysis); sialidase-driven mucus degradation facilitates pathobiont colonization ([[ata-2019-endobiota-vaginal-cervical-gut-microbiota-endometriosis]], prospective cohort, n=28).

**[[candida-albicans]]** -- Interkingdom biofilm partner. Consumes oxygen (creating anaerobic niches for obligate anaerobes), shields bacteria from immune detection, and shows increased biomass in the presence of nickel ([[khan-2018-bacterial-contamination-hypothesis-endometriosis]]).

**[[blautia]]** -- Abundance positively correlated with serum estradiol levels; beta-glucuronidase activity links to estrobolome dysbiosis ([[shan-2021-gut-microbiota-hormone-inflammatory-endometriosis]], case-control, n=24).

### Depleted Taxa

**[[lachnospiraceae-family]]** -- SCFA producers depleted because they lack robust efflux pumps to survive the metal-rich, pro-inflammatory environment. Lachnospira was significantly decreased in stage 3/4 patients (p=0.00008) ([[shan-2021-gut-microbiota-hormone-inflammatory-endometriosis]]). Their loss causes colonocyte dysfunction, intestinal permeability, and microbial translocation.

**[[ruminococcus]]** -- Decreased in endometriosis; Ruminococcus sp. CAG:177 and Roseburia sp. CAG:45 depleted pre-FDR correction in the largest cohort study ([[perez-prieto-2024-gut-microbiome-endometriosis-1000-cohort]]).

**[[roseburia]]** -- SCFA producer lost in the metal-rich environment; its depletion contributes to butyrate collapse and barrier dysfunction.

## Virulence Enzymes and Features

The enriched consortium shares metal-dependent virulence:

| Enzyme | Metal Cofactor | Function | Source Taxa |
|--------|---------------|----------|------------|
| **Nickel-urease** | Ni | pH modulation, immune evasion | E. coli, H. pylori |
| **Nickel-glyoxalase** | Ni | Methylglyoxal detoxification, immune evasion | All glyoxalase-positive pathogens |
| **NiFe-hydrogenase** | Ni, Fe | Energy metabolism in anaerobic niches | Enterobacteriaceae |
| **BFT (fragilysin)** | Zn | E-cadherin cleavage, barrier disruption | B. fragilis |
| **Beta-glucuronidase** | None (substrate-dependent) | Estrogen deconjugation, driving recirculation | E. coli, B. fragilis, Streptococcus |
| **Siderophores** | Fe (target) | Iron piracy from host, biofilm formation | E. coli, Enterobacteriaceae |
| **Sialidase** | None | Mucus degradation, facilitates colonization | Gardnerella |

## Ecological State

The endometriosis ecosystem is defined by six interacting ecological features:

1. **Hypoxia** -- Candida biofilms consume oxygen, creating anaerobic niches that favor obligate anaerobe pathobionts and suppress aerobic commensals.
2. **Biofilm architecture** -- Interkingdom biofilms (Candida + bacteria) shield pathogens from immune detection and antibiotic penetration. Nickel increases Candida biomass.
3. **Estrogen recirculation** -- Beta-glucuronidase-producing taxa (E. coli, B. fragilis, Streptococcus, Blautia) deconjugate estrogen glucuronides in the gut, driving hepatic estrogen recirculation that fuels this estrogen-dependent disease.
4. **Functional shielding** -- Candida biofilms protect bacterial pathogens from immune clearance.
5. **LPS/TLR4/NF-kB loop** -- E. coli LPS activates peritoneal macrophages via TLR4, driving NF-kB-mediated cytokine production (TNF-alpha, IL-6, IL-8) that perpetuates inflammation and promotes lesion growth ([[khan-2018-bacterial-contamination-hypothesis-endometriosis]]).
6. **H2S/NF-kB amplification** -- CBS and CSE (H2S-producing enzymes) are overexpressed in ectopic endometrium. H2S activates NF-kB, creating a convergent pathway with dietary nickel (which also activates NF-kB in the gut mucosa). Inhibiting endogenous H2S production in vivo significantly reduced lesion number and weight ([[lei-2018-h2s-endometrial-stromal-cells-nfkb]], animal model).

## Associated Conditions

Endometriosis shares significant signature overlap with several conditions:

### [[pcos]] (overlap score: 0.55)
Both are estrogen-related conditions with shared metalloestrogen exposure (Cd and Ni binding ERa). **Shared metals**: nickel, iron, zinc. **Shared taxa**: E. coli, B. fragilis, Lachnospiraceae (depleted). **Shared ecology**: estrogen recirculation via estrobolome dysbiosis. Comorbidity rate approximately 20% in clinical series.

### [[breast-cancer]] (overlap score: 0.48)
**Shared metals**: cadmium (ERa binding Kd 4.5x10^-10 M), iron, nickel. **Shared taxa**: E. coli, B. fragilis. **Shared ecology**: estrogen recirculation, biofilm. The metalloestrogen pathway is the primary bridge -- cadmium and nickel activate estrogen signaling through distinct mechanisms ([[aquino-2012-cadmium-nickel-metalloestrogens]]).

### [[inflammatory-bowel-disease]] (overlap score: 0.45)
GI symptoms overlap significantly (90.3% of endometriosis patients have Ni ACM with IBS-like symptoms). **Shared metals**: iron, nickel, zinc. **Shared taxa**: E. coli (enriched), Lachnospiraceae (depleted), Ruminococcus (depleted). **Shared ecology**: biofilm, hypoxia. Nickel allergy may be a common driver in co-occurring cases.

### [[colorectal-cancer]] (overlap score: 0.38)
**Shared metals**: iron, zinc, cadmium. **Shared taxa**: E. coli, Fusobacterium nucleatum. **Shared ecology**: biofilm, hypoxia. Ferroptosis mechanisms may be shared.

## Open Questions

1. **Nickel allergy as diagnostic tool** -- Should Ni ACM testing become standard in the endometriosis workup, given 90.3% prevalence in symptomatic patients? No validation cohort exists.
2. **Taxonomic specificity** -- The meta-analysis null result for alpha diversity ([[colonetti-2023-gut-vaginal-microbiota-endometriosis-meta-analysis]]) and the largest cohort null result ([[perez-prieto-2024-gut-microbiome-endometriosis-1000-cohort]]) challenge the dysbiosis narrative. Are peritoneal and vaginal niches more informative than stool?
3. **Estrobolome causality** -- 156 estrogen pathway-related enzymes showed no significant differences in the 1,000-patient cohort ([[perez-prieto-2024-gut-microbiome-endometriosis-1000-cohort]]). Is beta-glucuronidase activity a niche-specific phenomenon not captured by stool metagenomics?
4. **HBOT in humans** -- Complete remission in animal models via disrupting the hypoxic niche. When will this be clinically investigated?
5. **Low-nickel vegetarian diet** -- Can a modified protocol capture the estrogen-lowering benefits of plant-based eating while avoiding nickel-driven symptom exacerbation?
6. **Developmental window** -- No studies evaluate chronic low-dose metalloestrogen exposure during puberty specifically in relation to endometriosis risk.

## Karen's Brain Primitives Active

- **Primitive 1: Metals as Selective Pressures** -- Nickel, iron, cadmium, lead, and zinc in peritoneal fluid select for tolerant/dependent organisms while suppressing SCFA-producing commensals.
- **Primitive 2: Nutritional Immunity as Interpretive Constraint** -- Hepcidin elevation indicates functional anemia (host defense), not deficiency. Calprotectin sequesters zinc as active defense. Iron and zinc supplementation may be counterproductive.
- **Primitive 3: Mis-metallation and Toxic Metal Entry** -- Cadmium and lead enter via calcium channels, displacing correct cofactors and driving oxidative stress.
- **Primitive 4: Microbial Metal Dependencies as Achilles' Heels** -- The consortium depends on nickel (urease, glyoxalase, hydrogenase), iron (siderophores), and zinc (BFT, MMPs). Restricting these metals disables virulence.
- **Primitive 5: Two-Sided Ecological Engineering** -- Suppress metal-dependent pathobionts AND restore depleted SCFA producers (Lachnospiraceae, Roseburia).
- **Primitive 6: Interkingdom Relationships and Functional Shielding** -- Candida-bacterial biofilms protect pathogens from immune detection; nickel increases Candida biomass.
- **Primitive 7: Estrobolome and Hormone Recirculation** -- Beta-glucuronidase activity from E. coli, B. fragilis, Streptococcus drives estrogen recirculation fueling estrogen-dependent disease.
- **Primitive 8: Siderophore Competition and Iron Ecology** -- E. coli Nissle 1917 outcompetes pathogenic E. coli via superior siderophore systems.
- **Primitive 9: Oxygen State as Ecological Determinant** -- Candida biofilm oxygen consumption creates hypoxic niches; HBOT as potential intervention to disrupt the anaerobic ecology.
