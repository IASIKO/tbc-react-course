import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { CartTable, ProductObject } from "../../../../types/products-types";
import { createUserCart } from "../../../../lib/api";
import { USER_ID } from "../../../../lib/constants";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const user_id = request.cookies.get(USER_ID)?.value;
  const { id } = await request.json();

  try {
    if (!id || !user_id) throw new Error("product or user not found");

    const cart =
      await sql<CartTable>`SELECT * FROM carts WHERE user_id = ${Number(
        user_id
      )};`;

    if (cart.rows.length) {
      let newProduct: ProductObject;
      const products = cart.rows[0].products;

      const index = products.findIndex((item) => item.id === id);

      if (index === -1) {
        newProduct = { id: id, quantity: 1 };
        await sql`UPDATE carts SET products = jsonb_insert(products,'{0}',${JSON.stringify(
          newProduct
        )}),added_on = NOW() WHERE user_id = ${Number(user_id)};`;
      }
    } else {
      createUserCart(Number(user_id), id);
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
