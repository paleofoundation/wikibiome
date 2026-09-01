---
title: Nakaseomyces glabratus
type: entity
subtype: fungus
created: 2026-04-18
updated: 2026-09-01
last_substantive_update: 2026-09-01
sources: [ncbi-taxonomy-nakaseomyces-glabratus, index-fungorum-nakaseomyces-glabratus, takashima-sugita-2022-nakaseomyces-glabratus-transfer, anderson-1917-cryptococcus-glabratus-original-description, corrales-2024-iron-chelating-antifungal-collismycin-candida, alves-2020-candida-adapting-survive-host-constraints, al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber]
source_count: 7
tags: [fungal-pathogen, azole-resistant, iron-dependent, haploid, Nakaseomyces, Candida-glabrata-historical-name, nosocomial, type-2-diabetes, mycobiome, iron-chelation-target]
seo_target: "Nakaseomyces glabratus taxonomy NCBITaxon 5478 Candida glabrata"
wikipedia_differentiation: "Current Nakaseomyces glabratus identity reconciled with the Candida glabrata homotypic synonym and Cryptococcus glabratus basionym, with historical study labels retained"
platform: wikibiome
gram_stain: "N/A"
oxygen_requirement: "facultative anaerobe"
metal_dependencies: [iron, copper, zinc]
key_enzymes: [Aft1-iron-regulon, iron-sulfur-cluster-enzymes, heme-oxygenase-HMX1, thioredoxin-TRR1]
pathogenic_potential: opportunistic
conditions_enriched_in: [candidemia, vulvovaginal-candidiasis, type-2-diabetes, immunocompromised-infections]
conditions_depleted_in: []
ncbi_taxonomy_id: 5478
mycobank_registration_id: 843854
index_fungorum_registration_id: 416322
historical_names: [Candida glabrata, Torulopsis glabrata, Cryptococcus glabratus]
---

# Nakaseomyces glabratus

*Nakaseomyces glabratus* is the current name for NCBITaxon:5478. Takashima and Sugita established the current combination in 2022 as MycoBank MB 843854; *Candida glabrata* is a homotypic synonym and former combination, while *Cryptococcus glabratus* H.W. Anderson 1917 is the basionym [[ncbi-taxonomy-nakaseomyces-glabratus]] [[index-fungorum-nakaseomyces-glabratus]] [[takashima-sugita-2022-nakaseomyces-glabratus-transfer]]. Anderson's original description introduced the organism from the human intestinal tract, and the nomenclatural records connect its type material to current strain deposits including CBS 138 and ATCC 2001 [[anderson-1917-cryptococcus-glabratus-original-description]].

The clinical and experimental sources summarized below mostly use *Candida glabrata* or *C. glabrata*. WikiBiome preserves those historical study labels rather than silently rewriting them. They refer to this same nomenclatural species unless a source identifies a different organism; they do not establish a second canonical taxon.

## Metal Dependencies

### Iron: The Central Vulnerability

[[iron|Iron]] is essential for *C. glabrata* mitochondrial function, iron-sulfur cluster assembly, and heme biosynthesis. Selective iron chelation by NR-6226C (a collismycin A analog derived from *Streptomyces*) potently inhibits both wild-type and drug-resistant *C. glabrata* with a favorable therapeutic window: EC50 of approximately 3 uM against Candida versus 37-29 uM against human cell lines ([[corrales-2024-iron-chelating-antifungal-collismycin-candida]], in-vitro).

Transcriptomic analysis of *C. glabrata* treated with NR-6226C revealed an iron starvation response: 224 genes upregulated and 220 downregulated within one hour. Upregulated genes included TRR1 (thioredoxin), HMX1 (heme oxygenase), and iron import genes. Critically, iron-sulfur cluster enzyme genes were downregulated -- SDH2 (succinate dehydrogenase), ACO1/2 (aconitase), and ISA1 (Fe-S assembly) -- indicating severe mitochondrial iron depletion.

### Copper and Zinc: Mis-metallation Compensation

