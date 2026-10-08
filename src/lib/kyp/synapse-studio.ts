import { linkPath } from "@/lib/kyp/image-path";

/**
 * Synapse Studio (static app in /public/synapse-studio) deep links.
 * STUDIO_DRUG_IDS lists the medications the studio can animate; a drug page
 * links to it only when its slug is in this set. Regenerate the list when
 * public/synapse-studio/js/data-drugs*.js gains medications.
 */
export const STUDIO_PATH = "/synapse-studio/index.html";

export const STUDIO_DRUG_IDS: ReadonlySet<string> = new Set(["acetaminophen", "alprazolam", "amantadine", "amitriptyline", "amphetamine", "aripiprazole", "armodafinil", "asenapine", "atomoxetine", "atropine", "baclofen", "benztropine", "brexpiprazole", "brivaracetam", "buprenorphine", "bupropion", "buspirone", "butalbital", "caffeine", "carbamazepine", "cariprazine", "carisoprodol", "chlordiazepoxide", "chlorpromazine", "citalopram", "clobazam", "clomipramine", "clonazepam", "clonidine", "clozapine", "cocaine", "codeine", "cyclobenzaprine", "cyproheptadine", "dalfampridine", "desipramine", "desvenlafaxine", "deutetrabenazine", "dexmedetomidine", "dexmethylphenidate", "dextroamphetamine", "dextromethorphan", "diazepam", "diphenhydramine", "donepezil", "doxepin", "doxylamine", "dronabinol", "duloxetine", "eletriptan", "escitalopram", "eszopiclone", "ezogabine", "fentanyl", "flumazenil", "fluoxetine", "fluphenazine", "fluvoxamine", "gabapentin", "galantamine", "guanfacine", "haloperidol", "hydrocodone", "hydromorphone", "hydroxyzine", "iloperidone", "imipramine", "ketamine", "lacosamide", "lamotrigine", "lemborexant", "levetiracetam", "levodopa", "lisdexamfetamine", "lithium", "lorazepam", "lsd", "lurasidone", "mdma", "meclizine", "memantine", "meperidine", "methadone", "methamphetamine", "methylphenidate", "metoclopramide", "metoprolol", "midazolam", "mirtazapine", "modafinil", "morphine", "naloxone", "naltrexone", "nefazodone", "nicotine", "nortriptyline", "olanzapine", "ondansetron", "oxazepam", "oxcarbazepine", "oxycodone", "oxymorphone", "paliperidone", "paroxetine", "perampanel", "perphenazine", "phenelzine", "phenobarbital", "phentermine", "phenytoin", "pimavanserin", "pimozide", "pitolisant", "pramipexole", "prazosin", "pregabalin", "prochlorperazine", "promethazine", "propofol", "propranolol", "protriptyline", "psilocybin", "quetiapine", "ramelteon", "rasagiline", "reserpine", "risperidone", "rivastigmine", "rizatriptan", "ropinirole", "scopolamine", "selegiline", "sertraline", "sumatriptan", "suvorexant", "tapentadol", "temazepam", "tetrabenazine", "thioridazine", "tiagabine", "tizanidine", "topiramate", "tramadol", "tranylcypromine", "trazodone", "triazolam", "trihexyphenidyl", "valbenazine", "valproate", "varenicline", "venlafaxine", "vigabatrin", "vilazodone", "vortioxetine", "zaleplon", "ziprasidone", "zolmitriptan", "zolpidem", "zonisamide"]);

export function hasStudioAnimation(slug: string): boolean {
  return STUDIO_DRUG_IDS.has(slug.toLowerCase());
}

/** Raw-anchor safe href (adds the GitHub Pages basePath when present). */
export function studioHref(slug?: string): string {
  return linkPath(STUDIO_PATH + (slug ? "#" + slug.toLowerCase() : ""));
}
