import { FaInstagram, FaFacebook, FaYoutube, FaArrowUp } from "react-icons/fa";
import behalogo from "../assets/behalogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white py-10 font-urbanist rounded-t-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Appointment Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mb-10">
          <Link
            to="/"
            className="flex items-center gap-4 hover:opacity-80 transition"
          >
            <img
  src={behalogo}
  alt="Dare Behavioral Health Wellness Logo"
  className="w-36 h-28 rounded object-contain max-w-full"
/>

<h2
  className="
    flex flex-col
    text-[13px] sm:text-[14px] md:text-[16px]  /* font sizes close to 13px and up */
    leading-[15px] sm:leading-[17px] md:leading-[19px] /* line height matching font size */
    font-semibold
    font-urbanist
    text-center sm:text-left
    max-w-full
    break-words
  "
>
  <span>Dare Behavioral</span>
  <span>Health Wellness</span>
</h2>


          </Link>

         <button
  className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-md shadow-sm transition-colors font-urbanist"
  style={{
    fontWeight: 600, // SemiBold approximation
    fontSize: "14px",
    lineHeight: "140%", // equivalent to 1.4
    letterSpacing: "0%",
    fontStyle: "normal",
    color: "#131313",
  }}
>
  Book an Appointment
</button>

        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2
  className="mb-2 font-urbanist"
  style={{
    fontWeight: 500,        // Medium
    fontStyle: "normal",    
    fontSize: "14px",
    lineHeight: "140%",     // 1.4
    letterSpacing: "0%",
  }}
>
  Address
</h2>

            <p className="text-sm font-normal text-white">
              2972 Westheimer Rd.<br />
              Santa Ana, Illinois 85486
            </p>
          </div>

          <div>
            <h2
  className="font-urbanist font-medium mb-2 max-w-full"
  style={{
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "0",
  }}
>
  Services
</h2>

            <ul
  className="space-y-1 font-urbanist font-normal text-gray-400"
  style={{
    fontWeight: 400,       // Regular
    fontStyle: "normal",   // Regular style
    fontSize: "14px",
    lineHeight: "140%",    // 1.4 line height
    letterSpacing: "0%",
  }}
>
  <li>Individual Therapy</li>
  <li>Couples and Family Therapy</li>
  <li>Group Therapy</li>
  <li>Child and Adolescents Therapy</li>
  <li>Psychiatric Evaluations</li>
  <li>Medication Management</li>
  <li>Neuropsychological Testing</li>
  <li>Mindfulness and Stress Management</li>
  <li>Workshops and Support Groups</li>
  <li>Corporate & School Partnership</li>
</ul>

          </div>

          <div className="lg:pl-8">
            <h2
  className="mb-2 font-urbanist"
  style={{
    fontWeight: 500,        // Medium weight
    fontStyle: "normal",    // Medium style (normal, not italic)
    fontSize: "14px",
    lineHeight: "140%",     // 1.4 line height
    letterSpacing: "0%",
  }}
>
  Contact Us
</h2>

            <p
  className="text-gray-400 font-urbanist"
  style={{
    fontWeight: 400,      // Regular
    fontStyle: "normal",  // Regular style
    fontSize: "14px",
    lineHeight: "140%",   // 1.4 line height
    letterSpacing: "0%",
    margin: 0,            // Reset default margins to avoid layout issues
  }}
>
  Phone: (555) 123-4567
</p>
<p
  className="text-gray-400 font-urbanist"
  style={{
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "0%",
    margin: 0,
  }}
>
  info@dareclinic.com
</p>

          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="flex gap-4 text-xl">
              <FaInstagram className="hover:text-green-300 cursor-pointer" />
              <FaFacebook className="hover:text-green-300 cursor-pointer" />
              <FaYoutube className="hover:text-green-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-4 sm:right-6 md:right-8 lg:right-10 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 z-50"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;





