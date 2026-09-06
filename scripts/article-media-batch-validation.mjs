import { createHash } from "node:crypto";

export const activeMediaReviewStatuses = new Set(["awaiting-control-review", "approved-awaiting-promotion"]);

const promptMarkerPattern = /<!-- PROMPT ([a-z0-9-]+) START -->\n```text\n([\s\S]*?)\n```\n<!-- PROMPT \1 END -->/g;

export function assertBatchPromptIntegrity(batch, promptRecord, batchName = "media batch") {
  const promptMatches = [...promptRecord.matchAll(promptMarkerPattern)];
  if (promptMatches.length === 0) return { mode: "legacy-unmarked", verified: 0 };

  const manifestRecords = Object.values(batch)
    .filter(Array.isArray)
    .flat()
    .filter((record) => record?.pageId);
  const seen = new Set();
  for (const match of promptMatches) {
    const [, pageId, prompt] = match;
    if (seen.has(pageId)) throw new Error(`${batchName}/${pageId}: immutable prompt appears more than once.`);
    seen.add(pageId);
    const actual = createHash("sha256").update(prompt).digest("hex");
    const records = manifestRecords.filter((record) => record.pageId === pageId);
    if (records.length === 0) throw new Error(`${batchName}/${pageId}: immutable prompt has no matching manifest record.`);
    const frozenHashes = records.map((record) => record.promptSha256).filter(Boolean);
    if (frozenHashes.length > 0 && !frozenHashes.includes(actual)) {
      throw new Error(`${batchName}/${pageId}: immutable prompt SHA-256 differs from every matching manifest record.`);
    }
  }

  for (const asset of batch.assets ?? []) {
    if (seen.has(asset.pageId) && !/^[a-f0-9]{64}$/.test(asset.promptSha256 ?? "")) {
      throw new Error(`${batchName}/${asset.pageId}: immutable prompt SHA-256 is missing or invalid.`);
    }
    if (asset.promptSha256 && !seen.has(asset.pageId)) {
      throw new Error(`${batchName}/${asset.pageId}: hashed asset has no immutable prompt block.`);
    }
  }
  const verified = [...seen].filter((pageId) =>
    manifestRecords.some((record) => record.pageId === pageId && record.promptSha256),
  ).length;
  return { mode: "marker-bound", verified };
}

export function assertMediaOutputAudit(asset, batchName = "media batch") {
  const audit = asset.outputAudit;
  if (!audit?.reviewedBy || !/^\d{4}-\d{2}-\d{2}$/.test(audit.reviewedOn ?? "")) {
    throw new Error(`${batchName}/${asset.pageId}: human output audit identity or date is missing.`);
  }
  if (audit.promptCountTrusted !== false) {
    throw new Error(`${batchName}/${asset.pageId}: a generated prompt cannot serve as count evidence.`);
  }
  if (!audit.observedSubjectDescription || audit.metadataConsistency !== "pass") {
    throw new Error(`${batchName}/${asset.pageId}: visible subject count/grouping does not have a passing metadata reconciliation.`);
  }
}
