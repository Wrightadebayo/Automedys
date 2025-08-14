import { useState, useEffect, useRef } from "react";
import { Accordiondata } from "../assets/data.jsx";

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
    <section className="scroll-mt-20 py-10 px-4 md:px-8 lg:px-10 bg-[#EFF2F6]">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center font-urbanist font-semibold leading-[48px] text-gray-800 pb-8 mb-12"
          style={{
            fontSize: "40px",
            letterSpacing: "0%",
            fontStyle: "SemiBold",
          }}
        >
          Our Services
        </h2>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 items-start"
      >
        {/* Accordion */}
        <div className="flex flex-col bg-[#EFF2F6] rounded-md p-3 h-auto md:h-[420px] lg:h-[470px] md:w-[95%] lg:w-full">
          {Accordiondata.map((item, index) => (
            <div
              key={item.id}
              className="cursor-pointer p-3 rounded-md transition duration-300 bg-[#EFF2F6]"
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col gap-1.5 relative">
                {/* Number + Title */}
                <div
                  className={`flex items-center gap-2 ${
                    index === 4 ? "overflow-x-auto" : ""
                  }`}
                >
                  {/* Number */}
                  <span
                    className="font-urbanist font-semibold min-w-[28px] flex-shrink-0"
                    style={{
                      fontFamily: "Urbanist",
                      fontWeight: 600,
                      fontStyle: "SemiBold",
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0%",
                      color: index === activeIndex ? "#1F2937" : "#6B7280",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} .
                  </span>

                  {/* Title */}
                  <h1
                    className={`font-urbanist font-semibold text-[18px] leading-[26px] text-[#6B7280] ${
                      index === 4 ? "whitespace-nowrap" : "break-words"
                    }`}
                    style={{
                      fontFamily: "Urbanist",
                      fontWeight: 600,
                      fontStyle: "SemiBold",
                      color: index === activeIndex ? "#1F2937" : "#6B7280",
                    }}
                  >
                    {item.title}
                  </h1>
                </div>

                {/* Gray line */}
                <div className="bg-gray-300 h-[1px] rounded-full w-full mx-auto relative mt-2.5">
                  {index === activeIndex && (
                    <div
                      className="bg-[#205C2A] h-[1px] rounded-full absolute left-0 top-[-0.5px]"
                      style={{ width: "160px" }}
                    ></div>
                  )}
                </div>

                {/* Content */}
                {index === activeIndex && (
                  <p
                    className="text-gray-500 mt-1.5"
                    style={{
                      fontFamily: "Urbanist",
                      fontWeight: 500,
                      fontStyle: "Medium",
                      fontSize: "15px",
                      lineHeight: "22px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="rounded-md overflow-hidden w-full h-auto md:h-[420px] lg:h-[470px] md:ml-3 flex">
          <img
            src={Accordiondata[activeIndex].image}
            alt={Accordiondata[activeIndex].title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
