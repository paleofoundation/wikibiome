#!/usr/bin/env node
/**
 * WikiBiome Claude builder queue.
 *
 *   node scripts/claude-builder-queue.cjs validate
 *   node scripts/claude-builder-queue.cjs next
 *
 * `next` prints the first pending task that is not already claimed by an
 * open pull request titled "builder: <id>". Set TASK_ID to force one task.
 * When GITHUB_OUTPUT is set, or --github-output is passed, writes has_task,
 * task_id, and page for Actions.
 *
 * Open-PR claims are checked only when GH_TOKEN or GITHUB_TOKEN is set.
 * A failed `gh` call exits non-zero. It does not skip the check silently.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const yaml = require("js-yaml");

const QUEUE_PATH = path.join(__dirname, "..", "ops", "claude-builder-queue.yml");
const STATUSES = new Set(["pending", "done", "blocked"]);
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PAGE_RE = /^wiki\/(?:entities|concepts)\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

function fail(message) {
  console.error(`claude-builder-queue: ${message}`);
  process.exit(1);
}

function loadQueue() {
  if (!fs.existsSync(QUEUE_PATH)) {
    fail(`missing queue file: ${QUEUE_PATH}`);
  }
  let doc;
  try {
    doc = yaml.load(fs.readFileSync(QUEUE_PATH, "utf8"));
  } catch (error) {
    fail(`YAML parse error in ${QUEUE_PATH}: ${error.message}`);
  }
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) {
    fail("queue root must be a mapping");
  }
  if (doc.version !== 1) {
    fail("queue version must be 1");
  }
  if (!Array.isArray(doc.tasks) || doc.tasks.length === 0) {
    fail("queue tasks must be a non-empty list");
  }

  const seen = new Set();
  doc.tasks.forEach((task, index) => {
    const where = `tasks[${index}]`;
    if (!task || typeof task !== "object" || Array.isArray(task)) {
      fail(`${where} must be a mapping`);
    }
    if (typeof task.id !== "string" || !ID_RE.test(task.id)) {
      fail(`${where} id must be kebab-case`);
    }
    if (seen.has(task.id)) {
      fail(`duplicate task id: ${task.id}`);
    }
    seen.add(task.id);
    if (!STATUSES.has(task.status)) {
      fail(`${task.id} status must be pending, done, or blocked`);
    }
    if (typeof task.page !== "string" || !PAGE_RE.test(task.page)) {
      fail(`${task.id} page must be a wiki entity or concept path`);
    }
    if (task.page.includes("..")) {
      fail(`${task.id} page must stay inside wiki/`);
    }
    if (typeof task.gap !== "string" || task.gap.trim().length < 20) {
      fail(`${task.id} gap must explain the vault evidence`);
    }
    if (typeof task.instructions !== "string" || task.instructions.trim().length < 40) {
      fail(`${task.id} instructions are missing`);
    }
    if (task.status === "blocked") {
      if (typeof task.note !== "string" || task.note.trim().length < 10) {
        fail(`${task.id} is blocked and needs a note`);
      }
    }
    if (task.note != null && typeof task.note !== "string") {
      fail(`${task.id} note must be a string`);
    }
  });
  return doc;
}

function writeOutput(pairs) {
  const argv = process.argv.slice(2);
  const flag = argv.indexOf("--github-output");
  const file = flag >= 0 ? argv[flag + 1] : process.env.GITHUB_OUTPUT;
  const lines = Object.entries(pairs).map(([key, value]) => `${key}=${value}`);
  if (file) {
    fs.appendFileSync(file, `${lines.join("\n")}\n`);
  }
  for (const line of lines) {
    console.log(line);
  }
}

function claimedIds() {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("claude-builder-queue: GH_TOKEN unset; not checking open pull requests");
    return new Set();
  }
  const result = spawnSync(
    "gh",
    ["pr", "list", "--state", "open", "--limit", "100", "--json", "title,body"],
    {
      encoding: "utf8",
      env: process.env,
    },
  );
  if (result.error) {
    fail(`could not run gh: ${result.error.message}`);
  }
  if (result.status !== 0) {
    fail(`gh pr list failed: ${(result.stderr || "").trim()}`);
  }
  let pulls;
  try {
    pulls = JSON.parse(result.stdout || "[]");
  } catch (error) {
    fail(`gh pr list returned invalid JSON: ${error.message}`);
  }
  const claimed = new Set();
  const idRe = /builder:\s*([a-z0-9]+(?:-[a-z0-9]+)*)/g;
  for (const pull of pulls) {
    const text = `${pull.title || ""}\n${pull.body || ""}`;
    for (const match of text.matchAll(idRe)) {
      claimed.add(match[1]);
    }
  }
  return claimed;
}

function command() {
  const args = process.argv.slice(2).filter((arg, index, all) => {
    if (arg === "--github-output") return false;
    if (index > 0 && all[index - 1] === "--github-output") return false;
    return true;
  });
  const cmd = args[0];
  if (cmd !== "validate" && cmd !== "next") {
    fail("usage: claude-builder-queue.cjs <validate|next>");
  }
  const doc = loadQueue();
  if (cmd === "validate") {
    const counts = { pending: 0, done: 0, blocked: 0 };
    for (const task of doc.tasks) counts[task.status] += 1;
    console.log(
      `queue ok: ${doc.tasks.length} tasks (${counts.pending} pending, ${counts.done} done, ${counts.blocked} blocked)`,
    );
    return;
  }

  const requested = (process.env.TASK_ID || "").trim();
  if (requested && !ID_RE.test(requested)) {
    fail(`TASK_ID is not a kebab-case id: ${requested}`);
  }
  let task;
  if (requested) {
    task = doc.tasks.find((item) => item.id === requested);
    if (!task) fail(`no task with id ${requested}`);
    if (task.status !== "pending") fail(`${requested} is ${task.status}, not pending`);
  }
  const claimed = claimedIds();
  if (requested) {
    if (claimed.has(task.id)) {
      fail(`${requested} is already claimed by an open pull request titled builder: ${requested}`);
    }
  } else {
    task = doc.tasks.find((item) => item.status === "pending" && !claimed.has(item.id));
  }

  if (!task) {
    writeOutput({ has_task: "false", task_id: "", page: "" });
    console.error("claude-builder-queue: no pending task");
    return;
  }
  writeOutput({ has_task: "true", task_id: task.id, page: task.page });
}

command();
