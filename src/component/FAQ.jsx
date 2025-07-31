import { useState } from "react";
import { questionData } from "../assets/data";
import Questions from "./Questions";

const FAQ = () => {
  const [questions] = useState(questionData);

  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10">
      <Questions questionData={questions} />
    </div>
  );
};

export default FAQ;


