import SingleQuestions from "./SingleQuestions";

const Questions = ({ questionData }) => {
  return (
    <section className="max-w-7xl mx-auto font-urbanist">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        
        {/* Left Column: Heading */}
        <div className="flex justify-center md:justify-start">
          <h2 className="font-urbanist font-medium text-2xl sm:text-3xl lg:text-4xl text-[#2A2A2E] text-center md:text-left max-w-[426px]">
            Frequently Asked
            <br className="hidden md:block" />
            Questions
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="space-y-4 flex flex-col items-center md:items-start w-full">
          {questionData?.map((question) => (
            <SingleQuestions key={question.id} {...question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
