import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 max-w-[1240px] mx-auto min-h-screen">
     
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">
        Welcome to Dare Behavioral
      </h1>

      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Health & Wellness Clinic PLLC
      </h2>
      <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-md">
        Compassionate, evidence-based mental healthcare tailored to your journey.
      </p>
       <div className="w-full  flex flex-col items-center gap-4 mb-6 mt-10">
        <video
          className="w-[700px] h-[300px] rounded-md shadow-md opacity-90 object-cover"
          controls
          src="your-video-url.mp4"
        ></video>

        <a
          href="#appointment"
          className="bg-green-800 text-white px-6 py-2 rounded-md shadow"
        >
          Book Appointment
        </a>
      </div>


      <p className="text-gray-800 text-sm md:text-base max-w-md mb-4 mt-20 text-center ">
        At Dare Behavioral Health & Wellness, we provide comprehensive mental health service with a focus on personalized care. Our experienced team is dedicated to helping you achieve mental wellness through evidence-based treatments and compassionate support.
      </p>
    </section>
  );
};

export default Hero

