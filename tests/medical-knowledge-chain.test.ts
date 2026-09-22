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
 *   - condition identity: qualifier spellings of one entity merge into one
 *     key, and the shared display name prefers the qualifier-free plain
 *     form (order-independent; shortest qualified fallback; disease-page
 *     titles never overwritten; no drug page shows another drug's qualifier)
 *   - dangling references degrade gracefully (unresolved texts surface,
 *     nothing crashes, no edge is fabricated)
 *
 * Phase 3 — Knowledge Chain semantic integrity:
 *   - THE primary target: exactly one (from the data's own explicit
 *     statement or undisputed primary-field survivorship) or an explicit
 *     no-single-primary state — never an array, never inferred, never a
 *     promoted additional target
 *   - additional targets stay additional; effects stay isolated to
 *     their own target relationship
 *   - resolution is independent of receptor-array order (mandatory)
 *   - all 12 canonical medications pinned in an audit table
 *   - Citalopram: ONE Primary Target (SERT); hERG/KCNH2 stays additional
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import {
  getDrugKnowledgeChain,
  getKnowledgeChainSlugs,
  knowledgeGraph,
  knowledgeTargets,
  resolveConditionDisplayName,
  conditionKeyFromName,
  resolvePrimaryTarget,
  resolvePrimaryTargetFromTexts,
} from "@/lib/kyp/knowledge";
import type { PrimaryTargetBasis } from "@/lib/kyp/knowledge";
import {
  mechanismActions,
  getMechanismActionLabel,
} from "@/lib/kyp/knowledge/entities/mechanism-actions";
import { drugs } from "@/lib/kyp/data/drugs/index";
import {
  buildKnowledgeChainView,
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

describe("knowledge chain — rendered view contract (buildKnowledgeChainView)", () => {
  const viewFor = (slug: string) =>
    buildKnowledgeChainView(getDrugKnowledgeChain(slug)!);

  test("every drug renders the primary path with at most ONE primary target node", () => {
    for (const slug of ALL_SLUGS) {
      const view = viewFor(slug);
      expect(view.path[0].role).toBe("medication");
      expect(view.path[1].role).toBe("class");
      expect(view.path[2].role).toBe("mechanism");
      const targetNodes = view.path.filter((n) => n.role === "target");
      // 3B/3H: exactly ONE primary target node — never two, never zero+promoted.
      expect(targetNodes.length).toBeLessThanOrEqual(1);
      // Exactly one node carries the "Primary target" overline.
      const primaryLabelled = view.path.filter((n) => n.roleLabel === "Primary target");
      expect(primaryLabelled.length).toBe(1);
      if (view.primaryTarget) {
        expect(targetNodes.length).toBe(1);
        expect(view.path.some((n) => n.role === "missing-primary")).toBe(false);
      } else {
        // Explicit missing-primary state — never a silent fallback.
        expect(view.path.some((n) => n.role === "missing-primary")).toBe(true);
      }
    }
  });

  test("path nodes carry data-derived labels: drug name, class label, class full name, class link", () => {
    for (const slug of ALL_SLUGS) {
      const drug = drugs.find((d) => d.slug === slug)!;
      const view = viewFor(slug);
      expect(view.path[0].label).toBe(drug.genericName);
      expect(view.path[1].label).toBe(drug.drugClassLabel);
      expect(view.path[2].label).toBe(drug.drugClassFullName);
      expect(view.path[1].href).toBe(
        `/drugs/class/${drug.drugClassLabel.toLowerCase()}`
      );
    }
  });

  test("sertraline: SERT primary target with full name, kind metadata, and a separate Effect node", () => {
    const view = viewFor("sertraline");
    expect(view.path.filter((n) => n.role === "target").map((n) => n.label)).toEqual(["SERT"]);
    // 3E contract — the view model exposes exactly one primary target.
    expect(view.primaryTarget).not.toBeNull();
    expect(view.primaryTarget!.targetId).toBe("sert");
    expect(view.primaryTarget!.name).toBe("SERT");
    expect(view.primaryTarget!.fullName).toBe("Serotonin transporter");
    expect(view.primaryTarget!.kindLabel).toBe("Transporter");
    expect(view.primaryTarget!.effectLabel).toBe("Reuptake inhibition");
    const sert = view.path.find((n) => n.key === "target-sert")!;
    expect(sert.sublabel).toBe("Serotonin transporter");
    expect(sert.kindLabel).toBe("Transporter");
    expect(sert.href).toBe("#mechanism");
    expect(sert.title).toContain("SERT (SLC6A4 — serotonin transporter)");
    // 3N/3G — the primary effect is its own terminal node, tied to the
    // primary target only.
    const effect = view.path.find((n) => n.role === "effect")!;
    expect(effect.label).toBe("Reuptake inhibition");
    expect(view.path[view.path.length - 1].role).toBe("effect");
    // The verbatim authored molecular-target string is preserved as caption.
    expect(view.mechanismCaption).toBe("SERT (SLC6A4 — serotonin transporter)");
  });

  test("bupropion: no single primary target — explicit missing state, co-equal targets stay additional, negligible SERT never renders", () => {
    const view = viewFor("bupropion");
    // The data names NET, DAT and both nAChRs co-equally — no single primary.
    expect(view.primaryTarget).toBeNull();
    expect(view.primaryBasis).toBe("no-single-primary");
    expect(view.path.some((n) => n.role === "target")).toBe(false);
    const missing = view.path.find((n) => n.role === "missing-primary")!;
    expect(missing.label).toBe("No single primary target");
    // No effect node without a primary target (effect isolation).
    expect(view.path.some((n) => n.role === "effect")).toBe(false);
    // All four co-equal targets remain visible as additional rows —
    // never lost, never promoted (registry order).
    expect(view.additionalTargets.map((r) => r.key)).toEqual([
      "target-net",
      "target-dat",
      "target-5ht3a",
      "target-alpha3beta4-nachr",
      "target-alpha4beta2-nachr",
    ]);
    expect(view.path.some((n) => n.key === "target-sert")).toBe(false);
    expect(view.additionalTargets.some((r) => r.name === "SERT")).toBe(false);
    expect(view.mechanismCaption).toContain("NO clinically meaningful SERT affinity");
  });

  test("mirtazapine: no single primary target — five co-equal receptors stay additional, no transporters anywhere", () => {
    const view = viewFor("mirtazapine");
    expect(view.primaryTarget).toBeNull();
    expect(view.path.some((n) => n.role === "target")).toBe(false);
    const names = view.additionalTargets.map((r) => r.name).sort();
    expect(names).toEqual(
      ["5-HT2A", "5-HT2C", "5-HT3", "H1 histamine", "α2-adrenergic", "α1-adrenergic", "Muscarinic M1"].sort()
    );
    expect(
      view.path.some((n) => n.key.startsWith("target-sert") || n.key.startsWith("target-net") || n.key.startsWith("target-dat"))
    ).toBe(false);
  });

  test("no target relationship is lost between path, additional targets, and caption", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const view = viewFor(slug);
      const expected = chain.drug.targetEdges
        .filter((e) => !(e.actions.length === 1 && e.actions[0] === "negligible-affinity"))
        .map((e) => e.targetId);
      const rendered = [
        ...view.path.filter((n) => n.role === "target").map((n) => n.key.replace("target-", "")),
        ...view.additionalTargets.map((r) => r.key.replace("target-", "")),
      ];
      expect([...rendered].sort()).toEqual([...expected].sort());
      // Every edge's evidence remains accessible via the title tooltip.
      for (const edge of chain.drug.targetEdges) {
        const node = view.path.find((n) => n.key === `target-${edge.targetId}`);
        const row = view.additionalTargets.find((r) => r.key === `target-${edge.targetId}`);
        if (!node && !row) {
          // The only edges outside the rendered target set are negligible ones.
          expect(edge.actions).toEqual(["negligible-affinity"]);
          expect(view.mechanismCaption.length).toBeGreaterThan(0);
        } else {
          expect((node ?? row)!.title).toContain(edge.evidence[0]);
        }
      }
    }
  });

  test("additional targets carry human action labels with kind as secondary metadata", () => {
    const ser = viewFor("sertraline");
    expect(ser.additionalTargets.map((r) => r.name).sort()).toEqual(
      ["5-HT1A", "5-HT2C", "5-HT7", "σ1"].sort()
    );
    const h51a = ser.additionalTargets.find((r) => r.name === "5-HT1A")!;
    expect(h51a.relationship).toBe("Autoreceptor desensitisation");
    expect(h51a.kindLabel).toBe("Receptor");
    expect(h51a.title).toContain("desensit");
    const sigma = ser.additionalTargets.find((r) => r.name === "σ1")!;
    expect(sigma.relationship).toBe("Receptor agonism");
    // mirtazapine (no single primary): α1 and M1 are additional rows like
    // every other target; the M1 full name genuinely expands
    // "Muscarinic M1" so it renders as descriptor.
    const mir = viewFor("mirtazapine");
    const m1 = mir.additionalTargets.find((r) => r.name === "Muscarinic M1")!;
    expect(m1.descriptor).toBe("M1 muscarinic acetylcholine receptor");
    // The data derives no action for this edge ("very weak — minimal
    // anticholinergic effect") — the row degrades to identity + kind.
    expect(m1.relationship).toBeUndefined();
    expect(m1.kindLabel).toBe("Receptor");
    // amitriptyline (no single primary): SERT and NET stay visible as
    // additional rows next to the off-target receptors — co-equal per
    // the data, never promoted, never hidden.
    const ami = viewFor("amitriptyline");
    expect(ami.primaryTarget).toBeNull();
    expect(ami.additionalTargets.map((r) => r.name)).toContain("SERT");
    expect(ami.additionalTargets.map((r) => r.name)).toContain("NET");
    expect(ami.additionalTargets.map((r) => r.name)).toContain("H1 histamine");
  });

  test("every rendered action label is a registry human label (no raw ids leak)", () => {
    const registryLabels = new Set(mechanismActions.map((a) => a.label));
    for (const slug of ALL_SLUGS) {
      const view = viewFor(slug);
      const labels = [
        ...view.path.filter((n) => n.role === "effect").map((n) => n.label),
        ...view.additionalTargets.map((r) => r.relationship).filter((l): l is string => Boolean(l)),
      ];
      for (const label of labels) {
        for (const part of label.split(" · ")) {
          expect(registryLabels.has(part)).toBe(true);
        }
      }
    }
  });

  test("conditions: acronym-suffixed duplicates merge; every edge is accounted for exactly once", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const view = viewFor(slug);
      // Recompute the expected merge keys from the registry names.
      const expected = new Set(
        chain.drug.conditionEdges.map((edge) => {
          const condition = knowledgeGraph.conditions.get(edge.conditionKey);
          const name = condition?.name ?? edge.conditionKey;
          const stripped = name.replace(/\s*\(([A-Z][A-Z0-9]*)\)\s*/g, " ");
          return stripped
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        })
      );
      const rendered = view.conditionGroups.flatMap((g) => g.items.map((i) => i.key));
      expect(new Set(rendered)).toEqual(expected);
      expect(new Set(rendered).size).toBe(rendered.length); // no double-render
    }
  });

  test("MDD merges its indication duplicate into the page-linked entry with unioned statuses", () => {
    for (const slug of ALL_SLUGS) {
      const view = viewFor(slug);
      const group = view.conditionGroups.find((g) => g.key === "page-linked")!;
      expect(group).toBeDefined();
      expect(group.items.length).toBe(1);
      const mdd = group.items[0];
      expect(mdd.key).toBe("major-depressive-disorder");
      expect(mdd.name).toBe("Major Depressive Disorder");
      expect(mdd.href).toBe("/diseases/major-depressive-disorder");
      expect(mdd.icd10).toMatch(/^F3/);
      expect(mdd.title).toContain("ICD-10");
      // The "(MDD)" indication duplicate merged in — rendered once as the
      // canonical page-linked entry. Since the condition-identity fix on
      // main, the graph layer itself merges qualifier spellings of one
      // entity into a single edge with unioned sources, so every drug —
      // fluvoxamine included — carries exactly ONE Major Depressive entry.
      const allNames = view.conditionGroups.flatMap((g) => g.items.map((i) => i.name));
      expect(allNames.filter((n) => n.startsWith("Major Depressive")).length).toBe(1);
    }
    // sertraline: unioned statuses primary · FDA approved on the page link.
    const ser = viewFor("sertraline");
    const serMdd = ser.conditionGroups
      .find((g) => g.key === "page-linked")!
      .items.find((i) => i.key === "major-depressive-disorder")!;
    expect(serMdd.statuses).toContain("primary");
    expect(serMdd.statuses).toContain("FDA approved");
    // fluvoxamine: MDD is off-label in the US — the honest status survives
    // the merge, and the entry still links the dedicated MDD page.
    const flv = viewFor("fluvoxamine");
    const flvMdd = flv.conditionGroups
      .find((g) => g.key === "page-linked")!
      .items.find((i) => i.key === "major-depressive-disorder")!;
    expect(flvMdd.statuses).toContain("off-label");
    expect(flvMdd.href).toBe("/diseases/major-depressive-disorder");
  });

  test("non-page conditions degrade to plain text grouped by status (no dead links)", () => {
    const ser = viewFor("sertraline");
    const nonPage = ser.conditionGroups
      .filter((g) => g.key !== "page-linked")
      .flatMap((g) => g.items);
    expect(nonPage.length).toBeGreaterThan(0);
    for (const item of nonPage) expect(item.href).toBeUndefined();
    // sertraline: OCD/Panic/PTSD/Social/PMDD are primary uses; GAD is off-label.
    const primary = ser.conditionGroups.find((g) => g.key === "primary")!;
    expect(primary.items.map((i) => i.name)).toContain("Obsessive-Compulsive Disorder");
    const offLabel = ser.conditionGroups.find((g) => g.key === "off-label")!;
    expect(offLabel.items.map((i) => i.name)).toContain("Generalised Anxiety Disorder");
    // amitriptyline: the off-label pain/insomnia cluster groups together.
    // ("Migraine prophylaxis" — the canonical plain display name the
    // condition-identity fix resolves for the "Migraine (prophylaxis)"
    // spelling; a DISTINCT entity from acute "Migraine".)
    const ami = viewFor("amitriptyline");
    const amiOff = ami.conditionGroups.find((g) => g.key === "off-label")!;
    for (const name of ["Diabetic Neuropathy", "Migraine prophylaxis", "Insomnia"]) {
      expect(amiOff.items.map((i) => i.name)).toContain(name);
    }
  });

  test("safety summary carries every side-effect name and monitoring passthrough", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const view = viewFor(slug);
      const rendered = view.safety.sideEffectTiers.flatMap((t) => t.names).sort();
      expect(rendered).toEqual([...chain.drug.sideEffectEdges.map((e) => e.name)].sort());
      expect(view.safety.monitoring.map((m) => m.parameter)).toEqual(
        chain.drug.monitoring.map((m) => m.parameter)
      );
    }
    const bup = viewFor("bupropion");
    const seizure = bup.safety.monitoring.find((m) =>
      m.parameter.startsWith("Seizure history")
    );
    expect(seizure).toBeDefined();
    expect(seizure!.frequency).toContain("Baseline");
    expect(seizure!.rationale).toContain("seizure");
  });

  test("system context: bupropion mesolimbic route and stimulant class; sertraline omits them", () => {
    const bup = viewFor("bupropion");
    expect(bup.systemContext.substanceClass?.name).toBe("Stimulant");
    expect(bup.systemContext.substanceClass?.description).toContain("catecholamine");
    const meso = bup.systemContext.pathways.find((p) => p.name === "Mesolimbic Pathway");
    expect(meso?.route).toBe("Ventral Tegmental Area (VTA) → Nucleus Accumbens");
    expect(meso?.note).toContain("Reward");
    expect(bup.systemContext.brainRegions.length).toBeGreaterThan(0);

    const ser = viewFor("sertraline");
    expect(ser.systemContext.substanceClass).toBeUndefined();
    expect(ser.systemContext.pathways).toEqual([]);
  });

  test("neurotransmitters surface resolved entities (QA: NE / DA / Ach)", () => {
    const bup = viewFor("bupropion");
    const abbrevs = bup.neurotransmitters.resolved.map((n) => n.abbreviation);
    expect(abbrevs).toContain("NE");
    expect(abbrevs).toContain("DA");
    expect(abbrevs).toContain("Ach");
    const ser = viewFor("sertraline");
    expect(ser.neurotransmitters.resolved.map((n) => n.abbreviation)).toEqual(["5-HT"]);
  });

  test("unknown chain never reaches the view builder (component returns null)", () => {
    expect(getDrugKnowledgeChain("does-not-exist")).toBeNull();
  });
});

