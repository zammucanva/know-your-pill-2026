import { logger } from "@/lib/logger";\nimport { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { isKypContentType, resolveContent } from "@/lib/kyp/data";

export const dynamic = "force-dynamic";
const MAX_HISTORY_PER_USER = 50;

export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const raw = new URL(req.url).searchParams.get("limit");
  const parsed = raw === null ? 10 : Number(raw);
  const limit = Number.isInteger(parsed) ? Math.min(Math.max(parsed, 1), MAX_HISTORY_PER_USER) : 10;
  const history = await db.searchHistory.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: limit,
    select: { id: true, query: true, resultType: true, resultSlug: true, resultTitle: true, createdAt: true },
  });
  return NextResponse.json({ history });
}

export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json() as {
      query?: unknown;
      resultType?: unknown;
      resultSlug?: unknown;
    };
    if (typeof body.query !== "string" || !body.query.trim() || body.query.trim().length > 500) {
      return NextResponse.json({ error: "query is required and must be at most 500 characters" }, { status: 400 });
    }

    let canonicalResult: { type: string; slug: string; title: string } | null = null;
    if (body.resultType !== undefined || body.resultSlug !== undefined) {
      if (!isKypContentType(body.resultType) || typeof body.resultSlug !== "string") {
        return NextResponse.json({ error: "Invalid search result reference" }, { status: 400 });
      }
      canonicalResult = resolveContent(body.resultType, body.resultSlug);
      if (!canonicalResult) return NextResponse.json({ error: "Unknown KYP content" }, { status: 404 });
    }

    const query = body.query.trim();
    const now = new Date();
    const entry = await db.$transaction(async (tx) => {
      const last = await tx.searchHistory.findFirst({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        select: { id: true, query: true },
      });

      if (last?.query === query) {
        return tx.searchHistory.update({
          where: { id: last.id },
          data: {
            createdAt: now,
            resultType: canonicalResult?.type ?? null,
            resultSlug: canonicalResult?.slug ?? null,
            resultTitle: canonicalResult?.title ?? null,
          },
          select: { id: true, query: true, createdAt: true },
        });
      }

      const created = await tx.searchHistory.create({
        data: {
          userId: user.id,
          query,
          resultType: canonicalResult?.type ?? null,
          resultSlug: canonicalResult?.slug ?? null,
          resultTitle: canonicalResult?.title ?? null,
        },
        select: { id: true, query: true, createdAt: true },
      });

      const overflow = await tx.searchHistory.findMany({
        where: { userId: user.id },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        skip: MAX_HISTORY_PER_USER,
        select: { id: true },
      });
      if (overflow.length) {
        await tx.searchHistory.deleteMany({ where: { id: { in: overflow.map((row) => row.id) }, userId: user.id } });
      }
      return created;
    });

    return NextResponse.json(entry);
  } catch (error) {
    logger.error("SearchHistory POST error:", error);
    return NextResponse.json({ error: "Failed to record search" }, { status: 500 });
  }
}

export async function DELETE() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await db.searchHistory.deleteMany({ where: { userId: user.id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("SearchHistory DELETE error:", error);
    return NextResponse.json({ error: "Failed to clear search history" }, { status: 500 });
  }
}
