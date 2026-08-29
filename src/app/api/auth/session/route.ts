import { NextResponse } from "next/server";

// This route must be dynamic — it reads/writes cookies.
export const dynamic = "force-dynamic";
import { cookies } from "next/headers";

export async function GET() {
  const sessionCookie = (await cookies()).get("kyp-session");

  if (!sessionCookie) {
    return NextResponse.json({ user: null });
  }

  try {
    const session = JSON.parse(
      Buffer.from(sessionCookie.value, "base64").toString()
    );

    return NextResponse.json({
      user: {
        id: session.id,
        name: session.name,
        email: session.email,
        role: session.role,
      },
    });
  } catch {
    return NextResponse.json({ user: null });
  }
}

export async function DELETE() {
  (await cookies()).delete("kyp-session");
  return NextResponse.json({ success: true });
}
