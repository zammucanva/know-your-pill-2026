import { NextRequest, NextResponse } from "next/server";
import { verifyFirebaseToken } from "@/lib/firebase-admin";
import { db } from "@/lib/db";
import { createSessionForUser, setSessionCookie } from "@/lib/session";
import { isSessionSecretConfigured } from "@/lib/session-secret";
import { logger } from "@/lib/logger";

export const dynamic = "force-dynamic";

/**
 * POST /api/auth/google
 *
 * Accepts a Firebase ID token from the client, verifies it server-side,
 * then finds or creates the user in Supabase and issues a KYP session cookie.
 *
 * Body: { idToken: string }
 * Response: { id, name, email, learnerType, emailVerified, isNew }
 */
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
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { idToken } = (body ?? {}) as { idToken?: unknown };
    if (typeof idToken !== "string" || idToken.length === 0) {
      return NextResponse.json({ error: "idToken is required" }, { status: 400 });
    }

    // Verify token with Firebase Admin — rejects tampered or expired tokens
    let decoded: Awaited<ReturnType<typeof verifyFirebaseToken>>;
    try {
      decoded = await verifyFirebaseToken(idToken);
    } catch {
      return NextResponse.json({ error: "Invalid or expired Google token" }, { status: 401 });
    }

    const { uid, email, name, email_verified } = decoded;
    if (!email) {
      return NextResponse.json({ error: "Google account has no email address" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Upsert user: find by email first (handles linking existing email accounts),
    // then fall back to creating a new Google-provider account.
    let isNew = false;
    let user = await db.user.findUnique({ where: { email: normalizedEmail } });

    if (!user) {
      isNew = true;
      user = await db.user.create({
        data: {
          email: normalizedEmail,
          name: name ?? normalizedEmail.split("@")[0],
          passwordHash: "",
          emailVerified: email_verified ?? false,
          provider: "google",
          providerAccountId: uid,
        },
      });
    } else if (user.provider === "email") {
      // Existing email/password account — link Google provider
      user = await db.user.update({
        where: { id: user.id },
        data: {
          providerAccountId: uid,
          emailVerified: true,
        },
      });
    }

    const session = await createSessionForUser(user.id);
    await setSessionCookie(session.token, session.expiresAt);

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      learnerType: user.learnerType,
      emailVerified: user.emailVerified,
      isNew,
    });
  } catch (error) {
    logger.error("Google auth error:", error);
    return NextResponse.json(
      { error: "Google sign-in failed. Please try again." },
      { status: 500 }
    );
  }
}
