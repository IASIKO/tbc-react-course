import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { ProductObject } from "../../../../types/products-types";
import { USER_ID } from "../../../../lib/constants";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const user_id = request.cookies.get(USER_ID)?.value;

  try {
    if (!user_id) throw new Error("user not found");

    const cart = await sql`SELECT * FROM carts WHERE user_id = ${Number(
      user_id
    )};`;

    if (cart.rows.length) {
      const products: ProductObject[] = [];

      await sql`UPDATE carts SET products = ${JSON.stringify(
        products
      )}, added_on = NOW() WHERE user_id = ${Number(user_id)};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
