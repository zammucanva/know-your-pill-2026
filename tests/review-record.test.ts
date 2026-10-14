import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { IN_SHORT_PACKET, blankRecordTemplate, reviewItemIds, reviewItems, reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { validateReviewRecord, type ReviewRecord } from "@/lib/kyp/evidence/review-record";

const NOW = new Date("2026-10-14");
const filled = (slug: string): ReviewRecord => ({
  packet: slug,
  reviewer: { name: "Dr Test Fixture", qualification: "MD Psychiatry (fixture)", registrationBody: "Fixture council", registrationNumber: "FIX-0001", affiliation: "Fixture hospital", conflictsOfInterest: "none" },
  reviewedAt: "2026-10-13",
  decisions: reviewItems(slug).map(({ id, hash }) => ({ id, contentHash: hash, decision: "accept" })),
});

describe("a review record is checked for completeness; an empty packet or template is never a review", () => {
  test("the blank template for every packet is invalid, and says why", () => {
    for (const slug of ["sertraline", "fluoxetine", "moclobemide", IN_SHORT_PACKET]) {
      const t = blankRecordTemplate(slug) as unknown as ReviewRecord;
      const problems = validateReviewRecord(t, reviewItems(slug), NOW).join(" | ");
      expect(problems).toMatch(/reviewer name is missing/);
      expect(problems).toMatch(/registration number is missing/);
      expect(problems).toMatch(/reviewedAt must be a real date/);
      expect(problems).toMatch(/must be one of accept, amend, reject, request-evidence/);
    }
  });
  test("a complete fixture record passes the check, and that is all it proves", () => {
    expect(validateReviewRecord(filled("sertraline"), reviewItems("sertraline"), NOW)).toEqual([]);
  });
  test("every identity field, a real date, and a decision per item are required", () => {
    const base = () => filled("moclobemide");
    for (const k of ["name", "qualification", "registrationBody", "registrationNumber", "affiliation", "conflictsOfInterest"] as const) {
      const r = base();
      r.reviewer[k] = "____";
      expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).length).toBeGreaterThan(0);
    }
    const future = base();
    future.reviewedAt = "2027-01-01";
    expect(validateReviewRecord(future, reviewItems("moclobemide"), NOW).join()).toMatch(/future/);
    const short = base();
    short.decisions.pop();
    expect(validateReviewRecord(short, reviewItems("moclobemide"), NOW).join()).toMatch(/no decision/);
    const dup = base();
    dup.decisions.push({ ...dup.decisions[0] });
    expect(validateReviewRecord(dup, reviewItems("moclobemide"), NOW).join()).toMatch(/decided twice/);
    const alien = base();
    alien.decisions.push({ id: "not-a-claim", contentHash: "x", decision: "accept" });
    expect(validateReviewRecord(alien, reviewItems("moclobemide"), NOW).join()).toMatch(/no such item/);
  });
  test("amend, reject and request-evidence need their words; software cannot be the reviewer", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { id: r.decisions[0].id, decision: "amend" };
    r.decisions[1] = { id: r.decisions[1].id, decision: "reject" };
    r.decisions[2] = { id: r.decisions[2].id, decision: "request-evidence", notes: "Needs the Indian insert" };
    const p = validateReviewRecord(r, reviewItems("moclobemide"), NOW).join(" | ");
    expect(p).toMatch(/amend needs the amended wording/);
    expect(p).toMatch(/reject needs notes/);
    expect(p).not.toMatch(/request-evidence needs notes/);
    const bot = filled("moclobemide");
    bot.reviewer.name = "Claude";
    expect(validateReviewRecord(bot, reviewItems("moclobemide"), NOW).join()).toMatch(/not software/);
  });
  test("packet items match the packet text, so a decision can be traced to what the reviewer saw", () => {
    const p = reviewPacket("sertraline");
    for (const id of reviewItemIds("sertraline")) expect(p).toContain(id.startsWith("guide:") ? `### ${id}` : `### ${id} [`);
  });
  test("no review record is stored, no statement is marked reviewed, and no template is saved as a record", () => {
    expect(CLAIM_RECORDS.every((c) => c.review === "not-reviewed")).toBe(true);
    const dir = "reports/medication-audit/review-packets";
    if (existsSync(dir)) for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) expect(f).toMatch(/\.record-template\.json$/);
    for (const f of readdirSync(dir).filter((x) => x.endsWith(".record-template.json"))) {
      const t = JSON.parse(readFileSync(`${dir}/${f}`, "utf8")) as ReviewRecord;
      expect(validateReviewRecord(t, reviewItems(t.packet), NOW).length).toBeGreaterThan(0);
    }
  });
});

