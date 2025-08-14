import SingleQuestions from "./SingleQuestions";

const Questions = ({ questionData }) => {
  return (
    <section className="max-w-7xl mx-auto font-urbanist">
      {/* Stack everything vertically */}
      <div className="flex flex-col space-y-6 relative">

        {/* Heading on top */}
        <div>
          <h2
            className="
              font-urbanist font-medium
              text-[#2A2A2E]
              text-[48px]
              leading-[58px]
              tracking-[0]
              text-left mt-8 
            "
          >
            Frequently Asked
            <br className="hidden md:block" />
            Questions
          </h2>
        </div>

        {/* Accordion below heading, narrower and shifted right */}
        <div className="flex flex-col space-y-4 md:w-[60%] md:ml-auto">
          {questionData?.map((question) => (
            <SingleQuestions key={question.id} {...question} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Questions;


