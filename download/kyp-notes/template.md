# KYP Note Template

This is the skeleton every KYP note follows. Two variants:

- **Disorder template** — 16 sections, one note per disorder (`schizophrenia.md`, `gad.md`, ...)
- **Concept template** — 8 sections, for non-disorder topics (`neurotransmitters.md`, `dynamic-psychotherapy.md`, ...)

## Universal writing rules

1. **Original text only.** Everything is written from scratch in plain words. Never copy sentences, paragraphs, tables, criteria lists or scale items from the source textbook (or from DSM/ICD/published tools). We *describe the logic* of criteria in our own words; we *name* scales but never reproduce their items.
2. **Simplified, friendly, accurate.** Short sentences. Explain every technical word in brackets the first time it appears. A patient should follow sections 1, 7 and 13; a student should pass an exam using 12, 14 and 16; a clinician should trust 4-10 and 15.
3. **India is built in, not bolted on.** Epidemiology, services, costs and counselling realities are woven into every note (sections 4, 9, 10). Costs carry the word "approx" and a date; they vary by brand, state and scheme.
4. **One fact, one home.** Each number or cost is stated once; other mentions point to the section that owns it.
5. **Every claim earns its place.** Key numbers are traceable to section 15 (Evidence sources). Where evidence is weak or contested, say so in the text itself.
6. **Numbers stay honest.** Use ranges when the literature ranges. Do not invent precision.
7. No emojis, no decorative endings ("End of note" etc.), no marketing tone.
8. Each note opens with a small YAML front matter block (below) so any static-site generator can consume the notes directly.

```yaml
---
title: "Name of the disorder"
slug: kebab-case-name
category: "Group name"
source_map: "NOTP 2e (2009) chapter numbers (uploaded part) - original rewrite, updated to DSM-5/ICD-11"
audiences: ["patients & families", "medical students", "residents & clinicians"]
priority: P1  # P1 core | P2 supporting | P3 optional
last_reviewed: "YYYY-MM"
---
```

---

## A. Disorder template — the 16 sections

| # | Section | What goes in it | Length guide |
|---|---------|-----------------|--------------|
| 1 | In one line + overview | A bold tagline sentence, then a 4-6 sentence plain-language overview that a patient can read | 120-180 words |
| 2 | Learning objectives | 6-8 "after this note you can..." bullets | 6-8 lines |
| 3 | Knowledge map | One-line relations (concept -> relationship -> concept) as a table | 10-14 rows |
| 4 | Epidemiology | Global numbers (prevalence, age, sex, mortality), then an India subsection | 2 short blocks |
| 5 | Causes & risk factors | Bullets tagged: genetic / biological / psychological / social / environmental / Indian context | 12-18 bullets |
| 6 | What happens in the body/brain | 2-4 short "stories" (pathophysiology in plain words, with analogies) | 3-5 short paragraphs |
| 7 | Symptoms | Grouped logically (e.g. positive/negative/cognitive, or by system), with patient-language examples | largest section |
| 8 | Diagnosis | The *logic* of DSM-5 / ICD-11 criteria in own words, duration rules, severity scales (named only), workup, differential table | |
| 9 | Management | Lifestyle -> psychotherapy -> pharmacotherapy -> brain stimulation -> other. Each block ends with an italic *India note* line | |
| 10 | Indian practice | Guidelines actually used, government pathway, private practice reality, costs snapshot, primary-care role, patient & family education | |
| 11 | Clinical cases | 1-2 de-identified vignettes in Indian settings, each ending with "teaching points" | |
| 12 | Active recall | 5-6 self-testing prompts (not questions with answers - prompts to retrieve) | |
| 13 | FAQ | 8-10 questions in a patient's own words, answered in 2-4 plain sentences | |
| 14 | Exam & student lens | Mnemonics, high-yield facts, classic exam traps, Indian exam corner | |
| 15 | Evidence sources | Numbered reference list (guidelines, landmark trials, Indian surveys, laws) | 8-14 refs |
| 16 | Self-test MCQs | 5-6 MCQs with answer + one-line explanation each | |

Section order is fixed. If a section genuinely does not apply (e.g. pathophysiology for a purely psychosocial topic), keep the heading and write one line saying why it is skipped.

---

## B. Concept template — the 8 sections (for non-disorder topics)

| # | Section | What goes in it |
|---|---------|-----------------|
| 1 | In one line + overview | Tagline + 4-5 sentence overview |
| 2 | Learning objectives | 5-7 bullets |
| 3 | Knowledge map | Relations table, as in disorder template |
| 4 | The core ideas | The concept explained in 3-6 plain subsections |
| 5 | Why it matters clinically | How the concept changes bedside decisions |
| 6 | India lens | How it plays out in Indian practice/services |
| 7 | Active recall + FAQ | 4-5 recall prompts, then 4-6 FAQs |
| 8 | Evidence sources + self-test | Short reference list + 3-5 MCQs |

---

## Tone calibration (read before writing)

- Write like a good senior explaining to a junior over chai: warm, exact, unhurried.
- Prefer "the person" / "your patient" over "the case".
- Prefer concrete over abstract: not "social support improves outcomes" but "one calm relative at the OPD counter does more than five pamphlets".
- When the evidence is genuinely uncertain, say "honestly, we do not know yet" - students trust notes that admit limits.
- British/Indian English spellings (behaviour, counselling, programme) except drug names and quoted titles.
