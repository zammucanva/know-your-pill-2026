# KYP SEC-01 History Rewrite — Record and Recovery Guide

This document records the SEC-01 Git history purge performed locally on the
KYP repository, the evidence trail, and the rollback procedure. It was
committed to the REWRITTEN history (this commit is itself part of the
post-purge `main` branch).

## What was done

`git filter-repo --force --invert-paths --path db/custom.db --path .env
--refs main design/kyp-visual-p0`

- Removed EXACTLY two paths from the reachable history of the two
  production branches: `db/custom.db` and `.env`. No other file, path, or
  ref was touched.
- `git filter-branch` was NOT used. `git push --mirror` was NOT used and
  must never be used (recovery refs must stay out of any push).

## Pre-purge exposure map (verified before the rewrite)

| Path | Commits touching | Distinct blobs | First | Last | Present at tips |
|---|---|---|---|---|---|
| `db/custom.db` | 8 (both branches) | 7 | 26d5685 (2026-07-13) | 35a90f1 (2026-08-29) | yes |
| `.env` | 2 (both branches) | 1 (50 bytes, `DATABASE_URL` only — no secret values) | 856a43c (2026-07-13) | c52e5fa (2026-07-13) | yes |

- No other `*.db` / `*.sqlite` / `*.sqlite3` files exist anywhere in either
  branch's reachable history; the database blobs live only at the single
  path `db/custom.db` (no renames or copies).
- A secret-family pattern scan (private keys, AWS/Google/OpenAI/GitHub
  tokens, JWTs, webhooks, hardcoded passwords) across all 1730 reachable
  objects found ZERO matches.

## Post-purge verification (all re-verified after the rewrite)

- `db/custom.db`: 0 reachable commits, 0 reachable blobs, 0 tree entries on
  both `main` and `design/kyp-visual-p0`.
- `.env`: 0 reachable commits, 0 reachable blobs, 0 tree entries on both
  branches.
- No alternate or renamed database copies exist in reachable history.

## History equivalence proof

- Commit map: 107 commits mapped 1:1 (105 on `main` including the security
  hardening commits, 100 on `design`, 107 unique across both), 0 commits
  pruned as empty.
- Commit messages, authors, emails, and timestamps: identical 105/105 on
  `main`; `git log --format="%s|%an|%ae|%ad"` diff is empty.
- Parent-count topology (merge structure): identical sequence.
- Tree diff between pre-rewrite and post-rewrite refs, excluding the two
  purged paths: EMPTY for both branches. The only differences in the entire
  rewrite are the removal of `db/custom.db` (69632 bytes at tip) and `.env`
  (50 bytes).
- Every one of the 8 db-bearing commits was rewritten 1:1 with zero content
  differences outside the purged paths.

## Runtime files (important distinction)

History removal is NOT file deletion. The local runtime files
`db/custom.db` (byte-identical to the pre-rewrite working copy,
sha256 `f19f2dbd…`) and `.env` were restored on disk as **ignored,
untracked** files (`.gitignore`: `.env*`, `db/*.db`). They can never be
staged or committed again. The five real users and all data in the runtime
database are untouched.

## Recovery material (LOCAL ONLY — never push)

- Bundle: `sec01-recovery/kyp-recovery-pre-sec01.bundle`
  SHA-256: `c2b59484f34a379c06b36c0da32c1a95ae1805af5225a0874a6d1bd4b224a3c8`
  (recorded in `sec01-recovery/RECOVERY-BUNDLE-SHA256.txt`)
  Contains the complete pre-purge history of both production branches
  (`main` = 538cfc7a, `design/kyp-visual-p0` = 40607ef2). Restorability was
  proven in a disposable test clone before the rewrite.
- Refs: `refs/recover/pre-sec01-main` (538cfc7a) and
  `refs/recover/pre-sec01-design` (40607ef2) — deliberately OUTSIDE
  `refs/heads/*` and `refs/tags/*` so no normal push (and never
  `--mirror`) can include them.

### Rollback procedure (local, if ever needed)

```bash
git fetch sec01-recovery/kyp-recovery-pre-sec01.bundle 'refs/heads/*:refs/heads/*'
# or: git update-ref refs/heads/main refs/recover/pre-sec01-main
#     git update-ref refs/heads/design/kyp-visual-p0 refs/recover/pre-sec01-design
```

## Push plan (requires explicit human approval — NOT executed)

The intended push, only after separate explicit approval:

```bash
git push --force-with-lease origin \
  main:main \
  design/kyp-visual-p0:design/kyp-visual-p0
```

- This is a history-rewriting push. Collaborators with old clones must
  re-synchronize.
- Old sensitive objects may remain UNREACHABLE on GitHub temporarily; this
  push does not itself prove physical deletion. GitHub-side garbage
  collection (via GitHub Support) may still be required.
- Recovery refs, tags, stashes, and any other branches must never be
  included.

## Follow-up operations (all separate, none performed here)

1. Production database migration for the new `Session` and `LoginAttempt`
   tables (see KYP-SECURITY-VERIFICATION.md).
2. `SESSION_SECRET` configuration in the production environment (>= 32
   random bytes; never committed, printed, or exposed client-side).
3. Application deployment.
4. Password-reset coordination for the five real accounts whose historical
   bcrypt hashes were present in the exposed database artifact (no emails
   or hashes are recorded in this document).
5. GitHub Support garbage-collection request if required.
