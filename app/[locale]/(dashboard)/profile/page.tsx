import ProfileDetails from "../../../../components/Profile/ProfileDetails";
import { unstable_setRequestLocale } from "next-intl/server";
import { getAuthUserAction } from "../../../../lib/actions";
import { getSession } from "@auth0/nextjs-auth0";

export const metadata = {
  title: "Liquor store - Profile",
  description: "Profile page",
};

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);


  const session = await getSession();
  const sub = session?.user?.sub;

  const auth_user = await getAuthUserAction(sub);

  return (
    <>
      <ProfileDetails authUser={auth_user?.auth_user.rows[0]}/>
    </>
  );
}
