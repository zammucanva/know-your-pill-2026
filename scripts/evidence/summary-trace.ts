/**
 * Traces every "In short" sentence to the exact source text it rests on, so a person can check meaning.
 * Writes reports/medication-audit/four-mode/summary-trace.csv and prints, per sentence id, the distinct
 * source wordings that currently trigger it. It proves nothing about meaning by itself: it makes the
 * check possible and flags wording that a summary could flatten (numbers, conditions, qualifiers).
 *
 * Run: bun scripts/evidence/summary-trace.ts [--print]
 */
import { writeFileSync } from "node:fs";
import { CLAIM_RECORDS } from "../../src/lib/kyp/evidence";
import { PLAIN_SENTENCES, plainSummaryFor } from "../../src/lib/kyp/evidence/plain-summaries";

const csv = (v: string) => `"${v.replace(/"/g, '""')}"`;
const sentencesOf = (p: string) => p.replace(/\s+/g, " ").split(/(?<=[.!?:])\s+/);

const rows: string[][] = [["claimId", "sentenceId", "summarySentence", "matchedSourceText", "flags"]];
const variants = new Map<string, Map<string, number>>();
for (const c of CLAIM_RECORDS) {
  const s = plainSummaryFor(c);
  if (!s) continue;
  const parts = sentencesOf(c.passage);
  for (const id of s.ids) {
    const bank = PLAIN_SENTENCES.find((x) => x.id === id)!;
    const hits = new Set<string>();
    for (const re of bank.support) for (const p of parts) if (re.test(p)) hits.add(p);
    const matched = [...hits].join(" | ");
    const flags: string[] = [];
    if (/\d/.test(matched)) flags.push("source-has-number");
    if (/\b(unless|except|only|until|but|however|if)\b/i.test(matched)) flags.push("source-has-condition");
    rows.push([c.id, id, bank.text, matched, flags.join(" ")]);
    const m = variants.get(id) ?? new Map<string, number>();
    m.set(matched, (m.get(matched) ?? 0) + 1);
    variants.set(id, m);
  }
}
writeFileSync("reports/medication-audit/four-mode/summary-trace.csv", rows.map((r) => r.map(csv).join(",")).join("\n") + "\n");
console.log(`${rows.length - 1} sentence uses`);
if (process.argv.includes("--print"))
  for (const [id, m] of variants) {
    console.log(`\n## ${id} (${[...m.values()].reduce((a, b) => a + b, 0)} uses, ${m.size} wordings)`);
    for (const [t, n] of [...m].sort((a, b) => b[1] - a[1]).slice(0, 12)) console.log(`  [${n}] ${t.slice(0, 300)}`);
  }
