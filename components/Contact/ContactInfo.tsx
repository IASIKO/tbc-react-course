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
    <div className="flex justify-around">
      {contactInfoData.map((infoItem, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-[50%] bg-[#b7472a] my-0 mx-auto mb-[20px] flex justify-center items-center">
            <span className="text-[35px] text-white">{infoItem.icon}</span>
          </div>
          <div className="w-[200px]">
            <p className="text-center dark:text-white">
              <span className="text-black font-medium dark:text-white">
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
