import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {

  try {
    const auth_users =
      await sql`SELECT * FROM auth_users ORDER BY id DESC`;

    return NextResponse.json({ auth_users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}