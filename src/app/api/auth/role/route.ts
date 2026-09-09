import { NextRequest, NextResponse } from "next/server";

// This route must be dynamic — it reads cookies and queries the database.
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

/**
 * POST /api/auth/role
 *
 * Updates the authenticated user's role.
 *
 * Security model:
 *   - the user is resolved from the SERVER-SIDE session (not from any
 *     client-supplied id/email/role claim)
 *   - the role value is validated against the allow-list
 *   - the write targets the session-resolved user id only
 *   - no session cookie re-issuing is needed: user data (including role)
 *     is resolved fresh from the database on every request
 */
export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { role } = (body ?? {}) as { role?: unknown };
    if (typeof role !== "string") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const validRoles = [
      "patient",
      "student",
      "medical_resident",
      "medical_student",
      "psychiatrist",
      // Legacy roles (for backward compatibility with existing accounts)
      "mbbs_student",
      "exam_aspirant",
      "psychiatry_resident",
      "healthcare_professional",
    ];

    if (!validRoles.includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const updated = await db.user.update({
      where: { id: user.id },
      data: { role },
    });

    return NextResponse.json({ role: updated.role });
  } catch (error) {
    console.error("Role update error:", (error as Error)?.name ?? "UnknownError");
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
