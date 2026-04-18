---

title: Intestinibacter
type: entity
subtype: microbe
created: 2026-04-10
updated: 2026-04-16
last_substantive_update: 2026-04-16
sources: [dai-2024-gut-microbiota-cvd-bidirectional-mr, xiang-2023-host-gene-microbiome-crc-mr, wu-2017-metformin-gut-microbiome-t2d-nature-medicine, gutmann-2025-functional-microbiome-diet-ms, zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization, bryrup-2019-metformin-gut-microbiota-healthy-young-men, dai-2024-bidirectional-mr-gut-microbiota-cvd]
source_count: 7
metal_dependencies: [iron, cobalt]
key_enzymes: [spore coat proteins, ferredoxin-dependent oxidoreductases, cobalt-dependent methionine synthase]
tags: [pathobiont, spore-forming, context-dependent, CVD-protective, CRC-risk, Graves-disease-risk, metformin-sensitive, understudied]
platform: wikibiome
seo_target: "Intestinibacter bartlettii gut microbiome CVD colorectal cancer"
wikipedia_differentiation: "Contradictory Mendelian randomization data showing CVD-protective but CRC-risk and Graves' disease-risk associations; iron and cobalt dependency; metformin-responsive; spore-forming persistence mechanism; represents the principle that gut bacteria can have tissue-specific opposite effects not captured by simple beneficial/harmful classification"
conditions_enriched_in: [colorectal-cancer, graves-disease]
conditions_depleted_in: [cardiovascular-disease]
pathogenic_potential: commensal-turned-pathogen
gram_stain: "positive"
oxygen_requirement: "obligate anaerobe"---

# Intestinibacter

*Intestinibacter bartlettii* is a Gram-positive, obligate anaerobic, **spore-forming** bacterium within the Firmicutes phylum (Peptostreptococcaceae family). It is a relatively understudied gut commensal that has emerged in Mendelian randomization and metagenomic studies with **contradictory associations across diseases** — protective against [[cardiovascular-disease]] but a causal risk factor for [[colorectal-cancer]] and [[graves-disease]].

## Taxonomy and Classification

- Type species of the genus *Intestinibacter*; reclassified from *Clostridium bartlettii* based on 16S rRNA phylogenetics.
- Family Peptostreptococcaceae, order Clostridiales, class Clostridia.
- The name *Intestinibacter* ("gut bacterium") reflects its primary ecological niche — it is a gut-adapted organism that only occasionally causes opportunistic infections.
- The genus was separated from *Clostridium* to accommodate its distinct phylogenetic position among the diverse Clostridiales lineages now known to be paraphyletic in the original taxonomy.

## Spore-Forming Biology

A defining feature of *I. bartlettii* is its capacity to form **endospores** — heat-resistant, oxygen-tolerant, dehydration-tolerant dormant structures:

- Endospore formation enables survival during aerobic exposure, antibiotic treatment courses, starvation, and transit through the harsh upper GI environment.
- Once established in the colon, spore-formers are difficult to permanently eradicate because spores can persist through antibiotic courses and germinate when conditions improve.
- This persistence mechanism likely explains why *Intestinibacter* can be found in a wide range of disease states despite being a strict anaerobe — its spores may accumulate in dysbiotic environments where other obligate anaerobes are eliminated.
- Spore coat proteins require iron and cobalt cofactors during spore formation; metal availability during sporulation may influence spore dormancy characteristics.

## Metal Dependencies

**Iron**:
- Ferredoxin-dependent oxidoreductases in the central anaerobic metabolism of Clostridiales require iron as an electron carrier. In *I. bartlettii*, these enzymes support fatty acid metabolism and energy generation from complex carbohydrates.
- Iron-dependent sporulation machinery: the sigma factor cascade controlling sporulation in *Clostridium*-related species involves iron-dependent regulatory proteins.

**Cobalt**:
- Cobalt-containing corrinoid (cobalamin/B12-like) enzymes participate in one-carbon metabolism and methionine biosynthesis via cobalt-dependent methionine synthase.
- Corrinoid-dependent metabolism is characteristic of many Clostridiales; it enables *I. bartlettii* to generate methyl donors for DNA methylation and SAM-dependent reactions, potentially influencing host epigenetic responses to microbial metabolites.

## Cardiovascular Disease: Protective Role

Bidirectional Mendelian randomization provides causal evidence for a **protective effect** of *Intestinibacter* against multiple CVD outcomes [[dai-2024-gut-microbiota-cvd-bidirectional-mr]]:

- **Atrial fibrillation**: Genetically predicted higher *Intestinibacter* abundance is protective (OR = 0.908, 95% CI calculated from GWAS summary statistics).
- **Coronary artery disease**: Protective effect independently supported (OR = 0.919).
- *Intestinibacter* is grouped with other **butyrate-producing taxa** (*Coprococcus*, *Ruminiclostridium*) as metal-sensitive protective organisms — taxa that are among those most vulnerable to depletion by heavy metal exposure.
- The proposed mechanism for CVD protection involves short-chain fatty acid (particularly butyrate) production, which reduces systemic inflammation and may directly protect vascular endothelium from oxidative damage.

