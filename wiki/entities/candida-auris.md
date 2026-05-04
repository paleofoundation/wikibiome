---
title: Candida auris
type: entity
subtype: fungus
created: 2026-04-13T00:00:00.000Z
updated: 2026-04-13T00:00:00.000Z
last_substantive_update: 2026-04-22
sources:
  - alves-2020-candida-adapting-survive-host-constraints
  - do-carmo-2023-metal-nanoparticles-candida-review
  - pasman-2025-candida-staph-reciprocal-virulence-masking
source_count: 3
tags:
  - fungus
  - pathogen
  - multidrug-resistant
  - nosocomial
  - emerging-pathogen
  - mycobiome
oxygen_requirement: facultative anaerobe
metal_dependencies:
  - zinc
  - iron
  - copper
  - manganese
key_enzymes:
  - secreted aspartyl proteases (SAPs)
  - zinc metalloproteases
  - Cu/Zn superoxide dismutase
  - multicopper ferroxidase Fet3
pathogenic_potential: obligate pathogen in hospital settings; rare gut commensal
conditions_enriched_in:
  - nosocomial-candidemia
  - icu-bloodstream-infection
conditions_depleted_in: []
seo_target: Candida auris gut microbiome metals resistance
wikipedia_differentiation: >-
  Metal-dependent virulence mechanisms, zinc/iron/copper acquisition strategies under hospital nutritional immunity
  pressure, and the gut-to-bloodstream translocation pathway that Wikipedia does not cover
---