describe("a decision cannot be moved to other text, another medicine, another source or a later edit", () => {
  test("a record whose decisions come from another medicine's packet is rejected", () => {
    const wrong = filled("sertraline");
    wrong.decisions = filled("fluoxetine").decisions;
    const p = validateReviewRecord(wrong, reviewItems("sertraline"), NOW).join(" | ");
    expect(p).toMatch(/no such item in this packet/);
    expect(p).toMatch(/no decision/);
  });
  test("the same item id with different text, source or applicability no longer matches (hash mismatch)", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { ...r.decisions[0], contentHash: "00000000000000" };
    expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).join()).toMatch(/hash mismatch/);
    const missing = filled("moclobemide");
    delete missing.decisions[0].contentHash;
    expect(validateReviewRecord(missing, reviewItems("moclobemide"), NOW).join()).toMatch(/hash mismatch/);
  });
  test("item hashes differ between items, and between the same wording in two medicines", () => {
    const hashes = reviewItems("moclobemide").map((i) => i.hash);
    expect(new Set(hashes).size).toBe(hashes.length);
    const a = reviewItems("sertraline").map((i) => i.hash);
    const b = reviewItems("fluoxetine").map((i) => i.hash);
    expect(a.filter((h) => b.includes(h))).toEqual([]);
  });
  test("in-app fact approval is bound to one medicine, one path and the exact value reviewed (no wildcard)", async () => {
    const { REVIEW_RECORDS, collectFacts, buildModeLenses } = await import("@/lib/kyp/modes");
    const { contentHash } = await import("@/lib/kyp/content-hash");
    const { drugs } = await import("@/lib/kyp/data");
    const { getPatientGuide } = await import("@/lib/kyp/patient");
    const { stahlMcqs } = await import("@/lib/kyp/stahl-mcqs");
    const get = (slug: string) => {
      const drug = drugs.find((d) => d.slug === slug)!;
      const patientGuide = getPatientGuide(slug);
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === slug);
      return collectFacts(buildModeLenses({ drug, patientGuide, mcqs }), { drug, patientGuide, mcqIds: mcqs.map((q) => q.id) }).used;
    };
    const target = get("sertraline").find((f) => f.value && f.path.startsWith("patientGuide"))!;
    const add = (rec: object) => (REVIEW_RECORDS as unknown as object[]).push(rec);
    const base = { reviewer: "Fixture", qualification: "fixture", date: "2026-10-14", sources: [] as string[] };
    try {
      add({ ...base, slug: "sertraline", path: "*", valueHash: contentHash(target.value!) });
      expect(get("sertraline").some((f) => f.review === "approved")).toBe(false); // no wildcard
      add({ ...base, slug: "sertraline", path: target.path, valueHash: "00000000000000" });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).not.toBe("approved"); // value changed since review
      add({ ...base, slug: "fluoxetine", path: target.path, valueHash: contentHash(target.value!) });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).not.toBe("approved"); // another medicine's record
      add({ ...base, slug: "sertraline", path: target.path, valueHash: contentHash(target.value!) });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).toBe("approved"); // the exact fact, exact value
      expect(get("sertraline").filter((f) => f.review === "approved")).toHaveLength(1); // and nothing else
    } finally {
      (REVIEW_RECORDS as unknown as object[]).length = 0;
    }
    expect(REVIEW_RECORDS).toHaveLength(0);
  });
});
