import { describe, it, expect } from "bun:test";
import {
  computeExplodeOffsets, computeBrainExplodeOffsets, computeVisibleCenter,
  boundsCenter, isFiniteOffset, MAX_DISPLACEMENT,
  EXPLODE_LAYOUT, FALLBACK_LAYOUT, MUSCLE_GROUP_EXPLODE, classifyMusclePart,
  type ExplodableSystem,
} from "@/lib/anatomy/explode";

const ALL_SYSTEMS: ExplodableSystem[] = [
  { id: "skeletal",      bounds: { min: [-0.32, 0.01, -0.12] as [number,number,number], max: [0.32, 1.71, 0.14] as [number,number,number] }, visible: true },
  { id: "nervous",       bounds: { min: [-0.07, 1.54, -0.11] as [number,number,number], max: [0.07, 1.71, 0.09] as [number,number,number] }, visible: true },
  { id: "muscular",      bounds: { min: [-0.32, 0.01, -0.13] as [number,number,number], max: [0.32, 1.62, 0.13] as [number,number,number] }, visible: true },
  { id: "cardiac",       bounds: { min: [-0.04, 1.25, -0.08] as [number,number,number], max: [0.08, 1.66, 0.08] as [number,number,number] }, visible: true },
  { id: "respiratory",   bounds: { min: [-0.12, 1.20, -0.08] as [number,number,number], max: [0.12, 1.59, 0.11] as [number,number,number] }, visible: true },
  { id: "digestive",     bounds: { min: [-0.13, 0.84, -0.09] as [number,number,number], max: [0.12, 1.55, 0.10] as [number,number,number] }, visible: true },
  { id: "urinary",       bounds: { min: [-0.09, 0.79, -0.04] as [number,number,number], max: [0.09, 1.17, 0.08] as [number,number,number] }, visible: true },
  { id: "arterial",      bounds: { min: [-0.32, 0.01, -0.11] as [number,number,number], max: [0.32, 1.71, 0.14] as [number,number,number] }, visible: true },
  { id: "venous",        bounds: { min: [-0.32, 0.00, -0.12] as [number,number,number], max: [0.32, 1.46, 0.14] as [number,number,number] }, visible: true },
  { id: "lymphatic",     bounds: { min: [-0.03, 1.13, -0.05] as [number,number,number], max: [0.11, 1.41, 0.06] as [number,number,number] }, visible: true },
  { id: "endocrine",     bounds: { min: [-0.06, 1.12, -0.04] as [number,number,number], max: [0.08, 1.63, 0.01] as [number,number,number] }, visible: true },
  { id: "reproductive",  bounds: { min: [-0.08, 0.77, -0.05] as [number,number,number], max: [0.10, 0.94, 0.10] as [number,number,number] }, visible: true },
  { id: "integumentary", bounds: { min: [-0.33, 0.00, -0.15] as [number,number,number], max: [0.33, 1.73, 0.15] as [number,number,number] }, visible: true },
  { id: "sensory",       bounds: { min: [-0.27, 0.86, -0.04] as [number,number,number], max: [0.27, 1.65, 0.07] as [number,number,number] }, visible: true },
  { id: "connective",    bounds: { min: [-0.25, 0.02, -0.08] as [number,number,number], max: [0.25, 1.61, 0.11] as [number,number,number] }, visible: true },
];

