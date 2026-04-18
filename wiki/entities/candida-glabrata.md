---
title: Candida glabrata
type: entity
subtype: fungus
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [corrales-2024-iron-chelating-antifungal-collismycin-candida, alves-2020-candida-adapting-survive-host-constraints, al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber]
source_count: 3
tags: [fungal-pathogen, azole-resistant, iron-dependent, haploid, Nakaseomyces, nosocomial, type-2-diabetes, mycobiome, iron-chelation-target]
seo_target: "Candida glabrata iron chelation antifungal resistance"
wikipedia_differentiation: "Iron chelation as antifungal strategy with NR-6226C compound data; Cu2+/Zn2+ mis-metallation compensating for iron chelation; mycobiome-dominant variance signal in type 2 diabetes; lactate/butyrate masking-unmasking immune evasion"
platform: wikibiome
gram_stain: "N/A"
oxygen_requirement: "facultative anaerobe"
metal_dependencies: [iron, copper, zinc]
key_enzymes: [Aft1-iron-regulon, iron-sulfur-cluster-enzymes, heme-oxygenase-HMX1, thioredoxin-TRR1]
pathogenic_potential: opportunistic
conditions_enriched_in: [candidemia, vulvovaginal-candidiasis, type-2-diabetes, immunocompromised-infections]
conditions_depleted_in: []
---

# Candida glabrata

A haploid, asexual yeast and the **second most common cause of invasive candidiasis** after *Candida albicans*. Recently reclassified into the genus *Nakaseomyces* (as *N. glabratus*), though the name *C. glabrata* remains in widespread clinical use. Unlike *C. albicans*, *C. glabrata* does not form true hyphae and is more closely related to *Saccharomyces cerevisiae* than to other *Candida* species. Its clinical significance has risen sharply due to intrinsic resistance to fluconazole and increasing prevalence in nosocomial infections -- features that make its **iron dependency** a particularly attractive therapeutic target.

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

- **Candidemia** -- Second most common cause after *C. albicans*; increasing in nosocomial settings
- **Vulvovaginal candidiasis** -- Common cause, particularly of azole-resistant recurrent infections
- **Type 2 diabetes** -- Part of the disease-associated mycobiome; mycobiome variance dominance in T2DM
- **Immunocompromised infections** -- Increasing prevalence in transplant recipients, ICU patients, and elderly populations
- **Urinary tract infections** -- Growing cause of catheter-associated fungal UTIs

## Key Studies

- **[[corrales-2024-iron-chelating-antifungal-collismycin-candida]]** (in-vitro) -- Demonstrates selective iron chelation as potent antifungal strategy against *C. glabrata*; reveals Cu2+/Zn2+ mis-metallation compensation; documents fluconazole synergy and transcriptomic iron starvation response.
- **[[alves-2020-candida-adapting-survive-host-constraints]]** (expert-opinion) -- Reviews lactate/butyrate masking-unmasking immune evasion and metabolic adaptation across Candida species including *C. glabrata*.
- **[[al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber]]** (case-control, n=41) -- Multi-omics study documenting *C. glabrata* in T2DM mycobiome and the reversal of bacteria-fungi variance dominance in diabetes.

## Cross-References

- [[candida-albicans]] -- Primary Candida pathogen; shares iron dependency and immune evasion strategies
- [[candida-auris]] -- Emerging drug-resistant Candida; related immune evasion mechanisms
- [[iron]] -- Central metabolic dependency; iron chelation as therapeutic strategy
- [[mis-metallation]] -- Cu2+/Zn2+ compensation for iron chelation via protein mis-metallation
- [[butyrate]] -- Triggers immune unmasking of Candida; ecological lever for anti-fungal defense
- [[antimicrobial-resistance]] -- Intrinsic fluconazole resistance; iron chelation as alternative strategy
- [[type-2-diabetes]] -- Mycobiome-dominant variance signature in T2DM
