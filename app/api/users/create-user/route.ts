import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    if (!name || !email) throw new Error("name and email are required");
    await sql`INSERT INTO users (name, email) VALUES (${name}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
