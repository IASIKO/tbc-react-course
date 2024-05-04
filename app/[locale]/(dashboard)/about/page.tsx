import { unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { useTranslations } from "next-intl";

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {

  unstable_setRequestLocale(locale);
  const t = useTranslations("aboutPage");

  return <TitleBgImage>{t("about")}</TitleBgImage>;
}
