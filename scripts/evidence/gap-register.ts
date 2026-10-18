/**
 * Writes the medication evidence gap register from the records the pages render.
 *
 *   bun scripts/evidence/gap-register.ts
 *
 * Output: reports/medication-audit/medication-evidence-gap-register.{md,csv}
 */
import { writeFileSync } from "fs";
import { gapRegisterCsv, gapRegisterMarkdown, gapRows, gapTotals } from "@/lib/kyp/evidence/gap-register";

const OUT = "reports/medication-audit";
const rows = gapRows();
writeFileSync(`${OUT}/medication-evidence-gap-register.md`, gapRegisterMarkdown(rows));
writeFileSync(`${OUT}/medication-evidence-gap-register.csv`, gapRegisterCsv(rows));
console.log(JSON.stringify(gapTotals(rows), null, 1));
