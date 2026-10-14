import { describe, expect, test } from "bun:test";
import { readFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import { dashboardRows } from "@/lib/kyp/evidence/dashboard";
import { CONTENT_CLASSES, classOf, gapMatrix, gapMatrixCsv, gapMatrixMarkdown } from "@/lib/kyp/evidence/gap-matrix";
import { PART_ORDER } from "@/lib/kyp/evidence/patient-sections";

const lf = (p: string) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
describe("medicine-by-section gap matrix", () => {
  const m = gapMatrix(dashboardRows());
  test("one row per medicine, one class per part, every class counted once", () => {
    expect(m.cells).toHaveLength(drugs.length);
    for (const p of PART_ORDER) expect(CONTENT_CLASSES.reduce((a, c) => a + m.counts[p][c], 0)).toBe(drugs.length);
  });
  test("only the authored Patient Guide medicines are patient-guide, and in every part", () => {
    for (const p of PART_ORDER) expect(m.counts[p]["patient-guide"]).toBe(12);
  });
  test("template and unavailable states are never reported as source-backed", () => {
    expect(classOf("standard-wording")).toBe("generic-or-template");
    expect(classOf("general-direction")).toBe("generic-or-template");
    expect(classOf("registry-wording")).toBe("generic-or-template");
    expect(classOf("unavailable")).toBe("unavailable");
    expect(classOf("safety-alert-only")).toBe("safety-alert-only");
  });
  test("the saved reports are exactly what the code generates now (reproducible)", () => {
    expect(lf("reports/medication-audit/four-mode/patient-section-matrix.csv")).toBe(gapMatrixCsv(m));
    expect(lf("reports/medication-audit/four-mode/patient-section-matrix.md")).toBe(gapMatrixMarkdown(m));
  });
});
