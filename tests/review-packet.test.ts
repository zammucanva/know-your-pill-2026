import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { claimsFor } from "@/lib/kyp/evidence";

describe("clinical review packets are preparation, never a review record", () => {
  test("a Patient Guide medicine and a source-backed medicine each get a packet with blank decisions", () => {
    for (const slug of ["sertraline", "fluoxetine", "moclobemide", "propranolol"]) {
      const p = reviewPacket(slug);
      expect(p).toContain("Status: NOT REVIEWED");
      expect(p).toContain("It is not a review record");
      expect(p).toContain("Decision (approve / edit / reject): ____   Reviewer: ____   Date: ____");
      expect(p).not.toMatch(/\b(approved by|reviewed by|signed off|clinically approved)\b/i);
      expect(p).not.toMatch(/Reviewer: (?!_)/);
    }
    expect(reviewPacket("sertraline")).toContain("Patient Guide (authored for this app)");
    const m = reviewPacket("moclobemide");
    for (const c of claimsFor("moclobemide")) expect(m).toContain(`### ${c.id} [${c.category}]`);
    expect(m).toContain("Indian product information:** not checked");
  });
  test("the saved packets for the two priority medicines match what the code generates now", () => {
    for (const slug of ["sertraline", "fluoxetine"]) expect(readFileSync(`reports/medication-audit/review-packets/${slug}.md`, "utf8")).toBe(reviewPacket(slug) + "\n");
  });
  test("a medicine with nothing to review says so", () => {
    expect(reviewPacket("tianeptine")).toContain("nothing to review yet");
  });
});
