import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { ModeLensView, RevisionPath } from "@/components/kyp/sections/drug/mode-lens";
import {
  FLOW_COPY,
  MODE_ORDER,
  MODE_SPECS,
  MODE_TASKS,
  buildModeLenses,
  validateDrug,
  validateLensSet,
  type BlockKind,
  type ModeId,
} from "@/lib/kyp/modes";
import {
  recallCurrent,
  recallEnd,
  recallNext,
  recallPrev,
  recallResume,
  recallUnanswered,
  topicBreakdown,
  recallProgress,
  recallRetryMissed,
  recallScore,
  recallSelect,
  recallStart,
  recallSubmit,
} from "@/lib/kyp/modes/interactions";

type Drug = (typeof drugs)[number];
const names = drugs.map((d) => d.genericName);
const base = drugs.find((d) => d.slug === "sertraline")!;
const lensesOf = (drug: Drug, guide: ReturnType<typeof getPatientGuide> | null = getPatientGuide(drug.slug)) =>
  buildModeLenses({ drug, patientGuide: guide ?? undefined, mcqs: stahlMcqs.filter((q) => q.drugSlug === drug.slug) });
const render = (drug: Drug, mode: ModeId, guide: ReturnType<typeof getPatientGuide> | null = getPatientGuide(drug.slug)) =>
  renderToStaticMarkup(React.createElement(ModeLensView, { drugName: drug.genericName, lenses: lensesOf(drug, guide), mode }));
const mut = (patch: Record<string, unknown>): Drug => ({ ...base, ...patch }) as Drug;
const all = drugs.map((d) => ({ d, l: lensesOf(d) }));

describe("mode tasks: switching mode changes the task, not just visibility", () => {
  test("every block kind sits in exactly one step of its own mode, and every step is non-empty", () => {
    for (const m of MODE_ORDER) {
      const inSteps = MODE_TASKS[m].steps.flatMap((s) => [...s.blocks]);
      expect([...inSteps].sort()).toEqual([...MODE_SPECS[m].blocks].sort());
      expect(new Set(inSteps).size).toBe(inSteps.length);
      for (const s of MODE_TASKS[m].steps) expect(s.blocks.length).toBeGreaterThan(0);
      expect(new Set(MODE_TASKS[m].steps.map((s) => s.id)).size).toBe(MODE_TASKS[m].steps.length);
    }
  });

  test("each mode has its own task title, summary and step labels (none shared with another mode)", () => {
    expect(new Set(MODE_ORDER.map((m) => MODE_TASKS[m].title)).size).toBe(4);
    expect(new Set(MODE_ORDER.map((m) => MODE_TASKS[m].summary)).size).toBe(4);
    const labels = MODE_ORDER.flatMap((m) => MODE_TASKS[m].steps.map((s) => s.label));
    expect(new Set(labels).size).toBe(labels.length);
  });

  test("the rendered flow is a tablist of that mode's steps with exactly one visible panel", () => {
    for (const m of MODE_ORDER) {
      const h = render(base, m);
      expect(h).toContain('role="tablist"');
      expect((h.match(/role="tab"/g) ?? []).length).toBe(MODE_TASKS[m].steps.length);
      expect((h.match(/role="tabpanel"/g) ?? []).length).toBe(MODE_TASKS[m].steps.length);
      expect((h.match(/ hidden=""/g) ?? []).length).toBe(MODE_TASKS[m].steps.length - 1);
      expect(h).toContain(`data-flow-mode="${m}"`);
      expect(h).toContain(MODE_TASKS[m].title);
      for (const s of MODE_TASKS[m].steps) expect(h).toContain(`data-step-panel="${s.id}"`);
    }
  });

  test("all 145 medications render all four flows (sampled markup is well formed)", () => {
    for (const { d } of all) for (const m of MODE_ORDER) {
      const h = render(d, m);
      expect(h).toContain(`data-mode-lens="${m}"`);
      expect((h.match(/role="tab"/g) ?? []).length).toBe(MODE_TASKS[m].steps.length);
      expect(h).toContain('data-review-state="pending-clinical-review"');
    }
  });

  test("a step with nothing available says so and does not imply a negative finding", () => {
    const d = drugs.find((x) => !patientGuides[x.slug])!;
    const h = render(d, "patient");
    const take = h.split('data-step-panel="take"')[1].split("data-step-panel=")[0];
    expect(take).toContain("data-step-unavailable");
    expect(take).toContain(FLOW_COPY.shell.stepUnavailable);
    expect(take).toContain("data-unavailable");
    expect(FLOW_COPY.shell.stepUnavailable).toContain("not a finding");
  });
});

