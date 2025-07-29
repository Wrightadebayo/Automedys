
import { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';

const SingleQuestions = ({ title, response }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white mt-4">
      <header
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h5 className="text-sm  text-black">{title}</h5>
        <button className="text-black text-sm">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (
        <p className="mt-2 text-gray-500 text-sm">{response}</p>
      )}
    </article>
  );
};

export default SingleQuestions
