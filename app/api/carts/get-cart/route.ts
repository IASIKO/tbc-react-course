import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const user_id = request.cookies.get("userId")?.value;

  try {
    const cart = await sql`SELECT * FROM carts WHERE user_id = ${user_id};`;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
