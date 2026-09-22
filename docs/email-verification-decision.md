# Signup account-existence channel — email verification decision record

Status: **CLASSIFICATION C (real account-existence channel) — full closure
requires a product decision; not implemented in this closure.**

Audited: 2026-09-22, final security closure branch
(`codex/kyp-final-security-closure`).
Executable evidence: `tests/signup-session-sidechannel.test.ts`
(pins both sides of the audited behavior).

## 1. Exact attack path

An unauthenticated attacker probes whether an email address is registered:

1. `POST /api/auth/signup` with a candidate address and the attacker's own
   password. The immediate response is byte-shape identical for registered
   and unregistered addresses (status 200; same body keys; format-identical
   `kyp-session` Set-Cookie; same bcrypt cost-12 timing floor).
2. The attacker applies the returned cookie exactly as a browser would and
   calls `GET /api/auth/session` (or any authenticated resource such as
   `GET /api/progress`).
3. The response differs between the cases:
   - Unregistered address → a new account was created and auto-logged-in →
     `{ "user": { ... } }` (HTTP 200 with a user object).
   - Registered address → no account was created; the cookie is a decoy →
     `{ "user": null }`.

Equivalent variant without any session check: sign up with the candidate
address, then attempt to log in with the attacker's own password. For an
unregistered address the attacker's signup CREATED the account, so the
login succeeds; for a registered address it fails with the uniform 401.
This create-then-login oracle exists in every open-signup system that
activates accounts without email ownership proof.

## 2. Exact observable difference

`GET /api/auth/session` body after signup: `{user: {...}}` (fresh account)
vs `{user: null}` (pre-existing address). Reliability: 100% per probe
(deterministic, not a timing side channel).

## 3. Why the decoy/session strategy cannot eliminate it

The decoy cookie closes every IMMEDIATE response channel (body, status,
headers, cookie shape) and is cryptographically unable to authenticate
(43.43 base64url shape; the signature segment is 256 bits of randomness
that fails the server-side HMAC check before any database lookup). But
the residual channel is not about the cookie: it is about whether signup
CREATED an account and issued a REAL session. The only ways to remove the
difference are:

- never issue a real session at signup (breaks the auto-login product
  behavior — and the create-then-login variant of the oracle remains), or
- never create a usable account until the requester proves ownership of
  the address (email verification).

Any response-level equalisation leaves the auto-login asymmetry intact
by definition.

## 4. Required verification architecture

Standard verify-on-signup flow: create the account in a PENDING
(unverified, not-yet-loginable) state, send a single-use, time-limited,
random verification token to the address, and only activate the account
(and mint sessions) after the token is redeemed. Both signup outcomes
(existing vs new address) must keep issuing identical HTTP responses —
the only asymmetry allowed is inside the address owner's inbox, which the
attacker cannot observe.

## 5. Security properties required

- Verification tokens: 256 bits of cryptographic randomness, stored ONLY
  as a salted/phashed value (SHA-256 minimum, mirroring the existing
  PasswordResetToken pattern), never logged, never returned by the API.
- Verification must not authenticate the requester as an EXISTING
  account under any circumstance.
- The verification endpoint must not leak whether an address has a
  pending signup (uniform responses for unknown/expired/used tokens).
- Rate limits must apply to token generation AND redemption.
- Resend flows must not create an enumeration oracle (resend responses
  identical for pending/registered/unknown addresses).

## 6. Rate-limit requirements

- Reuse the existing DB-backed source-keyed throttling
  (`src/lib/rate-limit.ts`) for signup, resend, and verification
  endpoints — same pre-bcrypt/pre-expensive-work ordering.
- Per-source budgets in line with the login/signup limits in this
  repository (window-based, time-bounded lockouts, bounded escalation,
  global backstop).
- No per-email counters that differ for registered vs unregistered
  addresses (that would reintroduce enumeration through throttling).

## 7. Token requirements

- Single-use; 256-bit random; delivered only to the submitted address;
  stored hashed; constant-time comparison on redemption; redemption
  invalidates all prior tokens for that address.

## 8. Expiry requirements

- Verification tokens expire (e.g. 24 hours) and are purged on expiry;
  expired tokens respond identically to unknown tokens.

## 9. Single-use requirements

- A redeemed token is marked consumed atomically (idempotent redemption
  response), cannot mint two sessions, and cannot be replayed after
  account activation.

## 10. Privacy / enumeration requirements

- Signup response shape stays EXACTLY as today (name/email/learnerType/
  emailVerified echo) for both existing and new addresses.
- Unverified accounts are invisible to other users; login attempts for
  unverified accounts must not reveal the verification state to
  arbitrary callers.
- Email sending failures must not produce differing HTTP behavior for
  registered vs unregistered addresses.

## 11. Product decision required

Implementing this changes core product semantics and MUST be decided by
the product owner:

- Do accounts become unusable until the email is verified? (Today:
  signup immediately logs the user in with full access.)
- What happens to progress/bookmarks made before verification if the
  address is never verified (retention window, then deletion)?
- Is a "someone tried to sign up with your address" notification sent to
  existing account owners? (Recommended; it also informs the victim.)
- Which email provider configuration is used in production (the
  Resend-based delivery in `src/lib/email.ts` exists and is used by
  password reset today)?

## Interim risk statement (current state)

- The channel requires one well-formed signup probe per candidate
  address and is rate-limited: 10 signups per source per 15 minutes,
  300 globally per 15 minutes, with time-bounded lockouts (max 30
  minutes). Mass harvesting is throttled to bounded rates and leaves
  visible account-creation spam.
- The immediate signup response reveals nothing; only an authenticated
  follow-up request does.
- No credentials, sessions, or PII are exposed by the channel — it
  reveals only the registration status of an address.

This record exists so the residual risk is explicitly documented rather
than silently ignored, per the final closure definition of done.
