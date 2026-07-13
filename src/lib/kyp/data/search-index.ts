import type { SearchableItem } from "./types";
import { substances } from "./drugs";
import { drugClassList } from "./classes";
import { brainRegions } from "./brain";
import { pathways } from "./brain";
import { sideEffects } from "./side-effects";
import { drugs } from "./drugs/index";

/**
 * Universal search index — single source of truth for the Spotlight search.
 * Phase 3 will render this through <SearchModal />.
 *
 * Every entry has: id, title, type, description, href, keywords.
 * Keywords include synonyms and common misspellings so fuzzy search
 * feels magical even before we ship a real fuzzy matcher.
 */
export const searchIndex: SearchableItem[] = [
  // Medications (canonical drug pages — Phase 4)
  ...drugs.flatMap((d) => {
    // Build a single high-quality search entry per medication,
    // with comprehensive keywords covering brand names, drug class,
    // indications, neurotransmitters, and common synonyms.
    const keywords = [
      d.genericName,
      ...d.brandNames,
      d.drugClassLabel,
      d.drugClassFullName,
      ...d.indications.map((i) => i.name),
      ...d.neurotransmitters,
      ...d.receptors,
      ...d.relatedConditions.map((c) => c.name),
      // Common abbreviations / synonyms for SSRIs
      ...(d.drugClass === "ssri"
        ? ["SSRI", "Selective Serotonin Reuptake Inhibitor", "antidepressant"]
        : []),
    ];
    return [{
      id: `medication-${d.slug}`,
      title: d.genericName,
      type: "drug" as const,
      description: d.tagline,
      href: `/drugs/${d.slug}`,
      keywords,
    }];
  }),

  // Substances (legacy HTML pages — to be migrated)
  ...substances.map((s) => ({
    id: `substance-${s.id}`,
    title: s.name,
    type: "drug" as const,
    description: s.description,
    href: s.href,
    keywords: [s.name, s.drugClass, s.neurotransmitter, s.slug],
  })),

  // Drug classes
  ...drugClassList.map((c) => ({
    id: `class-${c.id}`,
    title: c.name,
    type: "class" as const,
    description: c.description,
    href: `/substance-use.html#${c.id}`,
    keywords: [c.name, c.shortName, c.neurotransmitter],
  })),

  // Brain regions
  ...brainRegions.map((r) => ({
    id: `brain-${r.id}`,
    title: r.name,
    type: "brain-region" as const,
    description: `${r.functions.slice(0, 2).join(", ")}. ${r.disorders.length} related disorders.`,
    href: `/substance-use.html#brain-${r.id}`,
    keywords: [r.name, r.neurotransmitter, ...r.functions, ...r.disorders],
  })),

  // Pathways
  ...pathways.map((p) => ({
    id: `pathway-${p.id}`,
    title: p.name,
    type: "pathway" as const,
    description: p.function,
    href: `/substance-use.html#pathway-${p.id}`,
    keywords: [p.name, p.neurotransmitter, p.origin, p.termination, ...p.relatedDrugs],
  })),

  // Side effects
  ...sideEffects.map((se) => ({
    id: `side-effect-${se.id}`,
    title: se.name,
    type: "side-effect" as const,
    description: se.description,
    href: `/substance-use.html#se-${se.id}`,
    keywords: [se.name, se.receptor, se.pathway, ...se.drugs],
  })),

  // Neurotransmitters (curated)
  {
    id: "nt-serotonin",
    title: "Serotonin (5-HT)",
    type: "neurotransmitter",
    description: "Mood, sleep, appetite, and cognition. Synthesised in raphe nuclei. Target of SSRIs, SNRIs, MAOIs, triptans.",
    href: "/psychiatric.html#serotonin",
    keywords: ["serotonin", "5-HT", "5-hydroxytryptamine", "SSRI", "mood", "raphe"],
  },
  {
    id: "nt-dopamine",
    title: "Dopamine (DA)",
    type: "neurotransmitter",
    description: "Reward, motivation, motor control, and executive function. Four major pathways. Target of stimulants and antipsychotics.",
    href: "/psychiatric.html#dopamine",
    keywords: ["dopamine", "DA", "reward", "VTA", "mesolimbic", "nigrostriatal", "D2", "antipsychotic"],
  },
  {
    id: "nt-gaba",
    title: "GABA",
    type: "neurotransmitter",
    description: "Primary inhibitory neurotransmitter. Target of benzodiazepines, barbiturates, alcohol, z-drugs.",
    href: "/psychiatric.html#gaba",
    keywords: ["GABA", "inhibitory", "benzodiazepine", "barbiturate", "alcohol", "anxiolytic"],
  },
  {
    id: "nt-glutamate",
    title: "Glutamate",
    type: "neurotransmitter",
    description: "Primary excitatory neurotransmitter. NMDA & AMPA receptors. Target of ketamine, PCP, memantine.",
    href: "/psychiatric.html#glutamate",
    keywords: ["glutamate", "NMDA", "AMPA", "excitatory", "ketamine", "PCP", "memantine"],
  },
  {
    id: "nt-norepinephrine",
    title: "Norepinephrine (NE)",
    type: "neurotransmitter",
    description: "Arousal, attention, stress response. Target of SNRIs, TCAs, stimulants, alpha-blockers.",
    href: "/psychiatric.html#norepinephrine",
    keywords: ["norepinephrine", "noradrenaline", "NE", "SNRI", "TCA", "stimulant"],
  },

  // Clinical patterns (ICD-10)
  {
    id: "clinical-acute-intoxication",
    title: "Acute Intoxication",
    type: "clinical",
    description: "ICD-10 pattern: transient state following substance use — consciousness, cognition, perception, behaviour changes.",
    href: "/acute-intoxication.html",
    keywords: ["acute intoxication", "ICD-10", "overdose", "poisoning"],
  },
  {
    id: "clinical-withdrawal",
    title: "Withdrawal State",
    type: "clinical",
    description: "ICD-10 pattern: substance-specific syndrome after cessation/reduction — physical and psychological symptoms.",
    href: "/withdrawal-state.html",
    keywords: ["withdrawal", "ICD-10", "cessation", "dependence"],
  },

  // Patient guides
  {
    id: "guide-starting-ssri",
    title: "Starting an SSRI — Patient Guide",
    type: "patient-guide",
    description: "What to expect in the first 6 weeks, common side effects, when to call your doctor.",
    href: "/medicine.html?med=sertraline",
    keywords: ["SSRI", "starting", "patient", "guide", "first weeks", "side effects"],
  },
  {
    id: "guide-emergency",
    title: "When to Call Emergency",
    type: "patient-guide",
    description: "Red flags that require immediate medical attention — overdose, serotonin syndrome, severe withdrawal.",
    href: "#emergency",
    keywords: ["emergency", "red flag", "overdose", "serotonin syndrome", "crisis", "112", "14416"],
  },
];

export const searchTypeLabels: Record<SearchableItem["type"], string> = {
  drug: "Substance",
  class: "Drug Class",
  neurotransmitter: "Neurotransmitter",
  "side-effect": "Side Effect",
  "brain-region": "Brain Region",
  pathway: "Pathway",
  clinical: "Clinical Pattern",
  "patient-guide": "Patient Guide",
};
