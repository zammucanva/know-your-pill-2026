# KYP Mechanism System — 145-Drug Census

**Generated:** 2026-10-06T12:31:03.663Z · **Baseline:** `a7131451f084ff1b22e57e2159b76dde07822e3f` · **Branch:** `feat/mechanism-system-replacement-v2` (local only)
**Classification (mission §27/§34):** ENGINE SUPPORT is not migration. FULLY_MAPPED = hand-authored rich graph; ADAPTER_FALLBACK = renders KYPMechanismCanvas via the legacy adapter (labels verbatim, richness pending).

## Totals

| Status | Count | % of 145 |
|---|---|---|
| FULLY MAPPED (hand-authored pilots) | **2** | 1.4% |
| ADAPTER FALLBACK (engine renders adapted data) | **143** | 98.6% |
| NO MECHANISM | 0 | 0% |
| ERROR | 0 | 0% |

All 145 drug pages render KYPMechanismCanvas. **Fully hand-mapped: 2/145.** The other 143 run through the legacy adapter (labels verbatim; entity typing, interventions, compartments, timelines pending the next content phase).

## Fully mapped

| Drug | Mechanism | Enrichment |
|---|---|---|
| Escitalopram | `pilot-escitalopram` | hand-authored rich graph (pilot registry) |
| Aripiprazole | `pilot-aripiprazole` | hand-authored rich graph (pilot registry) |

## Adapter fallback (143)

Every adapted graph passed validation, preserves all node/sublabel/edge labels verbatim, and lays out overlap-free (enforced by `tests/mechanism-normalize.test.ts`). Machine-readable rows: `mechanism-drug-census.json`.
