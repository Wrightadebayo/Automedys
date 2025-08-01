// import { FaUsers,  } from 'react-icons/fa';
import { therapyCards } from "../assets/data";
import {
  FaUser,
  FaUsers,
  FaUserFriends,
  FaChild,
  FaCheck,
} from "react-icons/fa";
import autoimage from "../assets/autoimg1.png";

const iconMap = {
  FaUser: <FaUser size={20} className="text-black" />,
  FaUsers: <FaUsers size={20} className="text-black" />,
  FaUserFriends: <FaUserFriends size={20} className="text-black" />,
  FaChild: <FaChild size={20} className="text-black" />,
};

const ServiceCards = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
        Therapy Services
      </h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Cards */}
        <div className="flex flex-col justify-between h-[300px] space-y-3">
          {therapyCards.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between bg-white p-5 shadow rounded-md flex-1"
            >
              <div className="w-10 h-2 flex items-center justify-center rounded shadow mb-3">
                {iconMap[card.iconName]}
              </div>
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Middle Image with Text Overlays */}
       {/* Middle Image with Text Overlays */}
<div className="relative h-[250px] sm:h-[300px] md:h-auto w-full rounded shadow-md overflow-hidden">
  <img
    src={autoimage}
    alt="Therapy"
    className="w-full h-full object-cover"
  />

  <div className="absolute bottom-0 left-0 w-full px-4 py-4 md:px-6 flex flex-col items-start text-left space-y-2 bg-gradient-to-t from-white/90 via-white/70 to-transparent text-xs">
    {[
      "Individual Therapy.",
      "Couples & Family Therapy.",
      "Group Therapy.",
      "Child and Adolescent Therapy.",
      
    ].map((text, index) => (
      <p
        key={index}
        className="bg-white text-gray-800 text-sm md:text-base flex items-center gap-2 px-3 py-1 rounded shadow"
      >
        <span className="bg-white text-black rounded-full p-1 flex items-center justify-center shadow w-5 h-5">
          <FaCheck size={12} />
        </span>
        {text}
      </p>
    ))}
  </div>
</div>


        {/* Right Cards */}
        <div className="flex flex-col justify-between h-[300px] space-y-2">
          {therapyCards.slice(2).map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between bg-white p-5 shadow rounded-md flex-1"
            >
              <div className="w-10 h-2 flex items-center justify-center rounded shadow mb-3">
                {iconMap[card.iconName]}
              </div>
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <p className="text-gray-600 text-xs">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;














