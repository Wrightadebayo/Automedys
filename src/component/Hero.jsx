
const Hero = () => {
  return (
    <section
      id="Home"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 min-h-screen bg-white"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
          Welcome to Dare Behavioral
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Health & Wellness Clinic PLLC
        </h2>

        <p className="text-gray-400 text-xs md:text-sm mb-6 max-w-md mx-auto">
          Compassionate, evidence-based mental healthcare tailored to your journey.
        </p>

<div className="w-full flex justify-center items-center flex-col gap-4 mb-6 mt-10">
  <div className="relative w-full max-w-[600px] mx-auto">
    <video
      className="w-full h-[250px] md:h-[300px] rounded-md shadow-md opacity-90 object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="/video2.mp4.mp4"
    ></video>

    <a
      href="#appointment"
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-800 text-white text-sm px-3 py-1 rounded shadow"
    >
      Book Appointment
    </a>
  </div>
</div>






        <p className="text-gray-800 text-sm md:text-base max-w-xl mx-auto mt-20 text-center">
          At Dare Behavioral Health & Wellness, we provide comprehensive mental health
          service with a focus on personalized care. Our experienced team is dedicated to
          helping you achieve mental wellness through evidence-based treatments and
          compassionate support.
        </p>
      </div>
    </section>
  );
};

export default Hero;


