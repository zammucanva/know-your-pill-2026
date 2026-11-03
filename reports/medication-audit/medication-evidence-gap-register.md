# Medication evidence gap register

145 registered medicines. Generated from the records the pages render (`bun scripts/evidence/gap-register.ts`); do not edit by hand. Only CLAIMS count as evidence, by the kind of document each rests on. A stored source is not a supported claim. Nothing here is clinical review: **0 claims are reviewed**.

## Each medicine in exactly one evidence class

| Class | Medicines | Meaning |
|---|---:|---|
| label-or-leaflet-backed | 121 | at least one claim rests on a product label, leaflet, monograph or formulary entry |
| information-page-only | 4 | claims rest only on a MedlinePlus patient-information page (not a label) |
| safety-alert-only | 5 | claims rest only on Indian PvPI safety-alert rows (signals, not labels) |
| no-source-backed-claims | 15 | no source-backed claim; the page shows registry or standard wording and says what is unavailable |
| **total** | **145** | |

## Cross-cutting counts (not additive with the table above)

- Medicines with an authored Patient Guide: 12
- Medicines with at least one claim of any kind: 130
- Medicines with Indian product-label claims: **0**
- Medicines with PvPI safety-signal claims: 18
- Medicines whose label claims rest on a non-plain form (extended-release, injection, liquid, ...): 14
- Label-claim jurisdictions (medicines with at least one label source from): US 107, UK 10, IE 2, SG 1, CA 1, IN 0
- Medicines with a stored source that no claim rests on: 2
- Medicines with at least one unavailable Patient part: 8

## Medicines with no source-backed claim

- Escitalopram (escitalopram), has a Patient Guide; unavailable parts: none
- Paroxetine (paroxetine), has a Patient Guide; unavailable parts: none
- Citalopram (citalopram), has a Patient Guide; unavailable parts: none
- Venlafaxine (venlafaxine), has a Patient Guide; unavailable parts: none
- Duloxetine (duloxetine), has a Patient Guide; unavailable parts: none
- Bupropion (bupropion), has a Patient Guide; unavailable parts: none
- Mirtazapine (mirtazapine), has a Patient Guide; unavailable parts: none
- Blonanserin (blonanserin); unavailable parts: how; precautions; sources
- Perospirone (perospirone); unavailable parts: how; precautions; sources
- Zotepine (zotepine); unavailable parts: how; precautions; sources
- Cyamemazine (cyamemazine); unavailable parts: how; precautions; sources
- Loflazepate (loflazepate); unavailable parts: how; precautions; sources
- Flunitrazepam (flunitrazepam); unavailable parts: how; precautions; sources
- Tacrine (tacrine); unavailable parts: precautions; sources
- Caprylidene (caprylidene); unavailable parts: how; precautions; sources

## Patient Guide medicines: authored content with no claim-level label evidence

12 medicines have an authored Patient Guide. 12 of them have **no claim that rests on a product label** in the evidence layer (7 have no claim at all; 5 have only PvPI signal rows). The guide text is authored in the application and is not traced sentence by sentence to a source here, so a qualified reviewer must check it against current Indian product information. Guides: sertraline, fluoxetine, escitalopram, paroxetine, citalopram, fluvoxamine, venlafaxine, duloxetine, bupropion, mirtazapine, amitriptyline, clomipramine.

## Stored sources that no claim rests on

levetiracetam, nalmefene: a source is stored but none of its text supports a patient statement (for example a label with no drug-interaction section). It is not counted as evidence.

Per-medicine columns: `medication-evidence-gap-register.csv` (evidence class, claim counts by document kind, jurisdictions, forms, source years, Patient parts by content class, unavailable and generic parts, review status).
