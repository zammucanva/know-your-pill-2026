# Stahl's Psychopharmacology Notes — Complete Companion & Integration Guide

**Repository:** `KYP-STALHS-NOTES` — the Know Your Pill (KYP) platform with the full Stahl monograph registry

**Status: COMPLETE — every drug in the book is written, integrated, typechecked, and pushed.**

- **145 drug monographs** written and registered (every file `891–2184 lines`, ~173,962 lines of clinical notes total)
- **101/101 book entries covered** — every drug in the Stahl 1st-edition *Prescriber's Guide* contents (97 plain entries + 4 stereoisomer entries, each with its own monograph)
- **44 additional modern drugs** beyond the book (later-edition Stahl drugs: vortioxetine, lurasidone, cariprazine, levomilnacipran, desvenlafaxine, …)
- **40 drug classes** organised into a browsing taxonomy
- **178 Stahl MCQs** wired into the quiz engine + per-monograph micro-quizzes and active-recall questions
- TypeScript: `tsc --noEmit` passes clean on the whole project

---

## 1. Where the notes live

```
src/lib/kyp/data/drugs/
├── <slug>.ts          ← one file per drug — the full monograph (60+ typed fields)
└── index.ts           ← the registry: imports all 145 monographs, exports drugs[]
```

Every monograph is a typed `Drug` object (`src/lib/kyp/data/types.ts`, ~900 lines of schema).
One file = one drug = ~1,000–2,200 lines of structured clinical notes:

| Layer | Fields | What you get |
|---|---|---|
| Identity | `slug`, `genericName`, `brandNames`, `drugClass`… | canonical naming + class wiring |
| Learning | `learningPath`, `learningObjectives`, `estimatedReadTime`, `yieldRating`, `sectionDifficulty` | study-time budgeting, high-yield flags |
| **Mechanism** | `mechanism`, `mechanismFlow`, `neurotransmitters`, `receptors`, `brainRegionIds`, `pathwayIds` | Stahl-style pharmacology action flow (the "icons and arrows" story) |
| **Clinical** | `indications` (with dosing), `contraindications`, `blackBoxWarnings`, `commonSideEffects`, `seriousSideEffects`, `monitoring`, `interactions` | prescriber-grade content: dose ranges, titration, labs |
| Populations | `pregnancy`, `renalAdjustment`, `hepaticAdjustment` | special-population notes |
| Patient | `patientExplanation`, `patientEducationPoints`, `patientMode` | plain-language layer for the site's Patient Mode |
| **Exam prep** | `examLens`, `memoryTricks`, `highYieldSummary`, `clinicalPearls`, `microQuizzes`, `activeRecallQuestions` | mnemonics, pearls, inline self-test |
| Cases | `clinicalCases`, `comparisonTables`, `timeline`, `faqs` | vignettes, head-to-heads, history + FAQs |
| India layer | `indianPractice`, `janAushadhi` | Indian brand landscape + generic availability |
| Navigation | `relatedDrugs`, `relatedConditions`, `knowledgeGraph`, `drugFamilyNav`, `learningPaths`, `lessonGroups` | cross-links that power the knowledge graph |
| Governance | `prescriberGuide` (chapter reference), `lastReviewed`, `reviewers`, `references` | source attribution + review metadata |

## 2. Book → repo name mapping (the 4 stereoisomer entries)

The book's contents list uses stereochemical prefixes; the repo uses the INN-style slugs:

| Book entry | Repo file |
|---|---|
| `d-amphetamine` | `src/lib/kyp/data/drugs/dexamphetamine.ts` |
| `d,l-amphetamine` | `src/lib/kyp/data/drugs/amphetamine.ts` |
| `d,l-methylphenidate` | `src/lib/kyp/data/drugs/methylphenidate.ts` |
| `d-methylphenidate` | `src/lib/kyp/data/drugs/dexmethylphenidate.ts` |

## 3. How it is integrated (the wiring)

```
drugs/<slug>.ts  (one monograph)
        │
        ▼
drugs/index.ts  →  export const drugs: Drug[]   ← THE registry (145 entries)
        │
        ├── drug-taxonomy.ts    → class/family browsing hierarchy (auto-derived, never duplicated)
        ├── medications.ts      → /drugs library listing
        ├── search-index.ts     → server-side search derivation
        │        └── scripts/gen-client-data.ts → search-index-generated.ts (client artifact)
        ├── stahl-mcqs/         → 178 MCQ bank (bank/*.ts, 10 zone files)
        ├── interactions/engine.ts → drug–drug interaction checker
        └── app routes: /drugs/[slug] · /drugs/class/[classId] · /quiz · /study/*
```

