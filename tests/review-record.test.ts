import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { IN_SHORT_PACKET, blankRecordTemplate, reviewItemIds, reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { validateReviewRecord, type ReviewRecord } from "@/lib/kyp/evidence/review-record";

const NOW = new Date("2026-10-14");
const filled = (slug: string): ReviewRecord => ({
  packet: slug,
  reviewer: { name: "Dr Test Fixture", qualification: "MD Psychiatry (fixture)", registrationBody: "Fixture council", registrationNumber: "FIX-0001", affiliation: "Fixture hospital", conflictsOfInterest: "none" },
  reviewedAt: "2026-10-13",
  decisions: reviewItemIds(slug).map((id) => ({ id, decision: "accept" })),
});

describe("a review record is checked for completeness; an empty packet or template is never a review", () => {
  test("the blank template for every packet is invalid, and says why", () => {
    for (const slug of ["sertraline", "fluoxetine", "moclobemide", IN_SHORT_PACKET]) {
      const t = blankRecordTemplate(slug) as unknown as ReviewRecord;
      const problems = validateReviewRecord(t, reviewItemIds(slug), NOW).join(" | ");
      expect(problems).toMatch(/reviewer name is missing/);
      expect(problems).toMatch(/registration number is missing/);
      expect(problems).toMatch(/reviewedAt must be a real date/);
      expect(problems).toMatch(/must be one of accept, amend, reject, request-evidence/);
    }
  });
  test("a complete fixture record passes the check, and that is all it proves", () => {
    expect(validateReviewRecord(filled("sertraline"), reviewItemIds("sertraline"), NOW)).toEqual([]);
  });
  test("every identity field, a real date, and a decision per item are required", () => {
    const base = () => filled("moclobemide");
    for (const k of ["name", "qualification", "registrationBody", "registrationNumber", "affiliation", "conflictsOfInterest"] as const) {
      const r = base();
      r.reviewer[k] = "____";
      expect(validateReviewRecord(r, reviewItemIds("moclobemide"), NOW).length).toBeGreaterThan(0);
    }
    const future = base();
    future.reviewedAt = "2027-01-01";
    expect(validateReviewRecord(future, reviewItemIds("moclobemide"), NOW).join()).toMatch(/future/);
    const short = base();
    short.decisions.pop();
    expect(validateReviewRecord(short, reviewItemIds("moclobemide"), NOW).join()).toMatch(/no decision/);
    const dup = base();
    dup.decisions.push({ ...dup.decisions[0] });
    expect(validateReviewRecord(dup, reviewItemIds("moclobemide"), NOW).join()).toMatch(/decided twice/);
    const alien = base();
    alien.decisions.push({ id: "not-a-claim", decision: "accept" });
    expect(validateReviewRecord(alien, reviewItemIds("moclobemide"), NOW).join()).toMatch(/no such item/);
  });
  test("amend, reject and request-evidence need their words; software cannot be the reviewer", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { id: r.decisions[0].id, decision: "amend" };
    r.decisions[1] = { id: r.decisions[1].id, decision: "reject" };
    r.decisions[2] = { id: r.decisions[2].id, decision: "request-evidence", notes: "Needs the Indian insert" };
    const p = validateReviewRecord(r, reviewItemIds("moclobemide"), NOW).join(" | ");
    expect(p).toMatch(/amend needs the amended wording/);
    expect(p).toMatch(/reject needs notes/);
    expect(p).not.toMatch(/request-evidence needs notes/);
    const bot = filled("moclobemide");
    bot.reviewer.name = "Claude";
    expect(validateReviewRecord(bot, reviewItemIds("moclobemide"), NOW).join()).toMatch(/not software/);
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
      expect(validateReviewRecord(t, reviewItemIds(t.packet), NOW).length).toBeGreaterThan(0);
    }
  });
});
