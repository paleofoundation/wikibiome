---

title: Streptococcus pneumoniae
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [romero-espejel-2013-streptococcus-pneumoniae-iron.md, akbari-2022-metal-homeostasis-streptococci.md]
tags: [pathogen, iron, manganese, zinc, copper, meningitis, pneumonia, otitis-media, nutritional-immunity]
metal_dependencies: [manganese, zinc, iron]
key_enzymes: [PsaA (Mn-binding lipoprotein — essential for virulence), AdcABC (zinc uptake), PiaA/PiuA (iron uptake), Mn-SOD, IgA1 protease (Zn-metalloprotease)]
platform: wikibiome
last_substantive_update: 2026-04-13
seo_target: "Streptococcus pneumoniae manganese zinc iron nutritional immunity"
wikipedia_differentiation: "Complete metal transporter virulence factor profile (PsaA, AdcABC, PiaA/PiuA) with nutritional immunity evasion at every infection site"
conditions_enriched_in: [pneumonia, meningitis, otitis-media]
conditions_depleted_in: []
pathogenic_potential: opportunistic
---

# Streptococcus pneumoniae

A Gram-positive pathogen (the "pneumococcus") that depends on **iron, manganese, and zinc** for virulence and has evolved dedicated transport systems for each. Iron is required for viability itself, manganese powers the superoxide dismutase needed to survive the oxidative burst, and zinc homeostasis (import via AdcABC, export via CzcD) is critical for colonization. The pneumococcus faces aggressive host nutritional immunity at every infection site -- meninges, lungs, middle ear, blood -- and its metal transporters are among its most important virulence factors.

## Metal-Dependent Virulence Factors

### Iron -- Required for Viability
- *S. pneumoniae* **requires iron for growth and viability** [[romero-espejel-2013-streptococcus-pneumoniae-iron]].
- Iron starvation arrested growth and reduced viability to ~50% within 5 hours.
- Supplementation with hemoglobin restored viability to ~90% within 5 hours.
- Can use **hemoglobin and heme** as sole iron sources, but **not** holo-transferrin or holo-lactoferrin -- indicating it has evolved to scavenge iron from damaged red blood cells rather than competing for host iron-binding proteins.

### Mn-Dependent Superoxide Dismutase (Mn-SOD)
- **SodA**: Mn-dependent superoxide dismutase, the primary defense against reactive oxygen species [[akbari-2022-metal-homeostasis-streptococci]].
- Essential for surviving the **neutrophil oxidative burst** during pneumonia and bacteremia.
- Mn acquisition via PsaA/MtsABC is therefore directly linked to oxidative stress survival.
- Cadmium can disrupt Mn uptake/efflux, indirectly increasing oxidative stress susceptibility -- a vulnerability that could be exploited therapeutically.

### Zn-Dependent Metalloenzymes
- Zinc is cofactor for numerous metabolic enzymes.
- Zinc homeostasis is tightly regulated because both deficiency and excess are lethal.

## Metal Acquisition Systems

### Iron Acquisition
- **PiaA/PiuA**: ABC-type iron uptake lipoproteins [[akbari-2022-metal-homeostasis-streptococci]].
 - PiaA and PiuA are independently important for virulence; double mutants are severely attenuated.
 - Part of iron-regulated operons induced under iron limitation.
- **22 kDa and 37 kDa membrane proteins**: the first characterized hemoglobin/heme-binding proteins in *S. pneumoniae* [[romero-espejel-2013-streptococcus-pneumoniae-iron]].
 - Both bind hemoglobin AND free heme.
 - Compete for the tetrapyrrole ring (shared binding with vitamin B12).
 - Contain the **KVAFDH motif** essential for heme binding, conserved with the Shr protein of *S. pyogenes*.
- **FeoABC**: ferrous iron transporter for anaerobic/low-oxygen environments.
- Notably, *S. pneumoniae* does **not** produce classical siderophores -- it relies on direct heme/hemoglobin binding and ABC transporters.

### Manganese Acquisition
- **PsaA/PsaBCA (MtsABC/SloABC)**: the primary Mn ABC transporter [[akbari-2022-metal-homeostasis-streptococci]].
 - PsaA is a surface-exposed lipoprotein and vaccine candidate.
 - PsaA mutants are severely attenuated in colonization, pneumonia, and bacteremia models.
 - Also transports Zn at lower affinity.
- **MntH (NRAMP family)**: secondary Mn importer.

### Manganese Export
- **MntE**: CDF-family Mn exporter to prevent manganese toxicity [[akbari-2022-metal-homeostasis-streptococci]].
- Balances Mn import via PsaA; mntE mutants accumulate toxic Mn levels.

