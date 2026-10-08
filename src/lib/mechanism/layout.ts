/**
 * KYP Mechanism System — deterministic layered layout engine.
 *
 * Produces the complete geometry of a mechanism graph as a pure function of
 * the definition (same input ⇒ same output, byte-for-byte — no randomness,
 * no time, no DOM measurement). Responsibilities:
 *
 *   1. LAYER ASSIGNMENT — longest-path ranking over forward edges only
 *      (feedback edges are excluded from ranking so a return path never
 *      distorts the causal reading direction).
 *   2. ORDERING — barycentre sweeps (down + up) to minimise edge crossings;
 *      ties broken by declaration order ⇒ deterministic.
 *   3. SPATIAL SEMANTICS — branching spreads siblings across a layer;
 *      convergence is visible because multiple parents attach to one child
 *      with fanned terminal offsets.
 *   4. FEEDBACK — return edges sweep BELOW the flow as clearly visible
 *      curved return paths (v1 defect D-4: the escitalopram autoreceptor
 *      edge was in the data but invisible; v2 gives every return edge a
 *      dedicated swept depth).
 *   5. INTERVENTIONS — agents that are graph nodes get intervention-styled
 *      edges; agents that are NOT graph nodes get floating markers placed
 *      directly above their point of action.
 *   6. COMPARTMENTS — background bands around their member nodes.
 *   7. TIMELINE — stage header chips above the x-range of their nodes.
 *
 * The layout works for left-right (default) reading. Text is measured with
 * a conservative width estimator (worst-case padding, never truncated).
 */

import type {
  MechanismDefinition,
  MechanismEdge,
  MechanismIntervention,
  MechanismNode,
} from "./model";
import { getRelationshipMeta } from "./vocabulary";

/* ============================================================
   Public result types
   ============================================================ */

export interface LaidOutNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  layer: number;
  node: MechanismNode;
  /** Wrapped label lines (deterministic — same estimator as measurement). */
  labelLines: string[];
  /** Wrapped sublabel lines. */
  sublabelLines: string[];
  /** Y offsets where outgoing forward edges attach on the right side. */
  fanOut: number[];
  /** Y offsets where incoming forward edges attach on the left side. */
  fanIn: number[];
}

export interface LaidOutEdge {
  id: string;
  edge: MechanismEdge;
  /** SVG path string. */
  path: string;
  /** Attachment/terminal point (x, y) — where the terminal marker sits. */
  terminalX: number;
  terminalY: number;
  /** Terminal angle in degrees (for orienting markers). */
  terminalAngle: number;
  /** Label chip position (if the edge has a label). */
  labelX?: number;
  labelY?: number;
  labelWidth?: number;
  isFeedback: boolean;
  isIntervention: boolean;
  /** Wrapped label lines (long labels wrap into a multi-line chip). */
  labelLines?: string[];
  /** Chip height (when labelled). */
  labelHeight?: number;
  /** Visual weight tier of the label chip — PURELY a length heuristic
   *  (≤ PRIMARY_TIER_MAX_CHARS renders bold; longer explanatory sentences
   *  render as quieter annotation chips). NEVER a medical classification:
   *  intervention + feedback labels are always primary so the drug action
   *  and return paths stay prominent (mission §12/§13). */
  labelTier?: EdgeLabelTier;
  /** Structural emphasis of the edge line: "primary" = on a longest
   *  forward path, or an intervention, or a feedback return; "context" =
   *  everything else (typically long-range converging side edges). Derived
   *  from graph geometry only (path tightness), not medical salience. */
  emphasis?: "primary" | "context";
}

/** Label tier of an edge chip. Deterministic function of the label only. */
export type EdgeLabelTier = "primary" | "annotation";

/** Rendering metrics per tier — single source of truth for layout AND the
 *  SVG renderer (they must agree byte-for-byte on chip geometry). */
export const EDGE_LABEL_TIER_META: Record<
  EdgeLabelTier,
  { fs: number; weight: number; maxW: number; padX: number; lineH: number; firstBaseline: number; chipPadY: number }
> = {
  // short verb-style labels: the bold, loud tier
  primary: { fs: 12.5, weight: 650, maxW: 168, padX: 8, lineH: 15, firstBaseline: 12, chipPadY: 4 },
  // long explanatory sentences: quiet, compact, still fully readable
  annotation: { fs: 11.5, weight: 500, maxW: 142, padX: 7, lineH: 13.5, firstBaseline: 10.5, chipPadY: 3.5 },
};

/** Labels at or below this character count render in the primary tier. */
export const PRIMARY_TIER_MAX_CHARS = 20;

