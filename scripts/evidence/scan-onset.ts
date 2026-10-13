/**
 * Registry-wide scan: does a medicine's US label say anything explicit about when a benefit or response is
 * seen? Finds sentences only. It writes NO patient wording and NO claim: a person (or a reviewed authoring
 * step) must read the sentence in context, check applicability (dose, formulation, population) and then
 * author a claim in src/lib/kyp/evidence/claims.ts.
 *
 *   bun scripts/evidence/scan-onset.ts            # every medication with a discovered label
 *   bun scripts/evidence/scan-onset.ts slug ...   # only these
 *
 * Label choice is a deterministic rule, not a judgement: the newest candidate not published by a repackager.
 * The chosen label is recorded so a reader can see exactly what was scanned.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import type { DiscoveryRecord } from "@/lib/kyp/evidence/types";
import { sections, textOf } from "./spl";

const DISC = "src/lib/kyp/evidence/data/discovery.json";
const OUT = "src/lib/kyp/evidence/data/onset-scan.json";
import { REPACKAGERS } from "./repackagers";
const SECTIONS: Record<string, string> = { "34067-9": "INDICATIONS AND USAGE", "34068-7": "DOSAGE AND ADMINISTRATION", "34090-1": "CLINICAL PHARMACOLOGY", "42231-1": "MEDICATION GUIDE", "34076-0": "INFORMATION FOR PATIENTS", "43685-7": "WARNINGS AND PRECAUTIONS" };
/**
 * Screening filter for sentences that may say when an effect is seen. Deliberately conservative: it needs an
 * effect word and a time word, and drops dose-titration and toxicity sentences. It misses things and can
 * still match irrelevant text, so every hit is a candidate for a person to read in context, never a claim.
 */
const EFFECT = /\b(onset|lag period|therapeutic (effect|response)|clinical (effect|response|benefit)|antidepressant (effect|response|activity)|response|benefit|improvement|relief|efficacy|full effect)\b/i;
const TIME = /\b(weeks?|days?|hours?|months?|minutes?)\b/i;
const NOT_ONSET = /\b(dose|dosage|dosing|increase[ds]?|titrat\w*|mg|mcg|toxicity|overdos\w*|withdrawal|discontinu\w*|half-life|steady[- ]state|plasma|concentration|clearance|pregnan\w*|trimester|neonat\w*)\b/i;
const looksLikeOnset = (sent: string) => EFFECT.test(sent) && TIME.test(sent) && !NOT_ONSET.test(sent);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const only = process.argv.slice(2);
const disc = JSON.parse(readFileSync(DISC, "utf8")) as DiscoveryRecord[];
const prev: Record<string, unknown>[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const bySlug = new Map(prev.map((r) => [r.slug as string, r]));
const pubTime = (d: string) => new Date(d).getTime() || 0;

for (const r of disc) {
  if (only.length && !only.includes(r.slug)) continue;
  if (!r.candidates.length) {
    bySlug.set(r.slug, { slug: r.slug, status: "no-us-label-found", accessedAt: r.accessedAt, matches: [] });
    continue;
  }
  const ordered = [...r.candidates].sort((a, b) => pubTime(b.publishedDate) - pubTime(a.publishedDate));
  const pick = ordered.find((c) => !REPACKAGERS.test(c.title)) ?? ordered[0];
  const accessedAt = new Date().toISOString().slice(0, 10);
  try {
    const res = await fetch(`https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${pick.setid}.xml`, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const matches: { loinc: string; section: string; sentence: string }[] = [];
    const seen = new Set<string>();
    for (const s of sections(xml)) {
      if (!SECTIONS[s.loinc] || seen.has(s.loinc)) continue;
      seen.add(s.loinc);
      const t = textOf(s.body).replace(/\s*\n\s*/g, " ");
      for (const sent of t.split(/(?<=[.!?])\s+/)) if (sent.length < 360 && looksLikeOnset(sent)) matches.push({ loinc: s.loinc, section: SECTIONS[s.loinc], sentence: sent });
    }
    bySlug.set(r.slug, { slug: r.slug, status: "scanned", labelTitle: pick.title, setid: pick.setid, publishedDate: pick.publishedDate, accessedAt, matches: matches.slice(0, 8) });
    console.log(r.slug.padEnd(24), String(matches.length).padStart(3), pick.title.slice(0, 70));
  } catch (e) {
    bySlug.set(r.slug, { slug: r.slug, status: "error", accessedAt, error: String(e), matches: [] });
    console.log(r.slug.padEnd(24), "ERROR", String(e));
  }
  await sleep(400);
}
writeFileSync(OUT, JSON.stringify(disc.map((d) => bySlug.get(d.slug)).filter(Boolean), null, 1) + "\n");
console.log("wrote", OUT);
