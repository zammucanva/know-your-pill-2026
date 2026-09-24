import type { ConcernDefinition, ConcernId } from "./types";

/* ============================================================
   Concern definitions — Phase 5 (Class Comparison)
   ------------------------------------------------------------
   SUPPORT AUDIT (what the canonical registry actually carries):

   Every "effect" concern below was validated against all 143 drug
   records: a concern is defined ONLY if the registry's documented
   adverse-effect entries (commonSideEffects / seriousSideEffects,
   each carrying a verbatim frequency band) populate it across
   multiple medications. Coverage measured at definition time
   (entries OR an informative Prescriber's Guide note):

     weight-metabolic     115 of 143 medications carry a basis
     sedation             116 of 143
     sleep-activation      61 of 143
     sexual-function       36 of 143
     eps-akathisia         30 of 143
     tardive-dyskinesia    29 of 143
     prolactin             21 of 143
     anticholinergic       62 of 143
     qt-cardiac            34 of 143
     orthostasis           28 of 143
     nausea-gi             59 of 143
     monitoring-burden    143 of 143 (structured monitoring array)
     interaction-burden   143 of 143 (structured interactions array)

   NOT implemented (no sufficient canonical basis — listed for the
   record, per the Phase 5 brief):
     - standalone "appetite effects": folded into weight-metabolic
       (appetite entries are weight/metabolic entries by name)
     - standalone "activation": folded into sleep-activation
       (activation entries are documented together with insomnia)
     - any numerical severity score: the registry carries frequency
       and severity BANDS, not validated scales — so no score exists

   RULES (non-negotiable):
   - a pattern matches the documented entry NAME only — never the
     description — so a match is always a claim the source itself
     makes in its own words;
   - matched entries are displayed VERBATIM (name + band + severity
     + description), so any imperfect pattern match is visible to
     the reader instead of hidden inside a score;
   - "Data not available" is shown when no entry and no informative
     Prescriber's Guide note matches — absence of documentation is
     never silently read as absence of effect.
   ============================================================ */

/** Placeholders in the Prescriber's Guide one-liner fields that carry no drug-specific data. */
export const PRESCRIBER_NOTE_PLACEHOLDERS: readonly string[] = [
  "See product information and class comparison.",
  "Agent-specific.",
  "Variable (agent-specific).",
];

const EFFECT_BASIS =
  "Based on documented adverse-effect entries in this medication's own profile — " +
  "frequency bands (very common / common / uncommon / rare) are the documented bands, verbatim.";

const EFFECT_BASIS_WITH_PG =
  EFFECT_BASIS +
  " Where the Prescriber's Guide layer carries a one-line note, it is shown verbatim.";

