import { useTranslations } from "next-intl";
import ContactContent from "../../../../components/Contact/ContactContent";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("contact");

  return (
    <>
      <TitleBgImage>{t("title")}</TitleBgImage>
      <ContactContent />
    </>
  );
}
