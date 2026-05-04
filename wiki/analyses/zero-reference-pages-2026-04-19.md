---
title: "Zero-Reference Pages Audit — 2026-04-19"
type: analysis
created: 2026-04-19
updated: 2026-04-19
sources: []
tags: [audit, quality-control, citation-deficit, rule-11, section-2f]
platform: cureva
---

## Triggering observation

Karen, 2026-04-19, pointing at https://www.wikibiome.com/article/acidic-microenvironment:

> Why do any files on our website contain zero references? These references should be full and complete for every single claim that's made on any page. This is embarrassing.

This audit answers the scope of that question. The specific page she named is one of 98 publishable pages on WikiBiome that currently have an empty sources array in frontmatter, plus 83 publishable pages with a claim-level citation deficit (Rule 11).

## Headline numbers

| Class | Count | §/Rule |
|---|---:|---|
| Zero-reference publishable pages (sources: []) | 98 | §2f |
| — of which flagged (stub: true) | 62 | — |
| — of which NOT flagged (stub: false — worst) | 36 | §2f, Rule 7 |
| Sub-threshold publishable pages (below §2f minimum) | 69 | §2f |
| Claim-level citation deficit (<1 cite per 3 paragraphs) | 83 | Rule 11 |

## Root cause — why zero-reference pages reach public

The build pipeline does not enforce §2f. Three gaps, stacked:

1. `scripts/build-content.cjs` `isVisibleOnPlatform()` accepts any page with `platform: wikibiome` or `platform: both` regardless of source count. It has no stub check and no threshold check. Pages with empty `sources: []` and `stub: true` currently publish to WikiBiome anyway.
2. `scripts/generate-static.cjs` sitemap generator includes every built page. Stubs appear in `sitemap.xml` and are indexable.
3. `wikibiome-v8.jsx` article renderer does not show a "stub — expansion needed" banner. A zero-reference page is indistinguishable from a fully cited one to the reader.

CLAUDE.md §2f says build-content.cjs MUST refuse to render sub-threshold non-stub pages. That enforcement was never implemented. Rule 7 requires sub-threshold demotion to `stub: true` during lint. 36 of the 98 zero-ref pages are not even stubs — they have `sources: []` and `stub: false`, which is a Rule 7 violation that accumulated silently.

## Breakdown by type

| Type | Zero-ref total | Stub-flagged | UNFLAGGED (worst) |
|---|---:|---:|---:|
| microbe | 46 | 31 | 15 |
| concept | 29 | 17 | 12 |
| disease | 9 | 4 | 5 |
| fungus | 8 | 4 | 4 |
| metal | 6 | 6 | 0 |

## Full list — zero-reference publishable pages

