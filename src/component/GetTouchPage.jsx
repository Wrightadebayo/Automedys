import { Link } from "react-router-dom";


const GetTouchPage = () => {
  return (
    <div className="font-urbanist">
      <div className="py-14 px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Heading */}
<h1 className="text-3xl font-urbanist font-medium mb-4" style={{ color: "#2A2A2E" }}>
  Get In Touch
</h1>


        {/* Description */}
       <p
  className="mb-6 max-w-xl text-sm font-urbanist font-medium"
  style={{ color: "#707A75" }}
>
  Ready to start your journey to better mental health? Contact us today to <br />
  schedule an appointment.
</p>


        {/* Contact Info */}
<div className="flex justify-center items-center gap-4 flex-wrap text-gray-700 mb-6 font-urbanist font-medium">
  <p>
    <span className="text-gray-400">Phone:</span> (555) 123-4567
  </p>
  <span className="text-gray-400 hidden sm:inline">|</span>
  <p>
    <span className="text-gray-400">Email:</span> info@dareclinic.com
  </p>
</div>

        {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-urbanist">
  <Link
    to="/contact"
    className="bg-green-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition text-center font-medium"
  >
    Contact Us
  </Link>
  <button className="border border-black text-gray-600 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition font-medium">
    View Locations
  </button>
</div>


      </div>
    </div>
  );
};

export default GetTouchPage;

