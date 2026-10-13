/**
 * Source discovery against DailyMed (US FDA labelling): a supplementary, non-Indian source.
 *
 *   bun scripts/evidence/discover.ts            # all 145 medications
 *   bun scripts/evidence/discover.ts slug ...   # only these
 *
 * Writes src/lib/kyp/evidence/data/discovery.json. It only LISTS candidate labels. It does not choose a
 * label, extract a claim or verify anything. Indian sources (CDSCO, IPC/PvPI) have no machine-readable
 * per-medicine index reachable by script, so they are recorded as unresolved elsewhere, never guessed.
 *
 * Polite by design: sequential requests, a pause between them, one retry, honest "error" records.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { drugs } from "@/lib/kyp/data";
import type { DiscoveryRecord } from "@/lib/kyp/evidence/types";
import { REPACKAGERS } from "./repackagers";

const OUT = "src/lib/kyp/evidence/data/discovery.json";
const API = "https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json";

/**
 * Registry names that differ from the names labels use. These are naming-convention equivalents only
 * (same ingredient), recorded in `queryUsed` so a reader can see exactly what was searched.
 */
const QUERY_NAME: Record<string, string> = {
  "triiodothyronine": "liothyronine",
  "dothiepin": "dosulepin",
  "valproate": "valproic acid",
  "loflazepate": "ethyl loflazepate",
  "dexamphetamine": "dextroamphetamine",
  "sodium-oxybate": "sodium oxybate",
  "l-methylfolate": "levomefolate",
  "naltrexone-bupropion": "naltrexone and bupropion",
  "phentermine-topiramate": "phentermine and topiramate",
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const only = process.argv.slice(2);
const existing: DiscoveryRecord[] = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : [];
const bySlug = new Map(existing.map((r) => [r.slug, r]));

type Row = { title: string; setid: string; published_date: string; spl_version: number };
async function page(name: string, n: number): Promise<Row[]> {
  for (let attempt = 0; attempt < 2; attempt++) {
    const res = await fetch(`${API}?drug_name=${encodeURIComponent(name)}&pagesize=100&page=${n}`, { headers: { "user-agent": "KYP-evidence-script/1.0 (educational, local)" } });
    if (res.ok) return ((await res.json()) as { data?: Row[] }).data ?? [];
    await sleep(1500);
  }
  throw new Error("DailyMed request failed twice");
}
/** Up to 3 pages (300 labels) per name: enough to reach manufacturer labels behind many repackager ones. */
async function query(name: string): Promise<{ data: Row[] }> {
  const all: Row[] = [];
  for (let n = 1; n <= 3; n++) {
    const rows = await page(name, n);
    all.push(...rows);
    if (rows.length < 100) break;
    await sleep(300);
  }
  return { data: all };
}

for (const d of drugs) {
  if (only.length && !only.includes(d.slug)) continue;
  const base = d.genericName.toLowerCase().replace(/\s*\(.*?\)\s*/g, " ").trim();
  const name = QUERY_NAME[d.slug] ?? base;
  const accessedAt = new Date().toISOString().slice(0, 10);
  let rec: DiscoveryRecord;
  try {
    const { data } = await query(name);
    const token = name.split(/\s+/)[0];
    // Titles that name the ingredient before the labeler bracket. Multi-ingredient products (for example
    // homeopathic mixtures that merely contain the name) are excluded; the count is recorded.
    const pre = (x: { title: string }) => x.title.split(" [")[0].toLowerCase();
    const named = data.filter((x) => pre(x).includes(token));
    const hits = named.filter((x) => (pre(x).match(/,/g) ?? []).length < 4);
    // Keep every non-repackager label plus a few repackager ones (so the listing stays readable).
    const manufacturers = hits.filter((x) => !REPACKAGERS.test(x.title));
    const kept = [...manufacturers.slice(0, 40), ...hits.filter((x) => REPACKAGERS.test(x.title)).slice(0, 3)];
    rec = {
      slug: d.slug,
      queryUsed: name,
      status: hits.length ? "candidates-found" : "none-found",
      candidates: kept.map((x) => ({ title: x.title, setid: x.setid, publishedDate: x.published_date, version: x.spl_version })),
      totalFound: hits.length,
      accessedAt,
      note: hits.length ? undefined : "No DailyMed label with this ingredient name was returned. This is not evidence that the medicine is unsafe or unapproved elsewhere (for example in India).",
    };
  } catch (e) {
    rec = { slug: d.slug, queryUsed: name, status: "error", candidates: [], totalFound: 0, accessedAt, note: String(e) };
  }
  bySlug.set(d.slug, rec);
  console.log(d.slug.padEnd(24), rec.status.padEnd(18), rec.totalFound);
  await sleep(300);
}

const out = drugs.map((d) => bySlug.get(d.slug)).filter(Boolean);
writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
console.log(`\nwrote ${OUT}: ${out.length} records`);
