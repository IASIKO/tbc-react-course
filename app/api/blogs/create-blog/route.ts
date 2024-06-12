import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { blog, userId } = await request.json();

  const {
    title,
    description,
    ingredients,
    instructions,
    prep_min,
    thumbnail,
  } = blog;

  try {
    if (!blog)
      throw new Error(
        "title, user_id, description, ingredients, instructions, prep_min, thumbnail are required"
      );

    await sql`INSERT INTO blogs (
        title,
        description,
        thumbnail,
        ingredients,
        instructions,
        prep_min,
        user_id
        ) VALUES (${title}, ${description}, ${thumbnail}, ${ingredients}, ${instructions}, ${prep_min}, ${userId});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