export interface LaidOutCompartment {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface LaidOutIntervention {
  intervention: MechanismIntervention;
  /** Floating marker geometry (null when the agent is a graph node). */
  marker: { x: number; y: number; w: number; h: number } | null;
  /** Connector path (marker → target), when floating. */
  connectorPath: string | null;
  connectorTerminalX: number;
  connectorTerminalY: number;
}

export interface LaidOutTimelineStage {
  id: string;
  label: string;
  range?: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface MechanismLayout {
  width: number;
  height: number;
  nodes: LaidOutNode[];
  edges: LaidOutEdge[];
  compartments: LaidOutCompartment[];
  interventions: LaidOutIntervention[];
  timeline: LaidOutTimelineStage[];
  /** Filled when something prevented a normal layout (never throws silently). */
  warnings: string[];
}

/* ============================================================
   Tunables (deterministic constants)
   ============================================================ */

const PAD = 28; // outer canvas padding
const LAYER_GAP = 92; // horizontal gap between columns
const NODE_GAP_V = 34; // vertical gap between nodes in a column
const NODE_PADDING_X = 13;
const NODE_PADDING_Y = 10;
const GLYPH_COL = 34; // glyph badge column inside the node
const LABEL_FS = 13; // label font size
const SUBLABEL_FS = 10.5; // sublabel font size
const LABEL_LH = 16.5;
const SUBLABEL_LH = 13.5;
const MAX_TEXT_WIDTH = 190; // wrap threshold inside a node
const MIN_NODE_W = 108;
const MAX_NODE_W = 246;
const FEEDBACK_BASE_DEPTH = 46; // return-edge sweep below the flow
const FEEDBACK_STACK = 52; // extra depth per additional return edge (>= tallest 2-line chip + clearance)
const MARKER_H = 26; // floating intervention marker height
const MARKER_GAP = 12; // gap between stacked markers
const COMPARTMENT_PAD = 12;
const TIMELINE_H = 24;
/* Density polish: a label chip may widen its inter-column corridor only up
 * to a tier cap — beyond that the chip relies on collision-aware placement
 * (it may sit over the neighbouring node columns wherever vertical space is
 * free). This bounds the canvas width explosion dense graphs suffered
 * (MDD was 2452px wide; only ~55% of the causal chain fitted the initial
 * desktop viewport). */
const GAP_LABEL_MARGIN = 40; // breathing room around a chip inside its corridor
const PRIMARY_GAP_CAP = 182;
const ANNOTATION_GAP_CAP = 134;

/* ============================================================
   Conservative text measurement (no DOM)
   ============================================================ */

/** Worst-case average glyph width for the sans stack used in the canvas. */
function textWidth(text: string, fontSize: number, bold = false): number {
  const factor = bold ? 0.68 : 0.6;
  let w = 0;
  for (const ch of text) {
    if (/[iIl.,:;'|!()\[\]]/.test(ch)) w += factor * 0.48 * fontSize;
    else if (/[fjrt\u2013\u2014-]/.test(ch)) w += factor * 0.58 * fontSize;
    else if (/[mwMW]/.test(ch)) w += factor * 1.42 * fontSize;
    else if (ch === " ") w += factor * 0.44 * fontSize;
    else w += factor * fontSize;
  }
  return w;
}

/** Greedy word-wrap returning the list of lines. */
function wrapText(text: string, maxWidth: number, fontSize: number, bold = false): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [""];
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (textWidth(candidate, fontSize, bold) <= maxWidth || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export function measureNode(node: MechanismNode): { w: number; h: number; labelLines: string[]; sublabelLines: string[] } {
  const labelLines = wrapText(node.label, MAX_TEXT_WIDTH - GLYPH_COL, LABEL_FS, true);
  const sublabelLines = node.sublabel ? wrapText(node.sublabel, MAX_TEXT_WIDTH - GLYPH_COL, SUBLABEL_FS, false) : [];
  const textW = Math.max(
    ...labelLines.map((l) => textWidth(l, LABEL_FS, true)),
    ...(sublabelLines.length ? sublabelLines.map((l) => textWidth(l, SUBLABEL_FS, false)) : [0])
  );
  const w = Math.min(MAX_NODE_W, Math.max(MIN_NODE_W, textW + NODE_PADDING_X * 2 + GLYPH_COL));
  let h = NODE_PADDING_Y * 2 + labelLines.length * LABEL_LH;
  if (sublabelLines.length > 0) h += 4 + sublabelLines.length * SUBLABEL_LH;
  return { w, h, labelLines, sublabelLines };
}

/* ============================================================
   Layout
   ============================================================ */

export function layoutMechanism(def: MechanismDefinition): MechanismLayout {
  const warnings: string[] = [];
  const direction = def.visuals?.layout ?? "left-right";
  if (direction === "top-bottom") {
    warnings.push("top-bottom layout requested; falling back to left-right (single reading direction supported)");
  }

  const nodes = def.nodes;
  const edges = (def.edges ?? []).map((e, i) => ({
    ...e,
    id: e.id ?? `e-${e.from}-${e.to}-${i}`,
  }));

  const edgeById = new Map(edges.map((e) => [e.id, e]));
  const forward = edges.filter((e) => getRelationshipMeta(e.relationship)?.shape !== "return");
  const returns = edges.filter((e) => getRelationshipMeta(e.relationship)?.shape === "return");

  /* --- 1. layer assignment (longest path over forward edges) --- */
  const parents = new Map<string, string[]>();
  const children = new Map<string, string[]>();
  for (const n of nodes) {
    parents.set(n.id, []);
    children.set(n.id, []);
  }
  for (const e of forward) {
    children.get(e.from)?.push(e.to);
    parents.get(e.to)?.push(e.from);
  }

  const layer = new Map<string, number>();
  // Kahn topological longest-path: a node is dequeued exactly when all its
  // forward parents have been PROCESSED, so every parent's l+1 contribution
  // is applied before the node propagates. (A "all parents have layers"
  // gate is NOT enough — layers get assigned during propagation.)
  const indeg = new Map<string, number>();
  for (const n of nodes) indeg.set(n.id, (parents.get(n.id) ?? []).length);
  const queue: string[] = nodes.filter((n) => (indeg.get(n.id) ?? 0) === 0).map((n) => n.id);
  for (const id of queue) layer.set(id, 0);
  const processedIds = new Set<string>();
  while (queue.length > 0) {
    const id = queue.shift()!;
    processedIds.add(id);
    const l = layer.get(id) ?? 0;
    for (const child of children.get(id) ?? []) {
      layer.set(child, Math.max(layer.get(child) ?? 0, l + 1));
      const d = (indeg.get(child) ?? 1) - 1;
      indeg.set(child, d);
      if (d === 0) queue.push(child);
    }
  }
  // Any node never processed sits on (or downstream of) a cycle among
  // forward edges — malformed data: fall back to layer 0 and warn.
  for (const n of nodes) {
    if (!processedIds.has(n.id)) {
      layer.set(n.id, layer.get(n.id) ?? 0);
      if (!warnings.includes("cyclic forward edges detected; affected nodes placed at layer 0")) {
        warnings.push("cyclic forward edges detected; affected nodes placed at layer 0");
      }
    }
  }

  const maxLayer = Math.max(0, ...nodes.map((n) => layer.get(n.id) ?? 0));
  const byLayer: MechanismNode[][] = Array.from({ length: maxLayer + 1 }, () => []);
  for (const n of nodes) byLayer[layer.get(n.id) ?? 0].push(n); // declaration order = stable

  /* --- 2. barycentre ordering (2 down sweeps + 2 up sweeps) --- */
  const order = new Map<string, number>(); // node id → index within its layer
  const syncOrder = () => {
    for (const col of byLayer) col.forEach((n, i) => order.set(n.id, i));
  };
  syncOrder();

  const barycentre = (ids: string[]): number => {
    const valid = ids.filter((id) => order.has(id));
    if (valid.length === 0) return 0;
    return valid.reduce((s, id) => s + order.get(id)!, 0) / valid.length;
  };

  for (let sweep = 0; sweep < 2; sweep++) {
    for (let l = 1; l <= maxLayer; l++) {
      byLayer[l] = byLayer[l]
        .map((n, i) => ({ n, key: barycentre(parents.get(n.id) ?? []), i }))
        .sort((a, b) => a.key - b.key || a.i - b.i)
        .map((e) => e.n);
    }
    syncOrder();
    for (let l = maxLayer - 1; l >= 0; l--) {
      byLayer[l] = byLayer[l]
        .map((n, i) => ({ n, key: barycentre(children.get(n.id) ?? []), i }))
        .sort((a, b) => a.key - b.key || a.i - b.i)
        .map((e) => e.n);
    }
    syncOrder();
  }

  /* --- sink-depth (longest distance to a sink over forward edges) ---
   * Used to derive the structural backbone: an edge lies on SOME longest
   * forward path iff it advances the ranking by exactly one layer AND the
   * full route through it reaches the graph's total depth —
   * layer(from) + 1 + sinkDepth(to) === maxLayer. Purely graph-geometric. */
  const sinkDepth = new Map<string, number>();
  const depthMemo = (id: string, guard: Set<string>): number => {
    const memo = sinkDepth.get(id);
    if (memo !== undefined) return memo;
    if (guard.has(id)) return 0; // defensive: forward cycles were already warned
    guard.add(id);
    const kids = children.get(id) ?? [];
    const d = kids.length === 0 ? 0 : Math.max(...kids.map((k) => depthMemo(k, guard))) + 1;
    guard.delete(id);
    sinkDepth.set(id, d);
    return d;
  };
  for (const n of nodes) depthMemo(n.id, new Set());
  const isBackboneEdge = (e: MechanismEdge): boolean =>
    (layer.get(e.from) ?? 0) + 1 === (layer.get(e.to) ?? 0) &&
    (layer.get(e.from) ?? 0) + 1 + (sinkDepth.get(e.to) ?? 0) === maxLayer;

  /* --- 3. geometry: columns then vertical stacks --- */
  const measured = new Map<string, ReturnType<typeof measureNode>>();
  for (const n of nodes) measured.set(n.id, measureNode(n));

  /* Adaptive layer gaps: give each layer boundary the room the widest
   * crossing label needs, CAPPED per tier (see GAP_* constants) — labels
   * wider than their corridor are placed clear of nodes by the collision
   * solver below instead of inflating the canvas width. */
  const wrapEdgeLabel = (label: string, tier: EdgeLabelTier): { lines: string[]; width: number; height: number } => {
    const meta = EDGE_LABEL_TIER_META[tier];
    const lines = wrapText(label, meta.maxW, meta.fs, false);
    const w = Math.max(...lines.map((l) => textWidth(l, meta.fs, false))) + meta.padX * 2;
    return { lines, width: w, height: lines.length * meta.lineH + meta.chipPadY * 2 };
  };
  const interventionIdsForTier = new Set((def.interventions ?? []).map((iv) => iv.id));
  const tierOf = (e: MechanismEdge, isFeedbackEdge: boolean): EdgeLabelTier =>
    isFeedbackEdge || (e.interventionId && interventionIdsForTier.has(e.interventionId))
      ? "primary"
      : (e.label ?? "").length <= PRIMARY_TIER_MAX_CHARS
        ? "primary"
        : "annotation";
  const labelSizeByEdge = new Map<string, { lines: string[]; width: number; height: number; tier: EdgeLabelTier }>();
  for (const e of edges) {
    if (e.label) {
      const isFb = getRelationshipMeta(e.relationship)?.shape === "return";
      const tier = tierOf(e, isFb);
      labelSizeByEdge.set(`${e.from}->${e.to}`, { ...wrapEdgeLabel(e.label, tier), tier });
    }
  }
  // density adaptation: dense graphs get more air (crowding was the top
  // VLM complaint on the 20-edge MDD graph)
  const density = edges.length;
  const baseGap = density > 14 ? LAYER_GAP * 1.18 : density > 8 ? LAYER_GAP * 1.08 : LAYER_GAP;
  const boundaryGap: number[] = new Array(maxLayer + 1).fill(baseGap);
  for (const e of forward) {
    const lab = e.label ? labelSizeByEdge.get(`${e.from}->${e.to}`) : null;
    if (!lab) continue;
    const l = layer.get(e.from) ?? 0;
    const cap = lab.tier === "primary" ? PRIMARY_GAP_CAP : ANNOTATION_GAP_CAP;
    boundaryGap[l] = Math.max(boundaryGap[l], Math.min(lab.width + GAP_LABEL_MARGIN, cap));
  }

  const columnX: number[] = [];
  let x = PAD;
  for (let l = 0; l <= maxLayer; l++) {
    let colW = 0;
    for (const n of byLayer[l]) colW = Math.max(colW, measured.get(n.id)!.w);
    columnX[l] = x;
    x += colW + boundaryGap[l];
  }
  const graphRight = x - (maxLayer >= 0 ? boundaryGap[maxLayer] : LAYER_GAP);

  const laid: LaidOutNode[] = [];
  // intervention marker space above the topmost node of each column
  const markerSpaceByCol: number[] = new Array(maxLayer + 1).fill(0);
  const floatingByTarget = new Map<string, MechanismIntervention[]>();
  const interventionIds = new Set((def.interventions ?? []).map((iv) => iv.id));
  const edgesWithIntervention = edges.filter((e) => e.interventionId && interventionIds.has(e.interventionId));
  const edgeInterventionTargets = new Set(edgesWithIntervention.map((e) => e.to));
  for (const iv of def.interventions ?? []) {
    // floating = no graph edge carries this intervention id
    if (!edgeInterventionTargets.has(iv.targetId) || !edgesWithIntervention.some((e) => e.interventionId === iv.id)) {
      const list = floatingByTarget.get(iv.targetId) ?? [];
      list.push(iv);
      floatingByTarget.set(iv.targetId, list);
    }
  }
  for (const [targetId, list] of floatingByTarget) {
    const l = layer.get(targetId) ?? 0;
    markerSpaceByCol[l] = Math.max(markerSpaceByCol[l], list.length * (MARKER_H + MARKER_GAP) + MARKER_GAP);
  }

  const nodeById = new Map<string, LaidOutNode>();
  let maxStackBottom = PAD;
  const nodeGapV = (def.edges ?? []).length > 14 ? NODE_GAP_V * 1.3 : NODE_GAP_V;
  for (let l = 0; l <= maxLayer; l++) {
    const colNodes = byLayer[l];
    const markerSpace = markerSpaceByCol[l];
    let y = PAD + TIMELINE_H + markerSpace;
    for (const n of colNodes) {
      const m = measured.get(n.id)!;
      const lo: LaidOutNode = {
        id: n.id,
        x: columnX[l],
        y,
        w: m.w,
        h: m.h,
        layer: l,
        node: n,
        labelLines: m.labelLines,
        sublabelLines: m.sublabelLines,
        fanOut: [],
        fanIn: [],
      };
      laid.push(lo);
      nodeById.set(n.id, lo);
      y += m.h + nodeGapV;
    }
    if (colNodes.length > 0) {
      // vertical centring of the column against its parents' barycentre (visual)
      const colBottom = y - NODE_GAP_V;
      maxStackBottom = Math.max(maxStackBottom, colBottom);
    }
  }
  // Column centring: shift each column so its centre aligns with the mean
  // centre of its parents' centres (or the global mean for roots).
  const globalCentre = (() => {
    const centres = laid.map((n) => n.y + n.h / 2);
    if (centres.length === 0) return 0;
    return centres.reduce((a, b) => a + b, 0) / centres.length;
  })();
  for (let l = 0; l <= maxLayer; l++) {
    const col = laid.filter((n) => n.layer === l);
    if (col.length === 0) continue;
    let targetCentre = globalCentre;
    if (l > 0) {
      const parentCentres = col
        .flatMap((n) => parents.get(n.id) ?? [])
        .map((pid) => {
          const p = nodeById.get(pid);
          return p ? p.y + p.h / 2 : null;
        })
        .filter((v): v is number => v !== null);
      if (parentCentres.length > 0) targetCentre = parentCentres.reduce((a, b) => a + b, 0) / parentCentres.length;
    }
    const colCentre = (Math.min(...col.map((n) => n.y)) + Math.max(...col.map((n) => n.y + n.h))) / 2;
    const shift = Math.round(targetCentre - colCentre);
    if (shift !== 0) for (const n of col) n.y += shift;
  }
  // Normalise negative y back into positive space.
  const minY = Math.min(...laid.map((n) => n.y), PAD);
  if (minY < PAD) {
    const lift = PAD - minY;
    for (const n of laid) n.y += lift;
  }
  maxStackBottom = Math.max(...laid.map((n) => n.y + n.h), PAD);

  /* --- 4. fan-in / fan-out attachment offsets --- */
  const outGroups = new Map<string, MechanismEdge[]>();
  const inGroups = new Map<string, MechanismEdge[]>();
  for (const e of forward) {
    if (!outGroups.has(e.from)) outGroups.set(e.from, []);
    outGroups.get(e.from)!.push(e);
    if (!inGroups.has(e.to)) inGroups.set(e.to, []);
    inGroups.get(e.to)!.push(e);
  }
  const spread = (count: number): number[] => {
    if (count <= 1) return [0];
    const step = 11;
    return Array.from({ length: count }, (_, i) => (i - (count - 1) / 2) * step);
  };
  for (const [id, list] of outGroups) {
    const n = nodeById.get(id);
    if (!n) continue;
    n.fanOut = spread(list.length).map((o) => n.y + n.h / 2 + o - n.y); // offsets relative to node top
  }
  for (const [id, list] of inGroups) {
    const n = nodeById.get(id);
    if (!n) continue;
    n.fanIn = spread(list.length).map((o) => n.y + n.h / 2 + o - n.y);
  }

  /* --- 5. edge paths --- */
  const laidEdges: LaidOutEdge[] = [];

  const forwardPath = (from: LaidOutNode, to: LaidOutNode, fromIdx: number, toIdx: number) => {
    const sx = from.x + from.w;
    const sy = from.y + (from.fanOut[fromIdx] ?? from.h / 2);
    const tx = to.x;
    const ty = to.y + (to.fanIn[toIdx] ?? to.h / 2);
    const dx = tx - sx;
    const c = Math.max(36, dx * 0.45);
    const path = `M ${r(sx)} ${r(sy)} C ${r(sx + c)} ${r(sy)}, ${r(tx - c)} ${r(ty)}, ${r(tx)} ${r(ty)}`;
    const bez = (t: number) => {
      const u = 1 - t;
      const bx = u * u * u * sx + 3 * u * u * t * (sx + c) + 3 * u * t * t * (tx - c) + t * t * t * tx;
      const by = u * u * u * sy + 3 * u * u * t * sy + 3 * u * t * t * ty + t * t * t * ty;
      return { x: bx, y: by };
    };
    const mid = bez(0.5);
    const near = bez(0.28);
    const far = bez(0.72);
    const angle = (Math.atan2(ty - (tx - c), tx - c - (sx + c)) * 180) / Math.PI;
    return { path, terminalX: tx, terminalY: ty, terminalAngle: 0, labelX: mid.x, labelY: mid.y, labelNear: near, labelFar: far, approach: angle };
  };

  /** Nudge a label rect off any node it would cover (labels overlapping
   *  node boxes was a VLM-found defect on dense graphs like naloxone). */
  const labelHitsNode = (lx: number, ly: number, w: number, h: number, skip: Set<string>): boolean => {
    const lx1 = lx - w / 2 - 2;
    const lx2 = lx + w / 2 + 2;
    const ly1 = ly - h / 2 - 2;
    const ly2 = ly + h / 2 + 2;
    return laid.some(
      (n) => !skip.has(n.id) && lx1 < n.x + n.w && n.x < lx2 && ly1 < n.y + n.h && n.y < ly2
    );
  };

  /** Full avoidance: try the midpoint, then near/far curve positions, with
   *  vertical nudges at each; if every candidate still hits a node, run a
   *  bounded deterministic vertical SCAN (alternating ±13px steps) for the
   *  first clear corridor — the escape hatch that keeps capped-gap chips
   *  (see GAP_* constants) off the node columns. */
  const avoidNodeCollision = (
    mid: { x: number; y: number },
    near: { x: number; y: number },
    far: { x: number; y: number },
    w: number,
    h: number,
    skip: Set<string>
  ): { x: number; y: number } => {
    const candidates: { x: number; y: number }[] = [mid, near, far];
    for (const c of candidates) {
      let y = c.y;
      for (let attempt = 0; attempt < 5; attempt++) {
        if (!labelHitsNode(c.x, y, w, h, skip)) return { x: c.x, y };
        y += attempt % 2 === 0 ? 30 : -60;
      }
    }
    // deterministic scan: ±13px steps from the midpoint, bounded
    for (let step = 1; step <= 46; step++) {
      for (const dy of step % 2 === 0 ? [step * 13] : [-step * 13]) {
        if (!labelHitsNode(mid.x, mid.y + dy, w, h, skip)) return { x: mid.x, y: mid.y + dy };
      }
    }
    return mid;
  };

  let fanOutCursor = new Map<string, number>();
  let fanInCursor = new Map<string, number>();
  for (const e of forward) {
    const from = nodeById.get(e.from);
    const to = nodeById.get(e.to);
    if (!from || !to) continue;
    const oi = fanOutCursor.get(e.from) ?? 0;
    fanOutCursor.set(e.from, oi + 1);
    const ii = fanInCursor.get(e.to) ?? 0;
    fanInCursor.set(e.to, ii + 1);
    const p = forwardPath(from, to, Math.min(oi, from.fanOut.length - 1), Math.min(ii, to.fanIn.length - 1));
    const lab = e.label ? labelSizeByEdge.get(`${e.from}->${e.to}`) : null;
    const fwdLabelPos = lab
      ? avoidNodeCollision({ x: p.labelX, y: p.labelY }, p.labelNear, p.labelFar, lab.width, lab.height, new Set([e.from, e.to]))
      : null;
    const isIv = Boolean(e.interventionId && interventionIds.has(e.interventionId));
    laidEdges.push({
      id: e.id,
      edge: e,
      path: p.path,
      terminalX: p.terminalX,
      terminalY: p.terminalY,
      terminalAngle: p.terminalAngle,
      labelX: fwdLabelPos?.x ?? p.labelX,
      labelY: fwdLabelPos?.y ?? p.labelY,
      labelWidth: lab?.width,
      labelHeight: lab?.height,
      labelLines: lab?.lines,
      labelTier: lab?.tier,
      isFeedback: false,
      isIntervention: isIv,
      // interventions and the structural backbone stay at full visual
      // weight; remaining long-range/converging side edges recede so the
      // primary causal story dominates dense graphs (geometric rule only)
      emphasis: isIv || isBackboneEdge(e) ? "primary" : "context",
    });
  }

  /* --- 5b. feedback return paths (visible sweeps below the flow) --- */
  const nodeBottom = (id: string) => {
    const n = nodeById.get(id);
    return n ? n.y + n.h : maxStackBottom;
  };
  let feedbackMaxY = 0;
  returns.forEach((e, idx) => {
    const from = nodeById.get(e.from);
    const to = nodeById.get(e.to);
    if (!from || !to) return;
    const sx = from.x + from.w / 2;
    const sy = nodeBottom(e.from);
    /* v2 defects (both reproduced on the pilots, both fixed here):
     *  1. The bezier only reaches ~75% of its control depth, so a sweep
     *     budgeted off maxStackBottom could still cut through nodes between
     *     its endpoints (the escitalopram return crossed the SERT and DRUG
     *     nodes; the MDD cortisol return grazed BDNF and neuroplasticity).
     *  2. Attaching at the TARGET's bottom is impossible when the target's
     *     column has siblings below it — the vertical approach must pass
     *     through them. The arc now re-enters through the target's LEFT
     *     edge (lower third, below the forward fan-in band), approached
     *     horizontally like every other incoming edge.
     * The clearance is SOLVED by iterating the control depth until no
     * sampled arc point sits inside a non-endpoint node. */
    const ax = to.x;
    const ay = to.y + Math.max(14, Math.min(to.h * 0.72, to.h - 12)) - idx * 14;
    const vx = Math.max(6, to.x - 46); // corridor pull-left control
    const bez = (c: number, t: number) => {
      const u = 1 - t;
      return {
        x: u * u * u * sx + 3 * u * u * t * sx + 3 * u * t * t * vx + t * t * t * ax,
        y: u * u * u * sy + 3 * u * u * t * (sy + c) + 3 * u * t * t * (ay + c) + t * t * t * ay,
      };
    };
    const stackOffset = idx * FEEDBACK_STACK;
    let c = Math.max(34, (maxStackBottom + FEEDBACK_BASE_DEPTH + stackOffset - Math.max(sy, ay)) / 0.75);
    let residualCrossings = 0;
    for (let iter = 0; iter < 12; iter++) {
      let needDc = 0;
      residualCrossings = 0;
      for (let i = 1; i < 40; i++) {
        const t = i / 40;
        const p = bez(c, t);
        for (const n of laid) {
          if (n.id === e.from || n.id === e.to) continue;
          if (p.x < n.x - 1 || p.x > n.x + n.w + 1 || p.y < n.y - 1 || p.y > n.y + n.h + 1) continue;
          residualCrossings++;
          // lift needed at this t: dy = 3·u·t·dc (bezier control sensitivity)
          const lift = n.y + n.h + 10 - p.y;
          needDc = Math.max(needDc, lift / Math.max(3 * (1 - t) * t, 0.05));
        }
      }
      if (needDc <= 0) break;
      c += needDc;
    }
    if (residualCrossings > 0) {
      warnings.push(`feedback return "${e.from}->${e.to}" could not fully clear the nodes it passes under (${residualCrossings} sample points)`);
    }
    const path = `M ${r(sx)} ${r(sy)} C ${r(sx)} ${r(sy + c)}, ${r(vx)} ${r(ay + c)}, ${r(ax)} ${r(ay)}`;
    // exact deepest point of the arc (sampled — deterministic, cheap)
    let maxY = -Infinity;
    let maxPt = { x: (sx + ax) / 2, y: (sy + ay) / 2 };
    for (let i = 0; i <= 40; i++) {
      const p = bez(c, i / 40);
      if (p.y > maxY) {
        maxY = p.y;
        maxPt = p;
      }
    }
    const tier = tierOf(e, true);
    const lab = e.label ? wrapEdgeLabel(e.label, tier) : null;
    feedbackMaxY = Math.max(feedbackMaxY, maxY + (lab?.height ?? 17) / 2);
    laidEdges.push({
      id: e.id,
      edge: e,
      path,
      terminalX: ax,
      terminalY: ay,
      terminalAngle: 0, // horizontal re-entry through the target's left edge
      labelX: maxPt.x,
      labelY: maxPt.y,
      labelWidth: lab?.width,
      labelHeight: lab?.height,
      labelLines: lab?.lines,
      labelTier: lab ? tier : undefined,
      isFeedback: true,
      isIntervention: false,
      emphasis: "primary", // feedback return paths never recede (mission §13)
    });
  });

  /* --- 5c. label-vs-label collision post-pass --- *
   * With node overlaps handled, the remaining defect class is two label
   * chips landing on each other (convergence fans). The v2 greedy nudge
   * could OSCILLATE when a chip was trapped between two blockers whose
   * gap was smaller than the chip (reproduced on MDD: "HPA axis" between
   * "excitotoxicity…" and "antagonism → glutamate surge" — every sweep
   * flipped it back). The polish replaces the nudge with a deterministic
   * CLEAR-POSITION SEARCH: small vertical steps away from the blocker,
   * then a horizontal slide along the edge, then a bounded ±13px vertical
   * scan — every candidate must be clear of ALL other chips AND nodes. */
  const rectsOverlap = (
    ax: number, ay: number, aw: number, ah: number,
    bx: number, by: number, bw: number, bh: number
  ) => ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;

  const labelClearOfAll = (
    x: number, y: number, w: number, h: number,
    self: LaidOutEdge, skipNodes: Set<string>
  ): boolean => {
    if (labelHitsNode(x, y, w, h, skipNodes)) return false;
    for (const other of laidEdges) {
      if (other.id === self.id) continue;
      if (!other.labelWidth || other.labelX === undefined || other.labelY === undefined) continue;
      if (Math.abs(x - other.labelX) > 260) continue;
      // shared-anchor pairs keep the wider clearance (see the solver below)
      const sharedAnchor =
        self.edge.from === other.edge.from || self.edge.to === other.edge.to ||
        self.edge.from === other.edge.to || self.edge.to === other.edge.from;
      const pad = sharedAnchor ? 12 : 4;
      if (
        rectsOverlap(
          x - w / 2 - pad, y - h / 2 - pad, w + pad * 2, h + pad * 2,
          other.labelX - other.labelWidth / 2 - pad, other.labelY - (other.labelHeight ?? 17) / 2 - pad, other.labelWidth + pad * 2, (other.labelHeight ?? 17) + pad * 2
        )
      )
        return false;
    }
    return true;
  };

  for (let sweep = 0; sweep < 4; sweep++) {
    let moved = false;
    for (const a of laidEdges) {
      if (!a.labelWidth || a.labelX === undefined || a.labelY === undefined) continue;
      if (a.isFeedback) continue; // return-path labels are position-fixed below the flow; the OTHER chip moves
      const skipNodes = new Set([a.edge.from, a.edge.to]);
      const w = a.labelWidth;
      const h = a.labelHeight ?? 17;
      let ax = a.labelX;
      let ay = a.labelY;
      for (const b of laidEdges) {
        if (b.id === a.id) continue;
        if (!b.labelWidth || b.labelX === undefined || b.labelY === undefined) continue;
        if (Math.abs(ax - b.labelX) > 260) continue;
        // chips feeding the same anchor node (shared from/to) read as one
        // crowded cluster even when technically separated — enforce a wider
        // clearance between them than between unrelated chips
        const sharedAnchor =
          a.edge.from === b.edge.from || a.edge.to === b.edge.to ||
          a.edge.from === b.edge.to || a.edge.to === b.edge.from;
        const pad = sharedAnchor ? 12 : 4;
        if (
          !rectsOverlap(
            ax - w / 2 - pad, ay - h / 2 - pad, w + pad * 2, h + pad * 2,
            b.labelX - b.labelWidth / 2 - pad, b.labelY - (b.labelHeight ?? 17) / 2 - pad, b.labelWidth + pad * 2, (b.labelHeight ?? 17) + pad * 2
          )
        )
          continue;
        // a collides with b — find a clear position (deterministic order):
        let placed = false;
        const dirY = ay >= b.labelY ? 1 : -1;
        for (let k = 1; k <= 3 && !placed; k++) {
          const y = ay + dirY * 14 * k;
          if (labelClearOfAll(ax, y, w, h, a, skipNodes)) {
            ay = y;
            placed = true;
          }
        }
        for (let k = 1; k <= 3 && !placed; k++) {
          const x = ax + (ax >= b.labelX ? 1 : -1) * 26 * k;
          if (labelClearOfAll(x, ay, w, h, a, skipNodes)) {
            ax = x;
            placed = true;
          }
        }
        const originY = ay;
        for (let step = 1; step <= 46 && !placed; step++) {
          for (const dy of step % 2 === 0 ? [step * 13] : [-step * 13]) {
            if (labelClearOfAll(ax, originY + dy, w, h, a, skipNodes)) {
              ay = originY + dy;
              placed = true;
            }
          }
        }
        if (placed) {
          a.labelX = ax;
          a.labelY = ay;
          moved = true;
        }
        // if !placed the violation surfaces in the geometry audit (fail-loud)
      }
    }
    if (!moved) break;
  }

  // actual extent of the sweeps (label chips included) — see 5b
  const flowBottom = Math.max(maxStackBottom, feedbackMaxY > 0 ? feedbackMaxY + 10 : 0);

  /* --- 6. compartments (bands behind their member nodes) --- */
  const laidCompartments: LaidOutCompartment[] = [];
  for (const c of def.compartments ?? []) {
    const members = laid.filter((n) => n.node.compartmentId === c.id);
    if (members.length === 0) {
      warnings.push(`compartment "${c.id}" has no member nodes`);
      continue;
    }
    const minX = Math.min(...members.map((n) => n.x));
    const minY = Math.min(...members.map((n) => n.y));
    const maxX = Math.max(...members.map((n) => n.x + n.w));
    const maxY = Math.max(...members.map((n) => n.y + n.h));
    laidCompartments.push({
      id: c.id,
      label: c.label,
      x: minX - COMPARTMENT_PAD,
      y: minY - COMPARTMENT_PAD,
      w: maxX - minX + COMPARTMENT_PAD * 2,
      h: maxY - minY + COMPARTMENT_PAD * 2,
    });
  }
  // compartment label space above the band (reserve room so bands never collide
  // with the timeline chips: the timeline sits at PAD; bands start below it)
  for (const c of laidCompartments) {
    c.y -= 10; // label tab room
    c.h += 10;
  }

  /* --- 7. timeline stage chips (above the flow) --- */
  const laidTimeline: LaidOutTimelineStage[] = [];
  for (const t of def.timeline ?? []) {
    const members = laid.filter((n) => t.nodeIds.includes(n.id));
    if (members.length === 0) {
      warnings.push(`timeline stage "${t.id}" has no member nodes`);
      continue;
    }
    const minX = Math.min(...members.map((n) => n.x));
    const maxX = Math.max(...members.map((n) => n.x + n.w));
    laidTimeline.push({
      id: t.id,
      label: t.label,
      range: t.range,
      x: minX,
      y: PAD,
      w: maxX - minX,
      h: TIMELINE_H,
    });
  }

  /* --- 8. floating intervention markers --- */
  const laidInterventions: LaidOutIntervention[] = [];
  for (const [targetId, list] of floatingByTarget) {
    const target = nodeById.get(targetId);
    if (!target) continue;
    let cursorY = target.y - MARKER_GAP;
    for (let i = list.length - 1; i >= 0; i--) {
      const iv = list[i];
      const w = Math.max(96, textWidth(iv.agentLabel, 11, true) + 40);
      const mx = target.x + target.w / 2 - w / 2;
      const my = cursorY - MARKER_H;
      const cx1 = target.x + target.w / 2;
      laidInterventions.push({
        intervention: iv,
        marker: { x: mx, y: my, w, h: MARKER_H },
        connectorPath: `M ${r(cx1)} ${r(my + MARKER_H)} L ${r(cx1)} ${r(target.y - 2)}`,
        connectorTerminalX: cx1,
        connectorTerminalY: target.y - 2,
      });
      cursorY = my - MARKER_GAP;
    }
  }
  for (const e of edgesWithIntervention) {
    const iv = (def.interventions ?? []).find((iv) => iv.id === e.interventionId);
    if (iv) laidInterventions.push({ intervention: iv, marker: null, connectorPath: null, connectorTerminalX: 0, connectorTerminalY: 0 });
  }

  /* --- 9. canvas bounds --- */
  const allX = [
    ...laid.map((n) => n.x + n.w),
    ...laidCompartments.map((c) => c.x + c.w),
  ];
  const width = Math.max(graphRight + PAD, ...allX, PAD);
  const height = Math.max(flowBottom + PAD, ...laidCompartments.map((c) => c.y + c.h + PAD), PAD);

  // unused-edges sanity (defensive; validate() is the real gate)
  if (edgeById.size !== laidEdges.length) {
    warnings.push(`${edgeById.size - laidEdges.length} edge(s) could not be routed (unresolved endpoints)`);
  }

  return { width: r(width), height: r(height), nodes: laid, edges: laidEdges, compartments: laidCompartments, interventions: laidInterventions, timeline: laidTimeline, warnings };
}

function r(v: number): number {
  return Math.round(v * 100) / 100;
}
