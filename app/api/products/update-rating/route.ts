import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { rating, id } = await request.json();

  try {
    if (!rating) throw new Error("rating is required");

    await sql`UPDATE products SET rating = ${rating} WHERE id = ${Number(id)}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
