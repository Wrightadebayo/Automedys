import { therapyCards } from "../assets/data.jsx"; 
import autoimage from "../assets/autoimg1.png";
import { FaCheck } from "react-icons/fa";

const ServiceCards = () => {
  return (
    <section className="w-full bg-white py-10 px-4">
      {/* Heading */}
      <h2 className="max-w-[312px] mx-auto mb-10 text-center font-urbanist font-semibold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-[#2A2A2E]">
        Therapy Services
      </h2>

      {/* Cards Grid */}
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Cards */}
        <div className="flex flex-col gap-6">
          {therapyCards.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="relative flex flex-col p-5 shadow-md rounded-md bg-[#F5F5F5] flex-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center absolute shadow-md w-[52px] h-[52px] top-[28px] left-[28px] rounded-md bg-white">
                {card.icon}
              </div>

              {/* Title & Text */}
              <div className="mt-[90px] flex flex-col gap-3">
                <h3 className="font-urbanist font-semibold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#2A2A2E]">
                  {card.title}
                </h3>
                <p className="font-urbanist font-medium text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#707A75] break-words md:overflow-visible lg:line-clamp-4">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Image */}
        <div className="relative w-full rounded shadow-md overflow-hidden flex-1">
          <img
            src={autoimage}
            alt="Therapy"
            className="w-full h-auto md:h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            {[
              "Individual Therapy.",
              "Couples & Family Therapy.",
              "Group Therapy.",
              "Child and Adolescent Therapy.",
            ].map((text, index) => (
              <div
                key={index}
                className="inline-flex max-w-max items-center gap-2 rounded-md shadow px-3 py-2 bg-[#FFFFFFE5]"
              >
                <span className="flex items-center justify-center shadow rounded-full bg-white w-[18px] h-[24px]">
                  <FaCheck size={12} />
                </span>
                <span
                  className="text-gray-900"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "15px",
                    lineHeight: "22px",
                    letterSpacing: "0%",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          {therapyCards.slice(2).map((card) => (
            <div
              key={card.id}
              className="relative flex flex-col p-5 shadow-md rounded-md bg-[#F5F5F5] flex-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center absolute shadow-md w-[52px] h-[52px] top-[28px] left-[28px] rounded-md bg-white">
                {card.icon}
              </div>

              {/* Title & Text */}
              <div className="mt-[90px] flex flex-col gap-3">
                <h3 className="font-urbanist font-semibold text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-[#2A2A2E]">
                  {card.title}
                </h3>
                <p className="font-urbanist font-medium text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#707A75] break-words md:overflow-visible lg:line-clamp-4">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
