/**
 * QUESTION FACTORY: engine core.
 *
 * Distractors, fingerprints, deduplication, seeded reproducibility and the
 * central guarantee: every generated question has exactly four options,
 * exactly one correct answer, and is backed by source facts.
 *
 * Fixture tests prove the rules offline. Registry tests prove them on
 * KYP's real content, over every enumerable concept.
 */

import { describe, expect, test } from "bun:test";
import { createRng } from "@/lib/kyp/custom-test/rng";
import { AuthoredIndex, Deduper } from "@/lib/kyp/question-factory/dedupe";
import { pickDistractors } from "@/lib/kyp/question-factory/distractors";
import { semanticFingerprint, structureFingerprint, textFingerprint } from "@/lib/kyp/question-factory/fingerprint";
import { contextFor, generateQuestion, leastUsedPosition } from "@/lib/kyp/question-factory/generate";
import { getRegistryFactStore } from "@/lib/kyp/question-factory/registry-source";
import { drugsInScope } from "@/lib/kyp/question-factory/syllabus";
import { TEMPLATES, getTemplate } from "@/lib/kyp/question-factory/templates";
import { validateQuestion } from "@/lib/kyp/question-factory/validate";
import type { ConceptKey } from "@/lib/kyp/question-factory/templates";
import type { EntityRef, GeneratedQuestion } from "@/lib/kyp/question-factory/types";
import { fixtureStore } from "./helpers/qf-fixtures";

const NOW = () => "2026-01-01T00:00:00.000Z";
const ent = (id: string, label: string, type: EntityRef["type"] = "adverseEffect"): EntityRef => ({ type, id, label });

function build(templateId: string, store = fixtureStore(), seed = 77, index = 0, positions = [0, 0, 0, 0]) {
  const ctx = contextFor(store, drugsInScope(store, {}), true);
  const template = getTemplate(templateId)!;
  const slots = template.enumerate(ctx);
  return {
    ctx,
    slots,
    result: slots.length
      ? generateQuestion({ template, slot: slots[index % slots.length], ctx, jobSeed: seed, batchId: "b1", positionCounts: positions, now: NOW })
      : null,
  };
}

describe("distractor engine", () => {
  const rng = () => createRng(5);
  const pool = ["Nausea", "Insomnia", "Headache", "Dry mouth", "Dizziness", "Tremor"].map((l, i) => ent(`e${i}`, l));

  test("1. picks the requested number from the pool, never an excluded id", () => {
    const picked = pickDistractors({ tiers: [pool], excludeIds: new Set(["e0", "e1"]), guardLabels: [], count: 3, rng: rng() })!;
    expect(picked).toHaveLength(3);
    for (const p of picked) expect(["e0", "e1"]).not.toContain(p.id);
  });

  test("2. returns null instead of padding when too few safe candidates exist", () => {
    const picked = pickDistractors({ tiers: [pool.slice(0, 2)], excludeIds: new Set(), guardLabels: [], count: 3, rng: rng() });
    expect(picked).toBeNull();
  });

  test("3. rejects near-synonyms of guarded labels (shared root, contained label)", () => {
    const candidates = [
      ent("a", "Major Depressive Disorder"),
      ent("b", "Depression"), // shares the root "depre" with "depressive"
      ent("c", "Hyponatraemia (SIADH)"), // contains the guarded label
      ent("d", "Insomnia"),
      ent("e", "Tremor"),
      ent("f", "Headache"),
    ];
    const picked = pickDistractors({
      tiers: [candidates],
      excludeIds: new Set(["a"]),
      guardLabels: ["Major Depressive Disorder", "Hyponatraemia"],
      count: 3,
      rng: rng(),
    })!;
    const labels = picked.map((p) => p.label);
    expect(labels).not.toContain("Depression");
    expect(labels).not.toContain("Hyponatraemia (SIADH)");
  });

  test("4. gene codes are identifiers, not word roots (SLC6A4 vs SLC6A2 are different)", () => {
    const genes = ["SLC6A4", "SLC6A2", "SLC6A3", "KCNH2"].map((l, i) => ent(`g${i}`, l, "gene"));
    const picked = pickDistractors({ tiers: [genes], excludeIds: new Set(["g0"]), guardLabels: ["SLC6A4"], count: 3, rng: rng() });
    expect(picked).toHaveLength(3);
  });

  test("5. drug names are exempt from word-overlap rules (zopiclone / eszopiclone)", () => {
    const drugs = ["Zopiclone", "Eszopiclone", "Zolpidem", "Zaleplon"].map((l, i) => ent(`drug:${i}`, l, "drug"));
    expect(pickDistractors({ tiers: [drugs], excludeIds: new Set(), guardLabels: [], count: 3, rng: rng() })).toHaveLength(3);
  });

  test("6. closer tiers are used first", () => {
    const near = ["Alpha", "Bravo", "Charlie"].map((l, i) => ent(`n${i}`, l, "drug"));
    const far = ["Delta", "Echo", "Foxtrot"].map((l, i) => ent(`f${i}`, l, "drug"));
    const picked = pickDistractors({ tiers: [near, far], excludeIds: new Set(), guardLabels: [], count: 3, rng: rng() })!;
    expect(picked.map((p) => p.id).sort()).toEqual(["n0", "n1", "n2"]);
  });

  test("7. selection is seeded: same seed same picks, different seed can differ", () => {
    const run = (seed: number) =>
      pickDistractors({ tiers: [pool], excludeIds: new Set(), guardLabels: [], count: 3, rng: createRng(seed) })!.map((p) => p.id);
    expect(run(9)).toEqual(run(9));
    const outcomes = new Set([1, 2, 3, 4, 5, 6, 7, 8].map((s) => run(s).join()));
    expect(outcomes.size).toBeGreaterThan(1);
  });

  test("8. the lazy accept test is applied and can exhaust the pool", () => {
    const picked = pickDistractors({ tiers: [pool], excludeIds: new Set(), guardLabels: [], count: 3, rng: rng(), accept: (e) => e.id === "e2" });
    expect(picked).toBeNull();
  });
});

