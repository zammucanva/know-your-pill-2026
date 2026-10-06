# KYP Mechanism System — Substance Census

**Generated:** 2026-10-06T12:31:03.663Z · **Baseline:** `a7131451f084ff1b22e57e2159b76dde07822e3f` · **Branch:** `feat/mechanism-system-replacement-v2` (local only)
**Classification (mission §27/§34):** ENGINE SUPPORT is not migration. FULLY_MAPPED = hand-authored rich graph; ADAPTER_FALLBACK = renders KYPMechanismCanvas via the legacy adapter (labels verbatim, richness pending).

## Inventory at baseline `a7131451f084ff1b22e57e2159b76dde07822e3f` (verified directly in source)

| Page | Flow in source data | Status |
|---|---|---|
| /substances/alcohol | 1 — Disulfiram 5-step treatment flow (alcohol.ts) | FULLY_MAPPED |
| /substances/opioids | 1 — Naloxone 5-step emergency flow (opioids.ts) | FULLY_MAPPED |
| /substances/cannabis | 0 — no mechanismFlow exists (prose treatment entries) | NO MECHANISM (inherent to source — not a regression) |

## Totals

| Status | Count |
|---|---|
| FULLY MAPPED | 2 / 2 flows (100%) |
| ADAPTER FALLBACK | 0 |
| NO MECHANISM (inherent to source) | cannabis page |
| ERROR | 0 |

## Lookup-collision regression (disulfiram)

The `/drugs/disulfiram` page renders its own 4-node reward-pathway flow via the legacy adapter (`getPilotMechanism("disulfiram") === null`); the ALDH treatment pilot renders only on `/substances/alcohol` (`getTreatmentPilot("alcohol", "Disulfiram")`). Both directions guarded by `tests/mechanism-integrity.test.ts` tests 6–8.
