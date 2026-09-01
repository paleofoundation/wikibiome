import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const contributions = sqliteTable("contributions", {
  id: text("id").primaryKey(),
  pageId: text("page_id").notNull(),
  pageTitle: text("page_title").notNull(),
  section: text("section").notNull(),
  contributionType: text("contribution_type").notNull(),
  originalText: text("original_text").notNull().default(""),
  proposedText: text("proposed_text").notNull(),
  rationale: text("rationale").notNull(),
  sourceUrl: text("source_url"),
  contributorUserId: text("contributor_user_id").notNull(),
  contributorEmail: text("contributor_email").notNull(),
  contributorName: text("contributor_name").notNull(),
  accountId: text("account_id"),
  status: text("status").notNull().default("pending"),
  moderatorNote: text("moderator_note"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_contributions_page_id").on(table.pageId),
  index("idx_contributions_contributor").on(table.contributorUserId, table.createdAt),
  index("idx_contributions_account").on(table.accountId, table.createdAt),
  index("idx_contributions_status_created").on(table.status, table.createdAt),
]);

export const accounts = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  displayName: text("display_name").notNull(),
  role: text("role").notNull().default("researcher"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const accountIdentities = sqliteTable("account_identities", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  provider: text("provider").notNull(),
  providerSubject: text("provider_subject").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_account_identities_provider_subject").on(table.provider, table.providerSubject),
  index("idx_account_identities_account").on(table.accountId),
]);

export const researcherProfiles = sqliteTable("researcher_profiles", {
  accountId: text("account_id").primaryKey(),
  orcid: text("orcid").notNull(),
  name: text("name").notNull(),
  biography: text("biography").notNull().default(""),
  affiliationsJson: text("affiliations_json").notNull().default("[]"),
  expertiseSelfJson: text("expertise_self_json").notNull().default("[]"),
  expertiseInferredJson: text("expertise_inferred_json").notNull().default("[]"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_researcher_profiles_orcid").on(table.orcid)]);

export const researcherEmails = sqliteTable("researcher_emails", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  email: text("email").notNull(),
  verifiedAt: text("verified_at"),
  researchNotifications: integer("research_notifications", { mode: "boolean" }).notNull().default(false),
  communityDigest: integer("community_digest", { mode: "boolean" }).notNull().default(false),
  fundraising: integer("fundraising", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_researcher_emails_email").on(table.email),
  uniqueIndex("idx_researcher_emails_account").on(table.accountId),
]);

export const accountSessions = sqliteTable("account_sessions", {
  tokenHash: text("token_hash").primaryKey(),
  accountId: text("account_id").notNull(),
  expiresAt: text("expires_at").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("idx_account_sessions_account").on(table.accountId)]);

export const oauthStates = sqliteTable("oauth_states", {
  stateHash: text("state_hash").primaryKey(),
  provider: text("provider").notNull(),
  returnTo: text("return_to").notNull().default("/researcher/dashboard"),
  sourceId: text("source_id"),
  linkAccountId: text("link_account_id"),
  chatgptUserId: text("chatgpt_user_id"),
  chatgptEmail: text("chatgpt_email"),
  chatgptName: text("chatgpt_name"),
  expiresAt: text("expires_at").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const emailVerificationTokens = sqliteTable("email_verification_tokens", {
  tokenHash: text("token_hash").primaryKey(),
  accountId: text("account_id").notNull(),
  email: text("email").notNull(),
  expiresAt: text("expires_at").notNull(),
  usedAt: text("used_at"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("idx_email_verification_account").on(table.accountId)]);

export const sourceClaims = sqliteTable("source_claims", {
  id: text("id").primaryKey(),
  sourceId: text("source_id").notNull(),
  sourceDoi: text("source_doi"),
  accountId: text("account_id").notNull(),
  status: text("status").notNull().default("pending"),
  verificationMethod: text("verification_method").notNull().default("manual_review"),
  evidenceNote: text("evidence_note").notNull().default(""),
  reviewerNote: text("reviewer_note"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_source_claims_source_account").on(table.sourceId, table.accountId),
  index("idx_source_claims_account_status").on(table.accountId, table.status),
  index("idx_source_claims_source_status").on(table.sourceId, table.status),
]);

export const authorReviews = sqliteTable("author_reviews", {
  id: text("id").primaryKey(),
  claimId: text("claim_id").notNull(),
  sourceId: text("source_id").notNull(),
  accountId: text("account_id").notNull(),
  accuracy: text("accuracy").notNull(),
  context: text("context_text").notNull(),
  sourceUrl: text("source_url"),
  conflictDisclosure: text("conflict_disclosure").notNull().default(""),
  status: text("status").notNull().default("pending"),
  moderatorNote: text("moderator_note"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_author_reviews_source_status").on(table.sourceId, table.status),
  index("idx_author_reviews_account").on(table.accountId, table.createdAt),
]);

export const workSubmissions = sqliteTable("work_submissions", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  identifierType: text("identifier_type").notNull(),
  identifierValue: text("identifier_value").notNull(),
  fingerprint: text("fingerprint").notNull(),
  title: text("title").notNull(),
  authorsJson: text("authors_json").notNull().default("[]"),
  year: integer("year"),
  abstractText: text("abstract_text").notNull().default(""),
  metadataJson: text("metadata_json").notNull().default("{}"),
  status: text("status").notNull().default("pending_review"),
  rightsAttested: integer("rights_attested", { mode: "boolean" }).notNull().default(false),
  license: text("license"),
  editorialNote: text("editorial_note"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_work_submissions_identifier").on(table.identifierType, table.identifierValue),
  uniqueIndex("idx_work_submissions_fingerprint").on(table.fingerprint),
  index("idx_work_submissions_account").on(table.accountId, table.createdAt),
  index("idx_work_submissions_status").on(table.status, table.createdAt),
]);

export const submissionFiles = sqliteTable("submission_files", {
  id: text("id").primaryKey(),
  submissionId: text("submission_id").notNull(),
  r2Key: text("r2_key").notNull(),
  filename: text("filename").notNull(),
  byteSize: integer("byte_size").notNull(),
  mimeType: text("mime_type").notNull(),
  scanStatus: text("scan_status").notNull().default("quarantined"),
  extractionStatus: text("extraction_status").notNull().default("pending"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_submission_files_submission").on(table.submissionId)]);

export const editorialChangePackets = sqliteTable("editorial_change_packets", {
  id: text("id").primaryKey(),
  submissionId: text("submission_id").notNull(),
  status: text("status").notNull().default("pending_sync"),
  upstreamTarget: text("upstream_target").notNull().default("paleofoundation/wikibiome"),
  payloadJson: text("payload_json").notNull().default("{}"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_editorial_packets_submission").on(table.submissionId),
  index("idx_editorial_packets_status").on(table.status, table.createdAt),
]);

export const discussionThreads = sqliteTable("discussion_threads", {
  id: text("id").primaryKey(),
  targetType: text("target_type").notNull(),
  targetId: text("target_id").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  createdByAccountId: text("created_by_account_id").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_discussion_threads_target_status").on(table.targetType, table.targetId, table.status, table.updatedAt),
  index("idx_discussion_threads_creator").on(table.createdByAccountId, table.createdAt),
]);

export const discussionPosts = sqliteTable("discussion_posts", {
  id: text("id").primaryKey(),
  threadId: text("thread_id").notNull(),
  parentPostId: text("parent_post_id"),
  accountId: text("account_id").notNull(),
  body: text("body").notNull(),
  sourceUrl: text("source_url"),
  conflictDisclosure: text("conflict_disclosure").notNull().default(""),
  revision: integer("revision").notNull().default(1),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_discussion_posts_thread_status").on(table.threadId, table.status, table.createdAt),
  index("idx_discussion_posts_account").on(table.accountId, table.createdAt),
]);

export const discussionPostRevisions = sqliteTable("discussion_post_revisions", {
  id: text("id").primaryKey(),
  postId: text("post_id").notNull(),
  revision: integer("revision").notNull(),
  body: text("body").notNull(),
  sourceUrl: text("source_url"),
  conflictDisclosure: text("conflict_disclosure").notNull().default(""),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_post_revisions_post_revision").on(table.postId, table.revision)]);

export const discussionReports = sqliteTable("discussion_reports", {
  id: text("id").primaryKey(),
  postId: text("post_id").notNull(),
  accountId: text("account_id").notNull(),
  reason: text("reason").notNull(),
  status: text("status").notNull().default("open"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_discussion_reports_post_account").on(table.postId, table.accountId),
  index("idx_discussion_reports_status").on(table.status, table.createdAt),
]);

export const researcherBlocks = sqliteTable("researcher_blocks", {
  id: text("id").primaryKey(),
  blockerAccountId: text("blocker_account_id").notNull(),
  blockedAccountId: text("blocked_account_id").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_researcher_blocks_pair").on(table.blockerAccountId, table.blockedAccountId),
  index("idx_researcher_blocks_blocker").on(table.blockerAccountId, table.createdAt),
]);

export const institutions = sqliteTable("institutions", {
  id: text("id").primaryKey(),
  ror: text("ror").notNull(),
  name: text("name").notNull(),
  country: text("country"),
  domainsJson: text("domains_json").notNull().default("[]"),
  description: text("description").notNull().default(""),
  status: text("status").notNull().default("pending"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_institutions_ror").on(table.ror)]);

export const institutionMemberships = sqliteTable("institution_memberships", {
  id: text("id").primaryKey(),
  institutionId: text("institution_id").notNull(),
  accountId: text("account_id").notNull(),
  role: text("role").notNull().default("member"),
  status: text("status").notNull().default("pending"),
  domainVerified: integer("domain_verified", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  uniqueIndex("idx_institution_memberships_institution_account").on(table.institutionId, table.accountId),
  index("idx_institution_memberships_account").on(table.accountId, table.status),
]);

export const institutionBatches = sqliteTable("institution_batches", {
  id: text("id").primaryKey(),
  institutionId: text("institution_id").notNull(),
  submittedByAccountId: text("submitted_by_account_id").notNull(),
  format: text("format").notNull(),
  status: text("status").notNull().default("pending_review"),
  recordCount: integer("record_count").notNull().default(0),
  identifiersJson: text("identifiers_json").notNull().default("[]"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("idx_institution_batches_institution").on(table.institutionId, table.createdAt)]);

export const outreachContacts = sqliteTable("outreach_contacts", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  sourceId: text("source_id").notNull(),
  provenance: text("provenance").notNull(),
  jurisdictionRule: text("jurisdiction_rule").notNull(),
  purpose: text("purpose").notNull().default("citation_notice"),
  status: text("status").notNull().default("approved"),
  claimTokenHash: text("claim_token_hash"),
  claimTokenExpiresAt: text("claim_token_expires_at"),
  claimTokenUsedAt: text("claim_token_used_at"),
  lastSentAt: text("last_sent_at"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [uniqueIndex("idx_outreach_contacts_email_source").on(table.email, table.sourceId)]);

export const suppressionList = sqliteTable("suppression_list", {
  email: text("email").primaryKey(),
  reason: text("reason").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const notificationOutbox = sqliteTable("notification_outbox", {
  id: text("id").primaryKey(),
  accountId: text("account_id"),
  email: text("email").notNull(),
  kind: text("kind").notNull(),
  payloadJson: text("payload_json").notNull().default("{}"),
  status: text("status").notNull().default("pending"),
  providerId: text("provider_id"),
  attempts: integer("attempts").notNull().default(0),
  scheduledAt: text("scheduled_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  lastError: text("last_error"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_notification_outbox_status_schedule").on(table.status, table.scheduledAt),
  index("idx_notification_outbox_email_kind").on(table.email, table.kind),
]);

export const auditEvents = sqliteTable("audit_events", {
  id: text("id").primaryKey(),
  actorAccountId: text("actor_account_id"),
  action: text("action").notNull(),
  targetType: text("target_type").notNull(),
  targetId: text("target_id").notNull(),
  metadataJson: text("metadata_json").notNull().default("{}"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("idx_audit_events_target").on(table.targetType, table.targetId, table.createdAt)]);

export const rateLimitEvents = sqliteTable("rate_limit_events", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  action: text("action").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [index("idx_rate_limit_account_action").on(table.accountId, table.action, table.createdAt)]);
