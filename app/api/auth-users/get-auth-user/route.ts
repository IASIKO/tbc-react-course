import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const sub = request.cookies.get("user_id")?.value;

  try {
    const auth_user =
      await sql`SELECT * FROM auth_users WHERE sub = ${sub} ORDER BY id DESC`;

    return NextResponse.json({ auth_user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}