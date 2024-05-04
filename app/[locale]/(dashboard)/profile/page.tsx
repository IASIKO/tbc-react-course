import { useTranslations } from "next-intl";
import ProfileDetails from "../../../../components/Profile/ProfileDetails";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Profile({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("profile");
  return (
    <>
      <TitleBgImage>{t("ProfilePageTitle")}</TitleBgImage>
      <ProfileDetails />
    </>
  );
}
