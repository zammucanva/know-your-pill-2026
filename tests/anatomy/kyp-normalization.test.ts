import { describe, it, expect } from "bun:test";
import {
  KYP_NORMALIZATION_OVERRIDES,
  BRAIN_VENTRICLE_CONCEPT_IDS,
  getNormalizationOverride,
  getNormalizedSystem,
  getNormalizedName,
  getBrainGroupForOverride,
  isBrainVentriclePart,
} from "@/lib/anatomy/kyp-normalization";

/**
 * Tests for the curated cardiac → nervous normalization layer.
 *
 * The override set is EXACTLY the six brain CSF chambers BodyParts3D
 * misclassified as cardiac (because of the word "ventricle"); the
 * cardiovascular ventricles must remain cardiac.
 */

/** The documented override set: brain CSF chambers misclassified as cardiac. */
const DOCUMENTED_OVERRIDE_IDS = [
  "FMA78448", // lateral ventricle
  "FMA78449", // right lateral ventricle
  "FMA78450", // left lateral ventricle
  "FMA78454", // third ventricle
  "FMA78469", // fourth ventricle
  "FMA75351", // interventricular foramen of Monro
];

/** Heart ventricles that MUST stay cardiac (never overridden). */
const HEART_VENTRICLE_IDS = ["FMA7101", "FMA7098", "FMA9291", "FMA9466"];

describe("kyp-normalization — override list", () => {
  it("contains exactly the six documented brain-ventricle overrides", () => {
    expect(KYP_NORMALIZATION_OVERRIDES.map((o) => o.conceptId)).toEqual(
      DOCUMENTED_OVERRIDE_IDS
    );
  });

  it("overrides are complete records: nervous system, ventricular-system group, kypName and reason non-empty", () => {
    for (const o of KYP_NORMALIZATION_OVERRIDES) {
      expect(o.kypSystem, `${o.conceptId}.kypSystem`).toBe("nervous");
      expect(o.brainGroup, `${o.conceptId}.brainGroup`).toBe("ventricular-system");
      expect(o.kypName, `${o.conceptId}.kypName`).toBeDefined();
      expect(o.kypName?.trim().length, `${o.conceptId}.kypName`).toBeGreaterThan(0);
      expect(o.reason.trim().length, `${o.conceptId}.reason`).toBeGreaterThan(0);
    }
  });

  it("heart ventricles are NOT overridden (cardiac → nervous only for the documented set)", () => {
    for (const id of HEART_VENTRICLE_IDS) {
      expect(getNormalizationOverride(id), `${id} must not have an override`).toBeUndefined();
      expect(isBrainVentriclePart(id), `${id} is not a brain ventricle`).toBe(false);
      expect(getNormalizedSystem({ system: "cardiac", conceptId: id })).toBe("cardiac");
    }
  });
});

describe("getNormalizedSystem", () => {
  it("maps every overridden ventricular concept id from cardiac to nervous", () => {
    for (const id of DOCUMENTED_OVERRIDE_IDS) {
      expect(getNormalizedSystem({ system: "cardiac", conceptId: id })).toBe("nervous");
    }
  });

  it("returns the part's system unchanged for non-overridden parts", () => {
    expect(getNormalizedSystem({ system: "skeletal", conceptId: "FMA12345" })).toBe("skeletal");
    expect(getNormalizedSystem({ system: "nervous", conceptId: "FMA72713" })).toBe("nervous");
    expect(getNormalizedSystem({ system: "cardiac", conceptId: "FMA7101" })).toBe("cardiac");
    expect(getNormalizedSystem({ system: "digestive", conceptId: "FMA99999" })).toBe("digestive");
  });

  it("never mutates the input part (read-time mapping only)", () => {
    const part = { system: "cardiac", conceptId: "FMA78448" };
    expect(getNormalizedSystem(part)).toBe("nervous");
    expect(part).toEqual({ system: "cardiac", conceptId: "FMA78448" });
  });
});

describe("getNormalizationOverride", () => {
  it("returns override objects (with kypName) for known concept ids", () => {
    const override = getNormalizationOverride("FMA78448");
    expect(override?.kypName).toBe("Lateral ventricle (brain)");
    expect(override?.kypSystem).toBe("nervous");
    expect(override?.brainGroup).toBe("ventricular-system");

    for (const id of DOCUMENTED_OVERRIDE_IDS) {
      expect(getNormalizationOverride(id)?.kypName, `${id} should have a kypName`).toBeTruthy();
    }
  });

  it("returns undefined for unknown concept ids", () => {
    expect(getNormalizationOverride("FMA00000")).toBeUndefined();
    expect(getNormalizationOverride("")).toBeUndefined();
    expect(getNormalizationOverride("hippocampus")).toBeUndefined();
    expect(getNormalizationOverride("FMA7101")).toBeUndefined();
  });
});

describe("kyp-normalization — derived helpers", () => {
  it("BRAIN_VENTRICLE_CONCEPT_IDS matches the override concept ids", () => {
    expect(BRAIN_VENTRICLE_CONCEPT_IDS.size).toBe(DOCUMENTED_OVERRIDE_IDS.length);
    for (const id of DOCUMENTED_OVERRIDE_IDS) {
      expect(BRAIN_VENTRICLE_CONCEPT_IDS.has(id)).toBe(true);
    }
    for (const id of HEART_VENTRICLE_IDS) {
      expect(BRAIN_VENTRICLE_CONCEPT_IDS.has(id)).toBe(false);
    }
  });

  it("isBrainVentriclePart is true only for the overridden ids", () => {
    for (const id of DOCUMENTED_OVERRIDE_IDS) {
      expect(isBrainVentriclePart(id), `${id} should be a brain ventricle`).toBe(true);
    }
    expect(isBrainVentriclePart("FMA7101")).toBe(false);
    expect(isBrainVentriclePart("FMA72713")).toBe(false);
    expect(isBrainVentriclePart("")).toBe(false);
  });

  it("getNormalizedName applies the override kypName and falls back to the source name", () => {
    expect(getNormalizedName("FMA78448", "lateral ventricle")).toBe("Lateral ventricle (brain)");
    expect(getNormalizedName("FMA75351", "interventricular foramen")).toBe(
      "Interventricular foramen of Monro"
    );
    // Non-overridden concepts (incl. heart ventricles) keep their source name.
    expect(getNormalizedName("FMA7101", "left ventricle of heart")).toBe(
      "left ventricle of heart"
    );
    expect(getNormalizedName("FMA72713", "Hippocampus")).toBe("Hippocampus");
  });

  it("getBrainGroupForOverride returns the ventricular-system group for overrides only", () => {
    for (const id of DOCUMENTED_OVERRIDE_IDS) {
      expect(getBrainGroupForOverride(id)).toBe("ventricular-system");
    }
    expect(getBrainGroupForOverride("FMA7101")).toBeUndefined();
    expect(getBrainGroupForOverride("FMA72713")).toBeUndefined();
  });
});
