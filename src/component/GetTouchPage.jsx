


import { Link } from "react-router-dom";

const GetTouchPage = () => {
  return (
    <div className="font-urbanist">
      <div className="py-14 px-6 md:px-12 flex flex-col items-center text-center max-w-[350px] md:max-w-[700px] mx-auto">

        {/* Heading */}
        <h1
          className="font-medium mb-4 text-center text-[48px] leading-[58px] tracking-[0] max-w-full"
          style={{ color: "#2A2A2E" }}
        >
          Get In Touch
        </h1>

        {/* Description */}
        <p
          className="mb-6 max-w-xl text-center font-medium text-[20px] leading-[30px] text-[#707A75]"
        >
          Ready to start your journey to better mental health? Contact us today to <br />
          schedule an appointment.
        </p>

        {/* Contact Info */}
        <div className="flex justify-center items-center gap-4 flex-wrap text-gray-700 mb-6 font-medium max-w-full">
          <p
            className="font-medium text-[20px] leading-[30px] text-center"
            style={{ letterSpacing: 0 }}
          >
            <span className="text-gray-400">Phone:</span> (555) 123-4567
          </p>

          <span className="text-gray-400 hidden sm:inline">|</span>

          <p
            className="font-medium text-[20px] leading-[30px] text-center"
            style={{ letterSpacing: 0 }}
          >
            <span className="text-gray-400">Email:</span> info@dareclinic.com
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 font-medium w-full max-w-[350px] sm:max-w-[500px]">

          <Link
            to="/contact"
            className="text-white rounded-[8px] shadow-md hover:bg-green-700 transition font-medium text-[16px] leading-[20px] whitespace-nowrap flex justify-center items-center"
            style={{
              backgroundColor: "#205C2A",
              width: "317px",
              height: "48px",
              opacity: 1,
              gap: "10px",
            }}
          >
            Contact Us
          </Link>

          <button
            className="border border-black rounded-lg shadow-md hover:bg-gray-100 transition font-medium"
            style={{
              color: "#2A2A2E",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0%",
              textAlign: "center",
              width: "317px",
              height: "48px",
              paddingLeft: "24px",
              paddingRight: "24px",
            }}
          >
            View Locations
          </button>

        </div>
      </div>
    </div>
  );
};

export default GetTouchPage;
