/**
 * Writes reports/medication-audit/clinical-review-readiness.md.
 *   bun scripts/evidence/review-readiness.ts
 */
import { writeFileSync } from "fs";
import { readinessReport } from "@/lib/kyp/evidence/review-readiness";

writeFileSync("reports/medication-audit/clinical-review-readiness.md", readinessReport());
console.log("wrote reports/medication-audit/clinical-review-readiness.md");
