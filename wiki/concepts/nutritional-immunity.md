---

title: Nutritional Immunity (Metal Sequestration)
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis.md, robinson-2020-metalation-natures-challenge.md, osman-2017-fine-control-metal-zinc-cobalt.md, chandrangsu-2016-zinc-intoxication-perr-heme-toxicity.md, eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus.md, kashyap-2014-pgrps-kill-bacteria-metal-stress.md, martin-2022-manganese-homeostasis-stress-pathogenesis.md, neville-2020-cadmium-carbon-flux-membrane-pneumococcus.md, bushman-2025-nutrient-metals-bacteria-gut-infection.md, mcfarlane-2025-manganese-sparing-response-rsac-saureus-infection.md, cassat-2012-metal-acquisition-staphylococcus-aureus.md]
tags: [host-defense, metal-sequestration, innate-immunity, nickel, calprotectin, lactoferrin, hepcidin, mis-metallation]
platform: wikibiome
---

# Nutritional Immunity (Metal Sequestration)

The strategy by which mammalian hosts **withhold essential metals from invading pathogens** to limit their growth. Well-established for iron and zinc; **underexplored but potentially powerful for [[nickel]]**.

## General Principle

- Pathogens require metal cofactors for virulence enzymes [[robinson-2020-metalation-natures-challenge]].
- Hosts sequester these metals using binding proteins, lowering free metal availability at infection sites [[bushman-2025-nutrient-metals-bacteria-gut-infection]].
- This is an innate immune mechanism — part of the "nutritional immunity" concept.
- Best characterized for **iron** (ferritin, transferrin, lactoferrin, hepcidin, NRAMP1) and **zinc/manganese** (calprotectin) [[cassat-2012-metal-acquisition-staphylococcus-aureus]], [[bushman-2025-nutrient-metals-bacteria-gut-infection]].
- **Dual strategy**: Hosts both **withhold** metals (restriction) and **flood** pathogens with toxic metal levels (intoxication). Macrophages pump Cu (>500 uM) and Zn into phagolysosomes to kill engulfed bacteria, and PGRPs induce 60-100x intracellular Zn/Cu increases in target cells [[kashyap-2014-pgrps-kill-bacteria-metal-stress]], [[bushman-2025-nutrient-metals-bacteria-gut-infection]].
- **Mis-metallation is the killing mechanism**: Zn flooding mis-metalates the PerR regulator in Gram-positive pathogens, causing heme toxicity and oxidative death [[chandrangsu-2016-zinc-intoxication-perr-heme-toxicity]]. Chelating either Zn or Cu completely abolishes PGRP bactericidal activity, confirming metal intoxication is required, not incidental [[kashyap-2014-pgrps-kill-bacteria-metal-stress]].

## Nickel Sequestration [[maier-2019-nickel-microbial-pathogenesis]]

### Why Nickel is a Good Target
- **Mammals do not synthesize known Ni-requiring proteins** — so restricting nickel imposes no cost on the host.
- Nickel is already scarce in mammalian tissues: <5 ppm in most organs, <0.1% of zinc levels.
- Many important pathogens ([[helicobacter-pylori]], [[staphylococcus-aureus]], *Salmonella*, *Brucella*) depend on Ni-enzymes (urease, hydrogenase) for virulence.

### Host Proteins Involved
- **Calprotectin** (S100A8/A9): neutrophil-derived; >1 mg/mL at infection sites [[bushman-2025-nutrient-metals-bacteria-gut-infection]]. Canonically sequesters Mn and Zn to starve *S. aureus* of Mn-SOD cofactors [[cassat-2012-metal-acquisition-staphylococcus-aureus]], [[martin-2022-manganese-homeostasis-stress-pathogenesis]]. Recent finding: also coordinates Ni(II) at the hexahistidine site **preferentially over Zn(II)**, sequestering nickel from *S. aureus* and *K. pneumoniae* and inhibiting their urease activity [[maier-2019-nickel-microbial-pathogenesis]]. In response, *S. aureus* activates the small RNA RsaC to suppress Mn-dependent SodA translation, freeing scarce Mn for other essential processes [[mcfarlane-2025-manganese-sparing-response-rsac-saureus-infection]].
- **Lactoferrin**: primarily known for iron binding via bi-lobal transferrin fold; histidine/tyrosine ligands can also bind nickel [[maier-2019-nickel-microbial-pathogenesis]]. Nickel-sequestering effect is plausible but unstudied.
- **Transferrin**: serum iron carrier that restricts iron availability to extracellular pathogens; exploited by siderophore-producing Enterobacteriaceae [[bushman-2025-nutrient-metals-bacteria-gut-infection]].
- **Hepcidin**: master regulator of iron homeostasis that degrades ferroportin and induces functional iron restriction during infection [[bushman-2025-nutrient-metals-bacteria-gut-infection]]. Role in nickel restriction unknown but likely given overlap in metal handling.
- **NRAMP1** (SLC11A1): divalent metal transporter in macrophage phagolysosomes. Can export Ni(II), restricting availability to engulfed intracellular pathogens [[maier-2019-nickel-microbial-pathogenesis]].
- **Peptidoglycan Recognition Proteins (PGRPs)**: Kill bacteria by inducing 60-100x intracellular Zn2+ and Cu+, synergistically with oxidative stress and glutathione depletion. Metal intoxication is a *required* component of killing [[kashyap-2014-pgrps-kill-bacteria-metal-stress]].

### Pathogen Counter-Strategies
Pathogens have evolved elaborate systems to overcome nickel scarcity:
- **High-affinity transporters**: ABC-type (NikABCDE, NiuBDE), NiCoT-type (NixA), ECF-type.
- **Metallophores** (nickel-scavenging small molecules):
 - Staphylopine (*S. aureus*): nicotianamine-like, broad-spectrum metal chelator.
 - Pseudopaline (*P. aeruginosa*): primary nickel acquisition mechanism.
 - Yersiniabactin (*E. coli*, *Klebsiella*, *Yersinia*): originally iron siderophore, also binds nickel.
- **Storage proteins**: Hpn/HpnI in *H. pylori* — buffer against nickel fluctuations.
- **Efficient recycling**: some pathogens recycle nickel from metallophore complexes.

## Therapeutic Potential

Targeting nickel availability is proposed as a therapeutic strategy [[maier-2019-nickel-microbial-pathogenesis]]:
- Block nickel trafficking pathways in pathogens.
- Enhance host nickel sequestration.
- **Complication**: disrupting nickel for pathogens could also affect the (Ni-utilizing) commensal microbiota → potential dysbiosis.

## The Two-Kingdom Conundrum

An evolutionary puzzle:
- **Plants** use nickel (Ni-urease is widespread) and naturally compete with pathogens for it.
- **Mammals** don't use nickel, so sequestration is "free" — no self-harm.
- Yet **very few plant pathogens use nickel** (only *Streptomyces scabies* and relatives).
- This asymmetry remains unexplained.

## Connections

- [[nickel]] — the metal being sequestered
- [[helicobacter-pylori]] — most nickel-dependent human pathogen
- [[oxidative-stress]] — macrophage killing involves both ROS and metal restriction
