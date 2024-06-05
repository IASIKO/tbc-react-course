import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { review, id } = await request.json();

  try {
    if (!review) throw new Error("review is required");

    await sql`UPDATE reviews SET rating = ${review.rating}, comment = ${
      review.comment
    } WHERE id = ${Number(id)}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const reviews = await sql`SELECT * FROM reviews;`;

  return NextResponse.json({ reviews }, { status: 200 });
}
