/**
 * Brain structure registry.
 *
 * This module is the single source of truth for Brain Mode navigation.
 * It is built from the actual BodyParts3D atlas + the KYP normalization
 * overrides — it does NOT fabricate any structures that don't exist in
 * the source data.
 *
 * Architecture:
 *
 *   Atlas (atlas.json) ─────────────┐
 *   KYP normalization overrides ────┤
 *                                  ↓
 *   Brain structure registry (this file)
 *     - brainStructureGroups (data-driven; only groups with ≥1 real concept)
 *     - brainPresets (views: Whole Brain, Cortex, Deep Brain, …)
 *     - brainBounds (camera framing)
 *
 * Rules enforced:
 *  1. Every conceptId in a group MUST exist in atlas.concepts.
 *     The Brain Mode UI filters out missing concepts at render time, so
 *     the panel never shows an empty group.
 *  2. Brain ventricles (FMA78448 lateral ventricle, FMA78454 third
 *     ventricle, FMA78469 fourth ventricle, etc.) live in the
 *     `ventricular-system` group. They are classified as `cardiac` in the
 *     source but are normalized to `nervous` via the KYP normalization
 *     layer. See kyp-normalization.ts.
 *  3. No group is created that has no real atlas concepts behind it.
 *  4. Substantia nigra is NOT in this registry — BodyParts3D does not
 *     provide a mesh for it. Pathway / disorder content may still
 *     reference it conceptually via the KYP data layer, but it is never
 *     shown as a selectable 3D structure.
 */

export interface BrainStructureGroup {
  id: string;
  label: string;
  /**
   * FMA concept IDs that belong to this group.
   * Every ID MUST exist in atlas.concepts — concepts that don't exist
   * are filtered out at render time, and the group is hidden if no
   * concepts remain.
   */
  conceptIds: string[];
  /** Brief description for the UI */
  description: string;
}

export interface BrainPreset {
  id: string;
  label: string;
  description: string;
  /** Groups to show when this preset is active */
  groupIds: string[];
}

/**
 * Brain structure groups.
 *
 * Each group is a KYP navigation grouping, not a formal anatomical
 * ontology. The grouping reflects how a clinician or student would
 * navigate the brain, not the FMA hierarchy.
 *
 * Named lobes (Frontal Cortex, Temporal Cortex, …) are explicitly
 * navigation groups — they collect actual gyri that exist in the source
 * data, rather than fabricating a single "Frontal Lobe" mesh that the
 * source does not provide.
 */
