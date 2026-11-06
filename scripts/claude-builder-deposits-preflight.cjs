#!/usr/bin/env node
/**
 * Prove DEPOSITS_READ_TOKEN can read the evidence-graph work list.
 *
 *   node scripts/claude-builder-deposits-preflight.cjs
 *
 * The Claude builder queue prefers pages listed in
 * paleofoundation/hmi-evidence-deposits graph/next_work.json. That
 * repository is private. The workflow GITHUB_TOKEN cannot see it, and
 * actions/checkout then fails with Not Found.
 *
 * This script never prints the token. A blank Actions env value means
 * GitHub injected no repository secret (the log shows the name with an
 * empty value, while a real secret is masked as ***).
 */

const REPO = "paleofoundation/hmi-evidence-deposits";
const FILE_PATH = "graph/next_work.json";
const SECRET_NAME = "DEPOSITS_READ_TOKEN";
const API = "https://api.github.com";

const REQUIREMENT_LINES = [
  `Required secret: ${SECRET_NAME} on paleofoundation/wikibiome.`,
  "Where: Settings, Secrets and variables, Actions, Repository secrets.",
  "This job reads repository secrets. A value saved on the Preview or Production environment is left empty here, because the job does not set environment. The log then shows DEPOSITS_READ_TOKEN: with nothing after the colon. A stored value is masked as ***.",
  "An organization secret is injected only when wikibiome is included in that secret's repository access list.",
  `Repository the token must read: ${REPO}.`,
  `File the token must read: ${FILE_PATH} on the default branch.`,
  "Fine-grained PAT: resource owner paleofoundation, repository access limited to hmi-evidence-deposits, Contents: Read. Approve the token when the organization asks for approval. Metadata: Read is included with every fine-grained token.",
  "Classic PAT: repo scope. Classic tokens grant private repository contents through that scope.",
  "SAML SSO: when paleofoundation enforces SSO, authorize this token for the organization after creating it.",
  `GITHUB_TOKEN cannot read that private repository. actions/checkout then returns Not Found for GET /repos/${REPO}.`,
];

function classifyToken(token) {
  if (token.startsWith("github_pat_")) return "fine-grained PAT";
  if (token.startsWith("ghp_")) return "classic PAT";
  if (token.startsWith("gho_")) return "OAuth access token";
  if (token.startsWith("ghs_")) return "GitHub App installation token";
  if (token.startsWith("ghu_")) return "GitHub App user-to-server token";
  if (token.startsWith("ghr_")) return "refresh token";
  return "unrecognized token shape";
}

function redact(text, token) {
  const value = String(text ?? "");
  if (!token) return value;
  return value.split(token).join("[redacted]");
}

function annotation(summary) {
  const one = String(summary).replace(/[%\r\n]+/g, " ").replace(/\s+/g, " ").trim();
  return `::error title=${SECRET_NAME}::${one}`;
}

function headerValue(headers, name) {
  if (!headers || typeof headers.get !== "function") return "";
  const value = headers.get(name);
  return typeof value === "string" ? value : "";
}

function authorizationHeader(token, scheme) {
  return scheme === "token" ? `token ${token}` : `Bearer ${token}`;
}

async function githubGet(fetchImpl, token, url, scheme) {
  if (url.includes(token)) {
    throw new Error("refusing to put the token in the request URL");
  }
  let response;
  try {
    response = await fetchImpl(url, {
      method: "GET",
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: authorizationHeader(token, scheme),
        "User-Agent": "wikibiome-claude-builder-preflight",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  } catch (error) {
    const timedOut = error && error.name === "TimeoutError";
    const reason = timedOut ? "the request timed out" : "the request failed";
    const detail = error && error.message ? error.message : "";
    throw new Error(detail ? `${reason}: ${detail}` : reason);
  }

  const status = response.status;
  if (status >= 300 && status < 400) {
    return { status, message: "", redirect: true };
  }

  let text = "";
  try {
    text = await response.text();
  } catch (error) {
    throw new Error(`reading the response failed: ${error && error.message ? error.message : "unknown"}`);
  }

  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = null;
    }
  }

  const message = body && typeof body.message === "string" ? body.message : "";
  return {
    status,
    message,
    redirect: false,
    documentationUrl: body && typeof body.documentation_url === "string" ? body.documentation_url : "",
    sso: headerValue(response.headers, "x-github-sso"),
    oauthScopes: headerValue(response.headers, "x-oauth-scopes"),
    acceptedScopes: headerValue(response.headers, "x-accepted-oauth-scopes"),
    rateRemaining: headerValue(response.headers, "x-ratelimit-remaining"),
    retryAfter: headerValue(response.headers, "retry-after"),
    defaultBranch: body && typeof body.default_branch === "string" ? body.default_branch : "",
    fileType: body && typeof body.type === "string" ? body.type : "",
    filePath: body && typeof body.path === "string" ? body.path : "",
    fileName: body && typeof body.name === "string" ? body.name : "",
    json: Boolean(body && typeof body === "object"),
  };
}