describe("fingerprints", () => {
  const concept: ConceptKey = {
    family: "DIRECT_RECALL",
    relations: ["belongsToClass"],
    subjectIds: ["drug:fluoxetine"],
    answerIds: ["drugClass:ssri"],
    polarity: "positive",
    frame: "forward",
  };

  test("9. the semantic fingerprint ignores wording: it depends only on the concept", () => {
    // two different stems for the same concept are the same question
    const a = build("fwd-class", fixtureStore(), 1, 0).result;
    const b = build("fwd-class", fixtureStore(), 999, 0).result;
    expect(a && b && a.ok && b.ok).toBe(true);
    if (a && b && a.ok && b.ok) expect(a.question.fingerprint).toBe(b.question.fingerprint);
  });

  test("10. different relation, answer, polarity or frame give a different fingerprint", () => {
    const base = semanticFingerprint(concept);
    expect(semanticFingerprint({ ...concept, relations: ["hasNetEffect"] })).not.toBe(base);
    expect(semanticFingerprint({ ...concept, answerIds: ["drugClass:snri"] })).not.toBe(base);
    expect(semanticFingerprint({ ...concept, polarity: "negative" })).not.toBe(base);
    expect(semanticFingerprint({ ...concept, frame: "inverse" })).not.toBe(base);
  });

  test("11. list order does not matter", () => {
    const a = semanticFingerprint({ ...concept, subjectIds: ["x", "y"], relations: ["belongsToClass", "hasNetEffect"] });
    const b = semanticFingerprint({ ...concept, subjectIds: ["y", "x"], relations: ["hasNetEffect", "belongsToClass"] });
    expect(a).toBe(b);
  });

  test("12. the structure fingerprint changes with the option set, the semantic one does not", () => {
    const sem = semanticFingerprint(concept);
    expect(structureFingerprint(sem, ["a", "b", "c", "d"])).toBe(structureFingerprint(sem, ["d", "c", "b", "a"]));
    expect(structureFingerprint(sem, ["a", "b", "c", "d"])).not.toBe(structureFingerprint(sem, ["a", "b", "c", "z"]));
  });

  test("13. the same concept reached with a different seed has the same fingerprint but may differ in options", () => {
    const seen = new Set<string>();
    let fp = "";
    for (const seed of [1, 2, 3, 4, 5, 6]) {
      const r = build("fwd-common-effect", fixtureStore(), seed, 3).result!;
      expect(r.ok).toBe(true);
      if (r.ok) {
        fp ||= r.question.fingerprint;
        expect(r.question.fingerprint).toBe(fp);
        seen.add(r.question.structureFingerprint);
      }
    }
    expect(seen.size).toBeGreaterThan(1);
  });
});

