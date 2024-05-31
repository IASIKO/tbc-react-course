import ProfileDetails from "../../../../components/Profile/ProfileDetails";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction } from "../../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const loc = await getLocale();

  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  return (
    <>
      <TitleBgImage>{loc === "en" ? "Profile" : "პროფილი"}</TitleBgImage>
      <ProfileDetails authUser={auth_user?.auth_user.rows[0]}/>
    </>
  );
}
