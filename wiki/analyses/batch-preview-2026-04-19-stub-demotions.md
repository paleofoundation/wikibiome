---
title: "Batch Preview — Stub Demotions 2026-04-19"
type: analysis
platform: cureva
created: 2026-04-19
---

# Batch Preview — Stub Demotions (Rule 5)

Previewing frontmatter changes for §2f source density demotion. 68 publishable pages are below threshold and need `stub: true` + `stub_reason`.

## Sample 1: Microbe entity (betaproteobacteria.md)

Before:
```yaml
source_count: 2
platform: wikibiome
```

After:
```yaml
source_count: 2
platform: wikibiome
stub: true
stub_reason: "below §2f source density threshold — 2 sources, minimum 3 required"
```

## Sample 2: Disease entity (celiac-disease.md)

Before:
```yaml
source_count: 1
platform: wikibiome
```

After:
```yaml
source_count: 1
platform: wikibiome
stub: true
stub_reason: "below §2f source density threshold — 1 sources, minimum 5 required"
```

## Sample 3: Metal entity (bismuth.md)

Before:
```yaml
source_count: 1
platform: wikibiome
```

After:
```yaml
source_count: 1
platform: wikibiome
stub: true
stub_reason: "below §2f source density threshold — 1 sources, minimum 5 required"
```

## Assessment

Pattern is consistent across all 3 subtypes. The transform adds two YAML lines after `platform:`. No existing content is modified. Proceeding to full batch.
