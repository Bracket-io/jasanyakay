import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
assert.ok(urls.length >= 10, "Public sitemap is incomplete");
assert.equal(new Set(urls.map(url => url.href)).size, urls.length);
const titles = new Set();
const descriptions = new Set();
const config = JSON.parse(await readFile("vercel.json", "utf8"));
assert.ok(!config.rewrites.some(rule => rule.source === "/(.*)"), "Catch-all rewrite causes soft 404s");
for (const url of urls) {
  assert.ok(!/extraordinaire|case-studies|building|portfolio/.test(url.pathname), "Noncanonical route in sitemap");
  const file = url.pathname === "/" ? "dist/index.html" : path.join("dist", url.pathname.slice(1), "index.html");
  const html = await readFile(file, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description, "Missing title or description: " + url);
  assert.ok(!titles.has(title), "Duplicate title: " + title);
  assert.ok(!descriptions.has(description), "Duplicate description: " + description);
  titles.add(title); descriptions.add(description);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(html.includes('href="' + url.href + '" data-seo'), "Canonical mismatch: " + url);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "Expected one H1 on " + url);
  assert.ok(html.includes('data-prerendered="true"'), "Missing prerendered content");
  assert.ok(html.includes('content="index, follow, max-image-preview:large"'));
  assert.ok(html.includes("social-card.png"));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json" data-seo>([\s\S]*?)<\/script>/)[1]);
  assert.ok(schema["@graph"].some(item => item["@type"] === "Person" && item.name === "Kay Jasanya"));
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    if (!href || /\.[a-z0-9]+$/i.test(href) || href.startsWith("/extraordinaire")) continue;
    assert.ok(urls.some(url => url.pathname === href) || config.redirects.some(rule => rule.source === href), "Broken internal page link: " + href);
  }
}
const missing = await readFile("dist/404.html", "utf8");
assert.ok(missing.includes("noindex, follow") && missing.includes("Page not found"));
const privatePage = await readFile("dist/extraordinaire/index.html", "utf8");
assert.ok(privatePage.includes("noindex, nofollow"));
const robots = await readFile("dist/robots.txt", "utf8");
assert.ok(robots.includes(urls[0].origin + "/sitemap.xml"));
const image = await readFile("dist/images/social-card.png");
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log("SEO checks passed for " + urls.length + " public pages, internal links, structured data, sitemap, 404, and sharing image.");