| File | Type | Stub | Paragraphs | Source cites inline |
|---|---|:-:|---:|---:|
| wiki/concepts/cambialistic-enzymes.md | concept | ✗ | 3 | 0 |
| wiki/concepts/edta.md | concept | ✗ | 4 | 0 |
| wiki/concepts/epithelial-mesenchymal-transition.md | concept | ✗ | 3 | 0 |
| wiki/concepts/gut-vagina-axis.md | concept | ✗ | 4 | 0 |
| wiki/concepts/lipopolysaccharide.md | concept | ✗ | 5 | 0 |
| wiki/concepts/metal-speciation.md | concept | ✗ | 3 | 0 |
| wiki/concepts/molecular-mimicry.md | concept | ✗ | 4 | 0 |
| wiki/concepts/n-acetyl-cysteine.md | concept | ✗ | 6 | 0 |
| wiki/concepts/nitric-oxide.md | concept | ✗ | 5 | 0 |
| wiki/concepts/oxygen-state.md | concept | ✗ | 10 | 0 |
| wiki/concepts/pH-sensing.md | concept | ✗ | 3 | 0 |
| wiki/concepts/prenatal-metal-exposure.md | concept | ✗ | 3 | 0 |
| wiki/entities/aeromonas.md | microbe | ✗ | 2 | 0 |
| wiki/entities/anaerotruncus.md | microbe | ✗ | 3 | 0 |
| wiki/entities/atopobium-parvulum.md | microbe | ✗ | 3 | 0 |
| wiki/entities/atopobium-vaginae.md | microbe | ✗ | 3 | 0 |
| wiki/entities/caulobacter.md | microbe | ✗ | 3 | 0 |
| wiki/entities/cholestasis.md | disease | ✗ | 4 | 0 |
| wiki/entities/davidiella.md | fungus | ✗ | 3 | 0 |
| wiki/entities/deinococcus.md | microbe | ✗ | 3 | 0 |
| wiki/entities/dermatitis-herpetiformis.md | disease | ✗ | 3 | 0 |
| wiki/entities/enterobacter-cloacae.md | microbe | ✗ | 3 | 0 |
| wiki/entities/fusicatenibacter.md | microbe | ✗ | 3 | 0 |
| wiki/entities/lactobacillus-rhamnosus.md | microbe | ✗ | 3 | 0 |
| wiki/entities/lodderomyces-elongisporus.md | fungus | ✗ | 3 | 0 |
| wiki/entities/migraine.md | disease | ✗ | 3 | 0 |
| wiki/entities/morganella-morganii.md | microbe | ✗ | 3 | 0 |
| wiki/entities/non-alcoholic-fatty-liver-disease.md | disease | ✗ | 3 | 0 |
| wiki/entities/olsenella.md | microbe | ✗ | 3 | 0 |
| wiki/entities/parabacteroides-distasonis.md | microbe | ✗ | 3 | 0 |
| wiki/entities/pelvic-inflammatory-disease.md | disease | ✗ | 4 | 0 |
| wiki/entities/roseburia-intestinalis.md | microbe | ✗ | 3 | 0 |
| wiki/entities/ruminococcus-bromii.md | microbe | ✗ | 4 | 0 |
| wiki/entities/serratia-marcescens.md | microbe | ✗ | 2 | 0 |
| wiki/entities/trichoderma.md | fungus | ✗ | 3 | 0 |
| wiki/entities/trichosporon-asahii.md | fungus | ✗ | 3 | 0 |
| wiki/concepts/acidic-microenvironment.md | concept | ✓ | 11 | 0 |
| wiki/concepts/ahr.md | concept | ✓ | 5 | 0 |
| wiki/concepts/beta-glucuronidase.md | concept | ✓ | 3 | 0 |
| wiki/concepts/chitotriosidase.md | concept | ✓ | 2 | 0 |
| wiki/concepts/cuproptosis.md | concept | ✓ | 3 | 0 |
| wiki/concepts/enterohepatic-circulation.md | concept | ✓ | 9 | 0 |
| wiki/concepts/fermentative-metabolism.md | concept | ✓ | 5 | 0 |
| wiki/concepts/functional-shielding.md | concept | ✓ | 5 | 0 |
| wiki/concepts/hypoxia.md | concept | ✓ | 1 | 0 |
| wiki/concepts/irving-williams-series.md | concept | ✓ | 7 | 0 |
| wiki/concepts/lipocalin-2.md | concept | ✓ | 3 | 0 |
| wiki/concepts/nickel-glyoxalase.md | concept | ✓ | 6 | 0 |
| wiki/concepts/nickel-urease.md | concept | ✓ | 6 | 0 |
| wiki/concepts/nife-hydrogenase.md | concept | ✓ | 10 | 0 |
| wiki/concepts/transferrin.md | concept | ✓ | 5 | 0 |
| wiki/concepts/zinc-metalloprotease.md | concept | ✓ | 4 | 0 |
| wiki/concepts/zonulin.md | concept | ✓ | 4 | 0 |
| wiki/entities/akkermansia-mucinicola.md | microbe | ✓ | 3 | 0 |
| wiki/entities/bacteroides-vulgatus.md | microbe | ✓ | 2 | 3 |
| wiki/entities/barium.md | metal | ✓ | 1 | 0 |
| wiki/entities/citrobacter.md | microbe | ✓ | 1 | 0 |
| wiki/entities/cladosporium.md | fungus | ✓ | 1 | 0 |
| wiki/entities/clostridium-difficile.md | microbe | ✓ | 1 | 0 |
| wiki/entities/corynebacterium.md | microbe | ✓ | 1 | 0 |
| wiki/entities/dialister.md | microbe | ✓ | 6 | 5 |
| wiki/entities/eggerthella-lenta.md | microbe | ✓ | 2 | 0 |
| wiki/entities/enterobacter.md | microbe | ✓ | 1 | 0 |
| wiki/entities/erectile-dysfunction.md | disease | ✓ | 7 | 2 |
| wiki/entities/faecalibacterium.md | microbe | ✓ | 1 | 0 |
| wiki/entities/fibromyalgia.md | disease | ✓ | 7 | 1 |
| wiki/entities/fusarium.md | fungus | ✓ | 1 | 0 |
| wiki/entities/fusobacterium-nucleatum.md | microbe | ✓ | 1 | 18 |
| wiki/entities/fusobacterium-varium.md | microbe | ✓ | 2 | 0 |
| wiki/entities/gordonibacter-urolithinfaciens.md | microbe | ✓ | 2 | 0 |
| wiki/entities/leptotrichia.md | microbe | ✓ | 2 | 0 |
| wiki/entities/listeria.md | microbe | ✓ | 1 | 0 |
| wiki/entities/megasphaera.md | microbe | ✓ | 1 | 0 |
| wiki/entities/necrotizing-enterocolitis.md | disease | ✓ | 6 | 1 |
| wiki/entities/parvimonas-micra.md | microbe | ✓ | 1 | 0 |
| wiki/entities/peptostreptococcus-stomatis.md | microbe | ✓ | 6 | 0 |
| wiki/entities/platinum.md | metal | ✓ | 3 | 0 |
| wiki/entities/pmdd.md | disease | ✓ | 8 | 0 |
| wiki/entities/porphyromonas-gingivalis.md | microbe | ✓ | 2 | 0 |
| wiki/entities/prevotella-copri.md | microbe | ✓ | 2 | 0 |
| wiki/entities/propionibacterium.md | microbe | ✓ | 1 | 0 |
| wiki/entities/proteus.md | microbe | ✓ | 1 | 0 |
| wiki/entities/pseudomonas.md | microbe | ✓ | 1 | 0 |
| wiki/entities/ruminococcaceae.md | microbe | ✓ | 1 | 0 |
| wiki/entities/ruminococcus-albus.md | microbe | ✓ | 7 | 0 |
| wiki/entities/ruminococcus-gnavus.md | microbe | ✓ | 1 | 0 |
| wiki/entities/saccharomyces-cerevisiae.md | fungus | ✓ | 1 | 3 |
| wiki/entities/salmonella.md | microbe | ✓ | 1 | 0 |
| wiki/entities/shigella.md | microbe | ✓ | 1 | 0 |
| wiki/entities/streptococcus.md | microbe | ✓ | 1 | 11 |
| wiki/entities/strontium.md | metal | ✓ | 1 | 0 |
| wiki/entities/subdoligranulum.md | microbe | ✓ | 1 | 0 |
| wiki/entities/titanium.md | metal | ✓ | 1 | 0 |
| wiki/entities/torulaspora.md | fungus | ✓ | 1 | 0 |
| wiki/entities/treponema.md | microbe | ✓ | 1 | 0 |
| wiki/entities/uranium.md | metal | ✓ | 1 | 0 |
| wiki/entities/vanadium.md | metal | ✓ | 1 | 0 |
| wiki/entities/vibrio.md | microbe | ✓ | 1 | 0 |

