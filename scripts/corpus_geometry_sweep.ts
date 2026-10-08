/**
 * Corpus-wide geometry sweep — every mechanism the site renders (145 drug
 * adapters + 109 psychiatry adapters + 5 pilots + substance flows) must
 * satisfy the same zero-overlap invariants as the pilots. Exit 1 on any
 * violation. This is the §30 regression matrix's objective core.
 */
import { layoutMechanism } from "../src/lib/mechanism/layout";
import { fromDrugMechanismFlow, fromCourseMechanism } from "../src/lib/mechanism/normalize";
import { drugs } from "../src/lib/kyp/data/drugs/index";
import { psychiatryCourses } from "../src/lib/kyp/data/psychiatry-courses/index";
import { pilotMechanisms } from "../src/lib/mechanism/pilots";
import type { MechanismDefinition } from "../src/lib/mechanism/model";
import type { LaidOutEdge } from "../src/lib/mechanism/layout";

const defs: MechanismDefinition[] = [...pilotMechanisms];
for (const d of drugs) {
  if (d.mechanismFlow?.nodes?.length) {
    defs.push(
      fromDrugMechanismFlow({
        drugSlug: d.slug,
        drugName: d.genericName,
        mechanismSummary: d.mechanism?.summary,
        mechanismFlow: d.mechanismFlow,
      })
    );
  }
}
for (const c of psychiatryCourses) {
  if (c.mechanism?.steps?.length) {
    defs.push(
      fromCourseMechanism({ courseSlug: c.slug, courseTitle: c.title, mechanism: c.mechanism as never })
    );
  }
}

const overlaps = (
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
  m = 0
) => a.x - m < b.x + b.w && b.x - m < a.x + a.w && a.y - m < b.y + b.h && b.y - m < a.y + a.h;

const chipRect = (e: LaidOutEdge) => {
  const w = e.labelWidth ?? 0;
  const h = e.labelHeight ?? 17;
  return { x: (e.labelX ?? 0) - w / 2, y: (e.labelY ?? 0) - h / 2, w, h };
};

let violations = 0;
let widest = 0;
const t0 = Date.now();
const courseDefs = defs.filter(d => d.mechanismId.startsWith("adapted-course")).length;
for (const def of defs) {
  const L = layoutMechanism(def);
  widest = Math.max(widest, L.width);
  let bad = 0;
  for (let i = 0; i < L.nodes.length; i++)
    for (let j = i + 1; j < L.nodes.length; j++)
      if (overlaps(L.nodes[i], L.nodes[j])) bad++;
  const labelled = L.edges.filter((e) => e.labelWidth && e.labelX !== undefined);
  for (const e of labelled) {
    const r = chipRect(e);
    for (const n of L.nodes) {
      if (n.id === e.edge.from || n.id === e.edge.to) continue;
      if (overlaps(r, n, 2)) bad++;
    }
  }
  for (let i = 0; i < labelled.length; i++)
    for (let j = i + 1; j < labelled.length; j++) {
      if (Math.abs((labelled[i].labelX ?? 0) - (labelled[j].labelX ?? 0)) > 260) continue;
      if (overlaps(chipRect(labelled[i]), chipRect(labelled[j]), 4)) bad++;
    }
  for (const e of labelled) {
    const r = chipRect(e);
    if (r.x < -2 || r.y < -2 || r.x + r.w > L.width + 2 || r.y + r.h > L.height + 2) bad++;
  }
  if (bad > 0) {
    violations++;
    console.log(`VIOLATIONS ${bad}: ${def.mechanismId}`);
  }
}
const dt = Date.now() - t0;
console.log(
  `\nchecked ${defs.length} definitions (5 pilots + ${defs.length - 5 - courseDefs} drug adapters + ${courseDefs} course adapters) in ${dt}ms (${(dt / defs.length).toFixed(2)}ms avg)`
);
console.log(`widest graph: ${Math.round(widest)}px`);
console.log(violations === 0 ? "CORPUS GEOMETRY: PASS" : `CORPUS GEOMETRY: FAIL (${violations} graphs with violations)`);
if (violations > 0) process.exit(1);
