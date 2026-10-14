/**
 * Write clinical review packets (NOT review records) for the given medicines.
 *
 *   bun scripts/evidence/review-packet.ts sertraline fluoxetine
 *
 * Output: reports/medication-audit/review-packets/<slug>.md. Every decision field is blank.
 */
import { mkdirSync, writeFileSync } from "fs";
import { reviewPacket } from "@/lib/kyp/evidence/review-packet";

const OUT = "reports/medication-audit/review-packets";
mkdirSync(OUT, { recursive: true });
for (const slug of process.argv.slice(2)) {
  writeFileSync(`${OUT}/${slug}.md`, reviewPacket(slug) + "\n");
  console.log("wrote", `${OUT}/${slug}.md`);
}
