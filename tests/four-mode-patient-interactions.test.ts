import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { ModeLensView } from "@/components/kyp/sections/drug/mode-lens";
import {
  CATEGORY_MODES,
  PATIENT_INTERACTION_COPY as COPY,
  TEMPLATE_ALCOHOL_TAIL,
  TEMPLATE_PREFIX,
  buildModeLenses,
  categoryOfSource,
  collectFacts,
  isTemplateText,
  summarizeTicks,
  validateDrug,
  validateLensSet,
  type ModeId,
} from "@/lib/kyp/modes";

type Drug = (typeof drugs)[number];
const names = drugs.map((d) => d.genericName);
const base = drugs.find((d) => d.slug === "sertraline")!;
const lensesOf = (drug: Drug, guide: ReturnType<typeof getPatientGuide> | null = getPatientGuide(drug.slug)) =>
  buildModeLenses({ drug, patientGuide: guide ?? undefined, mcqs: stahlMcqs.filter((q) => q.drugSlug === drug.slug) });
const pBlock = (drug: Drug, guide: ReturnType<typeof getPatientGuide> | null = getPatientGuide(drug.slug)) => {
  const b = lensesOf(drug, guide).patient.blocks.find((x) => x.kind === "patient-interactions");
  return b && b.kind === "patient-interactions" ? b : null;
};
const render = (drug: Drug, mode: ModeId = "patient", guide: ReturnType<typeof getPatientGuide> | null = getPatientGuide(drug.slug)) =>
  renderToStaticMarkup(React.createElement(ModeLensView, { drugName: drug.genericName, lenses: lensesOf(drug, guide), mode }));
const mut = (patch: Record<string, unknown>): Drug => ({ ...base, ...patch }) as Drug;
const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const MISLEADING = /\bno (known )?interactions?\b(?!\s+names)|interaction.free|safe to (combine|mix|take together)|nothing to worry/i;

describe("Patient interactions: registry-wide coverage, origin and fidelity", () => {
  const rows = drugs.map((d) => ({ d, b: pBlock(d), guide: patientGuides[d.slug] }));

  test("every medication has the block, built only from existing text and canonical names", () => {
    for (const { d, b, guide } of rows) {
      expect(b).not.toBeNull();
      const expectedSource = guide ? "patientGuide.interactions" : "patientMode.interactions";
      const expectedText = guide ? guide.interactions : (d.patientMode as { interactions: string }).interactions;
      expect(b!.statement!.text.source).toBe(expectedSource);
      expect(b!.statement!.text.text).toBe(expectedText);
      expect(b!.names.map((n) => n.text)).toEqual(d.interactions.map((i) => i.drug));
    }
  });

  test("origins are classified from the data, never assumed (counts pinned; update deliberately)", () => {
    const count = (o: string) => rows.filter((r) => r.b!.statement!.origin === o).length;
    expect(count("authored-guide")).toBe(12);
    expect(count("authored-registry")).toBe(2);
    expect(count("template")).toBe(131);
    expect(rows.filter((r) => r.b!.statement!.origin === "authored-registry").map((r) => r.d.slug).sort()).toEqual(["pemoline", "tacrine"]);
    for (const r of rows.filter((x) => x.guide)) expect(r.b!.statement!.origin).toBe("authored-guide");
  });

  test("template detection is exactly the shared lead-in plus the fixed alcohol sentence", () => {
    for (const r of rows.filter((x) => x.b!.statement!.origin === "template")) {
      const t = r.b!.statement!.text.text.trim();
      expect(t.startsWith(TEMPLATE_PREFIX)).toBe(true);
      expect(t.endsWith(TEMPLATE_ALCOHOL_TAIL)).toBe(true);
    }
    expect(isTemplateText("Tell your doctor.")).toBe(false);
    expect(isTemplateText(TEMPLATE_PREFIX + TEMPLATE_ALCOHOL_TAIL)).toBe(false);
  });

  test("no registry patient wording claims that no interactions exist", () => {
    for (const { b } of rows) expect(b!.statement!.text.text).not.toMatch(MISLEADING);
  });

  test("the registry validation reports origin and name counts per medication, with no structural errors", () => {
    const r = drugs.map((d) => {
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === d.slug);
      return validateDrug(d, patientGuides[d.slug], mcqs.map((q) => q.id), mcqs, names);
    });
    const origins = r.reduce<Record<string, number>>((m, x) => ((m[x.patientInteractions.origin] = (m[x.patientInteractions.origin] ?? 0) + 1), m), {});
    expect(origins).toEqual({ "authored-guide": 12, "authored-registry": 2, template: 131 });
    expect(r.every((x) => x.patientInteractions.names === x.interactions.records)).toBe(true);
    expect(r.flatMap((x) => x.issues.filter((i) => i.severity === "error" && i.code !== "viva-needs-review"))).toEqual([]);
  });
});

