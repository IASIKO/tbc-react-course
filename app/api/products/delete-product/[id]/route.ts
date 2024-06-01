import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { CartTable } from "../../../../../types/products-types";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/products/delete-product/", "");

  const cart = await sql<CartTable>`SELECT * FROM carts;`;

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM products WHERE id = ${Number(id)}`;
    const products = cart.rows[0].products;
      const index = products.findIndex((item) => item.id === Number(id));
      const path = `{${index}}`;
    await sql`UPDATE carts SET products = products#-${path}`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
