/**
 * Density diagnosis — runs the deterministic layout on the dense pilots and
 * reports objective geometry: canvas size, per-edge label chip dimensions,
 * label/canvas ink coverage, and congestion metrics. READ-ONLY diagnostics.
 */
import { layoutMechanism } from "../src/lib/mechanism/layout";
import { pilotMechanisms } from "../src/lib/mechanism/pilots";

function diagnose(name: string, def: (typeof pilotMechanisms)[number]) {
  const L = layoutMechanism(def);
  const labels = L.edges.filter((e) => e.labelLines && e.labelLines.length > 0);
  const labelArea = labels.reduce((s, e) => s + (e.labelWidth ?? 0) * (e.labelHeight ?? 0), 0);
  const nodeArea = L.nodes.reduce((s, n) => s + n.w * n.h, 0);
  const canvasArea = L.width * L.height;
  const longLabels = labels.filter((e) => (e.edge.label ?? "").length > 26);
  const multiLine = labels.filter((e) => (e.labelLines?.length ?? 0) > 1);

  console.log(`\n=== ${name} ===`);
  console.log(`canvas: ${L.width} x ${L.height}  (area ${(canvasArea / 1000).toFixed(0)}k)`);
  console.log(`nodes: ${L.nodes.length}  edges: ${L.edges.length}  labelled edges: ${labels.length}`);
  console.log(
    `ink coverage: labels ${(100 * labelArea / canvasArea).toFixed(1)}%  nodes ${(100 * nodeArea / canvasArea).toFixed(1)}%`
  );
  console.log(
    `edge labels >26 chars: ${longLabels.length}  multi-line chips: ${multiLine.length}`
  );
  // per-label detail
  const rows = labels
    .map((e) => ({
      len: (e.edge.label ?? "").length,
      w: Math.round(e.labelWidth ?? 0),
      h: Math.round(e.labelHeight ?? 0),
      lines: e.labelLines?.length ?? 1,
      txt: (e.edge.label ?? "").slice(0, 52),
      fb: e.isFeedback,
    }))
    .sort((a, b) => b.w * b.h - a.w * a.h);
  for (const r of rows) {
    console.log(
      `  [${String(r.len).padStart(2)}ch x${r.lines}L ${String(r.w).padStart(3)}x${String(r.h).padStart(2)}${r.fb ? " FB" : "   "}] ${r.txt}`
    );
  }
  // column extents (x ranges) to see horizontal usage
  const cols = new Map<number, { min: number; max: number; n: number }>();
  for (const n of L.nodes) {
    const c = cols.get(n.layer) ?? { min: Infinity, max: -Infinity, n: 0 };
    c.min = Math.min(c.min, n.y);
    c.max = Math.max(c.max, n.y + n.h);
    c.n += 1;
    cols.set(n.layer, c);
  }
  const colStr = [...cols.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([l, c]) => `L${l}:${c.n}n/${Math.round(c.max - c.min)}px`)
    .join("  ");
  console.log(`columns: ${colStr}`);
  console.log(`warnings: ${L.warnings.length ? L.warnings.join("; ") : "none"}`);
}

for (const p of pilotMechanisms) {
  diagnose(p.mechanismId, p);
}
