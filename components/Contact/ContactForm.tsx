"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import ThemeLoader from "../UI/ThemeLoader";

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
  const [loading, setLoading] = useState(false);
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
    if (form.fullName.trim().length <= 0)
      newErrors.fullName = t("fullNameError");
    if (!form.email.trim()) {
      newErrors.email = t("emailError");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("invalidEmailError");
    }
    if (form.subject.trim().length <= 0) newErrors.subject = t("subjectError");
    if (!form.message) newErrors.message = t("messageError");
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [form, t]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (isFormValid) {
      const mailtoLink = `mailto:iaseshviligi@gmail.com?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(
        `Name: ${form.fullName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row w-full my-8 md:my-12 lg:my-16">
      <div className="w-full md:w-2/5">
        <iframe
          width="100%"
          height="300"
          className="md:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8795338635723!2d-73.9964625!3d40.742676200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2zMTk4IFcgMjFzdCBTdCAjNzIxLCBOZXcgWW9yaywgTlkgMTAwMTEsIOGDkOGDm-GDlOGDoOGDmOGDmeGDmOGDoSDhg6jhg5Thg5Thg6Dhg5fhg5Thg5Hhg6Phg5rhg5gg4YOo4YOi4YOQ4YOi4YOU4YOR4YOY!5e0!3m2!1ska!2sge!4v1710852153875!5m2!1ska!2sge"
          title="198 West 21th Street, Suite 721 New York NY 10016"
        ></iframe>
      </div>
      <div className="px-4 md:px-8 py-8 md:py-0 w-full md:w-3/5 bg-white dark:bg-gray">
        <h3 className="mb-4 text-lg md:text-xl lg:text-2xl font-normal dark:text-white">
          {t("contactUs")}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-red uppercase mb-1"
              >
                {t("fullName")}
                <span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-3 py-2 text-base border-b border-gray-300 focus:outline-none focus:border-red placeholder:text-gray-400"
                placeholder={t("fullName")}
                value={form.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && (
                <span className="text-red-500 text-xs mt-1 dark:text-white">
                  {errors.fullName}
                </span>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red uppercase mb-1"
              >
                {t("email")}
                <span className="text-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-base border-b border-gray-300 focus:outline-none focus:border-red placeholder:text-gray-400"
                placeholder={t("email")}
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 dark:text-white">
                  {errors.email}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-red uppercase mb-1"
            >
              {t("subject")}
              <span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-3 py-2 text-base border-b border-gray-300 focus:outline-none focus:border-red placeholder:text-gray-400"
              placeholder={t("subject")}
              value={form.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && (
              <span className="text-red-500 text-xs mt-1 dark:text-white">
                {errors.subject}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-red uppercase mb-1"
            >
              {t("message")}
              <span className="text-red">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 text-base border-b border-gray-300 focus:outline-none focus:border-red placeholder:text-gray-400"
              placeholder={t("message")}
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <span className="text-red-500 text-xs mt-1 dark:text-white">
                {errors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`py-2 px-6 text-base font-medium text-white bg-red border border-red rounded-md transition duration-300 ease-in-out ${
              isFormValid ? "hover:bg-red-600" : "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? <ThemeLoader /> : t("sendButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
