import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM blogs WHERE id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
