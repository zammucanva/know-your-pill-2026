import { describe, expect, test } from "bun:test";
import { drugs } from "@/lib/kyp/data";
import { getPatientGuide, patientGuides } from "@/lib/kyp/patient";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import {
  BLOCK_CONTRACTS,
  CATEGORY_MODES,
  INTERACTIVE_KINDS,
  MODE_ORDER,
  MODE_SPECS,
  REVIEW_FLAGS,
  REVIEW_RECORDS,
  buildModeLenses,
  categoryOfSource,
  collectFacts,
  distinctiveInteractions,
  factId,
  findContradictions,
  hoursRanges,
  modeOfBlock,
  readPath,
  validateDrug,
  validateLensSet,
  type BlockKind,
  type ModeId,
} from "@/lib/kyp/modes";

const inputsFor = (slug: string) => {
  const drug = drugs.find((d) => d.slug === slug)!;
  const patientGuide = getPatientGuide(slug);
  const mcqs = stahlMcqs.filter((q) => q.drugSlug === slug);
  return { drug, patientGuide, mcqs, lenses: buildModeLenses({ drug, patientGuide, mcqs }) };
};
const names = drugs.map((d) => d.genericName);

describe("mode contracts", () => {
  test("every block kind has a contract in the mode that owns it", () => {
    for (const m of MODE_ORDER)
      for (const k of MODE_SPECS[m].blocks) {
        expect(BLOCK_CONTRACTS[k].kind).toBe(k);
        expect(BLOCK_CONTRACTS[k].mode).toBe(m);
        expect(modeOfBlock(k)).toBe(m);
      }
    expect(Object.keys(BLOCK_CONTRACTS).length).toBe(MODE_ORDER.flatMap((m) => MODE_SPECS[m].blocks).length);
  });

  test("every contract slot path maps to a fact category", () => {
    for (const c of Object.values(BLOCK_CONTRACTS)) for (const s of c.slots) for (const p of s.anyOf) expect(() => categoryOfSource(p)).not.toThrow();
  });

  test("each mode offers at least one interactive kind that no other mode offers", () => {
    const built = Object.fromEntries(MODE_ORDER.map((m) => [m, [...MODE_SPECS[m].blocks]])) as Record<ModeId, BlockKind[]>;
    const d = distinctiveInteractions(built);
    for (const m of MODE_ORDER) {
      expect(d[m].length).toBeGreaterThan(0);
      for (const k of d[m]) expect(INTERACTIVE_KINDS.has(k)).toBe(true);
    }
  });

  test("a category is usable only in modes the contract lists, and mechanism/safety facts are shareable", () => {
    expect(CATEGORY_MODES["patient-guide"]).toEqual(["patient"]);
    expect(CATEGORY_MODES["exam-neet"]).toEqual(["neetPg"]);
    expect(CATEGORY_MODES.safety).toContain("mbbs");
    expect(CATEGORY_MODES.safety).toContain("resident");
  });
});

