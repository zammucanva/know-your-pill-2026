# KYP Psychiatry — Content Coverage Record

> **Migration complete (2026-09-30)**: all 109 notes now have a migrated
> six-lesson PsychiatryCourse at the same URL. Learner-facing curriculum
> metadata is standardized in
> [KYP-PSYCHIATRY-CURRICULUM-NORMALIZATION.md](KYP-PSYCHIATRY-CURRICULUM-NORMALIZATION.md)
> (cleaned curriculum, overlap audit, [PROPOSED] coverage gaps, change log,
> integrity audit). The notes in this directory remain the canonical,
> byte-untouched authority.

## Canonical source

- Directory: `download/kyp-notes/` (the ONLY canonical note directory)
- 109 authored notes (82 disorder 16-section + 27 concept 8-section), 109 unique slugs
- `00-topic-index.md` — navigation authority (18 content groups, A–R)
- `template.md` — authoring contract (original rewrites only; no copied
  text, tables, criteria checklists or scale items from any source)
- 719 authored self-test MCQs (the notes remain the single authority)
- Notes are original teaching rewrites; internal provenance
  (`source_map`) is preserved per note and displayed only inside the
  Sources & References disclosure layer

## Known coverage limitation — source Parts 6 and 7 were not uploaded

The note index (`00-topic-index.md`) records that source book parts 6 and 7
(approximately pages 977–1340 of the source work) were never uploaded for
note derivation. That range contains:

- 4.16 Culture-related specific psychiatric syndromes
- Section 5 — Psychiatry and Medicine in full (somatoform disorders,
  conversion/dissociation, hypochondriasis/health anxiety, pain disorder,
  chronic fatigue syndrome, body dysmorphic disorder, factitious
  disorder/malingering, neurasthenia, psychiatric aspects of
  neurology/epilepsy/cancer/surgery/obstetrics, liaison services)
- Section 6 start (6.1 evaluation of treatments; 6.2 somatic/drug
  treatments — anxiolytics, antidepressants, lithium, antipsychotics,
  antiepileptic mood stabilisers, cognitive enhancers, addiction
  pharmacotherapy, ECT, TMS, phototherapy, neurosurgery; 6.3.1–6.3.4
  counselling, CBT, IPT, brief dynamic therapy)
- Forensic chapters 11.8–11.17

Implications:

1. The current 109-note corpus does NOT cover those topics from this
   source. No notes pretend otherwise — no content was invented to fill
   the gap.
2. The medication-pharmacology half of that range (6.2) overlaps the
   existing KYP Medication Library domain (12 medication courses), which
   is authored from its own canonical data and remains the authority for
   drug content.
3. Future integration: when parts 6–7 material becomes available, new
   notes should be authored as separate notes under the same template,
   the index extended, and the loader/validator counts updated in the same
   change. Future independent source systems (e.g. a Stahl library) must
   be built as SEPARATE content systems — never merged into this corpus
   or its search index.

This record exists so the limitation is explicit and auditable, per the
content-source rules of the psychiatry-library integration.

## Proposed future additions — classification (2026-09-30 review)

The 11 [PROPOSED] additions in the normalization record §5 were reviewed
against the 109-course corpus. **None can be authored from the existing
source material** — their origin chapters live in the unuploaded parts 6–7.
Classification (disposition for when source material arrives):

| # | Proposed area | Classification | Rationale |
|---|---------------|----------------|-----------|
| 1 | Dissociative & Conversion Disorders | Future course (E or new) | Only depersonalization + recovered-memories exist; the amnesia/fugue/identity family is absent |
| 2 | Somatic Symptom & Related Disorders | Future course (new S) | Zero corpus coverage; high-frequency Indian general-practice territory |
| 3 | Psychopharmacology | **Coordinate with the Medication Library** (future drug-course batches) | The 12 existing medication courses are the canonical drug system; course `contentGaps` already request antipsychotics/mood stabilisers as the next drug batches. A psychiatry-side survey course may complement, never duplicate, that system |
| 4 | ECT & Neuromodulation | Future course (new T) | Zero corpus coverage |
| 5 | CBT & Behavioural Therapies | Future course (P) | P group has dynamic/group/family/couples — the most evidenced family is absent |
| 6 | Emergency Psychiatry | Future course | Standalone acute assessment/containment discipline not covered by the suicide courses |
| 7 | Consultation-Liaison Psychiatry | Future course | Zero corpus coverage |
| 8 | Perinatal & Women's Mental Health | Future course | Zero corpus coverage (highest-risk windows) |
| 9 | Epilepsy & Psychiatry | Future course | HIV/TBI neuropsychiatry exist; epilepsy does not |
| 10 | Disaster & Mass-Trauma Psychiatry | Future course (R) | Refugee note touches population-level response only |
| 11 | Stroke Neuropsychiatry | Future course (A) | Vascular-dementia covers cognition only |

Accounting (never mixed): **SOURCE lessons 109 · KYP-added courses 0 ·
PROPOSED future additions 11.**
