import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { role } = await req.json();

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

    // Get user from session cookie
    const sessionCookie = (await cookies()).get("kyp-session");
    if (!sessionCookie) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const session = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    const user = await db.user.update({
      where: { id: session.id },
      data: { role },
    });

    // Update session cookie with new role
    const sessionToken = Buffer.from(
      JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role })
    ).toString("base64");

    (await cookies()).set("kyp-session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return NextResponse.json({ role: user.role });
  } catch (error) {
    console.error("Role update error:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
