import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

interface Dict {
  contact: Record<string, string>;
}

const ContactContent = async ({ dict }: { dict: Dict }) => {

  return (
    <section className="bg-[#f5f4f0] py-[60px] dark:bg-gray">
      <div className="max-w-[1140px] m-auto">
        <ContactInfo dict={dict} />
        <ContactForm dict={dict} />
      </div>
    </section>
  );
};

export default ContactContent;
