import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleQuestions = ({ title, response }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-lg bg-white transition-all overflow-visible w-full"
      style={{
        border: "1px solid #E3E5E8",
        boxSizing: "border-box",
        maxWidth: "1300px", // increase container width
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none"
      >
        {/* Title takes available space but leaves room for icon */}
        <span
          className="font-urbanist font-semibold leading-[26px] tracking-[0] flex-1"
          style={{
            fontFamily: "Urbanist",
            fontWeight: 600,
            color: "#2A2A2E",
            minWidth: 0, // ensures text shrinks correctly on medium screens
          }}
        >
          {title}
        </span>

        {/* Icon always visible inside container */}
        {isOpen ? (
          <FaMinus className="ml-3 flex-shrink-0 transition-transform duration-700 text-gray-500" />
        ) : (
          <FaPlus className="ml-3 flex-shrink-0 transition-transform duration-700 text-gray-500" />
        )}
      </button>

      {/* Response */}
      {isOpen && (
        <div className="px-4 pb-4 text-sm sm:text-base font-urbanist text-gray-500 leading-relaxed break-words">
          {response}
        </div>
      )}
    </div>
  );
};

export default SingleQuestions;
