import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { buildModeLenses } from "./build";
import { LENS_ENABLED_SLUGS } from "./specs";
import type { ModeLensSet } from "./types";

export * from "./types";
export { MODE_SPECS, MODE_ORDER, LENS_ENABLED_SLUGS, REVIEW_NOTICE, modeOfBlock } from "./specs";
export { buildModeLens, buildModeLenses, classifyViva, splitViva } from "./build";
export { validateLensSet, readPath } from "./validate";

/** Lenses for a medication enabled for the four-mode slice, else null. */
export function getModeLenses(slug: string): ModeLensSet | null {
  if (!LENS_ENABLED_SLUGS.includes(slug)) return null;
  const drug = drugs.find((d) => d.slug === slug);
  if (!drug) return null;
  return buildModeLenses({
    drug,
    patientGuide: getPatientGuide(slug),
    mcqs: stahlMcqs.filter((q) => q.drugSlug === slug),
  });
}
export * from "./contracts";
export * from "./facts";
export { findContradictions, hoursRanges } from "./consistency";
export type { Contradiction } from "./consistency";
export { validateDrug } from "./registry-report";
export type { DrugValidation } from "./registry-report";
