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

    await sql`DELETE FROM auth_users WHERE id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const auth_users = await sql`SELECT * FROM auth_users;`;

  return NextResponse.json({ auth_users }, { status: 200 });
}
