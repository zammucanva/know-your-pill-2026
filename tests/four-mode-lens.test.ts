import { EXPLANATION_COPY } from "@/lib/kyp/modes/explanation-copy";
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
  PATIENT_INTERACTION_COPY,
  buildModeLenses,
  getModeLenses,
  modeOfBlock,
  classifyViva,
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
import { MODE_TASKS, flowCopyStrings } from "@/lib/kyp/modes";

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

const explanationCopyStrings = (): string[] => [
  ...Object.values(EXPLANATION_COPY).flatMap((v) => (typeof v === "string" ? [v] : Object.values(v).flatMap((x) => (typeof x === "string" ? [x] : [x(2), x(3)])))),
];

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

  test("lens is faithful to the registry: no errors; the only warning is the known repeated sentence", () => {
    const issues = validateLensSet(lenses, drug, patientGuide);
    expect(issues.filter((i) => i.severity === "error")).toEqual([]);
    // Registry content (not editable here): one sentence is authored under both a when-not-to-use
    // reason and an interaction mechanism. Reported for the reviewer to accept or fix at source.
    expect(issues.map((i) => `${i.code}:${i.detail}`)).toEqual(["duplicate-across-fields:interactions[1].mechanism / whenNotToUse[2].reason"]);
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
    const viva = lenses.mbbs.blocks.find((b) => b.kind === "viva");
    if (!viva || viva.kind !== "viva") throw new Error("no viva block");
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

  test("the question session carries every authored question unchanged (quizzes and Stahl bank)", () => {
    const drill = lenses.neetPg.blocks.find((b) => b.kind === "mcq-drill");
    if (!drill || drill.kind !== "mcq-drill") throw new Error("no drill");
    const quizzes = drill.questions.filter((q) => q.origin === "authored-quiz");
    const bank = drill.questions.filter((q) => q.origin === "stahl-bank");
    expect(quizzes.length).toBe(drug.microQuizzes!.length);
    quizzes.forEach((q, i) => {
      const c = drug.microQuizzes![i];
      expect(q.stem).toBe(c.question);
      expect(q.options).toEqual(c.options);
      expect(q.correctIndex).toBe(c.correctIndex);
      expect(q.explanation).toBe(c.explanation);
    });
    const authoredBank = stahlMcqs.filter((q) => q.drugSlug === "sertraline");
    expect(bank.length).toBe(authoredBank.length);
    bank.forEach((q, i) => {
      expect(q.options).toEqual(authoredBank[i].options);
      expect(q.correctIndex).toBe(authoredBank[i].correctIndex);
      expect(q.explanation).toBe(authoredBank[i].explanation);
    });
  });
});