describe("NEET PG question session (authored questions only)", () => {
  const qs = (l: ReturnType<typeof lensesOf>) => {
    const b = l.neetPg.blocks.find((x) => x.kind === "mcq-drill");
    if (!b || b.kind !== "mcq-drill") throw new Error("no session");
    return b;
  };

  test("every medication has a session built only from its authored quizzes and Stahl questions (1824 questions)", () => {
    let quiz = 0;
    let bank = 0;
    for (const { d, l } of all) {
      const b = qs(l);
      expect(b.skipped).toBe(0);
      expect(b.questions.length).toBeGreaterThanOrEqual(12);
      expect(b.questions.length).toBeLessThanOrEqual(21);
      quiz += b.questions.filter((q) => q.origin === "authored-quiz").length;
      bank += b.questions.filter((q) => q.origin === "stahl-bank").length;
      expect(b.questions.filter((q) => q.origin === "authored-quiz").length).toBe(d.microQuizzes?.length ?? 0);
      for (const q of b.questions) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      }
    }
    expect([quiz, bank]).toEqual([1644, 180]);
  });

  test("answer keys, options and rationales are the authored values; none is invented or null today", () => {
    for (const { d, l } of all)
      for (const q of qs(l).questions) {
        if (q.origin === "authored-quiz") {
          const c = d.microQuizzes![Number(/\[(\d+)\]/.exec(q.source)![1])];
          expect([q.stem, q.correctIndex, q.explanation]).toEqual([c.question, c.correctIndex, c.explanation]);
          expect(q.options).toEqual(c.options);
        } else {
          const c = stahlMcqs.find((x) => `stahl:${x.id}` === q.source)!;
          expect([q.stem, q.correctIndex, q.explanation]).toEqual([c.question, c.correctIndex, c.explanation]);
        }
        expect(q.explanation).not.toBeNull();
      }
  });

  test("the validator catches an altered key, option, stem or rationale", () => {
    const l = structuredClone(lensesOf(base));
    const b = qs(l);
    const q = b.questions.find((x) => x.origin === "authored-quiz")!;
    q.correctIndex = (q.correctIndex + 1) % q.options.length;
    const codes = validateLensSet(l, base, getPatientGuide("sertraline"), stahlMcqs).map((i) => i.code);
    expect(codes).toContain("mcq-differs-from-source");
    const l2 = structuredClone(lensesOf(base));
    qs(l2).questions[0].correctIndex = 99;
    expect(validateLensSet(l2, base, getPatientGuide("sertraline"), stahlMcqs).map((i) => i.code)).toContain("mcq-invalid");
  });

  test("malformed authored questions are skipped, counted and flagged; they never reach a learner", () => {
    const bad = mut({ microQuizzes: [{ ...base.microQuizzes![0], correctIndex: 9 }, { ...base.microQuizzes![1], options: ["only one"] }, base.microQuizzes![2]] });
    const b = qs(lensesOf(bad));
    expect(b.skipped).toBe(2);
    expect(b.questions.filter((q) => q.origin === "authored-quiz").length).toBe(1);
    expect(validateLensSet(lensesOf(bad), bad, getPatientGuide("sertraline")).map((i) => i.code)).toContain("mcq-invalid");
  });

  test("a missing rationale is shown as missing, never invented", () => {
    const d = mut({ microQuizzes: [{ ...base.microQuizzes![0], explanation: "   " }] });
    const b = qs(lensesOf(d));
    expect(b.questions[0].explanation).toBeNull();
  });

  test("state machine: select, submit locks, next advances, summary scores, retry asks only the missed ones", () => {
    const Q = [
      { options: ["a", "b", "c", "d"], correctIndex: 1 },
      { options: ["a", "b", "c", "d"], correctIndex: 2 },
      { options: ["a", "b"], correctIndex: 0 },
    ];
    let s = recallStart(3);
    expect(recallCurrent(s)).toBe(0);
    expect(recallSubmit(s)).toBe(s); // cannot submit without an answer
    expect(recallNext(s)).toBe(s); // cannot skip an unsubmitted question
    s = recallSelect(s, 9, Q); // out of range ignored
    expect(s.chosen[0]).toBeUndefined();
    s = recallSelect(s, 0, Q);
    s = recallSelect(s, 1, Q); // can change before submit
    s = recallSubmit(s);
    expect(s.chosen[0]).toBe(1);
    expect(recallSelect(s, 3, Q).chosen[0]).toBe(1); // locked after submit
    s = recallNext(s);
    s = recallSubmit(recallSelect(s, 0, Q)); // wrong (correct is 2)
    s = recallNext(s);
    s = recallSubmit(recallSelect(s, 0, Q)); // right
    expect(recallProgress(s)).toEqual({ position: 3, total: 3, answered: 3 });
    s = recallNext(s);
    expect(s.phase).toBe("summary");
    expect(recallScore(s, Q)).toEqual({ asked: 3, correct: 2, missed: [1] });
    const r = recallRetryMissed(s, Q);
    expect(r.queue).toEqual([1]);
    expect(r.phase).toBe("question");
    expect(r.chosen).toEqual({});
    expect(recallRetryMissed(recallStart(0), Q).phase).toBe("summary");
  });

  test("back, end early and resume never reopen, alter or invent an answer", () => {
    const Q = [
      { options: ["a", "b", "c"], correctIndex: 1 },
      { options: ["a", "b", "c"], correctIndex: 2 },
      { options: ["a", "b", "c"], correctIndex: 0 },
    ];
    let s = recallStart(3);
    expect(recallPrev(s)).toBe(s); // nothing before the first question
    s = recallNext(recallSubmit(recallSelect(s, 0, Q))); // Q0 wrong, now on Q1
    s = recallPrev(s);
    expect(recallCurrent(s)).toBe(0);
    expect(recallSelect(s, 1, Q).chosen[0]).toBe(0); // still locked after going back
    expect(recallSubmit(s)).toBe(s);
    s = recallNext(s); // forward again to the unanswered Q1
    expect(recallCurrent(s)).toBe(1);
    s = recallEnd(s);
    expect(s.phase).toBe("summary");
    expect(recallUnanswered(s)).toBe(2);
    expect(recallScore(s, Q)).toEqual({ asked: 1, correct: 0, missed: [0] }); // unattempted questions are not scored
    expect(recallEnd(s)).toBe(s);
    const r = recallResume(s);
    expect(r.phase).toBe("question");
    expect(recallCurrent(r)).toBe(1); // first not-yet-submitted question
    expect(r.chosen).toEqual(s.chosen);
    expect(r.submitted).toEqual(s.submitted);
    const done = { ...s, submitted: { 0: true, 1: true, 2: true }, chosen: { 0: 0, 1: 2, 2: 0 } };
    expect(recallResume(done)).toBe(done); // nothing left to resume
  });

  test("the session renders one question with a locked-until-submitted flow, progress and no result yet", () => {
    const h = render(base, "neetPg");
    const total = qs(lensesOf(base)).questions.length;
    expect(h).toContain(FLOW_COPY.recall.progress(1, total));
    expect(h).toContain('role="progressbar"');
    expect(h).toContain('role="radiogroup"');
    expect((h.match(/role="radio"/g) ?? []).length).toBe(4);
    expect(h).not.toContain('type="radio"'); // no native radios: see the note in lens-blocks.tsx
    expect(h).toContain('data-action="submit"');
    expect(h).toContain("disabled");
    expect(h).not.toContain("data-mcq-result");
    expect(h).toContain(FLOW_COPY.recall.hint);
  });
});