describe("Patient interactions: provenance and review state", () => {
  test("template facts are review-required with the reason; authored guide text is not marked as template", () => {
    const t = drugs.find((d) => d.slug === "tianeptine")!;
    const l = lensesOf(t);
    const f = collectFacts(l, { drug: t, patientGuide: undefined, mcqIds: [] }).used.find((x) => x.path === "patientMode.interactions")!;
    expect(f.status).toBe("review-required");
    expect(f.reviewReasons.join(" ")).toContain("standard template wording");
    const s = collectFacts(lensesOf(base), { drug: base, patientGuide: getPatientGuide("sertraline"), mcqIds: [] }).used.find((x) => x.path === "patientGuide.interactions")!;
    expect(s.reviewReasons.join(" ")).not.toContain("template");
    expect(s.review).not.toBe("approved");
  });

  test("each origin is labelled on screen; the template label says no individual review is recorded", () => {
    expect(render(base)).toContain(COPY.originLabel["authored-guide"]);
    const t = drugs.find((d) => d.slug === "tianeptine")!;
    const h = render(t);
    expect(h).toContain('data-origin="template"');
    expect(h).toContain("No individual review is recorded for this medicine.");
    expect(render(drugs.find((d) => d.slug === "tacrine")!)).toContain('data-origin="authored-registry"');
  });

  test("the review notice is present and nothing is approved", () => {
    expect(render(base)).toContain('data-review-state="pending-clinical-review"');
  });
});

describe("Patient interactions: missing and empty data", () => {
  test("no wording and no names is unavailable with a reason that does not imply no interactions", () => {
    const d = mut({ interactions: undefined, patientMode: { ...base.patientMode, interactions: "" } });
    const l = lensesOf(d, null);
    expect(l.patient.blocks.some((b) => b.kind === "patient-interactions")).toBe(false);
    const u = l.patient.unavailable.find((x) => x.kind === "patient-interactions")!;
    expect(u.reason).toContain("does not mean the medicine has no interactions");
  });

  test("missing wording with names present shows the limitation and the names, and invents no advice", () => {
    const d = mut({ patientMode: { ...base.patientMode, interactions: "" } });
    const b = pBlock(d, null)!;
    expect(b.statement).toBeNull();
    const h = render(d, "patient", null);
    expect(h).toContain("data-statement-missing");
    expect(h).toContain(COPY.missingStatement);
    expect(h).toContain(COPY.limitation);
    const block = h.split('data-block="patient-interactions"')[1].split("data-block=")[0];
    expect(block).not.toContain("data-origin-label");
    for (const n of b.names) expect(h).toContain(esc(n.text));
  });

  test("wording present but no names says so without claiming there are none", () => {
    for (const v of [[], undefined]) {
      const d = mut({ interactions: v });
      const h = render(d, "patient", null);
      expect(h).toContain("data-names-missing");
      expect(h).toContain(COPY.noList);
      expect(h.replace(COPY.noList, "")).not.toMatch(MISLEADING);
    }
  });

  test("every limitation and fallback string is itself free of 'no interactions' claims", () => {
    const strings = [COPY.limitation, COPY.missingStatement, COPY.listCaveat, COPY.noList, COPY.listIntro, ...Object.values(COPY.originLabel)];
    for (const s of strings) expect(s.replace("That does not mean it has no interactions", "")).not.toMatch(MISLEADING);
    expect(COPY.limitation).toContain("prescriber or pharmacist");
    expect(COPY.missingStatement).toContain("prescriber or pharmacist");
    expect(COPY.noList).toContain("prescriber or pharmacist");
  });
});

