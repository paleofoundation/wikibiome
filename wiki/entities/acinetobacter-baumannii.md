---
title: Acinetobacter baumannii
type: entity
subtype: microbe
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter, alquethamy-2021-acinetobacter-cadmium-resistance, golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter, vollenweider-2024-pyoverdines-antimicrobial-iron-depriving, carvalho-2014-siderophores-trojan-horses-mdr, capdevila-2024-bacterial-metallostasis-sensing-trafficking]
source_count: 6
tags: [ESKAPE, nosocomial, multi-drug-resistant, WHO-critical-priority, cadmium-resistance, metal-homeostasis, zinc-dependent-cell-wall]
seo_target: "Acinetobacter baumannii zinc cadmium resistance metal homeostasis"
wikipedia_differentiation: "Zinc metallochaperone MigC-MurD cell wall regulation system; cadmium-induced zinc depletion and copper hyperaccumulation via CzcE/CzcCBA; siderophore-antibiotic Trojan horse vulnerability"
platform: wikibiome
gram_stain: "negative"
oxygen_requirement: "aerobic"
metal_dependencies: [zinc, iron, manganese]
key_enzymes: [MigC-COG0523-GTPase, MurD-peptidoglycan-ligase, CzcE-CDF-transporter, CzcCBA-RND-efflux, CadR-MerR-regulator, siderophore-receptors]
pathogenic_potential: opportunistic
conditions_enriched_in: [nosocomial-pneumonia, wound-infections, bloodstream-infections, ventilator-associated-pneumonia]
conditions_depleted_in: []
---

# Acinetobacter baumannii

WHO Priority 1: Critical. A Gram-negative, strictly aerobic coccobacillus and one of the most dangerous nosocomial pathogens on the planet. *A. baumannii* belongs to the ESKAPE group and causes ventilator-associated pneumonia, wound infections, and bloodstream infections with mortality rates exceeding 50% in some intensive care settings. What makes this organism so formidable is not simply its antibiotic resistance -- it is the deep integration of metal homeostasis systems with both virulence and resistance, creating multiple interdependent vulnerabilities that the host immune system and novel therapeutics can exploit.

This page covers the species *A. baumannii* specifically; for the broader genus, see [[acinetobacter]].

## Metal Dependencies

### Zinc: The Cell Wall Architect

*A. baumannii* depends on [[zinc]] for a recently discovered cell wall regulatory system. MigC (A1S_0934), a COG0523 family GTPase, is a zinc-binding metallochaperone that interacts with and inhibits MurD, an essential peptidoglycan synthesis enzyme ([[critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter]], animal-model). MigC binds zinc with extremely high affinity (KZn1 = 7.0 x 10^10 M-1), increasing 20-fold with GDP and approximately 40-fold with GTP. When zinc is available, Zn-MigC inhibits MurD (Ki = 32 +/- 6 uM, noncompetitive), modulating cell wall architecture. When zinc is depleted -- as occurs during host [[nutritional-immunity]] via [[calprotectin]] -- MigC function is lost, sensitizing the bacterium to beta-lactam antibiotics like ceftriaxone.

MurD itself requires [[manganese]] or magnesium as catalytic cofactors, meaning that [[mis-metallation]] at this single enzyme can cascade into morphological changes, antibiotic susceptibility, and virulence attenuation. MigC-deficient cells show elongated morphology, thinner peptidoglycan, and reduced colonization in murine pneumonia models.

### Iron: Siderophore Dependency

*A. baumannii* relies on species-specific siderophore uptake systems to acquire [[iron]] from the host environment ([[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]], expert-opinion). This iron dependency creates a structural vulnerability: siderophore-antibiotic conjugates can exploit the bacterium's own iron transport to deliver antibiotic payloads directly into the cell, achieving MICs 100-fold lower than passive diffusion ([[carvalho-2014-siderophores-trojan-horses-mdr]], expert-opinion). Natural pyoverdine variants from *Pseudomonas* also potently inhibit *A. baumannii* through competitive iron deprivation, with reduced potential for resistance evolution because the target is a fundamental metabolic requirement ([[vollenweider-2024-pyoverdines-antimicrobial-iron-depriving]], in-vitro).

