import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { discussionPublishingDecision, institutionEmailMatchesAuthoritativeDomains } from "../lib/research-trust-policy.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));

function filesBelow(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(path) : [path];
  });
}

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

test("applies every researcher-network migration to a clean SQLite database", () => {
  const working = mkdtempSync(join(tmpdir(), "wikibiome-research-db-"));
  const database = join(working, "research-network.sqlite");
  try {
    const migrations = readdirSync(join(root, "drizzle")).filter((name) => /^\d{4}_.+\.sql$/.test(name)).sort();
    assert.deepEqual(migrations, [
      "0000_fluffy_silver_sable.sql",
      "0001_many_zaran.sql",
      "0002_brave_zaladane.sql",
      "0003_lowly_ben_urich.sql",
      "0004_fearless_ozymandias.sql",
      "0005_eminent_skrulls.sql",
    ]);
    for (const migration of migrations) {
      const result = spawnSync("/usr/bin/sqlite3", [database], { input: source(`drizzle/${migration}`), encoding: "utf8" });
      assert.equal(result.status, 0, `${migration} failed: ${result.stderr}`);
    }
    const schema = spawnSync("/usr/bin/sqlite3", [database, "SELECT type || ':' || name FROM sqlite_master ORDER BY type, name;"], { encoding: "utf8" });
    assert.equal(schema.status, 0, schema.stderr);
    for (const name of [
      "accounts", "account_identities", "researcher_emails", "source_claims", "author_reviews",
      "work_submissions", "submission_files", "editorial_change_packets", "discussion_threads",
      "discussion_posts", "discussion_post_revisions", "discussion_reports", "institutions",
      "institution_memberships", "institution_batches", "notification_outbox", "suppression_list",
      "outreach_contacts", "audit_events", "rate_limit_events",
    ]) assert.match(schema.stdout, new RegExp(`table:${name}\\b`));
    for (const index of [
      "idx_source_claims_source_status", "idx_work_submissions_status", "idx_discussion_threads_target_status",
      "idx_notification_outbox_status_schedule", "idx_audit_events_target",
    ]) assert.match(schema.stdout, new RegExp(`index:${index}\\b`));
  } finally {
    rmSync(working, { recursive: true, force: true });
  }
});

test("keeps researcher-network mutations fail-closed", () => {
  const routes = filesBelow(join(root, "app/api")).filter((path) => path.endsWith("route.ts"));
  const mutations = routes.filter((path) => /export async function (?:POST|PUT|PATCH|DELETE)\b/.test(readFileSync(path, "utf8")));
  const unprotected = mutations.filter((path) => {
    const body = readFileSync(path, "utf8");
    return !/assertSameOriginRequest|verifyResendWebhook|WIKIBIOME_SCAN_WEBHOOK_SECRET/.test(body);
  });
  assert.deepEqual(unprotected, []);

  const network = source("lib/research-network.ts");
  const upload = source("app/api/work-submissions/[id]/manuscript/route.ts");
  assert.match(network, /WIKIBIOME_MANUSCRIPT_UPLOADS_ENABLED === "1"/);
  assert.match(network, /WIKIBIOME_OUTREACH_ENABLED === "1"/);
  assert.match(network, /configuredModerators\.includes\(input\.chatgptUserId\)/);
  assert.match(upload, /getResearchNetworkCapabilities\(\)\)\.manuscriptUploads/);
  assert.match(upload, /\/\(\?:Encrypt\|JavaScript\|JS\|Launch\|EmbeddedFile\|RichMedia\|OpenAction\|AcroForm\|XFA\)/);
});

test("pending or rejected posts cannot unlock direct discussion publishing", () => {
  assert.deepEqual(discussionPublishingDecision("researcher", ["pending", "pending", "pending", "rejected"]), { status: "pending", promoteTo: null });
  assert.deepEqual(discussionPublishingDecision("researcher", ["published", "pending", "rejected"]), { status: "pending", promoteTo: null });
  assert.deepEqual(discussionPublishingDecision("researcher", ["published", "published", "published"]), { status: "published", promoteTo: "trusted_contributor" });
  assert.deepEqual(discussionPublishingDecision("trusted_contributor", []), { status: "published", promoteTo: null });
  const network = source("lib/research-network.ts");
  assert.match(network, /eq\(discussionPosts\.status, "published"\)/);
  assert.match(network, /"trust\.promoted"/);
});

