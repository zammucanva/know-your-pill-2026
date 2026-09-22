# KYP deployment architecture

KYP has two intentionally separate deployment targets.

## 1. GitHub Pages — public/static experience

Build with:

```bash
bun run build:export
```

Set:

```text
GITHUB_PAGES=1
```

This target is for public educational pages and static assets. It does **not** provide:

- Next.js API routes
- Prisma runtime
- SQLite writes
- server-side authentication sessions
- password-reset delivery

Authenticated features must not be assumed to work on GitHub Pages.

## 2. Node/server deployment — full KYP application

The server target runs the standalone Next.js application and provides:

- API routes
- Prisma
- database-backed sessions
- progress
- bookmarks
- search history
- password reset

### Database migrations (versioned)

Schema changes are applied exclusively by VERSIONED Prisma migrations
(`prisma/migrations/`) — `prisma db push` is never the production
migration mechanism.

**Fresh database (new deployments, CI, containers):**

```bash
bunx prisma migrate deploy
```

This is idempotent: it applies every migration that has not run yet and
is safe to re-run on every deployment.

**Legacy database (created by the historical `db push` workflow):**

```bash
# 1. One-time data upgrade: backfills User.learnerType from the legacy
#    User.role values and normalises role to the authorization vocabulary.
bun scripts/prepare-database.ts

# 2. Baseline the schema that already exists, so the migration history
#    adopts the database without re-creating tables.
bunx prisma migrate resolve --applied 20260922000000_init

# 3. From now on, deploy versioned migrations (no-op immediately after
#    the baseline; applies future migrations).
bunx prisma migrate deploy
```

The combined `bun run db:prepare` script runs the legacy data upgrade
followed by `migrate deploy`. Data is never reset or dropped; the
upgrade path only ADDS the learnerType column and backfills values.

Local development keeps the normal Prisma workflow (`bun run db:migrate`
→ `prisma migrate dev`), which creates new versioned migrations.

Required authentication environment:

```text
SESSION_SECRET=<at least 32 random characters>
DATABASE_URL=<server database URL>
TRUSTED_PROXY_HEADERS=1   # only when the hosting infrastructure overwrites/controls forwarding headers
RESEND_API_KEY=<production email provider key>
EMAIL_FROM=<verified sender>
APP_BASE_URL=https://your-production-domain.example
```

If the server is directly exposed to clients rather than sitting behind a trusted proxy, leave `TRUSTED_PROXY_HEADERS` unset. This prevents clients from spoofing forwarding headers to manipulate source-based throttling.

## Password reset delivery

Production password reset delivery uses the Resend HTTP API.

The raw reset token is:

- generated randomly
- stored only as a SHA-256 hash
- sent only to the configured email provider
- never returned by the API
- never written to application logs

The reset link is:

```text
{APP_BASE_URL}/reset?token=<single-use-token>
```

For automated tests, `EMAIL_PROVIDER=mock` prevents outbound email.

## Authorization model

`learnerType` controls educational personalization.

`role` controls authorization:

- `user`
- `moderator`
- `admin`

Ordinary users may change `learnerType`. They cannot change `role`.

Never use learnerType as a privileged authorization check.

## Dependency security

Keep GitHub's Dependency graph / Dependabot enabled for the repository. Dependabot is configured in `.github/dependabot.yml` for weekly dependency update proposals.

The CI quality job also runs the repository's OSV audit, which scans every package installed in `node_modules` and classifies findings by production reachability:

```bash
bun run osv
```

The OSV script itself distinguishes direct runtime dependencies, build/test tooling, and production-reachable transitive dependencies. Dependabot/GitHub's dependency graph is the complementary transitive-dependency layer. If Dependency graph is disabled in repository settings, enable it under **Settings → Security & analysis** so GitHub can populate dependency intelligence.
