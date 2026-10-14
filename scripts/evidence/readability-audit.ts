/**
 * Where is Patient wording hard to read, and which of it can be improved without changing its source?
 *
 *   bun scripts/evidence/readability-audit.ts [--print]
 *
 * Writes reports/medication-audit/four-mode/readability-sentences.csv: every sentence of every RESTATED (paraphrase)
 * claim with its length, grade, and the hard words in it (3+ syllable words that are not a drug name). Exact-quote
 * claims are the regulator's own words and are not editable here; they are listed in the summary only. The score is a
 * screening heuristic, not proof of comprehension.
 */
import { writeFileSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { readability } from "@/lib/kyp/evidence/readability";
import { splitList } from "@/lib/kyp/evidence/list-text";

const names = new Set(drugs.flatMap((d) => [d.slug, ...String(d.genericName).toLowerCase().split(/[^a-z]+/), ...(d.brandNames ?? []).flatMap((b) => String(b).toLowerCase().split(/[^a-z]+/))]).filter((w) => w.length >= 4));
const syl = (w: string) => Math.max(1, (w.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g) ?? []).length);
const hardWords = (s: string) => [...new Set((s.match(/[A-Za-z][A-Za-z-]+/g) ?? []).filter((w) => syl(w) >= 3 && !names.has(w.toLowerCase())).map((w) => w.toLowerCase()))];
const csv = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;

export interface SentenceRow { claimId: string; slug: string; category: string; sentence: string; words: number; grade: number; hard: string[] }
export function sentenceRows(): SentenceRow[] {
  const rows: SentenceRow[] = [];
  for (const c of CLAIM_RECORDS) {
    if (c.wordingKind !== "paraphrase") continue;
    const l = splitList(c.patientWording);
    const parts = l ? [l.intro, ...l.items, l.outro].filter(Boolean) : c.patientWording.split(/(?<=[.!?])\s+/);
    for (const s of parts) {
      const t = s.trim();
      if (!t) continue;
      rows.push({ claimId: c.id, slug: c.slug, category: c.category, sentence: t, words: t.split(/\s+/).length, grade: readability(/[.!?]$/.test(t) ? t : t + ".").grade, hard: hardWords(t) });
    }
  }
  return rows;
}
if (import.meta.main) {
  const rows = sentenceRows();
  const hard = rows.filter((r) => r.grade > 12 || r.words > 30);
  writeFileSync("reports/medication-audit/four-mode/readability-sentences.csv", [["claimId", "slug", "category", "words", "grade", "hardWords", "sentence"], ...rows.sort((a, b) => b.grade - a.grade).map((r) => [r.claimId, r.slug, r.category, r.words, r.grade, r.hard.join("; "), r.sentence])].map((r) => r.map(csv).join(",")).join("\n") + "\n");
  const quote = CLAIM_RECORDS.filter((c) => c.wordingKind === "exact-quote").length;
  console.log(JSON.stringify({ restatedClaims: CLAIM_RECORDS.length - quote, exactQuoteClaims: quote, restatedSentences: rows.length, sentencesAboveGrade12OrOver30Words: hard.length }, null, 1));
  if (process.argv.includes("--print")) for (const r of hard.sort((a, b) => b.grade - a.grade).slice(0, 40)) console.log(`${r.grade}\t${r.words}w\t${r.claimId}\t${r.sentence.slice(0, 170)}\t[${r.hard.slice(0, 6).join(", ")}]`);
}