## Sub-threshold pages (sources present but below §2f minimum)

| File | Type | Sources | Minimum | Deficit |
|---|---|---:|---:|---:|
| wiki/concepts/alpha-klotho.md | concept | 2 | 3 | 1 |
| wiki/concepts/aryl-hydrocarbon-receptor.md | concept | 2 | 3 | 1 |
| wiki/concepts/DNA-damage.md | concept | 1 | 3 | 2 |
| wiki/concepts/epigenetic-modifications.md | concept | 1 | 3 | 2 |
| wiki/concepts/fxr.md | concept | 1 | 3 | 2 |
| wiki/concepts/glyoxalase.md | concept | 2 | 3 | 1 |
| wiki/concepts/gut-gonadal-axis.md | concept | 1 | 3 | 2 |
| wiki/concepts/gut-kidney-axis.md | concept | 2 | 3 | 1 |
| wiki/concepts/hmos.md | concept | 2 | 3 | 1 |
| wiki/concepts/hyperparathyroidism.md | concept | 2 | 3 | 1 |
| wiki/concepts/hypoxic-signaling.md | concept | 1 | 3 | 2 |
| wiki/concepts/indoxyl-sulfate.md | concept | 2 | 3 | 1 |
| wiki/concepts/metabolic-syndrome.md | concept | 1 | 3 | 2 |
| wiki/concepts/metal-carcinogenesis.md | concept | 2 | 3 | 1 |
| wiki/concepts/metallothionein.md | concept | 2 | 3 | 1 |
| wiki/concepts/nickel-neurotoxicity.md | concept | 2 | 3 | 1 |
| wiki/concepts/nrf2.md | concept | 2 | 3 | 1 |
| wiki/concepts/outer-membrane.md | concept | 2 | 3 | 1 |
| wiki/concepts/oxalates.md | concept | 2 | 3 | 1 |
| wiki/concepts/parenteral-nutrition.md | concept | 2 | 3 | 1 |
| wiki/concepts/phenylalanine.md | concept | 2 | 3 | 1 |
| wiki/concepts/polyamines.md | concept | 2 | 3 | 1 |
| wiki/concepts/premenstrual-syndrome.md | concept | 2 | 3 | 1 |
| wiki/concepts/saccharolytic-fermentation.md | concept | 2 | 3 | 1 |
| wiki/entities/alternaria.md | fungus | 1 | 3 | 2 |
| wiki/entities/arsenic.md | metal | 1 | 5 | 4 |
| wiki/entities/bacteroides-caccae.md | microbe | 2 | 3 | 1 |
| wiki/entities/betaproteobacteria.md | microbe | 2 | 3 | 1 |
| wiki/entities/bifidobacterium-longum.md | microbe | 2 | 3 | 1 |
| wiki/entities/bipolar-disorder.md | disease | 4 | 5 | 1 |
| wiki/entities/bismuth.md | metal | 1 | 5 | 4 |
| wiki/entities/borrelia.md | microbe | 2 | 3 | 1 |
| wiki/entities/brucella.md | microbe | 1 | 3 | 2 |
| wiki/entities/candida-auris.md | fungus | 1 | 3 | 2 |
| wiki/entities/celiac-disease.md | disease | 1 | 5 | 4 |
| wiki/entities/chlamydia-trachomatis.md | microbe | 1 | 3 | 2 |
| wiki/entities/chromium.md | metal | 1 | 5 | 4 |
| wiki/entities/chronic-fatigue-syndrome.md | disease | 3 | 5 | 2 |
| wiki/entities/clostridia.md | microbe | 2 | 3 | 1 |
| wiki/entities/clostridiales.md | microbe | 2 | 3 | 1 |
| wiki/entities/coronary-artery-disease.md | disease | 2 | 5 | 3 |
| wiki/entities/cryptococcus-neoformans.md | microbe | 2 | 3 | 1 |
| wiki/entities/cystic-fibrosis.md | disease | 2 | 5 | 3 |
| wiki/entities/desulfovibrionales.md | microbe | 2 | 3 | 1 |
| wiki/entities/diabetic-kidney-disease.md | disease | 3 | 5 | 2 |
| wiki/entities/enterococcus.md | microbe | 2 | 3 | 1 |
| wiki/entities/escherichia-coli.md | microbe | 1 | 3 | 2 |
| wiki/entities/eubacterium-eligens.md | microbe | 1 | 3 | 2 |
| wiki/entities/fusobacteriales.md | microbe | 2 | 3 | 1 |
| wiki/entities/gastric-ulcer.md | disease | 3 | 5 | 2 |
| wiki/entities/helicobacter-hepaticus.md | microbe | 2 | 3 | 1 |
| wiki/entities/helicobacter-pylori.md | microbe | 1 | 3 | 2 |
| wiki/entities/hidradenitis-suppurativa.md | disease | 2 | 5 | 3 |
| wiki/entities/huntingtons-disease.md | disease | 1 | 5 | 4 |
| wiki/entities/mediterraneibacter.md | microbe | 2 | 3 | 1 |
| wiki/entities/mollicutes.md | microbe | 2 | 3 | 1 |
| wiki/entities/oscillospirales.md | microbe | 2 | 3 | 1 |
| wiki/entities/peptostreptococcus-anaerobius.md | microbe | 2 | 3 | 1 |
| wiki/entities/premature-ovarian-insufficiency.md | disease | 2 | 5 | 3 |
| wiki/entities/proteus-mirabilis.md | microbe | 1 | 3 | 2 |
| wiki/entities/pseudomonas-aeruginosa.md | microbe | 2 | 3 | 1 |
| wiki/entities/psoriasis.md | disease | 2 | 5 | 3 |
| wiki/entities/salmonella-typhimurium.md | microbe | 1 | 3 | 2 |
| wiki/entities/silver.md | metal | 3 | 5 | 2 |
| wiki/entities/staphylococcus-aureus.md | microbe | 2 | 3 | 1 |
| wiki/entities/streptococcus-pneumoniae.md | microbe | 2 | 3 | 1 |
| wiki/entities/streptococcus-salivarius.md | microbe | 2 | 3 | 1 |
| wiki/entities/thallium.md | metal | 2 | 5 | 3 |
| wiki/entities/yersinia-pestis.md | microbe | 2 | 3 | 1 |

