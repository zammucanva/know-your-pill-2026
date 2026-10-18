import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { buildModeLens, explainPatient, matchSharedClaim, SHARED_CLAIM_RULES, sharedWordingReport, splitSentences, splitWithheld } from "@/lib/kyp/modes";
import { PatientExplainer } from "@/components/kyp/sections/drug/patient-explainer";
import { DrugPatientEducation } from "@/components/kyp/sections/drug/drug-patient-education";

const ONSET = "works gradually, most people notice the benefit over weeks, not days";
const squash = (t: string) => t.replace(/\s+/g, " ").trim();
/** Markup with every withheld disclosure removed: what a reader sees as guidance. */
const visible = (html: string) => html.replace(/<details data-withheld[\s\S]*?<\/details>/g, "");
const explainerHtml = (d: (typeof drugs)[number]) => {
  const g = getPatientGuide(d.slug);
  const interactions = buildModeLens("patient", { drug: d, patientGuide: g, mcqs: [] }).blocks.find((b) => b.kind === "patient-interactions") ?? null;
  return renderToStaticMarkup(React.createElement(PatientExplainer, { drugName: d.genericName, explanation: explainPatient(d, g), interactions }));
};
const allShown = (d: (typeof drugs)[number]) => {
  const e = explainPatient(d, getPatientGuide(d.slug));
  return [...e.plainWords, ...e.summary, ...e.reminders, ...e.sideEffects].filter((s) => s.handling === "show");
};

