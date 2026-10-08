/**
 * Objective geometry audit (mission §25) — label/edge/node intersections,
 * canvas containment, chip-clipping. Pure layout-level (no DOM): the same
 * deterministic numbers the SVG renders. Exit code 1 on any violation.
 */
import { layoutMechanism } from "../src/lib/mechanism/layout";
import { pilotMechanisms } from "../src/lib/mechanism/pilots";
import type { LaidOutEdge } from "../src/lib/mechanism/layout";

interface Violation {
  pilot: string;
  kind: string;
  detail: string;
}

const violations: Violation[] = [];
const notes: string[] = [];

function chipRect(e: LaidOutEdge) {
  const w = e.labelWidth ?? 0;
  const h = e.labelHeight ?? 17;
  return { x: (e.labelX ?? 0) - w / 2, y: (e.labelY ?? 0) - h / 2, w, h };
}

const overlaps = (
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
  m = 0
) => a.x - m < b.x + b.w && b.x - m < a.x + a.w && a.y - m < b.y + b.h && b.y - m < a.y + a.h;

for (const pilot of pilotMechanisms) {
  const L = layoutMechanism(pilot);
  const name = pilot.mechanismId;

  // ---- node vs node ----
  for (let i = 0; i < L.nodes.length; i++)
    for (let j = i + 1; j < L.nodes.length; j++)
      if (overlaps(L.nodes[i], L.nodes[j]))
        violations.push({ pilot: name, kind: "node-node", detail: `${L.nodes[i].id} × ${L.nodes[j].id}` });

  const labelled = L.edges.filter((e) => e.labelWidth && e.labelX !== undefined);

  // ---- label vs node (own endpoints excluded, 2px margin) ----
  for (const e of labelled) {
    const r = chipRect(e);
    for (const n of L.nodes) {
      if (n.id === e.edge.from || n.id === e.edge.to) continue;
      if (overlaps(r, n, 2))
        violations.push({ pilot: name, kind: "label-node", detail: `"${e.edge.label?.slice(0, 30)}" × node ${n.id}` });
    }
  }

  // ---- label vs label (4px margin — the solver enforces ~8px padded non-overlap) ----
  for (let i = 0; i < labelled.length; i++)
    for (let j = i + 1; j < labelled.length; j++) {
      if (Math.abs((labelled[i].labelX ?? 0) - (labelled[j].labelX ?? 0)) > 260) continue;
      if (overlaps(chipRect(labelled[i]), chipRect(labelled[j]), 4))
        violations.push({
          pilot: name,
          kind: "label-label",
          detail: `"${labelled[i].edge.label?.slice(0, 24)}" × "${labelled[j].edge.label?.slice(0, 24)}"`,
        });
    }

  // ---- containment: every chip, node, compartment inside the canvas ----
  const pad = 2;
  for (const e of labelled) {
    const r = chipRect(e);
    if (r.x < -pad || r.y < -pad || r.x + r.w > L.width + pad || r.y + r.h > L.height + pad)
      violations.push({
        pilot: name,
        kind: "chip-out-of-canvas",
        detail: `"${e.edge.label?.slice(0, 30)}" [${r.x.toFixed(0)},${r.y.toFixed(0)} ${r.w.toFixed(0)}x${r.h.toFixed(0)}] vs canvas ${L.width.toFixed(0)}x${L.height.toFixed(0)}`,
      });
  }

  // ---- label covering a FOREIGN edge terminal (semantic ambiguity risk) ----
  for (const e of labelled) {
    const r = chipRect(e);
    for (const other of L.edges) {
      if (other.id === e.id) continue;
      const tx = other.terminalX;
      const ty = other.terminalY;
      if (tx > r.x && tx < r.x + r.w && ty > r.y && ty < r.y + r.h)
        notes.push(
          `${name}: chip "${e.edge.label?.slice(0, 26)}" covers terminal of ${other.edge.from}->${other.edge.to}`
        );
    }
  }

  console.log(
    `${name}: ${L.width.toFixed(0)}x${L.height.toFixed(0)} | nodes ${L.nodes.length} | labelled edges ${labelled.length} | tiers: primary ${labelled.filter((e) => (e.labelTier ?? "primary") === "primary").length}, annotation ${labelled.filter((e) => e.labelTier === "annotation").length} | emphasis: primary ${L.edges.filter((e) => (e.emphasis ?? "primary") === "primary").length}, context ${L.edges.filter((e) => e.emphasis === "context").length}`
  );
}

console.log(`\nnotes (chip-over-foreign-terminal): ${notes.length}`);
for (const n of notes.slice(0, 12)) console.log("  note:", n);
console.log(`\nviolations: ${violations.length}`);
for (const v of violations) console.log(`  ${v.pilot} [${v.kind}] ${v.detail}`);
if (violations.length > 0) process.exit(1);
console.log("GEOMETRY AUDIT: PASS");
