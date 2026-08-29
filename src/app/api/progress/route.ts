import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

/**
 * GET /api/progress
 * Returns the current user's recently visited pages, sorted by lastVisitedAt desc.
 *
 * Query params:
 *   ?type=drug  — filter by type (drug | substance | disease)
 *   ?limit=20   — max results (default 20, max 100)
 *
 * Response: [{ id, type, slug, title, lastVisitedAt, visitCount }]
 */
export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const limitParam = searchParams.get("limit");
  const limit = Math.min(Math.max(parseInt(limitParam || "20", 10) || 20, 1), 100);

  const where: { userId: string; type?: string } = { userId: user.id };
  if (type) where.type = type;

  const progress = await db.progress.findMany({
    where,
    orderBy: { lastVisitedAt: "desc" },
    take: limit,
    select: {
      id: true,
      type: true,
      slug: true,
      title: true,
      lastVisitedAt: true,
      visitCount: true,
    },
  });

  return NextResponse.json({ progress });
}

/**
 * POST /api/progress
 * Records a page visit. Upserts — if the page was visited before, updates
 * lastVisitedAt and increments visitCount. Otherwise creates a new row.
 *
 * Body: { type: "drug" | "substance" | "disease", slug: string, title: string }
 *
 * Response: { id, type, slug, title, lastVisitedAt, visitCount }
 */
export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { type, slug, title } = await req.json();

    if (!type || !slug || !title) {
      return NextResponse.json(
        { error: "type, slug, and title are required" },
        { status: 400 }
      );
    }

    const validTypes = ["drug", "substance", "disease"];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: "type must be one of: drug, substance, disease" },
        { status: 400 }
      );
    }

    const progress = await db.progress.upsert({
      where: {
        userId_type_slug: { userId: user.id, type, slug },
      },
      update: {
        lastVisitedAt: new Date(),
        visitCount: { increment: 1 },
        title, // update in case the title changed
      },
      create: {
        userId: user.id,
        type,
        slug,
        title,
      },
      select: {
        id: true,
        type: true,
        slug: true,
        title: true,
        lastVisitedAt: true,
        visitCount: true,
      },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress POST error:", error);
    return NextResponse.json(
      { error: "Failed to record progress" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/progress
 * Clears all progress for the current user (or a single entry if ?id= or ?type=&slug= provided).
 */
export async function DELETE(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  try {
    if (id) {
      await db.progress.deleteMany({ where: { id, userId: user.id } });
    } else if (type && slug) {
      await db.progress.deleteMany({
        where: { userId: user.id, type, slug },
      });
    } else {
      // Clear all
      await db.progress.deleteMany({ where: { userId: user.id } });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Progress DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to clear progress" },
      { status: 500 }
    );
  }
}
