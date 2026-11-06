const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");
const { spawnSync } = require("child_process");
const preflight = require("./claude-builder-deposits-preflight.cjs");

const TOKEN = "github_pat_TESTONLY_DO_NOT_PRINT";
const CLASSIC = "ghp_TESTONLY_DO_NOT_PRINT";

function mockFetch(routes) {
  const calls = [];
  async function fetchImpl(url, options) {
    calls.push({ url, options });
    const route = routes.find((item) => item.match(url));
    if (!route) throw new Error(`unexpected URL ${url}`);
    if (route.throwMessage) throw new Error(route.throwMessage);
    const body = route.body === undefined ? {} : route.body;
    return {
      status: route.status,
      headers: {
        get(name) {
          const headers = route.headers || {};
          const value = headers[String(name).toLowerCase()];
          return typeof value === "string" ? value : null;
        },
      },
      async text() {
        return typeof body === "string" ? body : JSON.stringify(body);
      },
    };
  }
  return { fetchImpl, calls };
}

function output(result) {
  return result.lines.join("\n");
}

function assertHidden(result, secret) {
  const text = output(result);
  assert.equal(text.includes(secret), false, text);
  assert.equal(JSON.stringify(result).includes(secret), false);
}

function repoOk(extra = {}) {
  return {
    match: (url) => url.endsWith("/repos/paleofoundation/hmi-evidence-deposits"),
    status: 200,
    body: { private: true, default_branch: "main", ...extra },
  };
}

function fileOk(extra = {}) {
  return {
    match: (url) => url.includes("/contents/graph/next_work.json"),
    status: 200,
    body: {
      type: "file",
      name: "next_work.json",
      path: "graph/next_work.json",
      content: "U0hPVUxEX05PVF9MRUFLX0ZJTEVfQk9EWQ==",
      ...extra,
    },
  };
}

test("empty token names the repository secret and the required scopes", async () => {
  const { fetchImpl, calls } = mockFetch([]);
  const result = await preflight.preflight({ token: "", fetchImpl });
  const text = output(result);
  assert.equal(result.ok, false);
  assert.equal(calls.length, 0);
  assert.match(text, /DEPOSITS_READ_TOKEN is empty/);
  assert.match(text, /Repository secrets/);
  assert.match(text, /Preview or Production/);
  assert.match(text, /organization secret/);
  assert.match(text, /paleofoundation\/hmi-evidence-deposits/);
  assert.match(text, /graph\/next_work\.json/);
  assert.match(text, /Contents: Read/);
  assert.match(text, /repo scope/);
  assert.match(text, /SAML SSO/);
  assert.match(text, /GITHUB_TOKEN/);
  assert.match(text, /::error title=DEPOSITS_READ_TOKEN::/);
});

test("whitespace and refresh tokens fail before any API call", async () => {
  const spaced = mockFetch([]);
  const spacedResult = await preflight.preflight({ token: `${TOKEN}\n`, fetchImpl: spaced.fetchImpl });
  assert.equal(spacedResult.ok, false);
  assert.equal(spaced.calls.length, 0);
  assert.match(output(spacedResult), /whitespace/);
  assertHidden(spacedResult, TOKEN);

  const refresh = mockFetch([]);
  const refreshToken = "ghr_TESTONLY_DO_NOT_PRINT";
  const refreshResult = await preflight.preflight({
    token: refreshToken,
    fetchImpl: refresh.fetchImpl,
  });
  assert.equal(refreshResult.ok, false);
  assert.equal(refresh.calls.length, 0);
  assert.match(output(refreshResult), /refresh token/);
  assert.match(output(refreshResult), /Contents: Read/);
  assertHidden(refreshResult, refreshToken);
});

