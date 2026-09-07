import test from "node:test";
import assert from "node:assert/strict";

import { mediaCoverageGroups } from "../scripts/article-media-corpus.mjs";

test("prioritizes metals and diseases before microorganisms in the scientific-media queue", () => {
  const orderedGroups = [...mediaCoverageGroups]
    .sort((left, right) => left.categoryOrder - right.categoryOrder)
    .map((group) => group.id);

  assert.deepEqual(orderedGroups.slice(0, 3), ["metals", "diseases", "microorganisms"]);
});
