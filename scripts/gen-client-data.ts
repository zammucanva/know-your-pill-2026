/**
 * KYP Client-Data Generator — derives the two BROWSER-FACING data
 * artifacts from the canonical registries at build time:
 *
 *   1. src/lib/kyp/data/search-index-generated.ts
 *      The full universal search index as a self-contained literal.
 *      The live derivation (src/lib/kyp/data/search-index.ts) imports
 *      the entire 145-monograph registry at module scope to build its
 *      entries — fine on the server, but the search modal renders on
 *      EVERY page, so importing the live derivation client-side would
 *      ship the whole registry to the browser (6.7 MB). The generated
 *      artifact ships only the entries (~100 KB source).
 *
 *   2. src/lib/kyp/study/course-stats-generated.ts
 *      Course outline sizes (slug → section count), the course count,
 *      the first course slug, and the class-label → member-slug map
 *      (CLASS_DRUG_SLUGS, consumed by the weak-area selector).
 *      Previously derived independently in three client chunks
 *      (continue-studying, study-next-panel, daily-plan), each pulling
 *      the registry just to count sections.
 *
 * Single source of truth is PRESERVED: both artifacts are generated
 * from the canonical registries and pinned by tests/platform-
 * hardening.test.ts, which fails when either artifact drifts from the
 * live derivation (i.e. when data changed without re-running this
 * script).
 *
 * Usage: bun scripts/gen-client-data.ts
 * Deterministic: same registry in → byte-identical files out.
 */

import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { searchIndex, searchTypeLabels } from "../src/lib/kyp/data/search-index";
import { drugs } from "../src/lib/kyp/data/drugs/index";

const REPO = resolve(dirname(process.argv[1] ?? "."), "..");

/** Course outline sizes — identical derivation to the three former
 *  in-consumer copies (lessonGroups → unique sectionIds). */
const COURSE_STATS: Record<string, { total: number }> = Object.fromEntries(
  drugs.map((d) => [
    d.slug,
    { total: new Set((d.lessonGroups ?? []).flatMap((l) => l.sectionIds)).size },
  ])
);

/** Class label → member drug slugs (registry order). */
const CLASS_DRUG_SLUGS: Record<string, string[]> = Object.fromEntries(
  Array.from(
    drugs.reduce((map, d) => {
      const list = map.get(d.drugClassLabel) ?? [];
      list.push(d.slug);
      map.set(d.drugClassLabel, list);
      return map;
    }, new Map<string, string[]>())
  )
);

function writeGenerated(relPath: string, header: string, body: string): void {
  const abs = resolve(REPO, relPath);
  mkdirSync(dirname(abs), { recursive: true });
  // header ends mid-statement ("… = "); body continues on the SAME line
  writeFileSync(abs, `${header} ${body}\n`);
  console.log(`wrote ${relPath}`);
}

// ─── 1. Search index ──────────────────────────────────────────────────────────

writeGenerated(
  "src/lib/kyp/data/search-index-generated.ts",
  `/**
 * GENERATED FILE — do not edit by hand.
 *
 * The universal search index as a self-contained literal (entries +
 * type labels), generated from the canonical derivation in
 * ./search-index.ts by scripts/gen-client-data.ts. That derivation
 * imports the full 145-monograph registry at module scope — correct
 * on the server, but importing it from the client-side search modal
 * (rendered on every page) would ship the entire registry to the
 * browser. This artifact ships only the entries themselves.
 *
 * Drift protection: tests/platform-hardening.test.ts asserts this
 * array is deep-equal to the live derivation — regenerate with
 * \`bun scripts/gen-client-data.ts\` after any registry change.
 */

import type { SearchableItem } from "./types";

export const searchIndexGenerated: SearchableItem[] =`,
  JSON.stringify(searchIndex, null, 2) +
    `;\n\nexport const searchTypeLabelsGenerated: Record<SearchableItem["type"], string> = ` +
    JSON.stringify(searchTypeLabels, null, 2) +
    `;\n`
);;

// ─── 2. Course stats ──────────────────────────────────────────────────────────

writeGenerated(
  "src/lib/kyp/study/course-stats-generated.ts",
  `/**
 * GENERATED FILE — do not edit by hand.
 *
 * Study-surface client data derived from the canonical drug registry
 * by scripts/gen-client-data.ts: outline sizes (slug → unique section
 * count), the total course count, the first course slug (the "Start
 * Learning" entry point), and the class-label → member-slug map used
 * by the weak-area selector.
 *
 * Replaces the identical per-consumer derivations that previously
 * lived in continue-studying.tsx, study-next-panel.tsx and
 * daily-plan.ts — each of which imported the full registry just to
 * count sections.
 *
 * Drift protection: tests/platform-hardening.test.ts asserts this
 * map matches the live registry derivation — regenerate with
 * \`bun scripts/gen-client-data.ts\` after any registry change.
 */

export interface CourseStatsEntry {
  /** Unique course section count for the medication. */
  total: number;
}

export const COURSE_STATS: Record<string, CourseStatsEntry> =`,
  JSON.stringify(COURSE_STATS, null, 2) +
    `;\n\n/** Number of medication courses in the library. */\nexport const COURSE_COUNT: number = ${
      drugs.length
    };\n\n/** Registry-order first course — the "Start Learning" entry point. */\nexport const FIRST_COURSE_SLUG: string = ${JSON.stringify(
      drugs[0]?.slug ?? ""
    )};\n\n/** Class label → member drug slugs, in registry order (class\n *  membership view for the weak-area selector). */\nexport const CLASS_DRUG_SLUGS: Record<string, string[]> = ${JSON.stringify(
      CLASS_DRUG_SLUGS,
      null,
      2
    )};\n`
);

console.log(
  `generated: ${searchIndex.length} search entries, ${drugs.length} course stats`
);
