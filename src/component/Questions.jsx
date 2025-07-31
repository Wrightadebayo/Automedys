import SingleQuestions from "./SingleQuestions";

const Questions = ({ questionData }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Heading */}
        <div className="md:col-span-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl  text-gray-800">
            Frequently Asked
            <br className="hidden md:block" />
            Questions
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="md:col-span-2 space-y-4">
          {questionData?.map((question) => (
            <SingleQuestions key={question.id} {...question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;

