/**
 * Deterministic question templates — thirteen stamps over the locked
 * medical data layer.
 *
 * HARD RULES (medical safety, non-negotiable):
 *   - A template may only REARRANGE facts that exist verbatim in the drug
 *     data. It may never synthesise a new medical claim.
 *   - The correct option is always a fact from the drug being asked about.
 *   - Distractors are always real values of the SAME dimension pulled
 *     from OTHER drugs' data — never invented, never reworded.
 *   - The explanation quotes the data's own rationale/description text.
 *
 * Availability is per-drug and data-driven: when a drug lacks a fact,
 * that template simply produces no question for it.
 */

import { brainRegions } from "@/lib/kyp/data/brain";
import type { Drug } from "@/lib/kyp/data/types";
import type { PoolQuestion, QuestionSource } from "./types";

/* ============================================================
   Normalisation helpers (lossless, display-only)
   ============================================================ */

/** "Serotonin (5-HT)" → "Serotonin"; "MAOIs (phenelzine…)" → "MAOIs". */
function stripParens(text: string): string {
  return text.split(" (")[0].split(" — ")[0].trim();
}

/** Extract the first time-range phrase from a half-life string. */
function extractHalfLife(text: string): string | null {
  const match = text.match(
    /~?\s*\d+(?:[.,]\d+)?\s*(?:[–—-]\s*\d+(?:[.,]\d+)?)?\s*(?:hours?|days?|minutes?)/
  );
  return match ? match[0].replace(/~/g, "").trim() : null;
}

/** "N-desmethylsertraline — pharmacologically active…" → the metabolite name. */
function extractMetaboliteName(text: string): string | null {
  if (/^no active metabolite/i.test(text.trim())) return null;
  const head = stripParens(text);
  return head.length >= 3 ? head : null;
}

/* ============================================================
   Template plumbing
   ============================================================ */

interface TemplateContext {
  drug: Drug;
  allDrugs: Drug[];
}

export interface TemplateResult {
  questions: Omit<PoolQuestion, "identity">[];
}

type TemplateFn = (ctx: TemplateContext) => TemplateResult;

function source(
  drug: Drug,
  sectionLabel: string,
  sectionHref: string
): QuestionSource {
  return {
    sourceName: drug.genericName,
    sourceSlug: drug.slug,
    sectionLabel,
    sectionHref,
    sourceClass: drug.drugClassLabel,
  };
}

/**
 * The thirteen templates. Each returns every question it can stamp for
 * ctx.drug (variants over multiple facts are separate questions).
 */
