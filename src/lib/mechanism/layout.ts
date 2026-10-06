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
}

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
const FEEDBACK_STACK = 30; // extra depth per additional return edge
const MARKER_H = 26; // floating intervention marker height
const MARKER_GAP = 12; // gap between stacked markers
const COMPARTMENT_PAD = 12;
const TIMELINE_H = 24;

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

  /* --- 3. geometry: columns then vertical stacks --- */
  const measured = new Map<string, ReturnType<typeof measureNode>>();
  for (const n of nodes) measured.set(n.id, measureNode(n));

  /* Adaptive layer gaps: a long edge label needs horizontal room between
   * its columns, or it will sit on neighbouring nodes. Compute every edge
   * label's wrapped width FIRST, then give each layer boundary the gap the
   * widest crossing label needs (never below the base gap). */
  const wrapEdgeLabel = (label: string): { lines: string[]; width: number; height: number } => {
    const maxW = 176;
    const lines = wrapText(label, maxW, 12, false);
    const w = Math.max(...lines.map((l) => textWidth(l, 12, false))) + 16;
    return { lines, width: w, height: lines.length * 14 + 8 };
  };
  const labelSizeByEdge = new Map<string, { lines: string[]; width: number; height: number }>();
  for (const e of forward) {
    if (e.label) labelSizeByEdge.set(`${e.from}->${e.to}`, wrapEdgeLabel(e.label));
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
    boundaryGap[l] = Math.max(boundaryGap[l], lab.width + 56);
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
   *  vertical nudges at each — long-range edges cross intermediate columns
   *  and their midpoints can sit on nodes (aripiprazole defect). */
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
    const lab = e.label ? labelSizeByEdge.get(`${e.from}->${e.to}`) ?? wrapEdgeLabel(e.label) : null;
    const fwdLabelPos = lab
      ? avoidNodeCollision({ x: p.labelX, y: p.labelY }, p.labelNear, p.labelFar, lab.width, lab.height, new Set([e.from, e.to]))
      : null;
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
      isFeedback: false,
      isIntervention: Boolean(e.interventionId && interventionIds.has(e.interventionId)),
    });
  }

  /* --- 5b. feedback return paths (visible sweeps below the flow) --- */
  const nodeBottom = (id: string) => {
    const n = nodeById.get(id);
    return n ? n.y + n.h : maxStackBottom;
  };
  returns.forEach((e, idx) => {
    const from = nodeById.get(e.from);
    const to = nodeById.get(e.to);
    if (!from || !to) return;
    const sx = from.x + from.w / 2;
    const sy = nodeBottom(e.from);
    const tx = to.x + to.w / 2;
    const ty = nodeBottom(e.to);
    const depth = maxStackBottom + FEEDBACK_BASE_DEPTH + idx * FEEDBACK_STACK;
    const c = Math.max(34, (depth - Math.max(sy, ty)) * 0.6);
    const path = `M ${r(sx)} ${r(sy)} C ${r(sx)} ${r(sy + c)}, ${r(tx)} ${r(ty + c)}, ${r(tx)} ${r(ty)}`;
    const lab = e.label ? wrapEdgeLabel(e.label) : null;
    laidEdges.push({
      id: e.id,
      edge: e,
      path,
      terminalX: tx,
      terminalY: ty,
      terminalAngle: -90,
      labelX: (sx + tx) / 2,
      labelY: depth - 12,
      labelWidth: lab?.width,
      labelHeight: lab?.height,
      labelLines: lab?.lines,
      isFeedback: true,
      isIntervention: false,
    });
  });

  /* --- 5c. label-vs-label collision post-pass --- *
   * With node overlaps handled, the remaining defect class is two label
   * chips landing on each other (convergence fans). Nudge in growing
   * vertical steps until free. */
  const rectsOverlap = (
    ax: number, ay: number, aw: number, ah: number,
    bx: number, by: number, bw: number, bh: number
  ) => ax < bx + bw && bx < ax + aw && ay < by + bh && by < ay + ah;

  // multi-sweep convergence: a nudge against one label can reintroduce an
  // overlap with another (observed on aripiprazole) — sweep until stable.
  for (let sweep = 0; sweep < 4; sweep++) {
    let nudged = false;
    for (let i = 0; i < laidEdges.length; i++) {
      const a = laidEdges[i];
      if (!a.labelX || a.labelY === undefined || !a.labelWidth) continue;
      for (let j = i + 1; j < laidEdges.length; j++) {
        const b = laidEdges[j];
        if (!b.labelX || b.labelY === undefined || !b.labelWidth) continue;
        if (Math.abs(a.labelX - b.labelX) > 240) continue; // too far apart to matter
        let guard = 0;
        // enforce a minimum visual gap (12px + estimator-vs-render margin),
        // not merely non-overlap
        while (
          guard < 7 &&
          rectsOverlap(
            a.labelX - a.labelWidth / 2 - 4, a.labelY - (a.labelHeight ?? 17) / 2 - 4, a.labelWidth + 8, (a.labelHeight ?? 17) + 8,
            b.labelX - b.labelWidth / 2 - 4, b.labelY - (b.labelHeight ?? 17) / 2 - 4, b.labelWidth + 8, (b.labelHeight ?? 17) + 8
          )
        ) {
          if (guard < 3) {
            // small step: a coarse step overshoots the valid window when
            // squeezed between two neighbours (aripiprazole defect)
            a.labelY += a.labelY >= b.labelY ? 14 : -14;
          } else {
            // vertically trapped (labels above AND below): escape
            // horizontally along the edge instead
            a.labelX += (a.labelX ?? 0) >= (b.labelX ?? 0) ? 26 : -26;
          }
          guard++;
          nudged = true;
        }
      }
    }
    if (!nudged) break;
  }

  const flowBottom = maxStackBottom + (returns.length > 0 ? FEEDBACK_BASE_DEPTH + returns.length * FEEDBACK_STACK : 0);

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