function detailLines(result, shape) {
  const notes = [];
  if (result.oauthScopes) notes.push(`Granted X-OAuth-Scopes: ${result.oauthScopes}.`);
  if (result.acceptedScopes) notes.push(`Endpoint X-Accepted-OAuth-Scopes: ${result.acceptedScopes}.`);
  if (shape === "classic PAT" && result.oauthScopes) {
    const granted = result.oauthScopes.split(",").map((scope) => scope.trim()).filter(Boolean);
    if (!granted.includes("repo")) {
      notes.push("This classic PAT is missing the repo scope.");
    }
  }
  if (result.sso) notes.push(`X-GitHub-SSO: ${result.sso}.`);
  if (result.message) notes.push(`GitHub API message: ${result.message}.`);
  if (result.documentationUrl) notes.push(`Documentation: ${result.documentationUrl}.`);
  return notes;
}

function rateLimited(result) {
  if (result.status === 429) return true;
  return /rate limit/i.test(result.message || "");
}

function oversizedContents(result) {
  return result.status === 403 && /1 MB|too large/i.test(result.message || "");
}

function explainHttpFailure(result, shape, target) {
  const details = detailLines(result, shape);
  if (result.redirect) {
    return [
      `${SECRET_NAME} (${shape}) received HTTP ${result.status} from ${target}. The preflight does not follow redirects.`,
      ...details,
    ].join(" ");
  }
  if (rateLimited(result)) {
    const wait = result.retryAfter ? ` Retry-After: ${result.retryAfter}.` : "";
    return [
      `GitHub rate limited the ${SECRET_NAME} preflight (${shape}) on ${target} with HTTP ${result.status}.${wait} Scopes were not disproved. Re-run the workflow after the rate limit resets.`,
      ...details,
    ].join(" ");
  }
  if (/required/i.test(result.sso || "")) {
    return [
      `${SECRET_NAME} (${shape}) can authenticate, and paleofoundation SAML SSO still has to authorize it. HTTP ${result.status} from ${target}. Authorize the token for the paleofoundation organization, then re-run this workflow.`,
      ...details,
    ].join(" ");
  }
  if (result.status === 401) {
    return [
      `${SECRET_NAME} (${shape}) was rejected with HTTP 401 on ${target}. Recreate the repository secret with a current fine-grained PAT (Contents: Read on ${REPO}) or a classic PAT (repo scope).`,
      ...details,
    ].join(" ");
  }
  if (result.status === 404 && target.includes("/contents/")) {
    return [
      `${SECRET_NAME} (${shape}) can see ${REPO}, and ${FILE_PATH} is absent on the default branch. Checkout reads that path from the default branch. Restore the file, or point the deposits repository at the branch that contains it.`,
      ...details,
    ].join(" ");
  }
  if (result.status === 404) {
    return [
      `${SECRET_NAME} (${shape}) received HTTP 404 for ${target}. GitHub returns 404 when a token cannot see this private repository. That is the same Not Found actions/checkout reports. Grant the token access to ${REPO} with Contents: Read (fine-grained) or the repo scope (classic), including organization approval and SAML SSO when paleofoundation requires them.`,
      ...details,
    ].join(" ");
  }
  if (result.status === 403) {
    return [
      `${SECRET_NAME} (${shape}) is forbidden from ${target} (HTTP 403). A fine-grained PAT needs Contents: Read on ${REPO}. A classic PAT needs the repo scope.`,
      ...details,
    ].join(" ");
  }
  return [
    `${SECRET_NAME} (${shape}) got HTTP ${result.status} from ${target}.`,
    ...details,
  ].join(" ");
}

