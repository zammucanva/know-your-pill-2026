/**
 * Mechanism System — Model, Vocabulary, Validation, Layout contracts.
 *
 * Covers the ENGINE (not content): the closed vocabularies, fail-loud
 * validation, deterministic layout (same input -> identical output),
 * spatial semantics (branching/convergence/feedback/interventions),
 * a11y descriptions from data, and clearly-labelled synthetic layout
 * fixtures (TEST FIXTURE — NOT MEDICAL CONTENT) for structures real
 * medical data may not exercise at the extremes.
 */

import { describe, expect, test } from "bun:test";
import {
  ENTITY_TYPES,
  RELATIONSHIPS,
  EVIDENCE_QUALIFIERS,
  INTERVENTION_ACTIONS,
  BIOLOGICAL_LEVELS,
  getRelationshipMeta,
  isRelationshipId,
  collectMechanismErrors,
  validateMechanism,
  layoutMechanism,
  describeMechanism,
  describeNodeContext,
  describeEdge,
  type MechanismDefinition,
  type MechanismNode,
} from "@/lib/mechanism";
import { pilotMechanisms } from "@/lib/mechanism/pilots";

/* ============================================================
   1. Vocabulary contracts
   ============================================================ */

describe("mechanism vocabulary", () => {
  test("1. entity types: 22 members across the molecular-clinical spectrum", () => {
    expect(ENTITY_TYPES.length).toBe(22);
    expect(ENTITY_TYPES).toContain("disease");
    expect(ENTITY_TYPES).toContain("drug");
    expect(ENTITY_TYPES).toContain("receptor");
    expect(ENTITY_TYPES).toContain("enzyme");
    expect(ENTITY_TYPES).toContain("transporter");
    expect(ENTITY_TYPES).toContain("neurotransmitter");
    expect(ENTITY_TYPES).toContain("clinical-finding");
    expect(new Set(ENTITY_TYPES).size).toBe(ENTITY_TYPES.length); // unique
  });

  test("2. relationships: closed vocabulary with unique ids", () => {
    expect(RELATIONSHIPS.length).toBe(28);
    expect(new Set(RELATIONSHIPS.map((r) => r.id)).size).toBe(28);
  });

  test("3. every spec-required core relationship exists", () => {
    const required = [
      "activates", "inhibits", "binds", "releases", "converts", "transports",
      "increases", "decreases", "stimulates", "blocks", "causes", "leads_to",
      "compensates", "feedback",
    ];
    for (const id of required) expect(isRelationshipId(id)).toBe(true);
  });

  test("4. inhibition semantics are geometry-first, never colour-only", () => {
    const inhibits = getRelationshipMeta("inhibits")!;
    expect(inhibits.terminal).toBe("tbar");
    const activates = getRelationshipMeta("activates")!;
    expect(activates.terminal).toBe("arrow");
    const binds = getRelationshipMeta("binds")!;
    expect(binds.terminal).toBe("dot");
    const converts = getRelationshipMeta("converts")!;
    expect(converts.terminal).toBe("chevron");
    // terminals + strokes differ across the core set (polarity + labels
    // + legend add further redundancy on top of geometry + stroke)
    const keys = RELATIONSHIPS.map((r) => `${r.terminal}|${r.stroke}`);
    expect(new Set(keys).size).toBeGreaterThanOrEqual(9);
  });

  test("5. uncertainty-safe relationships exist and are non-causal", () => {
    for (const id of ["associated_with", "related_to"]) {
      const rel = getRelationshipMeta(id)!;
      expect(rel.causal).toBe(false);
      expect(rel.terminal).toBe("dot");
      expect(rel.stroke).toBe("dotted");
    }
  });

  test("6. evidence qualifiers: 7 members including all 4 course grades", () => {
    expect(EVIDENCE_QUALIFIERS.length).toBe(7);
    for (const g of ["established", "supported", "proposed", "uncertain"]) {
      expect(EVIDENCE_QUALIFIERS).toContain(g as never);
    }
  });

  test("7. intervention actions: 11 members seeded from mechanism-actions", () => {
    expect(INTERVENTION_ACTIONS.length).toBe(11);
    for (const seeded of [
      "reuptake-inhibition",
      "receptor-antagonism",
      "receptor-agonism",
      "enzyme-inhibition",
      "ion-channel-blockade",
      "autoreceptor-desensitisation",
      "negligible-affinity",
    ]) {
      expect(INTERVENTION_ACTIONS).toContain(seeded as never);
    }
  });

  test("8. biological levels: ordered molecular -> clinical (data, not CSS)", () => {
    expect(BIOLOGICAL_LEVELS.length).toBeGreaterThanOrEqual(5);
    expect(BIOLOGICAL_LEVELS[0]).toBe("molecular");
    expect(BIOLOGICAL_LEVELS[BIOLOGICAL_LEVELS.length - 1]).toBe("clinical");
  });
});

