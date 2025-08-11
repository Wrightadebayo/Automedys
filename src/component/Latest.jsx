import { FaArrowRight } from "react-icons/fa";
import tasha from "../assets/tasha.png"; 
import tania from '../assets/tania.png'
import vector from '../assets/vector.png'

const Latest = () => {
  return (
    <section className="bg-gray-150 px-4 py-6 font-urbanist">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium text-gray-700">
            Latest Insights
          </h1>
          <button className="flex items-center gap-2 text-sm border border-black px-8 py-1 rounded hover:bg-black hover:text-white transition-all">
            <span className="font-urbanist font-medium text-[#2A2A2E]">More</span>

               <FaArrowRight
  className="ml-1 text-black"
  style={{
    width: "24px",
    height: "24px",
    // transform: "rotate 90",
    opacity: 1,
  }}
/>
          </button>
        </div>

        {/* Main Image */}
        <div className="flex flex-col md:flex-row bg-black text-white rounded overflow-hidden mb-6">
          {/* Image Left */}
          <div className="w-full md:w-1/2">
            <img
              src={tasha}
              alt="Therapist discussing anxiety"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-start mb-auto">
            <h1 className="text-2xl font-semibold mb-2">
              Understanding Anxiety in the Modern World
            </h1>
            <p className="mb-4 text-sm font-medium">
              Explore the causes and effective treatments for anxiety disorders in today's fast-paced society.
            </p>
            <div className="flex items-center gap-2 text-white font-medium cursor-pointer">
              <p>Learn more</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* First Column */}
          <div>
            <img
              src={tania}
              alt="Group therapy session"
              className="w-full h-68 object-cover rounded"
            />
<h2 className="mt-3 text-lg font-urbanist font-medium text-[#2A2A2E]">
  The Benefit of Group Therapy
</h2>

            <p className="text-sm font-urbanist font-normal text-[#707A75] mt-1">
  Discover how group therapy can uncover unique healing opportunities and peer support.
</p>

            <div className="flex items-center text-black text-sm mt-2 cursor-pointer font-medium">
              <span className="font-urbanist font-medium text-[#2A2A2E]">
  Learn more
</span>

            <FaArrowRight
  className="ml-1 text-black"
  style={{
    width: "24px",
    height: "24px",
    // transform: "rotate 90",
    opacity: 1,
  }}
/>

            </div>
          </div>

          {/* Second Column */}
          <div>
            <img
              src={vector}
              alt="Mental health self care"
              className="w-full h-68 object-cover rounded"
            />
<h2 className="mt-3 text-lg font-urbanist font-medium text-[#2A2A2E]">
  Mental Health Self Care Tips
</h2>

            <p className="text-sm mt-1 font-urbanist font-normal text-[#707A75]">
  Simple daily activities that can significantly improve your mental health.
</p>

            <div className="flex items-center text-sm mt-2 cursor-pointer font-medium">
<span className="font-urbanist font-medium text-[#2A2A2E]">
  Learn more
</span>
   <FaArrowRight
  className="ml-1 text-black"
  style={{
    width: "24px",
    height: "24px",
    // transform: "rotate 90",
    opacity: 1,
  }}
/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Latest;




