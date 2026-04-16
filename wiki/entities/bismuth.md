---

title: Bismuth
type: entity
subtype: metal
symbol: "Bi"
atomic_number: 83
created: 2026-04-14
updated: 2026-04-14
last_substantive_update: 2026-04-14
sources: [wang-2023-metallo-sideromycin-bismuth-cefiderocol.md]
source_count: 1
tags: [bismuth, antimicrobial, synergy, cefiderocol, H-pylori, metallodrug, siderophore]
platform: wikibiome
primary_exposure: "Pharmaceutical (bismuth subsalicylate, subcitrate); minor dietary"
dietary_sources: ["negligible — crustal abundance 8-17 µg/kg", "pharmaceutical formulations dominate total exposure"]
seo_target: "bismuth antimicrobial H pylori cefiderocol synergy"
wikipedia_differentiation: "Bismuth-cefiderocol synergy via competitive Bi3+/Fe3+ binding that enhances siderophore uptake, suppresses biofilm, and prevents resistance evolution (Nature Communications 2023); ecological framing of bismuth as a metal Trojan horse rather than a simple antacid"
---

# Bismuth (Bi)

A heavy metal traditionally considered safe enough for over-the-counter gastrointestinal remedies (Pepto-Bismol, De-Nol), bismuth is re-emerging as a potent antimicrobial synergist. Its key property: **Bi3+ competes with Fe3+ for binding sites on siderophores and bacterial metalloenzymes**, creating iron starvation conditions that amplify the efficacy of siderophore-conjugated antibiotics. Despite its position on the periodic table next to lead and polonium, bismuth is the least toxic of the heavy post-transition metals — a consequence of poor gastrointestinal absorption (<1% of ingested dose) and rapid renal clearance of the small absorbed fraction (Sun et al. 2013).

## Biological Chemistry

Bismuth has no known essential role in human or bacterial biology. All of its biological effects derive from its **coordination chemistry** — a highly oxophilic and thiophilic cation with ionic radius (1.03 Å) similar enough to Fe3+ (0.65 Å octahedral; larger in tetrahedral) and Zn2+ (0.74 Å) to occupy their binding pockets, but with binding constants for S- and O-donor ligands that can exceed physiological metals by 3-10 log units. This makes bismuth a **promiscuous competitor** for soft-donor coordination sites in proteins, particularly cysteine-rich metallothionein-like domains and histidine/glutamate clusters in metallochaperones.

Because bismuth sequesters thiols and iron-binding sites without participating in physiological redox chemistry, it behaves as an **ecological stressor** rather than a reactive toxin — it starves organisms of their metal cofactors without producing ROS or alkylating DNA.

## Mechanism of Antimicrobial Action

- **Fe3+ displacement** -- Bi3+ binds siderophores and iron-acquisition proteins with sufficient affinity to displace iron, starving bacteria of their most critical nutrient [[wang-2023-metallo-sideromycin-bismuth-cefiderocol]].
- **Metalloenzyme inhibition** -- Bi3+ inactivates iron- and zinc-dependent bacterial enzymes including metallo-beta-lactamases (NDM-1, VIM-2, IMP-4), urease (a [[nickel]]-dependent enzyme), alcohol dehydrogenase, and fumarase (Wang et al. 2018, Nat. Commun.; Chen et al. 2020, Cell Host Microbe). The NDM-1 inhibition is notable: colloidal bismuth subcitrate restores carbapenem susceptibility in previously resistant *Klebsiella pneumoniae* and *E. coli* strains.
- **Glutathione depletion** -- Bismuth binds intracellular glutathione with very high affinity (log K ~29), depleting bacterial redox buffers and potentiating oxidative killing by host neutrophils and co-administered antibiotics.
- **Biofilm disruption** -- Bismuth compounds destabilize biofilm architecture by interfering with iron-dependent quorum sensing (PQS in *Pseudomonas*, AI-2 in *Streptococcus*) and extracellular matrix production. Bismuth-thiol formulations have been tested clinically against *Staphylococcus aureus* and *Pseudomonas aeruginosa* biofilm infections (Domenico et al. 2001).
- **DNA gyrase inhibition** -- At higher concentrations, Bi3+ perturbs the zinc-dependent catalytic site of bacterial topoisomerases.

## Synergy with Cefiderocol

The most significant recent advance in bismuth pharmacology is its synergy with [[gallium|siderophore-conjugated antibiotics]]:

- **Bismuth-cefiderocol combination** achieves enhanced bactericidal activity against multidrug-resistant Gram-negatives by a dual mechanism: Bi3+ competes for iron binding sites, which paradoxically *increases* bacterial siderophore production and uptake -- pulling more cefiderocol into the cell [[wang-2023-metallo-sideromycin-bismuth-cefiderocol]].
- **Resistance prevention** -- The combination suppresses resistance evolution because bacteria cannot simultaneously downregulate siderophore uptake (to exclude cefiderocol) and upregulate it (to overcome bismuth-induced iron starvation) [[wang-2023-metallo-sideromycin-bismuth-cefiderocol]].
- **Biofilm penetration** -- Bismuth disrupts biofilm iron architecture, improving cefiderocol access to biofilm-embedded cells [[wang-2023-metallo-sideromycin-bismuth-cefiderocol]].

