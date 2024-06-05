import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM reviews WHERE id = ${Number(id)}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const reviews = await sql`SELECT * FROM reviews;`;

  return NextResponse.json({ reviews }, { status: 200 });
}