export const TEMPLATES: Record<string, TemplateFn> = {
  /* 1 ── drug-class ─────────────────────────────────────────────── */
  "drug-class": ({ drug, allDrugs }) => {
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.drugClassLabel !== drug.drugClassLabel)
          .map((d) => d.drugClassLabel)
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: [
        {
          question: `Which medication class does ${drug.genericName} belong to?`,
          options: [drug.drugClassLabel, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${drug.genericName} is ${drug.drugClassFullName} — class label "${drug.drugClassLabel}" in the KYP medication registry.`,
          evidence: `${drug.genericName} · ${drug.drugClassFullName}`,
          source: source(drug, "Overview", "/drugs/" + drug.slug + "#quick-facts"),
          templateId: "drug-class",
        },
      ],
    };
  },

  /* 2 ── class-member (inverse) ────────────────────────────────── */
  "class-member": ({ drug, allDrugs }) => {
    const distractorPool = allDrugs
      .filter((d) => d.drugClassLabel !== drug.drugClassLabel)
      .map((d) => d.genericName);
    if (new Set(distractorPool).size < 3) return { questions: [] };
    return {
      questions: [
        {
          question: `Which of the following medications is a ${drug.drugClassLabel}?`,
          options: [drug.genericName, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${drug.genericName} is a ${drug.drugClassLabel} (${drug.drugClassFullName}).`,
          evidence: `${drug.genericName} · ${drug.drugClassFullName}`,
          source: source(drug, "Overview", "/drugs/" + drug.slug + "#quick-facts"),
          templateId: "class-member",
        },
      ],
    };
  },

  /* 3 ── neurotransmitter ────────────────────────────────────────── */
  neurotransmitter: ({ drug, allDrugs }) => {
    const correct = stripParens(drug.neurotransmitters[0] ?? "");
    if (!correct) return { questions: [] };
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .map((d) => stripParens(d.neurotransmitters[0] ?? ""))
          .filter(Boolean)
          .filter((n) => n !== correct)
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: [
        {
          question: `Which neurotransmitter system does ${drug.genericName} primarily modulate?`,
          options: [correct, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${drug.genericName} modulates ${drug.neurotransmitters.join(", ")} — as documented in its neuroscience profile.`,
          evidence: drug.neurotransmitters.join("; "),
          source: source(drug, "Neurotransmitters", "/drugs/" + drug.slug + "#neurotransmitters"),
          templateId: "neurotransmitter",
        },
      ],
    };
  },

  /* 4 ── brain-region ───────────────────────────────────────────── */
  "brain-region": ({ drug, allDrugs }) => {
    const regionName = (id: string) =>
      brainRegions.find((r) => r.id === id)?.name ?? null;
    const own = drug.brainRegionIds
      .map(regionName)
      .filter((n): n is string => Boolean(n));
    if (own.length === 0) return { questions: [] };
    const distractorPool = [
      ...new Set(
        allDrugs
          .flatMap((d) => d.brainRegionIds.map(regionName))
          .filter((n): n is string => Boolean(n))
          .filter((n) => !own.includes(n))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    const correct = own[0];
    const region = brainRegions.find(
      (r) => r.name === correct
    );
    return {
      questions: [
        {
          question: `In which brain region does ${drug.genericName} have clinically significant effects?`,
          options: [correct, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: region
            ? `${region.name} — ${region.functions.join(", ")}. ${drug.genericName} acts on: ${own.join(", ")}.`
            : `${drug.genericName} acts on: ${own.join(", ")}.`,
          evidence: `Brain regions: ${own.join(", ")}`,
          source: source(drug, "Brain regions", "/drugs/" + drug.slug + "#brain-regions"),
          templateId: "brain-region",
        },
      ],
    };
  },

  /* 5 ── indication (FDA-approved) ──────────────────────────────── */
  indication: ({ drug, allDrugs }) => {
    const approved = drug.indications.filter((i) => i.status === "fda-approved");
    if (approved.length === 0) return { questions: [] };
    const ownNames = drug.indications.map((i) => i.name);
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.indications.map((i) => i.name))
          .filter((name) => !ownNames.includes(name))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: approved.slice(0, 6).map((ind) => ({
        question: `${drug.genericName} is FDA-approved for which of the following?`,
        options: [ind.name, ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: `${ind.name} — ${ind.description}`,
        evidence: `Indication: ${ind.name} [${ind.status}]`,
        source: source(drug, "Clinical uses", "/drugs/" + drug.slug + "#clinical-uses"),
        templateId: "indication",
      })),
    };
  },

  /* 6 ── common-side-effect ─────────────────────────────────────── */
  "common-side-effect": ({ drug, allDrugs }) => {
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.commonSideEffects.map((s) => s.name))
          .filter((name) => !drug.commonSideEffects.some((s) => s.name === name))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: drug.commonSideEffects.slice(0, 6).map((se) => ({
        question: `Which of the following is a common side effect of ${drug.genericName}?`,
        options: [se.name, ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: `${se.name} — ${se.description}`,
        evidence: `Common side effect: ${se.name} (${se.frequency})`,
        source: source(drug, "Side effects", "/drugs/" + drug.slug + "#side-effects"),
        templateId: "common-side-effect",
      })),
    };
  },

  /* 7 ── serious-side-effect ────────────────────────────────────── */
  "serious-side-effect": ({ drug, allDrugs }) => {
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.seriousSideEffects.map((s) => s.name))
          .filter((name) => !drug.seriousSideEffects.some((s) => s.name === name))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: drug.seriousSideEffects.slice(0, 6).map((se) => ({
        question: `Which of the following is a serious side effect of ${drug.genericName}?`,
        options: [se.name, ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: se.management
          ? `${se.name} — ${se.description} Management: ${se.management}`
          : `${se.name} — ${se.description}`,
        evidence: `Serious side effect: ${se.name} (${se.severity})`,
        source: source(drug, "Side effects", "/drugs/" + drug.slug + "#side-effects"),
        templateId: "serious-side-effect",
      })),
    };
  },

  /* 8 ── monitoring-parameter ────────────────────────────────────── */
  "monitoring-parameter": ({ drug, allDrugs }) => {
    const ownNames = drug.monitoring.map((m) => m.parameter);
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.monitoring.map((m) => m.parameter))
          .filter((name) => !ownNames.includes(name))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: drug.monitoring.slice(0, 6).map((m) => ({
        question: `Which parameter is part of the monitoring plan for ${drug.genericName}?`,
        options: [m.parameter, ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: `${m.parameter} — ${m.frequency}. ${m.rationale}`,
        evidence: `Monitoring: ${m.parameter} (${m.frequency})`,
        source: source(drug, "Monitoring", "/drugs/" + drug.slug + "#monitoring"),
        templateId: "monitoring-parameter",
      })),
    };
  },

  /* 9 ── contraindication ───────────────────────────────────────── */
  contraindication: ({ drug, allDrugs }) => {
    const ownNames = drug.contraindications.map((c) => c.name);
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.contraindications.map((c) => c.name))
          .filter((name) => !ownNames.includes(name))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: drug.contraindications.slice(0, 5).map((c) => ({
        question: `Which of the following is a contraindication for ${drug.genericName}?`,
        options: [c.name, ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: `${c.name} (${c.severity}) — ${c.rationale}`,
        evidence: `Contraindication: ${c.name} (${c.severity})`,
        source: source(drug, "Contraindications", "/drugs/" + drug.slug + "#contraindications"),
        templateId: "contraindication",
      })),
    };
  },

  /* 10 ── interaction (QA evidence anchor) ──────────────────────── */
  interaction: ({ drug, allDrugs }) => {
    const ownNames = drug.interactions.map((i) => stripParens(i.drug));
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.interactions.map((i) => stripParens(i.drug)))
          .filter((name) => !ownNames.includes(name) && name.length > 0)
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: drug.interactions.slice(0, 6).map((i) => ({
        question: `Which of the following interacts with ${drug.genericName}?`,
        options: [stripParens(i.drug), ...distractorPool.slice(0, 3)],
        correctIndex: 0,
        explanation: `${stripParens(i.drug)} (${i.severity}) — ${i.mechanism} ${i.action}`,
        evidence: `Interaction: ${i.drug} (${i.severity})`,
        source: source(drug, "Interactions", "/drugs/" + drug.slug + "#interactions"),
        templateId: "interaction",
      })),
    };
  },

  /* 11 ── half-life ─────────────────────────────────────────────── */
  "half-life": ({ drug, allDrugs }) => {
    const correct = extractHalfLife(drug.mechanism.halfLife);
    if (!correct) return { questions: [] };
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .map((d) => extractHalfLife(d.mechanism.halfLife))
          .filter((h): h is string => Boolean(h) && h !== correct)
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: [
        {
          question: `What is the approximate half-life of ${drug.genericName}?`,
          options: [correct, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${drug.genericName}: ${drug.mechanism.halfLife}`,
          evidence: `Half-life: ${drug.mechanism.halfLife}`,
          source: source(drug, "Mechanism", "/drugs/" + drug.slug + "#mechanism"),
          templateId: "half-life",
        },
      ],
    };
  },

  /* 12 ── black-box-warning ─────────────────────────────────────── */
  "black-box-warning": ({ drug, allDrugs }) => {
    if (drug.blackBoxWarnings.length === 0) return { questions: [] };
    const ownTitles = drug.blackBoxWarnings.map((b) => b.title);
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .flatMap((d) => d.blackBoxWarnings.map((b) => b.title))
          .filter((t) => !ownTitles.includes(t))
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    const first = drug.blackBoxWarnings[0];
    return {
      questions: [
        {
          question: `Which safety issue carries a boxed (black-box) warning for ${drug.genericName}?`,
          options: [first.title, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${first.title} — ${first.text}`,
          evidence: `Black-box warning: ${first.title}`,
          source: source(drug, "Contraindications", "/drugs/" + drug.slug + "#contraindications"),
          templateId: "black-box-warning",
        },
      ],
    };
  },

  /* 13 ── active-metabolite ─────────────────────────────────────── */
  "active-metabolite": ({ drug, allDrugs }) => {
    if (!drug.mechanism.activeMetabolite) return { questions: [] };
    const correct = extractMetaboliteName(drug.mechanism.activeMetabolite);
    if (!correct) return { questions: [] };
    const distractorPool = [
      ...new Set(
        allDrugs
          .filter((d) => d.slug !== drug.slug)
          .map((d) => (d.mechanism.activeMetabolite ? extractMetaboliteName(d.mechanism.activeMetabolite) : null))
          .filter((n): n is string => Boolean(n) && n !== correct)
      ),
    ];
    if (distractorPool.length < 3) return { questions: [] };
    return {
      questions: [
        {
          question: `Which active metabolite contributes to ${drug.genericName}'s pharmacological effect?`,
          options: [correct, ...distractorPool.slice(0, 3)],
          correctIndex: 0,
          explanation: `${drug.genericName}: ${drug.mechanism.activeMetabolite}`,
          evidence: `Active metabolite: ${drug.mechanism.activeMetabolite}`,
          source: source(drug, "Mechanism", "/drugs/" + drug.slug + "#mechanism"),
          templateId: "active-metabolite",
        },
      ],
    };
  },
};

/** Ordered template ids (stable — used for balancing + tests). */
export const TEMPLATE_IDS = Object.keys(TEMPLATES);

export const TEMPLATE_COUNT = TEMPLATE_IDS.length;
