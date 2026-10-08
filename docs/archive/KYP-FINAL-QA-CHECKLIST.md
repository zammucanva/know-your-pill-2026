# KYP — Final QA Checklist (TESTING-ONLY state)

**Created**: 2026-09-30, at the end of the post-migration completion mission.
**State of this repository**: implementation complete; the ONLY remaining
activity is final testing / QA. Do not add features. Do not redesign.
Do not modify the source corpus.

This checklist defines the final QA pass. It is deliberately concrete:
every item names what to run or check and where. Items already covered by
the automated suite are marked (AUTO) — the final pass re-runs them as a
gate, plus the manual/visual items that automation cannot cover.

## 1. Unit & integration tests
- [ ] (AUTO) `bun run build && bun test tests/` — expect **848/848 pass**
      (with CI env: `DATABASE_URL=file:./db/ci.db`, `SESSION_SECRET`,
      `TRUSTED_PROXY_HEADERS=1`, `EMAIL_PROVIDER=mock`)

## 2–3. Registry & census
- [ ] (AUTO) `tests/psychiatry-site.test.ts` #4b + #15: 109 notes,
      109 registered courses, 0 missing / 0 duplicates / 0 silent deletions
- [ ] (AUTO) #6: all 109 lesson routes serve 200

## 4. Source corpus integrity
- [ ] `git status --porcelain download/kyp-notes/` — expect **empty**
- [ ] (AUTO) `bun run test:content-lock` — 32/32 hashes PASS

## 5. MCQ census
- [ ] (AUTO) corpus loader count = **719** (test #7 + generator output)
- [ ] (AUTO) self-test serves the 719-question entry point (#3)

## 6. Route census
- [ ] (AUTO) static export produces 109 `/psychiatry/[slug]` pages +
      hub + library + self-test
- [ ] (AUTO) #85: per-course outline totals match the completion contract

## 7–10. Knowledge graph / Knowledge Chain / evidence
- [ ] (AUTO) `tests/medical-knowledge-chain.test.ts` — Citalopram
      primary-target invariant (SERT primary; hERG secondary) intact
- [ ] (AUTO) #21–22: kgraph anchors + condition labels
- [ ] (AUTO) #17: every evidenceMap claim maps to registered sources
- [ ] (AUTO) medical-data snapshot: drugs/diseases/substances/categories
      hashes byte-identical to baseline (only searchIndex navigation
      metadata may differ — see normalization record §9)

## 11–13. Progress / search
- [ ] (AUTO) `tests/progress-store.test.ts` — snapshot reactivity + persistence
- [ ] (AUTO) `tests/routes-search.test.ts` — search index integrity (164 entries)
- [ ] (MANUAL) live: seed a course's progress → library shows the bar +
      Continue filter (verified locally 2026-09-30; re-verify on production)

## 14–19. Responsive / accessibility / motion
- [ ] (MANUAL) library at 375/390/768/1024/1440px — no horizontal
      overflow, chip bar scrollable, rail collapses correctly
- [ ] (MANUAL) keyboard-only pass: Tab through library rows, filters,
      chapter rail, course nav, next-course cards — visible focus everywhere
- [ ] (MANUAL) Escape closes search/modals; reduced-motion disables drift
      animations (`prefers-reduced-motion`)
- [ ] (MANUAL) dark + light mode on hub, library, course pages
- [ ] (MANUAL) touch targets ≥ 40px on mobile (filters, chips, rows)

## 20–22. Static export / Pages / direct routes
- [ ] (AUTO) `bun run build:export` succeeds; `out/` complete
- [ ] (MANUAL) direct-load a deep route with basePath on Pages:
      `/know-your-pill-2026/psychiatry/library#group-Q`, a course page,
      the self-test
- [ ] (MANUAL) internal links from the homepage psychiatry section,
      /learn pathway and every course's next-course block resolve live

## 23. Security regression
- [ ] (AUTO) `bun run test:security` (auth/privacy/idor) green
- [ ] No speculative email-verification was introduced; the residual
      signup follow-up session channel remains DOCUMENTED
      (`docs/email-verification-decision.md`, pinned by
      `tests/signup-session-sidechannel.test.ts`)

## 25. Cross-system Drug regression
- [ ] (AUTO) drug-section-copy / causal-view / graph-templates tests green
- [ ] (MANUAL) live spot-check: /drugs/sertraline renders the full
      25-section course; /learn medication pathway intact

## 26. Build reproducibility
- [ ] (AUTO) CI green end-to-end on the release commit

## 27. Deployment verification
- [ ] Pages deploy action succeeds for the merged main commit
- [ ] (MANUAL) live site serves the new library, homepage section,
      next-course blocks; 109/109 routes HTTP 200

## Explicitly out of scope for QA (no known work remaining)
- The 11 [PROPOSED] future courses — awaiting source material
  (parts 6–7); classification recorded in KYP-PSYCHIATRY-COVERAGE.md
- Psychopharmacology content — belongs to the Medication Library system
- The note-shell fallback in `/psychiatry/[slug]` — an intentional
  safety net (registry-driven dispatch), not dead code to remove
