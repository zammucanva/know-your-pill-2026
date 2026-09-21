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

Before first startup against an existing database, run:

```bash
bun run db:prepare
```

The preparation step safely migrates the legacy `User.role` learner values into `User.learnerType` and normalizes ordinary users to `role=user`. It then synchronizes the Prisma schema.

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
