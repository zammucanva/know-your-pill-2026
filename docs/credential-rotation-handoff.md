# Credential rotation handoff (status: OUTSTANDING, not done)

**What was exposed:** during an earlier session, one line of the git-ignored `.env.local` was printed into a tool output. It was the PostgreSQL connection string for the Supabase database, including the database password. No other secret was shown. The value is not written in this repository, in any commit, or in any generated report (checked by `tests/no-secrets.test.ts` and a manual scan of the working tree, history and temp folders).

**Status:** rotation has NOT been done by anyone. Whether the old password still works was deliberately not tested, because that would mean connecting to production. Treat it as exposed until you rotate it.

## Steps (you do these in your own accounts)
1. **Supabase dashboard** for the project: Project Settings, Database, reset the database password. Use a long random value from a password manager. This invalidates the old one.
2. **Local:** edit `.env.local` yourself and replace the password inside `DATABASE_URL` and `DIRECT_URL`. Do not paste it into chat, issues or commits. `.env.local` is ignored by git.
3. **Vercel:** Project, Settings, Environment Variables: update `DATABASE_URL` and `DIRECT_URL` for Production, Preview and Development, then redeploy so running functions pick them up.
4. **Check for use of the old password:** in the Supabase dashboard look at database logs for connections you do not recognise since the exposure. If you find any, also rotate the service role key and the anon key (`SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) and review the project's recent data changes.
5. **Pooler and other clients:** anything else that connects with the same role (a database GUI, scheduled jobs, other deployments) needs the new password too.
6. Record the date you rotated, here or in your own notes. Nothing in this repository can confirm it for you.

## What the tests use instead
Tests never read `.env.local`. They use `KYP_TEST_DATABASE_URL` (a local database whose name contains "test") or the CI service defaults, and the harness refuses any non-local target. A temporary PostgreSQL used for verification was removed afterwards.
