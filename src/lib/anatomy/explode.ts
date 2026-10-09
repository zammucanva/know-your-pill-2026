/**
 * Explode calculation — curated anatomical exploded view.
 *
 * SYSTEM-LEVEL EXPLODE (mesh.position) for most systems.
 * PER-PART SHADER EXPLODE for the muscular system (402 parts, 13 groups).
 */

import * as THREE from "three";

export interface Bounds {
  min: [number, number, number];
  max: [number, number, number];
}

export interface ExplodableSystem {
  id: string;
  bounds: Bounds;
  visible: boolean;
}

export interface SystemExplodeResult {
  systemId: string;
  offset: [number, number, number];
}

export interface ExplodeLayoutEntry {
  direction: [number, number, number];
  distance: number;
}

export const MAX_DISPLACEMENT = 0.30;
export const DEFAULT_EXPLODE_DISTANCE = 0.3;

/**
 * Curated full-body explode layout.
 *
 * ANATOMICAL LAYER MODEL:
 *   OUTER (peel away): integumentary, muscular (per-part), connective
 *   STRUCTURAL (central): skeletal, nervous
 *   THORACIC (modest): cardiac, respiratory, arterial, venous
 *   ABDOMINAL (modest): digestive, urinary, lymphatic
 *   PELVIC (modest): reproductive
 *   DEEP (stay): sensory, endocrine
 *
 * Muscular distance=0 because per-part shader handles it.
 * Nervous distance=0 because it contains the brain.
 */
export const EXPLODE_LAYOUT: Record<string, ExplodeLayoutEntry> = {
  skeletal:       { direction: [0, 0, 0],  distance: 0.00 }, // the frame stays put
  nervous:        { direction: [0, 0, 0],  distance: 0.00 },
  muscular:       { direction: [0, 0, 0],  distance: 0.00 }, // per-part shader
  integumentary:  { direction: [0, 0, 0],  distance: 0.00 },
  connective:     { direction: [0, 0, 0],  distance: 0.00 }, // small loose fragments, moving them just scatters shards
  cardiac:        { direction: [-1, 0, 0], distance: 0.06 },
  respiratory:    { direction: [0, 0, 1],  distance: 0.05 },
  arterial:       { direction: [1, 0, 0],  distance: 0.08 },
  venous:         { direction: [-0.7071, 0.7071, 0], distance: 0.07 },
  digestive:      { direction: [0, 0, 1],  distance: 0.04 },
  urinary:        { direction: [0, -0.5, -0.866], distance: 0.04 },
  lymphatic:      { direction: [1, 0, 0],  distance: 0.05 },
  reproductive:   { direction: [0, -1, 0], distance: 0.06 },
  sensory:        { direction: [0, 0, 1],  distance: 0.04 },
  endocrine:      { direction: [0, 0.7071, -0.7071], distance: 0.04 },
};

export const FALLBACK_LAYOUT: ExplodeLayoutEntry = {
  direction: [0, 0, 1],
  distance: 0.05,
};

export const BRAIN_EXPLODE_LAYOUT: Record<string, ExplodeLayoutEntry> = {
  nervous: { direction: [0, 0, 1],  distance: 0.04 },
  cardiac: { direction: [0, 0, -1], distance: 0.04 },
};

// ── Muscle spatial classification (13 groups) ──────────────────────

export interface MuscleGroupConfig {
  direction: [number, number, number];
  distance: number;
}

export const MUSCLE_GROUP_EXPLODE: Record<string, MuscleGroupConfig> = {
  anterior_thoracic:    { direction: [0, 0, 1],   distance: 0.22 },
  posterior_thoracic:    { direction: [0, 0, -1],  distance: 0.22 },
  anterior_abdominal:   { direction: [0, 0, 1],   distance: 0.20 },
  posterior_abdominal:  { direction: [0, 0, -1],  distance: 0.20 },
  left_lateral:          { direction: [-1, 0, 0],  distance: 0.22 },
  right_lateral:         { direction: [1, 0, 0],   distance: 0.22 },
  upper_limb_left:      { direction: [-1, 0, 0],  distance: 0.15 },
  upper_limb_right:     { direction: [1, 0, 0],   distance: 0.15 },
  lower_limb_left:      { direction: [-1, 0, 0],  distance: 0.12 },
  lower_limb_right:     { direction: [1, 0, 0],   distance: 0.12 },
  diaphragm:             { direction: [0, -1, 0],  distance: 0.08 },
  head_neck:              { direction: [0, 0, 1],   distance: 0.10 },
  deep_thoracic:         { direction: [0, 0, 0],   distance: 0.00 },
};

/**
 * Classify a muscle part for the exploded view.
 *
 * Every muscle moves radially away from the body's vertical axis, so the
 * spread reads from ANY camera angle (front, side, top) instead of only along
 * the viewing axis. Lateral travel is weighted up (x * 2.4) so the front view
 * visibly opens like a flower; large, deep or midline muscles move least.
 */
