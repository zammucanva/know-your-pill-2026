import { NextResponse } from "next/server";

// Mark as static for GitHub Pages export (API routes are not functional in static export)
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}