import type { SubstancePage } from "../substance-types";
import { alcohol } from "./alcohol";
import { opioids } from "./opioids";

export const substancePages: SubstancePage[] = [alcohol, opioids];

export function getSubstancePage(slug: string): SubstancePage | undefined {
  return substancePages.find((s) => s.slug === slug);
}

export function getAllSubstanceSlugs(): string[] {
  return substancePages.map((s) => s.slug);
}
