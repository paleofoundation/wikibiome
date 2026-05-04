---
title: "Batch Preview — Strip bullet-leading bold labels across wiki/"
type: analysis
created: 2026-04-23
updated: 2026-04-23
sources: [local-vault-grep]
tags: [maintenance, readability, wikipedia-parity, kanso]
---

## Why

Karen reported: "Too many bolded texts are causing readability concerns, and it doesn't have that Wikipedia 'feel' for that reason."

Measured scope (grep counts across `wiki/entities/`, `wiki/concepts/`, `wiki/signatures/`, `wiki/interventions/`, `wiki/stops/`, `wiki/analyses/`):

- 13,732 `bold` spans across 732 files
- 6,226 match the bullet-leading-bold pattern: `- Label: body...`
- 4,892 single-word bolds
- 8,840 multi-word bolds

Wikipedia convention: bold is reserved for the subject on first mention. Bullets already provide visual separation, so the bullet-leading bold label is redundant — it reads as marketing copy, not encyclopedic prose. This is the dominant noise source.

## Transform

Regex: `^(\s*[-*]\s+)\*\*([^*\n]+?)\*\*` replaced with `$1$2`

Scope: all `.md` files under `wiki/entities/`, `wiki/concepts/`, `wiki/signatures/`, `wiki/interventions/`, `wiki/stops/`, `wiki/analyses/`. Source pages and the governance tree are explicitly excluded — source summaries may use the bullet-leading bold pattern to structurally delimit key findings, and governance content is out of scope per Rule 9.

## Rule 5 Preview — 3 sample files

Preview diffs were run against 3 files covering three shapes: a metal entity (dense bold), a disease entity (moderate bold), a concept page (heavy bold).

| Sample | Before | After | Bolds removed |
|---|---|---|---|
| `wiki/entities/aluminum.md` | 31 | 12 | −19 |
| `wiki/entities/celiac-disease.md` | 19 | 9 | −10 |
| `wiki/concepts/metallomics.md` | 31 | 4 | −27 |

### Example removals (none of these carry information the bullet doesn't already carry)

```
- Bioaccessibility: Only a fraction of total aluminum ...
→ - Bioaccessibility: Only a fraction of total aluminum ...

- Prescription infant formulas (UK): Aluminum detected ...
→ - Prescription infant formulas (UK): Aluminum detected ...

- ICP-MS/MS (triple quadrupole): current gold standard ...
→ - ICP-MS/MS (triple quadrupole): current gold standard ...
```

### What the transform does NOT touch

- Bolds inside paragraph prose (first-mention emphasis) — preserved.
- Bolds inside stat cells (e.g. table cells, key-claim highlights that are not bullet-led) — preserved.
- Bolds spanning multiple lines or containing nested markdown — preserved (regex is single-line, single-span).
- Source frontmatter and summary files under `wiki/sources/` — excluded from scope.

## Decision

Preview is clean — no collateral damage to prose bolds, no stat-cell damage, no frontmatter impact. Approved for full application across the 732-file scope per Rule 5.

Companion fix in the same session: `scripts/generate-static.cjs` is updated to emit a proper numbered References section and `<sup>[N]</sup>` citation superscripts for the static (pre-hydration / crawler) view. The Wikipedia "feel" Karen asked for depends on both changes landing together.
