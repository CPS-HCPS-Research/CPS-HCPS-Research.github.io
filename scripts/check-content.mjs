import assert from "node:assert/strict";
import { build } from "vite";
import { pathToFileURL } from "node:url";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

// Render real Vue components without a browser; this does not test layout.
await build({
  build: {
    ssr: true,
    rollupOptions: { input: { App: "src/App.vue", i18n: "src/i18n.ts" } },
    outDir: ".vite/content-check",
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
const { default: App } = await import(
  pathToFileURL(`${process.cwd()}/.vite/content-check/App.js`).href
);
const { locale, readPreference } = await import(
  pathToFileURL(`${process.cwd()}/.vite/content-check/i18n.js`).href
);
assert.equal(locale.value, "en", "First visit must default to English");
for (const [saved, expected] of [[null, "en"], ["en", "en"], ["zh", "zh"], ["invalid", "en"]]) {
  assert.equal(readPreference({ getItem: () => saved }), expected);
}
assert.equal(readPreference({ getItem: () => { throw new Error("Storage unavailable"); } }), "en");

const order = ["home", "news", "research", "seminars", "publications", "projects", "resources", "people", "about"];
let englishLinks;
for (const language of ["en", "zh"]) {
  locale.value = language;
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
  assert(html.includes(language === "en" ? "No publications are listed yet." : "目前尚未列出论文。"));
  assert(html.includes('aria-controls="primary-navigation"'));
  assert(html.includes('aria-controls="language-options"'));
  const navigation = html.match(/<nav\b[^>]*id="primary-navigation"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
  assert(navigation, "Missing primary navigation");
  assert.deepEqual([...navigation.matchAll(/href="#([^"]+)"/g)].map(m => m[1]), order);
  const sectionOrder = [...html.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)]
    .map(m => m[1]).filter(id => order.includes(id));
  assert.deepEqual(sectionOrder, order, "Page sections must follow navigation order");
  assert(html.includes(language === "en" ? "Book Reading" : "图书研读"));
  assert(html.includes(language === "en" ? "Paper Reading" : "论文研读"));
  assert(html.includes(language === "en" ? "Goals &amp; decisions" : "目标与决策"));
  assert(html.includes(language === "en" ? "Member profiles" : "成员信息与研究兴趣"));
  if (language === "en") englishLinks = links;
  else assert.deepEqual(links, englishLinks, "Switching language must preserve destinations");
  console.log(
    `PASS (${language}): Vue render, unique IDs, ${links.length} links and anchors, navigation and section order, seminar types, diagram, empty states`,
  );
}
