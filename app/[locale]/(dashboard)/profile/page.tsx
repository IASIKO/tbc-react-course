import { useTranslations } from "next-intl";
import ProfileDetails from "../../../../components/Profile/ProfileDetails";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

export default function Profile() {
  const t = useTranslations("profile");
  return (
    <>
      <TitleBgImage>{t("ProfilePageTitle")}</TitleBgImage>
      <ProfileDetails />
    </>
  );
}
