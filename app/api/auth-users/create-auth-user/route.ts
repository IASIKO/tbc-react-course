import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();

    if (session?.user) {
      const { sub, email, picture } = session.user;

      const authUser = await sql`SELECT * FROM auth_users where sub = ${sub}`;
      if (!authUser.rows.length) {
        await sql`INSERT INTO auth_users (given_name, family_name, country, city, address, phone, email, sub, picture, role) VALUES ('', '', '', '', '', '+123', ${email}, ${sub}, ${picture}, 'default');`;
      }
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }

  return redirect("/");
}
