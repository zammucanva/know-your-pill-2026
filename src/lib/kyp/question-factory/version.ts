/**
 * Question Factory versioning.
 *
 * GENERATOR_VERSION identifies the algorithm (planner, distractor engine,
 * fingerprinting, validation). Bump it whenever generation rules change in
 * a way that could alter which questions a given seed produces.
 *
 * TEMPLATE_VERSIONS identifies each template's own wording and construction.
 * Both are stamped onto every generated question and every batch.
 */

export const GENERATOR_VERSION = "1.0.0";

/** Fingerprint scheme version. Bumping it invalidates stored histories on
 *  purpose: old fingerprints would no longer match new ones. */
export const FINGERPRINT_VERSION = 1;

/** Per-template version, filled by the template registry. */
export const TEMPLATE_VERSION = "1";
