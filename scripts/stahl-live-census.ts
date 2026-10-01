/**
 * Stahl integration — LIVE production census.
 * Runs the same verification as stahl-route-census.ts but against the
 * deployed GitHub Pages site. Writes reports/live-medicine-census.json
 * and prints the release-gate summary.
 *
 * Usage: LIVE_BASE=https://zammucanva.github.io/know-your-pill-2026 bun scripts/stahl-live-census.ts
 */
import { mkdirSync, writeFileSync } from "fs";
import { drugs } from "../src/lib/kyp/data/drugs/index";

const BASE = process.env.LIVE_BASE ?? "https://zammucanva.github.io/know-your-pill-2026";
let failures = 0;
const fail = (m: string) => { failures++; console.error(`  FAIL: ${m}`); };
const ok = (m: string) => console.log(`  OK:   ${m}`);

async function get(path: string): Promise<{ status: number; text: string }> {
  const res = await fetch(`${BASE}${path}`, { redirect: "follow", signal: AbortSignal.timeout(20000) });
  const text = await res.text();
  return { status: res.status, text };
}

async function main() {
  console.log(`LIVE CENSUS against ${BASE}`);

  /* 1 ── all 145 drug routes */
  let http200 = 0, markers = 0;
  const badRoutes: string[] = [];
  for (const d of drugs) {
    const r = await get(`/drugs/${d.slug}/`);
    const marker =
      r.status === 200 &&
      r.text.includes(d.genericName.split(" (")[0]) &&
      r.text.includes('id="prescriber-guide"') &&
      r.text.includes('id="clinical-uses"') &&
      r.text.includes("Clinical Pearls") &&
      r.text.length > 300_000;
    if (r.status === 200) http200++;
    if (marker) markers++;
    if (!marker) badRoutes.push(`${d.slug}:${r.status}${marker ? "" : "/no-markers"}`);
  }
  ok(`drug routes: ${http200}/145 HTTP 200 · ${markers}/145 full-monograph markers`);
  if (http200 !== 145 || markers !== 145) fail(`routes: ${badRoutes.slice(0, 8)}`);

  /* 2 ── the 5 mandatory spot checks (explicit) */
  const mandatory = ["sertraline", "clozapine", "tacrine", "methylphenidate", "lorazepam"];
  for (const slug of mandatory) {
    const d = drugs.find((x) => x.slug === slug)!;
    const r = await get(`/drugs/${slug}/`);
    const good = r.status === 200 && r.text.includes(d.genericName.split(" (")[0]) && r.text.includes('id="prescriber-guide"');
    ok(`${slug} (${d.drugClassLabel}): ${r.status}${good ? " + full monograph" : " — MISSING MONOGRAPH"}`);
    if (!good) fail(`${slug} spot check failed`);
  }

  /* 3 ── medicine page quantitative census */
  const medicine = await get("/medicine/");
  const medHtml = medicine.text;
  const countMatch = medHtml.match(/(\d+)\s*(?:psychiatric\s*)?medicines/i);
  const displayedCount = countMatch ? Number(countMatch[1]) : null;
  const drugLinks = [...medHtml.matchAll(new RegExp('href="(?:/know-your-pill-2026)?/drugs/([a-z0-9-]+)/?"', "g"))].map((m) => m[1]);
  const uniqueLinks = [...new Set(drugLinks)];
  const registrySlugs = new Set(drugs.map((d) => d.slug));
  const unknown = uniqueLinks.filter((s) => !registrySlugs.has(s));
  const missing = [...registrySlugs].filter((s) => !uniqueLinks.includes(s));
  const h2Groups = [...medHtml.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map((m) => m[1]);
  const howTo = h2Groups.indexOf("Reading a medicine guide");
  const classGroups = howTo === -1 ? h2Groups.length : h2Groups.length - 1;
  const classSection = medHtml.slice(0, medHtml.indexOf("Reading a medicine guide") === -1 ? undefined : medHtml.indexOf("Reading a medicine guide"));
  const grouped = [...classSection.matchAll(new RegExp('href="(?:/know-your-pill-2026)?/drugs/([a-z0-9-]+)/?"', "g"))].map((m) => m[1]);

  ok(`medicine: status ${medicine.status} · displayed count = ${displayedCount} · unique links = ${uniqueLinks.length} · class groups = ${classGroups} · grouped cards = ${grouped.length} (unique ${new Set(grouped).size})`);
  if (medicine.status !== 200 || displayedCount !== 145 || uniqueLinks.length !== 145 || missing.length || unknown.length || classGroups !== 40 || grouped.length !== 145) {
    fail(`medicine census: count=${displayedCount} links=${uniqueLinks.length} missing=${missing} unknown=${unknown} groups=${classGroups} grouped=${grouped.length}`);
  }

  /* 4 ── class + key pages */
  for (const p of ["/medicine/", "/drugs/", "/quiz/", "/study/", "/psychiatry/", "/", "/psychiatry/library/", "/psychiatry/self-test/"]) {
    const r = await get(p);
    ok(`${p} → ${r.status}`);
    if (r.status !== 200) fail(`${p} = ${r.status}`);
  }

  /* 5 ── psychiatry regression sweep (109 courses still live) */
  const psychSlugs = (await import("../src/lib/kyp/data/psychiatry-courses/index")).psychiatryCourses.map((c: { slug: string }) => c.slug);
  let psych200 = 0;
  const psychBad: string[] = [];
  for (const s of psychSlugs) {
    const r = await get(`/psychiatry/${s}/`);
    if (r.status === 200) psych200++;
    else psychBad.push(`${s}:${r.status}`);
  }
  ok(`psychiatry courses: ${psych200}/${psychSlugs.length} HTTP 200 (regression-free)`);
  if (psych200 !== psychSlugs.length) fail(`psychiatry failures: ${psychBad.slice(0, 6)}`);

  /* ─── report ─────────────────────────────────────────────────────── */
  mkdirSync("reports", { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    liveBase: BASE,
    medicinePage: {
      httpStatus: medicine.status,
      displayedCount,
      uniqueDrugLinks: uniqueLinks.length,
      missingSlugs: missing,
      unknownSlugs: unknown,
      classGroupHeaders: classGroups,
      groupedDrugCards: grouped.length,
      groupedUniqueSlugs: new Set(grouped).size,
    },
    routeCensus: { total: 145, http200, monographMarkers: markers },
    mandatorySpotChecks: mandatory,
    psychiatryRegression: { total: psychSlugs.length, http200: psych200 },
    overallStatus: failures === 0 ? "PASS" : "FAIL",
    failureCount: failures,
  };
  writeFileSync("reports/live-medicine-census.json", JSON.stringify(report, null, 2));
  console.log(`\nLIVE CENSUS: ${failures === 0 ? "PASS" : `FAIL (${failures})`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main();