describe("rendered mode experiences", () => {
  test("each mode renders its own blocks and none of the other modes' blocks", () => {
    const expected: Record<ModeId, string[]> = {
      patient: ["urgent-help", "plain-summary", "key-points", "patient-interactions", "tell-your-doctor"],
      mbbs: ["mechanism-walkthrough", "pharmacology-card", "indications", "adverse-effects", "contraindications", "viva"],
      neetPg: ["high-yield-recall", "pyq-concepts", "mcq-drill"],
      resident: ["case-reasoner", "decision-path", "prescribing-checks", "monitoring-plan", "pitfalls"],
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

  test("patient flow keeps urgent help one tap away from every step and first within its own step", () => {
    const html = render("patient", "sertraline");
    expect(html).toContain('data-nav="urgent"');
    const watch = html.split('data-step-panel="watch"')[1].split("data-step-panel=")[0];
    expect(watch.indexOf('data-block="urgent-help"')).toBeLessThan(watch.indexOf('data-block="patient-side-effects"'));
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
        // viva-needs-review is a content classification (pinned in "viva content types"), not a fidelity defect.
        .filter((i) => i.severity === "error" && i.code !== "viva-needs-review")
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
    "Key facts for viva",
    "Tick the items you want to remember to mention.",
    "Check each item as you clear it. Absolute contraindications come first.",
    "Display format under review:",
    "Nothing ticked yet.",
    "Filter by severity or search by drug name.",
    "Search by interacting drug",
    "No interaction records are listed for this medicine in this guide. An empty list does not mean it has no interactions.",
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
        ...Object.values(PATIENT_INTERACTION_COPY).flatMap((v) => (typeof v === "string" ? [v] : Object.values(v))),
        ...flowCopyStrings(),
        ...explanationCopyStrings(),
        MODE_TASKS[m].title,
        MODE_TASKS[m].summary,
        ...UI_COPY,
      ];
      const html = render(m, "sertraline");
      for (const raw of html.split(/<[^>]+>/)) {
        const t = decode(raw).trim().replace(/^Showing \d+ of \d+ interactions$/, "Filter by severity or search by drug name.").replace(/^You ticked \d+\. Show this list to your pharmacist\.$/, "Nothing ticked yet.").replace(/^(Target|Case|Avoid|Net effect): /, "").replace(/^\d+\. /, "");
        if (t.length < 25) continue;
        const norm = (x: string) => x.replace(/\d+/g, "#");
        const ok = canon.some((c) => c.includes(t)) || declared.some((d) => d.includes(t) || norm(d).includes(norm(t)));
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
      expect(validateLensSet(lenses, drug, patientGuide).filter((i) => i.severity === "error")).toEqual([]);
      // No viva item of an enabled medicine may be malformed or ambiguous. Statements shown whole are valid.
      const needsReview = (drug.examLens?.mbbs?.viva ?? []).filter((v) => classifyViva(v).type === "needs-review");
      expect(needsReview).toEqual([]);
    }
  });
  test("the enabled list is exactly the reviewed slice (change deliberately)", () => {
    expect([...LENS_ENABLED_SLUGS]).toEqual(["sertraline"]);
  });
});

describe("viva content types", () => {
  const items = drugs.flatMap((d) => (d.examLens?.mbbs?.viva ?? []).map((v) => ({ slug: d.slug, v, c: classifyViva(v) })));
  const of = (t: string) => items.filter((i) => i.c.type === t);
  const COMMAND = /^(name|list|define|describe|explain|enumerate|state|mention|write|classify|outline|give|compare|differentiate|discuss|identify)\b/i;

  test("classification is total and the registry counts are pinned (update deliberately when content changes)", () => {
    expect(items.length).toBe(602);
    // 71 = 66 items with a "?" prompt + 5 with an exam command ("Name 5 ...", "Name the triad.").
    expect(of("qa").length).toBe(71);
    expect(of("statement").length).toBe(529);
    expect(of("needs-review").length).toBe(2);
    expect(of("qa").length + of("statement").length + of("needs-review").length).toBe(items.length);
  });

  test("the two items needing review are the known malformed/ambiguous ones, with reasons", () => {
    const nr = of("needs-review").map((i) => `${i.slug}:${i.c.type === "needs-review" ? i.c.reason : ""}`).sort();
    expect(nr).toEqual(["clomipramine:unbalanced-parentheses", "tacrine:question-without-parsable-answer"]);
  });

  test("source text is preserved exactly for every type", () => {
    const lossy = items.filter(({ v, c }) => {
      if (c.type !== "qa") return false;
      const rebuilt = `${c.question} (${c.answer})`;
      return rebuilt !== v.trim() && `${rebuilt}.` !== v.trim();
    });
    expect(lossy).toEqual([]);
    // splitViva never alters a statement or a needs-review item.
    for (const { v, c } of items) if (c.type !== "qa") expect(splitViva(v)).toEqual({ question: v.trim(), answer: null });
  });

  test("only question-like prompts become question-and-answer", () => {
    for (const { c } of of("qa")) if (c.type === "qa") expect(c.question.includes("?") || COMMAND.test(c.question)).toBe(true);
  });

  test("unit cases: nested, unbalanced, statements, malformed", () => {
    expect(classifyViva("Why? (Because (a) and (b))")).toEqual({ type: "qa", question: "Why?", answer: "Because (a) and (b)" });
    expect(classifyViva("Why? (Because (a) and (b)")).toEqual({ type: "needs-review", reason: "unbalanced-parentheses" });
    expect(classifyViva("Why? Because X.")).toEqual({ type: "needs-review", reason: "question-without-parsable-answer" });
    expect(classifyViva("Why? (Because) and more")).toEqual({ type: "needs-review", reason: "question-without-parsable-answer" });
    expect(classifyViva("   ")).toEqual({ type: "needs-review", reason: "empty" });
    expect(classifyViva("Uses of X: depression (treatment-resistant)")).toEqual({ type: "statement" });
    expect(classifyViva("Mechanism: SERT blockade; (see below) and more")).toEqual({ type: "statement" });
  });

  test("the enabled medication has only question-and-answer viva items", () => {
    const s = items.filter((i) => i.slug === "sertraline");
    expect(s.length).toBe(6);
    for (const i of s) expect(i.c.type).toBe("qa");
  });

  const mbbs = (slug: string) => {
    const { drug, lenses } = lensFor(slug);
    return { drug, html: renderToStaticMarkup(React.createElement(ModeLensView, { drugName: drug.genericName, lenses, mode: "mbbs" })) };
  };

  test("renders question-and-answer with reveal buttons only", () => {
    const { html } = mbbs("sertraline");
    expect(html).toContain('data-viva-type="qa"');
    expect(html).not.toContain('data-viva-type="statement"');
    expect(html).not.toContain('data-viva-type="needs-review"');
    expect((html.match(/>Reveal answer<[/]button>/g) ?? []).length).toBe(6);
  });

  test("renders statements whole, with no reveal button and no invented question", () => {
    const { drug, html } = mbbs("tianeptine");
    expect(html).toContain('data-viva-type="statement"');
    expect(html).not.toContain('data-viva-type="qa"');
    expect(html).not.toContain("Reveal answer");
    expect(html).not.toContain("Viva questions");
    const first = drug.examLens!.mbbs.viva[0].replace(/&/g, "&amp;").replace(/'/g, "&#x27;");
    expect(html).toContain(first.slice(0, 40));
  });

  test("renders needs-review items whole under a review label, alongside valid items", () => {
    const { html } = mbbs("clomipramine");
    expect(html).toContain('data-viva-type="qa"');
    expect(html).toContain('data-viva-type="needs-review"');
    expect(html).toContain("Display format under review:");
    expect((html.match(/>Reveal answer<[/]button>/g) ?? []).length).toBe(5);
  });

  test("the validator fails needs-review content and passes statements", () => {
    const bad = lensFor("clomipramine");
    const issues = validateLensSet(bad.lenses, bad.drug, bad.patientGuide).filter((i) => i.code === "viva-needs-review");
    expect(issues.map((i) => i.detail)).toEqual(["examLens.mbbs.viva[4]:unbalanced-parentheses"]);
    const stmt = lensFor("tianeptine");
    expect(validateLensSet(stmt.lenses, stmt.drug, stmt.patientGuide).filter((i) => i.code.startsWith("viva-"))).toEqual([]);
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
