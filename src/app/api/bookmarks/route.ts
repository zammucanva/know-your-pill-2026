import { logger } from "@/lib/logger";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { isKypContentType, resolveContent } from "@/lib/kyp/data/content-registry";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const type = new URL(req.url).searchParams.get("type");
  if (type && !isKypContentType(type)) return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  const bookmarks = await db.bookmark.findMany({
    where: { userId: user.id, ...(type ? { type } : {}) },
    orderBy: { createdAt: "desc" },
    select: { id: true, type: true, slug: true, title: true, createdAt: true },
  });
  return NextResponse.json({ bookmarks });
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
    const bookmark = await db.bookmark.upsert({
      where: { userId_type_slug: { userId: user.id, type: content.type, slug: content.slug } },
      update: { title: content.title },
      create: { userId: user.id, type: content.type, slug: content.slug, title: content.title },
      select: { id: true, type: true, slug: true, title: true, createdAt: true },
    });
    return NextResponse.json(bookmark);
  } catch (error) {
    logger.error("Bookmark POST error:", error);
    return NextResponse.json({ error: "Failed to save bookmark" }, { status: 500 });
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
      await db.bookmark.deleteMany({ where: { id, userId: user.id } });
    } else if (type && slug) {
      if (!isKypContentType(type)) return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
      const content = resolveContent(type, slug);
      if (!content) return NextResponse.json({ error: "Unknown KYP content" }, { status: 404 });
      await db.bookmark.deleteMany({ where: { userId: user.id, type: content.type, slug: content.slug } });
    } else {
      await db.bookmark.deleteMany({ where: { userId: user.id } });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Bookmark DELETE error:", error);
    return NextResponse.json({ error: "Failed to remove bookmark" }, { status: 500 });
  }
}
