import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SingleQuestions = ({ title, response }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm transition-all w-full max-w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between
          px-4 py-3
          font-urbanist font-semibold
          text-[#2A2A2E]
          text-[18px] leading-[26px] tracking-[0]
          text-left
          focus:outline-none
        "
      >
        {/* Text */}
        <span className="flex-1 break-words">{title}</span>

        {/* Icon */}
        <FaPlus
          className={`ml-3 flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
      </button>

      {/* Response */}
      {isOpen && (
        <div className="px-4 pb-4 text-sm sm:text-base font-urbanist text-gray-600 leading-relaxed">
          {response}
        </div>
      )}
    </div>
  );
};

export default SingleQuestions;

