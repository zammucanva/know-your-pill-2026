/**
 * Write clinical review packets (NOT review records) for the given medicines.
 *
 *   bun scripts/evidence/review-packet.ts sertraline fluoxetine
 *   bun scripts/evidence/review-packet.ts --in-short      (the plain-sentence bank)
 *
 * Output: reports/medication-audit/review-packets/<slug>.md. Every decision field is blank.
 */
import { mkdirSync, writeFileSync } from "fs";
import { inShortReviewPacket, reviewPacket } from "@/lib/kyp/evidence/review-packet";

const OUT = "reports/medication-audit/review-packets";
mkdirSync(OUT, { recursive: true });
if (process.argv.includes("--viva")) {
  writeFileSync(`${OUT}/viva-findings.md`, reviewPacket("viva-findings") + "\n");
  console.log("wrote", `${OUT}/viva-findings.md`);
}
if (process.argv.includes("--in-short")) {
  writeFileSync(`${OUT}/in-short-bank.md`, inShortReviewPacket() + "\n");
  console.log("wrote", `${OUT}/in-short-bank.md`);
}
for (const slug of process.argv.slice(2).filter((a) => !a.startsWith("--"))) {
  writeFileSync(`${OUT}/${slug}.md`, reviewPacket(slug) + "\n");
  console.log("wrote", `${OUT}/${slug}.md`);
}
