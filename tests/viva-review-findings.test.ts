import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import { classifyViva } from "@/lib/kyp/modes/build";

/** Read-only check of the protected registry: it never changes a medication file. */
const FINDINGS = readFileSync("reports/medication-audit/four-mode/viva-review-findings.md", "utf8").replace(/\r\n/g, "\n");
const vivaOf = (d: unknown): unknown => (d as { examLens?: { mbbs?: { viva?: unknown } } }).examLens?.mbbs?.viva;

describe("viva items the lens cannot show are documented, not hidden", () => {
  const found: { slug: string; index: number; reason: string; text: string }[] = [];
  for (const d of drugs) {
    const raw = vivaOf(d);
    if (!Array.isArray(raw)) continue;
    raw.forEach((t, index) => {
      if (typeof t !== "string") return;
      const c = classifyViva(t);
      if (c.type === "needs-review") found.push({ slug: d.slug, index, reason: c.reason, text: t });
    });
  }
  test("exactly the documented items need review; a new or a fixed one must update the findings file", () => {
    expect(found.map((f) => `${f.slug}[${f.index}] ${f.reason}`).sort()).toEqual(["clomipramine[4] unbalanced-parentheses", "tacrine[2] question-without-parsable-answer"]);
  });
  test("each documented item quotes the registry text as it is now", () => {
    for (const f of found) {
      expect(FINDINGS).toContain(`examLens.mbbs.viva[${f.index}]`);
      expect(FINDINGS).toContain(f.text.slice(0, 60).replace(/\s+/g, " "));
    }
  });
  test("the findings file says nothing is approved and no protected data was changed", () => {
    expect(FINDINGS).toMatch(/Nothing here is approved/);
    expect(FINDINGS).toMatch(/no protected medication data was changed/);
    expect(FINDINGS).not.toMatch(/\b(approved by|reviewed by|signed off)\b/i);
  });
  test("every other viva item with a question mark parses (no silent loss)", () => {
    for (const d of drugs) {
      const raw = vivaOf(d);
      if (!Array.isArray(raw)) continue;
      for (const t of raw) if (typeof t === "string" && t.includes("?")) expect(["qa", "needs-review"]).toContain(classifyViva(t).type);
    }
  });
});
