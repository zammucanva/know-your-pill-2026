/**
 * GENERATED FILE — do not edit by hand.
 *
 * Study-surface client data derived from the canonical drug registry
 * by scripts/gen-client-data.ts: outline sizes (slug → unique section
 * count), the total course count, the first course slug (the "Start
 * Learning" entry point), and the class-label → member-slug map used
 * by the weak-area selector.
 *
 * Replaces the identical per-consumer derivations that previously
 * lived in continue-studying.tsx, study-next-panel.tsx and
 * daily-plan.ts — each of which imported the full registry just to
 * count sections.
 *
 * Drift protection: tests/platform-hardening.test.ts asserts this
 * map matches the live registry derivation — regenerate with
 * `bun scripts/gen-client-data.ts` after any registry change.
 */

export interface CourseStatsEntry {
  /** Unique course section count for the medication. */
  total: number;
}

export const COURSE_STATS: Record<string, CourseStatsEntry> = {
  "sertraline": {
    "total": 26
  },
  "fluoxetine": {
    "total": 26
  },
  "escitalopram": {
    "total": 26
  },
  "paroxetine": {
    "total": 26
  },
  "citalopram": {
    "total": 26
  },
  "fluvoxamine": {
    "total": 26
  },
  "venlafaxine": {
    "total": 26
  },
  "duloxetine": {
    "total": 26
  },
  "bupropion": {
    "total": 26
  },
  "mirtazapine": {
    "total": 26
  },
  "amitriptyline": {
    "total": 26
  },
  "clomipramine": {
    "total": 26
  },
  "tianeptine": {
    "total": 27
  },
  "isocarboxazid": {
    "total": 27
  },
  "moclobemide": {
    "total": 27
  },
  "phenelzine": {
    "total": 27
  },
  "selegiline": {
    "total": 27
  },
  "tranylcypromine": {
    "total": 27
  },
  "l-methylfolate": {
    "total": 27
  },
  "agomelatine": {
    "total": 27
  },
  "vortioxetine": {
    "total": 27
  },
  "ketamine": {
    "total": 27
  },
  "reboxetine": {
    "total": 27
  },
  "nefazodone": {
    "total": 27
  },
  "trazodone": {
    "total": 27
  },
  "desvenlafaxine": {
    "total": 27
  },
  "levomilnacipran": {
    "total": 27
  },
  "milnacipran": {
    "total": 27
  },
  "vilazodone": {
    "total": 27
  },
  "triiodothyronine": {
    "total": 27
  },
  "amoxapine": {
    "total": 27
  },
  "desipramine": {
    "total": 27
  },
  "dothiepin": {
    "total": 27
  },
  "doxepin": {
    "total": 27
  },
  "imipramine": {
    "total": 27
  },
  "lofepramine": {
    "total": 27
  },
  "maprotiline": {
    "total": 27
  },
  "mianserin": {
    "total": 27
  },
  "nortriptyline": {
    "total": 27
  },
  "protriptyline": {
    "total": 27
  },
  "trimipramine": {
    "total": 27
  },
  "amisulpride": {
    "total": 27
  },
  "asenapine": {
    "total": 27
  },
  "blonanserin": {
    "total": 27
  },
  "clozapine": {
    "total": 27
  },
  "iloperidone": {
    "total": 27
  },
  "lurasidone": {
    "total": 27
  },
  "olanzapine": {
    "total": 27
  },
  "paliperidone": {
    "total": 27
  },
  "perospirone": {
    "total": 27
  },
  "pimavanserin": {
    "total": 27
  },
  "quetiapine": {
    "total": 27
  },
  "risperidone": {
    "total": 27
  },
  "sertindole": {
    "total": 27
  },
  "sulpiride": {
    "total": 27
  },
  "ziprasidone": {
    "total": 27
  },
  "zotepine": {
    "total": 27
  },
  "aripiprazole": {
    "total": 27
  },
  "brexpiprazole": {
    "total": 27
  },
  "cariprazine": {
    "total": 27
  },
  "chlorpromazine": {
    "total": 27
  },
  "cyamemazine": {
    "total": 27
  },
  "flupenthixol": {
    "total": 27
  },
  "fluphenazine": {
    "total": 27
  },
  "haloperidol": {
    "total": 27
  },
  "loxapine": {
    "total": 27
  },
  "mesoridazine": {
    "total": 27
  },
  "molindone": {
    "total": 27
  },
  "perphenazine": {
    "total": 27
  },
  "pimozide": {
    "total": 27
  },
  "pipothiazine": {
    "total": 27
  },
  "thioridazine": {
    "total": 27
  },
  "thiothixene": {
    "total": 27
  },
  "trifluoperazine": {
    "total": 27
  },
  "zuclopenthixol": {
    "total": 27
  },
  "gabapentin": {
    "total": 27
  },
  "levetiracetam": {
    "total": 27
  },
  "pregabalin": {
    "total": 27
  },
  "tiagabine": {
    "total": 27
  },
  "topiramate": {
    "total": 27
  },
  "zonisamide": {
    "total": 27
  },
  "carbamazepine": {
    "total": 27
  },
  "lamotrigine": {
    "total": 27
  },
  "lithium": {
    "total": 27
  },
  "oxcarbazepine": {
    "total": 27
  },
  "valproate": {
    "total": 27
  },
  "prazosin": {
    "total": 27
  },
  "diphenhydramine": {
    "total": 27
  },
  "hydroxyzine": {
    "total": 27
  },
  "buspirone": {
    "total": 27
  },
  "alprazolam": {
    "total": 27
  },
  "chlordiazepoxide": {
    "total": 27
  },
  "clonazepam": {
    "total": 27
  },
  "clorazepate": {
    "total": 27
  },
  "diazepam": {
    "total": 27
  },
  "loflazepate": {
    "total": 27
  },
  "lorazepam": {
    "total": 27
  },
  "midazolam": {
    "total": 27
  },
  "oxazepam": {
    "total": 27
  },
  "flumazenil": {
    "total": 27
  },
  "propranolol": {
    "total": 27
  },
  "estazolam": {
    "total": 27
  },
  "flunitrazepam": {
    "total": 27
  },
  "flurazepam": {
    "total": 27
  },
  "quazepam": {
    "total": 27
  },
  "temazepam": {
    "total": 27
  },
  "triazolam": {
    "total": 27
  },
  "suvorexant": {
    "total": 27
  },
  "ramelteon": {
    "total": 27
  },
  "tasimelteon": {
    "total": 27
  },
  "eszopiclone": {
    "total": 27
  },
  "zaleplon": {
    "total": 27
  },
  "zolpidem": {
    "total": 27
  },
  "zopiclone": {
    "total": 27
  },
  "clonidine": {
    "total": 27
  },
  "guanfacine": {
    "total": 27
  },
  "atomoxetine": {
    "total": 27
  },
  "dexamphetamine": {
    "total": 27
  },
  "amphetamine": {
    "total": 27
  },
  "lisdexamfetamine": {
    "total": 27
  },
  "dexmethylphenidate": {
    "total": 27
  },
  "methylphenidate": {
    "total": 27
  },
  "armodafinil": {
    "total": 27
  },
  "modafinil": {
    "total": 27
  },
  "donepezil": {
    "total": 27
  },
  "galantamine": {
    "total": 27
  },
  "rivastigmine": {
    "total": 27
  },
  "caprylidene": {
    "total": 27
  },
  "memantine": {
    "total": 27
  },
  "acamprosate": {
    "total": 27
  },
  "buprenorphine": {
    "total": 27
  },
  "disulfiram": {
    "total": 27
  },
  "nalmefene": {
    "total": 27
  },
  "naltrexone": {
    "total": 27
  },
  "naltrexone-bupropion": {
    "total": 27
  },
  "varenicline": {
    "total": 27
  },
  "benztropine": {
    "total": 27
  },
  "trihexyphenidyl": {
    "total": 27
  },
  "flibanserin": {
    "total": 27
  },
  "dextromethorphan": {
    "total": 27
  },
  "sodium-oxybate": {
    "total": 27
  },
  "lorcaserin": {
    "total": 27
  },
  "phentermine-topiramate": {
    "total": 27
  }
};

