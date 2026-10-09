/**
 * KYP Anatomy Normalization Layer
 * ================================
 *
 * The raw BodyParts3D dataset classifies a small number of brain structures
 * under the `cardiac` system purely because the word "ventricle" appears in
 * their name. For example:
 *
 *   FMA78448  lateral ventricle       → source system = "cardiac"
 *   FMA78449  right lateral ventricle  → source system = "cardiac"
 *   FMA78450  left lateral ventricle  → source system = "cardiac"
 *   FMA78454  third ventricle          → source system = "cardiac"
 *   FMA78469  fourth ventricle         → source system = "cardiac"
 *   FMA75351  interventricular foramen → source system = "cardiac"
 *
 * Anatomically these are unambiguously brain structures — they are the
 * cerebrospinal-fluid (CSF) chambers of the brain's ventricular system, not
 * chambers of the heart.
 *
 * We MUST NOT globally reclassify every "ventricle" in the source data,
 * because doing so would also pull the cardiovascular ventricles
 * (FMA7101 left ventricle of heart, FMA7098 right ventricle of heart,
 * FMA9291 cavity of right ventricle, FMA9466 cavity of left ventricle, etc.)
 * out of the cardiovascular system and corrupt it.
 *
 * This module therefore provides an EXPLICIT, CURATED override map keyed by
 * specific FMA concept IDs. Each override:
 *   - preserves the raw source `system` field on the part (never mutates it)
 *   - exposes the KYP-corrected classification for Brain Mode + inspector
 *   - is grounded in anatomy (each entry is a known brain CSF chamber)
 *
 * Architecture:
 *
 *   Raw BodyParts3D data (parts[].system)  ← preserved as-is
 *            ↓
 *   KYP anatomy normalization layer        ← this module
 *            ↓
 *   KYP system classification              ← getNormalizedSystem(part)
 *            ↓
 *   Brain Mode / Inspector / Search UI
 *
 * The raw source data is NEVER modified. Normalization is a read-time
 * mapping, not a write-time mutation.
 */

/**
 * A KYP-level anatomical system identifier. This is the same namespace as
 * the raw BodyParts3D `system` field — we extend it only with the value
 * `"nervous"` for parts whose source system is `"cardiac"` but which are
 * anatomically brain structures.
 */
export type KypSystemId = string;

/**
 * A single normalization override. Maps a specific FMA concept ID to its
 * KYP-corrected classification.
 */
export interface KypNormalizationOverride {
  /** FMA concept ID, e.g. "FMA78448" */
  conceptId: string;
  /** KYP-corrected system. Always one of the BodyParts3D system names. */
  kypSystem: KypSystemId;
  /** KYP brain group ID (matches an entry in brain-registry.ts). */
  brainGroup: string;
  /**
   * Optional display-name override. Use only when the source name is
   * ambiguous (e.g. "lateral ventricle" — Brain or Heart?).
   * If omitted, the source name is used as-is.
   */
  kypName?: string;
  /** Anatomy-based justification for this override (for audit trail). */
  reason: string;
}

/**
 * The curated override list.
 *
 * Each entry here is a brain CSF chamber that BodyParts3D placed under
 * `cardiac` because of the word "ventricle". They are unambiguously brain
 * structures, not heart chambers.
 *
 * The cardiovascular ventricles (right ventricle of heart FMA7098, left
 * ventricle of heart FMA7101, cavity of right ventricle FMA9291, cavity of
 * left ventricle FMA9466, etc.) are INTENTIONALLY NOT in this list — they
 * remain correctly classified as cardiovascular / cardiac.
 */
