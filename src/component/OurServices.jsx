import { useEffect, useState, useRef } from "react";
import { Accordiondata } from "../assets/data";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  // Auto cycle active index
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === Accordiondata.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

 return (
  <section className="scroll-mt-20 py-10 px-4 md:px-10 bg-[#EFF2F6]">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-center text-2xl md:text-3xl font-urbanist mb-8 text-gray-800">
        Our Services
      </h2>

      {/* Responsive grid layout */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1 items-stretch"
      >
        {/* Accordion */}
        <div className="flex flex-col bg-[#EFF2F6] rounded-md shadow-sm p-4 overflow-y-auto">
          {Accordiondata.map((item, index) => (
            <div
              key={item.id}
              className={`relative cursor-pointer p-4 rounded-md transition duration-300 text-xs font-urbanist ${
                index === activeIndex ? "bg-blue-50" : "bg-[#EFF2F6]"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start gap-3">
                <span className="font-semibold  min-w-[30px]">
                  {String(index + 1).padStart(2, "0")} .
                </span>
                <div>
                  <h3
                    className={`font-semibold ${
                      index === activeIndex ? "text-gray-800" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {index === activeIndex && (
                    <p className="text-gray-500 text-xs mt-1">{item.content}</p>
                  )}
                </div>
              </div>

              {/* Green underline */}
              <div
  className={`absolute bottom-0 left-0 w-1/4 h-[1px] rounded-full ${
    index === activeIndex ? "bg-[#205C2A]" : "bg-transparent"
  }`}
  style={index === activeIndex ? { border: "0.1px light #205C2A" } : {}}
/>

            </div>
          ))}
        </div>

        {/* Image */}
        <div className="rounded-md shadow-md overflow-hidden flex bg-[#EFF2F6]">
          <img
            src={Accordiondata[activeIndex].image}
            alt={Accordiondata[activeIndex].title}
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

};

export default OurServices;