describe("canonical fact references", () => {
  const { drug, patientGuide, mcqs, lenses } = inputsFor("sertraline");
  const set = collectFacts(lenses, { drug, patientGuide, mcqIds: mcqs.map((q) => q.id) });

  test("ids are stable <slug>#<path> and each value is the canonical value, verbatim", () => {
    expect(set.used.length).toBeGreaterThan(50);
    const root = { ...drug, patientGuide };
    for (const f of set.used) {
      expect(f.id).toBe(factId("sertraline", f.path));
      if (f.path.startsWith("stahl:")) continue;
      expect(readPath(root, f.path)).toBe(f.value);
    }
    expect(new Set(set.used.map((f) => f.id)).size).toBe(set.used.length);
  });

  test("provenance is only what the registry records (drug-level notes, references, lastReviewed field)", () => {
    const f = set.used.find((x) => x.path === "mechanism.halfLife")!;
    expect(f.provenance.level).toBe("drug");
    expect(f.provenance.sourceNotes).toEqual(drug.reviewers ?? []);
    expect(f.provenance.lastReviewedField).toBe(drug.lastReviewed);
    const mcq = set.used.find((x) => x.path.startsWith("stahl:"))!;
    expect(mcq.provenance.level).toBe("authored-bank");
  });

  test("no fact is approved: approval needs a recorded review, and none exist", () => {
    expect(REVIEW_RECORDS.length).toBe(0);
    for (const f of set.used) expect(f.review).not.toBe("approved");
  });

  test("a flagged fact is review-required with its reason", () => {
    const flag = REVIEW_FLAGS.find((x) => x.slug === "sertraline")!;
    const f = set.used.find((x) => x.path === flag.path)!;
    expect(f.review).toBe("flagged");
    expect(f.status).toBe("review-required");
    expect(f.reviewReasons.join(" ")).toContain(flag.reason.slice(0, 20));
  });

  test("statements about addiction or withdrawal are review-required even when not explicitly flagged", () => {
    const f = set.used.filter((x) => x.status === "review-required");
    expect(f.length).toBeGreaterThan(0);
    for (const x of f) expect(x.reviewReasons.length).toBeGreaterThan(0);
  });

  test("missing slots are explicit facts with no value; nothing is generated", () => {
    const t = inputsFor("tianeptine");
    const s = collectFacts(t.lenses, { drug: t.drug, patientGuide: t.patientGuide, mcqIds: t.mcqs.map((q) => q.id) });
    const m = s.missing.find((x) => x.path === "patientGuide.urgentHelp.intro")!;
    expect(m.id).toBe("tianeptine#patientGuide.urgentHelp.intro");
    expect(m.status).toBe("missing");
    expect(m.value).toBeNull();
    expect(s.used.some((x) => x.id === m.id)).toBe(false);
  });

  test("a fact is never presented in a mode its category forbids", () => {
    for (const f of set.used) for (const m of f.usedIn) expect(f.usableIn).toContain(m);
    const bad = structuredClone(lenses);
    bad.patient.blocks.push({
      kind: "key-points",
      review: "pending-clinical-review",
      points: [{ text: drug.examLens!.neetPg.highYield[0], source: "examLens.neetPg.highYield[0]" }],
    });
    const codes = validateLensSet(bad, drug, patientGuide).map((i) => i.code);
    expect(codes).toContain("fact-not-allowed-in-mode");
  });

  test("invalid references and altered text are caught", () => {
    const bad = structuredClone(lenses);
    const b = bad.mbbs.blocks.find((x) => x.kind === "contraindications");
    if (!b || b.kind !== "contraindications") throw new Error("no block");
    b.items[0].name = { text: "Edited text", source: b.items[0].name.source };
    b.items[1].name = { text: "x", source: "contraindications[99].name" };
    const codes = validateLensSet(bad, drug, patientGuide).map((i) => i.code);
    expect(codes).toContain("text-differs-from-source");
    expect(codes).toContain("source-missing");
  });
});

describe("shared facts across modes", () => {
  test("MBBS contraindications and Resident prescribing checks reference the same canonical facts", () => {
    const { drug, patientGuide, mcqs, lenses } = inputsFor("sertraline");
    const m = lenses.mbbs.blocks.find((b) => b.kind === "contraindications");
    const r = lenses.resident.blocks.find((b) => b.kind === "prescribing-checks");
    if (!m || m.kind !== "contraindications" || !r || r.kind !== "prescribing-checks") throw new Error("blocks missing");
    expect(r.items.map((i) => i.name.source).sort()).toEqual(m.items.map((i) => i.name.source).sort());
    expect(r.items.map((i) => i.rationale.text).sort()).toEqual(m.items.map((i) => i.rationale.text).sort());
    const s = collectFacts(lenses, { drug, patientGuide, mcqIds: mcqs.map((q) => q.id) });
    const shared = s.used.find((f) => f.path === "contraindications[0].name")!;
    expect([...shared.usedIn].sort()).toEqual(["mbbs", "resident"]);
  });

  test("Resident checks list absolute contraindications first without changing any text", () => {
    const { lenses } = inputsFor("sertraline");
    const r = lenses.resident.blocks.find((b) => b.kind === "prescribing-checks");
    if (!r || r.kind !== "prescribing-checks") throw new Error("no block");
    const firstRelative = r.items.findIndex((i) => i.severity === "relative");
    if (firstRelative >= 0) expect(r.items.slice(firstRelative).every((i) => i.severity === "relative")).toBe(true);
  });
});

