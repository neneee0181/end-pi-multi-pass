import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../extensions/multi-sub.ts", import.meta.url), "utf8");

assert.match(source, /function sanitizeAntigravitySchema\(schema: unknown\): unknown/);
assert.match(source, /parameters: sanitizeAntigravitySchema\(tool\.parameters\)/);
assert.match(source, /key === "patternProperties"/);
assert.match(source, /key === "additionalProperties"/);

console.log("antigravity schema checks passed");
