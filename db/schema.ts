import { sql } from "drizzle-orm";
import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";

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
  status: text("status").notNull().default("pending"),
  moderatorNote: text("moderator_note"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("idx_contributions_page_id").on(table.pageId),
  index("idx_contributions_contributor").on(table.contributorUserId, table.createdAt),
  index("idx_contributions_status_created").on(table.status, table.createdAt),
]);
