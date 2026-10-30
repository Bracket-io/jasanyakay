import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { build } from "vite";
import { pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";
await build({ mode: "production", build: { ssr: "src/entry-server.tsx", outDir: "dist-ssr" } });
{
  const { render, renderSeo, pageMetadata, routeAliases, SITE_URL, escapeHtml } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
  const template = await readFile("dist/index.html", "utf8");
  const redirects = { ...routeAliases };
  for (const route of Object.keys(pageMetadata).filter(route => route.startsWith("/project/"))) {
    redirects[route.replace("/project/", "/case-studies/")] = route;
  }
  const renderDocument = (route, body, prerendered = true) => template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, "<!--seo:start-->\n" + renderSeo(route) + "\n<!--seo:end-->")
    .replace('<div id="root"></div>', '<div id="root"' + (prerendered ? ' data-prerendered="true"' : "") + ">" + body + "</div>");
  for (const route of Object.keys(pageMetadata)) {
    const html = renderDocument(route, render(route));
    if (!html.includes("<h1") || !html.includes('rel="canonical"')) throw new Error("Missing content or SEO for " + route);
    const target = route === "/" ? "dist/index.html" : path.join("dist", route.slice(1), "index.html");
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html);
  }
  await writeFile("dist/404.html", renderDocument("/not-found", render("/not-found")));
  await mkdir("dist/extraordinaire", { recursive: true });
  await writeFile("dist/extraordinaire/index.html", renderDocument("/extraordinaire", "", false));
  const urls = Object.keys(pageMetadata).map(route => "<url><loc>" + escapeHtml(SITE_URL + route) + "</loc></url>");
  await writeFile("dist/sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join("\n") + "\n</urlset>\n");
  await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n\nSitemap: " + SITE_URL + "/sitemap.xml\n");
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  for (const [source, destination] of Object.entries(redirects)) {
    if (!config.redirects?.some(rule => rule.source === source && rule.destination === destination)) throw new Error("Missing host redirect for " + source);
  }
  console.log("Prerendered " + Object.keys(pageMetadata).length + " public pages, sitemap, private shell, and 404.");
}

