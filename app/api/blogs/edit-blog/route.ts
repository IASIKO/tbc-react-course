import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { blog, id, thumbnail } = await request.json();

  const { title, description, ingredients, instructions, prep_min } =
    blog;

  try {
    if (!blog || !id)
      throw new Error(
        "title, user_id, description, ingredients, instructions, prep_min, thumbnail are required"
      );

    await sql`UPDATE blogs SET title = ${title}, description = ${description}, ingredients = ${ingredients}, instructions = ${instructions}, prep_min = ${prep_min}, thumbnail = ${thumbnail} WHERE id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json({ blogs }, { status: 200 });
}
