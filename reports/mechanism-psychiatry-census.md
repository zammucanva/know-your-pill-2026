# KYP Mechanism System — 109-Psychiatry Census

**Generated:** 2026-10-06T12:31:03.663Z · **Baseline:** `a7131451f084ff1b22e57e2159b76dde07822e3f` · **Branch:** `feat/mechanism-system-replacement-v2` (local only)
**Classification (mission §27/§34):** ENGINE SUPPORT is not migration. FULLY_MAPPED = hand-authored rich graph; ADAPTER_FALLBACK = renders KYPMechanismCanvas via the legacy adapter (labels verbatim, richness pending).

## Totals

| Status | Count | % of 109 |
|---|---|---|
| FULLY MAPPED | **0** | 0% |
| ADAPTER FALLBACK | **109** | 100% |
| NO MECHANISM | 0 | 0% |
| ERROR | 0 | 0% |

## Separated by course kind (from the registry `kind` field)

| Type | Count | Status |
|---|---|---|
| disorder | 74 | adapter fallback |
| concept | 35 | adapter fallback (compact canvas inside the same `<details>`) |
| **Total** | **109** | |

The adapter converts `mechanism.steps` into a linear graph (steps verbatim, causal order preserved) and the `mechanism.grade` travels as the edge evidence qualifier. Rich per-course node typing is the next content phase.
