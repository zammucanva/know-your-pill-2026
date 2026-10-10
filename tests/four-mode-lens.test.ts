import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import {
  LENS_ENABLED_SLUGS,
  MODE_ORDER,
  MODE_SPECS,
  REVIEW_NOTICE,
  buildModeLenses,
  getModeLenses,
  modeOfBlock,
  splitViva,
  validateLensSet,
  type BlockKind,
  type ModeId,
} from "@/lib/kyp/modes";
import {
  CASE_STAGES,
  chooseMcq,
  clampStep,
  followBranch,
  initialMcq,
  isCorrect,
  nextCaseStage,
} from "@/lib/kyp/modes/interactions";
import { ModeLensView } from "@/components/kyp/sections/drug/mode-lens";

const lensFor = (slug: string) => {
  const drug = drugs.find((d) => d.slug === slug)!;
  const patientGuide = getPatientGuide(slug);
  const lenses = buildModeLenses({
    drug,
    patientGuide,
    mcqs: stahlMcqs.filter((q) => q.drugSlug === slug),
  });
  return { drug, patientGuide, lenses };
};

const render = (mode: ModeId, slug: string) => {
  const { drug, lenses } = lensFor(slug);
  return renderToStaticMarkup(React.createElement(ModeLensView, { drugName: drug.genericName, lenses, mode }));
};

describe("mode specifications", () => {
  test("four modes, each with a distinct objective and interaction", () => {
    expect(MODE_ORDER).toEqual(["patient", "mbbs", "neetPg", "resident"]);
    expect(new Set(MODE_ORDER.map((m) => MODE_SPECS[m].objective)).size).toBe(4);
    expect(new Set(MODE_ORDER.map((m) => MODE_SPECS[m].interaction)).size).toBe(4);
  });

  test("block schemas are disjoint: no block kind belongs to two modes", () => {
    const all: BlockKind[] = MODE_ORDER.flatMap((m) => [...MODE_SPECS[m].blocks]);
    expect(new Set(all).size).toBe(all.length);
    for (const m of MODE_ORDER) for (const k of MODE_SPECS[m].blocks) expect(modeOfBlock(k)).toBe(m);
  });
});

describe("vertical slice: sertraline", () => {
  const { drug, patientGuide, lenses } = lensFor("sertraline");

  test("every mode builds every block from existing registry content", () => {
    for (const m of MODE_ORDER) {
      expect(lenses[m].unavailable).toEqual([]);
      expect(lenses[m].blocks.map((b) => b.kind)).toEqual([...MODE_SPECS[m].blocks]);
    }
  });

  test("lens is faithful to the registry with no errors and no duplicate-text warnings", () => {
    expect(validateLensSet(lenses, drug, patientGuide)).toEqual([]);
  });

  test("shared facts are identical wherever they appear", () => {
    const mbbs = lenses.mbbs.blocks.find((b) => b.kind === "pharmacology-card");
    const halfLife = mbbs && mbbs.kind === "pharmacology-card" ? mbbs.rows.find((r) => r.label === "Half-life") : undefined;
    expect(halfLife?.value.text).toBe(drug.mechanism.halfLife);
    const mech = lenses.mbbs.blocks.find((b) => b.kind === "mechanism-walkthrough");
    expect(mech && mech.kind === "mechanism-walkthrough" ? mech.steps.map((s) => s.text) : []).toEqual(drug.mechanism.steps);
  });

  test("every block is marked pending clinical review", () => {
    for (const m of MODE_ORDER) for (const b of lenses[m].blocks) expect(b.review).toBe("pending-clinical-review");
  });

  test("viva display split never alters the verbatim source text", () => {
    const viva = lenses.mbbs.blocks.find((b) => b.kind === "viva-qa");
    if (!viva || viva.kind !== "viva-qa") throw new Error("no viva block");
    for (const it of viva.items) expect(it.full.text).toBe(drug.examLens!.mbbs.viva[Number(/\[(\d+)\]/.exec(it.full.source)![1])]);
    expect(splitViva("What is X? (Because Y)")).toEqual({ question: "What is X?", answer: "Because Y" });
    expect(splitViva("Plain statement").answer).toBeNull();
    // Questions without a "?" or with a second sentence before the answer still split.
    expect(splitViva("Name the triad. (A + B + C.)")).toEqual({ question: "Name the triad.", answer: "A + B + C." });
    expect(splitViva("What is X? Name two. (Y and Z)").answer).toBe("Y and Z");
    // Nested parentheses stay inside the answer; trailing text after the group means no split.
    expect(splitViva("Why? (Because (a) and (b))").answer).toBe("Because (a) and (b)");
    expect(splitViva("Why? (Because) and more").answer).toBeNull();
    // Statement-style items ending in a parenthetical are not question-and-answer pairs.
    expect(splitViva("Mechanism: IRREVERSIBLE non-selective MAO-A + MAO-B inhibitor (hydrazine class)").answer).toBeNull();
    expect(splitViva("Third hydrazine IRREVERSIBLE MAOI (with phenelzine, and historically iproniazid)").answer).toBeNull();
  });

  test("MCQ drill carries the authored questions unchanged", () => {
    const drill = lenses.neetPg.blocks.find((b) => b.kind === "mcq-drill");
    if (!drill || drill.kind !== "mcq-drill") throw new Error("no drill");
    const bank = stahlMcqs.filter((q) => q.drugSlug === "sertraline");
    expect(drill.questions.length).toBe(bank.length);
    drill.questions.forEach((q, i) => {
      expect(q.options).toEqual(bank[i].options);
      expect(q.correctIndex).toBe(bank[i].correctIndex);
      expect(q.explanation).toBe(bank[i].explanation);
    });
  });
});