describe("System-level explode", () => {
  it("explode 0 = exact original", () => {
    for (const o of computeExplodeOffsets(ALL_SYSTEMS, 0)) expect(o.offset).toEqual([0, 0, 0]);
  });
  it("explode 0.5 produces half offsets", () => {
    const full = computeExplodeOffsets(ALL_SYSTEMS, 1);
    const half = computeExplodeOffsets(ALL_SYSTEMS, 0.5);
    for (let i = 0; i < full.length; i++) {
      expect(half[i].offset[0]).toBeCloseTo(full[i].offset[0] * 0.5, 5);
    }
  });
  it("muscular system offset is ZERO (per-part handles it)", () => {
    const r = computeExplodeOffsets(ALL_SYSTEMS, 1);
    const m = r.find(o => o.systemId === "muscular")!;
    expect(m.offset).toEqual([0, 0, 0]);
  });
  it("nervous system is pinned at origin", () => {
    expect(EXPLODE_LAYOUT["nervous"].distance).toBe(0);
  });
  it("no cumulative drift", () => {
    expect(computeExplodeOffsets(ALL_SYSTEMS, 0.5)).toEqual(computeExplodeOffsets(ALL_SYSTEMS, 0.5));
  });
  it("reset restores exact original", () => {
    for (const o of computeExplodeOffsets(ALL_SYSTEMS, 0)) expect(o.offset).toEqual([0, 0, 0]);
  });
  it("hidden systems get zero offset", () => {
    const r = computeExplodeOffsets(ALL_SYSTEMS.map(s => s.id === "cardiac" ? {...s, visible: false} : s), 1);
    expect(r.find(o => o.systemId === "cardiac")!.offset).toEqual([0, 0, 0]);
  });
  it("no system exceeds MAX_DISPLACEMENT", () => {
    for (const o of computeExplodeOffsets(ALL_SYSTEMS, 1)) {
      expect(Math.hypot(...o.offset)).toBeLessThanOrEqual(MAX_DISPLACEMENT + 1e-10);
    }
  });
  it("all 15 BP3D system IDs have layout entries", () => {
    const ids = ["skeletal","muscular","nervous","cardiac","sensory","arterial","venous","respiratory","digestive","urinary","lymphatic","endocrine","reproductive","integumentary","connective"];
    for (const id of ids) expect(EXPLODE_LAYOUT[id]).toBeDefined();
  });
  it("unknown system falls back safely", () => {
    const r = computeExplodeOffsets([{id:"unknown", bounds:{min:[0,0,0] as [number,number,number], max:[1,1,1] as [number,number,number]}, visible:true}], 1);
    expect(Math.hypot(...r[0].offset)).toBeLessThan(0.1);
  });
  it("all offsets are finite", () => {
    for (const o of computeExplodeOffsets(ALL_SYSTEMS, 1)) expect(isFiniteOffset(o.offset)).toBe(true);
  });
});

describe("Brain Mode explode", () => {
  it("uses brain layout (nervous moves +Z)", () => {
    const r = computeBrainExplodeOffsets(ALL_SYSTEMS, 1);
    const n = r.find(o => o.systemId === "nervous")!;
    expect(n.offset[2]).toBeGreaterThan(0);
  });
});

describe("Muscle per-part classification", () => {
  it("all 13 muscle groups are defined", () => {
    const groups = Object.keys(MUSCLE_GROUP_EXPLODE);
    expect(groups.length).toBe(13);
    expect(groups).toContain("anterior_thoracic");
    expect(groups).toContain("posterior_thoracic");
    expect(groups).toContain("diaphragm");
    expect(groups).toContain("deep_thoracic");
  });
  it("deep_thoracic has zero displacement", () => {
    expect(MUSCLE_GROUP_EXPLODE["deep_thoracic"].distance).toBe(0);
  });
  it("classifyMusclePart assigns diaphragm correctly", () => {
    const part = { bounds: [[-0.1, 1.1, -0.05], [0.1, 1.2, 0.05]] as [number[], number[]], conceptId: "FMA13295" };
    const config = classifyMusclePart(part, "diaphragm");
    expect(config).toBe(MUSCLE_GROUP_EXPLODE["diaphragm"]);
  });
  it("classifyMusclePart assigns papillary to deep_thoracic", () => {
    const part = { bounds: [[0, 1.2, 0], [0.05, 1.3, 0.05]] as [number[], number[]], conceptId: "FMA7260" };
    const config = classifyMusclePart(part, "anterior papillary muscle of right ventricle");
    expect(config).toBe(MUSCLE_GROUP_EXPLODE["deep_thoracic"]);
  });
  it("classifyMusclePart pushes head and neck muscles up and outwards, a short way", () => {
    const part = { bounds: [[0.05, 1.55, 0], [0.15, 1.65, 0.1]] as [number[], number[]], conceptId: "ZA-x" };
    const config = classifyMusclePart(part, "some neck muscle");
    expect(config.distance).toBe(0.08);
    expect(config.direction[1]).toBeGreaterThan(0);
  });
  it("classifyMusclePart spreads a lateral muscle outwards along its own side", () => {
    const left = classifyMusclePart({ bounds: [[-0.14, 0.9, 0], [-0.10, 1.0, 0.05]] as [number[], number[]], conceptId: "ZA-x" }, "some lateral muscle");
    const right = classifyMusclePart({ bounds: [[0.10, 0.9, 0], [0.14, 1.0, 0.05]] as [number[], number[]], conceptId: "ZA-x" }, "some lateral muscle");
    expect(left.direction[0]).toBeLessThan(0);
    expect(right.direction[0]).toBeGreaterThan(0);
    expect(left.distance).toBeGreaterThan(0);
    for (const c of [left, right]) expect(Math.hypot(...c.direction)).toBeCloseTo(1, 6);
  });
  it("classifyMusclePart leaves a part on the body axis where it is", () => {
    const config = classifyMusclePart({ bounds: [[-0.01, 1.0, 0.02], [0.01, 1.1, 0.04]] as [number[], number[]], conceptId: "ZA-x" }, "deep muscle");
    expect(config.distance).toBe(0);
  });
});