## H. pylori Quadruple Therapy

- **Bismuth quadruple therapy** (bismuth subsalicylate or subcitrate + metronidazole + tetracycline + PPI) remains a first-line treatment for [[helicobacter-pylori]] infection, particularly in regions with clarithromycin resistance >15% (Malfertheiner et al. 2022, Maastricht VI/Florence Consensus; Chey et al. 2017, ACG Guidelines). Eradication rates exceed 90% even against clarithromycin-resistant strains.
- Bismuth's anti-*H. pylori* activity involves disruption of **urease** (Ni-dependent, essential for acid survival), **fumarase** and **alcohol dehydrogenase**, ATP synthase inhibition, and physical coating of the gastric mucosa that blocks bacterial adhesion (Ge et al. 2007, BioMetals).
- Proteomic studies show bismuth perturbs at least 166 *H. pylori* proteins, targeting nickel and iron trafficking (HypA, HypB, NikR) and oxidative stress defence (AhpC, TsaA) — a multi-target footprint that explains why resistance to bismuth has never been clinically documented despite half a century of use (Sun et al. 2013, Metallomics).
- The combination of bismuth's direct bactericidal effects with its metalloenzyme inhibition explains its sustained clinical efficacy despite decades of use.

## Pharmaceutical Forms and Pharmacokinetics

Bismuth is administered as insoluble salts that release Bi3+ locally in the GI tract:
- **Bismuth subsalicylate** (BSS, Pepto-Bismol) — dissociates in the stomach to bismuth oxychloride and salicylic acid; the salicylate moiety contributes anti-inflammatory activity.
- **Colloidal bismuth subcitrate** (CBS, De-Nol, Pylera component) — forms a glycoprotein-bismuth precipitate on ulcer surfaces at acidic pH.
- **Ranitidine bismuth citrate** (Tritec, now withdrawn) — combined acid suppression with bismuth activity.
- **Bismuth-thiol compounds** (investigational) — e.g., bismuth-ethanedithiol (BisEDT), designed to penetrate biofilms of *P. aeruginosa* and *S. aureus*.

Systemic absorption is <1% with normal renal function; the absorbed fraction is cleared in urine with half-life ~5 days. Chronic high-dose exposure (>3 g/day for months) can cause reversible bismuth encephalopathy, seen historically in French patients using bismuth as a laxative (Supino-Viterbo et al. 1977).

## Nutritional Immunity Parallels

Bismuth pharmacology mimics mechanisms of host nutritional immunity. When the host upregulates [[lactoferrin]] and [[lipocalin-2]] to sequester iron from pathogens, it is executing the same chemistry bismuth executes therapeutically: **outcompete microbes for essential metals without producing toxic oxidants**. Framing bismuth this way reframes its clinical role — not as an antacid with minor antibacterial properties, but as an exogenous nutritional-immunity reinforcement that selectively disables metal-dependent pathogens while sparing host metal homeostasis (which bismuth can't meaningfully disrupt due to poor absorption).

## Environmental and Dietary Exposure

Unlike [[lead]], [[cadmium]], or [[arsenic]], bismuth contributes negligible background exposure through diet or environment. Crustal abundance is very low (~0.009 ppm), bismuth does not bioaccumulate in crops, and industrial uses (low-melting alloys, cosmetics, nuclear reactor fuel cladding) rarely produce community-level exposure. For practical purposes, **pharmaceutical intake dominates human bismuth exposure** — a factor that distinguishes it from every other heavy metal in the WikiBiome knowledge base and explains why bismuth can be discussed as a therapeutic lever rather than a contamination concern.

## Open Questions

- Can bismuth salts be formulated to selectively target pathogenic Gram-negatives without disrupting beneficial gut anaerobes? Current quadruple therapy does cause transient depletion of [[bifidobacterium]] and [[lactobacillus]], though recovery is typically complete within 4-8 weeks.
- Does chronic low-dose bismuth exposure affect the microbiome of daily Pepto-Bismol users (e.g., travellers on long-term prophylaxis)?
- Is the reported anti-inflammatory effect of bismuth subsalicylate attributable to the bismuth or the salicylate moiety, and does bismuth contribute independently to the control of traveller's diarrhoea caused by enterotoxigenic [[escherichia-coli]]?

## Cross-References

- [[gallium]] -- Partner in siderophore-antibiotic Trojan horse strategies; gallium mimics Fe3+ redox-inactively, bismuth competes for the same sites
- [[iron]] -- The metal bismuth competes with
- [[zinc]] -- Displaced from metallo-beta-lactamases by bismuth
- [[nickel]] -- Urease active site that bismuth inactivates
- [[siderophores-metallophores]] -- The uptake systems bismuth exploits
- [[helicobacter-pylori]] -- Primary clinical target
- [[cefiderocol]] -- Siderophore-antibiotic synergy partner
- [[biofilm]] -- Disrupted by bismuth-iron competition
- [[antimicrobial-resistance]] -- Bismuth combinations suppress resistance evolution
- [[pseudomonas-aeruginosa]] -- Target pathogen for bismuth-cefiderocol synergy
- [[escherichia-coli]] -- Traveller's diarrhoea target of bismuth subsalicylate
- [[lactoferrin]] -- Host nutritional-immunity analogue of bismuth's mechanism
