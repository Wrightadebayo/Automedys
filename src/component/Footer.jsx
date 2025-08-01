import { FaInstagram, FaFacebook, FaYoutube, FaArrowUp } from "react-icons/fa";
import behalogo from "../assets/behalogo.png"; // adjust the path

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black rounded text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top: Logo & Appointment Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <img
              src={behalogo}
              alt="Logo"
              className="w-8 h-8 rounded object-contain"
            />
            <h2 className="text-sm leading-tight">
              Dare Behavioral <br /> Health Wellness
            </h2>
          </div>
          <button className="bg-green-300 text-black text-sm py-2 px-4 rounded">
            Book an appointment
          </button>
        </div>

        {/* Footer Content: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="font-bold mb-2">Address</h2>
            <p className="text-sm text-gray-400">
              2927 Westheimer Rd <br />
              Santa Ana, BS186
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-2">Services</h2>
            <ul className="text-xs text-gray-400 space-y-1">
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
            <h2 className="font-bold mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400">Phone: (555) 123-4567</p>
            <p className="text-sm text-gray-400">info@dareclinic.com</p>
          </div>
          <div className="flex items-start justify-start lg:justify-end">
            <div className="flex gap-4 text-xl">
              <FaInstagram className="hover:text-green-300 cursor-pointer" />
              <FaFacebook className="hover:text-green-300 cursor-pointer" />
              <FaYoutube className="hover:text-green-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Up Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 z-50 mr-25"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Footer;




