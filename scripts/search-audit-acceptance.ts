/**
 * NEW-engine acceptance simulation against the REAL generated index.
 * Verifies the mission's defining criteria before writing the test suite.
 * Usage: bun scripts/search-audit-acceptance.ts
 */
import { searchIndexGenerated as searchIndex } from "../src/lib/kyp/data/search-index-generated";
import { searchUniversal, rankResult, SEARCH_DISPLAY_CAP } from "../src/lib/kyp/search";

const PROBES = ["d", "de", "dep", "del", "dem", "des", "ser", "clo", "flu", "esc", "ven", "dul", "sch", "bip", "obs", "adh"];

for (const q of PROBES) {
  const { items, total } = searchUniversal(searchIndex, q);
  const tiers = items.map((it) => rankResult(it, q));
  const monotone = tiers.every((t, i) => i === 0 || tiers[i - 1] <= t);
  const types = [...new Set(items.map((i) => i.type))];
  console.log(
    `q="${q}" total=${total} shown=${items.length}/${SEARCH_DISPLAY_CAP} monotone=${monotone} types=${types.length}`
  );
  console.log(`  top8: ${items.slice(0, 8).map((i) => `${i.title}[${i.type}]`).join(" | ")}`);
  console.log(`  tail4: ${items.slice(-4).map((i) => `${i.title}[${i.type}]`).join(" | ")}`);
}

// ── THE DEFINING TEST: "de" returns ALL title-prefix matches ──────────
console.log("\n=== DEFINING TEST: 'de' ===");
const { items: deItems, total: deTotal } = searchUniversal(searchIndex, "de");
const dePrefixAll = searchIndex
  .filter((it) => it.title.toLowerCase().startsWith("de"))
  .map((it) => it.title);
const dePrefixShown = deItems.filter((it) => it.title.toLowerCase().startsWith("de")).length;
console.log(`total matches: ${deTotal}, shown: ${deItems.length}`);
console.log(`title-prefix records in index: ${dePrefixAll.length}, shown: ${dePrefixShown} — ALL PRESENT: ${dePrefixShown === dePrefixAll.length}`);
for (const t of dePrefixAll) {
  const found = deItems.some((i) => i.title === t);
  if (!found) console.log(`  MISSING: ${t}`);
}
const missionExpected = ["Delirium", "Depressive Disorders", "Desipramine", "Desvenlafaxine"];
for (const t of missionExpected) {
  console.log(`  ${t}: ${deItems.some((i) => i.title === t) ? "FOUND" : "NOT FOUND"}`);
}

// ── Token-prefix tier check ────────────────────────────────────────────
console.log("\n=== TOKEN-PREFIX (tier 3) — word-boundary matches for 'de' ===");
for (const it of searchIndex) {
  const words = it.title.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  if (!it.title.toLowerCase().startsWith("de") && words.some((w) => w.startsWith("de"))) {
    const tier = rankResult(it, "de");
    if (deItems.slice(0, 20).includes(it)) console.log(`  [tier ${tier}] ${it.title}`);
  }
}

// ── multi-word AND ──────────────────────────────────────────────────────
console.log("\n=== MULTI-WORD ===");
for (const q of ["major depression", "sertraline anxiety", "delirium tremens"]) {
  const { items, total } = searchUniversal(searchIndex, q);
  console.log(`q="${q}" total=${total} top5: ${items.slice(0, 5).map((i) => `${i.title}[${i.type}]`).join(" | ")}`);
}

// ── normalization ───────────────────────────────────────────────────────
console.log("\n=== NORMALIZATION ===");
const norm = (q: string) => searchUniversal(searchIndex, q).total;
console.log(`"  DE  "=${norm("  DE  ")} vs "de"=${norm("de")} — equal: ${norm("  DE  ") === norm("de")}`);
console.log(`"De\n"=${norm("De\n")} (trailing newline trimmed)`);
console.log(`"SeRtRaLiNe" first=${searchUniversal(searchIndex, "SeRtRaLiNe").items[0]?.title}`);

// ── exact ───────────────────────────────────────────────────────────────
console.log("\n=== EXACT ===");
const exact = searchUniversal(searchIndex, "sertraline");
console.log(`"sertraline" first=${exact.items[0]?.title} (tier ${rankResult(exact.items[0], "sertraline")}), total=${exact.total}`);

// ── performance ─────────────────────────────────────────────────────────
console.log("\n=== PERF (1000 iterations of 'de' + worst case 'e') ===");
for (const q of ["de", "e", "s"]) {
  const t0 = performance.now();
  for (let i = 0; i < 1000; i++) searchUniversal(searchIndex, q);
  const t1 = performance.now();
  console.log(`1000× "${q}": ${((t1 - t0) / 1000).toFixed(3)} ms/search`);
}
