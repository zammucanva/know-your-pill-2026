/**
 * Generator: psychiatry search records → static, client-safe module.
 *
 * Emits src/lib/kyp/data/psychiatry-search-records.generated.ts from the
 * canonical notes (download/kyp-notes/). The generated module is a plain
 * array with ZERO fs/loader imports so the universal search index stays
 * browser-safe (search-index.ts is imported by client components).
 *
 * Run after any change to the note corpus:
 *   bun run scripts/generate-psychiatry-search-records.ts
 *
 * Freshness is enforced by scripts/validate-oxford-library.py.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildPsychiatrySearchRecords } from "../src/lib/oxford/search";

const records = buildPsychiatrySearchRecords();

const header = `/**
 * AUTO-GENERATED — KYP Psychiatry search records. DO NOT EDIT BY HAND.
 *
 * Generated from the canonical notes (download/kyp-notes/) by:
 *   bun run scripts/generate-psychiatry-search-records.ts
 *
 * Freshness is verified by scripts/validate-oxford-library.py.
 * Static + client-safe on purpose (the search index is imported by
 * client components; no fs/loader imports allowed here).
 */
import type { SearchableItem } from "./types";

export const psychiatrySearchRecords: SearchableItem[] = [
`;

const body = records
  .map((r) => {
    const keywords = r.keywords.map((k) => JSON.stringify(k)).join(", ");
    return `  {
    id: ${JSON.stringify(r.id)},
    title: ${JSON.stringify(r.title)},
    type: "psychiatry-note",
    description: ${JSON.stringify(r.description)},
    href: ${JSON.stringify(r.href)},
    keywords: [${keywords}],
  },`;
  })
  .join("\n");

const file = `${header}${body}\n];\n`;

const outPath = join(process.cwd(), "src/lib/kyp/data/psychiatry-search-records.generated.ts");
writeFileSync(outPath, file);

console.log(
  `generated ${records.length} psychiatry search records (${records.filter((r) => r.href.startsWith("/psychiatry/") && r.id !== "psychiatry-hub" && r.id !== "psychiatry-library").length} notes) -> ${outPath}`
);