test("institution domain verification uses only authoritative ROR domains", () => {
  const authoritativeDomains = ["research.example.edu"];
  assert.equal(institutionEmailMatchesAuthoritativeDomains("author@spoofed.example", authoritativeDomains), false);
  assert.equal(institutionEmailMatchesAuthoritativeDomains("author@research.example.edu", authoritativeDomains), true);
  assert.equal(institutionEmailMatchesAuthoritativeDomains("author@lab.research.example.edu", authoritativeDomains), true);
  const network = source("lib/research-network.ts");
  const route = source("app/api/institutions/route.ts");
  assert.match(network, /createInstitution\(input: \{ account: ResearcherSession; ror: unknown; description\?: unknown \}\)/);
  assert.match(network, /lookupRorOrganization\(input\.ror\)/);
  assert.match(network, /domainSource: "ror_api"/);
  assert.doesNotMatch(route, /payload\.(?:name|domains|country)/);
});

test("preserves privacy, consent, editorial, and outreach boundaries", () => {
  const schema = source("db/schema.ts");
  const network = source("lib/research-network.ts");
  const email = source("lib/research-email.ts");
  const accountForm = source("app/_components/ResearcherAccountForm.tsx");
  const privacy = source("app/privacy/page.tsx");
  const terms = source("app/terms/page.tsx");
  const manifest = JSON.parse(source(".openai/hosting.json"));

  assert.deepEqual({ d1: manifest.d1, r2: manifest.r2 }, { d1: "DB", r2: "MANUSCRIPTS" });
  assert.match(schema, /discussionPostRevisions/);
  assert.match(schema, /suppressionList/);
  assert.match(schema, /auditEvents/);
  assert.match(network, /editorialChangePackets/);
  assert.match(network, /Number\(value\) >= 100/);
  assert.match(network, /researchNotifications: input\.researchNotifications === true/);
  assert.match(network, /communityDigest: input\.communityDigest === true/);
  assert.match(network, /fundraising: input\.fundraising === true/);
  assert.match(accountForm, /Research activity/);
  assert.match(accountForm, /Community digest/);
  assert.match(accountForm, /Microbiome Medicine support[\s\S]*Optional updates and fundraising/);
  assert.match(privacy, /contact email[\s\S]{0,120}stored privately and is never displayed/i);
  assert.match(terms, /editorial control/i);

  const citationTemplate = email.slice(email.indexOf('if (kind === "citation_notice")'), email.indexOf("throw new Error", email.indexOf('if (kind === "citation_notice")')));
  assert.match(citationTemplate, /one-time factual citation notice/i);
  assert.doesNotMatch(citationTemplate, /support the work|buy.{0,20}coffee|donat(?:e|ion)|microbiome medicine updates/i);
});

test("keeps private researcher surfaces out of indexes and public participation accessible", () => {
  const dashboard = source("app/researcher/dashboard/page.tsx");
  const moderation = source("app/researcher/moderation/page.tsx");
  const discussion = source("app/_components/DiscussionBoard.tsx");
  const accountForm = source("app/_components/ResearcherAccountForm.tsx");
  const submissionForm = source("app/_components/WorkSubmissionForm.tsx");
  const researcherProfile = source("app/researchers/[orcid]/page.tsx");
  const institutionProfile = source("app/institutions/[ror]/page.tsx");

  assert.match(dashboard, /robots: \{ index: false, follow: false \}/);
  assert.match(moderation, /robots: \{ index: false, follow: false \}/);
  assert.match(discussion, /role="status"/);
  assert.match(accountForm, /role="status"/);
  assert.match(submissionForm, /role="status"/);
  assert.match(accountForm, /<label>/);
  assert.match(submissionForm, /<label>/);
  assert.match(researcherProfile, /"@type": "Person"/);
  assert.match(institutionProfile, /"@type": "Organization"/);
});
