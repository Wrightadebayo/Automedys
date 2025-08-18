import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import autoimage6 from "../assets/autoimage6.png";
import autoimage7 from "../assets/autoimage7.png";
import autoimage8 from "../assets/autoimage8.png";

const LocationPage = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center">
      <section className="max-w-[1440px] w-full px-4 py-10 space-y-16">
        {/* Heading */}
        <h1 className="font-urbanist font-medium text-[48px] leading-[58px] text-[#2A2A2E] text-center mx-auto max-w-[1136px]">
          Locations & Hours
        </h1>

        {/* Main Clinic Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-[55px] w-full max-w-[1136px] mx-auto">
          <div className="flex-1 w-full sm:w-[300px] space-y-6 text-gray-700 text-sm text-center md:text-left">
            <h2 className="text-[30px] leading-[38px] font-urbanist font-semibold text-black">
              Main Clinic
            </h2>

            {/* Address */}
            <div className="flex flex-col gap-2 w-full items-center md:items-start">
              <h5 className="text-[20px] leading-[28px] font-urbanist font-semibold text-[#2A2A2E]">
                Address
              </h5>
              <div className="inline-flex items-center gap-2 bg-[#F5F5F5] rounded-[8px] px-3 py-1.5">
                <FaMapMarkerAlt className="text-black w-5 h-5" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E] break-words">
                  123 Wellness Way, [City], [State] [ZIP]
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-2 w-full max-w-[280px] items-center md:items-start">
              <h2 className="text-[16px] font-urbanist font-semibold text-[#2A2A2E]">Hours:</h2>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <FaClock className="text-black w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Monday - Friday: 8 AM - 6 PM
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <FaClock className="text-black w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Saturday: 9 AM - 1 PM
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <IoClose className="text-red-600 w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Main Clinic Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src={autoimage6}
              alt="Main Clinic"
              className="w-full max-w-[781px] h-auto object-cover rounded-[8px] shadow-md"
            />
          </div>
        </div>

        {/* Satellite Office Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-[55px] w-full max-w-[1136px] mx-auto">
          <div className="flex-1 w-full sm:w-[300px] space-y-6 text-gray-700 text-sm text-center md:text-left">
            <h2 className="text-[30px] leading-[38px] font-urbanist font-semibold text-[#2A2A2E]">
              Texas Satellite Office
            </h2>

            {/* Address */}
            <h5 className="text-[20px] leading-[28px] font-urbanist font-semibold text-[#2A2A2E]">
              Address
            </h5>
            <div className="inline-flex items-center gap-2 bg-[#F5F5F5] rounded-[8px] px-3 py-1.5">
              <FaMapMarkerAlt className="text-black w-5 h-5" />
              <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E] break-words">
                456 Healing Blvd, [City], [State], [ZIP]
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-2 w-full max-w-[280px] items-center md:items-start">
              <h2 className="text-[20px] leading-[28px] font-urbanist font-semibold text-[#2A2A2E]">Hours:</h2>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <FaClock className="text-black w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Monday - Thursday: 9 AM - 5 PM
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <FaClock className="text-black w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Friday: 9 AM - 3 PM
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#F5F5F5] rounded-[8px] justify-center md:justify-start">
                <IoClose className="text-red-600 w-[20px] h-[20px]" />
                <p className="text-[16px] leading-[24px] font-urbanist font-medium text-[#2A2A2E]">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Satellite Office Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-1">
            <img
              src={autoimage7}
              alt="Satellite Office"
              className="w-full max-w-[701px] h-auto object-cover rounded-[8px] shadow-md"
            />
          </div>
        </div>

        {/* Telehealth Section */}
        <div className="relative w-full max-w-[1136px] mx-auto mt-16">
          <img
            src={autoimage8}
            alt="Telehealth"
            className="w-full h-auto object-cover rounded-[8px] shadow-md"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-green-700/90 via-green-600/40 to-transparent rounded-[8px] flex items-end justify-start p-3 sm:p-4">
            <div className="flex flex-col justify-end gap-2 sm:gap-4 w-full sm:max-w-[80%] text-center md:text-left">
              <h2 className="text-[22px] sm:text-[36px] leading-[26px] sm:leading-[46px] font-urbanist font-semibold text-white">
                Telehealth Services
              </h2>

              <p className="text-[16px] sm:text-[24px] leading-[20px] sm:leading-[32px] font-urbanist font-medium text-[#F2F2F2]">
                Secure video appointments available Monday–Friday, 8 AM–8 PM.
              </p>

              <button className="w-full sm:w-[202px] h-[48px] bg-[#8FEBBD] rounded-[8px] text-[#131313] text-[16px] leading-[24px] font-urbanist font-semibold mt-1 sm:mt-2">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
