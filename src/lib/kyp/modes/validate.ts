import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import { CATEGORY_MODES, categoryOfSource } from "./contracts";
import { MODE_ORDER, MODE_SPECS, modeOfBlock } from "./specs";
import type { LensBlock, ModeLensSet, Sourced } from "./types";

/** Reads a dotted/bracket path such as "clinicalCases[0].title". */
export function readPath(root: unknown, path: string): unknown {
  let cur: unknown = root;
  for (const part of path.replace(/\[(\d+)\]/g, ".$1").split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export function* sourcedIn(block: LensBlock): Generator<Sourced> {
  const walk = function* (v: unknown): Generator<Sourced> {
    if (Array.isArray(v)) {
      for (const x of v) yield* walk(x);
    } else if (v && typeof v === "object") {
      const o = v as Record<string, unknown>;
      if (typeof o.text === "string" && typeof o.source === "string") yield o as unknown as Sourced;
      else for (const x of Object.values(o)) yield* walk(x);
    }
  };
  yield* walk(block);
}

export interface LensIssue {
  /** "error" breaks fidelity to the registry; "warning" is a content-quality signal (e.g. one sentence authored twice). */
  severity: "error" | "warning";
  code:
    | "wrong-mode"
    | "source-missing"
    | "text-differs-from-source"
    | "conflicting-text-for-source"
    | "duplicate-across-fields"
    | "unreviewed-state-missing"
    | "kind-both-built-and-unavailable"
    | "kind-unaccounted"
    | "fact-not-allowed-in-mode"
    | "viva-needs-review"
    | "viva-split-lossy";
  detail: string;
}

/**
 * Proves a lens set is faithful to the canonical registry:
 *  - each block belongs to its mode's schema;
 *  - every Sourced string equals the canonical value at its path;
 *  - one source path never shows two different texts across modes;
 *  - every schema block is either built or listed as unavailable.
 */
export function validateLensSet(set: ModeLensSet, drug: Drug, patientGuide?: PatientGuide): LensIssue[] {
  const issues: LensIssue[] = [];
  const bySource = new Map<string, string>();
  const root = { ...drug, patientGuide } as unknown;

  for (const mode of MODE_ORDER) {
    const lens = set[mode];
    const built = new Set(lens.blocks.map((b) => b.kind));
    const unavail = new Set(lens.unavailable.map((u) => u.kind));
    for (const kind of MODE_SPECS[mode].blocks) {
      if (built.has(kind) && unavail.has(kind))
        issues.push({ code: "kind-both-built-and-unavailable", severity: "error", detail: `${mode}:${kind}` });
      if (!built.has(kind) && !unavail.has(kind)) issues.push({ code: "kind-unaccounted", severity: "error", detail: `${mode}:${kind}` });
    }
    for (const b of lens.blocks) {
      if (modeOfBlock(b.kind) !== mode) issues.push({ code: "wrong-mode", severity: "error", detail: `${b.kind} in ${mode}` });
      if (b.review !== "pending-clinical-review")
        issues.push({ code: "unreviewed-state-missing", severity: "error", detail: `${mode}:${b.kind}` });
      if (b.kind === "viva") {
        for (const it of b.items) {
          if (it.type === "needs-review")
            issues.push({ code: "viva-needs-review", severity: "error", detail: `${it.full.source}:${it.reason}` });
          if (it.type === "qa") {
            const rebuilt = `${it.question} (${it.answer})`;
            const t = it.full.text.trim();
            if (rebuilt !== t && `${rebuilt}.` !== t)
              issues.push({ code: "viva-split-lossy", severity: "error", detail: it.full.source });
          }
        }
      }
      for (const s of sourcedIn(b)) {
        const actual = readPath(root, s.source);
        if (actual === undefined) issues.push({ code: "source-missing", severity: "error", detail: `${mode}:${s.source}` });
        else if (actual !== s.text) issues.push({ code: "text-differs-from-source", severity: "error", detail: `${mode}:${s.source}` });
        if (!s.source.startsWith("stahl:") && !CATEGORY_MODES[categoryOfSource(s.source)].includes(mode))
          issues.push({ code: "fact-not-allowed-in-mode", severity: "error", detail: `${mode}:${s.source}` });
        const prior = bySource.get(s.source);
        if (prior !== undefined && prior !== s.text) issues.push({ code: "conflicting-text-for-source", severity: "error", detail: s.source });
        bySource.set(s.source, s.text);
      }
    }
  }
  // The same sentence authored in two canonical fields is reported as a warning.
  const byText = new Map<string, string>();
  for (const [src, text] of bySource) {
    const prior = byText.get(text);
    // Short repeated values (e.g. an age-group label on two indications) are categorical, not a sentence authored twice.
    if (text.length >= 40 && prior !== undefined && prior !== src) issues.push({ code: "duplicate-across-fields", severity: "warning", detail: `${prior} / ${src}` });
    byText.set(text, src);
  }
  return issues;
}
