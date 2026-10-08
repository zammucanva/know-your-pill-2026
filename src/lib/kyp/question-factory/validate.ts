/**
 * Question validation: the quality gate every generated question must pass.
 *
 * The decisive check is CLAIM VERIFICATION. Each option carries the claim
 * it asserts (one or more subject-relation-object links). The validator
 * recomputes each option's truth against the fact index, independently of
 * the template that built the question:
 *
 *   positive question:  correct option TRUE,  every distractor FALSE
 *   negative question:  correct option FALSE, every distractor TRUE
 *
 * An entity not documented for the subject counts as FALSE (closed world),
 * which is why stems say "documented" and never "true in general". This
 * proves exactly one correct answer, that the answer exists among the
 * options, and that no distractor is defensible under the data.
 */

import { isTooSimilar } from "./distractors";
import { contentTokens, normalizeText } from "./normalize";
import type { FactStore } from "./facts";
import type { GeneratedQuestion, OptionClaim, QuestionStatus } from "./types";

export interface Violation {
  code: string;
  detail: string;
}

const VALID_STATUS: QuestionStatus[] = ["GENERATED", "VALIDATED", "PUBLISHED", "REJECTED", "ARCHIVED"];
const PLACEHOLDER = /undefined|\bnull\b|\[object|NaN|\$\{/;
const EM_DASH = "—";
/** Options this similar cannot both be told apart by a learner. */
const OPTION_SIMILARITY = 0.7;

/** True when every link of the claim holds in the store. */
export function claimHolds(store: FactStore, claim: OptionClaim): boolean {
  return claim.links.every((link) =>
    link.relations.some((relation) => store.holds(relation, link.subjectId, link.objectId))
  );
}

export function validateQuestion(q: GeneratedQuestion, store: FactStore): Violation[] {
  const out: Violation[] = [];
  const bad = (code: string, detail: string) => out.push({ code, detail });

  /* structure */
  if (q.options.length !== 4) bad("OPTION_COUNT", `expected 4 options, got ${q.options.length}`);
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
    bad("CORRECT_INDEX", `correctIndex ${q.correctIndex} is not an option`);
  }
  if (!VALID_STATUS.includes(q.status)) bad("STATUS", `invalid status ${q.status}`);

  /* option text */
  const norms = q.options.map((o) => normalizeText(o.text));
  if (norms.some((n) => n.length === 0)) bad("EMPTY_OPTION", "an option is empty");
  if (new Set(norms).size !== norms.length) bad("DUPLICATE_OPTION", "two options have the same text");
  // Distinct drug names (and drug/class pairings) are different things even
  // when the strings overlap ("zopiclone" / "eszopiclone"), so word overlap
  // says nothing about ambiguity for them.
  const isIdentity = (id?: string) => !!id && (id.startsWith("drug:") || id.startsWith("pair:"));
  for (let i = 0; i < q.options.length; i++) {
    for (let j = i + 1; j < q.options.length; j++) {
      if (isIdentity(q.options[i].entityId) && isIdentity(q.options[j].entityId)) continue;
      const guard = [{ norm: norms[i], tokens: contentTokens(q.options[i].text) }];
      if (isTooSimilar(q.options[j].text, guard, OPTION_SIMILARITY)) {
        bad("AMBIGUOUS_OPTIONS", `options ${i + 1} and ${j + 1} are too similar to tell apart`);
      }
    }
  }

  /* claim verification: exactly one correct answer under the data */
  if (q.claims.length !== q.options.length) {
    bad("CLAIM_COUNT", "every option must carry a claim");
  } else {
    const positive = q.polarity === "positive";
    let correctCount = 0;
    q.claims.forEach((claim) => {
      if (claim.links.length === 0) bad("EMPTY_CLAIM", `option ${claim.optionIndex + 1} has no claim`);
      const truth = claimHolds(store, claim);
      const isCorrectOption = claim.optionIndex === q.correctIndex;
      const shouldBeTrue = isCorrectOption ? positive : !positive;
      if (truth !== shouldBeTrue) {
        bad(
          isCorrectOption ? "CORRECT_NOT_SUPPORTED" : "DISTRACTOR_DEFENSIBLE",
          `option ${claim.optionIndex + 1} is ${truth ? "supported" : "unsupported"} by the data but should be ${shouldBeTrue ? "supported" : "unsupported"}`
        );
      }
      if (truth === positive) correctCount++;
    });
    if (correctCount !== 1) bad("NOT_EXACTLY_ONE_CORRECT", `${correctCount} options satisfy the question`);
  }

  /* provenance */
  const p = q.provenance;
  if (!p.batchId) bad("PROVENANCE", "missing batchId");
  if (!p.templateId || !p.templateVersion || !p.generatorVersion) bad("PROVENANCE", "missing template/generator version");
  if (!Number.isFinite(p.seed)) bad("PROVENANCE", "missing seed");
  if (p.factIds.length < 1) bad("NO_SOURCE_FACTS", "question cites no source fact");
  for (const id of p.factIds) {
    if (!store.byId.has(id)) bad("UNKNOWN_FACT", `fact ${id} does not exist in the store`);
  }
  if (p.sources.length < 1) bad("NO_SOURCE_REF", "question has no source reference");

  /* fingerprints */
  if (!q.fingerprint) bad("FINGERPRINT", "missing semantic fingerprint");
  if (!q.structureFingerprint) bad("FINGERPRINT", "missing structure fingerprint");

  /* explanation: must come from the facts used */
  if (!q.explanation.trim()) bad("EXPLANATION", "empty explanation");
  else {
    const grounded = p.factIds.some((id) => {
      const fact = store.byId.get(id);
      return fact ? q.explanation.includes(fact.explanation) : false;
    });
    if (!grounded) bad("EXPLANATION_UNGROUNDED", "explanation does not quote any source fact");
  }

  /* text hygiene */
  const text = [q.stem, q.explanation, ...q.options.map((o) => o.text)].join("\n");
  if (PLACEHOLDER.test(text)) bad("PLACEHOLDER", "unresolved placeholder in text");
  // The stem and options are what the factory writes or selects, so they must
  // be dash-free. Explanations quote the source verbatim and may carry its own.
  if ([q.stem, ...q.options.map((o) => o.text)].some((s) => s.includes(EM_DASH))) {
    bad("EM_DASH", "stem or option contains an em dash");
  }
  if (!q.stem.trim().endsWith("?")) bad("STEM", "stem is not phrased as a question");
  if (/\bnot\b.*\bnot\b/i.test(q.stem)) bad("DOUBLE_NEGATIVE", "stem contains a double negative");

  return out;
}
