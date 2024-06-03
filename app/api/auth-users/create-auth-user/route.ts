import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { updateAuthUserAction } from "../../../../lib/actions";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const { profile, picture } = await request.json();
  const {
    given_name,
    family_name,
    country,
    city,
    address,
    phone,
    email,
    sub,
    role,
  } = profile;

  try {
    if (!profile || !picture) throw new Error("name and email are required");

    const authUser = await sql`SELECT * FROM auth_users where sub = ${sub}`;
    if (!authUser.rows.length) {
      await sql`INSERT INTO auth_users (given_name, family_name, country, city, address, phone, email, sub, picture, role) VALUES (${given_name}, ${family_name}, ${country}, ${city}, ${address}, ${phone}, ${email}, ${sub}, ${picture}, ${
        role === 'admin' ? 'admin' : 'default'
      });`;
    } else {
      updateAuthUserAction(profile, picture);
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const auth_user = await sql`SELECT * FROM auth_users;`;
  return NextResponse.json({ auth_user }, { status: 200 });
}