/* ============================================================
   2. Fail-loud validation
   ============================================================ */

const minimalValid: MechanismDefinition = {
  mechanismId: "test-minimal",
  topicId: "test",
  title: "Minimal",
  summary: "A minimal valid definition.",
  nodes: [{ id: "a", label: "A" }, { id: "b", label: "B" }],
  edges: [{ from: "a", to: "b", relationship: "leads_to" }],
  accessibility: { summary: "Minimal test definition." },
};

describe("mechanism validation (fail-loud)", () => {
  test("9. a minimal definition validates", () => {
    expect(collectMechanismErrors(minimalValid)).toEqual([]);
    expect(() => validateMechanism(minimalValid)).not.toThrow();
  });

  test("10. unknown relationship is rejected (closed vocabulary)", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      edges: [{ from: "a", to: "b", relationship: "supercharges" as never }],
    });
    expect(errors.some((e) => e.includes("unknown relationship"))).toBe(true);
  });

  test("11. unresolved edge endpoints are rejected", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      edges: [{ from: "a", to: "ghost", relationship: "leads_to" }],
    });
    expect(errors.some((e) => e.includes("does not resolve"))).toBe(true);
  });

  test("12. duplicate node ids and empty labels are rejected", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      nodes: [
        { id: "a", label: "A" },
        { id: "a", label: "A again" },
        { id: "", label: "no id" },
        { id: "b", label: "  " },
      ] as MechanismNode[],
    });
    expect(errors.some((e) => e.includes("duplicate node id"))).toBe(true);
    expect(errors.some((e) => e.includes("empty label"))).toBe(true);
  });

  test("13. missing accessibility summary is rejected", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      accessibility: undefined as never,
    });
    expect(errors.some((e) => e.includes("accessibility.summary"))).toBe(true);
  });

  test("14. intervention with unknown target / action is rejected", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      interventions: [
        { id: "iv1", agentLabel: "Agent", action: "magic" as never, targetId: "ghost" },
      ],
    });
    expect(errors.some((e) => e.includes("does not resolve to a node"))).toBe(true);
    expect(errors.some((e) => e.includes("unknown intervention action"))).toBe(true);
  });

  test("15. intervention edge must target the intervention's target", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      interventions: [{ id: "iv1", agentLabel: "Agent", action: "enzyme-inhibition", targetId: "b" }],
      edges: [
        { from: "a", to: "b", relationship: "leads_to", interventionId: "iv1" },
      ],
    });
    // a->b targets b, intervention targets b: valid
    expect(errors.filter((e) => e.includes("intervention"))).toEqual([]);
  });

  test("16. feedbackLoop declarations must reference feedback-shaped edges", () => {
    const errors = collectMechanismErrors({
      ...minimalValid,
      feedbackLoops: [{ edgeIds: ["e-a-b-0"], direction: "negative" }],
    });
    expect(errors.some((e) => e.includes("not feedback-shaped"))).toBe(true);
  });

  test("17. normal/abnormal panels must be declared together", () => {
    const onlyNormal = collectMechanismErrors({
      ...minimalValid,
      normalState: { label: "Normal", findings: [{ label: "x", direction: "normal", text: "y" }] },
    });
    expect(onlyNormal.some((e) => e.includes("without abnormalState"))).toBe(true);
  });
});

/* ============================================================
   3. Deterministic layout + spatial semantics
   ============================================================ */

