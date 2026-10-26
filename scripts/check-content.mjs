import assert from "node:assert/strict";
import { build } from "vite";
import { pathToFileURL } from "node:url";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

// Render real Vue components without a browser; this does not test layout.
await build({
  build: {
    ssr: "src/App.vue",
    outDir: ".vite/content-check",
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
const { default: App } = await import(
  pathToFileURL(`${process.cwd()}/.vite/content-check/App.js`).href
);
const html = await renderToString(createSSRApp(App));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "Duplicate document IDs");
assert.equal(
  (html.match(/<h1\b/g) ?? []).length,
  1,
  "Expected a single page heading",
);
const links = [...html.matchAll(/\bhref="([^"]+)"/g)].map((match) => match[1]);
for (const href of links) {
  assert.notEqual(href, "#", "Empty placeholder link");
  if (href.startsWith("#"))
    assert(ids.includes(href.slice(1)), `Broken anchor ${href}`);
  else assert(href.startsWith("https://"), `Unexpected link protocol ${href}`);
}
for (const match of html.matchAll(/\baria-labelledby="([^"]+)"/g)) {
  for (const id of match[1].split(" "))
    assert(ids.includes(id), `Missing accessible label ${id}`);
}
assert(html.includes("No publications are listed yet."));
assert(html.includes('aria-controls="primary-navigation"'));
console.log(
  `PASS: Vue render, unique IDs, ${links.length} links and anchors, accessible labels, publication empty state`,
);
