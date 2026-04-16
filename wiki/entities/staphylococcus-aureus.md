---

title: Staphylococcus aureus
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [maier-2019-nickel-microbial-pathogenesis.md, akbari-2022-metal-homeostasis-streptococci.md]
tags: [pathogen, nickel, zinc, iron, manganese, MRSA, skin-infection, biofilm, urease, nutritional-immunity]
metal_dependencies: [iron, manganese, zinc, nickel]
key_enzymes: [staphyloferrin A/B (siderophores), IsdBCH (heme uptake), MntABC (manganese import), aureolysin (Zn-metalloprotease), urease (Ni-dependent)]
platform: wikibiome
last_substantive_update: 2026-04-13
seo_target: "Staphylococcus aureus nutritional immunity staphylopine iron manganese zinc"
wikipedia_differentiation: "Staphylopine multi-metal metallophore discovery plus complete nutritional immunity evasion system for iron, manganese, zinc, and nickel"
conditions_enriched_in: [skin-infections, MRSA-infections, sepsis, endocarditis]
conditions_depleted_in: []
pathogenic_potential: opportunistic
---

# Staphylococcus aureus

A versatile Gram-positive pathogen with one of the **best-characterized nutritional immunity evasion systems** known. *S. aureus* requires [[nickel]], [[iron]], [[zinc]], and [[manganese]] for virulence and has evolved dedicated acquisition systems for each, including the novel metallophore **staphylopine** -- a nicotianamine-like chelator that scavenges multiple transition metals from the host.

## Metal-Dependent Virulence Factors

### Ni-Dependent Urease
- Urease is critical for **skin survival**: human sweat contains ~22 mM urea, and urease-mediated hydrolysis provides ammonia for acid neutralization and nitrogen acquisition on the skin surface [[maier-2019-nickel-microbial-pathogenesis]].
- Required for **kidney colonization** in systemic infection models.
- Urease genes are **upregulated in biofilm-embedded cells**, linking nickel metabolism directly to chronic/device-associated infections.
- Biofilm formation on implanted medical devices depends partly on urease activity.

### Fe-Dependent Virulence
- **Staphyloferrin A and B**: endogenous siderophores for iron scavenging in iron-limited host environments [[pandey-2021-galbofloxacin-gallium-siderophore-staph]].
- **IsdB/heme uptake system (Isd pathway)**: surface-anchored hemoglobin receptors (IsdB, IsdH) extract heme from host hemoglobin, pass it through the cell wall (IsdA, IsdC), and import it via the ABC transporter IsdDEF. One of the most elegant iron piracy systems characterized.
- **Sortase-anchored surface proteins**: multiple iron-binding surface proteins critical for infection.

### Mn-Superoxide Dismutase (Mn-SOD)
- Mn-dependent SOD detoxifies superoxide produced by host neutrophils and macrophages during the oxidative burst.
- Mn acquisition is essential for surviving phagocyte killing.

## Metal Acquisition Systems

### Staphylopine Metallophore
- A broad-spectrum metallophore originally thought to be zinc-specific but now known to also bind **nickel** and other transition metals [[maier-2019-nickel-microbial-pathogenesis]].
- Synthesized by the CntKLM enzymes, exported by CntE, and reimported as metal-staphylopine complexes by the CntABCDF transporter.
- Allows metal scavenging in the calprotectin-rich abscess environment where free metal concentrations are vanishingly low.

### Nickel Transport
- **NikABCDE-type** (Nik/Cnt system): ABC-type nickel import.
- **NixA homologs**: secondary nickel-specific transport.
- Nickel import is upregulated during infection and is required for urease metalation.

### Iron Transport
- Staphyloferrin A/B siderophores + IsdB/heme pathway (see above).
- Multiple redundant iron import systems ensure iron access across diverse infection sites.

### Zinc/Manganese Transport
- **AdcABC**: zinc import system similar to streptococcal homologs.
- **MntABC**: manganese import for SOD metalation.

## Nutritional Immunity Evasion

*S. aureus* faces aggressive metal restriction by the host, particularly in abscesses:

- **Calprotectin (S100A8/A9)**: the dominant host metal-sequestering protein at infection sites. Coordinates Ni(II) preferentially over Zn(II) at the hexahistidine site; sequesters nickel from *S. aureus*, directly inhibiting urease activity [[maier-2019-nickel-microbial-pathogenesis]].
- **NRAMP1**: macrophage metal exporter that restricts Ni, Mn, and Fe availability in phagolysosomes.
- *S. aureus* counters with staphylopine (outcompetes calprotectin for metals), redundant siderophores, and heme piracy.
- The calprotectin-staphylopine battle at the abscess is one of the clearest examples of metal tug-of-war between host and pathogen.

## Metal-Antibiotic Co-Resistance (MRSA)

- MRSA strains frequently carry **metal resistance genes on the same mobile genetic elements** as methicillin resistance (mecA) and other antibiotic resistance genes.
- Environmental metal exposure (heavy metal-contaminated hospitals, agricultural metal use) can **co-select** for antibiotic resistance.
- This parallels findings in [[enterococcus]] where metal and antibiotic resistance genes co-occur on conjugative plasmids [[rebelo-2021-enterococcus-metal-antibiotic-resistance]].

## Disease Associations

- Skin and soft tissue infections (boils, abscesses, cellulitis)
- Bacteremia and endocarditis
- Osteomyelitis
- Pneumonia (hospital-acquired)
- Device-associated biofilm infections (catheters, prosthetic joints), including synergistic mixed-species biofilms with *Candida albicans* where reciprocal virulence masking is observed [[pasman-2025-candida-staph-reciprocal-virulence-masking]]
- Toxic shock syndrome
- Food poisoning

## Connection to Environmental Metal Exposure

- Dietary and environmental nickel may support *S. aureus* urease activity during skin colonization and kidney infection.
- Hospital environments with elevated metal levels may promote MRSA metal-antibiotic co-resistance.
- Skin contact with nickel-releasing alloys (jewelry, implants) creates local nickel-enriched environments where urease-expressing *S. aureus* has a survival advantage.

## Key Sources

- [[akbari-2022-metal-homeostasis-streptococci]]

## Connections

- [[metal-dependent-virulence]] -- Ni-urease, Fe-siderophores, Mn-SOD all metal-dependent virulence factors
- [[nickel]] -- cofactor for urease; scavenged by staphylopine
- [[iron]] -- essential for growth; acquired via siderophores and heme piracy
- [[zinc]] -- scavenged by staphylopine; target of host calprotectin
- [[manganese]] -- cofactor for SOD; critical for oxidative stress defense
- [[nutritional-immunity]] -- calprotectin-mediated metal restriction is central to the host-*S. aureus* battle
- [[helicobacter-pylori]] -- both use Ni-dependent urease but in very different niches (stomach vs. skin/kidney)
- [[enterococcus]] -- parallel metal-antibiotic co-resistance evolution
- [[proteus-mirabilis]] -- both use Ni-urease for urinary tract pathogenesis
- [[antimicrobial-resistance]] -- MRSA is a paradigmatic AMR pathogen; metal-antibiotic co-resistance is well-documented
- [[co-selection]] -- czrC zinc resistance gene co-located with mecA on SCCmec elements in MRSA