describe("mechanism layout (deterministic + spatial)", () => {
  test("18. layout is a pure function — identical output across runs", () => {
    const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
    const a = JSON.stringify(layoutMechanism(mdd));
    const b = JSON.stringify(layoutMechanism(mdd));
    expect(a).toBe(b);
  });

  test("19. causal reading direction: every forward edge goes left -> right", () => {
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      const byId = new Map(l.nodes.map((n) => [n.id, n]));
      for (const e of l.edges) {
        const rel = getRelationshipMeta(e.edge.relationship)!;
        if (rel.shape !== "forward") continue;
        const from = byId.get(e.edge.from)!;
        const to = byId.get(e.edge.to)!;
        expect(to.x).toBeGreaterThan(from.x);
      }
    }
  });

  test("20. no node overlaps in any pilot", () => {
    for (const pilot of pilotMechanisms) {
      const l = layoutMechanism(pilot);
      for (let i = 0; i < l.nodes.length; i++) {
        for (let j = i + 1; j < l.nodes.length; j++) {
          const a = l.nodes[i];
          const b = l.nodes[j];
          const overlap =
            a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
          expect(overlap).toBe(false);
        }
      }
    }
  });

  test("21. branching is spatial: siblings spread across the layer", () => {
    // escitalopram: serotonin has two forward children (sert, cleft)
    const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;
    const l = layoutMechanism(esc);
    const children = esc.edges.filter((e) => e.from === "serotonin" && getRelationshipMeta(e.relationship)?.shape === "forward");
    expect(children.length).toBe(2);
    const y1 = l.nodes.find((n) => n.id === children[0].to)!.y;
    const y2 = l.nodes.find((n) => n.id === children[1].to)!.y;
    expect(Math.abs(y1 - y2)).toBeGreaterThan(20); // siblings visually separated
  });

  test("22. convergence is spatial: multiple parents share one child", () => {
    // MDD: syndrome receives from monoamine + hippocampus + circuit nodes
    const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
    const parents = mdd.edges.filter((e) => e.to === "syndrome");
    expect(parents.length).toBeGreaterThanOrEqual(4);
    const l = layoutMechanism(mdd);
    // fanIn attachment offsets exist for the convergence target
    const syndrome = l.nodes.find((n) => n.id === "syndrome")!;
    expect(syndrome.fanIn.length).toBe(parents.length);
  });

  test("23. feedback edges render as visible return paths with dedicated depth", () => {
    // v1 defect D-4: feedback existed in data but was invisible. v2 sweeps
    // every return edge BELOW the flow with its own depth budget.
    const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;
    const l = layoutMechanism(esc);
    const feedback = l.edges.filter((e) => e.isFeedback);
    expect(feedback.length).toBe(1); // the autoreceptor brake
    const nodesBottom = Math.max(...l.nodes.map((n) => n.y + n.h));
    for (const e of feedback) {
      // the terminal attaches to the TARGET's bottom edge; the visible
      // SWEEP + label must pass clearly below the node stack
      expect(e.labelY!).toBeGreaterThan(nodesBottom + 10);
      // path depth budget: canvas grew to fit the return path
      expect(l.height).toBeGreaterThan(nodesBottom + 30);
    }
    // and the return path is dotted+dashed, distinct from every forward edge
    for (const e of feedback) {
      const rel = getRelationshipMeta(e.edge.relationship)!;
      expect(rel.stroke).toBe("dashed");
      expect(rel.shape).toBe("return");
    }
  });

  test("24. interventions appear at their point of action", () => {
    const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;
    const l = layoutMechanism(esc);
    const ivEdge = l.edges.find((e) => e.isIntervention);
    expect(ivEdge).toBeDefined();
    const target = l.nodes.find((n) => n.id === ivEdge!.edge.to)!;
    // terminal lands on the target's left edge
    expect(Math.abs(ivEdge!.terminalX - target.x)).toBeLessThan(2);

    // MDD floating interventions render markers directly above their targets
    const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
    const lm = layoutMechanism(mdd);
    const floating = lm.interventions.filter((i) => i.marker);
    expect(floating.length).toBe(2); // SSRIs + ketamine
    for (const f of floating) {
      const target = lm.nodes.find((n) => n.id === f.intervention.targetId)!;
      expect(f.marker!.y + f.marker!.h).toBeLessThanOrEqual(target.y); // above
      expect(f.connectorPath).toBeTruthy();
    }
  });

  test("25. compartments bound their member nodes", () => {
    const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
    const l = layoutMechanism(mdd);
    expect(l.compartments.length).toBe(3);
    for (const c of l.compartments) {
      const members = l.nodes.filter((n) => n.node.compartmentId === c.id);
      expect(members.length).toBeGreaterThan(0);
      for (const m of members) {
        expect(m.x).toBeGreaterThanOrEqual(c.x);
        expect(m.y).toBeGreaterThanOrEqual(c.y);
        expect(m.x + m.w).toBeLessThanOrEqual(c.x + c.w + 0.5);
        expect(m.y + m.h).toBeLessThanOrEqual(c.y + c.h + 0.5);
      }
    }
  });

  test("26. timeline stages cover their nodes without overlap", () => {
    const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;
    const l = layoutMechanism(esc);
    expect(l.timeline.length).toBe(3);
    for (let i = 1; i < l.timeline.length; i++) {
      expect(l.timeline[i].x).toBeGreaterThan(l.timeline[i - 1].x);
    }
  });
});

/* ============================================================
   4. Accessibility text from data
   ============================================================ */

