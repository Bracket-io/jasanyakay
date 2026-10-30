import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { renderSeo } from "@/lib/seo";

export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const template = document.createElement("template");
    template.innerHTML = renderSeo(pathname);
    document.head.querySelectorAll("[data-seo], title").forEach(node => node.remove());
    document.head.appendChild(template.content);
  }, [pathname]);
  return null;
}

