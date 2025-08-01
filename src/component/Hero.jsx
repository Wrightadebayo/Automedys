
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
    {/* Video element */}
    <video
      className="w-full h-[250px] md:h-[300px] rounded-md shadow-md opacity-90 object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="/automp.mp4"
    ></video>

    {/* White bottom gradient overlay */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent rounded-b-md pointer-events-none"></div>

    {/* Vertical left side labels */}
    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col gap-2">
      <p className="bg-stone-400 text-black mb-1 text-xs  px-2 py-1 rounded-xl">
        02 TELEHEALTH SERVICES
      </p>
      <p className="bg-gray-500 text-black mt-1 text-xs  px-2 py-1 rounded-xl ml-15">
        03 PSYCHIATRIC SERVICES
      </p>
    </div>

    {/* Right side single horizontal label */}
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
      <p className="bg-green-300 text-black text-xs  px-2 py-1 rounded-xl">
        01 GROUP THERAPY
      </p>
    </div>

    {/* Center overlay text without black background */}
    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center text-white px-2 text-sm md:text-base  ">
      <p>
        Peer-led sessions to share experiences and build 
        collective resilience together.
      </p>
    </div>

    {/* Appointment button */}
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


