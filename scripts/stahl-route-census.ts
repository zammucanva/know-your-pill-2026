/**
 * Stahl 145 integration census — runs against the STATIC EXPORT (out/).
 *
 * Produces reports/stahl-route-census.json:
 *   - route census: 145 registry slugs → build-generated? HTTP status? monograph markers?
 *   - medicine page census: displayed count, unique drug links, class totals
 *   - search census: 145/145 generic names resolvable, every class represented,
 *     5 mandatory exact lookups
 *   - exit code 1 if any check fails
 *
 * Usage: bun scripts/stahl-route-census.ts            (expects out/ to exist)
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "fs";
import { createServer } from "http";
import { drugs } from "../src/lib/kyp/data/drugs/index";
import { drugClassIdFromLabel } from "../src/lib/kyp/data/class-id";
import {
  searchIndexGenerated,
  searchTypeLabelsGenerated,
} from "../src/lib/kyp/data/search-index-generated";

const OUT = "out";
const PORT = 4173;

type RouteRow = {
  slug: string;
  genericName: string;
  drugClassLabel: string;
  expectedRoute: string;
  buildGenerated: boolean;
  httpStatus: number | null;
  monographMarkerFound: boolean;
  htmlBytes: number;
};

/* ─── tiny static file server over out/ ─────────────────────────────── */
const MIME: Record<string, string> = {
  ".html": "text/html", ".txt": "text/plain", ".json": "application/json",
  ".css": "text/css", ".js": "text/javascript", ".png": "image/png",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".webmanifest": "application/manifest+json",
};
function startServer(): Promise<{ close: () => void }> {
  const srv = createServer((req, res) => {
    let p = req.url?.split("?")[0] ?? "/";
    if (p.endsWith("/")) p += "index.html";
    const file = `${OUT}${p}`;
    try {
      const data = readFileSync(file);
      const ext = p.slice(p.lastIndexOf("."));
      res.writeHead(200, { "content-type": MIME[ext] ?? "application/octet-stream" });
      res.end(data);
    } catch {
      // try directory index
      try {
        const data = readFileSync(`${file}/index.html`);
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } catch {
        res.writeHead(404); res.end("not found");
      }
    }
  });
  return new Promise((resolve) => srv.listen(PORT, () => resolve({ close: () => srv.close() })));
}

async function get(path: string): Promise<{ status: number; text: string; bytes: number }> {
  const res = await fetch(`http://127.0.0.1:${PORT}${path}`, { redirect: "follow" });
  const text = await res.text();
  return { status: res.status, text, bytes: text.length };
}

/* ─── search ranking (mirror of the search-modal semantics) ─────────── */
function rankToken(item: { title: string; keywords: string[]; description: string }, token: string): number {
  const title = item.title.toLowerCase();
  const keywords = item.keywords.map((k) => k.toLowerCase());
  if (title === token) return 1;
  if (title.startsWith(token)) return 2;
  if (title.includes(token)) return 3;
  if (keywords.some((k) => k === token)) return 4;
  if (keywords.some((k) => k.startsWith(token))) return 5;
  if (keywords.some((k) => k.includes(token))) return 6;
  if (item.description.toLowerCase().includes(token)) return 7;
  return 0;
}

