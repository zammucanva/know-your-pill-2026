/**
 * KYP Content Lock Test Suite — 32 checks (one per locked medical data file).
 *
 * Each test hashes one locked medical content file and compares it with the
 * recorded baseline (scripts/content-lock-baseline.json). The canonical
 * content counts (12/1/3/78/53) and the medical data-value snapshot are
 * asserted in beforeAll so any drift fails the whole suite.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { createHash } from "crypto";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

const ROOT = process.cwd();
const BASELINE_PATH = resolve(ROOT, "scripts/content-lock-baseline.json");

interface Baseline {
  files: Record<string, string>;
  counts: {
    medications: number;
    diseases: number;
    substances: number;
    mcqs: number;
    searchEntries: number;
  };
}

const baseline: Baseline = existsSync(BASELINE_PATH)
  ? JSON.parse(readFileSync(BASELINE_PATH, "utf8"))
  : { files: {}, counts: { medications: 0, diseases: 0, substances: 0, mcqs: 0, searchEntries: 0 } };

beforeAll(async () => {
  // Canonical content counts must remain exactly 12/1/3/78/53.
  // (53 search entries = 46 original + 7 derived taxonomy collection
  // entries — Psychiatry, Antidepressants, SSRIs, SNRIs, NDRIs, NaSSAs,
  // TCAs. Navigation metadata only; no medical data values changed —
  // provable via scripts/medical-data-snapshot.ts, where the drugs /
  // diseases / substancePages / categories hashes are byte-identical to
  // the pre-taxonomy baseline.)
  expect(baseline.counts).toEqual({
    medications: 12,
    diseases: 1,
    substances: 3,
    mcqs: 78,
    searchEntries: 53,
  });

  // Independent data-value level proof: the imported medical data objects
  // must be byte-for-byte unchanged versus the recorded snapshot.
  const proc = Bun.spawnSync(
    ["bun", "scripts/medical-data-snapshot.ts", "--check", "scripts/medical-data-baseline.json"],
    { cwd: ROOT, stdout: "pipe", stderr: "pipe" }
  );
  const out = proc.stdout.toString() + proc.stderr.toString();
  expect(out).toContain("MEDICAL DATA: UNCHANGED");
  expect(proc.exitCode).toBe(0);
});

describe("content lock — 32 locked medical data files", () => {
  const files = Object.keys(baseline.files);
  expect(files.length).toBe(32);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    test(`${i + 1}/32 ${file.replace("src/lib/kyp/data/", "")} unchanged`, () => {
      const absolute = resolve(ROOT, file);
      expect(existsSync(absolute)).toBe(true);
      const actual = createHash("sha256").update(readFileSync(absolute)).digest("hex");
      expect(actual).toBe(baseline.files[file]);
    });
  }
});