describe("MBBS study flow", () => {
  test("exam preparation is built for every medication from verbatim practical tasks and long-answer prompts (314 + 421)", () => {
    let p = 0;
    let la = 0;
    for (const { d, l } of all) {
      const b = l.mbbs.blocks.find((x) => x.kind === "exam-prep");
      if (!b || b.kind !== "exam-prep") throw new Error(`no exam-prep for ${d.slug}`);
      expect(b.practical.map((x) => x.text)).toEqual(d.examLens!.mbbs.practical);
      expect(b.longAnswer.map((x) => x.text)).toEqual(d.examLens!.mbbs.longAnswer);
      p += b.practical.length;
      la += b.longAnswer.length;
      expect(Object.keys(b)).not.toContain("answers"); // no answer keys are invented
    }
    expect([p, la]).toEqual([314, 421]);
  });

  test("the study flow orders mechanism, use, safety, exam practice and viva, with self-test controls", () => {
    expect(MODE_TASKS.mbbs.steps.map((s) => s.id)).toEqual(["mechanism", "use", "safety", "exam", "viva"]);
    const h = render(base, "mbbs");
    expect(h).toContain(FLOW_COPY.mbbs.hideDescriptions);
    expect(h).toContain(FLOW_COPY.mbbs.revealAll);
    expect(h).toContain(FLOW_COPY.mbbs.practised(0, 4 + 2 > 0 ? (base.examLens!.mbbs.practical.length + base.examLens!.mbbs.longAnswer.length) : 0));
  });
});

