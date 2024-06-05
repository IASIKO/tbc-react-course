import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const reviews =
      await sql`SELECT  *, rw.id AS id FROM reviews rw LEFT JOIN auth_users u ON u.id = rw.user_id WHERE rw.prod_id = ${params.id} ORDER BY rw.id`;

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
