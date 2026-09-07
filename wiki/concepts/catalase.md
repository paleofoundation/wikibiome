---
title: Catalase
type: concept
created: 2026-09-07
updated: 2026-09-07
last_substantive_update: 2026-09-07
sources:
  - cassat-2012-metal-acquisition-staphylococcus-aureus
  - chandrangsu-2016-zinc-intoxication-perr-heme-toxicity
  - bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus
  - nong-2026-sod-deficiency-oxidative-stress-ecoli
  - williams-2025-streptococcus-mitis-h2o2-biofilm-inhibition-smutans
  - goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros
source_count: 6
tags: [catalase, hydrogen-peroxide, oxidative-stress, heme, iron, peroxide-defense, microbial-ecology, virulence, metal-homeostasis, mis-metallation]
karen_brain_primitives: [1, 3, 4, 5]
seo_target: "catalase microbiome hydrogen peroxide oxidative stress"
platform: wikibiome
---

# Catalase

Catalase is a heme-iron enzyme that decomposes hydrogen peroxide into water and oxygen. In microbial peroxide defense, it acts downstream of [[superoxide-dismutase]]: superoxide dismutase converts superoxide to hydrogen peroxide, and catalase removes that hydrogen peroxide before it can contribute to further oxidative damage [[cassat-2012-metal-acquisition-staphylococcus-aureus]].

The labels catalase-positive and catalase-negative describe one part of an organism's antioxidant system, not its entire capacity to withstand [[oxidative-stress]]. Catalase-negative organisms may rely on peroxidases and other defenses, while their inability to use catalase can still create an ecological vulnerability when neighboring microbes produce hydrogen peroxide [[williams-2025-streptococcus-mitis-h2o2-biofilm-inhibition-smutans]] [[goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros]].

## The peroxide-defense sequence

In *Staphylococcus aureus*, manganese-dependent SodA and SodM detoxify superoxide generated during the neutrophil oxidative burst. The resulting hydrogen peroxide is then degraded by the heme-iron catalase KatA, connecting [[manganese]] acquisition, [[iron]] availability, and resistance to host killing in one defense sequence [[cassat-2012-metal-acquisition-staphylococcus-aureus]].

This division of labor matters because hydrogen peroxide is less reactive than some oxygen radicals but can participate in iron-dependent [[fenton-chemistry]] and damage metal-containing proteins. Catalase therefore sits at an intersection between peroxide removal and [[metal-homeostasis]], rather than functioning as a generic marker of antioxidant capacity [[cassat-2012-metal-acquisition-staphylococcus-aureus]] [[williams-2025-streptococcus-mitis-h2o2-biofilm-inhibition-smutans]].

## Regulation under peroxide stress

Bacteria do not all control catalase through the same sensor. In *Myxococcus xanthus*, the metal-binding regulator PexR activates the catalase gene *katB* and the peroxiredoxin gene *ahpC* during hydrogen-peroxide stress. PexR binds iron or zinc in a GAF domain, and peroxide-driven metal release relieves autoinhibition, coupling metal state to antioxidant-gene expression [[bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus]].

The same study found that the PexR-controlled catalase and peroxiredoxin systems are complementary: combined disruption produced stronger defects than loss of either arm alone. PexR also operates independently of the better-known OxyR and PerR regulators, illustrating that catalase expression belongs to diverse, organism-specific stress networks [[bastida-martinez-2025-pexr-peroxide-stress-metal-sensing-myxococcus]].

## Compensation is not equivalence

An *Escherichia coli* model lacking both major superoxide dismutases, SodA and SodB, increased expression of catalase KatE and organic peroxidases through its compensatory stress response. Despite that upregulation, the mutant remained more sensitive to hydrogen peroxide, showing that increased catalase expression does not necessarily restore a disrupted antioxidant network [[nong-2026-sod-deficiency-oxidative-stress-ecoli]].

That result is important when interpreting catalase abundance or gene expression: the measurement may indicate an active defense, a compensatory response to upstream damage, or both. It should not be treated alone as proof that a cell or community is protected from oxidative injury [[nong-2026-sod-deficiency-oxidative-stress-ecoli]].

## Catalase-negative microbial ecology

In an oral-biofilm study, hydrogen peroxide produced by *Streptococcus mitis* strongly suppressed the catalase-negative species [[streptococcus-mutans|*Streptococcus mutans*]]. Adding catalase restored *S. mutans* biofilm formation to about half of its monoculture level, while disrupting the peroxide-producing *spxB* pathway produced a larger partial rescue. These interventions identify peroxide exposure as a major component of the competitive interaction [[williams-2025-streptococcus-mitis-h2o2-biofilm-inhibition-smutans]].

Catalase-negative does not mean peroxide-defense-negative. Group B *Streptococcus* lacks catalase but uses manganese-dependent SodA, alkyl hydroperoxide reductase AhpCF, thiol peroxidase, and other systems to withstand reactive species. Its survival still depends on access to the correct metal cofactors, which host proteins can restrict during infection [[goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros]].

## Metal homeostasis can disable catalase defense

In *Bacillus subtilis*, excess zinc can replace the normal iron or manganese cofactor in the peroxide sensor PerR. The resulting [[mis-metallation]] leaves PerR unable to sense peroxide correctly while it continues repressing catalase and other peroxide-defense genes; at the same time, heme biosynthesis is derepressed, creating a pro-oxidant state with weakened peroxide clearance [[chandrangsu-2016-zinc-intoxication-perr-heme-toxicity]].

This mechanism shows why catalase activity cannot be understood from gene presence alone. Metal availability and metal-sensor fidelity determine whether the enzyme is produced, metalated, and deployed at the time peroxide stress occurs [[chandrangsu-2016-zinc-intoxication-perr-heme-toxicity]].

## Related pages

- [[oxidative-stress]]
- [[reactive-oxygen-species]]
- [[superoxide-dismutase]]
- [[fenton-chemistry]]
- [[iron]]
- [[manganese]]
- [[metal-homeostasis]]
- [[mis-metallation]]
- [[metal-dependent-virulence]]
- [[staphylococcus-aureus]]
- [[streptococcus-mutans]]
