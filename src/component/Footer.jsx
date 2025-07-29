import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logoimg from "../assets/logoimg.jpg";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top: Logo & Appointment Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <img
              src={logoimg}
              alt="Logo"
              className="w-10 h-10 rounded object-contain"
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
          {/* Address */}
          <div>
            <h2 className="font-bold mb-2">Address</h2>
            <p className="text-sm text-gray-400">
              2927 Westheimer Rd <br />
              Santa Ana, BS186
            </p>
          </div>

          {/* Services */}
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

          {/* Contact Us */}
          <div className="lg:pl-8">
            <h2 className="font-bold mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400">Phone: (555) 123-4567</p>
            <p className="text-sm text-gray-400">info@dareclinic.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-start justify-start lg:justify-end">
            <div className="flex gap-4 text-xl">
              <FaInstagram className="hover:text-green-300 cursor-pointer" />
              <FaFacebook className="hover:text-green-300 cursor-pointer" />
              <FaYoutube className="hover:text-green-300 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* New: Bottom Centered Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
