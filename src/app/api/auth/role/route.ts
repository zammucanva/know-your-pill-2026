import { logger } from "@/lib/logger";\nimport { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

const VALID_LEARNER_TYPES = [
  "patient",
  "student",
  "medical_resident",
  "medical_student",
  "psychiatrist",
  "mbbs_student",
  "exam_aspirant",
  "psychiatry_resident",
  "healthcare_professional",
] as const;

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    let body: unknown;
    try { body = await req.json(); } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const learnerType = (body as { learnerType?: unknown } | null)?.learnerType;
    if (typeof learnerType !== "string" || !VALID_LEARNER_TYPES.includes(learnerType as typeof VALID_LEARNER_TYPES[number])) {
      return NextResponse.json({ error: "Invalid learner type" }, { status: 400 });
    }

    const updated = await db.user.update({
      where: { id: user.id },
      data: { learnerType },
      select: { learnerType: true },
    });

    return NextResponse.json({ learnerType: updated.learnerType });
  } catch (error) {
    logger.error("Learner profile update error:", error);
    return NextResponse.json({ error: "Failed to update learner profile" }, { status: 500 });
  }
}
