import { logger } from "@/lib/logger";\nimport { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { isKypContentType } from "@/lib/kyp/data";\nimport { resolveContent } from "@/lib/kyp/data/content-registry";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const params = new URL(req.url).searchParams;
  const type = params.get("type");
  const limitParam = params.get("limit");
  if (type && !isKypContentType(type)) return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  const parsed = limitParam === null ? 20 : Number(limitParam);
  const limit = Number.isInteger(parsed) ? Math.min(Math.max(parsed, 1), 100) : 20;
  const progress = await db.progress.findMany({
    where: { userId: user.id, ...(type ? { type } : {}) },
    orderBy: { lastVisitedAt: "desc" },
    take: limit,
    select: { id: true, type: true, slug: true, title: true, lastVisitedAt: true, visitCount: true },
  });
  return NextResponse.json({ progress });
}

export async function POST(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json() as { type?: unknown; slug?: unknown };
    if (!isKypContentType(body?.type) || typeof body.slug !== "string") {
      return NextResponse.json({ error: "Valid type and slug are required" }, { status: 400 });
    }
    const content = resolveContent(body.type, body.slug);
    if (!content) return NextResponse.json({ error: "Unknown KYP content" }, { status: 404 });
    const progress = await db.progress.upsert({
      where: { userId_type_slug: { userId: user.id, type: content.type, slug: content.slug } },
      update: { lastVisitedAt: new Date(), visitCount: { increment: 1 }, title: content.title },
      create: { userId: user.id, type: content.type, slug: content.slug, title: content.title },
      select: { id: true, type: true, slug: true, title: true, lastVisitedAt: true, visitCount: true },
    });
    return NextResponse.json(progress);
  } catch (error) {
    logger.error("Progress POST error:", error);
    return NextResponse.json({ error: "Failed to record progress" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const params = new URL(req.url).searchParams;
  const id = params.get("id");
  const type = params.get("type");
  const slug = params.get("slug");
  if (type && !isKypContentType(type)) return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  if ((type && !slug) || (!type && slug)) return NextResponse.json({ error: "type and slug must be supplied together" }, { status: 400 });
  try {
    if (id) {
      await db.progress.deleteMany({ where: { id, userId: user.id } });
    } else if (type && slug) {
      const content = resolveContent(type, slug);
      if (!content) return NextResponse.json({ error: "Unknown KYP content" }, { status: 404 });
      await db.progress.deleteMany({ where: { userId: user.id, type: content.type, slug: content.slug } });
    } else {
      await db.progress.deleteMany({ where: { userId: user.id } });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Progress DELETE error:", error);
    return NextResponse.json({ error: "Failed to clear progress" }, { status: 500 });
  }
}