## Remediation plan

Immediate (this session):

1. Enforce at build time. Modify `scripts/build-content.cjs` to refuse to publish sub-threshold non-stub pages to WikiBiome. Sub-threshold pages publish only if explicitly marked `stub: true`. Log refusals to `wiki/analyses/build-refusals-YYYY-MM-DD.md`.
2. Auto-demote unflagged zero-ref pages. The 36 unflagged (stub:false) pages listed above get `stub: true` + `stub_reason: "auto-demoted by §2f enforcement, 2026-04-19"` appended to frontmatter. Log to `wiki/analyses/stub-demotions-2026-04-19.md` per §2f enforcement clause.
3. Exclude stubs from sitemap. Modify `scripts/generate-static.cjs` so `stub: true` pages do not appear in `sitemap.xml`. This stops Google from indexing embarrassing thin pages.
4. Render a visible stub banner. Modify `wikibiome-v8.jsx` to show a prominent "This page is a stub — source attribution is incomplete. Expansion is in progress." banner above stub content. Readers who find a stub via direct link see a visible admission instead of a fabricated authoritative-looking page.
5. Fix the exemplar. Attach real vault sources to every material claim on `wiki/concepts/acidic-microenvironment.md`, bringing it across the §2f threshold and demonstrating the standard for remediating the other 97.

Ongoing (next sessions):

- Remediate the remaining 97 zero-ref pages in priority order: disease entities first (9), then concepts (29), then metal entities (6), then microbe/fungus entities (54). The microbe/fungus stubs are the largest category but lowest individual SEO impact.
- Remediate the 69 sub-threshold pages by attaching additional sources from the vault until each meets §2f minimum.
- Remediate the 83 claim-level deficit pages by adding inline `[[source-filename]]` citations to currently unsourced claims (Rule 11).

## Kanso note

This is not a problem that gets solved by adding more scaffolding. The fix is structural: remove anything that cannot stand up to a skeptical read. A stub that admits it is a stub is more beautiful than a page that pretends to be authoritative with an empty References section. 簡素.