const BODY_AXIS_Z = 0.03;

export function classifyMusclePart(
  part: { bounds: [number[], number[]]; conceptId: string },
  partName: string
): MuscleGroupConfig {
  const cx = (part.bounds[0][0] + part.bounds[1][0]) / 2;
  const cy = (part.bounds[0][1] + part.bounds[1][1]) / 2;
  const cz = (part.bounds[0][2] + part.bounds[1][2]) / 2;
  const name = partName.toLowerCase();

  if (name.includes("diaphragm")) return MUSCLE_GROUP_EXPLODE["diaphragm"];
  if (name.includes("papillary") || name.includes("ventricle"))
    return MUSCLE_GROUP_EXPLODE["deep_thoracic"];

  let dx = cx * 2.4;
  let dy = cy > 1.5 ? 0.5 : 0; // head and neck lift slightly
  let dz = cz - BODY_AXIS_Z;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.03) return MUSCLE_GROUP_EXPLODE["deep_thoracic"]; // on the axis: leave in place
  dx /= len; dy /= len; dz /= len;

  let distance = 0.27;
  if (cy > 1.5) distance = 0.1; // head and neck
  else if (Math.abs(cx) > 0.15) distance = cy > 0.7 ? 0.26 : 0.2; // arms, legs
  return { direction: [dx, dy, dz], distance };
}

// ── System-level explode computation ────────────────────────────────

export function boundsCenter(b: Bounds): THREE.Vector3 {
  return new THREE.Vector3(
    (b.min[0] + b.max[0]) / 2,
    (b.min[1] + b.max[1]) / 2,
    (b.min[2] + b.max[2]) / 2
  );
}

export function computeVisibleCenter(systems: ExplodableSystem[]): THREE.Vector3 | null {
  const visible = systems.filter((s) => s.visible);
  if (visible.length === 0) return null;
  const sum = new THREE.Vector3(0, 0, 0);
  for (const s of visible) sum.add(boundsCenter(s.bounds));
  return sum.multiplyScalar(1 / visible.length);
}

function clampDisplacement(offset: [number, number, number]): [number, number, number] {
  const mag = Math.sqrt(offset[0] ** 2 + offset[1] ** 2 + offset[2] ** 2);
  if (mag <= MAX_DISPLACEMENT) return offset;
  const scale = MAX_DISPLACEMENT / mag;
  return [
    offset[0] * scale + 0,
    offset[1] * scale + 0,
    offset[2] * scale + 0,
  ];
}

export function computeExplodeOffsets(
  systems: ExplodableSystem[],
  explodeLevel: number,
  _explodeDistance: number = DEFAULT_EXPLODE_DISTANCE
): SystemExplodeResult[] {
  const level = Math.max(0, Math.min(1, explodeLevel));
  return systems.map((s) => {
    if (!s.visible) return { systemId: s.id, offset: [0, 0, 0] as [number, number, number] };
    const layout = EXPLODE_LAYOUT[s.id] ?? FALLBACK_LAYOUT;
    const magnitude = layout.distance * level;
    let offset: [number, number, number] = [
      layout.direction[0] * magnitude + 0,
      layout.direction[1] * magnitude + 0,
      layout.direction[2] * magnitude + 0,
    ];
    if (isNaN(offset[0]) || isNaN(offset[1]) || isNaN(offset[2]))
      return { systemId: s.id, offset: [0, 0, 0] as [number, number, number] };
    offset = clampDisplacement(offset);
    return { systemId: s.id, offset };
  });
}

export function computeBrainExplodeOffsets(
  systems: ExplodableSystem[],
  explodeLevel: number
): SystemExplodeResult[] {
  const level = Math.max(0, Math.min(1, explodeLevel));
  return systems.map((s) => {
    if (!s.visible) return { systemId: s.id, offset: [0, 0, 0] as [number, number, number] };
    const layout = BRAIN_EXPLODE_LAYOUT[s.id] ?? FALLBACK_LAYOUT;
    const magnitude = layout.distance * level;
    let offset: [number, number, number] = [
      layout.direction[0] * magnitude + 0,
      layout.direction[1] * magnitude + 0,
      layout.direction[2] * magnitude + 0,
    ];
    if (isNaN(offset[0]) || isNaN(offset[1]) || isNaN(offset[2]))
      return { systemId: s.id, offset: [0, 0, 0] as [number, number, number] };
    offset = clampDisplacement(offset);
    return { systemId: s.id, offset };
  });
}

export function isFiniteOffset(offset: [number, number, number]): boolean {
  return Number.isFinite(offset[0]) && Number.isFinite(offset[1]) && Number.isFinite(offset[2]);
}