async function preflight(options = {}) {
  const token = typeof options.token === "string" ? options.token : "";
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const lines = [];
  const say = (line) => lines.push(redact(line, token));
  const fail = (summary, includeRequirements = true) => {
    say(summary);
    if (includeRequirements) {
      say("");
      for (const line of REQUIREMENT_LINES) say(line);
    }
    say(annotation(summary));
    return { ok: false, lines };
  };

  if (!token.trim()) {
    if (!token) {
      return fail(
        `${SECRET_NAME} is empty in this job. GitHub injected no repository secret (the log shows a blank value, while a real secret is masked as ***). Create ${SECRET_NAME} under Repository secrets on paleofoundation/wikibiome. Fine-grained PAT: Contents: Read on ${REPO}. Classic PAT: repo scope. The token must read ${FILE_PATH}.`,
      );
    }
    return fail(
      `${SECRET_NAME} is only whitespace. Recreate the repository secret with the token alone, without a trailing newline or spaces. Fine-grained PAT: Contents: Read on ${REPO}. Classic PAT: repo scope.`,
    );
  }
  if (/\s/.test(token)) {
    return fail(
      `${SECRET_NAME} contains whitespace. Recreate the repository secret with the token alone, without a trailing newline or spaces. Fine-grained PAT: Contents: Read on ${REPO}. Classic PAT: repo scope.`,
    );
  }

  const shape = classifyToken(token);
  if (shape === "refresh token") {
    return fail(
      `${SECRET_NAME} is a refresh token (prefix ghr_). Store the access token. A fine-grained PAT starts with github_pat_ and needs Contents: Read on ${REPO}. A classic PAT starts with ghp_ and needs the repo scope.`,
    );
  }

  const repoUrl = `${API}/repos/${REPO}`;
  // actions/checkout calls the API with "token <PAT>". Fine-grained PATs also
  // accept Bearer. Try Bearer first, and retry the checkout scheme on 401.
  let scheme = "bearer";
  let repo;
  try {
    repo = await githubGet(fetchImpl, token, repoUrl, scheme);
    if (repo.status === 401) {
      const retry = await githubGet(fetchImpl, token, repoUrl, "token");
      if (retry.status !== 401) {
        scheme = "token";
        repo = retry;
      }
    }
  } catch (error) {
    return fail(
      `Could not reach the GitHub API to test ${SECRET_NAME} (${shape}). ${error.message}`,
    );
  }
  if (repo.status !== 200) {
    return fail(explainHttpFailure(repo, shape, `GET /repos/${REPO}`));
  }

  const ref = repo.defaultBranch ? `?ref=${encodeURIComponent(repo.defaultBranch)}` : "";
  const fileUrl = `${API}/repos/${REPO}/contents/${FILE_PATH}${ref}`;
  let file;
  try {
    file = await githubGet(fetchImpl, token, fileUrl, scheme);
  } catch (error) {
    return fail(
      `Could not reach the GitHub contents API to test ${SECRET_NAME} (${shape}). ${error.message}`,
    );
  }

  const readableFile = file.status === 200
    && file.json
    && (file.fileType === "file" || file.filePath === FILE_PATH || file.fileName === "next_work.json");
  if (readableFile || oversizedContents(file)) {
    say(
      `${SECRET_NAME} is available (${shape}). It can read ${REPO} ${FILE_PATH}. Value not printed.`,
    );
    return { ok: true, lines };
  }
  if (file.status === 200 && file.fileType === "dir") {
    return fail(
      `${SECRET_NAME} (${shape}) can see ${REPO}, and ${FILE_PATH} is a directory on the default branch. Checkout expects the work-list file at that path.`,
      false,
    );
  }
  if (file.status === 200) {
    return fail(
      `${SECRET_NAME} (${shape}) received HTTP 200 for ${FILE_PATH}, and the body was not a file record. Checkout expects graph/next_work.json on the default branch.`,
      false,
    );
  }

  const includeRequirements = file.status !== 404;
  return fail(
    explainHttpFailure(file, shape, `GET /repos/${REPO}/contents/${FILE_PATH}`),
    includeRequirements,
  );
}

async function main() {
  const result = await preflight({ token: process.env.DEPOSITS_READ_TOKEN || "" });
  for (const line of result.lines) console.log(line);
  if (!result.ok) process.exit(1);
}

if (require.main === module) {
  main().catch((error) => {
    const token = process.env.DEPOSITS_READ_TOKEN || "";
    const message = redact(error && error.message ? error.message : String(error), token);
    console.log(
      `${SECRET_NAME} preflight stopped before it could check ${REPO} ${FILE_PATH}. ${message}`,
    );
    for (const line of REQUIREMENT_LINES) console.log(line);
    console.log(annotation(`${SECRET_NAME} preflight crashed before the contents check.`));
    process.exit(1);
  });
}

module.exports = {
  FILE_PATH,
  REPO,
  REQUIREMENT_LINES,
  SECRET_NAME,
  classifyToken,
  preflight,
};
