import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SingleQuestions = ({ title, response }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-base sm:text-lg font-medium text-gray-800 focus:outline-none"
      >
        <span className="flex-1">{title}</span>
        <FaChevronDown
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {response}
        </div>
      )}
    </div>
  );
};

export default SingleQuestions;
