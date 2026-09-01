#!/usr/bin/env node

import content from "../data/content.generated.json" with { type: "json" };
import manifest from "../data/content-manifest.generated.json" with { type: "json" };
import sourceAliasRegistry from "../data/source-id-aliases.json" with { type: "json" };
import { isStructuralParentSection, substantiveMarkdown } from "./public-content-policy.mjs";

const asJson = process.argv.includes("--json");
const strict = process.argv.includes("--strict");

const normalizeId = (value) => String(value ?? "")
  .replace(/\.md$/i, "")
  .toLowerCase()
  .trim()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "");

const sourceAliases = Object.fromEntries(
  Object.entries(sourceAliasRegistry.aliases ?? {}).map(([alias, target]) => [normalizeId(alias), normalizeId(target)]),
);
const sourceIds = new Set(Object.keys(content.sourceLookup).map(normalizeId));
const pageIds = new Set(content.pages.map((page) => normalizeId(page.id)));

function canonicalRouteId(page) {
  const id = normalizeId(page.id);
  return page.category === "signature" ? id.replace(/-signature$/, "") : id;
}

function sourceReferences(page) {
  const references = [];
  const add = (value) => {
    const rawId = normalizeId(value);
    const id = sourceAliases[rawId] ?? rawId;
    if (id && !references.includes(id)) references.push(id);
  };

  const body = [
    page.overview ?? "",
    ...(page.sections ?? []).map((section) => section.body ?? ""),
  ].join("\n");
  for (const match of body.matchAll(/\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g)) {
    const rawId = normalizeId(match[1]);
    const canonicalId = sourceAliases[rawId] ?? rawId;
    const looksLikeSource = sourceIds.has(canonicalId) || /^[a-z]+-(?:[a-z]+-)*\d{4}-/.test(rawId);
    if (rawId && !pageIds.has(rawId) && looksLikeSource) add(rawId);
  }
  for (const value of [
    ...(Array.isArray(page.sources) ? page.sources : []),
    ...(Array.isArray(page.frontmatter?.sources) ? page.frontmatter.sources : []),
  ]) add(value);
  return references;
}

function warningsFor(page) {
  const sections = page.sections ?? [];
  const references = sourceReferences(page);
  const warnings = [];
  const notices = [];
  const emptyLeafSections = sections.filter((section, index) => (
    !String(section.body ?? "").trim() && !isStructuralParentSection(sections, index)
  ));
  const suppressedPlaceholders = sections.filter((section, index) => (
    String(section.body ?? "").trim()
      && !substantiveMarkdown(section.body)
      && !isStructuralParentSection(sections, index)
  ));
  const structuralHeadings = sections.filter((section, index) => isStructuralParentSection(sections, index));
  const missingMetadata = references.filter((id) => !sourceIds.has(id));

  if (!substantiveMarkdown(page.overview)) warnings.push("missing_introduction");
  if (!substantiveMarkdown(page.overview)
      && !sections.some((section) => substantiveMarkdown(section.body))) warnings.push("no_substantive_content");
  if (emptyLeafSections.length) warnings.push("empty_public_sections");
  if (!references.length) warnings.push("no_references");
  if (missingMetadata.length) warnings.push("orphaned_evidence");
  if (page.belowThreshold && !page.isStub) warnings.push("below_evidence_threshold");
  if (structuralHeadings.length) notices.push("structural_parent_headings");
  if (suppressedPlaceholders.length) notices.push("suppressed_source_placeholders");

  return {
    warnings,
    notices,
    references,
    missingMetadata,
    emptyLeafSections: emptyLeafSections.map((section) => section.heading),
    structuralHeadings: structuralHeadings.map((section) => section.heading),
    suppressedPlaceholders: suppressedPlaceholders.map((section) => section.heading),
  };
}

const records = content.pages.map((page, index) => ({
  key: `${normalizeId(page.id)}:${index + 1}`,
  id: normalizeId(page.id),
  routeId: canonicalRouteId(page),
  title: page.title,
  category: page.category,
  ...warningsFor(page),
}));

const warningCodes = [...new Set(records.flatMap((record) => record.warnings))].sort();
const noticeCodes = [...new Set(records.flatMap((record) => record.notices))].sort();
const warningSummary = Object.fromEntries(warningCodes.map((code) => {
  const affected = records.filter((record) => record.warnings.includes(code));
  return [code, {
    records: affected.length,
    routes: new Set(affected.map((record) => record.routeId)).size,
    samples: affected.slice(0, 8).map((record) => record.id),
  }];
}));
const noticeSummary = Object.fromEntries(noticeCodes.map((code) => {
  const affected = records.filter((record) => record.notices.includes(code));
  return [code, {
    records: affected.length,
    routes: new Set(affected.map((record) => record.routeId)).size,
    samples: affected.slice(0, 8).map((record) => record.id),
  }];
}));

const recordsWithWarnings = records.filter((record) => record.warnings.length);
const report = {
  sourceCommit: manifest.source?.commit ?? null,
  generatedAt: manifest.generatedAt,
  records: records.length,
  canonicalRoutes: new Set(records.map((record) => record.routeId)).size,
  warningRecords: recordsWithWarnings.length,
  warningRoutes: new Set(recordsWithWarnings.map((record) => record.routeId)).size,
  blockedRecords: records.filter((record) => record.warnings.includes("orphaned_evidence")).length,
  warnings: warningSummary,
  notices: noticeSummary,
};

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`WikiBiome editorial audit: ${report.records} records, ${report.canonicalRoutes} canonical routes.`);
  console.log(`${report.warningRecords} records across ${report.warningRoutes} routes retain editorial warnings; ${report.blockedRecords} records are blocked.`);
  for (const [code, summary] of Object.entries(report.warnings)) {
    console.log(`- ${code}: ${summary.records} records / ${summary.routes} routes (${summary.samples.join(", ")}${summary.records > summary.samples.length ? ", …" : ""})`);
  }
  for (const [code, summary] of Object.entries(report.notices)) {
    console.log(`- notice ${code}: ${summary.records} records / ${summary.routes} routes`);
  }
}

if (strict && recordsWithWarnings.length) process.exit(1);
