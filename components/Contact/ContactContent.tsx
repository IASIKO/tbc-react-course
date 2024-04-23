import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


const ContactContent = () => {
  return (
    <section className="bg-[#f5f4f0] py-[60px]">
      <div className="max-w-[1140px] m-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContent;
