import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

/**
 * GET /api/bookmarks/check?type=drug&slug=sertraline
 * Returns whether the current user has bookmarked a specific item.
 *
 * Response: { bookmarked: boolean, bookmark?: { id, createdAt } }
 */
export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ bookmarked: false });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  if (!type || !slug) {
    return NextResponse.json(
      { error: "type and slug are required" },
      { status: 400 }
    );
  }

  const bookmark = await db.bookmark.findUnique({
    where: {
      userId_type_slug: { userId: user.id, type, slug },
    },
    select: { id: true, createdAt: true },
  });

  return NextResponse.json({
    bookmarked: !!bookmark,
    bookmark: bookmark || undefined,
  });
}
