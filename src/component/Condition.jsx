import React from 'react';
import { DataImages } from '../assets/data';
import ConditionCard from './ConditionCard';

// Condition section displaying a title, description, and a grid of ConditionCards
// Condition section displaying a title, description, and a grid of ConditionCards
const Condition = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
       <h2
  className="
    text-center font-urbanist font-medium text-[#2A2A2E] mb-4
    text-2xl sm:text-3xl lg:text-[48px]
    leading-[32px] sm:leading-[40px] lg:leading-[58px]
  "
  style={{ letterSpacing: "0%" }}
>
  Conditions We Treat
</h2>


        {/* Section Description */}
<p
  className="
    text-center 
    font-urbanist font-medium 
    text-[#707A75] 
    mb-8 
    max-w-2xl 
    mx-auto 
    px-4
  "
  style={{
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0%",
  }}
>
  Personalized evidence-based support designed to address <br />
  your unique mental health needs
</p>



        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DataImages.map((item, index) => (
            <ConditionCard
              key={index}
              image={item.image}
              titleClassName="font-urbanist font-semibold text-[#2A2A2E]" // Title font & color
              descriptionClassName="font-urbanist font-medium text-[#707A75]" // Description font & color
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Condition;
