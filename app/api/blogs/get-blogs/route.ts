import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const blogs =
      await sql`SELECT *,b.id AS id FROM blogs b LEFT JOIN auth_users u ON u.id = b.user_id  ORDER BY b.id DESC;`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
