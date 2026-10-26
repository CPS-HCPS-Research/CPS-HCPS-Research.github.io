import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

// Validate the actual artifact, especially the root-site asset contract.
const html = await readFile("dist/index.html", "utf8");
assert.match(html, /<html lang="en">/);
assert.match(html, /name="viewport"/);
assert.match(
  html,
  /rel="canonical" href="https:\/\/cps-hcps-research.github.io\/"/,
);
const assets = [
  ...html.matchAll(/(?:src|href)="(\/(?:assets\/[^" ]+|favicon\.svg))"/g),
].map((match) => match[1]);
assert(assets.length >= 3, "Expected JavaScript, stylesheet, and favicon");
for (const asset of assets) {
  assert(
    (await stat(resolve("dist", `.${asset}`))).isFile(),
    `Missing artifact: ${asset}`,
  );
}
assert(!html.includes("/src/main.ts"), "Unbuilt source reference in artifact");
for (const file of ["robots.txt", "sitemap.xml"]) await stat(`dist/${file}`);
console.log(
  `PASS: root-domain asset paths, ${assets.length} built assets, metadata, robots, and sitemap`,
);
