import SingleQuestions from "./SingleQuestions"

 
const Questions = ({ questionData }) => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Heading */}
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
        </div>

        {/* Right Column: Accordion */}
        <div className="md:col-span-2 space-y-4">
          {questionData.map((question) => (
            <SingleQuestions key={question.id} {...question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;


