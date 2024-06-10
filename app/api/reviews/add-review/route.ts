import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: NextRequest) {
  const { review } = await request.json();

  try {
    if (!review) throw new Error("review or user not found");

    await sql`INSERT INTO reviews (prod_id, user_id, rating, comment) VALUES (${review.prod_id}, ${review.user_id},${review.rating},${review.comment});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const reviews = await sql`SELECT * FROM reviews;`;
  return NextResponse.json({ reviews }, { status: 200 });
}
