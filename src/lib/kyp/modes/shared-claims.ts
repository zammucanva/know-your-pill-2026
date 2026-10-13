/**
 * Shared patient wording that makes a claim about EVERY medicine it appears on.
 *
 * The registry's patient wording contains standard sentences used verbatim for dozens of medicines across
 * unrelated classes (stimulants, benzodiazepines, antipsychotics, antidepressants...). A sentence like
 * "works gradually, most people notice the benefit over weeks, not days" cannot be true of all of them,
 * and nothing in the data supports it for any single one.
 *
 * This module classifies those sentences by pattern. It writes no medical text and edits no data:
 *   - "claim"     : states an expectation or fact about the medicine (onset, schedule, how effects behave,
 *                   what rules a medicine out). It is NOT shown as guidance for an individual medicine. The
 *                   original sentence is kept, labelled, behind a "needs review" disclosure.
 *   - "direction" : general cautionary advice that asserts no medicine-specific fact (contact your doctor,
 *                   share your medicine list, ...). It stays visible, labelled as standard wording.
 * A sentence shared by 20 or more medicines that matches no rule is withheld as "unclassified" (a test
 * fails until someone classifies it), so a new shared claim can never silently appear as guidance.
 *
 * No imports: usable from server and client components.
 */

export type SharedClaimKind = "claim" | "direction";
export type SharedClaimCategory =
  | "onset"
  | "adverse-effects"
  | "administration"
  | "contraindication-scope"
  | "safety-direction"
  | "interaction-direction"
  | "monitoring-direction"
  | "unclassified";

export interface SharedClaimRule {
  id: string;
  kind: SharedClaimKind;
  category: SharedClaimCategory;
  pattern: RegExp;
  /** Why the sentence is handled this way. Written for the content owner. */
  why: string;
}

export const SHARED_CLAIM_RULES: readonly SharedClaimRule[] = [
  {
    id: "onset-works-gradually",
    kind: "claim",
    category: "onset",
    pattern: /works gradually,? most people notice the benefit over weeks/i,
    why: "Onset claim. Fast-acting medicines (for example some benzodiazepines, stimulants and wake-promoting agents) carry this sentence too. No medicine-specific timeline supports it.",
  },
  {
    id: "onset-like-every-medicine",
    kind: "claim",
    category: "onset",
    pattern: /like every medicine in its class it works gradually where noted/i,
    why: "Class-level onset claim bundled with general directions (taken exactly as prescribed, never stopped suddenly). Those directions also appear as their own standard sentences.",
  },
  {
    id: "onset-benefit-builds",
    kind: "claim",
    category: "onset",
    pattern: /^benefit from .{1,60} builds over weeks\.?$/i,
    why: "Onset claim applied to every medicine that carries it. Not supported per medicine.",
  },
  {
    id: "onset-do-not-judge",
    kind: "claim",
    category: "onset",
    pattern: /^do not judge it in the first days\.?$/i,
    why: "Tells the reader not to expect early benefit. Not supported per medicine.",
  },
  {
    id: "ae-usually-early-settle",
    kind: "claim",
    category: "adverse-effects",
    pattern: /these usually appear early and many settle with time/i,
    why: "States how side effects behave over time for every medicine. Not supported per medicine.",
  },
  {
    id: "ae-almost-always-solution",
    kind: "claim",
    category: "adverse-effects",
    pattern: /there is almost always a solution/i,
    why: "Outcome promise about side effects. Not supported per medicine.",
  },
  {
    id: "admin-same-time-daily",
    kind: "claim",
    category: "administration",
    pattern: /^take it exactly as prescribed, at the same time each day\.?$/i,
    why: "States a dosing schedule. Medicines taken as needed, weekly, or at set times of day carry this sentence too.",
  },
  {
    id: "contra-allergy-only",
    kind: "claim",
    category: "contraindication-scope",
    pattern: /do not take this medicine if: you have a known allergy to it/i,
    why: "Names allergy as the reason not to take the medicine, which can read as the only one. The same sentence is used for medicines with other recorded contraindications.",
  },
  {
    id: "dir-contact-urgently",
    kind: "direction",
    category: "safety-direction",
    pattern: /^contact your doctor urgently if you experience these\.?$/i,
    why: "General direction to seek help; asserts no medicine-specific fact. 'These' refers to the sentence before it in the source text.",
  },
  {
    id: "dir-report-persistent",
    kind: "direction",
    category: "safety-direction",
    pattern: /^report persistent or worrying side effects early\.?$/i,
    why: "General direction; asserts no medicine-specific fact.",
  },
  {
    id: "dir-do-not-stop-suddenly",
    kind: "direction",
    category: "safety-direction",
    pattern: /^do not stop suddenly[;:,]?\s*(discuss any change with your doctor( first)?)?\.?$/i,
    why: "Cautionary direction to speak to a prescriber before stopping. Shown as standard wording, not confirmed for this medicine.",
  },
  {
    id: "dir-tell-every-doctor",
    kind: "direction",
    category: "interaction-direction",
    pattern: /^tell every doctor and pharmacist you see that you take this medicine\.?$/i,
    why: "General direction; asserts no medicine-specific fact.",
  },
  {
    id: "dir-tell-everything-you-take",
    kind: "direction",
    category: "interaction-direction",
    pattern: /^tell your doctor and pharmacist about everything you take, including over-the-counter and herbal products\.?$/i,
    why: "General direction; asserts no medicine-specific fact.",
  },
  {
    id: "dir-avoid-alcohol-unless-safe",
    kind: "direction",
    category: "interaction-direction",
    pattern: /^avoid alcohol unless your doctor says it is safe\.?$/i,
    why: "Cautionary direction deferring to the doctor; asserts no medicine-specific fact.",
  },
  {
    id: "dir-share-history",
    kind: "direction",
    category: "interaction-direction",
    pattern: /^always share your full medical history and medicine list with your doctor\.?$/i,
    why: "General direction; asserts no medicine-specific fact.",
  },
  {
    id: "dir-keep-appointments",
    kind: "direction",
    category: "monitoring-direction",
    pattern: /^keep every appointment: these checks are how the treatment stays safe\.?$/i,
    why: "General direction to attend follow-up; asserts no medicine-specific fact.",
  },
];

export function matchSharedClaim(sentence: string): SharedClaimRule | null {
  const s = sentence.replace(/\s+/g, " ").trim();
  return SHARED_CLAIM_RULES.find((r) => r.pattern.test(s)) ?? null;
}

const split = (t: string) => t.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+/).filter(Boolean);

/**
 * Regex-only split of a text into sentences that may be shown and sentences withheld as unconfirmed claims.
 * For client components that cannot import the registry. Never rewrites a sentence.
 */
export function splitWithheld(text: string): { shown: string; withheld: string[] } {
  const shown: string[] = [];
  const withheld: string[] = [];
  for (const s of split(text)) (matchSharedClaim(s)?.kind === "claim" ? withheld : shown).push(s);
  return { shown: shown.join(" "), withheld };
}