/** Number of medication courses in the library. */
export const COURSE_COUNT: number = 143;

/** Registry-order first course — the "Start Learning" entry point. */
export const FIRST_COURSE_SLUG: string = "sertraline";

/** Class label → member drug slugs, in registry order (class
 *  membership view for the weak-area selector). */
export const CLASS_DRUG_SLUGS: Record<string, string[]> = {
  "SSRI": [
    "sertraline",
    "fluoxetine",
    "escitalopram",
    "paroxetine",
    "citalopram",
    "fluvoxamine"
  ],
  "SNRI": [
    "venlafaxine",
    "duloxetine",
    "desvenlafaxine",
    "levomilnacipran",
    "milnacipran"
  ],
  "NDRI": [
    "bupropion"
  ],
  "NaSSA": [
    "mirtazapine"
  ],
  "TCA": [
    "amitriptyline",
    "clomipramine",
    "amoxapine",
    "desipramine",
    "dothiepin",
    "doxepin",
    "imipramine",
    "lofepramine",
    "maprotiline",
    "mianserin",
    "nortriptyline",
    "protriptyline",
    "trimipramine"
  ],
  "Atypical Antidepressant": [
    "tianeptine"
  ],
  "MAOI": [
    "isocarboxazid",
    "moclobemide",
    "phenelzine",
    "selegiline",
    "tranylcypromine"
  ],
  "Medical Food": [
    "l-methylfolate",
    "caprylidene"
  ],
  "Melatonergic Antidepressant": [
    "agomelatine"
  ],
  "Multimodal Antidepressant": [
    "vortioxetine"
  ],
  "NMDA Antidepressant": [
    "ketamine"
  ],
  "NRI": [
    "reboxetine",
    "atomoxetine"
  ],
  "SARI": [
    "nefazodone",
    "trazodone"
  ],
  "SPARI": [
    "vilazodone"
  ],
  "T3 Augmentation": [
    "triiodothyronine"
  ],
  "Atypical Antipsychotic": [
    "amisulpride",
    "asenapine",
    "blonanserin",
    "clozapine",
    "iloperidone",
    "lurasidone",
    "olanzapine",
    "paliperidone",
    "perospirone",
    "pimavanserin",
    "quetiapine",
    "risperidone",
    "sertindole",
    "sulpiride",
    "ziprasidone",
    "zotepine"
  ],
  "Dopamine Stabiliser": [
    "aripiprazole",
    "brexpiprazole",
    "cariprazine"
  ],
  "Typical Antipsychotic": [
    "chlorpromazine",
    "cyamemazine",
    "flupenthixol",
    "fluphenazine",
    "haloperidol",
    "loxapine",
    "mesoridazine",
    "molindone",
    "perphenazine",
    "pimozide",
    "pipothiazine",
    "thioridazine",
    "thiothixene",
    "trifluoperazine",
    "zuclopenthixol"
  ],
  "Anticonvulsant": [
    "gabapentin",
    "levetiracetam",
    "pregabalin",
    "tiagabine",
    "topiramate",
    "zonisamide"
  ],
  "Mood Stabiliser": [
    "carbamazepine",
    "lamotrigine",
    "lithium",
    "oxcarbazepine",
    "valproate"
  ],
  "Alpha-1 Blocker": [
    "prazosin"
  ],
  "Antihistamine": [
    "diphenhydramine",
    "hydroxyzine"
  ],
  "Azapirone": [
    "buspirone"
  ],
  "Benzodiazepine": [
    "alprazolam",
    "chlordiazepoxide",
    "clonazepam",
    "clorazepate",
    "diazepam",
    "loflazepate",
    "lorazepam",
    "midazolam",
    "oxazepam"
  ],
  "Benzodiazepine Antidote": [
    "flumazenil"
  ],
  "Beta-Blocker": [
    "propranolol"
  ],
  "Benzodiazepine Hypnotic": [
    "estazolam",
    "flunitrazepam",
    "flurazepam",
    "quazepam",
    "temazepam",
    "triazolam"
  ],
  "DORA": [
    "suvorexant"
  ],
  "Melatonin Agonist": [
    "ramelteon",
    "tasimelteon"
  ],
  "Z-Drug": [
    "eszopiclone",
    "zaleplon",
    "zolpidem",
    "zopiclone"
  ],
  "Alpha-2 Agonist": [
    "clonidine",
    "guanfacine"
  ],
  "Stimulant": [
    "dexamphetamine",
    "amphetamine",
    "lisdexamfetamine",
    "dexmethylphenidate",
    "methylphenidate"
  ],
  "Wake-Promoting Agent": [
    "armodafinil",
    "modafinil"
  ],
  "AChE Inhibitor": [
    "donepezil",
    "galantamine",
    "rivastigmine"
  ],
  "NMDA Antagonist": [
    "memantine",
    "dextromethorphan"
  ],
  "SUD Treatment": [
    "acamprosate",
    "buprenorphine",
    "disulfiram",
    "nalmefene",
    "naltrexone",
    "naltrexone-bupropion",
    "varenicline"
  ],
  "Anticholinergic": [
    "benztropine",
    "trihexyphenidyl"
  ],
  "Libido Enhancer": [
    "flibanserin"
  ],
  "Sodium Oxybate": [
    "sodium-oxybate"
  ],
  "Weight Management": [
    "lorcaserin",
    "phentermine-topiramate"
  ]
};

