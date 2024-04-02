import React from "react";
import Button from "../UI/Button";

const ContactForm = () => {
  return (
    <div className="w-[1140px] my-[60px] flex">
      <div className="w-[40%]">
        <iframe
          width={500}
          height={600}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8795338635723!2d-73.9964625!3d40.742676200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2zMTk4IFcgMjFzdCBTdCAjNzIxLCBOZXcgWW9yaywgTlkgMTAwMTEsIOGDkOGDm-GDlOGDoOGDmOGDmeGDmOGDoSDhg6jhg5Thg5Thg6Dhg5fhg5Thg5Hhg6Phg5rhg5gg4YOo4YOi4YOQ4YOi4YOU4YOR4YOY!5e0!3m2!1ska!2sge!4v1710852153875!5m2!1ska!2sge"
          title="198 West 21th Street, Suite 721 New York NY 10016"
        ></iframe>
      </div>
      <div className="px-[60px] py-[60px] bg-white w-[60%]">
        <h3 className="mb-[15px] text-black font-normal text-[27px]">
          Contact Us
        </h3>
        <form>
          <div className="flex mb-[30px]">
            <div className="flex flex-col w-[50%]">
              <label className="uppercase text-[#b7472a] text-[15px] font-medium">
                full name
              </label>
              <input
                type="text"
                className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a]"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col ml-[20px] w-[50%]">
              <label className="uppercase text-[#b7472a] text-[15px] font-medium">
                email address
              </label>
              <input
                type="email"
                className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a]"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-[30px]">
            <label className="uppercase text-[#b7472a] text-[15px] font-medium">
              subject
            </label>
            <input
              type="text"
              className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a]"
              placeholder="Subject"
            />
          </div>
          <div className="flex flex-col mb-[30px]">
            <label className="uppercase text-[#b7472a] text-[15px] font-medium">
              message
            </label>
            <textarea
              type="text"
              rows={4}
              cols={50}
              className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-[#b7472a] resize-none"
              placeholder="Message"
            />
          </div>
          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