**Key rule:** everything downstream is *derived* from `drugs/index.ts`. Adding a monograph + one import line reflows the whole site automatically.

Drift protection:

- `tests/platform-hardening.test.ts` asserts `search-index-generated.ts` is deep-equal to the live derivation — after any registry change run `bun scripts/gen-client-data.ts`.
- `scripts/content-lock-baseline.json` + `bun run test:content-lock` guard against accidental content edits.
- `scripts/medical-data-baseline.json` + `scripts/medical-data-snapshot.ts` snapshot the medical dataset for review diffs.

## 4. How to run it

```bash
bun install                 # or npm install
bun run dev                 # http://localhost:3000
bun run test                # full test suite
./node_modules/.bin/tsc --noEmit   # typecheck
```

Browse the notes at `/drugs` (library), `/drugs/<slug>` (monograph), `/quiz` (178 Stahl MCQs), `/study` (daily plan, spaced review, mistake book).

## 5. How to extend (add the next drug)

1. Copy the closest existing monograph as a template (e.g. `cp drugs/sertraline.ts drugs/<new-drug>.ts`).
2. Rewrite every field for the new drug — keep ALL keys (the `Drug` interface is strict; `tsc` will catch omissions).
3. Register it: add `import { <const> } from "./<new-drug>";` to `drugs/index.ts` and append it to the `drugs` array (antidepressants → mood → psychosis → … order).
4. Regenerate the client search artifact: `bun scripts/gen-client-data.ts`.
5. Run gates: `tsc --noEmit` → `bun run test` → commit.

## 6. The complete 145-drug index

Marks: **📘** = in the Stahl 1st-edition book contents · **➕** = extra modern drug added beyond the book.

### Atypical Antipsychotic (16)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Amisulpride | Solian | 📘 | `drugs/amisulpride.ts` |
| Asenapine | Saphris | ➕ | `drugs/asenapine.ts` |
| Blonanserin | Lonasen | ➕ | `drugs/blonanserin.ts` |
| Clozapine | Clozaril | 📘 | `drugs/clozapine.ts` |
| Iloperidone | Fanapt | ➕ | `drugs/iloperidone.ts` |
| Lurasidone | Latuda | ➕ | `drugs/lurasidone.ts` |
| Olanzapine | Zyprexa | 📘 | `drugs/olanzapine.ts` |
| Paliperidone | Invega | ➕ | `drugs/paliperidone.ts` |
| Perospirone | Lullan | 📘 | `drugs/perospirone.ts` |
| Pimavanserin | Nuplazid | ➕ | `drugs/pimavanserin.ts` |
| Quetiapine | Seroquel | 📘 | `drugs/quetiapine.ts` |
| Risperidone | Risperdal | 📘 | `drugs/risperidone.ts` |
| Sertindole | Serdolect | ➕ | `drugs/sertindole.ts` |
| Sulpiride | Dogmatil | 📘 | `drugs/sulpiride.ts` |
| Ziprasidone | Geodon | 📘 | `drugs/ziprasidone.ts` |
| Zotepine | Zoleptil | 📘 | `drugs/zotepine.ts` |

### Typical Antipsychotic (15)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Chlorpromazine | Largactil | 📘 | `drugs/chlorpromazine.ts` |
| Cyamemazine | Tercian | ➕ | `drugs/cyamemazine.ts` |
| Flupenthixol | Fluanxol | 📘 | `drugs/flupenthixol.ts` |
| Fluphenazine | Prolixin | 📘 | `drugs/fluphenazine.ts` |
| Haloperidol | Haldol | 📘 | `drugs/haloperidol.ts` |
| Loxapine | Loxitane | 📘 | `drugs/loxapine.ts` |
| Mesoridazine | Serentil | 📘 | `drugs/mesoridazine.ts` |
| Molindone | Moban | 📘 | `drugs/molindone.ts` |
| Perphenazine | Trilafon | 📘 | `drugs/perphenazine.ts` |
| Pimozide | Orap | 📘 | `drugs/pimozide.ts` |
| Pipothiazine | Piportil (palmitate depot) | 📘 | `drugs/pipothiazine.ts` |
| Thioridazine | Melleril | 📘 | `drugs/thioridazine.ts` |
| Thiothixene | Navane | 📘 | `drugs/thiothixene.ts` |
| Trifluoperazine | Stelazine | 📘 | `drugs/trifluoperazine.ts` |
| Zuclopenthixol | Cisordinol | 📘 | `drugs/zuclopenthixol.ts` |

