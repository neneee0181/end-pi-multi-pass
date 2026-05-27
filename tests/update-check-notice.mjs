import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../extensions/multi-sub.ts", import.meta.url), "utf8");
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

assert.match(source, /const PACKAGE_NAME = "end-pi-multi-pass"/);
assert.match(source, new RegExp(`const PACKAGE_VERSION = "${pkg.version.replaceAll(".", "\\.")}"`));
assert.match(source, /process\.env\.PI_OFFLINE/);
assert.match(source, /https:\/\/registry\.npmjs\.org\/\$\{encodeURIComponent\(PACKAGE_NAME\)\}\/latest/);
assert.match(source, /pi update npm:\$\{PACKAGE_NAME\}/);
assert.match(source, /void notifyIfPackageUpdateAvailable\(ctx\)/);

console.log("update check notice passed");