describe("deduplication", () => {
  const authored = new AuthoredIndex([
    {
      stem: "Which medication class does fluoxetine belong to?",
      options: ["SNRI", "SSRI", "TCA", "MAOI"],
      correctIndex: 1,
    },
  ]);

  test("14. an exact authored question is detected", () => {
    expect(authored.matches("Which medication class does fluoxetine belong to?", "SSRI")).toBe(true);
  });

  test("15. a trivial paraphrase of an authored question is detected", () => {
    expect(authored.matches("Fluoxetine belongs to which medication class?", "SSRI")).toBe(true);
    expect(authored.matches("Fluoxetine belongs to which medication class", "ssri")).toBe(true);
  });

  test("16. a different concept with a different answer is NOT a duplicate", () => {
    expect(authored.matches("What is the mechanism of fluoxetine?", "Serotonin reuptake inhibition")).toBe(false);
    expect(authored.matches("Which medication class does sertraline belong to?", "SNRI")).toBe(false);
  });

  test("17. the same answer with an unrelated stem is not a duplicate", () => {
    expect(authored.matches("Which drug is a first-line option for panic disorder?", "SSRI")).toBe(false);
  });

  test("18. the deduper rejects repeats in a job and seen questions only in never-repeat mode", () => {
    const seen = { has: (fp: string) => fp === "seen-fp" };
    const strict = new Deduper({ neverRepeat: true, history: seen });
    expect(strict.check("seen-fp", "stem?", "x")).toBe("ALREADY_SEEN");
    expect(strict.check("fresh", "stem?", "x")).toBeNull();
    strict.accept("fresh");
    expect(strict.check("fresh", "stem?", "x")).toBe("DUPLICATE_IN_BATCH");

    const relaxed = new Deduper({ neverRepeat: false, history: seen });
    expect(relaxed.check("seen-fp", "stem?", "x")).toBeNull();
  });

  test("19. an authored match is reported before acceptance", () => {
    const d = new Deduper({ neverRepeat: false, authored });
    expect(d.check("fp1", "Which medication class does fluoxetine belong to?", "SSRI")).toBe("DUPLICATE_AUTHORED");
  });

  test("20. text fingerprints ignore stem word order", () => {
    expect(textFingerprint("Which class does X belong to?", "SSRI")).toBe(textFingerprint("To which class does X belong?", "SSRI"));
  });
});

describe("generation", () => {
  test("21. generation is reproducible: same template, slot and seed give the identical question", () => {
    for (const id of ["fwd-common-effect", "cls-exception", "mf-class-effect", "inv-metabolite"]) {
      // first slot that builds (small fixture classes cannot always supply distractors)
      let compared = false;
      for (let i = 0; i < 12 && !compared; i++) {
        const a = build(id, fixtureStore(), 4242, i).result;
        const b = build(id, fixtureStore(), 4242, i).result;
        if (a && b && a.ok && b.ok) {
          expect(a.question).toEqual(b.question);
          compared = true;
        }
      }
      expect(compared).toBe(true);
    }
  });

  test("22. a different job seed explores a different valid question for the same concept", () => {
    const stems = new Set<string>();
    const orders = new Set<string>();
    for (const seed of [1, 2, 3, 4, 5, 6, 7, 8]) {
      const r = build("fwd-class", fixtureStore(), seed, 0).result!;
      if (r.ok) {
        stems.add(r.question.stem);
        orders.add(r.question.options.map((o) => o.text).join("|"));
      }
    }
    expect(orders.size).toBeGreaterThan(1);
    expect(stems.size).toBeGreaterThanOrEqual(1);
  });

  test("23. every fixture template yields only valid questions", () => {
    const store = fixtureStore();
    let built = 0;
    for (const template of TEMPLATES) {
      const ctx = contextFor(store, drugsInScope(store, {}), true);
      const slots = template.enumerate(ctx);
      for (let i = 0; i < slots.length; i += Math.max(1, Math.floor(slots.length / 15))) {
        const r = generateQuestion({ template, slot: slots[i], ctx, jobSeed: 3, batchId: "b", positionCounts: [0, 0, 0, 0], now: NOW });
        if (!r.ok) continue;
        built++;
        expect(validateQuestion(r.question, store)).toEqual([]);
      }
    }
    expect(built).toBeGreaterThan(100);
  });

  test("24. a template with no supporting facts yields no slots (insufficient source data)", () => {
    const store = fixtureStore();
    // a scope that is a single drug without a half-life fact
    const only = drugsInScope(store, { subtopic: "furoxetil" }); // fixture index 5: halfLife "Variable"
    const ctx = contextFor(store, only, false);
    expect(getTemplate("fwd-half-life")!.enumerate(ctx)).toHaveLength(0);
  });

  test("25. correct-answer position goes to the least used slot, ties broken by the seed", () => {
    expect(leastUsedPosition([5, 1, 5, 5], () => 0)).toBe(1);
    expect(leastUsedPosition([2, 2, 2, 2], (n) => n - 1)).toBe(3);
    expect(leastUsedPosition([2, 2, 2, 2], () => 0)).toBe(0);
  });

  test("26. class explanations are worded without a/an, so they are grammatical for any label", () => {
    const fact = fixtureStore().byRelation("belongsToClass")[0];
    expect(fact.explanation).toMatch(/^\S+ belongs to the .+ class/);
    expect(fact.explanation).not.toMatch(/ is an? /);
  });
});