describe("Resident reasoning flow: absent is not a negative finding", () => {
  const summary = (d: Drug) => {
    const b = lensesOf(d).resident.blocks.find((x) => x.kind === "clinical-summary");
    if (!b || b.kind !== "clinical-summary") throw new Error("no summary");
    return b;
  };

  test("the overview is built for every medication with counts derived from the canonical records", () => {
    let bbListed = 0;
    let bbEmpty = 0;
    for (const { d, l } of all) {
      const b = l.resident.blocks.find((x) => x.kind === "clinical-summary");
      if (!b || b.kind !== "clinical-summary") throw new Error(`no summary for ${d.slug}`);
      expect(b.contraindications.count).toBe(d.contraindications.length);
      expect(b.contraindications.absolute).toBe(d.contraindications.filter((c) => c.severity === "absolute").length);
      expect(b.interactions.count).toBe(d.interactions.length);
      expect(b.interactions.contraindicated).toBe(d.interactions.filter((i) => i.severity === "contraindicated").length);
      expect(b.monitoring.count).toBe(d.monitoring.length);
      expect(b.boxedWarnings.count).toBe(d.blackBoxWarnings.length);
      expect(b.decisionPath.state).toBe(d.clinicalDecisionPath?.nodes?.length ? "present" : "absent");
      expect(b.derivedFrom.length).toBeGreaterThan(5);
      if (b.boxedWarnings.state === "listed") bbListed++;
      if (b.boxedWarnings.state === "empty") bbEmpty++;
    }
    expect([bbListed, bbEmpty]).toEqual([111, 34]);
    expect(all.filter((a) => a.l.resident.blocks.some((x) => x.kind === "clinical-summary" && x.decisionPath.state === "present")).length).toBe(12);
  });

  test("absent, empty and listed are three different states with three different wordings", () => {
    const absent = summary(mut({ contraindications: undefined, interactions: "none", monitoring: null, blackBoxWarnings: undefined }));
    expect([absent.contraindications.state, absent.interactions.state, absent.monitoring.state, absent.boxedWarnings.state]).toEqual(["absent", "absent", "absent", "absent"]);
    const empty = summary(mut({ contraindications: [], interactions: [], monitoring: [], blackBoxWarnings: [] }));
    expect(empty.contraindications.state).toBe("empty");
    expect(empty.contraindications.count).toBe(0);
    const listed = summary(base);
    expect(listed.contraindications.state).toBe("listed");
    const h = render(mut({ contraindications: [], interactions: undefined }), "resident");
    expect(h).toContain(FLOW_COPY.resident.emptyList);
    expect(h).toContain(FLOW_COPY.resident.absent);
    expect(FLOW_COPY.resident.emptyList).toContain("not a statement that none exist");
    expect(FLOW_COPY.resident.absent).toContain("not a finding that none exist");
    expect(FLOW_COPY.resident.overviewNote).toContain("not a finding that nothing applies");
  });

  test("malformed registry data never throws and never reads as 'none exist'", () => {
    const d = mut({ contraindications: "x", interactions: { a: 1 }, commonMistakes: 5, whenNotToUse: null });
    expect(() => lensesOf(d)).not.toThrow();
    const b = summary(d);
    expect(b.contraindications.state).toBe("absent");
    expect(b.pitfalls.state).toBe("absent");
    // Apart from the explicit "does not mean ... has no interactions" disclaimer, nothing may read as "none exist".
    const text = render(d, "resident").replace(/does not mean (the medicine|it) has no interactions/gi, "");
    expect(text).not.toMatch(/no (known )?(contraindications|interactions)\b/i);
  });

  test("every summary card offers a keyboard-reachable jump to its step only when data exists", () => {
    const h = render(base, "resident");
    expect(h).toContain('data-summary-item="Contraindications"');
    expect((h.match(new RegExp(FLOW_COPY.resident.goToStep, "g")) ?? []).length).toBeGreaterThanOrEqual(4);
    const d = drugs.find((x) => !x.clinicalDecisionPath?.nodes?.length)!;
    const none = render(d, "resident");
    expect(none).toContain(FLOW_COPY.resident.notPresent);
  });
});

