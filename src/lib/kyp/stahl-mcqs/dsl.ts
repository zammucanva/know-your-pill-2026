/**
 * Authoring DSL — the ONLY surface bank files use.
 *
 *   import { q, f, neg, drugOption } from "../dsl";
 *
 *   q({
 *     drug: "sertraline",
 *     topic: "clinical-pearls",
 *     difficulty: "intermediate",
 *     type: "clinical-application",
 *     stem: "…",
 *     correct: f("sertraline", "pearls", 1),
 *     distractors: [
 *       f("mirtazapine", "pearls", 0),
 *       neg("…logical inverse of the evidence…"),
 *       f("bupropion", "howToStop", 0),
 *     ],
 *     explanation: "…",
 *   })
 *
 * f() never carries text — only coordinates. The resolved option is
 * whatever the canonical data says, forever.
 */

import type { AuthoredStahlMcq, OptionSpec, StahlZoneId } from "./types";

/** Reference a verbatim canonical fact (array zones: zone[index];
 *  scalar zones: omit the index — it defaults to 0). */
export function f(slug: string, zone: StahlZoneId, index = 0): OptionSpec {
  return { kind: "fact", ref: { slug, zone, index } };
}

/** Reference a structured dosing-row field (row = zone[index]). */
export function fd(
  slug: string,
  index: number,
  field: "indication" | "starting" | "target" | "max" | "titration"
): OptionSpec {
  return { kind: "fact", ref: { slug, zone: "dosing", index, field } };
}

/** Reference a dosing-row note (row.notes[subIndex]). */
export function fdn(slug: string, index: number, subIndex: number): OptionSpec {
  return { kind: "fact", ref: { slug, zone: "dosing", index, subIndex } };
}

/** Reference a special-population guidance bullet. */
export function fp(slug: string, index: number, subIndex: number): OptionSpec {
  return { kind: "fact", ref: { slug, zone: "specialPopulations", index, subIndex } };
}

/** A real drug's genericName as the option. */
export function drugOption(slug: string): OptionSpec {
  return { kind: "drug", slug };
}

/** A logical inverse of the correct answer's evidence. Never correct. */
export function neg(text: string): OptionSpec {
  return { kind: "negation", text };
}

/** Author a question (identity helper — TypeScript enforces the shape). */
export function q(input: AuthoredStahlMcq): AuthoredStahlMcq {
  return input;
}
