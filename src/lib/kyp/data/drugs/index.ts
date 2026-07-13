import type { Drug } from "../types";
import { sertraline } from "./sertraline";
import { fluoxetine } from "./fluoxetine";
import { escitalopram } from "./escitalopram";
import { paroxetine } from "./paroxetine";

/**
 * Drug registry.
 *
 * Add a new drug page by:
 *   1. Creating `./<slug>.ts` exporting a `Drug` object
 *   2. Importing it here and adding to the `drugs` array
 *
 * The route /app/drugs/[slug]/page.tsx reads from this registry.
 */

export const drugs: Drug[] = [sertraline, fluoxetine, escitalopram, paroxetine];

/** Slug → Drug lookup. Returns undefined if not found. */
export function getDrugBySlug(slug: string): Drug | undefined {
  return drugs.find((d) => d.slug === slug);
}

/** All drug slugs — used by generateStaticParams. */
export function getAllDrugSlugs(): string[] {
  return drugs.map((d) => d.slug);
}

/** Quick metadata for cross-references (e.g., "Related Drugs" on a drug page). */
export function getDrugSummary(slug: string): { name: string; drugClassLabel: string } | undefined {
  const d = getDrugBySlug(slug);
  if (!d) return undefined;
  return { name: d.genericName, drugClassLabel: d.drugClassLabel };
}
