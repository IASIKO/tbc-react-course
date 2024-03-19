import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";

const ContactContent = () => {
  return (
    <section className="bg-[#f5f4f0] py-[60px]">
      <div className="max-w-[1140px] m-auto">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#b7472a] my-0 mx-auto mb-[20px] flex justify-center items-center">
              <span className="text-[35px] text-white">
                <FaMapMarkerAlt />
              </span>
            </div>
            <div className="w-[200px]">
              <p className="text-center">
                <span className="text-black font-medium">Address:</span>
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#b7472a] my-0 mx-auto mb-[20px] flex justify-center items-center">
              <span className="text-[35px] text-white">
                <FaPhone />
              </span>
            </div>
            <div className="w-[200px]">
              <p className="text-center">
                <span className="text-black font-medium">Phone:</span>+ 1235
                2355 98
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#b7472a] my-0 mx-auto mb-[20px] flex justify-center items-center">
              <span className="text-[35px] text-white">
                <FaTelegramPlane />
              </span>
            </div>
            <div className="w-[200px]">
              <p className="text-center">
                <span className="text-black font-medium">Email:</span>
                info@yoursite.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#b7472a] my-0 mx-auto mb-[20px] flex justify-center items-center">
              <span className="text-[35px] text-white">
                <GiEarthAmerica />
              </span>
            </div>
            <div className="w-[250px]">
              <p className="text-center">
                <span className="text-black font-medium">Website:</span>
                yoursite.com
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ContactContent;