describe("rendered mode experiences", () => {
  test("each mode renders its own blocks and none of the other modes' blocks", () => {
    const expected: Record<ModeId, string[]> = {
      patient: ["urgent-help", "plain-summary", "key-points", "tell-your-doctor"],
      mbbs: ["mechanism-walkthrough", "pharmacology-card", "viva-qa"],
      neetPg: ["high-yield-recall", "pyq-concepts", "mcq-drill"],
      resident: ["case-reasoner", "decision-path", "pitfalls"],
    };
    for (const m of MODE_ORDER) {
      const html = render(m, "sertraline");
      expect(html).toContain(`data-mode-lens="${m}"`);
      expect(html).toContain('data-review-state="pending-clinical-review"');
      for (const k of expected[m]) expect(html).toContain(`data-block="${k}"`);
      for (const other of MODE_ORDER.filter((x) => x !== m))
        for (const k of expected[other]) expect(html).not.toContain(`data-block="${k}"`);
    }
  });

  test("patient view puts urgent help before the explanation", () => {
    const html = render("patient", "sertraline");
    expect(html.indexOf('data-block="urgent-help"')).toBeLessThan(html.indexOf('data-block="plain-summary"'));
  });

  test("the resident case starts with the data and withholds the diagnosis", () => {
    const html = render("resident", "sertraline");
    const { lenses } = lensFor("sertraline");
    const c = lenses.resident.blocks.find((b) => b.kind === "case-reasoner");
    if (!c || c.kind !== "case-reasoner") throw new Error("no case");
    expect(html).toContain("Presentation:");
    expect(html).toContain("Examination:");
    expect(html).not.toContain("Diagnosis:");
    expect(html).not.toContain(c.management.text.slice(0, 40).replace(/&/g, "&amp;"));
  });

  test("missing content is stated, not invented (medicine without a Patient Guide)", () => {
    const slug = drugs.find((d) => !patientGuides[d.slug])!.slug;
    const html = render("patient", slug);
    expect(html).toContain("data-unavailable");
    expect(html).toContain("urgent help");
    expect(html).not.toContain('data-block="urgent-help"');
  });
});

describe("interaction state", () => {
  test("MCQ answers are final and bounds-checked", () => {
    let s = chooseMcq(initialMcq, 9, 4);
    expect(s.chosen).toBeNull();
    s = chooseMcq(s, 2, 4);
    expect(s.chosen).toBe(2);
    expect(chooseMcq(s, 1, 4).chosen).toBe(2);
    expect(isCorrect(s, 2)).toBe(true);
    expect(isCorrect(initialMcq, 2)).toBeNull();
  });
  test("steps, case stages and branches stay in range", () => {
    expect(clampStep(-3, 5)).toBe(0);
    expect(clampStep(99, 5)).toBe(4);
    expect(clampStep(1, 0)).toBe(0);
    expect(nextCaseStage(CASE_STAGES.length)).toBe(CASE_STAGES.length);
    const nodes = [
      { id: "a", branches: [{ label: "go", next: "b" }, { label: "bad", next: "zzz" }] },
      { id: "b", branches: [] },
    ];
    expect(followBranch(nodes, "a", "go")).toBe("b");
    expect(followBranch(nodes, "a", "bad")).toBe("a");
    expect(followBranch(nodes, "a", "nope")).toBe("a");
  });
});

