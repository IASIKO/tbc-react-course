"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";

interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const t = useTranslations("contact");

  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  useEffect(() => {
    const newErrors: ContactErrors = {};
    if (form.fullName.trim().length <= 5)
      newErrors.fullName = t("fullNameError");
    if (!form.email.trim()) {
      newErrors.email = t("emailError");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("invalidEmailError");
    }
    if (form.subject.trim().length <= 5) newErrors.subject = t("subjectError");
    if (!form.message) newErrors.message = t("messageError");
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [form, t]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      const mailtoLink = `mailto:iaseshviligi@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(
        `Name: ${form.fullName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };

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
      <div className="px-[60px] py-[60px] bg-white w-[60%] dark:bg-gray">
        <h3 className="mb-[15px] text-black font-normal text-[27px] dark:text-white">
          {t("contactUs")}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-[30px]">
            <div className="flex flex-col w-[50%]">
              <label
                htmlFor="fullName"
                className="uppercase text-red text-[15px] font-medium"
              >
                {t("fullName")}<span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-red placeholder:pl-2"
                placeholder={t("fullName")}
                value={form.fullName}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              {errors.fullName && (
                <span className="text-red-500 text-[13px] mt-[5px] dark:text-white">
                  {errors.fullName}
                </span>
              )}
            </div>
            <div className="flex flex-col ml-[20px] w-[50%]">
              <label
                htmlFor="email"
                className="uppercase text-red text-[15px] font-medium"
              >
                {t("email")}<span className="text-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-red placeholder:pl-2"
                placeholder={t("email")}
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              {errors.email && (
                <span className="text-red-500 text-[13px] mt-[5px] dark:text-white">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              htmlFor="subject"
              className="uppercase text-red text-[15px] font-medium"
            >
              {t("subject")}<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-red placeholder:pl-2"
              placeholder={t("subject")}
              value={form.subject}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {errors.subject && (
              <span className="text-red-500 text-[13px] mt-[5px] dark:text-white">
                {errors.subject}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-[30px]">
            <label
              htmlFor="message"
              className="uppercase text-red text-[15px] font-medium"
            >
              {t("message")}<span className="text-red">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              cols={50}
              required
              className="w-[100%] text-[17px] rounded-[2px] shadow-none border-b-[1px] border-solid border-gray focus:outline-none focus:border-b-[1px] focus:border-red resize-none placeholder:pl-2"
              placeholder={t("message")}
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="text-red-500 text-[13px] mt-[5px] dark:text-white">
                {errors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`p-[7px] px-[25px] border border-solid border-red text-[18px] text-red font-medium align-middle duration-300 uppercase flex items-center justify-center gap-2 ${
              isFormValid
                ? "hover:bg-red hover:text-white"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            {t("sendButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