export const KYP_NORMALIZATION_OVERRIDES: KypNormalizationOverride[] = [
  {
    conceptId: "FMA78448",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Lateral ventricle (brain)",
    reason:
      "CSF-filled chamber of the brain's ventricular system. Source " +
      "classified as cardiac due to the word 'ventricle'. Anatomically " +
      "unambiguous — the lateral ventricle is the largest CSF cavity in " +
      "each cerebral hemisphere.",
  },
  {
    conceptId: "FMA78449",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Right lateral ventricle (brain)",
    reason:
      "Right lateral ventricle of the brain. Same misclassification as " +
      "FMA78448 — anatomically a brain CSF chamber, not a heart chamber.",
  },
  {
    conceptId: "FMA78450",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Left lateral ventricle (brain)",
    reason:
      "Left lateral ventricle of the brain. Same misclassification as " +
      "FMA78448 — anatomically a brain CSF chamber, not a heart chamber.",
  },
  {
    conceptId: "FMA78454",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Third ventricle (brain)",
    reason:
      "Midline CSF chamber of the diencephalon, between the two thalami. " +
      "Anatomically part of the brain's ventricular system, not the heart.",
  },
  {
    conceptId: "FMA78469",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Fourth ventricle (brain)",
    reason:
      "CSF chamber between the brainstem and cerebellum. Anatomically part " +
      "of the brain's ventricular system, not the heart.",
  },
  {
    conceptId: "FMA75351",
    kypSystem: "nervous",
    brainGroup: "ventricular-system",
    kypName: "Interventricular foramen of Monro",
    reason:
      "Foramen of Monro — the channel connecting each lateral ventricle " +
      "to the third ventricle. A brain structure, not a heart structure.",
  },
];

// ── Internal lookup indexes (built once, never mutated) ──────────────────

const OVERRIDE_BY_CONCEPT_ID: ReadonlyMap<string, KypNormalizationOverride> = (() => {
  const m = new Map<string, KypNormalizationOverride>();
  for (const o of KYP_NORMALIZATION_OVERRIDES) m.set(o.conceptId, o);
  return m;
})();

/**
 * Set of FMA concept IDs that are brain ventricles misclassified as
 * cardiac in the source. Used by Brain Mode to make these specific parts
 * visible inside the cardiac mesh while keeping every other cardiac part
 * hidden.
 */
export const BRAIN_VENTRICLE_CONCEPT_IDS: ReadonlySet<string> = new Set(
  KYP_NORMALIZATION_OVERRIDES.map((o) => o.conceptId)
);

// ── Public API ───────────────────────────────────────────────────────────

/**
 * Look up the KYP normalization override for a concept ID, if any.
 * Returns `undefined` when no override exists (which is the common case —
 * the source classification is trusted for everything else).
 */
export function getNormalizationOverride(
  conceptId: string
): KypNormalizationOverride | undefined {
  return OVERRIDE_BY_CONCEPT_ID.get(conceptId);
}

/**
 * Return the KYP-corrected system for a given BodyParts3D part.
 *
 * If the part's concept has a normalization override, the override's
 * `kypSystem` is returned. Otherwise the part's raw source `system` is
 * returned unchanged.
 *
 * The raw part object is NEVER mutated — this is a read-only lookup.
 */
export function getNormalizedSystem(part: {
  system: string;
  conceptId: string;
}): KypSystemId {
  const override = OVERRIDE_BY_CONCEPT_ID.get(part.conceptId);
  return override ? override.kypSystem : part.system;
}

/**
 * Return the KYP display name for a concept. Falls back to the source
 * name when no override exists.
 */
export function getNormalizedName(
  conceptId: string,
  sourceName: string
): string {
  const override = OVERRIDE_BY_CONCEPT_ID.get(conceptId);
  return override?.kypName ?? sourceName;
}

/**
 * Return the KYP brain group for a concept ID, if the concept is a brain
 * structure (either via override, or by being natively in the nervous
 * system). Returns `undefined` for non-brain structures.
 *
 * NOTE: this only returns a brain group for the small set of OVERRIDDEN
 * brain ventricles. Native nervous-system concepts get their brain group
 * via the brain-registry's `brainStructureGroups` lookup, not here.
 */
export function getBrainGroupForOverride(
  conceptId: string
): string | undefined {
  return OVERRIDE_BY_CONCEPT_ID.get(conceptId)?.brainGroup;
}

/**
 * Does this part ID belong to a brain ventricle that was misclassified as
 * cardiac in the source? Used by the SystemMesh for the cardiac system to
 * decide whether a cardiac part should be visible during Brain Mode.
 *
 * Returns true only if the part's conceptId is in the override list AND
 * the override targets the nervous system.
 */
export function isBrainVentriclePart(
  conceptId: string
): boolean {
  const override = OVERRIDE_BY_CONCEPT_ID.get(conceptId);
  return !!override && override.kypSystem === "nervous";
}