These protective taxa being metal-sensitive means that metal-induced dysbiosis could selectively remove cardiovascular protection — a pattern consistent with the epidemiological association between heavy metal exposure and cardiovascular disease risk.

## Colorectal Cancer: Causal Risk Factor

In contrast to its CVD-protective role, MR evidence identifies *Intestinibacter* as a **causal risk factor** for CRC with the strongest individual effect size among tested genera [[xiang-2023-host-gene-microbiome-crc-mr]]:

- **OR = 1.31** (P = 0.0038) — the largest causal risk effect identified in this genome-microbiome-CRC analysis.
- Replicated in an independent **FinnGen validation cohort**, supporting robustness beyond the discovery dataset.
- Meta-analysis combining Australian Gut Wide Association Study (AGWAS) and FinnGen results confirmed the causal association after multiple testing correction.

The paradox — protective in CVD but harmful in CRC — may reflect:
1. **Tissue-specific metabolic effects**: Butyrate is anti-inflammatory in the vascular endothelium but has complex dose-dependent effects on colonocyte proliferation — extremely high local butyrate production near the colonic epithelium could theoretically promote proliferation.
2. **Spore-mediated immune modulation**: Spore surface components may interact with colonic innate immune receptors differently from vegetative cell wall components, potentially suppressing anti-tumor surveillance.
3. **Metabolic byproduct toxicity**: Clostridiales-class fermentation can generate reactive metabolites (e.g., secondary bile acid deoxycholate precursors) that are directly genotoxic to colonocytes at high concentrations.

## Graves' Disease: Risk Factor

A Mendelian randomization study of the gut-thyroid axis identified *Intestinibacter* as a **causal risk factor for Graves' disease** (OR = 1.777, P < 0.001 — the strongest individual risk effect in this study) [[zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization]]:

- The association is highly specific: *Intestinibacter* is a Graves' disease risk factor but the evidence for Hashimoto's thyroiditis uses different risk taxa (*Intestinimonas*, a related but distinct genus).
- Reverse MR showed no evidence of Graves' disease causally altering gut microbiota composition — directionality is microbiome → thyroid autoimmunity.
- The mechanism linking *Intestinibacter* to autoimmune thyroid disease may involve molecular mimicry (Clostridiales antigens cross-reacting with thyroid antigens), immune dysregulation via metabolite production, or spore-component stimulation of autoreactive T cell populations.

## Metabolic and Dietary Associations

- **Metformin sensitivity**: Decreased by metformin treatment in type 2 diabetes patients [[wu-2017-metformin-gut-microbiome-t2d-nature-medicine]], and in healthy young Danish men receiving metformin [[bryrup-2019-metformin-gut-microbiota-healthy-young-men]] — a finding that is reversible upon treatment cessation, confirming the metabolic rather than permanent nature of the effect.
- **Dietary fiber metabolism**: Linked to starch degradation pathways in the context of functional diet studies of [[multiple-sclerosis]], where *I. bartlettii* was associated with dietary fiber metabolism [[gutmann-2025-functional-microbiome-diet-ms]].
- The metformin sensitivity may explain part of the drug's reported cancer-preventive effect: reducing *Intestinibacter* as a CRC-risk taxon could be one mechanism among several.

## The Context-Dependence Principle

The opposing CVD, CRC, and autoimmune thyroid associations of *Intestinibacter* exemplify a broader principle increasingly documented in microbiome research: **single gut taxa can have tissue- and disease-specific effects that defy simple beneficial/harmful classification**. Whether a taxon is "good" or "bad" depends on:

- Which disease endpoint is being assessed
- Local metabolite concentrations (butyrate is protective at physiological levels, potentially problematic at extremes)
- Systemic immune context (CVD involves low-grade systemic inflammation; CRC involves local immunosuppression; Graves' disease involves autoimmunity)
- The ecological community context in which *Intestinibacter* exists

This context-dependence is not a flaw in the data — it reflects the real biology of microbial community membership and the impossibility of characterizing any single taxon as universally beneficial or harmful.

## Cross-References

- [[cardiovascular-disease]] — MR-identified protective factor against atrial fibrillation and coronary artery disease
- [[colorectal-cancer]] — MR-identified causal risk factor with the strongest effect size (OR=1.31)
- [[graves-disease]] — MR-identified causal risk factor (OR=1.777); distinct from Hashimoto's thyroiditis risk taxa
- [[short-chain-fatty-acids]] — Butyrate production is the proposed CVD-protective mechanism
- [[heavy-metals]] — Classified among metal-sensitive butyrate producers vulnerable to dysbiosis-inducing metal exposure
- [[multiple-sclerosis]] — Linked to starch degradation pathways in dietary MS studies
- [[iron]] — Required for ferredoxin-dependent oxidoreductases in central metabolism
- [[cobalt]] — Corrinoid enzyme cofactor in one-carbon metabolism
- [[dysbiosis]] — Metformin decreases *Intestinibacter*; dietary fiber modulates it
- [[nutritional-immunity]] — Metal availability shapes expansion of this spore-forming taxon
