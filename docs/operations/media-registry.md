# WikiBiome scientific media registry

Every publishable scientific image is declared in `lib/article-media-registry.mjs`. The registry is the only active input to the image processor; files that are not registered cannot appear as reviewed article media.

## Canonical filenames

The generator derives all three filenames from the canonical article slug, an approved asset type, and a positive revision number:

- Published image: `{article-slug}-{asset-type}-v{revision}.webp`
- Social preview: `{article-slug}-{asset-type}-v{revision}-social.webp`
- Lossless master: `{article-slug}-{asset-type}-v{revision}-master.png`

Published files are delivered through `/media/image/{filename}` and social previews through `/media/social/{filename}`. These canonical endpoints preserve the semantic filename while enforcing `image/webp`, `nosniff`, and immutable versioned caching at the application boundary. Binary storage lives separately in `public/media-files`, preventing the host from bypassing the verified delivery layer; prior `/media/{filename}` URLs remain compatible through the same handler.

Approved asset types are `morphology`, `pathology`, `technical-specimen`, and `microbial-community`. The generator rejects invalid slugs, unapproved asset types, non-positive revisions, or filenames that differ from the derived names.

## Required scientific record

Every entry must include subject identity, alt text, caption, description, credit, provenance, creation and review dates, a reusable license, editorial review status, identifier-review status, and the controlled identifiers required for its subject class. Taxa require an NCBI Taxonomy identifier, scientific name, and taxonomic rank; elements require PubChem element and compound identifiers; conditions require a MeSH identifier.

The processor embeds the record in both WebP derivatives as XMP/IPTC metadata. Article pages also publish it visibly and through Schema.org structured data, including page-specific Open Graph and X images.

## Master-file boundary

Only canonical masters remain at the top level of `work/media-masters`. Unpublished experiments and superseded concepts belong in `work/media-masters/legacy`; they must be reviewed, registered, and assigned a canonical revision before reuse.
