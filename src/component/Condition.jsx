import React from 'react';
import { DataImages } from '../assets/data';
import ConditionCard from './ConditionCard';

const Condition = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl text-gray-800 mb-4 font-bold">
          Conditions We Treat
        </h2>

        <p className="text-center md:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          Personalized evidence-based support designed to address <br />
          your unique mental health needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DataImages.map((item, index) => (
            <ConditionCard
              key={index}
              image={item.image}
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

