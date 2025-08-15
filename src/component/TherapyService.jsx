import { therapyCards } from "../assets/data.jsx";
import autoimage from "../assets/autoimg1.png";
import { FaCheck } from "react-icons/fa";

const ServiceCards = () => {
  return (
    <section className="w-full bg-white py-10 flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-center mb-10"
        style={{
          fontFamily: 'Urbanist, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '40px',
          lineHeight: '48px',
          letterSpacing: '0%',
          color: '#2A2A2E',
          width: '312px',
          height: '48px',
        }}
      >
        Therapy Services
      </h2>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]">
        {/* Left Cards */}
        {therapyCards.slice(0, 2).map((card) => (
          <div
            key={card.id}
            className="relative p-5 shadow-md rounded-md flex flex-col items-start"
            style={{
              width: '355px',
              height: '275px',
              borderRadius: '8px',
              backgroundColor: '#F5F5F5',
            }}
          >
            <div
              className="flex items-center justify-center absolute top-7 left-7 shadow-md"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
              }}
            >
              {card.icon}
            </div>
            <div className="mt-[70px]">
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.text}</p>
            </div>
          </div>
        ))}

        {/* Middle Image */}
        <div
          className="relative shadow-md rounded-md overflow-hidden flex items-end"
          style={{
            width: '355px',
            height: '275px',
            borderRadius: '8px',
          }}
        >
          <img
            src={autoimage}
            alt="Therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-3 bg-white/90 flex flex-col gap-2">
            {[
              "Individual Therapy.",
              "Couples & Family Therapy.",
              "Group Therapy.",
              "Child and Adolescent Therapy.",
            ].map((text, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-gray-800 text-sm md:text-base"
              >
                <span
                  className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow"
                  style={{ width: '52px', height: '52px', borderRadius: '6px' }}
                >
                  <FaCheck size={12} />
                </span>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        {therapyCards.slice(2).map((card) => (
          <div
            key={card.id}
            className="relative p-5 shadow-md rounded-md flex flex-col items-start"
            style={{
              width: '355px',
              height: '275px',
              borderRadius: '8px',
              backgroundColor: '#F5F5F5',
            }}
          >
            <div
              className="flex items-center justify-center absolute top-7 left-7 shadow-md"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
              }}
            >
              {card.icon}
            </div>
            <div className="mt-[70px]">
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
