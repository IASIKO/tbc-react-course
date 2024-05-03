import { useTranslations } from "next-intl";
import ContactContent from "../../../../components/Contact/ContactContent";
import TitleBgImage from "../../../../components/UI/TitleBgImage";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <>
      <TitleBgImage>{t("title")}</TitleBgImage>
      <ContactContent />
    </>
  );
}
