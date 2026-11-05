/**
 * Writes reports/medication-audit/indian-source-acquisition-report.md from the stored Indian records and the import audit log.
 *
 *   bun scripts/evidence/indian-acquisition-report.ts
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import { acquisitionReport } from "@/lib/kyp/evidence/indian-acquisition";

const read = (p: string) => (existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : []);
const md = acquisitionReport({ storedImports: read("src/lib/kyp/evidence/data/indian-docs.json"), logEntries: read("src/lib/kyp/evidence/data/indian-docs.log.json") });
writeFileSync("reports/medication-audit/indian-source-acquisition-report.md", md);
console.log("wrote reports/medication-audit/indian-source-acquisition-report.md");
