/**
 * Check a completed clinical review record for completeness (not correctness).
 *
 *   bun scripts/evidence/review-record-check.ts <record.json>
 *   bun scripts/evidence/review-record-check.ts --template sertraline   (writes <slug>.record-template.json beside the packets)
 *
 * Passing means: a named, qualified, registered person; a real date; a decision on every item; notes where required.
 * It does NOT approve anything and the app does not read the record.
 */
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { blankRecordTemplate, reviewItemIds } from "@/lib/kyp/evidence/review-packet";
import { validateReviewRecord, type ReviewRecord } from "@/lib/kyp/evidence/review-record";

const OUT = "reports/medication-audit/review-packets";
if (process.argv[2] === "--template") {
  mkdirSync(OUT, { recursive: true });
  for (const slug of process.argv.slice(3)) {
    writeFileSync(`${OUT}/${slug}.record-template.json`, JSON.stringify(blankRecordTemplate(slug), null, 2) + "\n");
    console.log("wrote", `${OUT}/${slug}.record-template.json (invalid until a qualified reviewer fills it in)`);
  }
} else {
  const file = process.argv[2];
  if (!file) {
    console.error("usage: bun scripts/evidence/review-record-check.ts <record.json> | --template <slug>...");
    process.exit(2);
  }
  const rec = JSON.parse(readFileSync(file, "utf8")) as ReviewRecord;
  const problems = validateReviewRecord(rec, reviewItemIds(rec.packet));
  if (problems.length) {
    console.error(`NOT a complete review record (${problems.length} problem(s)):\n - ${problems.join("\n - ")}`);
    process.exit(1);
  }
  console.log("Complete as a record. This is not clinical approval and the app does not read it.");
}