Candida auris is an emerging multidrug-resistant fungal pathogen first identified in 2009 (Satoh et al. 2009, from a Japanese patient's ear canal) and now classified as a critical-priority pathogen by the WHO (WHO Fungal Priority Pathogens List 2022) and CDC (CDC 2019 Antibiotic Resistance Threats Report). Unlike other *Candida* species, *C. auris* is predominantly a nosocomial (healthcare-associated) pathogen with documented outbreak potential in intensive care settings. It is notable for its resistance to multiple antifungal drug classes and its persistence on environmental surfaces (Welsh et al. 2017). In some endemic regions, *C. auris* accounts for up to ~40-67% of ICU candidemia cases (Chowdhary et al. 2017, Indian ICU surveillance).

## Metal Dependencies

*C. auris* requires zinc, iron, copper, and manganese for growth and virulence, and must acquire each under conditions of active host sequestration ([[nutritional-immunity]]). The broad metal vulnerability profile is a direct consequence of its evolutionary niche — hospital bloodstream and skin, environments dominated by [[calprotectin]] (Zn/Mn sequestration), [[transferrin]]/[[lactoferrin]] (iron sequestration), and [[ceruloplasmin]]-coordinated copper redistribution.

### Iron
Like other *Candida* species, *C. auris* employs a reductive iron acquisition system (surface ferric reductases, multicopper ferroxidase Fet3, and iron permease Ftr1) alongside siderophore-like metallophores [[alves-2020-candida-adapting-survive-host-constraints]]. It can also use heme as an iron source via the Rbt5/Pga7 heme-binding cell wall protein family. Iron restriction arrests hyphal morphogenesis and downregulates biofilm production — establishing [[iron]] as a primary ecological choke point for *C. auris*.

### Zinc
Zinc-dependent virulence factors include secreted aspartyl proteases (SAPs), zinc metalloproteases, and Cu/Zn superoxide dismutase (Sod1), which neutralises the neutrophil oxidative burst. *C. auris* expresses the Zrt1/Zrt2/Pra1 zincophore system homologous to *C. albicans*, scavenging zinc from [[calprotectin]]-sequestered pools. Zinc chelation strategies have been explored as adjunct antifungal approaches (Citiulo et al. 2012; Crawford & Wilson 2015).

### Copper
Copper is required for Fet3 ferroxidase activity (iron uptake) and mitochondrial cytochrome c oxidase. *C. auris* responds to host copper toxicity (a macrophage defence mechanism) by inducing metallothionein-like sequestration. This dual role — copper as required cofactor and copper as toxin — is a known vulnerability being explored therapeutically (Hu et al. 2022, against other *Candida* species).

### Manganese
Manganese is sequestered by [[calprotectin]] in the bloodstream alongside zinc. *C. auris* requires Mn for mitochondrial Sod2 and for glycosylation of virulence-relevant cell wall proteins. Depletion below ~0.1 µM arrests growth within hours.

## Key Virulence Features

- Multidrug resistance — exhibits resistance to azoles (fluconazole), polyenes (amphotericin B), and echinocandins in a significant proportion of isolates; pan-resistant strains have been documented (Lockhart et al. 2017)
- Biofilm formation — forms biofilms on catheters and medical devices that reduce antifungal penetration and immune clearance (Sherry et al. 2017)
- Thermotolerance — one of the few fungi that can proliferate at human body temperature (37°C) and above, facilitating systemic infection (Casadevall et al. 2019)
- Surface persistence — survives on hospital surfaces for weeks to months, enabling environmental transmission (Welsh et al. 2017)
- Genomic plasticity — multiple distinct clades (I–V) with separate geographic origins, suggesting parallel emergence (Lockhart et al. 2017; Chow et al. 2020)

## Gut Microbiome Context

*C. auris* is primarily a nosocomial bloodstream and skin pathogen rather than a gut commensal in healthy individuals. However, gut colonisation is increasingly documented in ICU patients (Proctor et al. 2021, Nat Med; detection in ~15-20% of rectal swabs during outbreaks) and represents a reservoir for systemic translocation. Risk factors for gut colonisation mirror those for broader *Candida* overgrowth: broad-spectrum antibiotic exposure depleting [[lachnospiraceae]] and [[bifidobacterium]], PPI-induced hypochlorhydria, enteral feeding, and prolonged ICU stay.

Unlike [[candida-albicans]], *C. auris* rarely causes invasive candidiasis via direct gut-blood translocation in otherwise-healthy hosts; the dominant route appears to be skin colonisation followed by catheter-associated bloodstream invasion. Nevertheless, gut decolonisation protocols are being evaluated as part of outbreak control.

## Interkingdom Relationships

*C. auris* co-colonises with [[staphylococcus-aureus]] on skin and catheter surfaces, forming mixed biofilms where *S. aureus* benefits from fungal matrix protection while providing proteolytic activity that enhances fungal dispersal (Kean et al. 2018, mSphere). This mirrors the [[functional-shielding]] pattern documented between *C. albicans* and pathogenic bacteria in other body sites. Bacterial partners may also relieve *C. auris* of iron-acquisition costs by producing scavengeable siderophores that *C. auris* pirates via its reductive uptake system.

## Distinction from Other Candida Species

| Feature | *C. auris* | *C. albicans* | *C. tropicalis* |
|---------|-----------|--------------|----------------|
| Primary context | Nosocomial | Commensal/opportunistic | Commensal/opportunistic |
| Drug resistance | High (multidrug) | Moderate | Moderate |
| Biofilm | Strong | Strong | Moderate |
| Gut colonization | Rare (pathological) | Common | Occasional |

## Therapeutic Implications

The metal-dependence profile suggests several adjunct strategies relevant to a fungus with limited antifungal options:
- Iron restriction -- [[lactoferrin]], [[metal-chelation-therapy|deferasirox]], and [[gallium]] maltolate have all demonstrated in-vitro activity against *Candida* spp. by competing with fungal siderophores (Lai et al. 2016; Venturini et al. 2011).
- Copper-based coatings on hospital surfaces reduce *C. auris* persistence; copper-impregnated textiles are under evaluation for ICU use (Souli et al. 2019).
- Zinc chelation via clioquinol or calprotectin-mimetic peptides (Crawford & Wilson 2015) potentiates azole activity in other *Candida* species and is a plausible *C. auris* adjunct.
- Echinocandin + copper combinations have shown synergy against *C. auris* biofilms in preclinical work (Hu et al. 2022).

## Open Questions

- Does gut colonisation with *C. auris* alter bacterial community metal availability in ways that promote bacterial co-pathogens (e.g., [[enterococcus-faecium]], [[escherichia-coli]])?
- What host factors govern the transition from skin/gut colonisation to bloodstream invasion — is it primarily catheter-mediated, or does impaired host nutritional immunity play a triggering role?
- Can [[calprotectin]] status (e.g., in IBD patients with elevated faecal calprotectin) paradoxically select for *C. auris* by pre-adapting it to nutritional-immunity pressure?

## Cross-References

- [[candida-albicans]] — the most common Candida pathogen; commensal that can become opportunistic
- [[candida-tropicalis]] — related species with gut dysbiosis associations
- [[mycobiome]] — the fungal community context
- [[biofilm]] — key virulence mechanism
- [[functional-shielding]] — interkingdom biofilm protection of bacterial pathogens
- [[antimicrobial-resistance]] — pan-resistant strains documented; critical-priority WHO pathogen
- [[iron]] — iron acquisition via siderophore-like metallophores essential for virulence
- [[zinc]] — zincophore system, calprotectin competition
- [[copper]] — required cofactor and host defence toxin (dual role)
- [[calprotectin]] — host sequestration target *C. auris* must overcome
- [[lactoferrin]] — iron-sequestration host defence; proposed adjunct therapy
- [[gallium]] — Fe3+ mimic under investigation against *C. auris*
- [[nutritional-immunity]] — framework explaining why *C. auris* evolved broad metal competence
- [[staphylococcus-aureus]] — biofilm co-coloniser on skin and catheters
