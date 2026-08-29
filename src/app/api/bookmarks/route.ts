import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

/**
 * GET /api/bookmarks
 * Returns the current user's bookmarks, sorted by createdAt desc (newest first).
 *
 * Query params:
 *   ?type=drug  — filter by type (drug | substance | disease)
 *
 * Response: [{ id, type, slug, title, createdAt }]
 */
export async function GET(req: NextRequest) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  const where: { userId: string; type?: string } = { userId: user.id };
  if (type) where.type = type;

  const bookmarks = await db.bookmark.findMany({
    where,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      type: true,
      slug: true,
      title: true,
      createdAt: true,
    },
  });

  return NextResponse.json({ bookmarks });
}

/**
 * POST /api/bookmarks
 * Adds a bookmark. If it already exists (same type+slug), returns the existing one.
 *
 * Body: { type: "drug" | "substance" | "disease", slug: string, title: string }
 *
 * Response: { id, type, slug, title, createdAt }
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

    const bookmark = await db.bookmark.upsert({
      where: {
        userId_type_slug: { userId: user.id, type, slug },
      },
      update: {
        title, // update title in case it changed
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
        createdAt: true,
      },
    });

    return NextResponse.json(bookmark);
  } catch (error) {
    console.error("Bookmark POST error:", error);
    return NextResponse.json(
      { error: "Failed to save bookmark" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/bookmarks
 * Removes a bookmark.
 *
 * Query params (one of):
 *   ?id=<bookmarkId>
 *   ?type=drug&slug=sertraline
 *   (no params = clear all bookmarks for this user)
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
      await db.bookmark.deleteMany({ where: { id, userId: user.id } });
    } else if (type && slug) {
      await db.bookmark.deleteMany({
        where: { userId: user.id, type, slug },
      });
    } else {
      await db.bookmark.deleteMany({ where: { userId: user.id } });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Bookmark DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to remove bookmark" },
      { status: 500 }
    );
  }
}