export const brainStructureGroups: BrainStructureGroup[] = [
  // ── Cortical groups ─────────────────────────────────────────────────
  {
    id: "frontal-cortex",
    label: "Frontal Cortex",
    description: "Frontal gyri — executive function, motor control, language",
    conceptIds: [
      "FMA72653", "FMA72654", "FMA72655", "FMA72656", "FMA72657", "FMA72658",
      "FMA72661", "FMA72662",
    ],
  },
  {
    id: "parietal-cortex",
    label: "Parietal Cortex",
    description: "Parietal gyri — somatosensory processing, spatial orientation",
    conceptIds: [
      "FMA72665", "FMA72666", "FMA72667", "FMA72668", "FMA72669", "FMA72670",
      "FMA72671", "FMA72672",
    ],
  },
  {
    id: "temporal-cortex",
    label: "Temporal Cortex",
    description: "Temporal gyri — auditory processing, memory, language",
    conceptIds: [
      "FMA72685", "FMA72686", "FMA72687", "FMA72688", "FMA72689", "FMA72690",
      "FMA72705", "FMA72706", "FMA72800", "FMA72801", "FMA72804", "FMA72805",
    ],
  },
  {
    id: "occipital-cortex",
    label: "Occipital Cortex",
    description: "Occipital gyri — visual processing",
    conceptIds: ["FMA72975", "FMA72976"],
  },
  {
    id: "other-cortex",
    label: "Other Cortical Structures",
    description: "Cingulate gyrus, insula, orbital gyrus, commissures",
    conceptIds: [
      "FMA72717", "FMA72718", "FMA72977", "FMA72978", "FMA256194",
      "FMA61961", "FMA61970", "FMA62072",
    ],
  },

  // ── Deep brain ──────────────────────────────────────────────────────
  {
    id: "thalamus",
    label: "Thalamus",
    description: "Sensory relay station, motor integration",
    conceptIds: ["FMA258714", "FMA258716"],
  },
  {
    id: "hypothalamus",
    label: "Hypothalamus",
    description: "Hormonal regulation, autonomic control, circadian rhythm",
    conceptIds: ["FMA62008", "FMA74877", "FMA62327"],
  },
  {
    id: "basal-ganglia",
    label: "Basal Ganglia",
    description: "Caudate, putamen, globus pallidus — motor control, reward",
    conceptIds: [
      "FMA72826", "FMA72827", "FMA72828", "FMA72829", "FMA72830", "FMA72831",
    ],
  },
  {
    id: "limbic-system",
    label: "Limbic System",
    description: "Hippocampus, amygdala — memory and emotion",
    conceptIds: [
      "FMA72713", "FMA72714",         // hippocampus (left, right)
      "FMA72832", "FMA72833",         // amygdala (right, left)
    ],
  },
  {
    id: "corpus-callosum",
    label: "Corpus Callosum",
    description: "Connects the two cerebral hemispheres",
    conceptIds: ["FMA86464"],
  },

  // ── White matter ───────────────────────────────────────────────────
  {
    id: "white-matter",
    label: "White Matter",
    description: "White matter of cerebral hemispheres",
    conceptIds: ["FMA260791", "FMA260794"],
  },

  // ── Brainstem + cerebellum ──────────────────────────────────────────
  {
    id: "brainstem",
    label: "Brainstem",
    description: "Medulla, pons — relay, autonomic control, cranial nerves",
    conceptIds: ["FMA62004", "FMA67943"],
  },
  {
    id: "midbrain",
    label: "Midbrain",
    description: "Midbrain and peduncles",
    conceptIds: ["FMA61993", "FMA62394"],
  },
  {
    id: "cerebellum",
    label: "Cerebellum",
    description: "Motor coordination, balance, motor learning",
    conceptIds: ["FMA67944"],
  },

  // ── Ventricular system (NORMALIZED — see kyp-normalization.ts) ──────
  //
  // These concepts are stored in the `cardiac` system in the raw
  // BodyParts3D source (because of the word "ventricle"). They are
  // normalized to the brain's ventricular system via the KYP
  // normalization layer. The Brain Mode renderer makes the corresponding
  // cardiac parts visible via the shader's per-part visibility mask,
  // WITHOUT duplicating geometry and WITHOUT changing the cardiovascular
  // system's classification of the heart's left/right ventricles.
  {
    id: "ventricular-system",
    label: "Ventricular System",
    description:
      "CSF-filled chambers of the brain (lateral, third, fourth ventricles " +
      "and the interventricular foramen). Normalized from cardiac → nervous.",
    conceptIds: [
      "FMA78448", // lateral ventricle (both hemispheres)
      "FMA78449", // right lateral ventricle
      "FMA78450", // left lateral ventricle
      "FMA78454", // third ventricle
      "FMA78469", // fourth ventricle
      "FMA75351", // interventricular foramen of Monro
    ],
  },

  // ── Cranial nerves ──────────────────────────────────────────────────
  {
    id: "cranial-nerves",
    label: "Cranial Nerves",
    description: "Optic, oculomotor, trochlear, and related nerves",
    conceptIds: [
      "FMA50875", "FMA50878", "FMA50881", "FMA50882", "FMA52574", "FMA52575",
      "FMA52576", "FMA52577", "FMA52622", "FMA52623", "FMA52629", "FMA52630",
      "FMA52639", "FMA52640", "FMA52643", "FMA52644", "FMA52656", "FMA52657",
      "FMA52669", "FMA52670", "FMA52673", "FMA52674", "FMA52676", "FMA52677",
      "FMA52698", "FMA52699", "FMA7041", "FMA53549", "FMA53550", "FMA82734",
      "FMA82735", "FMA52715", "FMA52716",
    ],
  },

  // ── Other brain structures ─────────────────────────────────────────
  {
    id: "other-brain",
    label: "Other Brain Structures",
    description: "Colliculi, geniculate bodies, fornix, septum, habenula, etc.",
    conceptIds: [
      "FMA73422", "FMA73423", "FMA73434", "FMA73435", "FMA73461", "FMA73462",
      "FMA73463", "FMA73464", "FMA73413", "FMA73414", "FMA72924", "FMA72925",
      "FMA72906", "FMA72907", "FMA73303", "FMA73304", "FMA73309", "FMA73310",
      "FMA72940", "FMA61974", "FMA62032", "FMA61975", "FMA83740", "FMA61842",
      "FMA62045", "FMA62382", "FMA67936", "FMA83966", "FMA78467", "FMA78497",
    ],
  },
];

