import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("aboutPage");

  return <TitleBgImage>{t("about")}</TitleBgImage>;
}