describe("cross-mode consistency (heuristic contradictions)", () => {
  const fake = (halfLife: string, text: string) => {
    const { drug, lenses } = inputsFor("sertraline");
    const d = { ...drug, mechanism: { ...drug.mechanism, halfLife } };
    const l = structuredClone(lenses);
    l.neetPg.blocks = [{ kind: "high-yield-recall", review: "pending-clinical-review", items: [{ text, source: "examLens.neetPg.highYield[0]" }] }];
    return findContradictions(l, d, names);
  };

  test("parses hour and day ranges", () => {
    expect(hoursRanges("about 26 hours (range 22–36 hours)")).toEqual([[26, 26], [22, 36]]);
    expect(hoursRanges("1–4 days")).toEqual([[24, 96]]);
  });
  test("flags a mode statement that disagrees with the canonical half-life", () => {
    const c = fake("Approximately 26 hours", "Sertraline half-life is 80 hours.");
    expect(c.length).toBe(1);
    expect(c[0].quantity).toBe("half-life");
  });
  test("accepts agreement, other drugs, metabolites and unrelated washout figures", () => {
    expect(fake("Approximately 26 hours", "Sertraline half-life is 24 hours.")).toEqual([]);
    expect(fake("Approximately 26 hours", "Sertraline vs paroxetine: paroxetine half-life is 21 hours, sertraline 26 hours.")).toEqual([]);
    expect(fake("Approximately 26 hours", "Sertraline metabolite half-life is 62 hours.")).toEqual([]);
    expect(fake("Approximately 26 hours", "With sertraline's short half-life, the washout before an MAOI can be 5-7 days.")).toEqual([]);
  });
});

describe("registry-wide four-mode validation (all medications)", () => {
  const reports = drugs.map((d) => {
    const mcqs = stahlMcqs.filter((q) => q.drugSlug === d.slug);
    return validateDrug(d, patientGuides[d.slug], mcqs.map((q) => q.id), mcqs, names);
  });
  const STRUCTURAL = new Set(["source-missing", "text-differs-from-source", "fact-not-allowed-in-mode", "conflicting-text-for-source", "wrong-mode", "viva-split-lossy", "kind-unaccounted", "kind-both-built-and-unavailable", "unreviewed-state-missing"]);

  test("covers all medications with no structural defects", () => {
    expect(reports.length).toBe(drugs.length);
    expect(reports.flatMap((r) => r.issues.filter((i) => STRUCTURAL.has(i.code)).map((i) => `${r.slug}:${i.code}:${i.detail}`))).toEqual([]);
    for (const r of reports) expect(r.mechanical.invalidReferences).toBe(0);
  });

  test("the safety, indication and monitoring blocks build for every medication (shared canonical facts)", () => {
    for (const r of reports) {
      expect(r.modes.mbbs.built).toEqual(expect.arrayContaining(["indications", "adverse-effects", "contraindications"]));
      expect(r.modes.resident.built).toEqual(expect.arrayContaining(["prescribing-checks", "monitoring-plan"]));
      expect(r.quality.sharedFactsAcrossModes).toBeGreaterThan(0);
    }
  });

  test("mechanical completeness equals having a Patient Guide plus resident depth; the rest expose their gaps", () => {
    const ok = reports.filter((r) => r.mechanical.ok).map((r) => r.slug);
    for (const slug of ok) expect(patientGuides[slug]).toBeDefined();
    expect(ok.length).toBeGreaterThanOrEqual(12);
    for (const r of reports.filter((x) => !x.mechanical.ok)) {
      expect(r.mechanical.unavailableBlocks + r.mechanical.modesWithoutDistinctiveInteraction.length).toBeGreaterThan(0);
      expect(r.mechanical.missingFacts).toBeGreaterThan(0);
    }
  });

  test("every medication without a Patient Guide has no distinctive Patient interaction (reported, not hidden)", () => {
    for (const r of reports.filter((x) => !patientGuides[x.slug])) expect(r.mechanical.modesWithoutDistinctiveInteraction).toContain("patient");
  });

  test("sertraline's four modes each offer a distinctive interaction", () => {
    const r = reports.find((x) => x.slug === "sertraline")!;
    expect(r.modes.patient.distinctive).toEqual(["checklist"]);
    expect([...r.modes.mbbs.distinctive].sort()).toEqual(["reveal", "stepper"]);
    expect(r.modes.neetPg.distinctive).toEqual(["commit-answer"]);
    expect([...r.modes.resident.distinctive].sort()).toEqual(["audit-checklist", "branching", "staged-reveal"]);
  });

  test("clinical layer: nothing approved anywhere; review-required facts are counted separately", () => {
    expect(reports.reduce((n, r) => n + r.clinical.factsApproved, 0)).toBe(0);
    expect(reports.reduce((n, r) => n + r.clinical.factsReviewRequired, 0)).toBeGreaterThan(0);
  });

  test("the contradiction heuristic raises no hits on the current registry (any hit needs a human look)", () => {
    expect(reports.flatMap((r) => r.quality.possibleContradictions.map((c) => `${r.slug}:${c.source}`))).toEqual([]);
  });
});
