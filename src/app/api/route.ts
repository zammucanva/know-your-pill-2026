import { NextResponse } from "next/server";

// Simple health-check endpoint.
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    message: "KYP API is running",
    timestamp: new Date().toISOString(),
  });
}