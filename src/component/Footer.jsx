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
              className="w-20 h-10 rounded object-contain"
            />
            <h2 className="flex flex-col text-sm sm:text-base md:text-lg leading-tight font-semibold text-center sm:text-left">
  <span>Dare Behavioral</span>
  <span>Health Wellness</span>
</h2>

          </Link>

          <button className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base py-2 px-5 rounded-md font-extrabold shadow-sm transition-colors">
            Book an Appointment
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="font-medium mb-2">Address</h2>
            <p className="text-sm font-normal text-white">
              2972 Westheimer Rd.<br />
              Santa Ana, Illinois 85486
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-2">Services</h2>
            <ul className="text-xs text-gray-400 space-y-1 font-normal">
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
            <h2 className="font-medium mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400 font-medium">Phone: (555) 123-4567</p>
            <p className="text-sm text-gray-400 font-medium">info@dareclinic.com</p>
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





