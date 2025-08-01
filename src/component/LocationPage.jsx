import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import autoimage6 from "../assets/autoimage6.png";
import autoimage7 from "../assets/autoimage7.png";
import autoimage8 from "../assets/autoimage8.png";

const LocationPage = () => {
  return (
    <section className="max-w-[1000px] mx-auto px-4 py-10 bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        Locations & Hours
      </h1>

      {/* Main Clinic Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-[450px] space-y-6 text-gray-700 text-sm">
          <div>
            <h2 className="text-xl pb-3 font-semibold text-black">Main Clinic</h2>
            <h5 className="font-medium pb-2 text-sm">Address</h5>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaMapMarkerAlt className="text-black mt-1" />
              <p>123 Wellness Way, [City], [State] [ZIP]</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold">Hours:</h2>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaClock className="text-black mt-1" />
              <p>Monday - Friday: 8 AM - 6 PM</p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaClock className="text-black mt-1" />
              <p>Saturday: 9 AM - 1 PM</p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <IoClose className="text-red-600 mt-1" />
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[450px]">
          <img
            src={autoimage6}
            alt="Main Clinic"
            className="w-full h-72 object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Satellite Office Section */}
      <div className="flex flex-col mt-20 md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-[450px] space-y-6 text-gray-700 text-sm">
          <div>
            <h2 className="text-xl pb-3 font-semibold text-black">Texas Satellite Office</h2>
            <h5 className="font-medium pb-2 text-sm">Address</h5>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaMapMarkerAlt className="text-black mt-1" />
              <p>456 Healing Blvd, [City], [State], [ZIP]</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold">Hours:</h2>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaClock className="text-black mt-1" />
              <p>Monday - Thursday: 9 AM - 5 PM</p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <FaClock className="text-black mt-1" />
              <p>Friday: 9 AM - 3 PM</p>
            </div>
            <div className="flex items-start gap-3 p-2 bg-gray-100 rounded">
              <IoClose className="text-red-600 mt-1" />
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[450px]">
          <img
            src={autoimage7}
            alt="Satellite Office"
            className="w-full h-72 object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Telehealth Services Image with Text Overlay */}
      <div className="relative w-full h-[400px] mt-20">
        <img
          src={autoimage8}
          alt="Telehealth"
          className="w-full h-full object-cover rounded-md shadow-md"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-700/90 via-green-600/50 to-transparent text-white p-6 rounded-b-md">
          <h2 className="text-xl font-semibold">Telehealth Services</h2>
          <p className="text-sm mb-3">
            Secure video appointments available Monday–Friday, 8AM–8PM.
          </p>
          <button className="bg-green-400 text-black-700 px-4 py-2 text-sm font-medium rounded shadow">
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;
