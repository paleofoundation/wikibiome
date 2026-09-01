export const activeMediaReviewStatuses = new Set(["awaiting-control-review", "approved-awaiting-promotion"]);

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
