import { describe, expect, test } from "bun:test";
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import { ModeLensView } from "@/components/kyp/sections/drug/mode-lens";
import { filterInteractions } from "@/lib/kyp/modes/interactions";
import {
  BLOCK_CONTRACTS,
  CATEGORY_MODES,
  buildModeLenses,
  categoryOfSource,
  collectFacts,
  validateDrug,
  validateLensSet,
  type ModeLensSet,
} from "@/lib/kyp/modes";

type Drug = (typeof drugs)[number];
const names = drugs.map((d) => d.genericName);
const base = drugs.find((d) => d.slug === "sertraline")!;

const lensesOf = (drug: Drug) =>
  buildModeLenses({ drug, patientGuide: getPatientGuide(drug.slug), mcqs: stahlMcqs.filter((q) => q.drugSlug === drug.slug) });
const residentBlock = (l: ModeLensSet) => {
  const b = l.resident.blocks.find((x) => x.kind === "interactions");
  return b && b.kind === "interactions" ? b : null;
};
const withInteractions = (value: unknown): Drug => ({ ...base, interactions: value as Drug["interactions"] });
const html = (drug: Drug) =>
  renderToStaticMarkup(React.createElement(ModeLensView, { drugName: drug.genericName, lenses: lensesOf(drug), mode: "resident" }));

describe("Resident interactions: registry-wide coverage and fidelity", () => {
  const rows = drugs.map((d) => ({ d, block: residentBlock(lensesOf(d)) }));

  test("every medication has an interactions block built from its canonical records", () => {
    expect(rows.every((r) => r.block !== null)).toBe(true);
    for (const { d, block } of rows) {
      expect(block!.state).toBe("listed");
      expect(block!.incomplete).toBe(0);
      expect(block!.items.length).toBe(d.interactions.length);
    }
  });

  test("every record's text and severity are the canonical values, in canonical order", () => {
    for (const { d, block } of rows)
      block!.items.forEach((it, i) => {
        const c = d.interactions[i];
        expect(it.drug.text).toBe(c.drug);
        expect(it.mechanism.text).toBe(c.mechanism);
        expect(it.action.text).toBe(c.action);
        expect(it.severity).toBe(c.severity);
        expect(it.drug.source).toBe(`interactions[${i}].drug`);
      });
  });

  test("no severity is invented: only the four canonical values appear", () => {
    const seen = new Set(rows.flatMap((r) => r.block!.items.map((i) => i.severity)));
    for (const s of seen) expect(["contraindicated", "major", "moderate", "minor"]).toContain(s);
  });

  test("registry counts are pinned (update deliberately when content changes)", () => {
    const total = rows.reduce((n, r) => n + r.block!.items.length, 0);
    const by = (s: string) => rows.reduce((n, r) => n + r.block!.items.filter((i) => i.severity === s).length, 0);
    expect(total).toBe(596);
    expect([by("contraindicated"), by("major"), by("moderate"), by("minor")]).toEqual([130, 276, 179, 11]);
  });

  test("the registry validation reports interaction state, record counts and severities per medication", () => {
    const r = drugs.map((d) => {
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === d.slug);
      return validateDrug(d, patientGuides[d.slug], mcqs.map((q) => q.id), mcqs, names);
    });
    expect(r.every((x) => x.interactions.state === "listed")).toBe(true);
    expect(r.reduce((n, x) => n + x.interactions.records, 0)).toBe(596);
    expect(r.reduce((n, x) => n + x.interactions.incomplete, 0)).toBe(0);
    const s = r.find((x) => x.slug === "sertraline")!;
    expect(Object.values(s.interactions.bySeverity).reduce((a, b) => a + b, 0)).toBe(s.interactions.records);
  });
});

