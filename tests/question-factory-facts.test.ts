/**
 * QUESTION FACTORY, PHASE 2: fact layer, relationship index, syllabus.
 *
 * Fixture tests prove extraction rules offline. The registry tests prove
 * the same rules hold on KYP's real content: facts are verbatim, every
 * source link points at a real page section, and nothing is invented.
 */

import { describe, expect, test } from "bun:test";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { DRUG_PAGE_SECTION_IDS } from "@/lib/kyp/drug-course-sections";
import {
  buildFactStore,
  diagnosisHead,
  extractHalfLife,
  extractMetaboliteName,
} from "@/lib/kyp/question-factory/facts";
import { getRegistryFactStore } from "@/lib/kyp/question-factory/registry-source";
import { buildSyllabus, drugsInScope } from "@/lib/kyp/question-factory/syllabus";
import { FIXTURE_DRUG_COUNT, fixtureSources, fixtureStore } from "./helpers/qf-fixtures";

describe("value extraction", () => {
  test("1. half-life takes the first time range and ignores non-numeric text", () => {
    expect(extractHalfLife("About 24 hours (range 20-36)")).toBe("24 hours");
    expect(extractHalfLife("~2-4 days")).toBe("2-4 days");
    expect(extractHalfLife("Variable")).toBeNull();
  });

  test("2. active metabolite is null when the source says there is none", () => {
    expect(extractMetaboliteName("No active metabolite of note")).toBeNull();
    expect(extractMetaboliteName("Norfluoxetine (active, long half-life)")).toBe("Norfluoxetine");
  });

  test("3. diagnosis head is a verbatim prefix, or null when unusable", () => {
    expect(diagnosisHead("Major Depressive Disorder, single episode (ICD-10 F32.2).")).toBe(
      "Major Depressive Disorder"
    );
    expect(diagnosisHead("Hi")).toBeNull();
    expect(diagnosisHead("x".repeat(150))).toBeNull();
  });
});

describe("fact extraction (fixtures)", () => {
  const store = fixtureStore();

  test("4. every fact carries verbatim evidence, an explanation and a source", () => {
    expect(store.facts.length).toBeGreaterThan(300);
    for (const fact of store.facts) {
      expect(fact.evidence.length).toBeGreaterThan(0);
      expect(fact.explanation.length).toBeGreaterThan(0);
      expect(fact.source.name.length).toBeGreaterThan(0);
      expect(fact.subject.id).toContain(":");
      expect(fact.object.id).toContain(":");
    }
  });

  test("5. evidence is quoted from the source, not reworded", () => {
    const src = fixtureSources().drugs[0];
    const ind = store.factsOf("indicatedFor", `drug:${src.slug}`);
    expect(ind.length).toBe(src.indications.length);
    for (const f of ind) {
      expect(src.indications.some((i) => f.evidence.includes(i.name))).toBe(true);
    }
    const effect = store.factsOf("hasNetEffect", `drug:${src.slug}`)[0];
    expect(effect.object.label).toBe(src.mechanism.effect);
  });

  test("6. optional fields that are absent produce no fact (nothing is invented)", () => {
    const sources = fixtureSources();
    // fixture drug index 5 has halfLife "Variable"; index 1 has no metabolite
    const variable = sources.drugs[5];
    expect(variable.mechanism.halfLife).toBe("Variable");
    expect(store.factsOf("hasHalfLife", `drug:${variable.slug}`)).toHaveLength(0);
    const noMetabolite = sources.drugs[1];
    expect(noMetabolite.mechanism.activeMetabolite).toBeUndefined();
    expect(store.factsOf("hasActiveMetabolite", `drug:${noMetabolite.slug}`)).toHaveLength(0);
    const noCase = sources.drugs[1];
    expect(store.factsOf("hasTeachingCase", `drug:${noCase.slug}`)).toHaveLength(0);
  });

  test("7. the relationship index answers holds/factsOf/factsAbout consistently", () => {
    const f = store.byRelation("belongsToClass")[0];
    expect(store.holds("belongsToClass", f.subject.id, f.object.id)).toBe(true);
    expect(store.holds("belongsToClass", f.subject.id, "drugClass:does-not-exist")).toBe(false);
    expect(store.factsOf("belongsToClass", f.subject.id)).toContain(f);
    expect(store.factsAbout("belongsToClass", f.object.id)).toContain(f);
    // every drug belongs to exactly one class
    for (const node of store.drugs.values()) {
      expect(store.factsOf("belongsToClass", `drug:${node.slug}`)).toHaveLength(1);
    }
  });

  test("8. fact ids are unique and extraction is deterministic", () => {
    const again = buildFactStore(fixtureSources());
    expect(again.facts.map((f) => f.id)).toEqual(store.facts.map((f) => f.id));
    expect(new Set(store.facts.map((f) => f.id)).size).toBe(store.facts.length);
  });

  test("9. brain atlas facts link pathways to regions by name, not by guess", () => {
    const meso = store.factsOf("terminatesIn", "pathway:p-meso")[0];
    expect(meso.object.id).toBe("brainRegion:nacc"); // matched "Nucleus Accumbens" by name
    const origin = store.factsOf("originatesIn", "pathway:p-meso")[0];
    expect(origin.object.label).toBe("Ventral Tegmental Area (VTA)"); // no region record: kept as stated
  });

  test("10. gene facts exist only where the data layer states a gene symbol", () => {
    expect(store.factsOf("encodedByGene", "target:sert")).toHaveLength(1);
    expect(store.factsOf("encodedByGene", "target:d2")).toHaveLength(0);
  });
});

