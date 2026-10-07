/**
 * Mechanism density polish — label tiers, structural emphasis, capped
 * corridors, collision invariants (mission: density + readability).
 *
 * Every rule verified here is GEOMETRIC (label string length, path
 * tightness, rect intersection) — none of them classify medical
 * importance, and none touch medical content.
 */

import { describe, expect, test } from "bun:test";
import {
  layoutMechanism,
  PRIMARY_TIER_MAX_CHARS,
  getRelationshipMeta,
  type MechanismDefinition,
} from "@/lib/mechanism";
import { pilotMechanisms } from "@/lib/mechanism/pilots";

const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;

/* ---------- helpers (same rect math as the audit tooling) ---------- */

const chipRect = (e: ReturnType<typeof layoutMechanism>["edges"][number]) => {
  const w = e.labelWidth ?? 0;
  const h = e.labelHeight ?? 17;
  return { x: (e.labelX ?? 0) - w / 2, y: (e.labelY ?? 0) - h / 2, w, h };
};

const overlaps = (
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
  m = 0
) => a.x - m < b.x + b.w && b.x - m < a.x + a.w && a.y - m < b.y + b.h && b.y - m < a.y + a.h;

/* ============================================================
   1. Label tiers (visual length heuristic — never medical)
   ============================================================ */

describe("density polish — label tiers", () => {
  test("D1. tier is a deterministic function of label length", () => {
    for (const pilot of pilotMechanisms) {
      const a = layoutMechanism(pilot);
      const b = layoutMechanism(pilot);
      expect(JSON.stringify(a.edges.map((e) => e.labelTier))).toBe(
        JSON.stringify(b.edges.map((e) => e.labelTier))
      );
      for (const e of a.edges) {
        if (!e.edge.label || e.isFeedback || e.isIntervention) continue;
        expect(e.labelTier).toBe(
          e.edge.label.length <= PRIMARY_TIER_MAX_CHARS ? "primary" : "annotation"
        );
      }
    }
  });

  test("D2. intervention and feedback labels are ALWAYS primary (mission §12/§13)", () => {
    for (const pilot of pilotMechanisms) {
      for (const e of layoutMechanism(pilot).edges) {
        if (!e.edge.label) continue;
        if (e.isFeedback || e.isIntervention) expect(e.labelTier).toBe("primary");
      }
    }
    // escitalopram's intervention label is 25 chars — past the tier cutoff,
    // still forced primary so the drug action never recedes
    const iv = layoutMechanism(esc).edges.find((e) => e.isIntervention)!;
    expect(iv.edge.label!.length).toBeGreaterThan(PRIMARY_TIER_MAX_CHARS);
    expect(iv.labelTier).toBe("primary");
    // MDD's feedback labels are 33-34 chars — same rule
    for (const fb of layoutMechanism(mdd).edges.filter((e) => e.isFeedback)) {
      expect(fb.edge.label!.length).toBeGreaterThan(PRIMARY_TIER_MAX_CHARS);
      expect(fb.labelTier).toBe("primary");
    }
  });

  test("D3. annotation chips wrap narrower than primary chips", () => {
    const l = layoutMechanism(mdd);
    const ann = l.edges.filter((e) => e.labelTier === "annotation");
    const pri = l.edges.filter((e) => e.labelTier === "primary" && e.labelWidth);
    expect(ann.length).toBeGreaterThan(0);
    const maxAnn = Math.max(...ann.map((e) => e.labelWidth ?? 0));
    // annotation wrap width (142) + padding is capped; primary may reach 168+pad
    expect(maxAnn).toBeLessThanOrEqual(160);
    expect(Math.max(...pri.map((e) => e.labelWidth ?? 0))).toBeGreaterThan(maxAnn);
  });
});

/* ============================================================
   2. Structural emphasis (graph geometry, not medical salience)
   ============================================================ */

