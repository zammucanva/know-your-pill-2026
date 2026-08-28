import type { SearchableItem } from "./types";
import { substances } from "./drugs";
import { drugClassList } from "./classes";
import { brainRegions } from "./brain";
import { pathways } from "./brain";
import { sideEffects } from "./side-effects";
import { drugs } from "./drugs/index";
import { diseases } from "./diseases";
import { substancePages } from "./substances";

/**
 * Universal search index — single source of truth for the Spotlight search.
 *
 * Every entry has: id, title, type, description, href, keywords.
 * Keywords include synonyms and common search terms so fuzzy search
 * feels magical even before we ship a real fuzzy matcher.
 *
 * CANONICAL ROUTES ONLY — no legacy .html routes.
 * Migrated substances point to /substances/[slug].
 * Unmigrated substances are excluded from the index (their .html routes
 * return 404 and would produce broken search results).
 */
export const searchIndex: SearchableItem[] = [
  // ─── Medications (canonical drug pages) ───────────────────────────
  ...drugs.flatMap((d) => {
    const keywords = [
      d.genericName,
      ...d.brandNames,
      d.drugClassLabel,
      d.drugClassFullName,
      ...d.indications.map((i) => i.name),
      ...d.neurotransmitters,
      ...d.receptors,
      ...d.relatedConditions.map((c) => c.name),
      // Common abbreviations / synonyms for antidepressant classes
      ...(d.drugClass === "ssri"
        ? ["SSRI", "Selective Serotonin Reuptake Inhibitor", "antidepressant"]
        : []),
      ...(d.drugClass === "snri"
        ? ["SNRI", "Serotonin Norepinephrine Reuptake Inhibitor", "antidepressant"]
        : []),
      ...(d.drugClassLabel === "NDRI"
        ? ["NDRI", "Norepinephrine Dopamine Reuptake Inhibitor", "antidepressant"]
        : []),
      ...(d.drugClassLabel === "NaSSA"
        ? ["NaSSA", "Noradrenergic and Specific Serotonergic Antidepressant", "antidepressant"]
        : []),
      ...(d.drugClass === "tca"
        ? ["TCA", "Tricyclic Antidepressant", "antidepressant"]
        : []),
      // India-first: add Indian brand names as searchable keywords
      ...(d.indianPractice?.brands?.map((b) => b.name) ?? []),
      // India Layer: add CBME competency codes as searchable keywords
      ...(d.cbmeMapping?.competencyCodes ?? []),
      // India Layer: add exam tags as searchable keywords
      ...(d.examFrequency ? ["NEET PG", "INICET", "FMGE", "MBBS"] : []),
    ].filter(Boolean) as string[];
    return [{
      id: `medication-${d.slug}`,
      title: d.genericName,
      type: "drug" as const,
      description: d.tagline,
      href: `/drugs/${d.slug}`,
      keywords,
    }];
  }),

  // ─── Substance pages (migrated canonical /substances/[slug]) ──────
  ...substancePages.map((s) => ({
    id: `substance-${s.slug}`,
    title: s.disorderName,
    type: "substance" as const,
    description: s.tagline,
    href: `/substances/${s.slug}`,
    keywords: [
      s.name,
      s.disorderName,
      s.slug,
      s.neurotransmitter,
      // Add common search terms for each substance
      ...(s.slug === "alcohol" ? ["ethanol", "alcoholism", "alcohol dependence", "Wernicke", "Korsakoff", "delirium tremens", "DT", "CAGE", "BAC", "disulfiram"] : []),
      ...(s.slug === "opioids" ? ["opioid", "heroin", "morphine", "naloxone", "methadone", "buprenorphine", "overdose", "respiratory depression", "opioid withdrawal"] : []),
      ...(s.slug === "cannabis" ? ["marijuana", "THC", "cannabinoid", "CB1", "hashish", "ganja", "bhang", "cannabis psychosis", "amotivational"] : []),
    ].filter(Boolean),
  })),

  // ─── Diseases (canonical /diseases/[slug]) ────────────────────────
  ...diseases.map((d) => ({
    id: `disease-${d.slug}`,
    title: d.name,
    type: "disease" as const,
    description: d.tagline,
    href: `/diseases/${d.slug}`,
    keywords: [
      d.name,
      d.shortName,
      d.slug,
      d.category,
      ...d.differentialDiagnosis.map((dx) => dx.condition),
    ].filter(Boolean),
  })),

  // ─── Drug classes ─────────────────────────────────────────────────
  ...drugClassList.map((c) => ({
    id: `class-${c.id}`,
    title: c.name,
    type: "class" as const,
    description: c.description,
    href: `/#categories`,
    keywords: [c.name, c.shortName, c.neurotransmitter],
  })),

  // ─── Brain regions ────────────────────────────────────────────────
  ...brainRegions.map((r) => ({
    id: `brain-${r.id}`,
    title: r.name,
    type: "brain-region" as const,
    description: `${r.functions.slice(0, 2).join(", ")}. ${r.disorders.length} related disorders.`,
    href: `/#knowledge-graph`,
    keywords: [r.name, r.neurotransmitter, ...r.functions, ...r.disorders],
  })),

  // ─── Pathways ─────────────────────────────────────────────────────
  ...pathways.map((p) => ({
    id: `pathway-${p.id}`,
    title: p.name,
    type: "pathway" as const,
    description: p.function,
    href: `/#knowledge-graph`,
    keywords: [p.name, p.neurotransmitter, p.origin, p.termination, ...p.relatedDrugs],
  })),

  // ─── Side effects ─────────────────────────────────────────────────
  ...sideEffects.map((se) => ({
    id: `side-effect-${se.id}`,
    title: se.name,
    type: "side-effect" as const,
    description: se.description,
    href: `/#side-effects`,
    keywords: [se.name, se.receptor, se.pathway, ...se.drugs],
  })),

  // ─── Neurotransmitters (curated) ──────────────────────────────────
  {
    id: "nt-serotonin",
    title: "Serotonin (5-HT)",
    type: "neurotransmitter",
    description: "Mood, sleep, appetite, and cognition. Synthesised in raphe nuclei. Target of SSRIs, SNRIs, MAOIs, triptans.",
    href: "/#knowledge-graph",
    keywords: ["serotonin", "5-HT", "5-hydroxytryptamine", "SSRI", "mood", "raphe"],
  },
  {
    id: "nt-dopamine",
    title: "Dopamine (DA)",
    type: "neurotransmitter",
    description: "Reward, motivation, motor control, and executive function. Four major pathways. Target of stimulants and antipsychotics.",
    href: "/#knowledge-graph",
    keywords: ["dopamine", "DA", "reward", "VTA", "mesolimbic", "nigrostriatal", "D2", "antipsychotic"],
  },
  {
    id: "nt-gaba",
    title: "GABA",
    type: "neurotransmitter",
    description: "Primary inhibitory neurotransmitter. Target of benzodiazepines, barbiturates, alcohol, z-drugs.",
    href: "/#knowledge-graph",
    keywords: ["GABA", "inhibitory", "benzodiazepine", "barbiturate", "alcohol", "anxiolytic"],
  },
  {
    id: "nt-glutamate",
    title: "Glutamate",
    type: "neurotransmitter",
    description: "Primary excitatory neurotransmitter. NMDA & AMPA receptors. Target of ketamine, PCP, memantine.",
    href: "/#knowledge-graph",
    keywords: ["glutamate", "NMDA", "AMPA", "excitatory", "ketamine", "PCP", "memantine"],
  },
  {
    id: "nt-norepinephrine",
    title: "Norepinephrine (NE)",
    type: "neurotransmitter",
    description: "Arousal, attention, stress response. Target of SNRIs, TCAs, stimulants, alpha-blockers.",
    href: "/#knowledge-graph",
    keywords: ["norepinephrine", "noradrenaline", "NE", "SNRI", "TCA", "stimulant"],
  },

  // ─── Safety / Emergency ───────────────────────────────────────────
  {
    id: "guide-emergency",
    title: "When to Call Emergency",
    type: "patient-guide",
    description: "Red flags that require immediate medical attention — overdose, serotonin syndrome, severe withdrawal.",
    href: "/#emergency",
    keywords: ["emergency", "red flag", "overdose", "serotonin syndrome", "crisis", "112", "14416", "naloxone", "suicide"],
  },
];

export const searchTypeLabels: Record<SearchableItem["type"], string> = {
  drug: "Medication",
  substance: "Substance",
  disease: "Disease",
  class: "Drug Class",
  neurotransmitter: "Neurotransmitter",
  "side-effect": "Side Effect",
  "brain-region": "Brain Region",
  pathway: "Pathway",
  clinical: "Clinical Pattern",
  "patient-guide": "Patient Guide",
};