### TCA (13)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Amitriptyline | Elavil | 📘 | `drugs/amitriptyline.ts` |
| Amoxapine | Asendin | 📘 | `drugs/amoxapine.ts` |
| Clomipramine | Anafranil | 📘 | `drugs/clomipramine.ts` |
| Desipramine | Norpramin | 📘 | `drugs/desipramine.ts` |
| Dothiepin | Prothiaden | 📘 | `drugs/dothiepin.ts` |
| Doxepin | Sinequan | 📘 | `drugs/doxepin.ts` |
| Imipramine | Tofranil | 📘 | `drugs/imipramine.ts` |
| Lofepramine | Gamanil | 📘 | `drugs/lofepramine.ts` |
| Maprotiline | Ludiomil | 📘 | `drugs/maprotiline.ts` |
| Mianserin | Tolvon | ➕ | `drugs/mianserin.ts` |
| Nortriptyline | Pamelor | 📘 | `drugs/nortriptyline.ts` |
| Protriptyline | Vivactil | 📘 | `drugs/protriptyline.ts` |
| Trimipramine | Surmontil | 📘 | `drugs/trimipramine.ts` |

### Benzodiazepine (9)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Alprazolam | Xanax | 📘 | `drugs/alprazolam.ts` |
| Chlordiazepoxide | Librium | 📘 | `drugs/chlordiazepoxide.ts` |
| Clonazepam | Klonopin | 📘 | `drugs/clonazepam.ts` |
| Clorazepate | Tranxene | 📘 | `drugs/clorazepate.ts` |
| Diazepam | Valium | 📘 | `drugs/diazepam.ts` |
| Loflazepate | Meilax | 📘 | `drugs/loflazepate.ts` |
| Lorazepam | Ativan | 📘 | `drugs/lorazepam.ts` |
| Midazolam | Versed | 📘 | `drugs/midazolam.ts` |
| Oxazepam | Serax | 📘 | `drugs/oxazepam.ts` |

### SUD Treatment (7)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Acamprosate | Campral | ➕ | `drugs/acamprosate.ts` |
| Buprenorphine | Subutex | ➕ | `drugs/buprenorphine.ts` |
| Disulfiram | Antabuse | ➕ | `drugs/disulfiram.ts` |
| Nalmefene | Selincro | ➕ | `drugs/nalmefene.ts` |
| Naltrexone | Revia | ➕ | `drugs/naltrexone.ts` |
| Naltrexone-Bupropion | Contrave | ➕ | `drugs/naltrexone-bupropion.ts` |
| Varenicline | Chantix | ➕ | `drugs/varenicline.ts` |

### Anticonvulsant (6)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Gabapentin | Neurontin | 📘 | `drugs/gabapentin.ts` |
| Levetiracetam | Keppra | 📘 | `drugs/levetiracetam.ts` |
| Pregabalin | Lyrica | 📘 | `drugs/pregabalin.ts` |
| Tiagabine | Gabitril | 📘 | `drugs/tiagabine.ts` |
| Topiramate | Topamax | 📘 | `drugs/topiramate.ts` |
| Zonisamide | Zonegran | 📘 | `drugs/zonisamide.ts` |

### Benzodiazepine Hypnotic (6)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Estazolam | ProSom | 📘 | `drugs/estazolam.ts` |
| Flunitrazepam | Rohypnol (where legally available) | 📘 | `drugs/flunitrazepam.ts` |
| Flurazepam | Dalmane | 📘 | `drugs/flurazepam.ts` |
| Quazepam | Doral | 📘 | `drugs/quazepam.ts` |
| Temazepam | Restoril | 📘 | `drugs/temazepam.ts` |
| Triazolam | Halcion | 📘 | `drugs/triazolam.ts` |

