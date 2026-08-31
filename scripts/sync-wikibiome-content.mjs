#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const valueAfter = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const auditOnly = has("--audit-only");
const skipBuild = has("--skip-build");
const sourceRoot = resolve(projectRoot, valueAfter("--source", "work/reference-wikibiome"));
const targetPath = resolve(projectRoot, valueAfter("--content", "data/content.generated.json"));
const manifestPath = resolve(projectRoot, valueAfter("--manifest", "data/content-manifest.generated.json"));
const upstreamContentPath = resolve(sourceRoot, "src/content.generated.json");

if (!auditOnly) {
  assertExists(sourceRoot, `Upstream clone not found: ${sourceRoot}`);
  if (!skipBuild) rebuildUpstream(sourceRoot);
  assertExists(upstreamContentPath, `Upstream generated content not found: ${upstreamContentPath}`);
}

const inputPath = auditOnly ? targetPath : upstreamContentPath;
assertExists(inputPath, `Content file not found: ${inputPath}`);
const raw = readFileSync(inputPath, "utf8");
const content = JSON.parse(raw);
const audit = auditContent(content);
const sha256 = createHash("sha256").update(raw).digest("hex");

if (auditOnly) {
  verifyManifest(manifestPath, sha256);
  printSummary(audit, content, "audited");
  process.exit(0);
}

const commit = gitCommit(sourceRoot);
const normalizedRaw = `${JSON.stringify(content, null, 2)}\n`;
const normalizedSha256 = createHash("sha256").update(normalizedRaw).digest("hex");
const manifest = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  source: {
    repository: "https://github.com/paleofoundation/wikibiome.git",
    branch: "main",
    commit,
    contentGeneratedAt: content._generated ?? null,
    platform: content._platform ?? null,
  },
  content: {
    path: "data/content.generated.json",
    sha256: normalizedSha256,
    pages: content.pages.length,
    sources: Object.keys(content.sourceLookup).length,
  },
  audit,
};

writeFileSync(targetPath, normalizedRaw);
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
printSummary(audit, content, "synchronized");
console.log(`Source commit: ${commit ?? "unavailable"}`);
console.log(`Manifest: ${manifestPath}`);

function rebuildUpstream(root) {
  const script = resolve(root, "scripts/build-content.cjs");
  assertExists(script, `Upstream build script not found: ${script}`);
  const result = spawnSync(process.execPath, [script, "--platform", "all"], {
    cwd: root,
    env: {
      ...process.env,
      NODE_PATH: [resolve(projectRoot, "node_modules"), process.env.NODE_PATH].filter(Boolean).join(":"),
    },
    encoding: "utf8",
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) {
    throw new Error("The upstream Markdown-to-JSON generator failed. Run npm install, then retry content:sync.");
  }
}

function auditContent(content) {
  if (!content || !Array.isArray(content.pages) || !content.sourceLookup || typeof content.sourceLookup !== "object") {
    throw new Error("Invalid WikiBiome content: pages and sourceLookup are required.");
  }
  const pageIds = new Set();
  const duplicatePageIds = new Set();
  for (const page of content.pages) {
    if (!page.id) throw new Error("Invalid WikiBiome content: a page is missing its id.");
    if (pageIds.has(page.id)) duplicatePageIds.add(page.id);
    pageIds.add(page.id);
  }

  const sourceLookup = content.sourceLookup;
  const missingMetadata = new Set();
  const malformedDois = [];
  let pagesWithReferences = 0;
  let generatedReferences = 0;
  let pagesWithSourceDrift = 0;
  let recoveredInlineReferences = 0;
  let declaredOnlyReferences = 0;
  let belowThresholdPages = 0;

  for (const page of content.pages) {
    const inline = extractInlineSources(page, pageIds, sourceLookup);
    const declared = unique([
      ...(Array.isArray(page.sources) ? page.sources : []),
      ...(Array.isArray(page.frontmatter?.sources) ? page.frontmatter.sources : []),
    ].map(normalizeId).filter(Boolean));
    const references = unique([...inline, ...declared]);
    const declaredSet = new Set(declared);
    const inlineSet = new Set(inline);
    const recovered = inline.filter((id) => !declaredSet.has(id));
    const declaredOnly = declared.filter((id) => !inlineSet.has(id));

    if (references.length) pagesWithReferences += 1;
    generatedReferences += references.length;
    if (recovered.length || declaredOnly.length) pagesWithSourceDrift += 1;
    recoveredInlineReferences += recovered.length;
    declaredOnlyReferences += declaredOnly.length;
    if (page.belowThreshold && !page.isStub) belowThresholdPages += 1;
    for (const id of references) if (!sourceLookup[id]) missingMetadata.add(id);
  }

  for (const [id, source] of Object.entries(sourceLookup)) {
    const doi = normalizeDoi(source.doi);
    if (doi.status === "malformed") malformedDois.push({ id, value: source.doi });
  }

  return {
    duplicatePageIds: [...duplicatePageIds].sort(),
    pagesWithReferences,
    generatedReferences,
    pagesWithSourceDrift,
    recoveredInlineReferences,
    declaredOnlyReferences,
    missingSourceMetadataIds: [...missingMetadata].sort(),
    malformedDois,
    belowThresholdPages,
  };
}

function extractInlineSources(page, pageIds, sourceLookup) {
  const text = [page.overview ?? "", ...(page.sections ?? []).map((section) => section.body ?? "")].join("\n");
  const regex = /\[?\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]\]?/g;
  const ids = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    const id = normalizeId(match[1]);
    const looksLikeSource = id in sourceLookup || /^[a-z]+-(?:[a-z]+-)*\d{4}-/.test(id);
    if (id && !pageIds.has(id) && looksLikeSource && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

function normalizeId(value) {
  return String(value)
    .replace(/\.md$/i, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function normalizeDoi(value) {
  const raw = String(value ?? "").trim();
  if (!raw || /^not yet verified$/i.test(raw)) return { status: "unverified" };
  const bare = raw
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "")
    .replace(/[.,;:\s]+$/g, "")
    .trim();
  return { status: /^10\.\d{4,9}\/[-._;()\/:A-Za-z0-9<>+]+$/.test(bare) ? "valid" : "malformed" };
}

function verifyManifest(path, sha256) {
  assertExists(path, `Content manifest not found: ${path}. Run npm run content:sync.`);
  const manifest = JSON.parse(readFileSync(path, "utf8"));
  if (manifest.content?.sha256 !== sha256) {
    throw new Error("Generated content no longer matches its source manifest. Run npm run content:sync.");
  }
}

function gitCommit(root) {
  const result = spawnSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" });
  return result.status === 0 ? result.stdout.trim() : null;
}

function printSummary(audit, content, verb) {
  console.log(`WikiBiome content ${verb}: ${content.pages.length} pages, ${Object.keys(content.sourceLookup).length} source records.`);
  console.log(`${audit.generatedReferences} article references generated; ${audit.recoveredInlineReferences} recovered from inline citations.`);
  console.log(`${audit.missingSourceMetadataIds.length} referenced source IDs lack registry metadata; ${audit.malformedDois.length} DOI values are flagged.`);
  if (audit.duplicatePageIds.length) {
    const sample = audit.duplicatePageIds.slice(0, 8).join(", ");
    console.log(`${audit.duplicatePageIds.length} duplicate page IDs flagged (${sample}${audit.duplicatePageIds.length > 8 ? ", …" : ""}). The first upstream record remains canonical.`);
  }
}

function assertExists(path, message) {
  if (!existsSync(path)) throw new Error(message);
}

function unique(items) {
  return [...new Set(items)];
}
