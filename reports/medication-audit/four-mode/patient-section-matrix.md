# Patient explanation: medicine-by-section gap matrix

145 medicines by nine parts. Generated from the part states the page shows (`bun scripts/audit-four-mode-coverage.ts`); do not edit by hand. Content classes are not a quality ranking and are never combined into one percentage. Nothing here is clinically reviewed.

| Part | patient-guide | source-backed | safety-alert-only | generic-or-template | unavailable |
|---|---:|---:|---:|---:|---:|
| what | 12 | 73 | 0 | 60 | 0 |
| uses | 12 | 125 | 0 | 8 | 0 |
| how | 12 | 125 | 0 | 1 | 7 |
| precautions | 12 | 125 | 0 | 0 | 8 |
| side-effects | 12 | 122 | 2 | 9 | 0 |
| interactions | 12 | 121 | 0 | 12 | 0 |
| seek-help | 12 | 105 | 0 | 28 | 0 |
| questions | 12 | 0 | 0 | 133 | 0 |
| sources | 12 | 125 | 0 | 0 | 8 |

- patient-guide: written in an authored Patient Guide.
- source-backed: backed by at least one stored statement from a product label, leaflet, formulary entry or patient-information page that names its source (never an Indian product label unless the dashboard says so).
- safety-alert-only: backed only by an Indian PvPI safety-alert list entry (a signal from reports, not a label).
- generic-or-template: guide wording, standard wording shared by many medicines, or a general direction. Not specific evidence about this medicine.
- unavailable: nothing supported to show; the page says so.

Per-medicine cells: `patient-section-matrix.csv`.
