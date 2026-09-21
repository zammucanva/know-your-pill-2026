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
        // The mechanism row is the text row (chips empty by design);
        // every other row renders at least one element.
        if (row.key === "mechanism") {
          expect(row.chips).toEqual([]);
          expect(row.text?.length).toBeGreaterThan(0);
        } else {
          expect(row.chips.length).toBeGreaterThan(0);
        }
      }
    }
  });

  test("medication-class row links the drug page and the class collection", () => {
    const bup = rowsFor("bupropion");
    const mc = bup[0];
    expect(mc.chips[0].label).toBe("Bupropion");
    expect(mc.chips[0].badge?.label).toBe("NDRI");
    expect(mc.chips[0].subtext).toBe("Norepinephrine-Dopamine Reuptake Inhibitor");
    expect(mc.chips[0].href).toBe("/drugs/bupropion");
    expect(mc.chips[1].label).toBe("NDRI");
    expect(mc.chips[1].subtext).toBe("Norepinephrine-Dopamine Reuptake Inhibitor");
    expect(mc.chips[1].href).toBe("/drugs/class/ndri");
  });

  test("bupropion renders the Stimulant substance-class card; sertraline does not (QA evidence)", () => {
    // bupropion.drugClass === "stimulant" — the drug's own field,
    // resolved against the canonical classes registry (never invented).
    const bup = getDrugKnowledgeChain("bupropion")!;
    expect(bup.substanceClass).not.toBeNull();
    expect(bup.substanceClass!.name).toBe("Stimulant");
    expect(bup.substanceClass!.description).toBe(
      "Increases catecholamine activity — producing alertness, euphoria, tachycardia, and crash."
    );
    const mc = rowsFor("bupropion")[0];
    const stimulant = mc.chips.find((c) => c.label === "Stimulant");
    expect(stimulant).toBeDefined();
    expect(stimulant?.subtext).toBe(bup.substanceClass!.description);
    expect(stimulant?.href).toBeUndefined(); // no destination — registry-only card

    // SSRIs resolve to the registry's SSRI entry but the row DEDUPES it —
    // the substance-class name matches the class card label, so no third
    // card renders (QA evidence: sertraline shows exactly two cards).
    const ser = getDrugKnowledgeChain("sertraline")!;
    expect(ser.substanceClass?.name).toBe("SSRI");
    expect(rowsFor("sertraline")[0].chips.length).toBe(2);
  });

  test("mechanism row is the verbatim primary target text — text only, no action chips (QA evidence)", () => {
    const bup = rowsFor("bupropion");
    const mech = bup.find((r) => r.key === "mechanism")!;
    expect(mech.text).toContain("SLC6A2");
    expect(mech.text).toContain("SLC6A3");
    expect(mech.chips).toEqual([]);
    // Mechanism-level actions remain API data (chain.drug.mechanism.actions)
    // but are never rendered as row elements.
    expect(getDrugKnowledgeChain("bupropion")!.drug.mechanism.actions).toContain(
      "reuptake-inhibition"
    );
  });

  test("molecular-target cards carry full names, kind badges, action-id subtext (QA evidence)", () => {
    const bup = rowsFor("bupropion");
    const targets = bup.find((r) => r.key === "molecular-targets")!;
    // QA: "NET (norepinephrine transporter)" + transporter pill +
    // "reuptake-inhibition" subtext.
    const net = targets.chips.find((c) => c.label === "NET (norepinephrine transporter)");
    expect(net).toBeDefined();
    expect(net?.badge?.label).toBe("transporter");
    expect(net?.subtext).toBe("reuptake-inhibition");
    expect(net?.title).toContain("norepinephrine transporter");
    // Nicotinic receptors: kind pill + antagonism subtext; short label
    // without a redundant parenthetical (name is an abbreviation of the
    // full name).
    const nachr = targets.chips.find((c) => c.label.startsWith("α3β4"));
    expect(nachr?.badge?.label).toBe("receptor");
    expect(nachr?.subtext).toBe("receptor-antagonism");
    expect(nachr?.label).not.toContain("(");
    // Bupropion's SERT is a negligible-affinity edge — graph data, but NOT
    // a target card (QA evidence: "NO clinically meaningful SERT affinity"
    // stays in the mechanism text; the card row lists NET, DAT, receptors).
    const sertCard = targets.chips.find((c) => c.label.startsWith("SERT"));
    expect(sertCard).toBeUndefined();
    // Sertraline QA: "SERT (serotonin transporter)" + transporter pill +
    // "reuptake-inhibition" subtext — a real target, rendered as a card.
    const serTargets = rowsFor("sertraline").find((r) => r.key === "molecular-targets")!;
    const serSert = serTargets.chips.find(
      (c) => c.label === "SERT (serotonin transporter)"
    );
    expect(serSert?.badge?.label).toBe("transporter");
    expect(serSert?.subtext).toBe("reuptake-inhibition");
  });

  test("neurotransmitter chips carry abbreviation badges (QA: NE / DA / Ach)", () => {
    const bup = rowsFor("bupropion");
    const nts = bup.find((r) => r.key === "neurotransmitters")!;
    const badges = nts.chips.map((c) => c.badge?.label);
    expect(badges).toContain("NE");
    expect(badges).toContain("DA");
    expect(badges).toContain("Ach");
  });

  test("pathway cards render the pathway name with origin → termination subtext (QA evidence)", () => {
    const bup = rowsFor("bupropion");
    const pathways = bup.find((r) => r.key === "neural-pathways")!;
    const mesolimbic = pathways.chips.find((c) => c.label === "Mesolimbic Pathway");
    expect(mesolimbic).toBeDefined();
    expect(mesolimbic?.subtext).toBe(
      "Ventral Tegmental Area (VTA) → Nucleus Accumbens"
    );
    expect(mesolimbic?.title).toContain("Reward");
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

describe("conditions — identity merge + canonical display name", () => {
  const rowsFor = (slug: string) =>
    buildKnowledgeChainRows(getDrugKnowledgeChain(slug)!);

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

  test("drug pages: no condition chip carries another drug's qualifier (the fluvoxamine leak)", () => {
    for (const slug of ALL_SLUGS) {
      const conditions = rowsFor(slug).find((r) => r.key === "conditions")!;
      for (const chip of conditions.chips) {
        // fluvoxamine's paediatric OCD qualifiers must never surface on
        // any drug's Knowledge Chain — including fluvoxamine's own chip,
        // which shares the canonical registry name.
        expect(chip.label).not.toMatch(/paediatric/i);
        expect(chip.label).not.toMatch(/≥8/);
        expect(chip.label).not.toMatch(/\(adults\)/i);
      }
      // Drugs that name OCD in any spelling show exactly ONE OCD chip,
      // carrying the plain canonical name.
      const chain = getDrugKnowledgeChain(slug)!;
      const ocdEdges = chain.drug.conditionEdges.filter(
        (e) => e.conditionKey === "obsessive-compulsive-disorder"
      );
      const ocdChips = conditions.chips.filter(
        (c) => c.label === "Obsessive-Compulsive Disorder"
      );
      expect(ocdEdges.length).toBe(ocdChips.length);
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

  test("drug pages: a qualifier restating a standalone base stays one chip (migraine pair)", () => {
    const ami = rowsFor("amitriptyline").find((r) => r.key === "conditions")!;
    const migraine = ami.chips.filter((c) => /migraine/i.test(c.label));
    expect(migraine.length).toBe(1);
    expect(migraine[0]?.label).toBe("Migraine prophylaxis");
  });
});
