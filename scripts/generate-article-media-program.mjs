#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { articleMediaRegistry } from "../lib/article-media-registry.mjs";
import {
  assertCanonicalMediaCorpus,
  initialMediaBaseline,
  loadCanonicalMediaRoutes,
  mediaCoverageGroups,
} from "./article-media-corpus.mjs";

const projectRoot = process.cwd();
const outputPath = resolve(projectRoot, "data/article-media-coverage.generated.json");
const manifestPath = resolve(projectRoot, "data/content-manifest.generated.json");
const contentPath = resolve(projectRoot, "data/content.generated.json");
const registryPath = resolve(projectRoot, "lib/article-media-registry.mjs");
const reviewLogPath = resolve(projectRoot, "data/article-media-review-log.json");
const shouldWrite = process.argv.includes("--write");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const reviewLog = JSON.parse(readFileSync(reviewLogPath, "utf8"));
const canonicalRoutes = loadCanonicalMediaRoutes(projectRoot);
assertCanonicalMediaCorpus(canonicalRoutes);

const reviewedIds = new Set(Object.keys(articleMediaRegistry));
const queue = canonicalRoutes.map((route) => ({
  ...route,
  status: reviewedIds.has(route.id) ? "reviewed" : "queued",
  ...(reviewedIds.has(route.id)
    ? {
        media: {
          assetType: articleMediaRegistry[route.id].assetType,
          revision: articleMediaRegistry[route.id].revision,
          reviewedOn: articleMediaRegistry[route.id].reviewedOn,
          masterSource: articleMediaRegistry[route.id].masterSource,
          publishedFile: articleMediaRegistry[route.id].publishedFile,
          socialFile: articleMediaRegistry[route.id].socialFile,
        },
      }
    : {}),
}));

const categories = mediaCoverageGroups.map((group) => {
  const records = queue.filter((route) => route.coverageGroup === group.id);
  const completed = records.filter((route) => route.status === "reviewed").length;
  return {
    id: group.id,
    label: group.label,
    total: records.length,
    completed,
    remaining: records.length - completed,
  };
});

const completed = queue.filter((route) => route.status === "reviewed").length;
const firstOpenGroup = categories.find((group) => group.remaining > 0);
const nextBatch = firstOpenGroup
  ? queue
      .filter((route) => route.coverageGroup === firstOpenGroup.id && route.status === "queued")
      .slice(0, reviewLog.reviewableBatchSize)
      .map(({ queuePosition, id, title, route, category, coverageGroup, suggestedAssetType }) => ({
        queuePosition,
        id,
        title,
        route,
        category,
        coverageGroup,
        suggestedAssetType,
      }))
  : [];

const digest = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
const program = {
  schemaVersion: 1,
  generatedOn: reviewLog.updatedOn,
  sourceEvidence: {
    upstreamRepository: manifest.source.repository,
    upstreamCommit: manifest.source.commit,
    contentManifest: "data/content-manifest.generated.json",
    contentFile: "data/content.generated.json",
    contentSha256: digest(contentPath),
    registryFile: "lib/article-media-registry.mjs",
    registrySha256: digest(registryPath),
    reviewLog: "data/article-media-review-log.json",
    reviewLogSha256: digest(reviewLogPath),
  },
  baseline: initialMediaBaseline,
  current: {
    total: queue.length,
    completed,
    remaining: queue.length - completed,
    rejected: reviewLog.rejectedAssets.length,
    revised: reviewLog.revisedAssets.length,
  },
  categories,
  rejectedAssets: reviewLog.rejectedAssets,
  revisedAssets: reviewLog.revisedAssets,
  nextBatch,
  queue,
};

const serialized = `${JSON.stringify(program, null, 2)}\n`;
if (shouldWrite) {
  writeFileSync(outputPath, serialized);
  console.log(`Wrote deterministic ${queue.length}-route media program to ${outputPath}.`);
} else {
  const current = readFileSync(outputPath, "utf8");
  if (current !== serialized) {
    throw new Error("The article media program register is stale. Run npm run media:program:write.");
  }
  console.log(`Article media program register is current: ${completed} completed, ${queue.length - completed} remaining.`);
}