describe("mechanism a11y descriptions", () => {
  test("27. every edge has a screen-reader sentence", () => {
    for (const pilot of pilotMechanisms) {
      for (const e of pilot.edges ?? []) {
        const sentence = describeEdge(pilot, e);
        expect(sentence.length).toBeGreaterThan(5);
        expect(sentence).toContain(pilot.nodes.find((n) => n.id === e.from)!.label.split(" ")[0]);
        expect(sentence).toContain(pilot.nodes.find((n) => n.id === e.to)!.label.split(" ")[0]);
      }
    }
  });

  test("28. node context explains upstream and downstream", () => {
    const esc = pilotMechanisms.find((p) => p.topicId === "escitalopram")!;
    const ctx = describeNodeContext(esc, "sert");
    expect(ctx).toContain("Upstream");
    expect(ctx).toContain("Downstream");
    expect(ctx).toContain("Intervention"); // escitalopram acts at SERT
  });

  test("29. full mechanism text carries the causal story (no-JS fallback)", () => {
    const mdd = pilotMechanisms.find((p) => p.topicId === "major-depressive-disorder")!;
    const text = describeMechanism(mdd);
    expect(text).toContain("Causal relationships");
    expect(text).toContain("Normal state");
    expect(text).toContain("Disease state");
    expect(text).toContain("Evidence grade");
    for (const iv of mdd.interventions ?? []) {
      expect(text).toContain(iv.agentLabel);
    }
  });
});

/* ============================================================
   5. Synthetic layout fixtures
   ============================================================ */

/**
 * TEST FIXTURE — NOT MEDICAL CONTENT.
 * Synthetic graph exercising layout extremes with zero medical meaning.
 */
const TEST_FIXTURE_NOT_MEDICAL: MechanismDefinition = {
  mechanismId: "test-fixture-layout-extremes",
  topicId: "test-fixture",
  title: "TEST FIXTURE — NOT MEDICAL CONTENT",
  summary: "Synthetic layout fixture: deep chain, wide fan, diamond convergence, stacked feedback. Not medical content.",
  migration: "test-fixture",
  accessibility: { summary: "Synthetic non-medical layout fixture." },
  nodes: Array.from({ length: 14 }, (_, i) => ({
    id: `n${i}`,
    label: i === 13 ? "Sink (fixture)" : `Fixture node ${i} with a longer label to wrap`,
    sublabel: i % 3 === 0 ? "Synthetic sublabel for wrapping measurement" : undefined,
  })),
  edges: [
    { from: "n0", to: "n1", relationship: "leads_to" },
    { from: "n1", to: "n2", relationship: "leads_to" },
    { from: "n2", to: "n3", relationship: "activates" },
    { from: "n2", to: "n4", relationship: "inhibits" },
    { from: "n2", to: "n5", relationship: "binds" },
    { from: "n3", to: "n6", relationship: "leads_to" },
    { from: "n4", to: "n6", relationship: "leads_to" },
    { from: "n5", to: "n6", relationship: "leads_to" },
    { from: "n6", to: "n7", relationship: "converts" },
    { from: "n7", to: "n8", relationship: "transports" },
    { from: "n8", to: "n9", relationship: "leads_to" },
    { from: "n9", to: "n10", relationship: "increases" },
    { from: "n10", to: "n11", relationship: "decreases" },
    { from: "n11", to: "n13", relationship: "leads_to" },
    { from: "n9", to: "n12", relationship: "compensates" },
    { from: "n12", to: "n13", relationship: "leads_to" },
    { from: "n11", to: "n1", relationship: "negative_feedback", label: "fixture return path" },
    { from: "n10", to: "n2", relationship: "positive_feedback", label: "fixture amplifying loop" },
  ],
  interventions: [
    { id: "iv-fixture", agentLabel: "Fixture agent", action: "enzyme-inhibition", targetId: "n8" },
  ],
};

describe("synthetic layout fixture (NOT MEDICAL CONTENT)", () => {
  test("30. fixture validates, lays out, and survives deep chains + stacked feedback", () => {
    expect(() => validateMechanism(TEST_FIXTURE_NOT_MEDICAL)).not.toThrow();
    const l = layoutMechanism(TEST_FIXTURE_NOT_MEDICAL);
    expect(l.warnings).toEqual([]);
    // no overlaps
    for (let i = 0; i < l.nodes.length; i++) {
      for (let j = i + 1; j < l.nodes.length; j++) {
        const a = l.nodes[i];
        const b = l.nodes[j];
        expect(
          a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h
        ).toBe(false);
      }
    }
    // both feedback loops routed below the flow
    const feedback = l.edges.filter((e) => e.isFeedback);
    expect(feedback.length).toBe(2);
    const bottom = Math.max(...l.nodes.map((n) => n.y + n.h));
    for (const e of feedback) expect(e.labelY!).toBeGreaterThan(bottom - 30);
    // stacked at different depths
    expect(Math.abs(feedback[0].labelY! - feedback[1].labelY!)).toBeGreaterThan(10);
    // floating intervention marker placed above its target
    const marker = l.interventions.find((i) => i.marker);
    expect(marker).toBeDefined();
  });

  test("31. fixture title self-identifies as not medical content", () => {
    expect(TEST_FIXTURE_NOT_MEDICAL.title).toContain("TEST FIXTURE — NOT MEDICAL CONTENT");
    expect(TEST_FIXTURE_NOT_MEDICAL.migration).toBe("test-fixture");
  });
});
