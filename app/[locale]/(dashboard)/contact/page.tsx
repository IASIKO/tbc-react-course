import ContactContent from "../../../../components/Contact/ContactContent";
import TitleBgImage from "../../../../components/UI/TitleBgImage";
import { getDictionary } from "../../dictionaries";

export default async function Contact({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale);

  return (
    <>
      <TitleBgImage>{dict.contact.title}</TitleBgImage>
      <ContactContent dict={dict} />
    </>
  );
}
