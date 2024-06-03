import { unstable_setRequestLocale } from "next-intl/server";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { useTranslations } from "next-intl";
import ExperienceSection from "../../../../components/About/ExperienceSection";

export const metadata = {
  title: "Liquor store - About",
  description: "About page",
};

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("aboutPage");

  return (
    <>
      <TitleBgImage>{t("about")}</TitleBgImage>
      <ExperienceSection />
    </>
  );
}
