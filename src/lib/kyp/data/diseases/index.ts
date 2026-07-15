import type { Disease } from "../disease-types";
import { majorDepressiveDisorder } from "./major-depressive-disorder";

/**
 * Disease registry.
 *
 * Add a new disease page by:
 *   1. Creating `./<slug>.ts` exporting a `Disease` object
 *   2. Importing it here and adding to the `diseases` array
 *
 * The route /app/diseases/[slug]/page.tsx reads from this registry.
 */

export const diseases: Disease[] = [majorDepressiveDisorder];

/** Slug → Disease lookup. */
export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}

/** All disease slugs — used by generateStaticParams. */
export function getAllDiseaseSlugs(): string[] {
  return diseases.map((d) => d.slug);
}
