import ProfileDetails from "../../../../components/Profile/ProfileDetails";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../dictionaries";

export default async function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale);
  return (
    <>
      <TitleBgImage>{dict.profile.ProfilePageTitle}</TitleBgImage>
      <ProfileDetails dict={dict}/>
    </>
  );
}