describe("density polish — structural emphasis", () => {
  test("D4. feedback and intervention edges never recede", () => {
    for (const pilot of pilotMechanisms) {
      for (const e of layoutMechanism(pilot).edges) {
        if (e.isFeedback || e.isIntervention) expect(e.emphasis).toBe("primary");
      }
    }
  });

  test("D5. MDD: the HPA + glutamate/BDNF chains stay primary; the long convergence funnel recedes", () => {
    const l = layoutMechanism(mdd);
    const emph = (from: string, to: string) =>
      l.edges.find((e) => e.edge.from === from && e.edge.to === to)?.emphasis;
    // longest-path backbone (layer-tight, full-depth routes)
    for (const [f, t] of [
      ["hypothalamus", "pituitary"],
      ["pituitary", "adrenal"],
      ["adrenal", "cortisol"],
      ["cortisol", "hippocampus"],
      ["hippocampus", "syndrome"],
      ["nmda", "glutamate"],
      ["glutamate", "neuroplasticity"],
      ["neuroplasticity", "bdnf"],
      ["bdnf", "hippocampus"],
    ] as const) {
      expect(emph(f, t)).toBe("primary");
    }
    // long-range converging side edges (span > 1 layer) recede
    for (const [f, t] of [
      ["amygdala", "syndrome"],
      ["pfc", "syndrome"],
      ["sgacc", "syndrome"],
      ["inflammation", "syndrome"],
      ["monoamine", "syndrome"],
      ["sert", "monoamine"],
    ] as const) {
      expect(emph(f, t)).toBe("context");
    }
  });

  test("D6. escitalopram: the causal chain is the backbone; the SERT dead-end is context but the DRUG edge stays primary", () => {
    const l = layoutMechanism(esc);
    const emph = (from: string, to: string) =>
      l.edges.find((e) => e.edge.from === from && e.edge.to === to)?.emphasis;
    expect(emph("presynaptic", "serotonin")).toBe("primary");
    expect(emph("serotonin", "cleft")).toBe("primary");
    expect(emph("cleft", "autoreceptor")).toBe("primary");
    expect(emph("autoreceptor", "desensitised")).toBe("primary");
    expect(emph("desensitised", "pfc")).toBe("primary");
    expect(emph("pfc", "bdnf")).toBe("primary");
    expect(emph("serotonin", "sert")).toBe("context"); // reuptake dead-end side edge
    expect(emph("escitalopram", "sert")).toBe("primary"); // the intervention itself
  });

  test("D7. linear chains never de-emphasize (adapter corpus shape)", () => {
    const chain: MechanismDefinition = {
      mechanismId: "test-fixture-linear-chain",
      topicId: "test-fixture",
      title: "TEST FIXTURE — NOT MEDICAL CONTENT",
      summary: "Synthetic linear chain fixture.",
      migration: "test-fixture",
      accessibility: { summary: "Synthetic non-medical fixture." },
      nodes: Array.from({ length: 6 }, (_, i) => ({ id: `c${i}`, label: `Fixture step ${i}` })),
      edges: Array.from({ length: 5 }, (_, i) => ({
        from: `c${i}`,
        to: `c${i + 1}`,
        relationship: "leads_to" as const,
      })),
    };
    const l = layoutMechanism(chain);
    expect(l.edges.every((e) => e.emphasis === "primary")).toBe(true);
  });
});

/* ============================================================
   3. Collision invariants (objective geometry, mission §25)
   ============================================================ */

describe("density polish — collision invariants", () => {
  test("D8. zero label-node overlaps across all pilots (own endpoints excluded)", () => {
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      for (const e of l.edges) {
        if (!e.labelWidth || e.labelX === undefined) continue;
        const r = chipRect(e);
        for (const n of l.nodes) {
          if (n.id === e.edge.from || n.id === e.edge.to) continue;
          expect(overlaps(r, n, 2)).toBe(false);
        }
      }
    }
  });

  test("D9. zero label-label overlaps across all pilots (with clearance margin)", () => {
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      const labelled = l.edges.filter((e) => e.labelWidth && e.labelX !== undefined);
      for (let i = 0; i < labelled.length; i++)
        for (let j = i + 1; j < labelled.length; j++) {
          if (Math.abs((labelled[i].labelX ?? 0) - (labelled[j].labelX ?? 0)) > 260) continue;
          expect(overlaps(chipRect(labelled[i]), chipRect(labelled[j]), 4)).toBe(false);
        }
    }
  });

  test("D10. every chip stays inside the canvas (no clipped labels)", () => {
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      for (const e of l.edges) {
        if (!e.labelWidth || e.labelX === undefined) continue;
        const r = chipRect(e);
        expect(r.x).toBeGreaterThanOrEqual(-2);
        expect(r.y).toBeGreaterThanOrEqual(-2);
        expect(r.x + r.w).toBeLessThanOrEqual(l.width + 2);
        expect(r.y + r.h).toBeLessThanOrEqual(l.height + 2);
      }
    }
  });

  test("D11. the trapped-label oscillation is solved (MDD regression)", () => {
    // Pre-polish defect: the greedy nudge oscillated "HPA axis" between
    // "excitotoxicity in chronic stress" and "antagonism → glutamate surge"
    // forever (their gap was smaller than the chip). The clear-position
    // search must terminate with all three separated.
    const l = layoutMechanism(mdd);
    const hpa = l.edges.find((e) => e.edge.from === "hypothalamus" && e.edge.to === "pituitary")!;
    const exc = l.edges.find((e) => e.edge.from === "stress" && e.edge.to === "glutamate")!;
    const ant = l.edges.find((e) => e.edge.from === "nmda" && e.edge.to === "glutamate")!;
    const pair = (a: typeof hpa, b: typeof exc) =>
      Math.abs((a.labelX ?? 0) - (b.labelX ?? 0)) <= 260 ? overlaps(chipRect(a), chipRect(b), 4) : false;
    expect(pair(hpa, exc)).toBe(false);
    expect(pair(hpa, ant)).toBe(false);
    expect(pair(exc, ant)).toBe(false);
  });

  test("D12. capped corridors: dense-graph width is bounded (regression guard)", () => {
    // The pre-polish MDD graph was 2452px wide because every long label
    // inflated its corridor without bound. With tiered caps + collision
    // placement the densest graph must stay materially narrower.
    const l = layoutMechanism(mdd);
    expect(l.width).toBeLessThan(2150);
    const e = layoutMechanism(esc);
    expect(e.width).toBeLessThan(2390); // was 2387.66 pre-polish (esc only shrank via caps)
  });
});