### SSRI (6)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Citalopram | Celexa | 📘 | `drugs/citalopram.ts` |
| Escitalopram | Lexapro | 📘 | `drugs/escitalopram.ts` |
| Fluoxetine | Prozac | 📘 | `drugs/fluoxetine.ts` |
| Fluvoxamine | Luvox | 📘 | `drugs/fluvoxamine.ts` |
| Paroxetine | Paxil | 📘 | `drugs/paroxetine.ts` |
| Sertraline | Zoloft | 📘 | `drugs/sertraline.ts` |

### Stimulant (6)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Amphetamine (d,l) | Adderall | 📘 *d,l-amphetamine (book entry)* | `drugs/amphetamine.ts` |
| Dexmethylphenidate | Focalin | 📘 *d-methylphenidate (book entry)* | `drugs/dexmethylphenidate.ts` |
| Dextroamphetamine (d-Amphetamine) | Dexedrine | 📘 *d-amphetamine (book entry)* | `drugs/dexamphetamine.ts` |
| Lisdexamfetamine | Vyvanse | ➕ | `drugs/lisdexamfetamine.ts` |
| Methylphenidate (d,l) | Ritalin | 📘 *d,l-methylphenidate (book entry)* | `drugs/methylphenidate.ts` |
| Pemoline | Cylert (withdrawn) | 📘 | `drugs/pemoline.ts` |

### MAOI (5)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Isocarboxazid | Marplan | 📘 | `drugs/isocarboxazid.ts` |
| Moclobemide | Aurorix | 📘 | `drugs/moclobemide.ts` |
| Phenelzine | Nardil | 📘 | `drugs/phenelzine.ts` |
| Selegiline | Eldepryl | 📘 | `drugs/selegiline.ts` |
| Tranylcypromine | Parnate | 📘 | `drugs/tranylcypromine.ts` |

### Mood Stabiliser (5)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Carbamazepine | Tegretol | 📘 | `drugs/carbamazepine.ts` |
| Lamotrigine | Lamictal | 📘 | `drugs/lamotrigine.ts` |
| Lithium | Lithobid | 📘 | `drugs/lithium.ts` |
| Oxcarbazepine | Trileptal | 📘 | `drugs/oxcarbazepine.ts` |
| Valproate | Depakote (divalproex) | 📘 | `drugs/valproate.ts` |

### SNRI (5)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Desvenlafaxine | Pristiq | ➕ | `drugs/desvenlafaxine.ts` |
| Duloxetine | Cymbalta | 📘 | `drugs/duloxetine.ts` |
| Levomilnacipran | Fetzima | ➕ | `drugs/levomilnacipran.ts` |
| Milnacipran | Savella | 📘 | `drugs/milnacipran.ts` |
| Venlafaxine | Effexor | 📘 | `drugs/venlafaxine.ts` |

### AChE Inhibitor (4)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Donepezil | Aricept | 📘 | `drugs/donepezil.ts` |
| Galantamine | Razadyne | 📘 | `drugs/galantamine.ts` |
| Rivastigmine | Exelon | 📘 | `drugs/rivastigmine.ts` |
| Tacrine | Cognex (discontinued) | 📘 | `drugs/tacrine.ts` |

### Z-Drug (4)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Eszopiclone | Lunesta | ➕ | `drugs/eszopiclone.ts` |
| Zaleplon | Sonata | 📘 | `drugs/zaleplon.ts` |
| Zolpidem | Ambien | 📘 | `drugs/zolpidem.ts` |
| Zopiclone | Imovane | 📘 | `drugs/zopiclone.ts` |

### Dopamine Stabiliser (3)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Aripiprazole | Abilify | 📘 | `drugs/aripiprazole.ts` |
| Brexpiprazole | Rexulti | ➕ | `drugs/brexpiprazole.ts` |
| Cariprazine | Vraylar | ➕ | `drugs/cariprazine.ts` |

### Alpha-2 Agonist (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Clonidine | Catapres | 📘 | `drugs/clonidine.ts` |
| Guanfacine | Intuniv (ER) | ➕ | `drugs/guanfacine.ts` |

### Anticholinergic (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Benztropine | Cogentin | ➕ | `drugs/benztropine.ts` |
| Trihexyphenidyl | Artane / Pacitane | ➕ | `drugs/trihexyphenidyl.ts` |

### Antihistamine (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Diphenhydramine | Benadryl | ➕ | `drugs/diphenhydramine.ts` |
| Hydroxyzine | Atarax | 📘 | `drugs/hydroxyzine.ts` |

