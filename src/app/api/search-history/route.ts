import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

const MAX_HISTORY_PER_USER = 50;

/**
 * GET /api/search-history
 * Returns the current user's recent search queries, newest first.
 *
 * Query params:
 *   ?limit=10  — max results (default 10, max 50)
 *
 * Response: [{ id, query, resultType, resultSlug, resultTitle, createdAt }]
 */
export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limitParam = searchParams.get("limit");
  const limit = Math.min(Math.max(parseInt(limitParam || "10", 10) || 10, 1), MAX_HISTORY_PER_USER);

  const history = await db.searchHistory.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      query: true,
      resultType: true,
      resultSlug: true,
      resultTitle: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ history });
}

/**
 * POST /api/search-history
 * Records a search query. Auto-trims to MAX_HISTORY_PER_USER entries per user
 * (oldest entries deleted when limit exceeded).
 *
 * Body: { query: string, resultType?: string, resultSlug?: string, resultTitle?: string }
 *
 * Response: { id, query, createdAt }
 */
export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { query, resultType, resultSlug, resultTitle } = await req.json();

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return NextResponse.json(
        { error: "query is required" },
        { status: 400 }
      );
    }

    // Don't record duplicate consecutive queries
    const lastEntry = await db.searchHistory.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      select: { query: true },
    });

    if (lastEntry?.query === query.trim()) {
      // Update the existing entry's timestamp instead of creating a duplicate
      const updated = await db.searchHistory.updateMany({
        where: { userId: user.id, query: query.trim() },
        data: {
          createdAt: new Date(),
          resultType: resultType || null,
          resultSlug: resultSlug || null,
          resultTitle: resultTitle || null,
        },
      });
      if (updated.count > 0) {
        const entry = await db.searchHistory.findFirst({
          where: { userId: user.id, query: query.trim() },
          orderBy: { createdAt: "desc" },
          select: { id: true, query: true, createdAt: true },
        });
        return NextResponse.json(entry);
      }
    }

    const entry = await db.searchHistory.create({
      data: {
        userId: user.id,
        query: query.trim(),
        resultType: resultType || null,
        resultSlug: resultSlug || null,
        resultTitle: resultTitle || null,
      },
      select: {
        id: true,
        query: true,
        createdAt: true,
      },
    });

    // Auto-trim: if user has more than MAX entries, delete the oldest ones
    const count = await db.searchHistory.count({ where: { userId: user.id } });
    if (count > MAX_HISTORY_PER_USER) {
      const oldest = await db.searchHistory.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        skip: MAX_HISTORY_PER_USER,
        select: { id: true },
      });
      if (oldest.length > 0) {
        await db.searchHistory.deleteMany({
          where: {
            userId: user.id,
            id: { in: oldest.map((e) => e.id) },
          },
        });
      }
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error("SearchHistory POST error:", error);
    return NextResponse.json(
      { error: "Failed to record search" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/search-history
 * Clears search history for the current user.
 */
export async function DELETE() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await db.searchHistory.deleteMany({ where: { userId: user.id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SearchHistory DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to clear search history" },
      { status: 500 }
    );
  }
}
