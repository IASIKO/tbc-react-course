import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { product, id } = await request.json();

  const {
    title,
    category,
    description,
    price,
    discount,
    rating,
    stock,
    brand,
    weight,
    thumbnail,
  } = product;

  try {
    if (
      !id ||
      !title ||
      !category ||
      !description ||
      isNaN(price) ||
      isNaN(discount) ||
      !rating ||
      isNaN(stock) ||
      !brand ||
      isNaN(weight) ||
      !thumbnail
    )
      throw new Error(
        "title, category, description, price, discount, rating, stock, brand, weight and thumbnail are required"
      );

    await sql`UPDATE products SET title = ${title}, category = ${category}, description = ${description}, price = ${price}, discount = ${discount}, rating = ${rating}, stock = ${stock}, brand = ${brand}, weight = ${weight}, thumbnail = ${thumbnail} WHERE id = ${Number(
      id
    )}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;

  return NextResponse.json({ products }, { status: 200 });
}