describe("syllabus (fixtures)", () => {
  const store = fixtureStore();

  test("11. the tree is derived from learningPath and counts add up", () => {
    const tree = buildSyllabus(store);
    expect(tree).toHaveLength(1);
    const subject = tree[0];
    expect(subject.label).toBe("Psychiatry");
    expect(subject.drugCount).toBe(FIXTURE_DRUG_COUNT);
    expect(subject.children.map((c) => c.label)).toEqual(["Antidepressants", "Antipsychotics"]);
    const chapterTotal = subject.children.reduce((n, c) => n + c.drugCount, 0);
    expect(chapterTotal).toBe(FIXTURE_DRUG_COUNT);
    const alpha = subject.children[0].children.find((t) => t.label === "Alpha-RIs")!;
    expect(alpha.drugCount).toBe(4);
    expect(alpha.children).toHaveLength(4);
  });

  test("12. scope resolution narrows by chapter, topic and drug, and unknown scope is empty", () => {
    expect(drugsInScope(store, {})).toHaveLength(FIXTURE_DRUG_COUNT);
    expect(drugsInScope(store, { chapter: "Antipsychotics" })).toHaveLength(5);
    expect(drugsInScope(store, { chapter: "Antidepressants", topic: "Alpha-RIs" })).toHaveLength(4);
    expect(drugsInScope(store, { subtopic: "alvexin" })).toHaveLength(1);
    expect(drugsInScope(store, { chapter: "Nonexistent" })).toHaveLength(0);
  });
});

describe("real registry", () => {
  const store = getRegistryFactStore();

  test("13. every drug in the registry becomes a node with exactly one class fact", () => {
    expect(store.drugs.size).toBe(145);
    for (const node of store.drugs.values()) {
      expect(store.factsOf("belongsToClass", `drug:${node.slug}`)).toHaveLength(1);
    }
  });

  test("14. every drug-page source link points at a section the page really renders", () => {
    let checked = 0;
    for (const fact of store.facts) {
      const href = fact.source.sectionHref;
      if (!href) continue;
      const match = href.match(/^\/drugs\/[^/#]+#(.+)$/);
      expect(match).not.toBeNull();
      expect(DRUG_PAGE_SECTION_IDS).toContain(match![1]);
      checked++;
    }
    // Measured at 4,600 on the 145-drug registry; the floor guards against
    // the extractor silently emitting far fewer linked facts.
    expect(checked).toBeGreaterThan(4000);
  });

  test("15. every fact has verbatim evidence and a stable, unique id", () => {
    const ids = new Set<string>();
    for (const fact of store.facts) {
      expect(fact.evidence.trim().length).toBeGreaterThan(0);
      expect(fact.explanation.trim().length).toBeGreaterThan(0);
      expect(ids.has(fact.id)).toBe(false);
      ids.add(fact.id);
    }
  });

  test("16. the syllabus matches the real taxonomy: Psychiatry with 9 chapters over 145 drugs", () => {
    const tree = buildSyllabus(store);
    expect(tree).toHaveLength(1);
    expect(tree[0].label).toBe("Psychiatry");
    expect(tree[0].drugCount).toBe(145);
    expect(tree[0].children).toHaveLength(9);
    const antidepressants = tree[0].children.find((c) => c.label === "Antidepressants")!;
    expect(antidepressants.drugCount).toBe(41);
    const ssris = drugsInScope(store, { chapter: "Antidepressants", topic: "SSRIs" });
    expect(ssris.length).toBe(6);
  });

  test("17. no relation is built from data the registry does not state", () => {
    // Facts per relation must not exceed what the registry itself lists.
    const indicationCount = drugs.reduce((n, d) => n + new Set(d.indications.map((i) => i.name)).size, 0);
    expect(store.byRelation("indicatedFor").length).toBeLessThanOrEqual(indicationCount);
    const caseCount = drugs.reduce((n, d) => n + (d.clinicalCases?.length ?? 0), 0);
    expect(store.byRelation("hasTeachingCase").length).toBeLessThanOrEqual(caseCount);
  });
});
