/**
 * KYP Patient Guide registry.
 *
 * Registers one patient guide per canonical medication. The `slug` of
 * every guide is validated against the canonical drug registry at build
 * time (assert below), so a guide can never drift from its drug.
 *
 * Adding patient content for a future medication:
 *   1. Create src/lib/kyp/patient/drugs/<slug>.ts exporting a
 *      `PatientGuide` (see any existing file for the pattern).
 *   2. Import it here and add it to `patientGuides`.
 *   3. Done — every drug page automatically renders it in Patient mode.
 *
 * The same shape extends to diseases and substances later: a sibling
 * registry keyed by slug with the same explicit association.
 */

import { drugs } from "../data/drugs/index";
import type { Drug } from "../data/types";
import type { PatientGuide } from "./types";

import { sertralinePatientGuide } from "./drugs/sertraline";
import { fluoxetinePatientGuide } from "./drugs/fluoxetine";
import { escitalopramPatientGuide } from "./drugs/escitalopram";
import { paroxetinePatientGuide } from "./drugs/paroxetine";
import { citalopramPatientGuide } from "./drugs/citalopram";
import { fluvoxaminePatientGuide } from "./drugs/fluvoxamine";
import { venlafaxinePatientGuide } from "./drugs/venlafaxine";
import { duloxetinePatientGuide } from "./drugs/duloxetine";
import { bupropionPatientGuide } from "./drugs/bupropion";
import { mirtazapinePatientGuide } from "./drugs/mirtazapine";
import { amitriptylinePatientGuide } from "./drugs/amitriptyline";
import { clomipraminePatientGuide } from "./drugs/clomipramine";

/** All patient guides, keyed by canonical drug slug. */
export const patientGuides: Record<string, PatientGuide> = {
  sertraline: sertralinePatientGuide,
  fluoxetine: fluoxetinePatientGuide,
  escitalopram: escitalopramPatientGuide,
  paroxetine: paroxetinePatientGuide,
  citalopram: citalopramPatientGuide,
  fluvoxamine: fluvoxaminePatientGuide,
  venlafaxine: venlafaxinePatientGuide,
  duloxetine: duloxetinePatientGuide,
  bupropion: bupropionPatientGuide,
  mirtazapine: mirtazapinePatientGuide,
  amitriptyline: amitriptylinePatientGuide,
  clomipramine: clomipraminePatientGuide,
};

/** Canonical drugs by slug — the source of truth this layer serves. */
const canonicalDrugsBySlug = new Map<string, Drug>(drugs.map((d) => [d.slug, d]));

/**
 * Build-time integrity assertion: every guide must reference a real
 * canonical drug, and no canonical drug may silently lose its guide.
 * (12 medications → 12 guides.)
 */
function validateRegistry(): void {
  const guideSlugs = Object.keys(patientGuides).sort();
  const drugSlugs = drugs.map((d) => d.slug).sort();

  for (const slug of guideSlugs) {
    if (!canonicalDrugsBySlug.has(slug)) {
      throw new Error(
        `[patient] Guide "${slug}" does not match any canonical drug slug. ` +
          "Patient guides must reference the canonical registry."
      );
    }
  }

  const missing = drugSlugs.filter(
    (slug) => !patientGuides[slug]
  );
  if (missing.length > 0) {
    throw new Error(
      `[patient] Canonical drugs missing a patient guide: ${missing.join(", ")}. ` +
        "Every medication must provide the Patient Mode layer."
    );
  }

  if (guideSlugs.length !== drugSlugs.length) {
    throw new Error("[patient] Guide registry size does not match the canonical drug count.");
  }
}

validateRegistry();

/** Look up the patient guide for a canonical drug slug. */
export function getPatientGuide(slug: string): PatientGuide | undefined {
  return patientGuides[slug];
}

export type { PatientGuide } from "./types";