describe("Resident interactions: absent vs empty vs incomplete", () => {
  test("absent data is unavailable with an explicit reason, not an empty list", () => {
    for (const v of [undefined, null, "none", {}]) {
      const l = lensesOf(withInteractions(v));
      expect(residentBlock(l)).toBeNull();
      const u = l.resident.unavailable.find((x) => x.kind === "interactions")!;
      expect(u.reason).toContain("absent");
      expect(u.reason).toContain("does not mean the medicine has no interactions");
    }
  });

  test("an explicit empty list is its own state and is never worded as 'no interactions'", () => {
    const d = withInteractions([]);
    const b = residentBlock(lensesOf(d))!;
    expect(b.state).toBe("empty");
    expect(b.items).toEqual([]);
    const out = html(d);
    expect(out).toContain('data-interactions-state="empty"');
    expect(out).toContain("An empty list does not mean it has no interactions.");
    expect(out).not.toContain("Filter by severity");
    // Apart from the explicit disclaimer, nothing may say or imply that no interactions exist.
    const rest = out.replace("An empty list does not mean it has no interactions.", "");
    expect(rest).not.toMatch(/no known interactions|no interactions exist|has no interactions|interaction.free/i);
  });

  test("absent and empty both surface as missing facts, with different reasons", () => {
    const f = (v: unknown) => {
      const d = withInteractions(v);
      return collectFacts(lensesOf(d), { drug: d, patientGuide: getPatientGuide(d.slug), mcqIds: [] }).missing.find((m) => m.path === "interactions[0].drug")!;
    };
    expect(f(undefined).status).toBe("missing");
    expect(f(undefined).reviewReasons[0]).toContain("not in the registry");
    expect(f([]).status).toBe("missing");
    expect(f([]).reviewReasons[0]).toContain("EMPTY interaction list");
    expect(f([]).value).toBeNull();
  });

  test("incomplete records are skipped, counted, reported and fail validation without being repaired", () => {
    const good = base.interactions[0];
    const d = withInteractions([good, { ...good, action: "  " }, { ...good, severity: "severe" }, { ...good, drug: "" }]);
    const l = lensesOf(d);
    const b = residentBlock(l)!;
    expect(b.items.length).toBe(1);
    expect(b.incomplete).toBe(3);
    expect(b.items[0].action.text).toBe(good.action);
    const codes = validateLensSet(l, d, getPatientGuide(d.slug)).map((i) => i.code);
    expect(codes).toContain("interaction-record-incomplete");
    expect(html(d)).toContain("3 record(s) are incomplete in the guide and are not shown.");
  });
});

describe("Resident interactions: mode eligibility", () => {
  test("mechanism and action belong to Resident/MBBS only; Patient may show only the interaction names", () => {
    expect(BLOCK_CONTRACTS.interactions.mode).toBe("resident");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].mechanism")]).not.toContain("patient");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].action")]).not.toContain("neetPg");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].drug")]).toContain("patient");
    expect(CATEGORY_MODES[categoryOfSource("interactions[0].drug")]).not.toContain("neetPg");
    const l = lensesOf(base);
    for (const m of ["patient", "mbbs", "neetPg"] as const) expect(l[m].blocks.some((b) => b.kind === "interactions")).toBe(false);
  });

  test("showing an interaction mechanism in Patient mode is a validation error", () => {
    const l = structuredClone(lensesOf(base));
    l.patient.blocks.push({
      kind: "key-points",
      review: "pending-clinical-review",
      points: [{ text: base.interactions[0].mechanism, source: "interactions[0].mechanism" }],
    });
    expect(validateLensSet(l, base, getPatientGuide(base.slug)).map((i) => i.code)).toContain("fact-not-allowed-in-mode");
  });

  test("a Resident lens with interactions keeps its other distinctive interactions and gains a filter", () => {
    const l = lensesOf(base);
    expect(l.resident.blocks.map((b) => b.kind)).toEqual(["clinical-summary", "case-reasoner", "decision-path", "prescribing-checks", "interactions", "monitoring-plan", "pitfalls"]);
    expect(BLOCK_CONTRACTS.interactions.interaction).toBe("filter");
  });
});

describe("Resident interactions: rendering and filter logic", () => {
  test("renders every record with its canonical severity, mechanism and action, plus a visible count", () => {
    const out = html(base);
    const n = base.interactions.length;
    expect(out).toContain('data-interactions-state="listed"');
    expect(out).toContain(`Showing ${n} of ${n} interactions`);
    expect((out.match(/data-severity="/g) ?? []).length).toBe(n);
    for (const i of base.interactions) expect(out).toContain(i.severity);
    expect(out).toContain('data-review-state="pending-clinical-review"');
  });

  test("filters by severity and by drug name, case-insensitively, preserving order", () => {
    const items = base.interactions.map((i) => ({ severity: i.severity, drug: { text: i.drug } }));
    expect(filterInteractions(items, new Set(), "")).toEqual(items);
    const major = filterInteractions(items, new Set(["major"]), "");
    expect(major.every((i) => i.severity === "major")).toBe(true);
    expect(major).toEqual(items.filter((i) => i.severity === "major"));
    const q = items[0].drug.text.slice(0, 5).toUpperCase();
    expect(filterInteractions(items, new Set(), q).length).toBeGreaterThan(0);
    expect(filterInteractions(items, new Set(["minor"]), "zzzz-no-such-drug")).toEqual([]);
    expect(filterInteractions(items, new Set(["contraindicated", "major"]), "").map((i) => i.severity).every((s) => s === "contraindicated" || s === "major")).toBe(true);
  });
});
