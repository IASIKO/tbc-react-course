import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: NextRequest) {
  const { profile, picture } = await request.json();
  const { given_name, family_name, country, city, address, phone, email, sub } =
    profile;

  try {
    if (!sub) {
      throw new Error("User not found");
    }

    const authUser = await sql`SELECT * FROM auth_users WHERE sub = ${sub};`;

    if (authUser.rows.length) {
      await sql`UPDATE auth_users SET given_name = ${given_name}, family_name = ${family_name}, country = ${country}, city = ${city},address = ${address}, phone = ${phone}, email = ${email}, picture = ${picture}  WHERE sub = ${sub};`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const auth_user = await sql`SELECT * FROM auth_users;`;
  return NextResponse.json({ auth_user }, { status: 200 });
}