async function main() {
  const server = await startServer();
  const rows: RouteRow[] = [];
  let failures = 0;

  /* 1 ── route census over all 145 registry drugs */
  for (const d of drugs) {
    const route = `/drugs/${d.slug}/`;
    const buildGenerated = existsSync(`${OUT}/drugs/${d.slug}/index.html`);
    let status: number | null = null;
    let marker = false;
    let bytes = 0;
    try {
      const r = await get(route);
      status = r.status;
      bytes = r.bytes;
      // Monograph markers: the generic name + the deep-monograph section
      // anchors present on every one of the 145 full Stahl monographs
      // (memoryTricks is data-driven and absent on some monographs).
      marker =
        r.status === 200 &&
        r.text.includes(d.genericName.split(" (")[0]) &&
        r.text.includes('id="prescriber-guide"') &&
        r.text.includes('id="clinical-uses"') &&
        r.text.includes("Clinical Pearls") &&
        r.bytes > 300_000;
    } catch { status = null; }
    if (!buildGenerated || status !== 200 || !marker) failures++;
    rows.push({
      slug: d.slug, genericName: d.genericName, drugClassLabel: d.drugClassLabel,
      expectedRoute: route, buildGenerated, httpStatus: status,
      monographMarkerFound: marker, htmlBytes: bytes,
    });
  }

  /* 2 ── medicine page census */
  const medicine = await get("/medicine/");
  const medHtml = medicine.text;
  const displayedCountMatch = medHtml.match(/(\d+)\s*(?:psychiatric\s*)?medicines/i);
  const displayedCount = displayedCountMatch ? Number(displayedCountMatch[1]) : null;
  // The static export prefixes every internal href with the GitHub Pages
  // basePath (/know-your-pill-2026) — match with or without it.
  const drugLinks = [...medHtml.matchAll(/href="(?:\/know-your-pill-2026)?\/drugs\/([a-z0-9-]+)\/?"/g)].map((m) => m[1]);
  const uniqueLinks = [...new Set(drugLinks)];
  const registrySlugs = new Set(drugs.map((d) => d.slug));
  const unknownSlugs = uniqueLinks.filter((s) => !registrySlugs.has(s));
  const missingSlugs = [...registrySlugs].filter((s) => !uniqueLinks.includes(s));
  // The Medicine page groups drugs under class h2 headers (it does not
  // link /drugs/class/<id> collection pages — those live on /drugs).
  // The final "Reading a medicine guide" how-to section links 4 example
  // drugs; class-grouped cards are the census population.
  const h2Groups = [...medHtml.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map((m) => m[1]);
  const howToIdx = h2Groups.indexOf("Reading a medicine guide");
  const classGroupCount = howToIdx === -1 ? h2Groups.length : h2Groups.length - 1;
  const howToPos = medHtml.indexOf("Reading a medicine guide");
  const classSectionEnd = howToPos === -1 ? medHtml.length : howToPos;
  const classSection = medHtml.slice(0, classSectionEnd);
  const groupedLinks = [...classSection.matchAll(new RegExp('href="(?:/know-your-pill-2026)?/drugs/([a-z0-9-]+)/?"', "g"))].map((m) => m[1]);
  const groupedUnique = new Set(groupedLinks);
  const medicineOk =
    medicine.status === 200 &&
    displayedCount === 145 &&
    uniqueLinks.length === 145 &&
    missingSlugs.length === 0 &&
    unknownSlugs.length === 0 &&
    classGroupCount === 40 &&
    groupedLinks.length === 145 &&
    groupedUnique.size === 145;
  if (!medicineOk) failures++;

  /* 3 ── search census */
  const lower = (s: string) => s.toLowerCase();
  const searchable = (query: string) =>
    searchIndexGenerated
      .map((item) => ({ item, rank: rankToken(item, lower(query)) }))
      .filter((r) => r.rank > 0)
      .sort((a, b) => a.rank - b.rank)[0]?.item;

  const perDrugSearch = drugs.map((d) => ({
    slug: d.slug,
    genericName: d.genericName,
    foundVia: searchable(lower(d.genericName.split(" (")[0]))?.type ?? null,
    topTitle: searchable(lower(d.genericName.split(" (")[0]))?.title ?? null,
  }));
  const searchMisses = perDrugSearch.filter((r) => r.foundVia !== "drug" || r.topTitle !== r.genericName);
  if (searchMisses.length) failures++;

  // every drug class represented in the index's drug entries
  const classCoverage = new Map<string, number>();
  for (const item of searchIndexGenerated) {
    if (item.type === "drug") classCoverage.set(item.title, (classCoverage.get(item.title) ?? 0) + 1);
  }
  const byClass = new Map<string, number>();
  for (const d of drugs) byClass.set(d.drugClassLabel, (byClass.get(d.drugClassLabel) ?? 0) + 1);
  const classSearchOk = [...byClass.keys()].every((label) => {
    const member = drugs.find((d) => d.drugClassLabel === label)!;
    const hit = searchable(lower(member.genericName.split(" (")[0]));
    return hit?.type === "drug";
  });
  if (!classSearchOk) failures++;

  // the 5 mandatory exact lookups
  const mandatory = ["sertraline", "clozapine", "tacrine", "methylphenidate", "lorazepam"];
  const mandatoryResults = mandatory.map((slug) => {
    const d = drugs.find((x) => x.slug === slug)!;
    const hit = searchable(lower(d.genericName.split(" (")[0]));
    const ok = hit?.type === "drug" && hit.id === `medication-${slug}`;
    if (!ok) failures++;
    return { slug, query: d.genericName, resolvedId: hit?.id ?? null, ok };
  });

  /* 4 ── class page census (every class route resolves) */
  const classPages: { classLabel: string; route: string; status: number | null }[] = [];
  for (const [label, count] of byClass) {
    const id = drugClassIdFromLabel(label);
    const route = `/drugs/class/${id}/`;
    const exists = existsSync(`${OUT}/drugs/class/${id}/index.html`);
    let status: number | null = null;
    if (exists) { const r = await get(route); status = r.status; }
    if (status !== 200) failures++;
    classPages.push({ classLabel: label, route, status });
  }

  /* ─── report ─────────────────────────────────────────────────────── */
  mkdirSync("reports", { recursive: true });
  const report = {
    generatedAt: new Date().toISOString(),
    registryTotal: drugs.length,
    routeCensus: {
      total: rows.length,
      buildGenerated: rows.filter((r) => r.buildGenerated).length,
      http200: rows.filter((r) => r.httpStatus === 200).length,
      monographMarkerFound: rows.filter((r) => r.monographMarkerFound).length,
      rows,
    },
    medicinePage: {
      httpStatus: medicine.status,
      displayedCount,
      uniqueDrugLinks: uniqueLinks.length,
      missingSlugs,
      unknownSlugs,
      classGroupHeaders: classGroupCount,
      groupedDrugCards: groupedLinks.length,
      groupedUniqueSlugs: groupedUnique.size,
      rawLinksIncludingHowToExamples: drugLinks.length,
    },
    searchCensus: {
      indexEntries: searchIndexGenerated.length,
      drugsSearchable: perDrugSearch.length - searchMisses.length,
      searchMisses: searchMisses.map((m) => m.genericName),
      everyClassRepresented: classSearchOk,
      classCount: byClass.size,
      mandatoryLookups: mandatoryResults,
    },
    classPages: { total: classPages.length, http200: classPages.filter((c) => c.status === 200).length, pages: classPages },
    overallStatus: failures === 0 ? "PASS" : "FAIL",
    failureCount: failures,
  };
  writeFileSync("reports/stahl-route-census.json", JSON.stringify(report, null, 2));

  console.log(`ROUTE CENSUS:    ${report.routeCensus.http200}/145 HTTP 200 · ${report.routeCensus.monographMarkerFound}/145 monograph markers · ${report.routeCensus.buildGenerated}/145 build-generated`);
  console.log(`MEDICINE PAGE:   status ${medicine.status} · displayed count = ${displayedCount} · unique drug links = ${uniqueLinks.length} · class groups = ${classGroupCount} · grouped cards = ${groupedLinks.length} (unique ${groupedUnique.size})`);
  console.log(`SEARCH CENSUS:   ${report.searchCensus.drugsSearchable}/145 generic names resolve to their drug · ${byClass.size} classes represented · 5/5 mandatory = ${mandatoryResults.every((m) => m.ok)}`);
  console.log(`CLASS PAGES:     ${report.classPages.http200}/${report.classPages.total} HTTP 200`);
  console.log(`OVERALL:         ${report.overallStatus} (${failures} failures)`);

  server.close();
  process.exit(failures === 0 ? 0 : 1);
}

main();
