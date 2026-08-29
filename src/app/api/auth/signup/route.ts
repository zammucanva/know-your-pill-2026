import { NextRequest, NextResponse } from "next/server";

// This route must be dynamic — it reads/writes cookies and queries the database.
// Setting force-static breaks cookie modification (the route becomes a build-time
// artifact with no runtime). In GitHub Pages (static export) mode these routes
// are simply not included in the build, which is the correct behavior there.
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existing = await db.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "student", // default — user selects their actual role in onboarding
      },
    });

    // Set a simple session cookie (not JWT, but secure enough for v1)
    const sessionToken = Buffer.from(
      JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role })
    ).toString("base64");

    (await cookies()).set("kyp-session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      emailVerified: user.emailVerified,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}