describe("knowledge chain — primary-target semantic contract (Phase 3)", () => {
  /**
   * 3K-A — Single primary + one additional.
   * Synthetic mirror of the Citalopram shape: primary field names SERT
   * and hERG; the effect text qualifies hERG as off-target.
   */
  test("A. single primary + one additional → primary = SERT, additional = [hERG]", () => {
    const resolution = resolvePrimaryTargetFromTexts(
      "SERT (SLC6A4 — serotonin transporter) — via the S-enantiomer; hERG (KCNH2) potassium channel — via the R-enantiomer",
      "Acute: increased synaptic serotonin. Parallel off-target (R-enantiomer): hERG blockade → delayed ventricular repolarisation.",
      ["sert", "herg"]
    );
    expect(resolution.primaryTargetId).toBe("sert");
    expect(resolution.basis).toBe("undisputed-primary");
    expect(resolution.demotedPrimaryFieldTargetIds).toEqual(["herg"]);
  });

  /** 3K-B — Multiple additional targets (real citalopram data). */
  test("B. multiple additional targets: primary = SERT; 5-HT1A/5-HT2C/5-HT7/hERG all remain additional", () => {
    const chain = getDrugKnowledgeChain("citalopram")!;
    const view = buildKnowledgeChainView(chain);
    expect(view.primaryTarget!.targetId).toBe("sert");
    expect(view.additionalTargets.map((r) => r.key)).toEqual([
      "target-5ht1a",
      "target-5ht2c",
      "target-5ht7",
      "target-herg",
    ]);
  });

  /**
   * 3K-C — Missing primary: NEVER infer targetA as primary.
   */
  test("C. missing primary → primaryTarget = null, additional = [targetA, targetB], never inferred", () => {
    const resolution = resolvePrimaryTargetFromTexts(
      "Target A (transporter X) and Target B (transporter Y), balanced from dose 1",
      "Acute: dual action.",
      ["targetA", "targetB"]
    );
    expect(resolution.primaryTargetId).toBeNull();
    expect(resolution.basis).toBe("no-single-primary");
    expect(resolution.primaryFieldCandidateIds).toEqual(["targetA", "targetB"]);
    // The view renders the explicit missing state — not a promoted target.
    const chain = getDrugKnowledgeChain("duloxetine")!;
    const view = buildKnowledgeChainView(chain);
    expect(view.primaryTarget).toBeNull();
    expect(view.path.some((n) => n.role === "target")).toBe(false);
    expect(view.path.some((n) => n.role === "missing-primary")).toBe(true);
  });

  /**
   * 3K-D — Duplicate identity: the same logical target can never
   * occupy the primary node AND an additional row.
   */
  test("D. duplicate identity → one primary representation, no duplicate secondary representation", () => {
    for (const slug of ALL_SLUGS) {
      const view = buildKnowledgeChainView(getDrugKnowledgeChain(slug)!);
      const primaryId = view.primaryTarget?.targetId;
      if (primaryId) {
        expect(view.additionalTargets.some((r) => r.key === `target-${primaryId}`)).toBe(false);
      }
      const keys = [
        ...view.path.filter((n) => n.role === "target").map((n) => n.key),
        ...view.additionalTargets.map((r) => r.key),
      ];
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  /**
   * 3K-E — Array-order independence (MANDATORY). Shuffling the drug's
   * receptors array (the source of additional targets) can never change
   * the primary-target resolution: the resolver reads only the
   * molecularTarget + effect texts and the primary-field candidate ids.
   */
  test("E. array-order independence: shuffled receptors never change the primary target", () => {
    const permutations = <T,>(items: T[]): T[][] => {
      if (items.length <= 1) return [items];
      const out: T[][] = [];
      for (let i = 0; i < items.length; i++) {
        for (const rest of permutations([...items.slice(0, i), ...items.slice(i + 1)])) {
          out.push([items[i], ...rest]);
        }
      }
      return out;
    };

    for (const slug of ALL_SLUGS) {
      const drug = drugs.find((d) => d.slug === slug)!;
      const chain = getDrugKnowledgeChain(slug)!;
      const baseline = chain.drug.primaryTarget;
      const candidateIds = chain.drug.targetEdges
        .filter((e) => e.fromPrimaryTargetField && !(e.actions.length === 1 && e.actions[0] === "negligible-affinity"))
        .map((e) => e.targetId);

      // Every ordering of the receptor strings (up to 5! = 120 — cheap).
      const shuffles = permutations(drug.receptors).slice(0, 240);
      expect(shuffles.length).toBeGreaterThan(0);
      for (const receptors of shuffles) {
        const resolution = resolvePrimaryTarget(
          { ...drug, receptors },
          candidateIds
        );
        expect(resolution).toEqual(baseline);
      }
    }
  });

  /**
   * 3K-F — Secondary effect isolation: an additional target's effect
   * (hERG → Ion-channel blockade) can never occupy the primary Effect
   * node; the primary effect stays the primary target's own action.
   */
  test("F. secondary effect isolation: hERG's ion-channel blockade stays secondary; primary effect stays Reuptake inhibition", () => {
    const view = buildKnowledgeChainView(getDrugKnowledgeChain("citalopram")!);
    const effectNodes = view.path.filter((n) => n.role === "effect");
    expect(effectNodes.length).toBe(1);
    expect(effectNodes[0].label).toBe("Reuptake inhibition");
    expect(effectNodes[0].label).not.toContain("Ion-channel blockade");
    const herg = view.additionalTargets.find((r) => r.key === "target-herg")!;
    expect(herg.name).toBe("hERG / KCNH2");
    // hERG's own relationship carries its own effect — in the additional list.
    expect(herg.relationship).toBe("Ion-channel blockade");
  });

  /**
   * 3K-G — Rendering contract for the Citalopram regression: exactly
   * one PRIMARY TARGET node; all additional targets separate; never a
   * second PRIMARY TARGET.
   */
  test("G. citalopram rendering: exactly one PRIMARY TARGET (SERT), hERG never a second primary", () => {
    const view = buildKnowledgeChainView(getDrugKnowledgeChain("citalopram")!);
    const roles = view.path.map((n) => n.role);
    expect(roles).toEqual(["medication", "class", "mechanism", "target", "effect"]);
    expect(view.path[3].roleLabel).toBe("Primary target");
    expect(view.path[3].label).toBe("SERT");
    expect(view.path[3].sublabel).toBe("Serotonin transporter");
    expect(view.path[4].roleLabel).toBe("Effect");
    expect(view.path[4].label).toBe("Reuptake inhibition");
    // The forbidden structure — PRIMARY TARGET → SERT → PRIMARY TARGET → hERG —
    // is now impossible: only one node can carry the Primary target role.
    expect(view.path.filter((n) => n.roleLabel === "Primary target").length).toBe(1);
    expect(view.path.filter((n) => n.role === "target").length).toBe(1);
    // hERG/KCNH2 renders below, as an additional target row.
    const herg = view.additionalTargets.find((r) => r.key === "target-herg")!;
    expect(herg.kindLabel).toBe("Ion channel");
    expect(herg.title).toContain("R-enantiomer");
  });
});

describe("knowledge chain — all 12 canonical medications audit (Phase 3)", () => {
  /**
   * 3J — the per-drug primary-target audit, pinned from the verified
   * resolution of the locked canonical data. Any change to the data's
   * target statements or to the resolver's semantics breaks this table.
   *
   * Drugs with no single primary target are NOT errors — the locked data
   * names several co-equal targets without ranking them, and the chain
   * honestly renders the explicit no-single-primary state (flagged for
   * medical review rather than silently re-ranked).
   */
  const AUDIT: Record<
    string,
    {
      primaryTargetId: string | null;
      basis: PrimaryTargetBasis;
      candidates: string[];
      demoted: string[];
    }
  > = {
    sertraline:    { primaryTargetId: "sert", basis: "undisputed-primary", candidates: ["sert"], demoted: [] },
    fluoxetine:    { primaryTargetId: "sert", basis: "undisputed-primary", candidates: ["sert"], demoted: [] },
    escitalopram:  { primaryTargetId: "sert", basis: "undisputed-primary", candidates: ["sert"], demoted: [] },
    paroxetine:    { primaryTargetId: "sert", basis: "undisputed-primary", candidates: ["sert"], demoted: ["m1-muscarinic"] },
    citalopram:    { primaryTargetId: "sert", basis: "undisputed-primary", candidates: ["sert"], demoted: ["herg"] },
    clomipramine:  { primaryTargetId: "sert", basis: "explicit-primary-statement", candidates: ["sert"], demoted: ["net", "alpha1-adrenergic", "m1-muscarinic", "cardiac-na-channel"] },
    fluvoxamine:   { primaryTargetId: null, basis: "no-single-primary", candidates: ["sert", "sigma-1"], demoted: [] },
    venlafaxine:   { primaryTargetId: null, basis: "no-single-primary", candidates: ["sert", "net"], demoted: ["dat"] },
    duloxetine:    { primaryTargetId: null, basis: "no-single-primary", candidates: ["sert", "net"], demoted: [] },
    bupropion:     { primaryTargetId: null, basis: "no-single-primary", candidates: ["net", "dat", "alpha3beta4-nachr", "alpha4beta2-nachr"], demoted: [] },
    mirtazapine:   { primaryTargetId: null, basis: "no-single-primary", candidates: ["5ht2a", "5ht2c", "5ht3", "alpha2-adrenergic", "h1-histamine"], demoted: [] },
    amitriptyline: { primaryTargetId: null, basis: "no-single-primary", candidates: ["sert", "net"], demoted: ["alpha1-adrenergic", "m1-muscarinic", "cardiac-na-channel"] },
  };

  test("every medication resolves to the audited primary-target outcome", () => {
    expect(ALL_SLUGS.sort()).toEqual(Object.keys(AUDIT).sort());
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const p = chain.drug.primaryTarget;
      const expected = AUDIT[slug];
      if (p.primaryTargetId !== expected.primaryTargetId) {
        throw new Error(`${slug}: expected primary ${expected.primaryTargetId}, got ${p.primaryTargetId}`);
      }
      expect(p.basis).toBe(expected.basis);
      expect(p.primaryFieldCandidateIds).toEqual(expected.candidates);
      expect(p.demotedPrimaryFieldTargetIds).toEqual(expected.demoted);
    }
  });

  test("for every medication: mechanism connects, primary never comes from a demoted/additional target, no duplication", () => {
    for (const slug of ALL_SLUGS) {
      const chain = getDrugKnowledgeChain(slug)!;
      const view = buildKnowledgeChainView(chain);
      const p = chain.drug.primaryTarget;

      // 1. exactly one primary target OR explicit missing-primary state.
      expect(p.primaryTargetId === null || typeof p.primaryTargetId === "string").toBe(true);
      expect(view.primaryTarget === null || view.primaryTarget.targetId === p.primaryTargetId).toBe(true);

      // 2. mechanism is correctly connected (the mechanism node carries
      //    the verbatim primary-target statement as its tooltip).
      const mechanismNode = view.path.find((n) => n.role === "mechanism")!;
      expect(mechanismNode.title).toBe(chain.drug.mechanism.primaryTargetText);

      // 3. the primary target is never taken from an additional target:
      //    it is either null or a surviving primary-field candidate.
      if (p.primaryTargetId !== null) {
        expect(p.primaryFieldCandidateIds).toContain(p.primaryTargetId);
        expect(p.demotedPrimaryFieldTargetIds).not.toContain(p.primaryTargetId);
      }

      // 4. additional targets stay secondary — none renders in the path.
      const pathTargetIds = view.path.filter((n) => n.role === "target").map((n) => n.key.replace("target-", ""));
      for (const row of view.additionalTargets) {
        expect(pathTargetIds).not.toContain(row.key.replace("target-", ""));
      }

      // 5. no target is duplicated across primary/additional (3K-D
      //    covers it; re-asserted here per medication).
      const ids = view.additionalTargets.map((r) => r.key);
      expect(new Set(ids).size).toBe(ids.length);

      // 6. the primary effect remains primary — the Effect node is the
      //    primary target's action label only.
      const effectNodes = view.path.filter((n) => n.role === "effect");
      if (view.primaryTarget) {
        expect(effectNodes.map((n) => n.key)).toEqual([`effect-${view.primaryTarget.targetId}`]);
      } else {
        expect(effectNodes).toEqual([]);
      }

      // 7. drug-specific target information remains drug-specific:
      //    citalopram's hERG edge must exist on citalopram only.
      if (slug === "citalopram") {
        const herg = view.additionalTargets.find((r) => r.key === "target-herg")!;
        expect(herg.title).toContain("R-enantiomer");
      }

      // 8. never a second PRIMARY TARGET node (label integrity).
      expect(view.path.filter((n) => n.roleLabel === "Primary target").length).toBe(1);
    }
  });
});

describe("conditions — identity merge + canonical display name", () => {
  /** Every rendered condition entry on a drug's Knowledge Chain (V2 view). */
  const conditionItems = (slug: string) =>
    buildKnowledgeChainView(getDrugKnowledgeChain(slug)!)
      .conditionGroups.flatMap((g) => g.items);

  /** Every ordering of a small variant array. */
  const permutations = (items: string[]): string[][] => {
    if (items.length <= 1) return [items];
    const out: string[][] = [];
    for (let i = 0; i < items.length; i++) {
      const rest = [...items.slice(0, i), ...items.slice(i + 1)];
      for (const tail of permutations(rest)) out.push([items[i], ...tail]);
    }
    return out;
  };

  test("key derivation merges qualifier spellings of one entity into one key", () => {
    for (const name of [
      "Obsessive-Compulsive Disorder",
      "Obsessive-Compulsive Disorder (OCD)",
      "Obsessive-Compulsive Disorder (adults)",
      "Obsessive-Compulsive Disorder (paediatric, ≥8 yrs)",
      "Obsessive-Compulsive Disorder (OCD) — adults",
      "Obsessive-Compulsive Disorder (OCD) — SIGNATURE INDICATION",
    ]) {
      expect(conditionKeyFromName(name)).toBe("obsessive-compulsive-disorder");
    }
    expect(conditionKeyFromName("Major Depressive Disorder (MDD)")).toBe(
      "major-depressive-disorder"
    );
    // A qualifier restating a standalone base name keys to that entity
    // ("Migraine (prophylaxis)" ~ "Migraine prophylaxis") so the pair
    // never renders as two chips.
    expect(conditionKeyFromName("Migraine (prophylaxis)")).toBe(
      "migraine-prophylaxis"
    );
  });

  test("resolver: a plain variant exists → it wins, whatever the processing order", () => {
    const variants = [
      "Obsessive-Compulsive Disorder (paediatric, ≥8 yrs)",
      "Obsessive-Compulsive Disorder",
      "Obsessive-Compulsive Disorder (OCD)",
      "Obsessive-Compulsive Disorder (OCD) — adults",
    ];
    const orders = permutations(variants);
    expect(orders.length).toBe(24);
    for (const order of orders) {
      // Registry iteration order and which drug is processed first must
      // not be able to change the canonical display name.
      expect(resolveConditionDisplayName(order)).toBe(
        "Obsessive-Compulsive Disorder"
      );
    }
  });

  test("resolver: plain variants tie-break by source count, then length, then lexicographic", () => {
    expect(
      resolveConditionDisplayName([
        "GAD", // plain, 1 source
        "Generalised Anxiety Disorder", // plain, 2 sources
        "Generalised Anxiety Disorder",
      ])
    ).toBe("Generalised Anxiety Disorder");
    expect(resolveConditionDisplayName([])).toBe("");
  });

  test("resolver: no plain variant anywhere → falls back to the SHORTEST qualified spelling", () => {
    expect(
      resolveConditionDisplayName([
        "Bipolar Depression (adjunct to mood stabiliser)",
        "Bipolar Depression (adjunct)",
      ])
    ).toBe("Bipolar Depression (adjunct)");
    // A single-variant condition keeps its qualified name verbatim.
    expect(resolveConditionDisplayName(["Adolescent Depression (≥12 yrs)"])).toBe(
      "Adolescent Depression (≥12 yrs)"
    );
  });

  test("registry: OCD variants across all drugs are one entity with the plain name", () => {
    const ocd = knowledgeGraph.conditions.get("obsessive-compulsive-disorder");
    expect(ocd?.name).toBe("Obsessive-Compulsive Disorder");
    expect(ocd?.hasDiseasePage).toBe(false);
  });

  test("registry: disease-page titles are never overwritten (MDD)", () => {
    const mdd = knowledgeGraph.conditions.get("major-depressive-disorder");
    expect(mdd?.name).toBe("Major Depressive Disorder");
    expect(mdd?.hasDiseasePage).toBe(true);
    expect(mdd?.icd10).toMatch(/^F3/);
  });

  test("drug pages: no rendered condition carries another drug's qualifier (the fluvoxamine leak)", () => {
    for (const slug of ALL_SLUGS) {
      for (const item of conditionItems(slug)) {
        // fluvoxamine's paediatric OCD qualifiers must never surface on
        // any drug's Knowledge Chain — including fluvoxamine's own entry,
        // which shares the canonical registry name.
        expect(item.name).not.toMatch(/paediatric/i);
        expect(item.name).not.toMatch(/≥8/);
        expect(item.name).not.toMatch(/\(adults\)/i);
      }
      // Drugs that name OCD in any spelling show exactly ONE OCD entry,
      // carrying the plain canonical name.
      const chain = getDrugKnowledgeChain(slug)!;
      const ocdEdges = chain.drug.conditionEdges.filter(
        (e) => e.conditionKey === "obsessive-compulsive-disorder"
      );
      const ocdItems = conditionItems(slug).filter(
        (i) => i.name === "Obsessive-Compulsive Disorder"
      );
      expect(ocdEdges.length).toBe(ocdItems.length);
      if (ocdEdges.length > 0) {
        expect(ocdEdges.length).toBe(1);
      }
    }
  });

  test("full registry contract: every non-page entry is the plain-preferring resolution of its variant multiset", () => {
    const groups = new Map<string, string[]>();
    const add = (name: string) => {
      const key = conditionKeyFromName(name);
      if (!key) return;
      const list = groups.get(key) ?? [];
      list.push(name);
      groups.set(key, list);
    };
    for (const drug of drugs) {
      for (const rel of drug.relatedConditions) add(rel.name);
      for (const ind of drug.indications) add(ind.name);
    }
    expect(groups.size).toBeGreaterThan(0);
    for (const [key, variants] of groups) {
      const entry = knowledgeGraph.conditions.get(key);
      expect(entry).toBeDefined();
      if (entry!.hasDiseasePage) continue; // protected disease titles
      expect(entry!.name).toBe(resolveConditionDisplayName(variants));
    }
  });

  test("drug pages: a qualifier restating a standalone base stays one entry (migraine pair)", () => {
    const migraine = conditionItems("amitriptyline").filter((i) => /migraine/i.test(i.name));
    expect(migraine.length).toBe(1);
    expect(migraine[0]?.name).toBe("Migraine prophylaxis");
  });
});