### Zinc Homeostasis
- **AdcABC/AdcAII**: ABC-type zinc import system [[akbari-2022-metal-homeostasis-streptococci]].
 - AdcA and AdcAII are two distinct solute-binding proteins with different zinc affinities.
 - **Pht (polyhistidine triad) proteins**: surface-exposed zinc-binding/storage proteins that feed zinc to AdcAII.
 - Adc mutants show attenuated nasopharyngeal colonization and meningitis.
- **CzcD**: CDF-family zinc exporter.
 - Exports zinc (and possibly cadmium) to prevent intracellular toxicity.
 - Essential when host neutrophils pump zinc into phagosomes as an antimicrobial strategy.

### Copper Homeostasis
- **CopA**: P-type ATPase for copper efflux [[akbari-2022-metal-homeostasis-streptococci]].
- **CopY**: copper-responsive repressor regulating copA expression.
- Copper intoxication by macrophages is a key host defense; CopA enables survival.

### Nickel
- Largely uncharacterized in *S. pneumoniae* [[akbari-2022-metal-homeostasis-streptococci]].
- A **LarA homolog** (Ni-dependent lactate racemase) is present in the genome, suggesting some nickel utilization.
- No characterized Ni transporter; the UreMQO system known in *S. salivarius* has not been identified in pneumococcus.

## Nutritional Immunity Evasion

*S. pneumoniae* encounters metal restriction at every infection site:

- **Calprotectin (S100A8/A9)**: sequesters Zn and Mn at infection sites. Released by neutrophils infiltrating the lung, meninges, and middle ear. Directly inhibits pneumococcal growth by starving PsaA and AdcABC of their substrates.
- **Lactoferrin**: sequesters iron in mucosal secretions. Notably, *S. pneumoniae* cannot use lactoferrin-bound iron, making lactoferrin an effective barrier.
- **Transferrin**: sequesters iron in blood. Again, pneumococcus cannot access transferrin-bound iron -- it must wait for red blood cell lysis to access hemoglobin.
- **Zinc intoxication**: neutrophils pump zinc into phagosomes to toxic levels; CzcD exports excess zinc as a countermeasure.
- **Copper intoxication**: macrophage copper pumps target engulfed pneumococci; CopA provides defense.

The pneumococcus is therefore caught in a dual bind: **metal starvation** in extracellular spaces (calprotectin, lactoferrin) and **metal intoxication** inside phagocytes (Zn, Cu poisoning).

## Disease Associations

- **Community-acquired pneumonia**: the most common bacterial cause worldwide.
- **Bacterial meningitis**: leading cause in children and adults; iron acquisition is critical in CSF.
- **Otitis media**: the most common cause of middle ear infection in children.
- **Bacteremia/sepsis**: especially in asplenic patients and young children.
- **Sinusitis**: common upper respiratory infection.

## Connection to Environmental Metal Exposure

- Host iron status directly affects pneumococcal disease severity: iron supplementation in iron-deficient populations has been associated with increased infection rates.
- Zinc supplementation is used therapeutically to reduce pneumonia incidence in children -- partly by enhancing host immunity but potentially also by altering metal availability dynamics.
- Cadmium disruption of Mn homeostasis (via competition for PsaA and disruption of MntE) suggests that environmental cadmium exposure could paradoxically increase pneumococcal oxidative stress susceptibility -- or select for cadmium-tolerant variants.
- Manganese-rich diets or supplements may support both host SOD function and, inadvertently, pneumococcal Mn-SOD.

## Connections

- [[metal-dependent-virulence]] -- Fe required for viability; Mn-SOD for oxidative defense; PsaA as vaccine target
- [[iron]] -- absolutely required for viability; acquired via hemoglobin/heme binding (not siderophores)
- [[manganese]] -- powers SOD for oxidative defense; PsaA is a vaccine candidate
- [[zinc]] -- AdcABC import and CzcD export; Pht surface proteins for zinc scavenging
- [[copper]] -- CopA efflux defends against macrophage copper intoxication
- [[nickel]] -- largely uncharacterized; LarA homolog suggests some utilization
- [[nutritional-immunity]] -- faces both metal starvation and metal intoxication by the host
- [[staphylococcus-aureus]] -- both face calprotectin-mediated metal restriction at infection sites
- [[enterococcus]] -- shared CDF pump family for zinc/cadmium export
- [[helicobacter-pylori]] -- contrasting metal strategies: pneumococcus needs Fe/Mn/Zn, H. pylori needs Ni