describe("Patient interactions: mode eligibility and distinctness from Resident", () => {
  test("only interaction names are eligible for Patient; mechanism and action are not", () => {
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].drug")]).toContain("patient");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].mechanism")]).not.toContain("patient");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].action")]).not.toContain("patient");
    expect(CATEGORY_MODES[categoryOfSource("patientMode.interactions")]).toEqual(["patient"]);
  });

  test("patientMode wording is not allowed in Resident (validator error)", () => {
    const l = structuredClone(lensesOf(base));
    l.resident.blocks.push({
      kind: "pitfalls",
      review: "pending-clinical-review",
      mistakes: [],
      whenNotToUse: [{ scenario: { text: base.patientMode.interactions, source: "patientMode.interactions" }, reason: { text: "x", source: "patientMode.interactions" }, alternative: null }],
    });
    expect(validateLensSet(l, base, getPatientGuide("sertraline")).map((i) => i.code)).toContain("fact-not-allowed-in-mode");
  });

  test("the Patient view shows no severity, mechanism or action, and never the Resident filter", () => {
    const h = render(base);
    expect(h).not.toContain("data-severity");
    expect(h).not.toContain("data-interactions-state");
    for (const i of base.interactions) {
      expect(h).not.toContain(esc(i.mechanism.slice(0, 40)));
      expect(h).not.toContain(esc(i.action.slice(0, 40)));
    }
    expect(h).toContain('data-block="patient-interactions"');
    const r = render(base, "resident");
    expect(r).not.toContain('data-block="patient-interactions"');
    expect(r).toContain('data-block="interactions"');
  });

  test("the block is built only in Patient mode", () => {
    const l = lensesOf(base);
    for (const m of ["mbbs", "neetPg", "resident"] as const) expect(l[m].blocks.some((b) => b.kind === "patient-interactions")).toBe(false);
  });

  test("a clinician and a patient see different interaction experiences for every medication (all 145)", () => {
    for (const d of drugs) {
      const p = render(d, "patient");
      const r = render(d, "resident");
      expect(p).toContain('data-block="patient-interactions"');
      expect(p).not.toContain('data-block="interactions"');
      expect(r).toContain('data-block="interactions"');
      expect(r).not.toContain('data-block="patient-interactions"');
      expect(p.replace(COPY.noList, "")).not.toMatch(/data-severity/);
    }
  });
});

describe("Patient interactions: the personal list", () => {
  test("summarizeTicks counts only what the patient ticked and returns the names, in list order", () => {
    const n = ["A", "B", "C"];
    const k = ["k0", "k1", "k2"];
    expect(summarizeTicks(n, {}, k)).toEqual({ count: 0, ticked: [] });
    expect(summarizeTicks(n, { k2: true, k0: true, k1: false }, k)).toEqual({ count: 2, ticked: ["A", "C"] });
    expect(summarizeTicks(n, { nope: true }, k).count).toBe(0);
  });

  test("renders one tickable item per canonical name, nothing pre-ticked, with the caveat", () => {
    const h = render(base);
    const boxes = (h.match(/type="checkbox"/g) ?? []).length;
    // Patient guide checklist (tell-your-doctor) plus one box per interaction name.
    expect(boxes).toBe(getPatientGuide("sertraline")!.tellYourDoctor.length + base.interactions.length);
    expect(h).not.toContain("checked");
    expect(h).toContain("Nothing ticked yet.");
    expect(h).toContain(COPY.listCaveat);
  });
});
