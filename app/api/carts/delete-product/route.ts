import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { CartTable } from "../../../../types/products-types";
import { USER_ID } from "../../../../lib/constants";

export const revalidate = 0

export async function PUT(request: NextRequest) {
  const user_id = request.cookies.get(USER_ID)?.value;
  const { prod_id } = await request.json();

  try {
    if (!prod_id || !user_id) throw new Error("product or user not found");

    const cart = await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${user_id};`;

    if (cart.rows.length) {
      const products = cart.rows[0].products;
      const index = products.findIndex((item) => item.id === prod_id);
      const path = `{${index}}`;

      if (index !== -1) await sql`UPDATE carts SET products = products#-${path}, added_on = NOW() WHERE user_id = ${user_id};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
