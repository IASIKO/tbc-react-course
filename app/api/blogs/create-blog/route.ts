import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { blog } = await request.json();

  const {
    title,
    user_name,
    user_avatar,
    description,
    ingredients,
    instructions,
    prep_min,
    thumbnail,
  } = blog;

  try {
    if (!blog)
      throw new Error(
        "title, user_name, user_avatar, description, ingredients, instructions, rating, prep_min, thumbnail are required"
      );

    await sql`INSERT INTO blogs (user_name, user_avatar,
        title,
        description,
        thumbnail,
        ingredients,
        instructions,
        prep_min
        ) VALUES (${user_name}, ${user_avatar}, ${title}, ${description}, ${thumbnail}, ${ingredients}, ${instructions}, ${prep_min});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
