---

title: Helicobacter pylori
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [maier-2019-nickel-microbial-pathogenesis.md]
tags: [pathogen, gastric, nickel-dependent, urease, hydrogenase, cancer]
metal_dependencies: [nickel, iron, zinc, cobalt, bismuth-sensitive]
key_enzymes: [urease (UreAB — Ni-dependent), NiFe-hydrogenase (HydABCD), iron-cofactored SOD, catalase (Fe-dependent)]
platform: wikibiome
---

# Helicobacter pylori

A gastric pathogen that is arguably the **most nickel-dependent human pathogen known**. Two of its key virulence factors — urease and [NiFe] hydrogenase — require [[nickel]], and the bacterium has evolved an elaborate nickel trafficking, storage, and regulation system to support them.

## Nickel-Dependent Virulence Factors

### Urease
- Up to **10% of total proteome**.
- Essential for in vivo survival: hydrolyzes urea → ammonia + bicarbonate, buffering cytoplasmic pH to near-neutral in the [[acidic-microenvironment]] of the stomach.
- **Roles beyond acid neutralization** [[maier-2019-nickel-microbial-pathogenesis]]:
  - Required for persistence even at neutral gastric pH.
  - Promotes angiogenesis.
  - Stimulates pro-inflammatory cytokines (neutrophil/monocyte chemotaxis).
  - Binds Class II MHC on gastric epithelial cells → induces apoptosis.
  - Disrupts epithelial tight junctions (via ammonia production → myosin activation).
  - Activates blood platelets (lipoxygenase-mediated pathway).
  - Alters mucin gene expression.
- **Dual enzymatic/non-enzymatic function**: 
  - Holo-urease (Ni-bound): catalytic urea hydrolysis + non-catalytic oxidant quenching (Met/Met-sulfoxide cycle with MSR repair).
  - Apo-urease (Ni-free): retains only oxidant-quenching activity.
  - Only 2-25% of urease is actually nickel-activated; the rest may serve the antioxidant role.

### [NiFe] Hydrogenase
- Single H₂-uptake type (*hydABCDE* operon).
- H₂ is chronically available in the stomach (dissolved H₂ ~80 μM; enzyme Km ~1.8 μM — always saturated).
- **Powers CagA translocation**: the carcinogenic effector. Hydrogenase deletion mutants **cannot translocate CagA** and do not induce gastric cancer in gerbils.
- Enables **H₂-stimulated CO₂ fixation** (mixotrophy) — a growth mode never before described in a human pathogen.
- Strains from **cancer patients have higher hydrogenase activity** than gastritis-only strains.

## Nickel Trafficking System

### Transport
- **NiuBDE** (ABC-type): the only transporter operating at both acidic and neutral pH. Can also transport cobalt/bismuth (relevant to bismuth-based eradication therapy).
- **NixA** (NiCoT-type): secondary, Ni-only. Required in vivo (nixA mutants cannot colonize mouse stomachs) but nixA mutants retain some colonization in other models.
- TonB-dependent **FrpB4** for outer membrane transport.

### Storage
- **Hpn**: 47% histidine, 20-mer binding 5 Ni(II)/monomer. Present in all gastric *Helicobacter*. Primary nickel reservoir.
- **HpnI** (Hpn-like): 25% histidine. Restricted to *H. pylori* and *H. acinonychis*.
- Both compete for nickel under limiting conditions.
- Recent discovery: storage proteins interact with a **wide array of metabolic proteins** — AmiE (aliphatic amidase), PepA (aminopeptidase), and maturation proteins. Suggests a central hub role in nickel metabolism far beyond simple storage.

### Regulation
- NikR: nickel-responsive transcriptional regulator controlling urease and hydrogenase expression.
- Fur: iron-responsive regulator that also influences *hyd* gene expression.

### Export
- **CznABC**: cobalt-zinc-nickel efflux pump. Critical for nickel homeostasis and in vivo colonization.

## Clinical Significance

- Infects ~50% of the global population.
- Causes gastritis, peptic ulcers, gastric adenocarcinoma, MALT lymphoma.
- **Eradication therapy** often includes bismuth — which competes with nickel transport via NiuBDE.
- HspA (GroES homolog with His-rich Ni-binding C-terminus) has been explored as a **vaccine candidate** — partial protection in mice via intranasal administration.

## Connections

- [[metal-dependent-virulence]] — Ni-urease and [NiFe]-hydrogenase are the paradigmatic metal-dependent virulence factors
- [[nickel]] — essential cofactor for its two main virulence factors
- [[nutritional-immunity]] — host calprotectin/lactoferrin may restrict nickel availability
- [[metal-carcinogenesis]] — H. pylori-mediated gastric cancer is linked to hydrogenase-powered CagA translocation
- Contrast with [[salnikov-2008-metal-carcinogenesis]]: nickel causes cancer in host cells via epigenetics, while in H. pylori it enables cancer via CagA