describe("registry-wide validation (all medications)", () => {
  const all = drugs.map((drug) => {
    const patientGuide = getPatientGuide(drug.slug);
    const lenses = buildModeLenses({ drug, patientGuide, mcqs: stahlMcqs.filter((q) => q.drugSlug === drug.slug) });
    return { drug, patientGuide, lenses };
  });

  test("every medication builds all four lenses with no fidelity errors", () => {
    expect(all.length).toBe(drugs.length);
    const errors = all.flatMap((a) =>
      validateLensSet(a.lenses, a.drug, a.patientGuide)
        .filter((i) => i.severity === "error")
        .map((i) => `${a.drug.slug}:${i.code}:${i.detail}`)
    );
    expect(errors).toEqual([]);
  });

  test("every unavailable block states a reason and no block is both built and unavailable", () => {
    for (const a of all)
      for (const m of MODE_ORDER) {
        for (const u of a.lenses[m].unavailable) expect(u.reason.length).toBeGreaterThan(10);
        const built = new Set(a.lenses[m].blocks.map((b) => b.kind));
        for (const u of a.lenses[m].unavailable) expect(built.has(u.kind)).toBe(false);
      }
  });

  test("baseline coverage floors (raise these as content is authored; never lower silently)", () => {
    const count = (m: ModeId, k: BlockKind) => all.filter((a) => a.lenses[m].blocks.some((b) => b.kind === k)).length;
    expect(count("patient", "plain-summary")).toBe(drugs.length);
    expect(count("mbbs", "mechanism-walkthrough")).toBe(drugs.length);
    expect(count("neetPg", "high-yield-recall")).toBe(drugs.length);
    expect(count("resident", "case-reasoner")).toBe(drugs.length);
    expect(count("patient", "urgent-help")).toBe(Object.keys(patientGuides).length);
    expect(count("resident", "decision-path")).toBeGreaterThanOrEqual(12);
  });

  test("only enabled medications are rendered by the app; others keep their existing page", () => {
    for (const slug of LENS_ENABLED_SLUGS) {
      expect(drugs.some((d) => d.slug === slug)).toBe(true);
      expect(getModeLenses(slug)).not.toBeNull();
    }
    const other = drugs.find((d) => !LENS_ENABLED_SLUGS.includes(d.slug))!;
    expect(getModeLenses(other.slug)).toBeNull();
  });
});

describe("content fidelity of rendered text", () => {
  const decode = (t: string) =>
    t.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  const strings = (v: unknown, out: string[] = []): string[] => {
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
    else if (v && typeof v === "object") Object.values(v).forEach((x) => strings(x, out));
    return out;
  };
  // Presentation-only copy written for the UI. Anything new and long must be added
  // here deliberately, which is the review gate for new wording in the lens.
  const UI_COPY = [
    "Answer aloud first, then reveal.",
    "Pick an answer; it is final once chosen.",
    "Decide your diagnosis and plan before revealing each step.",
    "Common errors and when not to use",
    "Exam concepts noted in this guide",
    "Tell your doctor or pharmacist",
    "Mechanism, step by step",
    "Get urgent help",
  ];

  test("every long rendered fragment is canonical text or declared presentation copy", () => {
    const { lenses } = lensFor("sertraline");
    const unknown: string[] = [];
    for (const m of MODE_ORDER) {
      const canon = strings(lenses[m].blocks);
      const declared = [
        MODE_SPECS[m].objective,
        MODE_SPECS[m].interaction,
        MODE_SPECS[m].label + " view",
        REVIEW_NOTICE.heading,
        REVIEW_NOTICE.body,
        ...UI_COPY,
      ];
      const html = render(m, "sertraline");
      for (const raw of html.split(/<[^>]+>/)) {
        const t = decode(raw).trim().replace(/^(Target|Case|Avoid|Net effect): /, "").replace(/^\d+\. /, "");
        if (t.length < 25) continue;
        const ok = canon.some((c) => c.includes(t)) || declared.some((d) => d.includes(t));
        if (!ok) unknown.push(`${m}: ${t.slice(0, 80)}`);
      }
    }
    expect(unknown).toEqual([]);
  });

  test("the notice states that the whole page is not reviewed, and no text claims validation", () => {
    expect(REVIEW_NOTICE.body).toContain("rest of this page");
    expect(REVIEW_NOTICE.body).toContain("recorded qualified clinical review");
    for (const m of MODE_ORDER) {
      const html = render(m, "sertraline");
      expect(html).toContain(REVIEW_NOTICE.heading);
      expect(html).not.toMatch(/clinically (approved|validated|verified)|peer.reviewed|medically reviewed/i);
    }
  });
});

