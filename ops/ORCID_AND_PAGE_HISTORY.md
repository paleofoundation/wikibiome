# ORCID logo links and specific page history

Sites source: `6cf4291509dcf7fc35625714634c5790523ce1e4`.
Base: `0cd4e85a350e4068dc6600ff8d2c1255c99df1a6` (live version 85).
Patch: `ops/patches/orcid-and-specific-history-sites.patch`.
Patch SHA-256: `0b1cd84a922924712922f6436afacf8df30dca81a2db372290fc89ee2c59d81c`.

ORCID identity displays use the ORCID-created SVG linked to the author's registry record, with author-name accessibility labels and no visible identifier strings. This covers profiles, directory cards, source claims, discussions, activity, accepted proposals, organizations, dashboards, account identity, private message headers and administrator shortlists. Names that formerly fell back to an identifier now fall back to Researcher. Identifier values remain in route targets, structured data, authentication and input payloads.

All 2,046 material history entries now describe actual section additions/removals, changed wording, citations, public metadata and reference corrections. The generator uses before/after snapshots, preserves uncertainty in excerpts, and the build audit rejects generic titles. One previously unavailable diff remains omitted; article content and source snapshot are unchanged.

Validation: 30 tests, typecheck and production build passed; corpus, editorial and scientific-media audits passed. Binary patch reverse-apply check passed. This is one combined release PR and one Sites publish, preserving audience and hosting. The legacy Vite app is not deployed.

ORCID asset provenance: https://commons.wikimedia.org/wiki/File:ORCID_iD.svg (created by ORCID, CC0; ORCID trademarks apply). Display guidance: https://info.orcid.org/documentation/integration-guide/orcid-id-display-guidelines/.
