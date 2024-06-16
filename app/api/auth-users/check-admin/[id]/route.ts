import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest, { params: { id } }: { params: { id: string }}) {
 

  try {
    const admin =
      await sql`SELECT * FROM auth_users WHERE sub = ${id}`;

    return NextResponse.json({ admin }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}