/**
 * Brain presets — high-level navigation views.
 *
 * Each preset exposes a curated subset of brain groups. The Brain Mode UI
 * uses presets to focus the camera and limit the visible set of parts.
 *
 * A preset only enables groups that exist in `brainStructureGroups` —
 * there are no "phantom" presets pointing at empty groups.
 */
export const brainPresets: BrainPreset[] = [
  {
    id: "whole-brain",
    label: "Whole Brain",
    description: "All brain structures visible",
    groupIds: brainStructureGroups.map((g) => g.id),
  },
  {
    id: "cortex",
    label: "Cortex",
    description: "Frontal, parietal, temporal, occipital cortical groups + white matter",
    groupIds: [
      "frontal-cortex", "parietal-cortex", "temporal-cortex", "occipital-cortex",
      "other-cortex", "white-matter",
    ],
  },
  {
    id: "deep-brain",
    label: "Deep Brain",
    description: "Thalamus, hypothalamus, basal ganglia, limbic, corpus callosum",
    groupIds: [
      "thalamus", "hypothalamus", "basal-ganglia", "limbic-system", "corpus-callosum",
    ],
  },
  {
    id: "brainstem",
    label: "Brainstem",
    description: "Medulla, pons, midbrain",
    groupIds: ["brainstem", "midbrain"],
  },
  {
    id: "cerebellum",
    label: "Cerebellum",
    description: "Cerebellum",
    groupIds: ["cerebellum"],
  },
  {
    id: "ventricular-system",
    label: "Ventricular System",
    description:
      "CSF chambers of the brain — lateral, third, fourth ventricles, " +
      "interventricular foramen. (Normalized from cardiac → nervous.)",
    groupIds: ["ventricular-system"],
  },
];

/**
 * All concept IDs that the registry considers "brain structures".
 * Used by the Brain Mode search to filter atlas concepts down to brain
 * ones (including the normalized ventricular structures).
 *
 * This set is computed once at module load and is a flat union of every
 * group's conceptIds.
 */
export const ALL_BRAIN_CONCEPT_IDS: ReadonlySet<string> = new Set(
  brainStructureGroups.flatMap((g) => g.conceptIds)
);

/**
 * Look up the brain group a concept belongs to.
 * Returns the first matching group (a concept is only ever in one group
 * in the current registry).
 */
export function getBrainGroupForConcept(
  conceptId: string
): BrainStructureGroup | undefined {
  return brainStructureGroups.find((g) => g.conceptIds.includes(conceptId));
}

// ── Camera framing for Brain Mode ────────────────────────────────────────
//
// These values describe the bounding region the brain occupies in
// BodyParts3D model space. The brain sits roughly at y ∈ [1.52, 1.72]
// (the model uses meters, with the feet at y≈0 and the top of the head
// at y≈1.78). The brain's x and z extents are tighter — roughly ±8cm
// in x and −12cm..+9cm in z.
//
// These are used by the camera rig to frame Brain Mode and by the Brain
// Mode panel to show a small "framing" hint. They do NOT affect what is
// rendered.

export const brainBounds = {
  min: [-0.08, 1.52, -0.12],
  max: [0.08, 1.72, 0.09],
  center: [0, 1.62, -0.01] as [number, number, number],
  size: [0.16, 0.20, 0.21],
};

/**
 * Camera positions for brain-specific views.
 * Closer than the full-body views because the brain is small.
 */
export const brainCameraPositions: Record<string, [number, number, number]> = {
  anterior: [0, 1.62, 0.8],
  posterior: [0, 1.62, -0.8],
  left: [-0.8, 1.62, 0],
  right: [0.8, 1.62, 0],
  superior: [0, 2.5, 0.01],
  inferior: [0, 0.8, 0.01],
};
