import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { PACKETS, REVIEWER_REQUIREMENTS, packetReadiness, readinessReport } from "@/lib/kyp/evidence/review-readiness";

describe("the clinical review readiness report", () => {
  const rows = packetReadiness();
  test("all four priority packets are listed, none has a record, all are pending", () => {
    expect(PACKETS).toEqual(["sertraline", "fluoxetine", "in-short-bank", "viva-findings"]);
    for (const r of rows) {
      expect(r.status).toBe("pending");
      expect(r.items).toBeGreaterThan(0);
      expect(r.unresolved.length).toBeGreaterThan(0);
    }
  });
  test("each template on disk carries the packet's current digest", () => {
    for (const r of rows) {
      const t = JSON.parse(readFileSync(`reports/medication-audit/review-packets/${r.packet}.record-template.json`, "utf8")) as { packetDigest: string; decisions: unknown[] };
      expect(t.packetDigest).toBe(r.digest);
      expect(t.decisions).toHaveLength(r.items);
    }
  });
  test("it states reviewer requirements and never claims approval", () => {
    const md = readinessReport();
    expect(md).toContain("No packet has a review record, no claim is reviewed, and nothing here is clinical approval.");
    expect(md).toContain("Evidence claims marked reviewed: 0 of");
    expect(REVIEWER_REQUIREMENTS.join(" ")).toMatch(/registration/);
    expect(REVIEWER_REQUIREMENTS.join(" ")).toMatch(/rationale for every decision, including acceptance/);
    expect(md).not.toMatch(/approved by|reviewed by|signed off/i);
  });
  test("the saved report equals the generator's output", () => {
    expect(readFileSync("reports/medication-audit/clinical-review-readiness.md", "utf8").replace(/\r\n/g, "\n")).toBe(readinessReport());
  });
});
