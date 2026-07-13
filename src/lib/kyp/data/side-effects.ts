import type { SideEffect } from "./types";

/**
 * Side effect library entries.
 * Phase 8 (Side Effect Library) will expand this into full pages.
 */
export const sideEffects: SideEffect[] = [
  {
    id: "akathisia",
    name: "Akathisia",
    description:
      "Inner restlessness and irresistible urge to move — one of the most distressing antipsychotic side effects.",
    receptor: "D2 blockade (mesocortical)",
    pathway: "Mesocortical",
    drugs: ["Haloperidol", "Risperidone", "Olanzapine", "Metoclopramide"],
    management:
      "Reduce dose, switch to lower-potency agent, add beta-blocker (propranolol) or benzodiazepine. Avoid anticholinergics alone.",
  },
  {
    id: "extrapyramidal-symptoms",
    name: "Extrapyramidal Symptoms (EPS)",
    description:
      "Parkinsonian-like movement disorders: rigidity, bradykinesia, tremor, and dystonia from D2 blockade.",
    receptor: "D2 blockade (nigrostriatal)",
    pathway: "Nigrostriatal",
    drugs: ["Haloperidol", "Fluphenazine", "Risperidone"],
    management: "Dose reduction, switch to atypical, add anticholinergic (benztropine, trihexyphenidyl).",
  },
  {
    id: "serotonin-syndrome",
    name: "Serotonin Syndrome",
    description:
      "Potentially fatal hyper-serotonergic state: agitation, clonus, hyperreflexia, hyperthermia, rigidity.",
    receptor: "5-HT1A & 5-HT2A overstimulation",
    pathway: "Raphe nuclei → cortex",
    drugs: ["SSRIs + MAOIs", "Tramadol + SSRIs", "Linezolid + SSRIs"],
    management:
      "Stop offending agents, supportive care, cyproheptadine (5-HT2A antagonist), benzodiazepines for agitation.",
  },
  {
    id: "neuroleptic-malignant-syndrome",
    name: "Neuroleptic Malignant Syndrome",
    description:
      "Rare, life-threatening reaction to antipsychotics: hyperthermia, muscle rigidity, autonomic instability, altered mental status.",
    receptor: "D2 blockade (widespread)",
    pathway: "Multi-pathway",
    drugs: ["Haloperidol", "Olanzapine", "Risperidone", "Clozapine"],
    management:
      "Immediate discontinuation, ICU support, IV dantrolene, bromocriptine. Mortality 5-20%.",
  },
  {
    id: "sexual-dysfunction",
    name: "Sexual Dysfunction",
    description:
      "Decreased libido, delayed orgasm, erectile dysfunction — common with serotonergic antidepressants.",
    receptor: "5-HT2 receptor stimulation",
    pathway: "Spinal & supraspinal serotonergic",
    drugs: ["Sertraline", "Paroxetine", "Fluoxetine"],
    management: "Dose reduction, switch to bupropion or mirtazapine, add bupropion or sildenafil.",
  },
  {
    id: "weight-gain",
    name: "Weight Gain",
    description:
      "Significant metabolic burden — increased appetite, insulin resistance, dyslipidaemia.",
    receptor: "5-HT2C & H1 blockade",
    pathway: "Hypothalamic",
    drugs: ["Olanzapine", "Clozapine", "Quetiapine", "Mirtazapine"],
    management: "Switch to aripiprazole or ziprasidone, lifestyle intervention, metformin adjunct.",
  },
];
