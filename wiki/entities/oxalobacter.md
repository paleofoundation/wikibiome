---

title: Oxalobacter
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [duan-2020-gut-microbiota-heavy-metal-probiotic-strategy, zhang-2022-causal-gut-microbiome-cvd-mr, dai-2024-gut-microbiota-cvd-bidirectional-mr, islam-2022-opposing-microbiome-signatures-autoimmune-cancer, liu-2022-mr-gut-microbial-genera-ibd-uc-cd, chen-2022-living-microorganisms-detoxification-heavy-metals, hu-2024-gut-microbiota-chd-mendelian-randomization, wang-2023-gut-microbiota-adhd-mendelian-randomization, deng-2022-gi-symptoms-minor-impact-asd-microbiota-scfa]
source_count: 9
metal_dependencies: [indirect — oxalate degradation affects calcium, magnesium, iron, and zinc bioavailability]
key_enzymes: [oxalyl-CoA decarboxylase, formyl-CoA transferase, oxalate-CoA ligase]
tags: [commensal, oxalate-degrading, kidney-stone-prevention, CKD-relevant, antibiotic-sensitive, CHD-risk-MR, functional-specialist]
platform: wikibiome
seo_target: "Oxalobacter formigenes oxalate kidney stones calcium metal bioavailability gut microbiome"
wikipedia_differentiation: "Oxalate-metal chelation interactions with calcium, iron, zinc, and magnesium; opposing cancer vs. autoimmune directionality; MR evidence for CHD risk via blood pressure mediation; ADHD protective association via Oxalobacteraceae family; antibiotic vulnerability data; intersections with heavy metal detoxification strategies — none of which appear in Wikipedia's brief clinical entry"
conditions_enriched_in: [cancer-general]
conditions_depleted_in: [kidney-stones, chronic-kidney-disease, autoimmune-disease]
pathogenic_potential: commensal
gram_stain: "negative"
oxygen_requirement: "obligate anaerobe"---

# Oxalobacter

*Oxalobacter formigenes* is an obligate anaerobic, Gram-negative bacterium that occupies a unique metabolic niche in the human gut as the primary oxalate-degrading specialist. Its loss from the gut microbiome — most commonly from antibiotic exposure — has cascading consequences for calcium oxalate metabolism, metal bioavailability, kidney health, and potentially cardiovascular function.

## Taxonomy and Metabolic Specialization

- Family Oxalobacteraceae, order Burkholderiales, class Betaproteobacteria.
- Two groups: Group I (originally described) and Group II; both colonize the human intestine, primarily the colon.
- Unique metabolic niche: obligate oxalotroph — oxalate is its sole carbon and energy source. This extreme specialization means *O. formigenes* cannot survive without dietary oxalate, and cannot be easily replaced by other bacteria if lost.
- No other common human gut bacterium relies exclusively on oxalate; functional redundancy for this role is minimal, making *O. formigenes* loss ecologically irreplaceable in the short term.

## Oxalate Degradation Enzymes

The oxalate catabolism pathway involves three enzymes, all requiring metal cofactors:

Oxalate-CoA ligase (OxcA / formyl-CoA transferase):
- Activates oxalate to oxalyl-CoA using CoA and ATP; requires magnesium as cofactor for the ATP-dependent activation step.
- The Mg2+ requirement links *O. formigenes* activity to magnesium availability — in magnesium-depleted states (common in dysbiosis), this activation step may be rate-limiting.

Oxalyl-CoA decarboxylase (OXC):
- Converts oxalyl-CoA to formyl-CoA + CO2; requires thiamine pyrophosphate (TPP) as cofactor, and TPP synthesis itself requires magnesium.
- This is the energy-generating step — decarboxylation drives proton motive force through an oxalate/formate antiporter that creates membrane potential.

Formyl-CoA transferase:
- Completes the cycle by regenerating CoA from formate. The net result: oxalate → formate + CO2, with energy captured via the antiporter.

The formate generated is either secreted (contributing to the gut formate pool available to other microbes) or further oxidized to CO2. The overall reaction consumes oxalate while contributing to the gut's volatile fatty acid and one-carbon metabolite landscape.

## Oxalate-Metal Interactions: The Metal Bioavailability Connection

Oxalate is a powerful chelator of divalent metal cations. Its presence in the gut lumen profoundly affects metal bioavailability through insoluble complex formation:

- Calcium: Ca2+-oxalate forms insoluble calcium oxalate crystals (kidney stones at supersaturation; reduced calcium absorption at lower concentrations). *O. formigenes* degrades the oxalate, freeing calcium from this complex and improving calcium bioavailability [[duan-2020-gut-microbiota-heavy-metal-probiotic-strategy]].
- Iron: Fe2+/Fe3+-oxalate complexes are less bioavailable than free iron. *O. formigenes* oxalate degradation thus partially increases iron bioavailability — a consideration in iron deficiency states where dietary oxalate (spinach, legumes) is often simultaneously elevated.
- Zinc: Zn2+-oxalate complexes form readily; zinc deficiency from high-oxalate diets is partially mediated through this chelation mechanism. *O. formigenes* loss would exacerbate zinc depletion from oxalate-rich diets.
- Magnesium: Mg2+-oxalate complexes reduce magnesium absorption. This creates a feedback loop: loss of *O. formigenes* → increased gut oxalate → reduced magnesium absorption → impaired *O. formigenes* enzyme activity (which requires Mg2+).
- Lead and cadmium: Oxalate can also chelate toxic metals. The role of *O. formigenes* in modulating toxic metal bioavailability — whether its oxalate degradation increases or decreases toxic metal absorption — is context-dependent [[chen-2022-living-microorganisms-detoxification-heavy-metals]].