describe("rollout gate (docs/four-mode-rollout-gate.md, section A)", () => {
  test("every enabled medication has complete, clean lenses", () => {
    for (const slug of LENS_ENABLED_SLUGS) {
      const { drug, patientGuide, lenses } = lensFor(slug);
      for (const m of MODE_ORDER) expect(lenses[m].unavailable).toEqual([]);
      expect(validateLensSet(lenses, drug, patientGuide)).toEqual([]);
      // Every viva item of an enabled medicine must offer a reveal (no question shown with its answer inline).
      const noReveal = (drug.examLens?.mbbs?.viva ?? []).filter((v) => splitViva(v).answer === null);
      expect(noReveal).toEqual([]);
    }
  });
  test("the enabled list is exactly the reviewed slice (change deliberately)", () => {
    expect([...LENS_ENABLED_SLUGS]).toEqual(["sertraline"]);
  });
});

describe("viva splitter across the whole registry", () => {
  const items = drugs.flatMap((d) => (d.examLens?.mbbs?.viva ?? []).map((v) => ({ slug: d.slug, v })));
  test("splitting never loses or alters source text", () => {
    const lossy = items.filter(({ v }) => {
      const s = splitViva(v);
      const t = v.trim();
      if (s.answer === null) return s.question !== t;
      const rebuilt = `${s.question} (${s.answer})`;
      return rebuilt !== t && `${rebuilt}.` !== t;
    });
    expect(lossy.map((x) => x.slug + ": " + x.v.slice(0, 60))).toEqual([]);
  });
  test("only question-like prompts get a hidden answer", () => {
    const bad = items.filter(({ v }) => {
      const s = splitViva(v);
      return s.answer !== null && !/\?|^(name|list|define|describe|explain|enumerate|state|mention|write|classify|outline|give|compare|differentiate|discuss|identify)\b/i.test(s.question);
    });
    expect(bad).toEqual([]);
  });
  test("the enabled medication keeps a reveal on every viva item", () => {
    const sertraline = items.filter((i) => i.slug === "sertraline");
    expect(sertraline.length).toBe(6);
    for (const { v } of sertraline) expect(splitViva(v).answer).not.toBeNull();
  });
});

describe("readiness script keeps the three gates separate", () => {
  const run = (slug: string) => {
    const r = Bun.spawnSync([process.execPath, "scripts/four-mode-readiness.ts", slug], { cwd: process.cwd() });
    return { code: r.exitCode, out: r.stdout.toString() + r.stderr.toString() };
  };
  test("a mechanical pass is reported next to an unassessed clinical gate and no release authorisation", () => {
    for (const slug of ["sertraline", "fluoxetine"]) {
      const { code, out } = run(slug);
      expect(code).toBe(0);
      expect(out).toContain("MECHANICAL:       MET");
      expect(out).toContain("CLINICAL REVIEW:  NOT ASSESSED");
      expect(out).toContain("RELEASE:          NOT AUTHORISED");
      // Only the status block: the statements above it legitimately quote regulatory text.
      expect(out.split("== STATUS")[1]).not.toMatch(/\b(approved|ready to enable|safe to enable)\b/i);
    }
  });
  test("running it never enables a medication, and unknown slugs fail", () => {
    expect(run("fluoxetine").out).toContain("not enabled");
    expect(LENS_ENABLED_SLUGS.includes("fluoxetine")).toBe(false);
    expect(run("no-such-medicine").code).toBe(2);
  });
});
