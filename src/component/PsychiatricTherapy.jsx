import { FaCheck } from "react-icons/fa";
import autoimage from "../assets/autoimage2.png";
import Wellness1 from "../assets/wellness1.jpg";
import wellness2 from "../assets/wellness4.jpg";
import wellness3 from "../assets/wellness3.jpg";





const PsychiatricTherapy = () => {
  const cardData = [
    {
      image: wellness2,
      title: "Psychiatric Evaluation",
      subtitle:
        "Comprehensive assessments to diagnose mental health conditions and guide treatment.",
    },
    {
      image: Wellness1,
      title: "Medication Management",
      subtitle:
        "Ongoing medication review to ensure effectiveness and reduce side effects.",
    },
    {
      image: wellness3,
      title: "Neuropsychological Testing",
      subtitle:
        "Cognitive tests to identify memory, attention, and reasoning strengths/weaknesses.",
    },
  ];

  const overlayTexts = [
    "Psychiatric Evaluations",
    "Medication Management",
    "Neuropsychological Testing",
  ];

  return (
    <section className="bg-white px-4 md:px-12 pt-16 pb-10">
      <h2 className="text-2xl md:text-3xl font -bold mb-10 text-gray-1000 text-center">
        Psychiatric Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Image Block */}
        <div className="relative rounded-md shadow-md overflow-hidden h-[500px] w-full">
          <img
            src={autoimage}
            alt="Psychiatric Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-md shadow space-y-2">
            {overlayTexts.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="bg-white rounded-full p-1 shadow w-5 h-5 flex items-center justify-center">
                  <FaCheck className="text-black text-xs" />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="grid gap-4 h-[500px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md flex flex-col items-start text-left h-full"
            >
              <img
                src={card.image}
                alt="Service Icon"
                className="w-7 h-7 object-contain mb-2"
              />
              <h3 className="text-base md:text-lg  text-gray-800 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychiatricTherapy;
// hugeicons:brain-02
// carbon:medication
// ph:brain
// hugeicons:service
// material-symbols:physical-therapy-outline
// bx:leaf