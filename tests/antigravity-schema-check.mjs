import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../extensions/multi-sub.ts", import.meta.url), "utf8");

assert.match(source, /function sanitizeAntigravitySchema\(schema: unknown\): unknown/);
assert.match(source, /parameters: sanitizeAntigravitySchema\(tool\.parameters\)/);
assert.match(source, /key === "patternProperties"/);
assert.match(source, /key === "additionalProperties"/);
assert.doesNotMatch(source, /"gemini-3\.5-flash",/);
assert.match(source, /"gemini-3\.5-flash-low"/);
assert.match(source, /function assertKnownAntigravityModel\(modelId: string\): void/);
assert.match(source, /Run \/subs switch and select one of:/);
assert.match(source, /assertKnownAntigravityModel\(model\.id\)/);

console.log("antigravity schema checks passed");
