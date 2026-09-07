import test from "node:test";
import assert from "node:assert/strict";

import { isArticleMediaTypeCompatible, mediaCoverageGroups } from "../scripts/article-media-corpus.mjs";

test("prioritizes metals and diseases before microorganisms in the scientific-media queue", () => {
  const orderedGroups = [...mediaCoverageGroups]
    .sort((left, right) => left.categoryOrder - right.categoryOrder)
    .map((group) => group.id);

  assert.deepEqual(orderedGroups.slice(0, 3), ["metals", "diseases", "microorganisms"]);
});

test("allows a morphology asset on an intervention route only for an NCBI-identified taxon", () => {
  const route = { coverageGroup: "interventions" };
  const identifiedTaxon = {
    assetType: "morphology",
    subjectKind: "taxon",
    scientificIdentifiers: [{ authority: "NCBI Taxonomy", propertyID: "NCBITaxon", value: "316435" }],
  };

  assert.equal(isArticleMediaTypeCompatible(route, identifiedTaxon), true);
  assert.equal(isArticleMediaTypeCompatible(route, { ...identifiedTaxon, subjectKind: "intervention" }), false);
  assert.equal(isArticleMediaTypeCompatible(route, { ...identifiedTaxon, scientificIdentifiers: [] }), false);
  assert.equal(isArticleMediaTypeCompatible({ coverageGroup: "mechanisms" }, identifiedTaxon), false);
});
