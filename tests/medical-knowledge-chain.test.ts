/**
 * Knowledge Backend regression suite — graph layer.
 *
 * Pins the evidence-backed derivation contract of src/lib/kyp/knowledge:
 *   - chains exist for every registry drug and null for unknown slugs
 *   - target edges resolve via the canonical registry with VERBATIM
 *     evidence preserved (no invented relationships)
 *   - the specific drugs verified in the recovered QA evidence
 *     (sertraline, bupropion, mirtazapine) produce the documented edges
 *   - cranial nerves stay identity-only (zero drug links — by design)
 *   - condition / side-effect / monitoring edges flow through from the
 *     locked data layer untouched
 *   - dangling references degrade gracefully (unresolved texts surface,
 *     nothing crashes, no edge is fabricated)
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import {
  getDrugKnowledgeChain,
  getKnowledgeChainSlugs,
  knowledgeGraph,
  knowledgeTargets,
} from "@/lib/kyp/knowledge";
import {
  mechanismActions,
  getMechanismActionLabel,
} from "@/lib/kyp/knowledge/entities/mechanism-actions";
import { drugs } from "@/lib/kyp/data/drugs/index";
import {
  buildKnowledgeChainRows,
} from "@/components/kyp/sections/drug/medical-knowledge-chain";

const ALL_SLUGS = getKnowledgeChainSlugs();

describe("knowledge graph — registries", () => {
  test("every registry drug has a chain", () => {
    expect(ALL_SLUGS.length).toBe(12);
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug);
      expect(chain).not.toBeNull();
      expect(chain!.slug).toBe(slug);
    }
  });

  test("unknown slug returns null (dangling-reference handling)", () => {
    expect(getDrugKnowledgeChain("not-a-real-drug")).toBeNull();
    expect(getDrugKnowledgeChain("")).toBeNull();
  });

  test("cranial nerves are identity-only — zero drug links (design invariant)", () => {
    for (const nerve of knowledgeGraph.cranialNerves.values()) {
      expect(nerve.drugSlugs.length).toBe(0);
    }
    expect(knowledgeGraph.cranialNerves.size).toBe(12);
  });

  test("mechanism action registry is stable and labels resolve", () => {
    expect(mechanismActions.map((a) => a.id)).toEqual([
      "reuptake-inhibition",
      "receptor-antagonism",
      "receptor-agonism",
      "enzyme-inhibition",
      "ion-channel-blockade",
      "autoreceptor-desensitisation",
      "negligible-affinity",
    ]);
    expect(getMechanismActionLabel("reuptake-inhibition")).toBe("Reuptake inhibition");
    expect(getMechanismActionLabel("unknown-id")).toBeNull();
  });

  test("target ids are unique and match patterns are non-empty", () => {
    const ids = new Set(knowledgeTargets.map((t) => t.id));
    expect(ids.size).toBe(knowledgeTargets.length);
    for (const target of knowledgeTargets) {
      expect(target.match.length).toBeGreaterThan(0);
    }
  });
});

describe("knowledge graph — chain derivation", () => {
  test("chains carry class labels from the registry", () => {
    const byClass = new Map(drugs.map((d) => [d.slug, d.drugClassLabel]));
    for (const slug of ALL_SLUGS) {
      expect(getDrugKnowledgeChain(slug)!.class.label).toBe(byClass.get(slug) ?? "");
    }
  });

  test("every target edge preserves verbatim evidence from the data layer", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const drug = drugs.find((d) => d.slug === slug)!;
      const sourceTexts = [
        drug.mechanism.molecularTarget,
        ...drug.receptors,
        ...drug.mechanism.summary.split(/(?<=[.!?])\s+/),
      ];
      for (const edge of chain.drug.targetEdges) {
        expect(edge.evidence.length).toBeGreaterThan(0);
        for (const ev of edge.evidence) {
          // Every evidence string must exist verbatim in the source data.
          expect(sourceTexts.includes(ev)).toBe(true);
        }
        // Every edge action is a registry id.
        for (const action of edge.actions) {
          expect(mechanismActions.some((a) => a.id === action)).toBe(true);
        }
      }
    }
  });

  test("neurotransmitters resolve to registry entities or surface unresolved", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const drug = drugs.find((d) => d.slug === slug)!;
      const resolvedNames = chain.neurotransmitters.map((n) => n.name);
      const totalHandled =
        resolvedNames.length + chain.drug.unresolvedNeurotransmitterTexts.length;
      // Nothing is silently dropped: every source NT string is accounted for.
      expect(totalHandled).toBeGreaterThanOrEqual(
        new Set(drug.neurotransmitters).size
      );
    }
  });

  test("monitoring parameters pass through from the locked data", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const drug = drugs.find((d) => d.slug === slug)!;
      expect(chain.drug.monitoring.map((m) => m.parameter)).toEqual(
        drug.monitoring.map((m) => m.parameter)
      );
      expect(chain.drug.monitoring[0]).toHaveProperty("frequency");
      expect(chain.drug.monitoring[0]).toHaveProperty("rationale");
    }
  });

  test("side-effect edges: common tier before serious, names from data", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const drug = drugs.find((d) => d.slug === slug)!;
      const edges = chain.drug.sideEffectEdges;
      const firstSerious = edges.findIndex((e) => e.tier === "serious");
      if (firstSerious !== -1) {
        for (let i = 0; i < firstSerious; i++) {
          expect(edges[i].tier).toBe("common");
        }
      }
      const names = edges.map((e) => e.name);
      for (const s of drug.commonSideEffects) expect(names).toContain(s.name);
      for (const s of drug.seriousSideEffects) expect(names).toContain(s.name);
    }
  });

  test("condition edges reference registry keys only", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      for (const edge of chain.drug.conditionEdges) {
        expect(knowledgeGraph.conditions.has(edge.conditionKey)).toBe(true);
        expect(edge.sources.length).toBeGreaterThan(0);
        for (const source of edge.sources) {
          expect(source).toMatch(/^(related|indication):/);
        }
      }
    }
  });

  test("MDD condition has a disease page and an ICD-10 reference", () => {
    const mdd = knowledgeGraph.conditions.get("major-depressive-disorder");
    expect(mdd).toBeDefined();
    expect(mdd!.hasDiseasePage).toBe(true);
    expect(mdd!.icd10).toMatch(/^F3/);
  });
});

describe("knowledge graph — recovered QA evidence anchors", () => {
  test("sertraline: SERT primary edge with reuptake inhibition; 5 documented edges", () => {
    const ser = getDrugKnowledgeChain("sertraline")!;
    const ids = ser.drug.targetEdges.map((e) => e.targetId);
    expect(ids).toEqual(["sert", "5ht1a", "5ht2c", "5ht7", "sigma-1"]);

    const sert = ser.drug.targetEdges[0];
    expect(sert.fromPrimaryTargetField).toBe(true);
    expect(sert.actions).toContain("reuptake-inhibition");
    expect(sert.evidence).toContain("SERT (SLC6A4 — serotonin transporter)");

    const sigma = ser.drug.targetEdges.find((e) => e.targetId === "sigma-1")!;
    expect(sigma.actions).toContain("receptor-agonism");

    // Sertraline has no named dopamine pathway (SSRIs act on diffuse
    // serotonergic projections) — the row must be data-driven empty.
    expect(ser.pathways).toEqual([]);
    expect(ser.neurotransmitters.map((n) => n.abbreviation)).toEqual(["5-HT"]);
  });

  test("bupropion: NET/DAT reuptake inhibition, nicotinic antagonism, negligible SERT, mesolimbic pathway", () => {
    const bup = getDrugKnowledgeChain("bupropion")!;
    const byId = new Map(bup.drug.targetEdges.map((e) => [e.targetId, e]));

    expect(byId.get("net")!.fromPrimaryTargetField).toBe(true);
    expect(byId.get("net")!.actions).toContain("reuptake-inhibition");
    expect(byId.get("dat")!.actions).toContain("reuptake-inhibition");
    expect(byId.get("sert")!.actions).toContain("negligible-affinity");
    expect(byId.get("alpha3beta4-nachr")!.actions).toContain("receptor-antagonism");
    expect(byId.get("alpha4beta2-nachr")!.actions).toContain("receptor-antagonism");

    // QA: pathway card "Ventral Tegmental Area (VTA) → Nucleus Accumbens".
    const mesolimbic = bup.pathways.find(
      (p) => p.entity.id === "mesolimbic"
    );
    expect(mesolimbic).toBeDefined();
    expect(mesolimbic!.entity.origin).toBe("Ventral Tegmental Area (VTA)");
    expect(mesolimbic!.entity.termination).toBe("Nucleus Accumbens");

    // QA: neurotransmitter abbreviations NE / DA / Ach.
    const abbrevs = bup.neurotransmitters.map((n) => n.abbreviation);
    expect(abbrevs).toContain("NE");
    expect(abbrevs).toContain("DA");
    expect(abbrevs).toContain("Ach");
  });

  test("mirtazapine: 5-HT2A (not 5-HT1A), H1 antagonism, no transporter edge", () => {
    const mir = getDrugKnowledgeChain("mirtazapine")!;
    const ids = mir.drug.targetEdges.map((e) => e.targetId);
    expect(ids).toContain("5ht2a");
    expect(ids).not.toContain("5ht1a");
    expect(ids).toContain("h1-histamine");
    expect(ids).toContain("alpha2-adrenergic");
    // NaSSA — NO transporter blockade.
    expect(ids).not.toContain("sert");
    expect(ids).not.toContain("net");
    expect(ids).not.toContain("dat");
    expect(mir.drug.mechanism.actions).toContain("receptor-antagonism");
  });

  test("TCAs: amitriptyline and clomipramine link SERT + NET + cardiac Na+ channel", () => {
    for (const slug of ["amitriptyline", "clomipramine"]) {
      const chain = getDrugKnowledgeChain(slug)!;
      const ids = chain.drug.targetEdges.map((e) => e.targetId);
      expect(ids).toContain("sert");
      expect(ids).toContain("net");
      expect(ids).toContain("cardiac-na-channel");
      expect(ids).toContain("m1-muscarinic");
      expect(ids).toContain("h1-histamine");
      expect(ids).toContain("alpha1-adrenergic");
    }
  });

  test("SNRIs: venlafaxine and duloxetine link SERT + NET from the primary field", () => {
    for (const slug of ["venlafaxine", "duloxetine"]) {
      const chain = getDrugKnowledgeChain(slug)!;
      const sert = chain.drug.targetEdges.find((e) => e.targetId === "sert");
      const net = chain.drug.targetEdges.find((e) => e.targetId === "net");
      expect(sert?.fromPrimaryTargetField).toBe(true);
      expect(net?.fromPrimaryTargetField).toBe(true);
    }
  });
});

describe("knowledge chain — rendered row contract (buildKnowledgeChainRows)", () => {
  const rowsFor = (slug: string) =>
    buildKnowledgeChainRows(getDrugKnowledgeChain(slug)!);
  const rowKeysFor = (slug: string) => rowsFor(slug).map((r) => r.key);

  test("every drug renders the documented row order", () => {
    // The full 9-row order (QA evidence: bupropion desktop render).
    expect(rowKeysFor("bupropion")).toEqual([
      "medication-class",
      "mechanism",
      "molecular-targets",
      "neurotransmitters",
      "brain-regions",
      "neural-pathways",
      "conditions",
      "side-effects",
      "monitoring",
    ]);
    // All 12 drugs carry the 8 universal rows; neural-pathways is
    // data-driven (only bupropion has named pathway IDs in the data).
    for (const slug of ALL_SLUGS) {
      const keys = rowKeysFor(slug).filter((k) => k !== "neural-pathways");
      expect(keys).toEqual([
        "medication-class",
        "mechanism",
        "molecular-targets",
        "neurotransmitters",
        "brain-regions",
        "conditions",
        "side-effects",
        "monitoring",
      ]);
      for (const row of rowsFor(slug)) {
        expect(row.chips.length).toBeGreaterThan(0);
      }
    }
  });

  test("medication-class row links the drug page and the class collection", () => {
    const bup = rowsFor("bupropion");
    const mc = bup[0];
    expect(mc.chips[0].label).toBe("Bupropion");
    expect(mc.chips[0].href).toBe("/drugs/bupropion");
    expect(mc.chips[1].label).toBe("NDRI");
    expect(mc.chips[1].href).toBe("/drugs/class/ndri");
  });

  test("mechanism row carries the primary target text with gene symbols (QA evidence)", () => {
    const bup = rowsFor("bupropion");
    const mech = bup.find((r) => r.key === "mechanism")!;
    expect(mech.text).toContain("SLC6A2");
    expect(mech.text).toContain("SLC6A3");
    // Derived action chips render human labels with machine ids as meta.
    const reuptake = mech.chips.find((c) => c.meta === "reuptake-inhibition");
    expect(reuptake?.label).toBe("Reuptake inhibition");
  });

  test("molecular-target chips carry kind badges and action meta (QA evidence)", () => {
    const bup = rowsFor("bupropion");
    const targets = bup.find((r) => r.key === "molecular-targets")!;
    const net = targets.chips.find((c) => c.label === "NET");
    expect(net?.badge?.label).toBe("Transporter");
    expect(net?.meta).toContain("Reuptake inhibition");
    // Nicotinic receptors are Receptors with antagonism meta.
    const nachr = targets.chips.find((c) => c.label === "α3β4 nAChR");
    expect(nachr?.badge?.label).toBe("Receptor");
    expect(nachr?.meta).toContain("Receptor antagonism");
    // SERT chip carries the negligible-affinity action for bupropion.
    const sert = targets.chips.find((c) => c.label === "SERT");
    expect(sert?.meta).toContain("Negligible affinity");
    // Every chip preserves verbatim evidence in its tooltip title.
    expect(net?.title).toContain("norepinephrine transporter");
  });

  test("neurotransmitter chips carry abbreviation badges (QA: NE / DA / Ach)", () => {
    const bup = rowsFor("bupropion");
    const nts = bup.find((r) => r.key === "neurotransmitters")!;
    const badges = nts.chips.map((c) => c.badge?.label);
    expect(badges).toContain("NE");
    expect(badges).toContain("DA");
    expect(badges).toContain("Ach");
  });

  test("pathway chips render origin → termination (QA: VTA → Nucleus Accumbens)", () => {
    const bup = rowsFor("bupropion");
    const pathways = bup.find((r) => r.key === "neural-pathways")!;
    expect(
      pathways.chips.some((c) =>
        c.label.startsWith("Ventral Tegmental Area (VTA) → Nucleus Accumbens")
      )
    ).toBe(true);
    // SSRIs have no named dopamine pathways — the row disappears
    // entirely for sertraline (data-driven omission).
    expect(rowKeysFor("sertraline")).not.toContain("neural-pathways");
  });

  test("condition chips: MDD links the disease page with ICD in the title", () => {
    const ser = rowsFor("sertraline");
    const conditions = ser.find((r) => r.key === "conditions")!;
    const mdd = conditions.chips.find((c) => c.label === "Major Depressive Disorder");
    expect(mdd?.href).toBe("/diseases/major-depressive-disorder");
    expect(mdd?.badge?.label).toBe("KYP page");
    expect(mdd?.title).toContain("ICD-10");
    // Non-page conditions fall back to the in-page anchor.
    const ocd = conditions.chips.find((c) => c.label === "Obsessive-Compulsive Disorder");
    expect(ocd?.href).toBe("#clinical-uses");
  });

  test("side-effect chips carry tier badges and frequency meta", () => {
    const ser = rowsFor("sertraline");
    const se = ser.find((r) => r.key === "side-effects")!;
    const common = se.chips.find((c) => c.badge?.label === "Common");
    expect(common?.meta).toBe("very common");
    const serious = se.chips.find((c) => c.badge?.label === "Serious");
    expect(serious).toBeDefined();
  });

  test("monitoring chips carry frequency meta and rationale titles", () => {
    const bup = rowsFor("bupropion");
    const mon = bup.find((r) => r.key === "monitoring")!;
    const seizure = mon.chips.find((c) =>
      c.label.startsWith("Seizure history")
    );
    expect(seizure).toBeDefined();
    expect(seizure?.meta).toContain("Baseline");
    expect(seizure?.title).toContain("seizure");
  });

  test("unknown chain never reaches the row builder (component returns null)", () => {
    // The component guards on getDrugKnowledgeChain() === null before
    // building rows; the builder itself only ever sees real chains.
    expect(getDrugKnowledgeChain("does-not-exist")).toBeNull();
  });
});
