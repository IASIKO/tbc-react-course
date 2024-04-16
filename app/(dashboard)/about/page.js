import TitleBgImage from "@/components/UI/TitleBgImage";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function About() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (!cookie) redirect("/login");

  return <TitleBgImage>About</TitleBgImage>;
}
