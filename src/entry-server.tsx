import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { AppContent } from "./App";
export { getSeo, renderSeo, pageMetadata, routeAliases, SITE_URL, escapeHtml } from "./lib/seo";

export function render(path: string) {
  return renderToString(<StaticRouter location={path}><AppContent /></StaticRouter>);
}