test("a readable work list passes and the token stays out of the log", async () => {
  const { fetchImpl, calls } = mockFetch([repoOk(), fileOk()]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  const text = output(result);
  assert.equal(result.ok, true);
  assert.match(text, /DEPOSITS_READ_TOKEN is available \(fine-grained PAT\)/);
  assert.match(text, /graph\/next_work\.json/);
  assert.match(text, /Value not printed/);
  assert.equal(text.includes("SHOULD_NOT_LEAK_FILE_BODY"), false);
  assert.equal(text.includes("U0hPVUxEX05PVF9MRUFLX0ZJTEVfQk9EWQ=="), false);
  assertHidden(result, TOKEN);
  assert.equal(calls.length, 2);
  assert.equal(
    calls[0].url,
    "https://api.github.com/repos/paleofoundation/hmi-evidence-deposits",
  );
  assert.equal(
    calls[1].url,
    "https://api.github.com/repos/paleofoundation/hmi-evidence-deposits/contents/graph/next_work.json?ref=main",
  );
  assert.equal(calls[0].options.headers.Authorization, `Bearer ${TOKEN}`);
  assert.equal(calls[0].url.includes(TOKEN), false);
});

test("HTTP 404 on the private repository explains hidden access", async () => {
  const { fetchImpl } = mockFetch([
    {
      match: (url) => url.endsWith("/repos/paleofoundation/hmi-evidence-deposits"),
      status: 404,
      body: {
        message: "Not Found",
        documentation_url: "https://docs.github.com/rest/repos/repos#get-a-repository",
      },
      headers: { "x-oauth-scopes": "read:org" },
    },
  ]);
  const result = await preflight.preflight({ token: CLASSIC, fetchImpl });
  const text = output(result);
  assert.equal(result.ok, false);
  assert.match(text, /HTTP 404/);
  assert.match(text, /cannot see this private repository/);
  assert.match(text, /Contents: Read/);
  assert.match(text, /missing the repo scope/);
  assert.match(text, /Granted X-OAuth-Scopes: read:org/);
  assertHidden(result, CLASSIC);
});

test("a Bearer 401 falls back to the token scheme checkout uses", async () => {
  const { fetchImpl, calls } = mockFetch([
    {
      match: (url) => url.endsWith("/repos/paleofoundation/hmi-evidence-deposits"),
      status: 401,
      body: { message: "Bad credentials" },
    },
  ]);
  const routed = async (url, options) => {
    const header = options.headers.Authorization;
    if (header.startsWith("Bearer ") && url.endsWith("/hmi-evidence-deposits")) {
      return fetchImpl(url, options);
    }
    if (header.startsWith("token ") && url.endsWith("/hmi-evidence-deposits")) {
      return {
        status: 200,
        headers: { get: () => null },
        async text() {
          return JSON.stringify({ private: true, default_branch: "main" });
        },
      };
    }
    if (header.startsWith("token ") && url.includes("/contents/")) {
      return {
        status: 200,
        headers: { get: () => null },
        async text() {
          return JSON.stringify({
            type: "file",
            name: "next_work.json",
            path: "graph/next_work.json",
          });
        },
      };
    }
    throw new Error(`unexpected ${header} ${url}`);
  };
  const result = await preflight.preflight({ token: CLASSIC, fetchImpl: routed });
  assert.equal(result.ok, true, output(result));
  assert.equal(calls.length, 1);
  assert.match(output(result), /classic PAT/);
  assertHidden(result, CLASSIC);
});

test("HTTP 401 tells the operator to recreate the secret", async () => {
  const { fetchImpl } = mockFetch([
    {
      match: () => true,
      status: 401,
      body: { message: "Bad credentials" },
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  assert.equal(result.ok, false);
  assert.match(output(result), /HTTP 401/);
  assert.match(output(result), /Recreate the repository secret/);
  assert.match(output(result), /fine-grained PAT/);
  assertHidden(result, TOKEN);
});

test("SAML SSO failure names the organization authorization", async () => {
  const { fetchImpl } = mockFetch([
    {
      match: () => true,
      status: 403,
      body: { message: "Resource protected by organization SAML enforcement" },
      headers: {
        "x-github-sso": "required; url=https://github.com/orgs/paleofoundation/sso?authorization_request=EXAMPLE",
      },
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  const text = output(result);
  assert.equal(result.ok, false);
  assert.match(text, /SAML SSO/);
  assert.match(text, /https:\/\/github.com\/orgs\/paleofoundation\/sso\?authorization_request=EXAMPLE/);
  assertHidden(result, TOKEN);
});

test("a visible repository with a missing work list is not reported as an empty secret", async () => {
  const { fetchImpl } = mockFetch([
    repoOk(),
    {
      match: (url) => url.includes("/contents/"),
      status: 404,
      body: { message: "Not Found" },
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  const text = output(result);
  assert.equal(result.ok, false);
  assert.match(text, /can see paleofoundation\/hmi-evidence-deposits/);
  assert.match(text, /graph\/next_work\.json is absent/);
  assert.equal(/is empty in this job/.test(text), false);
  assert.equal(text.includes("Required secret:"), false);
});

test("an oversized contents response still counts as readable", async () => {
  const { fetchImpl } = mockFetch([
    repoOk(),
    {
      match: (url) => url.includes("/contents/"),
      status: 403,
      body: {
        message: "This API returns blobs up to 1 MB in size. The requested blob is too large to fetch via the API.",
      },
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  assert.equal(result.ok, true);
  assert.match(output(result), /It can read/);
});

test("rate limits stay distinct from a scope failure", async () => {
  const { fetchImpl } = mockFetch([
    {
      match: () => true,
      status: 403,
      body: { message: "API rate limit exceeded" },
      headers: { "retry-after": "30" },
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  const text = output(result);
  assert.match(text, /rate limited/);
  assert.match(text, /Retry-After: 30/);
  assert.match(text, /Scopes were not disproved/);
});

test("transport errors redact the token", async () => {
  const { fetchImpl } = mockFetch([
    {
      match: () => true,
      throwMessage: `connect ${TOKEN}`,
    },
  ]);
  const result = await preflight.preflight({ token: TOKEN, fetchImpl });
  assert.equal(result.ok, false);
  assert.match(output(result), /Could not reach the GitHub API/);
  assert.match(output(result), /\[redacted\]/);
  assertHidden(result, TOKEN);
});

function runCli(token) {
  const env = { PATH: process.env.PATH };
  if (token !== undefined) env.DEPOSITS_READ_TOKEN = token;
  return spawnSync(process.execPath, [path.join(__dirname, "claude-builder-deposits-preflight.cjs")], {
    cwd: path.join(__dirname, ".."),
    encoding: "utf8",
    env,
  });
}

test("the CLI exits non-zero for a missing secret and hides a pasted token", () => {
  const missing = runCli(undefined);
  assert.notEqual(missing.status, 0);
  assert.match(missing.stdout, /DEPOSITS_READ_TOKEN is empty/);
  assert.match(missing.stdout, /Contents: Read/);

  const leaked = runCli(`${CLASSIC} `);
  assert.notEqual(leaked.status, 0);
  assert.match(leaked.stdout, /whitespace/);
  assert.equal(leaked.stdout.includes(CLASSIC), false);
  assert.equal(leaked.stderr.includes(CLASSIC), false);
});
