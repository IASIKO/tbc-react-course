import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactContent = async () => {
  return (
    <section className="bg-[#f5f4f0] py-8 md:py-12 lg:py-16 dark:bg-gray animate-fade-in-up">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6 lg:px-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContent;
