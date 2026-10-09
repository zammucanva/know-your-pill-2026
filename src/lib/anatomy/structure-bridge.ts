/**
 * Structure bridge — connects the KYP knowledge layer (structure IDs such
 * as "frontal-lobe" used by drugs / disorders / pathways) to the real
 * BodyParts3D atlas concepts and their selectable element part IDs.
 *
 * Two directions:
 *
 *  1. matchKypStructure(atlasConceptName) → AnatomicalStructure | undefined
 *     Used by the inspector to enrich a clicked 3D part with KYP data.
 *
 *  2. resolveStructureToPartId(structureId, atlas) → partId | null
 *     Used by the knowledge browser to fly the camera to a structure that
 *     a drug or disorder references.
 *
 * Matching honours the KYP normalization layer (ventricular renames) and
 * falls back to brain-registry groups for regions the atlas represents as
 * collections of finer concepts (lobes → gyri, basal ganglia → nuclei).
 */
import { brainStructureGroups } from "./brain-registry";
import { getStructureById } from "./structures";
import { getNormalizationOverride } from "./kyp-normalization";
import type { BP3DConcept } from "@/lib/hooks/use-anatomy-model";

/** Minimal atlas shape this module needs (structurally compatible with the
 *  full atlas from use-atlas-data). */
export interface AtlasLike {
  concepts: BP3DConcept[];
}

/**
 * KYP structure ID → brain-registry group. Used when the atlas has no
 * concept whose name matches the structure — the group's first real
 * concept becomes the selection target (e.g. "frontal-lobe" → the first
 * frontal gyrus, since BP3D models lobes as collections of gyri).
 */
const STRUCTURE_TO_BRAIN_GROUP: Record<string, string> = {
  "frontal-lobe": "frontal-cortex",
  "prefrontal-cortex": "frontal-cortex",
  "parietal-lobe": "parietal-cortex",
  "temporal-lobe": "temporal-cortex",
  "occipital-lobe": "occipital-cortex",
  "basal-ganglia": "basal-ganglia",
  "limbic-system": "limbic-system",
  "cerebrum": "other-cortex",
  "brain": "other-brain",
};

/**
 * Match a BodyParts3D concept name to one of our pre-defined KYP structures.
 * Case-insensitive, matches by name (e.g. "Hippocampus" → our "hippocampus").
 */
export function matchKypStructure(name: string) {
  const lower = name.toLowerCase().trim();

  // Strip "left" / "right" / "left side of" / "right side of" prefixes
  const stripped = lower
    .replace(/^(left|right)\s+(?:side\s+of\s+)?/, "")
    .replace(/^(left|right)\s+/, "")
    .trim();

  // Direct name match (original + stripped)
  for (const candidate of [lower, stripped]) {
    const byName = getStructureById(candidate.replace(/\s+/g, "-"));
    if (byName) return byName;
  }

  // Try common variations
  // NOTE: substantia-nigra, ventral-tegmental-area, and nucleus-accumbens
  // are intentionally absent from this map. BodyParts3D does not provide
  // meshes for them, so they must never be matched to a selectable 3D
  // structure. They remain available as conceptual references in the
  // pathway / disorder / drug data layer.
  const variations: Record<string, string> = {
    "brain": "brain",
    "cerebrum": "cerebrum",
    "frontal lobe": "frontal-lobe",
    "parietal lobe": "parietal-lobe",
    "temporal lobe": "temporal-lobe",
    "occipital lobe": "occipital-lobe",
    "cerebellum": "cerebellum",
    "brainstem": "brainstem",
    "brain stem": "brainstem",
    "thalamus": "thalamus",
    "hypothalamus": "hypothalamus",
    "hippocampus": "hippocampus",
    "amygdala": "amygdala",
    "basal ganglia": "basal-ganglia",
    "spinal cord": "spinal-cord",
    "skull": "skull",
    "vertebral column": "vertebral-column",
    "spine": "vertebral-column",
    "rib cage": "rib-cage",
    "thorax": "rib-cage",
    "heart": "heart",
    "lungs": "lungs",
    "lung": "lungs",
    "liver": "liver",
  };

  for (const candidate of [lower, stripped]) {
    const structureId = variations[candidate];
    if (structureId) {
      return getStructureById(structureId);
    }
  }

  return undefined;
}

/**
 * Resolve a KYP structure ID to a selectable BodyParts3D element part ID.
 *
 * Resolution order:
 *  1. Exact concept-name match (honouring KYP normalization overrides)
 *  2. Laterality variants — "right hippocampus" / "left hippocampus"
 *  3. Brain-registry group fallback — lobes resolve to their first gyrus
 *
 * Returns null when no real mesh exists (e.g. substantia-nigra) — callers
 * surface a "conceptual reference" notice instead of silently failing.
 */
export function resolveStructureToPartId(
  structureId: string,
  atlas: AtlasLike | null | undefined
): string | null {
  if (!atlas) return null;
  const structure = getStructureById(structureId);
  if (!structure) return null;
  const name = structure.name.toLowerCase();

  // 1. Exact concept-name match (with normalization overrides)
  const exact = atlas.concepts.find((c) => {
    const override = getNormalizationOverride(c.id);
    return (override?.kypName ?? c.name).toLowerCase() === name;
  });
  if (exact && exact.elements.length > 0) return exact.elements[0];

  // 2. Laterality variants
  const variant = atlas.concepts.find((c) => {
    const n = c.name.toLowerCase();
    return n === `right ${name}` || n === `left ${name}`;
  });
  if (variant && variant.elements.length > 0) return variant.elements[0];

  // 3. Brain-registry group fallback
  const groupId = STRUCTURE_TO_BRAIN_GROUP[structureId];
  if (groupId) {
    const group = brainStructureGroups.find((g) => g.id === groupId);
    if (group) {
      const concept = atlas.concepts.find((c) =>
        group.conceptIds.includes(c.id)
      );
      if (concept && concept.elements.length > 0) return concept.elements[0];
    }
  }

  return null;
}
