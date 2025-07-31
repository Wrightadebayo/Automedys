import { useEffect, useState } from "react";
import { Accordiondata } from "../assets/data"; 


const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === Accordiondata.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
     
      className="scroll-mt-20 py-10 px-4 md:px-20 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Our Services
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 rounded-md">
          {/* Accordion Section */}
          <div className="w-full md:w-[45%] h-80 overflow-y-auto space-y-2">
            {Accordiondata.map((item, index) => (
              <div
                key={item.id}
                className={`cursor-pointer p-3 rounded-md transition duration-300 text-xs border-b ${
                  index === activeIndex ? "bg-blue-50" : "bg-white"
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-500">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <h3
                      className={`text-xs font-semibold ${
                        index === activeIndex
                          ? "text-gray-800"
                          : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {index === activeIndex && (
                      <p className="text-gray-500 text-xs mt-1">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[45%] h-80">
            <img
              src={Accordiondata[activeIndex].image}
              alt={Accordiondata[activeIndex].title}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;