This positions *O. formigenes* at the intersection of dietary mineral absorption, kidney stone prevention, and the broader gut-metal-microbiome axis.

## Kidney Stone Prevention and CKD

- *O. formigenes* is the primary gut defense against dietary oxalate overload. By degrading oxalate in the colon, it reduces the pool available for intestinal absorption and subsequent urinary excretion.
- Hyperoxaluria (elevated urinary oxalate) is the primary risk factor for recurrent calcium oxalate kidney stones — the most common stone type (80% of all nephrolithiasis).
- Absence of *O. formigenes* is associated with 70% higher odds of recurrent kidney stones in clinical studies.
- In [[chronic-kidney-disease]], oxalate nephropathy (crystal deposition in renal tubules) contributes to progressive renal damage; *O. formigenes* depletion accelerates this pathway.
- An *O. formigenes* probiotic (OXPF-001 / OxThera) has been in clinical development for primary hyperoxaluria — a rare but severe inherited form characterized by extreme urinary oxalate levels.

## Antibiotic Vulnerability and Ecological Loss

*O. formigenes* is strikingly sensitive to broad-spectrum antibiotic courses:

- A single course of amoxicillin, tetracycline, or fluoroquinolones can eliminate *O. formigenes* from the colon.
- Recolonization after antibiotic loss is poor: the combination of obligate anaerobic status, narrow metabolic niche (requires oxalate substrate), and absence of spore formation means *O. formigenes* cannot re-establish easily.
- In Western populations with high antibiotic use, carriage rates of *O. formigenes* are significantly lower than in pre-antibiotic-era populations or in communities with low antibiotic exposure.
- Its oxalate-dependent metabolism makes it a poor competitor during post-antibiotic microbiome recovery, when carbohydrate fermenters with broader metabolic repertoires dominate the recolonization wave.

## Cardiovascular Disease Associations

Mendelian randomization studies have identified a causal positive association between *Oxalobacter* abundance and coronary heart disease risk:

- Genetically predicted higher *Oxalobacter* abundance: OR = 1.08 for coronary heart disease [[hu-2024-gut-microbiota-chd-mendelian-randomization]]; independently confirmed in [[zhang-2022-causal-gut-microbiome-cvd-mr]] (OR = 1.06, P = 1.67×10⁻⁴) and [[dai-2024-gut-microbiota-cvd-bidirectional-mr]] (OR = 1.059).
- The blood pressure mediation of this association is particularly notable: the CHD risk appears to operate via blood pressure rather than direct lipid effects, suggesting that oxalate metabolism may influence vascular tone through calcium and magnesium handling — or through formate production affecting methylation and endothelial function.
- Consistency across three independent MR studies increases confidence that this is a genuine causal relationship, not a chance finding.

The apparent paradox — *O. formigenes* protects from kidney stones but is a CHD risk factor — may reflect that oxalate degradation and the metabolic products generated (formate, CO2, altered calcium flux) have beneficial local effects in the colon but subtly adverse systemic effects on vascular biology.

## ADHD: Protective Family Association

The Oxalobacteraceae family (which includes *O. formigenes*) was identified as a protective factor for ADHD in Mendelian randomization analysis [[wang-2023-gut-microbiota-adhd-mendelian-randomization]]. Higher Oxalobacteraceae abundance was associated with reduced ADHD risk (P = 0.048), adding a neurological dimension to this primarily metabolic organism's disease associations.

## Cancer vs. Autoimmune Directionality

In the systematic meta-analysis of opposing microbiome signatures, *Oxalobacter* was among six genera showing true opposite directionality: increased in cancer cohorts but decreased in autoimmune disease studies [[islam-2022-opposing-microbiome-signatures-autoimmune-cancer]].

This pattern may reflect divergent immunological environments:
- In cancer (immunosuppression): oxalate degradation and calcium availability in the tumor microenvironment may support tumor growth pathways; immune suppression permits *O. formigenes* expansion
- In autoimmune disease (immune hyperactivation): the pro-inflammatory environment may deplete *O. formigenes*; alternatively, low oxalate bioavailability from *O. formigenes* activity may alter the calcium-driven T cell activation threshold

## Heavy Metal Detoxification Context

*O. formigenes* oxalate metabolism intersects with gut-based heavy metal detoxification:

- Oxalate can chelate and immobilize cadmium and lead in the gut lumen, potentially reducing toxic metal absorption [[chen-2022-living-microorganisms-detoxification-heavy-metals]].
- When *O. formigenes* degrades oxalate, it may reduce this metal-chelating capacity — a subtle consideration in populations with concurrent antibiotic use and toxic metal exposure.
- Conversely, the formate produced can contribute to the gut reducing environment that supports the activity of metal-detoxifying bacteria.

## Cross-References

- [[chronic-kidney-disease]] — Oxalate degradation prevents calcium oxalate nephropathy and urinary oxalate supersaturation
- [[cardiovascular-disease]] — MR evidence links *Oxalobacter* to CHD risk via blood pressure mediation
- [[iron]] — Oxalate-iron chelation affects dietary iron bioavailability
- [[calcium]] — Primary target of oxalate chelation; kidney stone formation
- [[magnesium]] — Required as cofactor for oxalyl-CoA ligase; depleted by oxalate chelation
- [[dysbiosis]] — Antibiotic-induced loss of *Oxalobacter* has lasting metabolic consequences
- [[heavy-metals]] — Oxalate chelation capacity intersects with cadmium and lead detoxification
- [[probiotics]] — *O. formigenes* supplementation under clinical investigation for hyperoxaluria
- [[short-chain-fatty-acids]] — Formate production from oxalate contributes to gut metabolite pool
