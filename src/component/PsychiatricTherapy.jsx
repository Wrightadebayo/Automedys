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
    <section className="bg-[#F9FAFA] px-4 md:px-12 pt-16 pb-10">
      {/* Heading */}
      <h2 className="font-urbanist font-semibold text-[40px] leading-[48px] text-[#2A2A2E] text-center mb-10 break-normal">
        Psychiatric Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Image Block */}
        <div className="relative w-full md:w-[505px] h-[550px] md:h-[701px] rounded-lg shadow-md overflow-hidden mx-auto md:mx-0">
          <img
            src={autoimage}
            alt="Psychiatric Services"
            className="w-full h-full object-cover"
          />

         {/* Overlay Text Box */}
{/* Overlay Text Box */}
<div className="absolute bottom-10 left-6 w-[239px] h-[122px]  rounded-md shadow flex flex-col p-3 space-y-2">
  {overlayTexts.map((text, index) => (
    <div
      key={index}
      className="flex items-center gap-2 bg-white rounded-md shadow px-3 py-2 whitespace-nowrap"
    >
      <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow">
        <FaCheck className="text-black text-xs" />
      </span>
      <span className="font-urbanist font-medium text-[15px] leading-[22px] text-[#2A2A2E]">
        {text}
      </span>
    </div>
  ))}
</div>
</div>

<div className="grid gap-4">
  {cardData.map((card, index) => (
    <div
      key={index}
      className="bg-[#F5F5F5] p-4 rounded-md shadow-md flex flex-col items-start text-left relative"
    >
      {/* SVG with white background */}
      <div className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-md shadow absolute top-[28px] left-[28px]">
        {card.image}
      </div>

      {/* Title & Subtitle */}
      <div className="absolute top-[111px] left-[28px] w-[543px] h-[88px] flex flex-col gap-[12px]">
        <h3 className="font-urbanist font-semibold text-[20px] leading-[28px] text-[#2A2A2E]">
          {card.title}
        </h3>
        <p className="font-urbanist font-medium text-[16px] leading-[24px] text-[#707A75]">
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
