import { cookies } from "next/headers";
import { db } from "@/lib/db";

/**
 * getSessionUser — shared helper for API routes.
 *
 * Reads the kyp-session cookie, validates it, and returns the user record
 * from the database (so we always have fresh data, not stale cookie data).
 *
 * Returns null if:
 * - no cookie present
 * - cookie is malformed
 * - user no longer exists in DB (e.g. deleted)
 *
 * Usage:
 *   const user = await getSessionUser();
 *   if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
 */
export async function getSessionUser() {
  const sessionCookie = (await cookies()).get("kyp-session");
  if (!sessionCookie) return null;

  try {
    const session = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    // Fetch the user from DB to ensure they still exist and get fresh data
    const user = await db.user.findUnique({
      where: { id: session.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        emailVerified: true,
      },
    });

    return user;
  } catch {
    return null;
  }
}

/**
 * Refresh the session cookie with updated user data.
 * Call this after updating user fields (e.g. role change).
 */
export async function refreshSessionCookie(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, name: true, role: true },
  });
  if (!user) return;

  const sessionToken = Buffer.from(JSON.stringify(user)).toString("base64");
  (await cookies()).set("kyp-session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });
}