/* ============================================================
   4. Renderer-contract pieces the SVG depends on
   ============================================================ */

describe("density polish — renderer contract", () => {
  test("D13. every forward edge keeps a defined emphasis and tier default", () => {
    for (const pilot of pilotMechanisms) {
      for (const e of layoutMechanism(pilot).edges) {
        expect(e.emphasis ?? "primary").toMatch(/^(primary|context)$/);
        expect(e.labelTier ?? "primary").toMatch(/^(primary|annotation)$/);
        if (e.labelWidth) {
          expect(e.labelLines?.length).toBeGreaterThan(0);
          expect(e.labelHeight).toBeGreaterThan(0);
        }
      }
    }
  });

  test("D14. relationship semantics are unchanged (terminal/stroke still carry meaning)", () => {
    for (const pilot of pilotMechanisms) {
      for (const e of layoutMechanism(pilot).edges) {
        const rel = getRelationshipMeta(e.edge.relationship)!;
        expect(rel).toBeDefined();
        expect(rel.terminal).toBeTruthy();
        expect(rel.stroke).toBeTruthy();
      }
    }
  });

  test("D15. feedback return arcs clear every node they pass under (v2 latent defect)", () => {
    // The v2 sweep budgeted its control points off maxStackBottom, but a
    // cubic bezier only reaches ~75% of its control depth — on escitalopram
    // the autoreceptor return cut through BOTH the SERT and drug nodes and
    // its chip floated 85px below the visible arc. The reworked sweep solves
    // for real clearance; this pins it.
    const parseReturnPath = (p: string) => {
      const nums = (p.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
      const [sx, sy, c1x, c1y, c2x, c2y, tx, ty] = nums;
      return (t: number) => {
        const u = 1 - t;
        return {
          x: u * u * u * sx + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * tx,
          y: u * u * u * sy + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * ty,
        };
      };
    };
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      for (const e of l.edges) {
        if (!e.isFeedback) continue;
        const bez = parseReturnPath(e.path);
        for (let i = 0; i <= 32; i++) {
          const p = bez(i / 32);
          for (const n of l.nodes) {
            if (n.id === e.edge.from || n.id === e.edge.to) continue;
            const inside = p.x > n.x - 1 && p.x < n.x + n.w + 1 && p.y > n.y - 1 && p.y < n.y + n.h + 1;
            expect(inside).toBe(false);
          }
        }
        // the chip sits ON the arc (its deepest sampled point), never floating
        let deepest = -Infinity;
        for (let i = 0; i <= 40; i++) deepest = Math.max(deepest, bez(i / 40).y);
        expect(Math.abs((e.labelY ?? 0) - deepest)).toBeLessThanOrEqual(1);
        // and the whole return stays clearly below the node flow
        expect(e.labelY!).toBeGreaterThan(Math.max(...l.nodes.map((n) => n.y + n.h)) + 10);
        // re-entry is through the target's LEFT edge, horizontal
        const target = l.nodes.find((n) => n.id === e.edge.to)!;
        expect(Math.abs(e.terminalX - target.x)).toBeLessThan(2);
        expect(e.terminalY).toBeGreaterThan(target.y);
        expect(e.terminalY).toBeLessThan(target.y + target.h);
      }
    }
  });
});
