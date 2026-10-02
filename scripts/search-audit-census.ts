/**
 * Universal-search audit census + current-behavior simulation.
 *
 * Loads the REAL generated client index (the exact artifact the
 * production SearchModal imports) and:
 *   1. censuses records by type
 *   2. detects duplicate ids / titles / hrefs, anchor-vs-route hrefs
 *   3. simulates the CURRENT production ranking (search-modal.tsx
 *      rankResult + slice(0,12)) for the mission probe queries
 *   4. reports tier distribution + what the 12-cap hides
 *
 * Usage: bun scripts/search-audit-census.ts
 */
import {
  searchIndexGenerated as index,
} from "../src/lib/kyp/data/search-index-generated";

type Item = (typeof index)[number];

// ── current production ranking (verbatim copy of search-modal.tsx) ──
function rankToken(item: Item, token: string): number {
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
function rankResult(item: Item, q: string): number {
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;
  if (tokens.length === 1) return rankToken(item, tokens[0]);
  let total = 0;
  for (const token of tokens) {
    const tier = rankToken(item, token);
    if (tier === 0) return 0;
    total += tier;
  }
  return total;
}
function currentSearch(q: string, cap = 12): { item: Item; rank: number }[] {
  return index
    .map((item) => ({ item, rank: rankResult(item, q) }))
    .filter((r) => r.rank > 0)
    .sort((a, b) => a.rank - b.rank || a.item.title.localeCompare(b.item.title))
    .slice(0, cap);
}

// ── 1. census ─────────────────────────────────────────────────────────
const byType = new Map<string, number>();
for (const it of index) byType.set(it.type, (byType.get(it.type) ?? 0) + 1);
console.log("=== CENSUS ===");
console.log("total entries:", index.length);
for (const [t, n] of [...byType.entries()].sort((a, b) => b[1] - a[1]))
  console.log(String(n).padStart(4), t);

// ── 2. integrity: duplicate ids/titles/hrefs ─────────────────────────
const idCount = new Map<string, number>();
const titleCount = new Map<string, number>();
const hrefCount = new Map<string, number>();
for (const it of index) {
  idCount.set(it.id, (idCount.get(it.id) ?? 0) + 1);
  titleCount.set(it.title.toLowerCase(), (titleCount.get(it.title.toLowerCase()) ?? 0) + 1);
  hrefCount.set(it.href, (hrefCount.get(it.href) ?? 0) + 1);
}
const dupIds = [...idCount.entries()].filter(([, n]) => n > 1);
const dupTitles = [...titleCount.entries()].filter(([, n]) => n > 1);
const dupHrefs = [...hrefCount.entries()].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);
console.log("\n=== INTEGRITY ===");
console.log("duplicate ids:", dupIds.length, JSON.stringify(dupIds.slice(0, 10)));
console.log("duplicate titles:", dupTitles.length, JSON.stringify(dupTitles.slice(0, 15)));
console.log("hrefs used by >1 record:", dupHrefs.length);
console.log("top shared hrefs:", JSON.stringify(dupHrefs.slice(0, 8)));

// keyword volume
const kwTotal = index.reduce((s, it) => s + it.keywords.length, 0);
console.log("keywords total:", kwTotal, "avg/entry:", (kwTotal / index.length).toFixed(1));
const noKw = index.filter((it) => it.keywords.length === 0).length;
console.log("entries with zero keywords:", noKw);

// ── 3. tier simulation for probe queries ──────────────────────────────
const PROBES = ["d", "de", "dep", "del", "dem", "des", "ser", "clo", "flu", "esc", "ven", "dul", "sch", "bip", "obs", "adh"];
console.log("\n=== CURRENT BEHAVIOR SIMULATION (cap 12) ===");
for (const q of PROBES) {
  const all = index
    .map((item) => ({ item, rank: rankResult(item, q) }))
    .filter((r) => r.rank > 0)
    .sort((a, b) => a.rank - b.rank || a.item.title.localeCompare(b.item.title));
  const tiers = new Map<number, number>();
  for (const r of all) tiers.set(r.rank, (tiers.get(r.rank) ?? 0) + 1);
  const top = currentSearch(q);
  const typesShown = new Map<string, number>();
  for (const r of top) typesShown.set(r.item.type, (typesShown.get(r.item.type) ?? 0) + 1);
  const tier2Hidden = all.filter((r) => r.rank === 2).length - top.filter((r) => r.rank === 2).length;
  console.log(
    `\nq="${q}"  matches=${all.length}  shown=12  tierDist=${JSON.stringify([...tiers.entries()].sort())}`
  );
  console.log(
    `  types shown: ${JSON.stringify([...typesShown.entries()])}  rank2-then-hidden(title-prefix): ${tier2Hidden}`
  );
  console.log(
    `  top12: ${top.map((r) => `${r.item.title}[${r.item.type}#${r.rank}]`).join(" | ")}`
  );
}

// ── 4. the mission's defining example: all "de" title-prefix matches ──
console.log("\n=== ALL TITLE-PREFIX MATCHES FOR 'de' (what cap-12 must not hide) ===");
const dePrefix = index
  .filter((it) => it.title.toLowerCase().startsWith("de"))
  .sort((a, b) => a.title.localeCompare(b.title));
console.log(`count: ${dePrefix.length}`);
for (const it of dePrefix) console.log(`  - ${it.title} [${it.type}] -> ${it.href}`);