export const CONCERN_DEFINITIONS: ConcernDefinition[] = [
  {
    id: "weight-metabolic",
    label: "Weight & metabolic",
    question: "How do these medications differ in weight and metabolic impact?",
    blurb:
      "Documented weight gain or loss, appetite change, dyslipidaemia and glucose effects.",
    kind: "effect",
    patterns: [
      /weight gain|weight loss|appetite|\bmetabolic\b|dyslipid|hyperglyc|hyperglyca|diabetic keto|cholesterol|triglyceride|obesity|anorexia/i,
    ],
    prescriberNoteField: "weightGain",
    basis: EFFECT_BASIS_WITH_PG,
  },
  {
    id: "sedation",
    label: "Sedation & drowsiness",
    question: "How do these medications differ in daytime sedation?",
    blurb:
      "Documented sedation, somnolence, drowsiness and next-morning hangover effects.",
    kind: "effect",
    patterns: [/sedat|somnolen|drows|grogginess|hangover/i],
    prescriberNoteField: "sedation",
    basis: EFFECT_BASIS_WITH_PG,
  },
  {
    id: "sleep-activation",
    label: "Sleep & activation",
    question: "How do these medications differ in insomnia, activation and sleep effects?",
    blurb:
      "Documented insomnia, jitteriness/activation, abnormal dreams and complex sleep behaviours.",
    kind: "effect",
    patterns: [
      /insomn|jitteri|nervousness|activation(?! of (?:mania|hypomania))|dream|nightmare|complex sleep|sleep-walk|sleepwalk|sleep paralys|hypnagogic|enuresis|sleep disturbance/i,
    ],
    basis: EFFECT_BASIS,
  },
  {
    id: "sexual-function",
    label: "Sexual adverse effects",
    question: "How do these medications differ in sexual adverse effects?",
    blurb:
      "Documented sexual dysfunction, libido, erectile and ejaculation effects.",
    kind: "effect",
    patterns: [/sexual|libido|erectile|impotence|priapism|ejaculat|anorgasm|orgasm/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "eps-akathisia",
    label: "EPS & akathisia (acute)",
    question: "How do these medications differ in acute extrapyramidal symptoms?",
    blurb:
      "Documented acute parkinsonism, dystonia, rigidity and akathisia — not tardive effects.",
    kind: "effect",
    patterns: [/extrapyramidal|\bEPS\b|akathisia|parkinsonism|dystonia/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "tardive-dyskinesia",
    label: "Tardive dyskinesia",
    question: "How do these medications differ in tardive dyskinesia documentation?",
    blurb: "Documented tardive dyskinesia entries (long-term movement effects).",
    kind: "effect",
    patterns: [/tardive/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "prolactin",
    label: "Prolactin effects",
    question: "How do these medications differ in prolactin elevation?",
    blurb: "Documented hyperprolactinaemia, galactorrhoea and gynaecomastia entries.",
    kind: "effect",
    patterns: [/prolactin|galactorrh|gynaecomast|gynecomast/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "anticholinergic",
    label: "Anticholinergic burden",
    question: "How do these medications differ in anticholinergic burden?",
    blurb:
      "Documented dry mouth, constipation, blurred vision, urinary retention, glaucoma precipitation and anticholinergic delirium entries.",
    kind: "effect",
    patterns: [
      /anticholinergic|dry mouth|constipation|blurred vision|urinary hesitation|urinary retention|urinary hesitancy|glaucoma|paralytic ileus|\bileus\b/i,
    ],
    basis: EFFECT_BASIS,
  },
  {
    id: "qt-cardiac",
    label: "QT & cardiac rhythm",
    question: "How do these medications differ in QT and cardiac rhythm considerations?",
    blurb:
      "Documented QT/QTC prolongation, torsades, conduction and arrhythmia entries.",
    kind: "effect",
    patterns: [
      /\bQT[cs]?\b|torsades|QRS|arrhythm|cardiotox|heart block|bradycardia|sudden (?:cardiac )?death|conduction/i,
    ],
    basis: EFFECT_BASIS,
  },
  {
    id: "orthostasis",
    label: "Orthostatic hypotension",
    question: "How do these medications differ in orthostatic hypotension?",
    blurb: "Documented orthostatic hypotension and postural blood-pressure effects.",
    kind: "effect",
    patterns: [/orthostat|postural hypotension/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "nausea-gi",
    label: "Nausea & GI effects",
    question: "How do these medications differ in nausea and GI effects?",
    blurb:
      "Documented nausea, vomiting, diarrhoea, dyspepsia and abdominal discomfort entries.",
    kind: "effect",
    patterns: [/nausea|diarrho|vomiting|dyspepsia|gi upset|gastrointestinal|abdominal pain|flatulence/i],
    basis: EFFECT_BASIS,
  },
  {
    id: "monitoring-burden",
    label: "Monitoring requirements",
    question: "How do these medications differ in what needs monitoring?",
    blurb:
      "Each medication's own monitoring list — parameters and check frequencies, verbatim.",
    kind: "monitoring",
    basis:
      "Based on the monitoring parameters each medication's own page documents — counts and names, never scored.",
  },
  {
    id: "interaction-burden",
    label: "Interaction considerations",
    question: "How do these medications differ in documented interaction considerations?",
    blurb:
      "Each medication's own interaction list, tallied by documented severity — check specific pairs in the Interaction Checker.",
    kind: "interactions",
    basis:
      "Based on the interaction entries each medication's own page documents — severity tallies verbatim, never scored. Use the Interaction Checker for specific pairs.",
  },
];

/** Concern ids in definition (curated) order. */
export const CONCERN_ORDER: ConcernId[] = CONCERN_DEFINITIONS.map((c) => c.id);

const BY_ID = new Map(CONCERN_DEFINITIONS.map((c) => [c.id, c]));

export function getConcernDefinition(id: ConcernId): ConcernDefinition {
  const def = BY_ID.get(id);
  if (!def) throw new Error(`unknown concern id: ${id}`);
  return def;
}

/** Effect-kind concern ids (used for the deterministic default selection). */
export const EFFECT_CONCERN_IDS: ConcernId[] = CONCERN_DEFINITIONS.filter(
  (c) => c.kind === "effect"
).map((c) => c.id);
