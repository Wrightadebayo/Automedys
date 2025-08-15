import { FaCheck } from "react-icons/fa";
import { cardData } from "../assets/data";
import autoimage from "../assets/autoimage2.png";

const PsychiatricTherapy = () => {
  const overlayTexts = [
    "Psychiatric Evaluations",
    "Medication Management",
    "Neuropsychological Testing",
  ];

  return (
    <section className="bg-[#F9FAFA] px-4 md:px-12 pt-16 pb-10 overflow-x-hidden">
      {/* Heading */}
      <h2 className="font-urbanist font-semibold text-[40px] leading-[48px] text-[#2A2A2E] text-center mb-10 break-normal">
        Psychiatric Services
      </h2>

      <div className="flex flex-col md:flex-row md:gap-6 items-start md:items-stretch">
        {/* Left: Image Block */}
        <div className="relative w-full md:w-1/2 lg:w-[505px] h-[400px] md:h-[701px] rounded-lg shadow-md overflow-hidden flex-shrink-0">
          <img
            src={autoimage}
            alt="Psychiatric Services"
            className="w-full h-full object-cover"
          />

          {/* Overlay Text Box */}
          <div className="absolute bottom-10 left-2 md:left-4 lg:left-6 flex flex-col p-3 space-y-2">
            {overlayTexts.map((text, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-white rounded-md shadow px-3 py-2 max-w-max"
              >
                <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow">
                  <FaCheck className="text-black text-xs" />
                </span>
                <span className="font-urbanist font-medium text-[15px] leading-[22px] text-[#2A2A2E] whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="flex-1 grid grid-cols-1 gap-6 w-full mt-6 md:mt-0">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] p-4 md:p-6 rounded-md shadow-md flex flex-col items-start text-left relative overflow-hidden"
            >
              {/* SVG Icon */}
              <div className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-md shadow mb-4">
                {card.image}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col gap-2 w-full">
                <h3 className="font-urbanist font-semibold text-[20px] leading-[28px] text-[#2A2A2E] break-words">
                  {card.title}
                </h3>
                <p className="font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75] break-words">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychiatricTherapy;