describe("shared cross-medicine claims are never shown as guidance for an individual medicine", () => {
  test("the onset sentence is carried by 131 medicines (pinned: a change must be reviewed on purpose)", () => {
    const carriers = drugs.filter((d) => squash(d.patientMode.summary).toLowerCase().includes(ONSET));
    expect(carriers.length).toBe(131);
    // It really is carried by fast-acting medicines, which is why it cannot be presented as a fact about each one.
    for (const slug of ["alprazolam", "amphetamine", "armodafinil"]) expect(carriers.map((d) => d.slug)).toContain(slug);
    expect(matchSharedClaim("It belongs to a well-studied class of medicines and works gradually, most people notice the benefit over weeks, not days.")?.kind).toBe("claim");
  });

  test("registry-wide: no claim-rule sentence is shown as guidance in the explanation, for any medicine", () => {
    for (const d of drugs) for (const s of allShown(d)) expect(matchSharedClaim(s.text)?.kind === "claim").toBe(false);
  });

  test("the original wording is kept, unchanged, and nothing is lost: shown plus withheld equals the source", () => {
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const e = explainPatient(d);
      const rebuilt = [...e.summary, ...e.plainWords].map((s) => s.text).join(" ");
      expect(rebuilt).toBe(`${squash(d.patientMode.summary)} ${squash(d.patientExplanation)}`);
      const withheld = e.summary.filter((s) => s.handling === "withhold");
      for (const w of withheld) expect(d.patientMode.summary).toContain(w.text);
    }
  });

  test("rendered explainer: fast-acting medicines do not show the onset claim as guidance; the original sits under a needs-review disclosure", () => {
    for (const slug of ["alprazolam", "amphetamine", "armodafinil"]) {
      const d = drugs.find((x) => x.slug === slug)!;
      const html = explainerHtml(d);
      expect(visible(html).toLowerCase()).not.toContain("works gradually, most people notice");
      expect(visible(html).toLowerCase()).not.toContain("builds over weeks");
      expect(visible(html).toLowerCase()).not.toContain("do not judge it in the first days");
      expect(html).toContain("data-withheld");
      expect(html.toLowerCase()).toContain("works gradually, most people notice the benefit over weeks"); // kept for review
      expect(html).toContain("Not confirmed for this medicine");
      expect(html).toContain("needs review");
    }
  });

  test("registry-wide rendering: no visible onset, schedule or outcome-promise claim in the explainer", () => {
    const banned = [/works gradually, most people notice/i, /builds over weeks/i, /do not judge it in the first days/i, /take it exactly as prescribed, at the same time each day/i, /almost always a solution/i, /usually appear early and many settle/i];
    for (const d of drugs) {
      if (getPatientGuide(d.slug)) continue;
      const v = visible(explainerHtml(d));
      for (const b of banned) expect(v).not.toMatch(b);
    }
  });

  test("the classic Patient Education section (non-patient modes) applies the same guard", () => {
    for (const slug of ["alprazolam", "amphetamine", "sertraline", "tianeptine"]) {
      const d = drugs.find((x) => x.slug === slug)!;
      const html = renderToStaticMarkup(React.createElement(DrugPatientEducation, { drug: d }));
      const v = visible(html);
      expect(v).not.toMatch(/builds over weeks|do not judge it in the first days|take it exactly as prescribed, at the same time each day/i);
      if (squash(d.patientEducationPoints.join(" ")).match(/builds over weeks/i)) expect(html).toMatch(/builds over weeks/i); // original kept under the disclosure
    }
  });

  test("directions stay visible and labelled as standard wording; they are not presented as medicine-specific", () => {
    const d = drugs.find((x) => x.slug === "tianeptine")!;
    const html = explainerHtml(d);
    expect(visible(html)).toContain("Contact your doctor urgently");
    expect(visible(html)).toContain("Standard advice used for many medicines (not specific to this one)");
  });

  test("any sentence shared by 20+ medicines must be classified (a new shared claim cannot silently appear)", () => {
    const r = sharedWordingReport();
    expect(r.unclassified.map((u) => u.wording)).toEqual([]);
    const counts = Object.fromEntries(r.rows.map((x) => [x.id, x.medications]));
    expect(counts["onset-works-gradually"]).toBe(131);
    expect(counts["onset-benefit-builds"]).toBe(125);
    expect(counts["ae-usually-early-settle"]).toBe(132);
    expect(counts["ae-almost-always-solution"]).toBe(132);
    expect(counts["admin-same-time-daily"]).toBe(86);
    expect(counts["contra-allergy-only"]).toBe(120);
    for (const row of r.rows) expect(row.reviewStatus).toBe("not reviewed");
  });

  test("every rule is documented for the content owner, and claims and directions are distinct", () => {
    expect(new Set(SHARED_CLAIM_RULES.map((x) => x.id)).size).toBe(SHARED_CLAIM_RULES.length);
    for (const r of SHARED_CLAIM_RULES) {
      expect(r.why.length).toBeGreaterThan(20);
      expect(["claim", "direction"]).toContain(r.kind);
    }
    expect(SHARED_CLAIM_RULES.some((r) => r.kind === "claim")).toBe(true);
    expect(SHARED_CLAIM_RULES.some((r) => r.kind === "direction")).toBe(true);
  });

  test("regex-only splitting (client use) withholds claims, keeps everything else, and rewrites nothing", () => {
    const text = "The most common side effects are: nausea. These usually appear early and many settle with time. Contact your doctor urgently if you experience these. Tell your doctor about any effect that persists or worries you: there is almost always a solution.";
    const r = splitWithheld(text);
    expect(r.withheld).toEqual(["These usually appear early and many settle with time.", "Tell your doctor about any effect that persists or worries you: there is almost always a solution."]);
    expect(r.shown).toBe("The most common side effects are: nausea. Contact your doctor urgently if you experience these.");
    expect(splitSentences(text).length).toBe(4);
  });

  test("the 12 Patient Guides contain no rule-matched claim sentence, so they are left exactly as authored", () => {
    for (const g of Object.values(patientGuides)) {
      const strings: string[] = [];
      const walk = (v: unknown) => {
        if (typeof v === "string") strings.push(v);
        else if (Array.isArray(v)) v.forEach(walk);
        else if (v && typeof v === "object") Object.values(v).forEach(walk);
      };
      walk(g);
      for (const t of strings) for (const s of splitSentences(t)) expect(matchSharedClaim(s)?.kind === "claim").toBe(false);
    }
  });

  test("withholding is not clinical approval: the explainer still says the wording is not reviewed", () => {
    const html = explainerHtml(drugs.find((x) => x.slug === "alprazolam")!);
    expect(html).toContain("has not been clinically reviewed");
    expect(html).not.toMatch(/\b(approved by|verified by|reviewed by|clinically (approved|verified))\b/i);
  });
});