describe("Patient practical flow: authored content, labelled", () => {
  test("how-to-take exists only where the Patient Guide holds it (12), verbatim, and is unavailable elsewhere with a reason", () => {
    for (const { d, l } of all) {
      const b = l.patient.blocks.find((x) => x.kind === "patient-how-to-take");
      const g = patientGuides[d.slug];
      if (g) {
        if (!b || b.kind !== "patient-how-to-take") throw new Error("missing");
        expect(b.usuallyTaken?.text).toBe(g.usuallyTaken);
        expect(b.missedDose?.text).toBe(g.missedDose);
        expect(b.stopping?.text).toBe(g.stopping);
        expect(b.monitoring?.text).toBe(g.monitoring);
      } else {
        expect(b).toBeUndefined();
        expect(l.patient.unavailable.find((u) => u.kind === "patient-how-to-take")!.reason).toContain("guide-only");
      }
    }
  });

  test("side effects use the Patient Guide for 12 medicines and the registry wording for 133, always verbatim and labelled", () => {
    let guide = 0;
    let registry = 0;
    for (const { d, l } of all) {
      const b = l.patient.blocks.find((x) => x.kind === "patient-side-effects");
      if (!b || b.kind !== "patient-side-effects") throw new Error(`no side-effects for ${d.slug}`);
      if (b.source === "guide") {
        guide++;
        expect(b.common.map((c) => c.text)).toEqual(patientGuides[d.slug].commonSideEffects.list);
        expect(b.important.map((x) => x.whatToDo.text)).toEqual(patientGuides[d.slug].importantSideEffects.items.map((x) => x.whatToDo));
      } else {
        registry++;
        expect(b.registryText!.text).toBe((d.patientMode as { sideEffects: string }).sideEffects);
      }
    }
    expect([guide, registry]).toEqual([12, 133]);
    const reg = render(drugs.find((x) => !patientGuides[x.slug])!, "patient");
    expect(reg).toContain(FLOW_COPY.patient.registrySideEffectsLabel);
    expect(render(base, "patient")).toContain(FLOW_COPY.patient.guideLabel);
  });

  test("the five-step patient task keeps urgent help one tap away and states every missing piece", () => {
    expect(MODE_TASKS.patient.steps.map((s) => s.id)).toEqual(["know", "take", "watch", "others", "ask"]);
    const h = render(base, "patient");
    expect(h).toContain('data-nav="urgent"');
    const noGuide = render(drugs.find((x) => !patientGuides[x.slug])!, "patient");
    expect(noGuide).not.toContain('data-nav="urgent"'); // no urgent-help content to point at
    expect(noGuide).toContain("data-unavailable");
  });
});

describe("registry validation still holds with the new flows", () => {
  test("no structural errors for any medication, including question fidelity", () => {
    for (const { d } of all) {
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === d.slug);
      const r = validateDrug(d, patientGuides[d.slug], mcqs.map((q) => q.id), mcqs, names);
      expect(r.issues.filter((i) => i.severity === "error" && i.code !== "viva-needs-review" && i.code !== "interaction-record-incomplete")).toEqual([]);
    }
  });

  test("every block kind of every mode has a distinct interaction contract entry", () => {
    const kinds: BlockKind[] = MODE_ORDER.flatMap((m) => [...MODE_SPECS[m].blocks]);
    expect(new Set(kinds).size).toBe(kinds.length);
  });
});

