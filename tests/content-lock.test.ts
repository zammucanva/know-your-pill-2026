/**
 * KYP Content Lock Test Suite — one check per locked medical data file
 * (163 files after the Phase 3 Stahl's Prescriber's Guide integration).
 *
 * Each test hashes one locked medical content file and compares it with the
 * recorded baseline (scripts/content-lock-baseline.json). The canonical
 * content counts (143/1/3/471/227) and the medical data-value snapshot are
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
  // Canonical content counts: 143 medications after Phase 3 (12 original +
  // 131 added from Stahl's Prescriber's Guide 6th ed., paraphrased),
  // 1 disease, 3 substances, 471 MCQs, 227 search entries.
  expect(baseline.counts).toEqual({
    medications: 143,
    diseases: 1,
    substances: 3,
    mcqs: 471,
    searchEntries: 227,
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

describe("content lock — 163 locked medical data files", () => {
  const files = Object.keys(baseline.files);
  expect(files.length).toBe(163);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    test(`${i + 1}/${files.length} ${file.replace("src/lib/kyp/data/", "")} unchanged`, () => {
      const absolute = resolve(ROOT, file);
      expect(existsSync(absolute)).toBe(true);
      const actual = createHash("sha256").update(readFileSync(absolute)).digest("hex");
      expect(actual).toBe(baseline.files[file]);
    });
  }
});
