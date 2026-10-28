import { describe, it, expect } from "bun:test";
import {
  brainStructureGroups,
  brainPresets,
  ALL_BRAIN_CONCEPT_IDS,
  getBrainGroupForConcept,
  brainBounds,
  brainCameraPositions,
} from "@/lib/anatomy/brain-registry";

/**
 * Registry integrity tests for Brain Mode navigation data.
 *
 * brainStructureGroups is the single source of truth for brain grouping —
 * it must only contain groups with real atlas concepts (FMA ids) and no
 * fabricated structures (e.g. substantia nigra is intentionally absent).
 */

const DOCUMENTED_GROUP_IDS = [
  // cortical
  "frontal-cortex",
  "parietal-cortex",
  "temporal-cortex",
  "occipital-cortex",
  "other-cortex",
  // deep brain
  "thalamus",
  "hypothalamus",
  "basal-ganglia",
  "limbic-system",
  "corpus-callosum",
  // white matter
  "white-matter",
  // brainstem + cerebellum
  "brainstem",
  "midbrain",
  "cerebellum",
  // normalized ventricles (cardiac → nervous)
  "ventricular-system",
  // cranial nerves + other
  "cranial-nerves",
];

const DOCUMENTED_PRESET_LABELS = [
  "Whole Brain",
  "Cortex",
  "Deep Brain",
  "Brainstem",
  "Cerebellum",
  "Cranial Nerves",
  "Ventricular System",
];

describe("brain-registry — groups", () => {
  it("defines exactly the documented set of groups", () => {
    expect(brainStructureGroups.map((g) => g.id)).toEqual(DOCUMENTED_GROUP_IDS);
  });

  it("group ids are unique", () => {
    const ids = brainStructureGroups.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("labels and descriptions are non-empty", () => {
    for (const g of brainStructureGroups) {
      expect(g.label.trim().length, `${g.id}.label`).toBeGreaterThan(0);
      expect(g.description.trim().length, `${g.id}.description`).toBeGreaterThan(0);
    }
  });

  it("conceptIds are non-empty arrays of Z-Anatomy ids", () => {
    for (const g of brainStructureGroups) {
      expect(g.conceptIds.length, `${g.id}.conceptIds`).toBeGreaterThan(0);
      for (const id of g.conceptIds) {
        expect(id, `${g.id} concept id "${id}"`).toMatch(/^ZA-[a-z0-9-]+$/);
      }
    }
  });

  it("concept ids are unique within each group", () => {
    for (const g of brainStructureGroups) {
      expect(new Set(g.conceptIds).size, `${g.id} has duplicate concept ids`).toBe(
        g.conceptIds.length
      );
    }
  });

  it("concept ids are unique across groups (each concept lives in exactly one group)", () => {
    // Documented invariant: getBrainGroupForConcept "returns the first
    // matching group (a concept is only ever in one group in the current
    // registry)".
    const all = brainStructureGroups.flatMap((g) => g.conceptIds);
    expect(new Set(all).size).toBe(all.length);
  });
});

describe("brain-registry — presets", () => {
  it("covers the documented preset set", () => {
    expect(brainPresets.map((p) => p.label)).toEqual(DOCUMENTED_PRESET_LABELS);
  });

  it("preset ids are unique and non-empty", () => {
    const ids = brainPresets.map((p) => p.id);
    expect(ids.every((id) => id.trim().length > 0)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("preset labels and descriptions are non-empty", () => {
    for (const p of brainPresets) {
      expect(p.label.trim().length, `${p.id}.label`).toBeGreaterThan(0);
      expect(p.description.trim().length, `${p.id}.description`).toBeGreaterThan(0);
    }
  });

  it("every preset's groupIds reference existing group ids", () => {
    const groupIds = new Set(brainStructureGroups.map((g) => g.id));
    for (const p of brainPresets) {
      expect(p.groupIds.length, `${p.id}.groupIds`).toBeGreaterThan(0);
      for (const gid of p.groupIds) {
        expect(groupIds.has(gid), `${p.id} → group "${gid}"`).toBe(true);
      }
    }
  });

  it("the whole-brain preset includes every group except the cranial nerves", () => {
    const wholeBrain = brainPresets.find((p) => p.id === "whole-brain");
    expect(wholeBrain?.groupIds).toEqual(
      brainStructureGroups.map((g) => g.id).filter((id) => id !== "cranial-nerves")
    );
  });
});

describe("brain-registry — derived exports", () => {
  it("ALL_BRAIN_CONCEPT_IDS is exactly the union of all group conceptIds", () => {
    const union = new Set(brainStructureGroups.flatMap((g) => g.conceptIds));
    expect(ALL_BRAIN_CONCEPT_IDS.size).toBe(union.size);
    for (const id of union) {
      expect(ALL_BRAIN_CONCEPT_IDS.has(id), `"${id}" missing from ALL_BRAIN_CONCEPT_IDS`).toBe(true);
    }
  });

  it("getBrainGroupForConcept returns the owning group and undefined otherwise", () => {
    expect(getBrainGroupForConcept("ZA-left-lateral-ventricle")?.id).toBe("ventricular-system");
    expect(getBrainGroupForConcept("ZA-right-optic-nerve-ii")?.id).toBe("cranial-nerves");
    for (const g of brainStructureGroups) {
      expect(getBrainGroupForConcept(g.conceptIds[0])?.id, g.id).toBe(g.id);
    }
    expect(getBrainGroupForConcept("ZA-not-a-structure")).toBeUndefined();
    expect(getBrainGroupForConcept("")).toBeUndefined();
  });
});

describe("brain-registry — camera framing", () => {
  it("brainBounds has sane numeric bounds", () => {
    const values = [
      ...brainBounds.min,
      ...brainBounds.max,
      ...brainBounds.center,
      ...brainBounds.size,
    ];
    for (const v of values) {
      expect(typeof v).toBe("number");
      expect(Number.isFinite(v)).toBe(true);
    }
    for (let i = 0; i < 3; i++) {
      expect(brainBounds.min[i]).toBeLessThan(brainBounds.max[i]);
    }
  });

  it("brainBounds center lies within the bounds", () => {
    for (let i = 0; i < 3; i++) {
      expect(brainBounds.center[i]).toBeGreaterThanOrEqual(brainBounds.min[i]);
      expect(brainBounds.center[i]).toBeLessThanOrEqual(brainBounds.max[i]);
    }
  });

  it("brainBounds size matches max − min per axis", () => {
    for (let i = 0; i < 3; i++) {
      expect(brainBounds.size[i]).toBeCloseTo(brainBounds.max[i] - brainBounds.min[i], 10);
    }
  });

  it("brainCameraPositions provides finite 3-component positions for the six views", () => {
    expect(Object.keys(brainCameraPositions)).toEqual(
      expect.arrayContaining([
        "anterior",
        "posterior",
        "left",
        "right",
        "superior",
        "inferior",
      ])
    );
    for (const [view, pos] of Object.entries(brainCameraPositions)) {
      expect(pos, `${view} position`).toHaveLength(3);
      for (const v of pos) expect(Number.isFinite(v), `${view} component`).toBe(true);
    }
  });
});
