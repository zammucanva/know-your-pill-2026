/**
 * /sitemap.xml — the site sitemap, derived from the canonical registry.
 *
 * IMPORTANT — this file is sitemap.tsx (not sitemap.ts) on purpose:
 * the GitHub Pages static-export build runs with
 * pageExtensions: ["tsx", "jsx"] (see next.config.ts), which excludes
 * .ts files from route collection — app/sitemap.ts would silently NOT
 * be emitted in the exported site. The .tsx extension is collected in
 * both build modes (standalone + GitHub Pages export) and normalizes
 * to the same /sitemap.xml route.
 *
 * Route coverage (real, built routes only — never fabricated URLs):
 *   - / (homepage)
 *   - /drugs (Medication Library)
 *   - /drugs/class/{classId} — every taxonomy class (derived from the
 *     registry, currently 40)
 *   - /drugs/{slug} — every canonical medication (currently 143)
 *   - /substances/{slug} — every migrated substance page (currently 3)
 *   - /diseases/{slug} — every disease module (currently 1)
 *   - public learning/practice pages: /learn, /medicine, /study,
 *     /study/mistakes, /study/review, /study/analytics, /quiz,
 *     /quiz/custom, /compare, /compare/classes, /interactions
 *   - /legal/terms (the reuse-terms page linked from every footer)
 *
 * Deliberately excluded: auth/app pages (/welcome, /enter, /reset,
 * /dashboard) and API routes — not indexable content.
 *
 * lastModified uses canonical clinical review dates only
 * (drug.lastReviewed; class pages take the latest review among member
 * medications) so the sitemap is byte-stable across rebuilds. Static
 * app pages omit lastModified rather than stamping build time.
 *
 * URLs are absolute via absoluteUrl() — the sitemap protocol requires
 * absolute URLs, and they share the single canonical site origin with
 * the JSON-LD and canonical/OG metadata.
 */

import type { MetadataRoute } from "next";
// Barrel imports — the established Next-side convention (matches
// src/app/compare/page.tsx et al.). Never import "@/lib/kyp/data/drugs"
// without the /index suffix: Node-style resolvers prefer the file
// data/drugs.ts (the substances registry) over the drugs/ directory.
import { drugs, drugTaxonomyClasses, diseases, substancePages } from "@/lib/kyp/data";
import { absoluteUrl } from "@/lib/kyp/site-url";

// Required for the GitHub Pages static export ("output: export"):
// Next's metadata-route loader re-exports this segment config onto the
// generated /sitemap.xml route handler, and static export requires
// route handlers to be explicitly static. Harmless in standalone mode
// (the sitemap is pure prerendered data either way).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/drugs") },
  ];

  // Class collection pages — latest member review date
  for (const cls of drugTaxonomyClasses) {
    const lastReviewed = cls.medications
      .map((d) => d.lastReviewed)
      .sort()
      .at(-1);
    entries.push({
      url: absoluteUrl(`/drugs/class/${cls.id}`),
      ...(lastReviewed ? { lastModified: lastReviewed } : {}),
    });
  }

  // Drug pages — canonical clinical review date
  for (const drug of drugs) {
    entries.push({
      url: absoluteUrl(`/drugs/${drug.slug}`),
      lastModified: drug.lastReviewed,
    });
  }

  // Substance + disease pages
  for (const substance of substancePages) {
    entries.push({ url: absoluteUrl(`/substances/${substance.slug}`) });
  }
  for (const disease of diseases) {
    entries.push({ url: absoluteUrl(`/diseases/${disease.slug}`) });
  }

  // Public learning / practice pages (no canonical review date — omit
  // lastModified rather than stamping an unstable build timestamp)
  const appRoutes = [
    "/learn",
    "/medicine",
    "/study",
    "/study/mistakes",
    "/study/review",
    "/study/analytics",
    "/quiz",
    "/quiz/custom",
    "/compare",
    "/compare/classes",
    "/interactions",
    "/legal/terms",
  ];
  for (const route of appRoutes) {
    entries.push({ url: absoluteUrl(route) });
  }

  return entries;
}
