# Search and sharing

The production build prerenders the public React routes and generates page metadata, JSON-LD, sitemap.xml, robots.txt, and a custom 404. Run `npm run build` and `npm run check:seo` before publishing.

- Edit titles and descriptions in `src/lib/seo.ts`. Public routes in that registry are prerendered and included in the sitemap.
- Add static route rewrites and permanent legacy redirects in `vercel.json` when adding routes.
- The canonical origin defaults to https://www.kayjasanya.com. Set `VITE_SITE_URL` before building if you connect a preferred custom domain. Update redirects and Google Search Console when changing domains.
- The branded sharing image is `public/images/social-card.png` (1200 x 630).
- Extraordinaire remains noindex and excluded from the sitemap. Noindex is not authentication.
- Verify the production site in Google Search Console and submit `/sitemap.xml`. Search engines choose whether and when to index pages; publication does not guarantee rankings.

