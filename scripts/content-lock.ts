/**
 * KYP Content Lock — medical content integrity verification.
 *
 * Locks the 32 medical data files under src/lib/kyp/data/ by SHA-256 of the
 * raw file bytes, and verifies the canonical content counts:
 *   - 12 medications
 *   - 1 disease
 *   - 3 substances
 *   - 78 MCQs (microQuizzes + activeRecallQuestions across all medications)
 *   - 53 search index entries (46 original + 7 derived taxonomy
 *     collection entries: Psychiatry, Antidepressants, SSRIs, SNRIs,
 *     NDRIs, NaSSAs, TCAs — navigation metadata only, no medical claims)
 *
 * Usage:
 *   bun scripts/content-lock.ts --init     (re)write the baseline file
 *   bun scripts/content-lock.ts            verify against the baseline
 *
 * Exit code 0 = all checks pass; 1 = any mismatch (details printed).
 * The baseline file is scripts/content-lock-baseline.json.
 */

import { createHash } from "crypto";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";

// ─── Locked medical content files (32) ───────────────────────────────────────
const DATA_DIR = "src/lib/kyp/data";
const LOCKED_FILES: string[] = [
  // data root (13)
  `${DATA_DIR}/medications.ts`,
  `${DATA_DIR}/drugs.ts`,
  `${DATA_DIR}/classes.ts`,
  `${DATA_DIR}/side-effects.ts`,
  `${DATA_DIR}/brain.ts`,
  `${DATA_DIR}/search-index.ts`,
  `${DATA_DIR}/drug-taxonomy.ts`,
  `${DATA_DIR}/disease-types.ts`,
  `${DATA_DIR}/substance-types.ts`,
  `${DATA_DIR}/types.ts`,
  `${DATA_DIR}/platform.ts`,
  `${DATA_DIR}/index.ts`,
  `${DATA_DIR}/neurotransmitter-artwork.json`,
  // drugs/ (13)
  ...[
    "amitriptyline",
    "bupropion",
    "citalopram",
    "clomipramine",
    "duloxetine",
    "escitalopram",
    "fluoxetine",
    "fluvoxamine",
    "mirtazapine",
    "paroxetine",
    "sertraline",
    "venlafaxine",
  ].map((d) => `${DATA_DIR}/drugs/${d}.ts`),
  `${DATA_DIR}/drugs/index.ts`,
  // diseases/ (2)
  `${DATA_DIR}/diseases/index.ts`,
  `${DATA_DIR}/diseases/major-depressive-disorder.ts`,
  // substances/ (4)
  `${DATA_DIR}/substances/index.ts`,
  `${DATA_DIR}/substances/alcohol.ts`,
  `${DATA_DIR}/substances/cannabis.ts`,
  `${DATA_DIR}/substances/opioids.ts`,
];

// ─── Canonical content counts ───────────────────────────────────────────────
const EXPECTED_COUNTS = {
  medications: 12,
  diseases: 1,
  substances: 3,
  mcqs: 78,
  searchEntries: 53,
};

const BASELINE_PATH = resolve(
  dirname(process.argv[1] ?? "."),
  "content-lock-baseline.json"
);

interface Baseline {
  files: Record<string, string>; // path -> sha256
  counts: typeof EXPECTED_COUNTS;
}

function sha256File(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

async function collectCounts() {
  const { drugs } = await import(`../${DATA_DIR}/drugs/index.ts`);
  const { diseases } = await import(`../${DATA_DIR}/diseases/index.ts`);
  const { substancePages } = await import(`../${DATA_DIR}/substances/index.ts`);
  const { searchIndex } = await import(`../${DATA_DIR}/search-index.ts`);

  // MCQs = microQuizzes (multiple-choice) aggregated across drugs + diseases,
  // mirroring the /quiz page's buildAllQuestions() definition.
  // activeRecallQuestions are open-ended prompts, not MCQs.
  const mcqs =
    drugs.reduce(
      (t, d) => t + ((d as { microQuizzes?: unknown[] }).microQuizzes?.length ?? 0),
      0
    ) +
    diseases.reduce(
      (t, d) => t + ((d as { microQuizzes?: unknown[] }).microQuizzes?.length ?? 0),
      0
    );

  return {
    medications: drugs.length,
    diseases: diseases.length,
    substances: substancePages.length,
    mcqs,
    searchEntries: searchIndex.length,
  };
}

async function main() {
  const init = process.argv.includes("--init");
  const counts = await collectCounts();

  if (init) {
    const files: Record<string, string> = {};
    for (const f of LOCKED_FILES) files[f] = sha256File(f);
    const baseline: Baseline = { files, counts };
    writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2) + "\n");
    console.log(
      `Content lock baseline written: ${LOCKED_FILES.length} files, counts ${counts.medications}/${counts.diseases}/${counts.substances}/${counts.mcqs}/${counts.searchEntries}`
    );
    process.exit(0);
  }

  if (!existsSync(BASELINE_PATH)) {
    console.error("FAIL: baseline file missing (run with --init first)");
    process.exit(1);
  }

  const baseline: Baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  const baselineFiles = Object.keys(baseline.files);
  if (baselineFiles.length !== LOCKED_FILES.length) {
    console.error(
      `FAIL: baseline lists ${baselineFiles.length} files, lock list has ${LOCKED_FILES.length}`
    );
    process.exit(1);
  }

  let passed = 0;
  const failures: string[] = [];
  for (const f of LOCKED_FILES) {
    const expected = baseline.files[f];
    if (!expected) {
      failures.push(`${f}: not present in baseline`);
      continue;
    }
    if (!existsSync(f)) {
      failures.push(`${f}: file missing`);
      continue;
    }
    const actual = sha256File(f);
    if (actual === expected) passed++;
    else failures.push(`${f}: hash changed`);
  }

  // Counts must equal the locked baseline AND the canonical expected counts.
  const countsOk =
    JSON.stringify(counts) === JSON.stringify(baseline.counts) &&
    counts.medications === EXPECTED_COUNTS.medications &&
    counts.diseases === EXPECTED_COUNTS.diseases &&
    counts.substances === EXPECTED_COUNTS.substances &&
    counts.mcqs === EXPECTED_COUNTS.mcqs &&
    counts.searchEntries === EXPECTED_COUNTS.searchEntries;

  console.log(`Content Lock: ${passed}/${LOCKED_FILES.length} file hashes pass`);
  console.log(
    `Content Counts: ${counts.medications} medications / ${counts.diseases} diseases / ${counts.substances} substances / ${counts.mcqs} MCQs / ${counts.searchEntries} search entries ${
      countsOk ? "— MATCH" : "— MISMATCH"
    }`
  );

  if (failures.length > 0) {
    console.error("Failures:");
    for (const f of failures) console.error(`  - ${f}`);
  }
  if (!countsOk) {
    console.error("FAIL: content counts changed");
    console.error(`  expected: ${JSON.stringify(EXPECTED_COUNTS)}`);
    console.error(`  actual:   ${JSON.stringify(counts)}`);
  }

  if (passed === LOCKED_FILES.length && countsOk && failures.length === 0) {
    console.log("CONTENT LOCK: PASS");
    process.exit(0);
  }
  process.exit(1);
}

main();
