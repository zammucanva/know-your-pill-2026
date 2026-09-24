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
 * Build-time integrity assertion.
 *
 *  1. Every guide must reference a real canonical drug (a guide can
 *     never drift from the registry).
 *  2. Guides are OPTIONAL per medication: the hand-authored Patient
 *     Mode layer currently covers the original twelve antidepressants
 *     and rolls out progressively — the 131 Stahl's medications
 *     (Phase 3/4) render the canonical patient-facing fields
 *     (patientMode, patientExplanation, FAQs) until a guide exists.
 *     The drug page is designed for `patientGuide === undefined`
 *     (hero/quick-facts degrade to canonical content), so absence is
 *     a supported state, not an error.
 *  3. The registry may never contain a slug that is not a canonical
 *     drug, and the count may never exceed the canonical registry.
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

  if (guideSlugs.length > drugSlugs.length) {
    throw new Error(
      "[patient] Guide registry is larger than the canonical drug registry — " +
        "impossible state, check for duplicate guide keys."
    );
  }
}

validateRegistry();

/** Look up the patient guide for a canonical drug slug. */
export function getPatientGuide(slug: string): PatientGuide | undefined {
  return patientGuides[slug];
}

export type { PatientGuide } from "./types";
