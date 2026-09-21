import "server-only";

import { drugs, getDrugBySlug } from "./drugs";
import { diseases, getDiseaseBySlug } from "./diseases";
import { substancePages, getSubstancePage } from "./substances";

export const KYP_CONTENT_TYPES = ["drug", "substance", "disease"] as const;
export type KypContentType = (typeof KYP_CONTENT_TYPES)[number];

export interface CanonicalContentReference {
  type: KypContentType;
  slug: string;
  title: string;
  href: string;
}

function normalizeSlug(type: KypContentType, slug: string): string {
  const value = slug.trim().replace(/^\//, "");
  const prefixes: Record<KypContentType, string[]> = {
    drug: ["medication-"],
    substance: ["substance-"],
    disease: ["disease-"],
  };
  for (const prefix of prefixes[type]) {
    if (value.startsWith(prefix)) return value.slice(prefix.length);
  }
  return value;
}

/**
 * Canonical server-side resolver for user-persisted KYP content references.
 * Client-provided titles are intentionally ignored; the registry is authoritative.
 */
export function resolveContent(
  type: KypContentType,
  requestedSlug: string
): CanonicalContentReference | null {
  const slug = normalizeSlug(type, requestedSlug);
  if (!slug || slug.length > 160) return null;

  if (type === "drug") {
    const item = getDrugBySlug(slug);
    return item
      ? { type, slug: item.slug, title: item.genericName, href: `/drugs/${item.slug}` }
      : null;
  }

  if (type === "substance") {
    const item = getSubstancePage(slug);
    return item
      ? { type, slug: item.slug, title: item.disorderName, href: `/substances/${item.slug}` }
      : null;
  }

  const item = getDiseaseBySlug(slug);
  return item
    ? { type, slug: item.slug, title: item.name, href: `/diseases/${item.slug}` }
    : null;
}

export function isKypContentType(value: unknown): value is KypContentType {
  return typeof value === "string" && KYP_CONTENT_TYPES.includes(value as KypContentType);
}

export function getCanonicalContentCounts() {
  return { drugs: drugs.length, substances: substancePages.length, diseases: diseases.length };
}
