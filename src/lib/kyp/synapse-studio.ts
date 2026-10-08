import { linkPath } from "@/lib/kyp/image-path";

/**
 * Synapse Studio (static app in /public/synapse-studio) deep links.
 * STUDIO_DRUG_IDS lists the medications the studio can animate; a drug page
 * links to it only when its slug is in this set. Regenerate the list when
 * public/synapse-studio/js/data-drugs*.js gains medications.
 */
export const STUDIO_PATH = "/synapse-studio/index.html";

export const STUDIO_DRUG_IDS: ReadonlySet<string> = new Set(["acamprosate", "acetaminophen", "agomelatine", "alprazolam", "amantadine", "amisulpride", "amitriptyline", "amoxapine", "amphetamine", "apomorphine", "aripiprazole", "armodafinil", "asenapine", "atomoxetine", "atropine", "baclofen", "benztropine", "blonanserin", "brexanolone", "brexpiprazole", "brivaracetam", "bromocriptine", "buprenorphine", "bupropion", "buspirone", "butalbital", "cabergoline", "caffeine", "carbamazepine", "cariprazine", "carisoprodol", "cenobamate", "chlordiazepoxide", "chlorpromazine", "citalopram", "clobazam", "clomipramine", "clonazepam", "clonidine", "clorazepate", "clozapine", "cocaine", "codeine", "cyamemazine", "cyclobenzaprine", "cyproheptadine", "dalfampridine", "daridorexant", "desipramine", "desvenlafaxine", "deutetrabenazine", "dexamphetamine", "dexmedetomidine", "dexmethylphenidate", "dextroamphetamine", "dextromethorphan", "diazepam", "diphenhydramine", "donepezil", "dothiepin", "doxepin", "doxylamine", "dronabinol", "duloxetine", "eletriptan", "escitalopram", "eslicarbazepine", "estazolam", "eszopiclone", "ethosuximide", "ezogabine", "fentanyl", "flibanserin", "flumazenil", "flunitrazepam", "fluoxetine", "flupenthixol", "fluphenazine", "flurazepam", "fluvoxamine", "gabapentin", "galantamine", "ganaxolone", "guanfacine", "haloperidol", "hydrocodone", "hydromorphone", "hydroxyzine", "iloperidone", "imipramine", "isocarboxazid", "istradefylline", "ketamine", "lacosamide", "lamotrigine", "lemborexant", "levetiracetam", "levodopa", "levomilnacipran", "lisdexamfetamine", "lithium", "lofepramine", "lofexidine", "loflazepate", "lorazepam", "lorcaserin", "loxapine", "lsd", "lurasidone", "maprotiline", "mdma", "meclizine", "memantine", "meperidine", "mesoridazine", "methadone", "methamphetamine", "methylphenidate", "metoclopramide", "metoprolol", "mianserin", "midazolam", "milnacipran", "mirtazapine", "moclobemide", "modafinil", "molindone", "morphine", "nalmefene", "naloxone", "naltrexone", "nefazodone", "nicotine", "nortriptyline", "olanzapine", "ondansetron", "oxazepam", "oxcarbazepine", "oxybutynin", "oxycodone", "oxymorphone", "paliperidone", "paroxetine", "pemoline", "perampanel", "perospirone", "perphenazine", "phenelzine", "phenobarbital", "phentermine", "phenytoin", "pimavanserin", "pimozide", "pipothiazine", "pitolisant", "pramipexole", "prazosin", "pregabalin", "primidone", "prochlorperazine", "promethazine", "propofol", "propranolol", "protriptyline", "psilocybin", "quazepam", "quetiapine", "ramelteon", "rasagiline", "reboxetine", "reserpine", "risperidone", "rivastigmine", "rizatriptan", "ropinirole", "rotigotine", "rufinamide", "safinamide", "scopolamine", "selegiline", "sertindole", "sertraline", "sodium-oxybate", "solriamfetol", "sulpiride", "sumatriptan", "suvorexant", "tacrine", "tapentadol", "tasimelteon", "temazepam", "tetrabenazine", "thioridazine", "thiothixene", "tiagabine", "tianeptine", "tizanidine", "topiramate", "tramadol", "tranylcypromine", "trazodone", "triazolam", "trifluoperazine", "trihexyphenidyl", "trimipramine", "valbenazine", "valproate", "varenicline", "venlafaxine", "vigabatrin", "vilazodone", "vortioxetine", "zaleplon", "ziprasidone", "zolmitriptan", "zolpidem", "zonisamide", "zopiclone", "zotepine", "zuclopenthixol", "zuranolone"]);

export function hasStudioAnimation(slug: string): boolean {
  return STUDIO_DRUG_IDS.has(slug.toLowerCase());
}

/** Raw-anchor safe href (adds the GitHub Pages basePath when present). */
export function studioHref(slug?: string): string {
  return linkPath(STUDIO_PATH + (slug ? "#" + slug.toLowerCase() : ""));
}

/** Number of medications the studio can animate (for marketing copy). */
export const STUDIO_DRUG_COUNT = STUDIO_DRUG_IDS.size;