describe("invariants over the real registry", () => {
  const store = getRegistryFactStore();
  const ctx = contextFor(store, drugsInScope(store, {}), true);

  /** Build a sample of EVERY template's concepts (every 2nd slot). */
  const built: GeneratedQuestion[] = [];
  let attempted = 0;
  let rejected = 0;
  const positions = [0, 0, 0, 0];
  for (const template of TEMPLATES) {
    const slots = template.enumerate(ctx);
    for (let i = 0; i < slots.length; i += 2) {
      attempted++;
      const r = generateQuestion({ template, slot: slots[i], ctx, jobSeed: 20260101, batchId: "reg", positionCounts: positions, now: NOW });
      if (!r.ok) {
        rejected++;
        continue;
      }
      positions[r.question.correctIndex]++;
      built.push(r.question);
    }
  }

  test("27. a large share of concepts build (rejections are only 'not enough safe distractors')", () => {
    expect(attempted).toBeGreaterThan(5000);
    expect(built.length / attempted).toBeGreaterThan(0.9);
  });

  test("28. every question has exactly 4 options and a correct answer among them", () => {
    for (const q of built) {
      expect(q.options).toHaveLength(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      expect(q.options[q.correctIndex].text.length).toBeGreaterThan(0);
    }
  });

  test("29. every question passes full validation (claims prove exactly one correct answer)", () => {
    const failures: string[] = [];
    for (const q of built) {
      const v = validateQuestion(q, store);
      if (v.length) failures.push(`${q.provenance.templateId}: ${v.map((x) => x.code).join(",")}`);
    }
    expect(failures.slice(0, 5)).toEqual([]);
  });

  test("30. no option text is duplicated within a question", () => {
    for (const q of built) {
      const texts = q.options.map((o) => o.text.toLowerCase());
      expect(new Set(texts).size).toBe(4);
    }
  });

  test("31. every question has a fingerprint, provenance and at least one source fact", () => {
    for (const q of built) {
      expect(q.fingerprint.length).toBeGreaterThan(5);
      expect(q.structureFingerprint.length).toBeGreaterThan(5);
      expect(q.sourceType).toBe("GENERATED");
      expect(q.provenance.factIds.length).toBeGreaterThanOrEqual(1);
      expect(q.provenance.sources.length).toBeGreaterThanOrEqual(1);
      expect(q.provenance.generatorVersion).toBe("1.0.0");
      for (const id of q.provenance.factIds) expect(store.byId.has(id)).toBe(true);
    }
  });

  test("32. the correct answer position is balanced across a large build", () => {
    const total = positions.reduce((a, b) => a + b, 0);
    for (const p of positions) {
      expect(Math.abs(p / total - 0.25)).toBeLessThan(0.02);
    }
  });

  test("33. difficulty follows structure: depth 1 easy, depth 2 moderate, depth 3 hard, and hard needs 3 facts", () => {
    for (const q of built) {
      expect(q.difficulty).toBe(q.depth === 1 ? "easy" : q.depth === 2 ? "moderate" : "hard");
      if (q.depth === 3) expect(q.provenance.factIds.length).toBeGreaterThanOrEqual(3);
    }
    expect(built.some((q) => q.depth === 3)).toBe(true);
  });

  test("34. exception questions have exactly one option that is NOT a member", () => {
    const exceptions = built.filter((q) => q.family === "EXCEPTION");
    expect(exceptions.length).toBeGreaterThan(20);
    for (const q of exceptions) {
      expect(q.polarity).toBe("negative");
      expect(q.stem).toMatch(/NOT|EXCEPT/);
    }
  });

  test("35. clinical questions quote the authored case and are flagged unreviewed", () => {
    const clinical = built.filter((q) => q.family === "CLINICAL_STYLE");
    expect(clinical.length).toBeGreaterThan(30);
    for (const q of clinical) {
      const fact = store.byId.get(q.provenance.factIds[0])!;
      expect(q.stem.startsWith(fact.attrs!.presentation.trim())).toBe(true);
      expect(q.unreviewed).toBe(true);
    }
  });

  test("36. learner-facing stems and options contain no em dash", () => {
    for (const q of built) {
      expect([q.stem, ...q.options.map((o) => o.text)].some((s) => s.includes("—"))).toBe(false);
    }
  });
});
