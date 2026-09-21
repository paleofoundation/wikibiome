import assert from "node:assert/strict";
import test from "node:test";
import { handleEarlyRoutingPolicy, SIGNATURE_EXPLORER_REDIRECTS } from "../lib/routing-policy.mjs";
import { isIndexableSource } from "../lib/source-indexing.mjs";
import review from "../data/source-indexing-review.json" with { type: "json" };
import content from "../data/content.generated.json" with { type: "json" };

test("legacy signature URLs reach the final destination in one permanent redirect", async () => {
  for (const { source } of SIGNATURE_EXPLORER_REDIRECTS) {
    for (const [query, target] of [
      ["", "/category/signature"],
      ["?utm_source=gsc&tag=a&tag=b", "/category/signature?utm_source=gsc&tag=a&tag=b"],
      ["?disease=autism-spectrum-disorder", "/article/autism-spectrum-disorder?disease=autism-spectrum-disorder#signature"],
      ["?disease=Autism%20Spectrum%20Disorder-signature&tag=a&tag=b", "/article/autism-spectrum-disorder?disease=Autism%20Spectrum%20Disorder-signature&tag=a&tag=b#signature"],
      ["?disease=not-a-disease", "/category/signature?disease=not-a-disease"],
      ["?disease=https%3A%2F%2Fevil.example", "/category/signature?disease=https%3A%2F%2Fevil.example"],
    ]) {
      const response = await handleEarlyRoutingPolicy(new Request(`https://www.wikibiome.com${source}${query}`));
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), target);
      assert.equal(await handleEarlyRoutingPolicy(new Request(new URL(target, "https://www.wikibiome.com"))), undefined);
    }
  }
});

test("source exclusions are limited to existing, explicitly reviewed identities", () => {
  const ids = review.citationOnlySources.map(({ id }) => id);
  assert.equal(ids.length, 11);
  assert.equal(new Set(ids).size, ids.length);
  for (const { id, reason } of review.citationOnlySources) {
    assert.ok(content.sourceLookup[id], `missing source ${id}`);
    assert.ok(reason.length > 20);
    assert.equal(isIndexableSource(id), false);
  }
  assert.equal(isIndexableSource("scholefield-2024-brain-metallomics-dementia"), true);
  assert.equal(isIndexableSource("new-unreviewed-source"), true);
  assert.equal(Object.keys(content.sourceLookup).filter(isIndexableSource).length, 1929);
});