## Key Enzymes and Virulence Factors

| Enzyme/System | Metal | Function |
|---|---|---|
| MigC (COG0523 GTPase) | Zinc | Metallochaperone regulating MurD and cell wall biogenesis |
| MurD ligase | Mg/Mn | Essential peptidoglycan synthesis |
| CzcE (CDF transporter) | Cd export | Primary cadmium resistance; upregulated approximately 480-fold by CadR |
| CzcCBA (RND efflux) | Cd/Zn export | Periplasm-to-extracellular cadmium and zinc translocation |
| CadR (MerR regulator) | Cd sensor | Highly attuned cadmium-responsive transcription factor |
| Siderophore receptors | Iron | Species-specific iron acquisition from host |

## Ecological Role

*A. baumannii* is unusual among ESKAPE pathogens in being a strict aerobe, which limits gut colonization but enhances environmental persistence on dry hospital surfaces. Its ecological strategy centers on rapid metal acquisition and robust metal efflux, allowing it to thrive in environments contaminated with heavy metals -- the same environments where antibiotic resistance is co-selected.

### Cadmium as a Selective Pressure

Cadmium exposure creates a cascade of metal dysregulation in *A. baumannii*. At 15 uM cadmium, zinc is depleted below detection while copper hyperaccumulates ([[alquethamy-2021-acinetobacter-cadmium-resistance]], in-vitro). The cadmium resistome involves 67 genes with significant fitness changes, and the CzcE CDF transporter confers 30-fold cadmium resistance compared to wild type. This cross-metal toxicity signature -- where cadmium disrupts zinc and copper homeostasis simultaneously -- illustrates how environmental metal exposure selects for organisms with sophisticated metal management, driving dysbiotic colonization in respiratory and wound settings.

## Conditions Associated

*A. baumannii* is primarily a healthcare-associated pathogen:
- Ventilator-associated pneumonia -- the most common and lethal manifestation
- Wound infections -- particularly in combat and burn injuries
- Bloodstream infections -- often catheter-related
- Urinary tract infections -- catheter-associated

The organism's ability to persist on hospital surfaces and medical devices, combined with its metal-antibiotic co-resistance phenotype, makes it a persistent threat in ICU environments.

## Key Studies

- [[critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter]] (animal-model) -- Discovery of MigC zinc metallochaperone regulating cell wall biogenesis through MurD interaction; demonstrates calprotectin-sensitive zinc dependency as virulence determinant.
- [[alquethamy-2021-acinetobacter-cadmium-resistance]] (in-vitro, keystone) -- Maps the cadmium resistome (67 genes) and demonstrates cadmium-induced zinc depletion and copper hyperaccumulation; establishes cross-metal toxicity framework.
- [[golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter]] (expert-opinion) -- Reviews multi-metal chelation as virulence disarmament strategy for *A. baumannii* and *P. aeruginosa*.
- [[vollenweider-2024-pyoverdines-antimicrobial-iron-depriving]] (in-vitro) -- 320 pyoverdine variants screened; specific structural variants potently inhibit *A. baumannii* through iron deprivation.
- [[carvalho-2014-siderophores-trojan-horses-mdr]] (expert-opinion) -- Siderophore-antibiotic conjugates exploiting iron transport to bypass outer membrane.

## Cross-References

- [[acinetobacter]] -- Genus-level page with broader ecological and clinical context
- [[zinc]] -- Essential cofactor for MigC metallochaperone and numerous enzymes
- [[iron]] -- Siderophore-dependent acquisition; Trojan horse therapeutic target
- [[cadmium]] -- Cross-metal toxicity driver selecting for *A. baumannii* metal resistance
- [[nutritional-immunity]] -- Calprotectin-mediated zinc starvation as host defense
- [[mis-metallation]] -- MurD cofactor disruption cascading into cell wall vulnerability
- [[antimicrobial-resistance]] -- Metal-antibiotic co-selection in hospital environments
- [[pseudomonas-aeruginosa]] -- Co-targeted by metal chelation strategies
