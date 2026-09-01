#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import content from "../data/content.generated.json" with { type: "json" };
import manifest from "../data/content-manifest.generated.json" with { type: "json" };
import identityRegistry from "../data/article-id-aliases.json" with { type: "json" };

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = resolve(projectRoot, "work/reference-wikibiome");
const targetPath = resolve(projectRoot, "data/revisions.generated.json");
const auditOnly = process.argv.includes("--audit-only");

if (auditOnly) {
  if (!existsSync(targetPath)) throw new Error("Revision history is missing. Run npm run revisions:sync.");
  const current = JSON.parse(readFileSync(targetPath, "utf8"));
  if (current.sourceCommit !== manifest.source.commit) throw new Error("Revision history does not match the synchronized WikiBiome source commit.");
  if (current.records !== content.pages.length) throw new Error("Revision history does not account for the complete content inventory.");
  console.log(`WikiBiome revision history audited: ${current.records} records, ${current.revisions} revision entries.`);
  process.exit(0);
}

if (!existsSync(resolve(sourceRoot, ".git"))) throw new Error(`Official WikiBiome clone not found at ${sourceRoot}.`);
const sourceCommit = manifest.source.commit;
git(["cat-file", "-e", `${sourceCommit}^{commit}`]);

const trackedFiles = git(["ls-tree", "-r", "--name-only", sourceCommit]).split("\n").filter((path) => path.endsWith(".md"));
const pathsByBase = new Map();
for (const path of trackedFiles) {
  const base = path.split("/").at(-1);
  pathsByBase.set(base, [...(pathsByBase.get(base) ?? []), path]);
}

const uniqueIds = [...new Set(content.pages.map((page) => page.id))];
const histories = {};
let revisionCount = 0;
for (const id of uniqueIds) {
  const declaredRevisionPaths = identityRegistry.canonicalTaxa?.[id]?.revisionPaths ?? [];
  const paths = [...new Set([...(pathsByBase.get(`${id}.md`) ?? []), ...declaredRevisionPaths])];
  const revisions = paths.flatMap((path) => historyForPath(path));
  const uniqueRevisions = [...new Map(revisions.map((revision) => [`${revision.hash}:${revision.path}`, revision])).values()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 16);
  revisionCount += uniqueRevisions.length;
  histories[id] = { paths, revisions: uniqueRevisions };
}

const output = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  repository: "https://github.com/paleofoundation/wikibiome",
  sourceCommit,
  records: content.pages.length,
  canonicalIds: uniqueIds.length,
  revisions: revisionCount,
  histories,
};
writeFileSync(targetPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`WikiBiome revision history generated: ${output.records} records, ${output.revisions} revision entries.`);

function historyForPath(path) {
  const raw = git(["log", "--follow", "--numstat", "--format=@@%H%x09%aI%x09%an%x09%s", "-16", sourceCommit, "--", path]);
  const revisions = [];
  let current;
  for (const line of raw.split("\n")) {
    if (line.startsWith("@@")) {
      const [hash, date, author, ...subject] = line.slice(2).split("\t");
      current = { hash, date, author, subject: subject.join(" "), path, additions: 0, deletions: 0 };
      revisions.push(current);
      continue;
    }
    if (!current) continue;
    const match = line.match(/^(\d+|-)\t(\d+|-)\t/);
    if (!match) continue;
    current.additions += match[1] === "-" ? 0 : Number(match[1]);
    current.deletions += match[2] === "-" ? 0 : Number(match[2]);
  }
  return revisions;
}

function git(args) {
  const result = spawnSync("git", ["-C", sourceRoot, ...args], { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
  if (result.status !== 0) throw new Error(result.stderr?.trim() || `git ${args[0]} failed`);
  return result.stdout;
}
