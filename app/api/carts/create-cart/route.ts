import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const { prod_id, user_id } = await request.json();
    const item = JSON.stringify([{ id: prod_id, quantity: 1 }]);

    if (!user_id || !prod_id)
      throw new Error("user_id and products fields required");

    await sql`INSERT INTO carts (user_id, products) VALUES (${Number(
      user_id
    )}, ${item});`;
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
