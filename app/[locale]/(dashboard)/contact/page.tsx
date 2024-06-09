import ContactContent from "../../../../components/Contact/ContactContent";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Liquor store - Contact",
  description: "Contact page",
};

export default function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ContactContent />
    </>
  );
}
