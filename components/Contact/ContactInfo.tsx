import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("contact");

  const contactInfoData = [
    {
      icon: <FaMapMarkerAlt />,
      contactKey: t("address"),
      contactValue: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      icon: <FaPhone />,
      contactKey: t("phone"),
      contactValue: "+ 1235 2355 98",
    },
    {
      icon: <FaTelegramPlane />,
      contactKey: t("email"),
      contactValue: "info@yoursite.com",
    },
    {
      icon: <GiEarthAmerica />,
      contactKey: t("website"),
      contactValue: "yoursite.com",
    },
  ];
  return (
    <div className="flex flex-wrap justify-around">
      {contactInfoData.map((infoItem, index) => (
        <div key={index} className="flex flex-col items-center p-4 sm:w-1/2 lg:w-1/4">
          <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#b7472a] mb-5 flex justify-center items-center">
            <span className="text-2xl lg:text-[35px] text-white">{infoItem.icon}</span>
          </div>
          <div className="text-center w-full">
            <p className="text-sm lg:text-base dark:text-white">
              <span className="font-medium text-black dark:text-white">
                {infoItem.contactKey}:{" "}
              </span>
              {infoItem.contactValue}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
