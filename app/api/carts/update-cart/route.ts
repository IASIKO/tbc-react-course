import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { CartTable, ProductObject } from "../../../../types/products-types";
import { USER_ID } from "../../../../lib/constants";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const user_id = request.cookies.get(USER_ID)?.value;
  const { id, quantity } = await request.json();

  try {
    if (!id) {
      throw new Error("Product not found");
    }

    const cart =
      await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${user_id};`;

    const products = cart.rows[0].products;
    const index = products.findIndex((item) => item.id === id);

    const path = `{${index}}`;

    let newProduct: ProductObject;

    newProduct = { id: id, quantity: quantity };

    await sql`UPDATE carts SET products = jsonb_set(products,${path},${JSON.stringify(
      newProduct
    )}),added_on = NOW() WHERE user_id = ${user_id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
