#!/usr/bin/env node
/**
 * WikiBiome Claude builder queue.
 *
 *   node scripts/claude-builder-queue.cjs validate
 *   node scripts/claude-builder-queue.cjs next
 *
 * `next` prints the first pending task that is not already claimed by an
 * open pull request titled "builder: <id>". Set TASK_ID to force one task.
 * With no TASK_ID, a page listed in graph/next_work.json for builder
 * "wikibiome-claude-builder" with an empty blocked_by is preferred, in file
 * order. Any other case keeps the current queue order.
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

const QUEUE_PATH = process.env.CLAUDE_BUILDER_QUEUE
  ? path.resolve(process.env.CLAUDE_BUILDER_QUEUE)
  : path.join(__dirname, "..", "ops", "claude-builder-queue.yml");
const STATUSES = new Set(["pending", "done", "blocked"]);
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PAGE_RE = /^wiki\/(?:entities|concepts)\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
const GRAPH_BUILDER = "wikibiome-claude-builder";
const GRAPH_LIST_KEYS = ["items", "work", "next_work", "next", "tasks", "nodes"];
const GRAPH_PAGE_KEYS = ["page", "path", "wiki_page", "target"];

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

function blockedByIsEmpty(value) {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

function normalizePage(value) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\\/g, "/").replace(/^\.\//, "").replace(/^\/+/, "");
}

function pageIdentity(value) {
  return normalizePage(value).replace(/\.md$/, "");
}

function pagesMatch(taskPage, graphPage) {
  const task = pageIdentity(taskPage);
  const graph = pageIdentity(graphPage);
  if (!task || !graph) return false;
  if (task === graph) return true;
  if (!graph.includes("/")) {
    const taskStem = task.split("/").pop();
    return taskStem === graph;
  }
  return false;
}

function pageCandidates(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return [];
  const found = [];
  const visit = (record) => {
    if (!record || typeof record !== "object" || Array.isArray(record)) return;
    for (const key of GRAPH_PAGE_KEYS) {
      const page = normalizePage(record[key]);
      if (page) found.push(page);
    }
  };
  visit(item);
  visit(item.node);
  visit(item.record);
  return found;
}

function graphItemsFromDocument(doc) {
  if (Array.isArray(doc)) return doc;
  if (!doc || typeof doc !== "object") {
    throw new Error("graph/next_work.json must be a list or an object that contains one");
  }
  for (const key of GRAPH_LIST_KEYS) {
    if (Array.isArray(doc[key])) return doc[key];
  }
  throw new Error("graph/next_work.json has no work list");
}

function loadGraphItems(file) {
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch (error) {
    throw new Error(`could not read graph work list ${file}: ${error.message}`);
  }
  let doc;
  try {
    doc = JSON.parse(text.replace(/^\uFEFF/, ""));
  } catch {
    throw new Error(`JSON parse error in ${file}`);
  }
  return graphItemsFromDocument(doc);
}

function resolveGraphPath() {
  const fromEnv = (process.env.GRAPH_NEXT_WORK || "").trim();
  if (fromEnv) {
    const file = path.resolve(fromEnv);
    if (!fs.existsSync(file)) {
      throw new Error(`missing graph work list: ${file}`);
    }
    return file;
  }
  const candidates = [
    path.join(process.cwd(), "hmi-evidence-deposits", "graph", "next_work.json"),
    path.join(__dirname, "..", "hmi-evidence-deposits", "graph", "next_work.json"),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file)) return file;
  }
  return null;
}

function selectNextTask(tasks, claimed, graphItems) {
  const claimedSet = claimed instanceof Set ? claimed : new Set(claimed || []);
  const pending = (Array.isArray(tasks) ? tasks : []).filter(
    (item) => item && item.status === "pending" && !claimedSet.has(item.id),
  );
  const items = Array.isArray(graphItems) ? graphItems : [];
  for (const item of items) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    if (item.builder !== GRAPH_BUILDER) continue;
    if (!blockedByIsEmpty(item.blocked_by)) continue;
    for (const page of pageCandidates(item)) {
      const match = pending.find((task) => pagesMatch(task.page, page));
      if (match) return { task: match, source: "graph" };
    }
  }
  const fallback = pending[0] || null;
  return { task: fallback, source: fallback ? "queue" : "none" };
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
    let graphFile = null;
    let graphItems = [];
    try {
      graphFile = resolveGraphPath();
      if (graphFile) graphItems = loadGraphItems(graphFile);
    } catch (error) {
      fail(error.message);
    }
    if (!graphFile) {
      console.error("claude-builder-queue: graph/next_work.json not present; using queue order");
    }
    const chosen = selectNextTask(doc.tasks, claimed, graphItems);
    task = chosen.task;
    if (task && chosen.source === "graph") {
      console.error(
        `claude-builder-queue: preferred ${task.id} because its page is ready in graph/next_work.json`,
      );
    } else if (task && graphFile) {
      console.error(
        "claude-builder-queue: no ready graph item for wikibiome-claude-builder; using queue order",
      );
    }
  }

  if (!task) {
    writeOutput({ has_task: "false", task_id: "", page: "" });
    console.error("claude-builder-queue: no pending task");
    return;
  }
  writeOutput({ has_task: "true", task_id: task.id, page: task.page });
}

if (require.main === module) {
  command();
}

module.exports = {
  GRAPH_BUILDER,
  blockedByIsEmpty,
  graphItemsFromDocument,
  loadGraphItems,
  pagesMatch,
  selectNextTask,
};