### Medical Food (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Caprylidene | Axona | ➕ | `drugs/caprylidene.ts` |
| L-Methylfolate | Deplin (medical food) | ➕ | `drugs/l-methylfolate.ts` |

### Melatonin Agonist (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Ramelteon | Rozerem | ➕ | `drugs/ramelteon.ts` |
| Tasimelteon | Hetlioz | ➕ | `drugs/tasimelteon.ts` |

### NMDA Antagonist (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Dextromethorphan | Robitussin DM (cough) | ➕ | `drugs/dextromethorphan.ts` |
| Memantine | Namenda | 📘 | `drugs/memantine.ts` |

### NRI (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Atomoxetine | Strattera | 📘 | `drugs/atomoxetine.ts` |
| Reboxetine | Edronax | 📘 | `drugs/reboxetine.ts` |

### SARI (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Nefazodone | Serzone (withdrawn in most markets) | 📘 | `drugs/nefazodone.ts` |
| Trazodone | Desyrel | 📘 | `drugs/trazodone.ts` |

### Wake-Promoting Agent (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Armodafinil | Nuvigil | ➕ | `drugs/armodafinil.ts` |
| Modafinil | Provigil | 📘 | `drugs/modafinil.ts` |

### Weight Management (2)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Lorcaserin | Belviq (withdrawn) | ➕ | `drugs/lorcaserin.ts` |
| Phentermine-Topiramate | Qsymia | ➕ | `drugs/phentermine-topiramate.ts` |

### Alpha-1 Blocker (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Prazosin | Minipress | ➕ | `drugs/prazosin.ts` |

### Atypical Antidepressant (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Tianeptine | Stablon | 📘 | `drugs/tianeptine.ts` |

### Azapirone (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Buspirone | Buspar | 📘 | `drugs/buspirone.ts` |

### Benzodiazepine Antidote (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Flumazenil | Anexate | 📘 | `drugs/flumazenil.ts` |

### Beta-Blocker (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Propranolol | Inderal | ➕ | `drugs/propranolol.ts` |

### DORA (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Suvorexant | Belsomra | ➕ | `drugs/suvorexant.ts` |

### Libido Enhancer (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Flibanserin | Addyi | ➕ | `drugs/flibanserin.ts` |

### Melatonergic Antidepressant (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Agomelatine | Valdoxan | ➕ | `drugs/agomelatine.ts` |

### Multimodal Antidepressant (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Vortioxetine | Trintellix | ➕ | `drugs/vortioxetine.ts` |

### NaSSA (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Mirtazapine | Remeron | 📘 | `drugs/mirtazapine.ts` |

### NDRI (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Bupropion | Wellbutrin | 📘 | `drugs/bupropion.ts` |

### NMDA Antidepressant (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Ketamine | Ketalar | ➕ | `drugs/ketamine.ts` |

### Sodium Oxybate (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Sodium Oxybate | Xyrem | ➕ | `drugs/sodium-oxybate.ts` |

### SPARI (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Vilazodone | Viibryd | ➕ | `drugs/vilazodone.ts` |

### T3 Augmentation (1)

| Drug | Brand examples | Book | File |
|---|---|---|---|
| Triiodothyronine (T3) | Cytomel | ➕ | `drugs/triiodothyronine.ts` |

---

## 7. Coverage audit summary

- Book entries in contents list: **101** → covered: **101** — 100% (the 4 stereoisomer entries live in the dexamphetamine / amphetamine / methylphenidate / dexmethylphenidate files mapped above)
- Extra modern drugs beyond the book (44): acamprosate, agomelatine, armodafinil, asenapine, benztropine, blonanserin, brexpiprazole, buprenorphine, caprylidene, cariprazine, cyamemazine, desvenlafaxine, dextromethorphan, diphenhydramine, disulfiram, eszopiclone, flibanserin, guanfacine, iloperidone, ketamine, l-methylfolate, levomilnacipran, lisdexamfetamine, lorcaserin, lurasidone, mianserin, nalmefene, naltrexone, naltrexone-bupropion, paliperidone, phentermine-topiramate, pimavanserin, prazosin, propranolol, ramelteon, sertindole, sodium-oxybate, suvorexant, tasimelteon, trihexyphenidyl, triiodothyronine, varenicline, vilazodone, vortioxetine
- Total registered monographs: **145**

