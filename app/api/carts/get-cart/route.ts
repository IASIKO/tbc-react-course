import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
import { USER_ID } from "../../../../lib/constants";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const user_id = request.cookies.get(USER_ID)?.value;
  try {
    const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(
      user_id
    )};`;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
