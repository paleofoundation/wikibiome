import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { organizationProfiles, organizationForWebsite, getOrganizationProfile, searchOrganizationProfiles } from "../lib/organization-profiles.mjs";

const content = JSON.parse(fs.readFileSync(new URL("../data/content.generated.json", import.meta.url), "utf8"));

test("curated organization reading paths resolve to real articles, publications, and related profiles", () => {
  const articles = new Set(content.pages.map((page) => page.id));
  assert.equal(new Set(organizationProfiles.map((profile) => profile.slug)).size, organizationProfiles.length);
  for (const profile of organizationProfiles) {
    assert.equal(new URL(profile.source).protocol, "https:");
    for (const path of profile.paths) for (const id of path.articles) assert.ok(articles.has(id), `${profile.slug}: missing article ${id}`);
    for (const work of profile.works) {
      assert.ok(content.sourceLookup[work.id], `missing source ${work.id}`);
      assert.ok(content.pages.some((page) => page.sources?.includes(work.id)), `source has no article placements: ${work.id}`);
    }
    for (const related of profile.related) assert.ok(getOrganizationProfile(related.slug));
  }
});

test("profile links match official website hosts and reject lookalikes", () => {
  assert.equal(organizationForWebsite("https://www.MicrobiomeMedicine.com/about-us/")?.slug, "microbiome-medicine");
  assert.equal(organizationForWebsite("http://tecrid.com/")?.slug, "tecrid");
  for (const value of ["https://microbiomemedicine.com.evil.test/", "https://evil.test/microbiomemedicine.com", "https://microbiomemedicine.com@evil.test", "javascript:alert(1)", "bad url", "https://unrelated.org/"]) assert.equal(organizationForWebsite(value), undefined);
});

test("organization discovery supports website queries and does not invent profiles", () => {
  assert.equal(searchOrganizationProfiles("MicrobiomeMedicine.com")[0]?.slug, "microbiome-medicine");
  assert.equal(searchOrganizationProfiles("contaminant standards")[0]?.slug, "contaminant-standards");
  assert.deepEqual(searchOrganizationProfiles(""), []);
  assert.deepEqual(searchOrganizationProfiles("unrelated association"), []);
  assert.equal(getOrganizationProfile("missing"), undefined);
});
