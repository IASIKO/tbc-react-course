import { getDictionary } from "../../app/[locale]/dictionaries";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactContent = async ({ locale }: { locale: string }) => {
  const dict = await getDictionary(locale);

  return (
    <section className="bg-[#f5f4f0] py-[60px]">
      <div className="max-w-[1140px] m-auto">
        <ContactInfo dict={dict} />
        <ContactForm dict={dict} />
      </div>
    </section>
  );
};

export default ContactContent;
