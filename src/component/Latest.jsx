import { FaArrowRight } from "react-icons/fa";
import therapist from "../assets/therapist20.jpg"; 
import grouptherpy from '../assets/grouptherapy.jpg'
import healthmatter from '../assets/healthmatters.jpg'

const Latest = () => {
  return (
    <section className="bg-gray-150 px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Latest Insights</h1>
          <button className="flex items-center gap-2 text-sm border border-black px-8 py-1 rounded hover:bg-black hover:text-white transition-all">
            <span>More</span>
            <FaArrowRight className="text-sm ml-1" />
          </button>
        </div>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src={therapist}
            alt="Therapist discussing anxiety"
            className="w-full h-62 object-cover rounded"
          />
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column */}
          <div>
            <img
              src={grouptherpy}
              alt="Group therapy session"
              className="w-full h-68 object-cover rounded"
            />
            <h2 className="mt-3 text-lg font-bold text-gray-800">
              The Benefit of Group Therapy
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Discover how group therapy can uncover unique healing opportunities and peer support.
            </p>
            <div className="flex items-center text-sm mt-2 cursor-pointer">
              <span>Learn more</span>
              <FaArrowRight className="ml-1 mt-1 text-gray-95" />
            </div>
          </div>

          {/* Second Column */}
          <div>
            <img
              src={healthmatter}
              alt="Mental health self care"
              className="w-full h-68 object-cover rounded"
            />
            <h2 className="mt-3 text-lg font-bold text-gray-800">
              Mental Health Self Care Tips
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Simple daily activities that can significantly improve your mental health.
            </p>
            <div className="flex items-center text-sm mt-2 cursor-pointer">
              <span>Learn more</span>
              <FaArrowRight className="ml-1 mt-1 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;




