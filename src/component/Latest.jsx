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
<h1
  className="
    font-urbanist font-medium
    text-[#2A2A2E]
    text-2xl sm:text-3xl
    md:text-[48px] md:leading-[58px]
    tracking-[0]
    text-center
    px-2 md:px-0
    max-w-full
  "
>
  Latest Insights
</h1>


          <button
  className="
    flex items-center gap-3
    text-sm
    px-4 py-1          /* smaller padding for small screens */
    sm:px-6            /* slightly larger on small+ */
    md:px-8            /* full padding on medium+ */
    rounded
    border border-transparent md:border-[#463E36]
    hover:bg-black hover:text-white
    transition-all
  "
>
  <span
    className="
      font-urbanist font-medium
      text-[#2A2A2E]
      text-sm sm:text-base md:text-[16px]
      leading-[18px] sm:leading-[19px] md:leading-[20px]
      tracking-[0]
      text-center
      inline-block
      whitespace-nowrap
    "
  >
    More stories
  </span>

  <FaArrowRight
    className="
      ml-1 
      text-black 
      rounded 
      opacity-100
      w-4 h-4
      md:w-6 md:h-6
    "
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
<h1
  className="
    font-urbanist font-medium
    text-white
    text-2xl sm:text-3xl
    md:text-[38px] md:leading-[48px]
    tracking-[0]
    mb-2
    max-w-full
  "
>
  Understanding Anxiety in the Modern World
</h1>


<p
  className="
    font-urbanist font-normal
    text-[#C2C2C2]
    text-base sm:text-lg md:text-[20px]
    leading-[26px] sm:leading-[28px] md:leading-[30px]
    tracking-[0]
    mb-4
    max-w-full
  "
>
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
<h2 className="mt-3 font-urbanist font-medium text-[#2A2A2E]" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0%' }}>
  The Benefit of Group Therapy
</h2>


<p
  className="
    text-sm font-urbanist font-normal text-[#707A75] mt-1
    text-[18px] leading-[26px] tracking-[0]
    whitespace-normal break-words max-w-full
  "
>
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
<h2
  className="mt-3 font-urbanist font-medium text-[#2A2A2E] text-2xl leading-8"
>
  Mental Health Self Care Tips
</h2>


<p className="mt-1 font-urbanist font-normal text-[#707A75] text-base leading-6">
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




