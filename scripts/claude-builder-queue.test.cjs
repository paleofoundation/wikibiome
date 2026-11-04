const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const queue = require("./claude-builder-queue.cjs");

const cancer = "wiki/entities/breast-cancer.md";
const barium = "wiki/entities/barium.md";
const tungsten = "wiki/entities/tungsten.md";

function task(id, page, status = "pending") {
  return { id, page, status };
}

function ready(page, extra = {}) {
  return {
    builder: queue.GRAPH_BUILDER,
    page,
    blocked_by: [],
    ...extra,
  };
}

test("prefers the earliest ready graph page over queue order", () => {
  const tasks = [
    task("fix-breast-cancer-source-count", cancer),
    task("expand-barium", barium),
    task("stub-tungsten", tungsten),
  ];
  const graph = [
    { builder: "other-builder", page: cancer, blocked_by: [] },
    ready(barium, { blocked_by: ["other-work"] }),
    ready(`/${tungsten}`),
    ready(barium),
  ];
  const chosen = queue.selectNextTask(tasks, new Set(), graph);
  assert.equal(chosen.source, "graph");
  assert.equal(chosen.task.id, "stub-tungsten");
});

test("skips a done graph page and uses the next ready item", () => {
  const tasks = [
    task("fix-breast-cancer-source-count", cancer),
    task("expand-barium", barium),
    task("stub-tungsten", tungsten, "done"),
  ];
  const chosen = queue.selectNextTask(tasks, [], [
    ready(tungsten),
    { builder: queue.GRAPH_BUILDER, path: barium, blocked_by: null },
  ]);
  assert.equal(chosen.source, "graph");
  assert.equal(chosen.task.id, "expand-barium");
});

test("skips a claimed graph match and keeps looking in graph order", () => {
  const tasks = [
    task("fix-breast-cancer-source-count", cancer),
    task("expand-barium", barium),
    task("stub-tungsten", tungsten),
  ];
  const chosen = queue.selectNextTask(tasks, new Set(["expand-barium"]), [
    ready(barium),
    { builder: queue.GRAPH_BUILDER, page: tungsten, blocked_by: "" },
  ]);
  assert.equal(chosen.source, "graph");
  assert.equal(chosen.task.id, "stub-tungsten");
});

test("falls back to queue order when no graph item is ready", () => {
  const tasks = [
    task("fix-breast-cancer-source-count", cancer),
    task("expand-barium", barium),
  ];
  const chosen = queue.selectNextTask(tasks, new Set(), [
    ready(barium, { blocked_by: ["deposit-1"] }),
    { builder: "other-builder", page: cancer, blocked_by: [] },
  ]);
  assert.equal(chosen.source, "queue");
  assert.equal(chosen.task.id, "fix-breast-cancer-source-count");
});

test("matches a page stored on a nested record", () => {
  const tasks = [task("expand-barium", barium), task("stub-tungsten", tungsten)];
  const chosen = queue.selectNextTask(tasks, new Set(), [
    {
      builder: queue.GRAPH_BUILDER,
      blocked_by: [],
      record: { target: "wiki/entities/tungsten" },
    },
  ]);
  assert.equal(chosen.source, "graph");
  assert.equal(chosen.task.id, "stub-tungsten");
});

test("does not treat an unknown list as the work list", () => {
  assert.throws(
    () =>
      queue.graphItemsFromDocument({
        unrelated: [ready(barium)],
      }),
    /no work list/,
  );
});

test("reads a work list from items or a top-level array", () => {
  const item = ready(barium);
  assert.equal(queue.graphItemsFromDocument([item]).length, 1);
  assert.equal(queue.graphItemsFromDocument({ items: [item] }).length, 1);
  assert.equal(queue.graphItemsFromDocument({ next_work: [item] })[0].page, barium);
});

function writeQueue(file) {
  const gap = "Synthetic queue gap for the selection test only.";
  const instructions = "Synthetic instructions for the selection test. Do not use this page.";
  fs.writeFileSync(
    file,
    [
      "version: 1",
      "tasks:",
      "  - id: fix-breast-cancer-source-count",
      "    status: pending",
      "    page: wiki/entities/breast-cancer.md",
      `    gap: ${gap}`,
      `    instructions: ${instructions}`,
      "  - id: expand-barium",
      "    status: pending",
      "    page: wiki/entities/barium.md",
      `    gap: ${gap}`,
      `    instructions: ${instructions}`,
      "",
    ].join("\n"),
  );
}

function runNext(env) {
  return spawnSync(process.execPath, [path.join(__dirname, "claude-builder-queue.cjs"), "next"], {
    cwd: path.join(__dirname, ".."),
    encoding: "utf8",
    env: {
      PATH: process.env.PATH,
      CLAUDE_BUILDER_QUEUE: env.CLAUDE_BUILDER_QUEUE,
      GRAPH_NEXT_WORK: env.GRAPH_NEXT_WORK,
    },
  });
}

test("next command selects the ready graph page", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wb-queue-"));
  const queueFile = path.join(dir, "queue.yml");
  const graphFile = path.join(dir, "next_work.json");
  writeQueue(queueFile);
  fs.writeFileSync(
    graphFile,
    JSON.stringify({
      items: [ready(barium)],
    }),
  );
  const result = runNext({
    CLAUDE_BUILDER_QUEUE: queueFile,
    GRAPH_NEXT_WORK: graphFile,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /^has_task=true\n/m);
  assert.match(result.stdout, /task_id=expand-barium/);
  assert.match(result.stdout, /page=wiki\/entities\/barium\.md/);
  assert.match(result.stderr, /preferred expand-barium/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("next command falls back when the matching graph item is blocked", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wb-queue-"));
  const queueFile = path.join(dir, "queue.yml");
  const graphFile = path.join(dir, "next_work.json");
  writeQueue(queueFile);
  fs.writeFileSync(
    graphFile,
    JSON.stringify({
      items: [ready(barium, { blocked_by: ["still-open"] })],
    }),
  );
  const result = runNext({
    CLAUDE_BUILDER_QUEUE: queueFile,
    GRAPH_NEXT_WORK: graphFile,
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /task_id=fix-breast-cancer-source-count/);
  assert.match(result.stderr, /using queue order/);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("next command rejects an unreadable work list without echoing it", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wb-queue-"));
  const queueFile = path.join(dir, "queue.yml");
  const graphFile = path.join(dir, "next_work.json");
  const marker = "NOT_A_REAL_RECORD_MARKER";
  writeQueue(queueFile);
  fs.writeFileSync(graphFile, `{${marker}`);
  const result = runNext({
    CLAUDE_BUILDER_QUEUE: queueFile,
    GRAPH_NEXT_WORK: graphFile,
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /JSON parse error/);
  assert.equal(result.stdout.includes(marker), false);
  assert.equal(result.stderr.includes(marker), false);
  fs.rmSync(dir, { recursive: true, force: true });
});
