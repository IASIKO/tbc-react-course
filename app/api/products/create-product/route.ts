import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { product } = await request.json();
  console.log("🚀 ~ POST ~ product:", product);

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
      !title ||
      !category ||
      !description ||
      typeof price !== "number" ||
      typeof discount !== "number" ||
      !rating ||
      typeof stock !== "number" ||
      !brand ||
      typeof weight !== "number" ||
      !thumbnail
    )
      throw new Error(
        "title, category, description, price, discount, rating, stock, brand, weight and thumbnail are required"
      );

    await sql`INSERT INTO products (title, category, description, price, discount, rating, stock, brand, weight, thumbnail) VALUES (${title}, ${category}, ${description}, ${price}, ${discount}, ${rating}, ${stock}, ${brand}, ${weight}, ${thumbnail});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