describe("flow shell: completion and navigation states", () => {
  test("first step offers Next, not restart, and is not yet marked complete; pills and session actions stay clear of the floating progress pill on small screens", () => {
    for (const mode of ["patient", "mbbs", "neetPg", "resident"] as const) {
      const h = render(base, mode);
      expect(h).toContain('data-nav="next"');
      expect(h).not.toContain('data-nav="restart"');
      expect(h).not.toContain("data-flow-complete");
      expect(h).toContain("max-lg:pl-24"); // shell Back/Next row keeps clear of the fixed section-navigator pill
    }
    const q = render(base, "neetPg");
    expect(q).toContain('data-action="end"'); // a session can be ended early
    expect(q).not.toContain('data-action="prev"'); // nothing before the first question
  });
});

describe("accessibility and missing-data wording", () => {
  test("viva reveal controls are named by their question and expose expanded state", () => {
    const h = render(base, "mbbs");
    const buttons = h.match(/<button[^>]*aria-expanded="false"[^>]*aria-label="Reveal answer: [^"]+"/g) ?? [];
    expect(buttons.length).toBeGreaterThan(0);
  });
  test("a patient step with missing content never reads as 'no risk' and points to a prescriber or pharmacist", () => {
    const noGuide = drugs.find((d) => !getPatientGuide(d.slug))!;
    const bare = JSON.parse(JSON.stringify(noGuide));
    delete bare.patientMode;
    delete bare.patientExplanation;
    delete bare.patientEducationPoints;
    const h = renderToStaticMarkup(
      React.createElement(ModeLensView, { drugName: bare.name ?? bare.slug, lenses: buildModeLenses({ drug: bare, patientGuide: undefined, mcqs: [] }), mode: "patient" })
    );
    expect(h).toContain(FLOW_COPY.shell.patientUnavailableDirection);
    expect(FLOW_COPY.shell.patientUnavailableDirection).toMatch(/not a sign that the medicine is safe/);
    expect(FLOW_COPY.shell.patientUnavailableDirection).toMatch(/prescriber or pharmacist/);
    expect(h).not.toMatch(/no (known )?(risk|interactions|side effects)/i);
  });
  test("the resident case uses one persistent button so focus is never dropped, and the patient how-to-take step has a heading", () => {
    const h = render(base, "resident");
    expect((h.match(/data-action="case-step"/g) ?? []).length).toBe(1);
    expect(render(base, "patient")).toContain(FLOW_COPY.patient.takeHeading);
  });
});

describe("session progress and new self-test interactions", () => {
  test("MBBS mechanism offers a recall mode (pressed state, off by default) and the shell has the progress hook", () => {
    const h = render(base, "mbbs");
    expect(h).toContain('data-action="mechanism-recall"');
    expect(h).toContain('aria-pressed="false"');
    expect(h).not.toContain("data-step-hidden"); // nothing is hidden until the learner opts in
  });
  test("Resident monitoring items are tickable with a progress line, and the case asks for the learner's own plan first", () => {
    const h = render(base, "resident");
    expect(h).toContain("data-monitoring-progress");
    expect(h).toContain(FLOW_COPY.resident.monitoringProgress(0, 6));
    expect(h).toContain(FLOW_COPY.resident.myPlanLabel);
    expect(h).toContain(FLOW_COPY.resident.myPlanHint); // says it is not saved or marked
    expect(h).not.toContain("data-my-plan");
  });
  test("every registry medication still renders every mode with the new controls (no throw)", () => {
    for (const d of drugs) {
      for (const m of ["patient", "mbbs", "neetPg", "resident"] as const) {
        expect(() => render(d, m)).not.toThrow();
      }
    }
  });
  test("the patient list summary is empty-safe and never claims safety", () => {
    expect(FLOW_COPY.shell.listEmpty).toBe("Nothing ticked yet.");
    expect(FLOW_COPY.shell.listHint).toMatch(/does not mean it is unimportant or safe/);
  });
});

