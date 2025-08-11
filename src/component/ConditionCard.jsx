
// Inside ConditionCard.jsx (or wherever it’s defined)
// ConditionCard.jsx
import React from "react";

const ConditionCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-sm gap-4 w-full sm:w-[300px]">
      <img
        src={image}
        alt={title}
        className="object-cover"
        style={{ width: "174px", height: "174px" }}
      />
      <div className="flex flex-col items-start">
        <h3 className="font-urbanist font-semibold text-[#2A2A2E]">{title}</h3>
        <p className="mt-2 font-urbanist font-medium text-[#707A75]">{description}</p>
      </div>
    </div>
  );
};

export default ConditionCard;
