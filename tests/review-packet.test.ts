import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { inShortReviewPacket, reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { PLAIN_SENTENCES } from "@/lib/kyp/evidence/plain-summaries";
import { claimsFor } from "@/lib/kyp/evidence";

describe("clinical review packets are preparation, never a review record", () => {
  test("a Patient Guide medicine and a source-backed medicine each get a packet with blank decisions", () => {
    for (const slug of ["sertraline", "fluoxetine", "moclobemide", "propranolol"]) {
      const p = reviewPacket(slug);
      expect(p).toContain("Status: NOT REVIEWED");
      expect(p).toContain("It is not a review record");
      expect(p).toContain("Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____");
      expect(p).toContain("## Reviewer identity");
      expect(p).not.toMatch(/\b(approved by|reviewed by|signed off|clinically approved)\b/i);
      expect(p).not.toMatch(/^(Name|Professional qualification[^:]*|Registration body and number[^:]*|Affiliation|Date of review): (?!_)/m);
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
    expect(reviewPacket("blonanserin")).toContain("nothing to review yet");
  });
});

describe("the 'In short' sentence bank has a review packet that is not a review record", () => {
  test("every sentence is listed with a blank decision, and no approval is claimed", () => {
    const p = inShortReviewPacket();
    expect(p).toContain("Status: NOT REVIEWED");
    for (const s of PLAIN_SENTENCES) expect(p).toContain(`## ${s.id} (`);
    expect(p.match(/Decision \(accept \/ amend \/ reject \/ request-evidence \/ unresolved\): ____/g)?.length).toBe(PLAIN_SENTENCES.length);
    expect(p).toContain("## Reviewer identity");
    expect(p).not.toMatch(/\b(approved by|reviewed by|signed off)\b/i);
  });
});

describe("each statement block gives a reviewer the source facts they need", () => {
  test("source kind, jurisdiction, date, form and address appear in every statement block of a source-backed medicine", () => {
    const p = reviewPacket("moclobemide");
    const blocks = p.split(/^### /m).slice(1).filter((b) => /^moclobemide:/.test(b));
    expect(blocks.length).toBe(claimsFor("moclobemide").length);
    for (const b of blocks) {
      expect(b).toMatch(/^Source: /m);
      expect(b).toMatch(/- Kind: /);
      expect(b).toMatch(/- Jurisdiction: [A-Z]+; type: /);
      expect(b).toMatch(/- Source date: .+; accessed \d{4}-\d{2}-\d{2}; identifier /);
      expect(b).toMatch(/- Form the source describes: /);
      expect(b).toMatch(/- Address: https:\/\//);
      expect(b).toMatch(/Exact passage: /);
      expect(b).toMatch(/Applies to: /);
      expect(b).toMatch(/Limits: /);
    }
  });
});

describe("saved packets are exactly what the code generates", () => {
  test("viva and 'In short' packets on disk match the generator (so a stale packet cannot be reviewed by mistake)", () => {
    expect(readFileSync("reports/medication-audit/review-packets/viva-findings.md", "utf8").replace(/\r\n/g, "\n")).toBe(reviewPacket("viva-findings") + "\n");
    expect(readFileSync("reports/medication-audit/review-packets/in-short-bank.md", "utf8").replace(/\r\n/g, "\n")).toBe(inShortReviewPacket() + "\n");
  });
});
