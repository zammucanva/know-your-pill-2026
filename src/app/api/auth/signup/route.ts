import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

// This route must be dynamic — it reads/writes cookies and queries the database.
// Setting force-static breaks cookie modification (the route becomes a build-time
// artifact with no runtime). In GitHub Pages (static export) mode these routes
// are simply not included in the build, which is the correct behavior there.
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import {
  createSessionForUser,
  mintDecoySessionToken,
  SESSION_TTL_SECONDS,
  setSessionCookie,
} from "@/lib/session";
import { isSessionSecretConfigured } from "@/lib/session-secret";
import { validatePasswordPolicy } from "@/lib/password-policy";
import {
  checkSignupAllowed,
  getClientSource,
  recordSignupAttempt,
} from "@/lib/rate-limit";

/**
 * POST /api/auth/signup
 *
 * Hardened, ENUMERATION-RESISTANT signup flow:
 *   1. validate name/email/password shape (identical 400s for every input)
 *   2. hash password (bcrypt cost 12) — ALWAYS, on both the new-account and
 *      existing-account paths, so wall-clock timing cannot distinguish them
 *   3. create the user (duplicate prevention is the database's unique
 *      constraint; races surface as P2002 and fall into the uniform path)
 *   4. mint a FRESH random server-side session immediately (fixation
 *      resistance — no pre-authentication token is ever carried over)
 *
 * BCRYPT ABUSE PROTECTION: the request source is derived server-side and
 * throttled BEFORE the bcrypt work (per-source budget + bounded global
 * backstop). The throttle is keyed on the source ONLY — never on the
 * submitted email — and runs before any user lookup, so it cannot become
 * an account-existence oracle.
 *
 * ANTI-ENUMERATION CONTRACT (Security Objective 2):
 *   The response for an email that is ALREADY REGISTERED is byte-shape
 *   identical to the response for a brand-new account:
 *     - same status (200)
 *     - same JSON keys {name, email, learnerType, emailVerified}
 *       (echoing only values the requester just submitted, plus constants
 *       a new signup would receive — no user id, no verification state)
 *     - same Set-Cookie header shape: a format-identical session cookie.
 *       For existing emails the cookie value is a decoy token (random
 *       signature) that fails server-side validation, so no account is
 *       accessible — but the header is indistinguishable client-side.
 *   The account is NOT created (no duplicate rows, no session row, no
 *   login), and no error message distinguishes the two cases.
 *
 * Residual channel (documented, inherent to auto-login signup): an attacker
 * who then attempts an authenticated request can notice the session does
 * not resolve. Closing that fully requires moving account confirmation to
 * email verification — a product decision outside this remediation.
 *
 * Fails closed with HTTP 500 when SESSION_SECRET is not configured.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Prisma unique-constraint violation code (lost the race to create). */
function isUniqueConstraintViolation(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: unknown }).code === "P2002"
  );
}

/** The exact response every signup attempt receives when the email is
 * already registered — status, body keys, and Set-Cookie shape are all
 * identical to a successful new-account signup. */
async function uniformExistingEmailResponse(name: string, normalizedEmail: string) {
  await setSessionCookie(
    mintDecoySessionToken(),
    new Date(Date.now() + SESSION_TTL_SECONDS * 1000)
  );
  return NextResponse.json({
    name,
    email: normalizedEmail,
    learnerType: "student",
    emailVerified: false,
  });
}

export async function POST(req: NextRequest) {
  if (!isSessionSecretConfigured()) {
    return NextResponse.json(
      { error: "Authentication is temporarily unavailable" },
      { status: 500 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { name, email, password } = (body ?? {}) as {
      name?: unknown;
      email?: unknown;
      password?: unknown;
    };

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" ||
        name.length === 0 || email.length === 0 || password.length === 0) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Unified password policy (8–128) — shared with change/reset.
    const policy = validatePasswordPolicy(password, { subject: "Password" });
    if (!policy.ok) {
      return NextResponse.json({ error: policy.message }, { status: 400 });
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase().trim();

    // ── Abuse control BEFORE the expensive bcrypt work ──
    // The source is derived server-side (never client-supplied) and the
    // budget is keyed on the source only, so throttling is identical for
    // registered and unregistered emails — a 429 is never an account signal.
    const source = getClientSource(req);
    const signupDecision = await checkSignupAllowed(source);
    if (!signupDecision.allowed) {
      return NextResponse.json(
        { error: "Too many signup attempts. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(signupDecision.retryAfterSeconds) },
        }
      );
    }
    // Count this attempt BEFORE burning the hash cycles, on every path
    // that reaches this point (new account AND existing-email uniform).
    await recordSignupAttempt(source);

    // Timing equalisation: hash the password BEFORE the existence check so
    // both paths perform the same expensive bcrypt work. The hash of the
    // existing-account path is discarded — it exists only to equalise cost.
    const passwordHash = await bcrypt.hash(password, 12);

    const existing = await db.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      // EXISTING EMAIL — uniform "success-looking" response. No account is
      // created, no session row exists; the cookie is a format-identical
      // decoy that can never authenticate. Body echoes only submitted
      // values plus the constants a fresh signup would receive.
      return uniformExistingEmailResponse(name, normalizedEmail);
    }

    // Create user. A concurrent signup racing on the same email trips the
    // unique constraint (P2002) — caught here and answered with the SAME
    // uniform response, so duplicates are impossible and the race leaks
    // nothing.
    const user: { id: string; name: string; email: string; learnerType: string; emailVerified: boolean } | null =
      await db.user
        .create({
          data: {
            name,
            email: normalizedEmail,
            passwordHash,
            learnerType: "student",
            role: "user",
          },
        })
        .then(
          (created) => created,
          (error: unknown) => {
            if (isUniqueConstraintViolation(error)) return null;
            throw error;
          }
        );
    if (user === null) {
      return uniformExistingEmailResponse(name, normalizedEmail);
    }

    // Fresh server-side session (opaque signed token, hash persisted)
    const session = await createSessionForUser(user.id);
    await setSessionCookie(session.token, session.expiresAt);

    return NextResponse.json({
      name: user.name,
      email: user.email,
      learnerType: user.learnerType,
      emailVerified: user.emailVerified,
    });
  } catch (error) {
    logger.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}