A remarkable finding: [[copper]] and [[zinc]] ions ameliorate iron chelation effects on *C. glabrata* despite not being bound by the chelating compound ([[corrales-2024-iron-chelating-antifungal-collismycin-candida]], in-vitro). The proposed mechanism is [[mis-metallation]] -- Cu2+ and Zn2+ bind to iron-dependent proteins, triggering a compensatory iron uptake response that partially overcomes chelation. This provides direct evidence that metal competition at protein binding sites has functional consequences for fungal survival.

## Key Enzymes and Virulence Factors

| System | Metal | Function |
|---|---|---|
| Aft1 transcription factor | Iron sensor | Master regulator of iron starvation response |
| Iron-sulfur cluster enzymes (SDH2, ACO1/2) | Iron | Mitochondrial respiration and TCA cycle |
| HMX1 (heme oxygenase) | Iron | Heme degradation for iron recycling |
| TRR1 (thioredoxin) | -- | Oxidative stress defense under iron starvation |
| ISA1 (Fe-S assembly) | Iron | Iron-sulfur cluster biogenesis |

## Ecological Role

### Immune Evasion Through Metabolite Sensing

Like *C. albicans*, *C. glabrata* modulates its visibility to the immune system based on the metabolic environment. Lactate triggers beta-glucan masking (hiding from immune detection), while short-chain fatty acids (butyrate, acetate) cause unmasking ([[alves-2020-candida-adapting-survive-host-constraints]], expert-opinion). This means the metabolic balance of the gut environment directly determines whether *C. glabrata* is visible to immune surveillance -- a dysbiotic, lactate-rich, butyrate-poor environment favors fungal stealth.

### In the Mycobiome of Type 2 Diabetes

*C. glabrata* is detectable in the gut mycobiome of both healthy controls and type 2 diabetes patients ([[al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber]], case-control, n=41). A key finding from this study: in T2DM, the mycobiome explains most of the microbiome variance (12.5%) while bacteria explain only 10.4% -- a reversal of the normal pattern where bacteria dominate (64.2%). This suggests fungi including *C. glabrata* become primary ecological drivers in diabetic dysbiosis.

### Fluconazole Synergy

NR-6226C synergizes strongly with fluconazole against *C. albicans* and related species, providing a potential combination therapy that may prevent azole resistance ([[corrales-2024-iron-chelating-antifungal-collismycin-candida]], in-vitro). In a *Galleria mellonella* infection model, NR-6226C significantly increased survival of Candida-infected larvae.

## Conditions Associated

- Candidemia -- Second most common cause after *C. albicans*; increasing in nosocomial settings
- Vulvovaginal candidiasis -- Common cause, particularly of azole-resistant recurrent infections
- Type 2 diabetes -- Part of the disease-associated mycobiome; mycobiome variance dominance in T2DM
- Immunocompromised infections -- Increasing prevalence in transplant recipients, ICU patients, and elderly populations
- Urinary tract infections -- Growing cause of catheter-associated fungal UTIs

## Key Studies

- [[corrales-2024-iron-chelating-antifungal-collismycin-candida]] (in-vitro) -- Demonstrates selective iron chelation as potent antifungal strategy against *C. glabrata*; reveals Cu2+/Zn2+ mis-metallation compensation; documents fluconazole synergy and transcriptomic iron starvation response.
- [[alves-2020-candida-adapting-survive-host-constraints]] (expert-opinion) -- Reviews lactate/butyrate masking-unmasking immune evasion and metabolic adaptation across Candida species including *C. glabrata*.
- [[al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber]] (case-control, n=41) -- Multi-omics study documenting *C. glabrata* in T2DM mycobiome and the reversal of bacteria-fungi variance dominance in diabetes.

## Cross-References

- [[candida-albicans]] -- Primary Candida pathogen; shares iron dependency and immune evasion strategies
- [[candidozyma-auris]] -- Current-name record for the historically named *Candida auris*
- [[iron]] -- Central metabolic dependency; iron chelation as therapeutic strategy
- [[mis-metallation]] -- Cu2+/Zn2+ compensation for iron chelation via protein mis-metallation
- [[butyrate]] -- Triggers immune unmasking of Candida; ecological lever for anti-fungal defense
- [[antimicrobial-resistance]] -- Intrinsic fluconazole resistance; iron chelation as alternative strategy
- [[type-2-diabetes]] -- Mycobiome-dominant variance signature in T2DM
