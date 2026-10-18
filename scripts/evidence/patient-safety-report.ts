/**
 * Writes reports/medication-audit/patient-content-safety-report.md.
 *   bun scripts/evidence/patient-safety-report.ts
 */
import { writeFileSync } from "fs";
import { patientSafetyReport } from "@/lib/kyp/evidence/patient-safety-report";

writeFileSync("reports/medication-audit/patient-content-safety-report.md", patientSafetyReport());
console.log("wrote reports/medication-audit/patient-content-safety-report.md");
