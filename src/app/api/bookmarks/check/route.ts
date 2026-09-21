import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { isKypContentType } from "@/lib/kyp/data/content-registry";
import { resolveContent } from "@/lib/kyp/data/content-registry";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ bookmarked: false });
  const params = new URL(req.url).searchParams;
  const type = params.get("type");
  const slug = params.get("slug");
  if (!isKypContentType(type) || !slug) return NextResponse.json({ error: "Valid type and slug are required" }, { status: 400 });
  const content = resolveContent(type, slug);
  if (!content) return NextResponse.json({ error: "Unknown KYP content" }, { status: 404 });
  const bookmark = await db.bookmark.findUnique({
    where: { userId_type_slug: { userId: user.id, type: content.type, slug: content.slug } },
    select: { id: true, createdAt: true },
  });
  return NextResponse.json({ bookmarked: !!bookmark, bookmark: bookmark || undefined });
}