describe("topic feedback, revision path and labelled sources", () => {
  test("topic feedback groups only by authored tags and never assigns one", () => {
    const Q = [
      { options: ["a", "b"], correctIndex: 0, category: { id: "monitoring", label: "Monitoring" } },
      { options: ["a", "b"], correctIndex: 0, category: { id: "monitoring", label: "Monitoring" } },
      { options: ["a", "b"], correctIndex: 1, category: { id: "adverse-effects", label: "Adverse effects" } },
      { options: ["a", "b"], correctIndex: 1 },
      { options: ["a", "b"], correctIndex: 1, category: null },
    ];
    let s = recallStart(5);
    for (const pick of [1, 0, 1, 0]) s = recallNext(recallSubmit(recallSelect(s, pick, Q))); // Q4 left unanswered
    const t = topicBreakdown(s, Q);
    expect(t.rows.map((r) => [r.id, r.correct, r.asked, r.missed])).toEqual([
      ["monitoring", 1, 2, [0]],
      ["adverse-effects", 1, 1, []],
    ]);
    expect(t.untagged).toEqual({ asked: 1, correct: 0, missed: [3] });
  });
  test("every authored question's category equals its source's own tag (registry-wide)", () => {
    let tagged = 0;
    let total = 0;
    for (const d of drugs) {
      const mq = lensesOf(d).neetPg.blocks.find((b) => b.kind === "mcq-drill");
      if (!mq || mq.kind !== "mcq-drill") continue;
      for (const q of mq.questions) {
        total++;
        if (q.category) tagged++;
        if (q.origin === "stahl-bank") {
          const src = stahlMcqs.find((x) => `stahl:${x.id}` === q.source)!;
          expect(q.category?.id).toBe(src.topic);
        }
        if (q.category?.basis === "quiz-section") expect(["mechanism", "timeline", "side-effects", "monitoring", "contraindications", "interactions", "clinical-uses", "evidence-practice"]).toContain(q.category.id);
      }
    }
    expect(total).toBe(1824);
    expect(tagged).toBeGreaterThan(0);
    expect(tagged).toBeLessThan(total); // untagged questions stay ungrouped, not guessed
  });
  test("the MBBS revision path orders the four parts, shows overall progress and points to the first unfinished part", () => {
    const steps = [
      { id: "mechanism", label: "Mechanism" },
      { id: "safety", label: "Safety" },
      { id: "exam", label: "Exam practice" },
      { id: "viva", label: "Viva" },
    ];
    const progress = {
      exam: { label: "Exam tasks practised", done: 0, total: 6 },
      mechanism: { label: "Mechanism steps seen", done: 6, total: 6 },
      viva: { label: "Viva answers revealed", done: 3, total: 6 },
      safety: { label: "Safety items self-tested", done: 0, total: 13 },
    };
    const h = renderToStaticMarkup(React.createElement(RevisionPath, { progress, steps, onGo: () => {} }));
    expect(h).toContain("data-revision-path");
    expect(h.indexOf('data-revision-row="mechanism"')).toBeLessThan(h.indexOf('data-revision-row="safety"'));
    expect(h.indexOf('data-revision-row="safety"')).toBeLessThan(h.indexOf('data-revision-row="viva"'));
    expect(h.indexOf('data-revision-row="viva"')).toBeLessThan(h.indexOf('data-revision-row="exam"'));
    expect(h).toContain(FLOW_COPY.mbbs.revisionOverall(Math.round((9 / 31) * 100)));
    expect(h).toContain(FLOW_COPY.mbbs.revisionContinue("Safety")); // first part not finished
    const done = renderToStaticMarkup(
      React.createElement(RevisionPath, { progress: { mechanism: { label: "m", done: 1, total: 1 } }, steps, onGo: () => {} })
    );
    expect(done).toContain("data-revision-done");
    expect(renderToStaticMarkup(React.createElement(RevisionPath, { progress: {}, steps, onGo: () => {} }))).toBe("");
    expect(render(base, "resident")).not.toContain("data-revision-path");
  });
  test("Resident states that learner entries are not clinical validation", () => {
    const h = render(base, "resident");
    expect(h).toContain("data-not-validation");
    expect(FLOW_COPY.resident.notValidation).toMatch(/not clinical validation/);
    expect(h).toContain('data-action="case-step"');
  });
  test("every patient step names where its wording comes from, or says nothing", () => {
    const h = render(base, "patient");
    expect(h).toContain("data-source-line");
    expect(h).toContain(FLOW_COPY.shell.sourceGuide);
    expect(FLOW_COPY.shell.sourceGuide).toMatch(/No qualified clinical review is recorded/);
    expect(FLOW_COPY.shell.sourceRegistry).toMatch(/not reviewed/);
  });
});
