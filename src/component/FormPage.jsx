import { FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Formpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFA] py-16 px-4">
      {/* Responsive Container */}
      <div className="w-full max-w-[1400px] bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8 overflow-hidden">
          {/* Left Column */}
          <div className="flex-1 flex flex-col md:min-h-[560px]">
            {/* Heading + Paragraph */}
            <div className="flex flex-col gap-2 -mt-2 md:-mt-4">
              <h2 className="text-[32px] sm:text-[40px] font-urbanist font-semibold text-[#2A2A2E]">
                Contact Us
              </h2>
              <p className="text-[#2A2A2E] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] pt-4">
                Whether you're ready to schedule an appointment or have a question, we're here to help. Please choose the method that works best for you.
              </p>
            </div>

            {/* Contact Info Section — vertical on small screens, horizontal on md+ */}
            <div className="flex flex-col gap-6 text-gray-700 mb-20 md:mt-auto">
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                <span className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded shadow">
                  <FaPhoneAlt className="text-black w-5 h-5" />
                </span>
                <div className="text-center md:text-left">
                  <span className="font-medium text-[#2A2A2E] font-urbanist text-[16px] leading-[24px]">
                    Clinic Phone:
                  </span>
                  <br />
                  <span className="text-[#707A75] font-urbanist text-[16px] leading-[24px]">
                    (123) 456-7890
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
                <span className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded shadow">
                  <FaEnvelope className="text-black w-4.5 h-4.5" />
                </span>
                <div className="text-center md:text-left">
                  <span className="font-medium text-[#2A2A2E] font-urbanist text-[16px] leading-[24px]">
                    General Email:
                  </span>
                  <br />
                  <span className="text-[#707A75] font-urbanist text-[16px] leading-[24px]">
                    contact@dareclinic.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex justify-center items-center w-full md:w-auto ">
            <form className="flex flex-col justify-between  bg-[#F5F5F5] p-6 rounded-lg shadow-md w-full max-w-[569px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[48px] bg-white border border-[#E3E5E8] rounded-lg p-3 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[48px] bg-white border border-[#E3E5E8] rounded-lg p-3 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75]"
                />
              </div>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[48px] bg-white border border-[#E3E5E8] rounded-lg p-3 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75] mb-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-[48px] bg-white border border-[#E3E5E8] rounded-lg p-3 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75] mb-4"
              />

              {/* Preferred Contact Method */}
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="font-urbanist font-semibold text-[18px] leading-[26px] text-[#2A2A2E]">
                  Preferred Contact Method
                </h3>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contact-method" className="accent-green-800" />
                    Email
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contact-method" className="accent-green-800" />
                    Phone Call
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contact-method" className="accent-green-800" />
                    Telehealth
                  </label>
                </div>
              </div>

              <div className="relative mb-4 w-full">
                <input
                  type="text"
                  placeholder="Reason for enquiry"
                  disabled
                  className="w-full h-[48px] border border-[#E3E5E8] rounded-lg bg-white p-3 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75] cursor-default"
                />
                <FaChevronDown
                  className="absolute"
                  style={{
                    width: "22.86px",
                    height: "10px",
                    top: "19px",
                    right: "10px",
                    opacity: 1,
                  }}
                />
              </div>

              <textarea
                placeholder="Please type your message here"
                className="w-full h-[160px] border border-[#E3E5E8] rounded-lg p-3 mb-6 font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75] bg-white"
              />

              <button
                className="w-full h-[48px] rounded-lg bg-[#205C2A] text-white font-urbanist font-medium text-[16px] leading-[20px] text-center px-5 py-3 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formpage;
