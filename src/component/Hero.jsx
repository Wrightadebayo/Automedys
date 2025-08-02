
import { useState } from "react";
import { videoData } from "../assets/data";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  const currentVideo = videoData[currentIndex];

  const labelColors = ["bg-green-300", "bg-gray-400", "bg-pink-100"];

  const rightLabelBg = currentIndex === 0 ? labelColors[0] : "bg-pink-100";
  const leftTopLabelBg = currentIndex === 1 ? labelColors[1] : "bg-green-200";
  const leftBottomLabelBg = currentIndex === 2 ? labelColors[2] : "bg-gray-300";

  const activeOpacity = "opacity-100";
  const inactiveOpacity = "opacity-50";

  const rightLabelOpacity = currentIndex === 0 ? activeOpacity : inactiveOpacity;
  const leftTopLabelOpacity = currentIndex === 1 ? activeOpacity : inactiveOpacity;
  const leftBottomLabelOpacity = currentIndex === 2 ? activeOpacity : inactiveOpacity;

  return (
    <section
      id="Home"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 min-h-screen bg-white transition-colors duration-1000"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1">
          Welcome to Dare Behavioral
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Health & Wellness Clinic PLLC
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
          Compassionate, evidence-based mental healthcare tailored to your journey.
        </p>

        {/* Video Section */}
        <div className="w-full flex justify-center items-center flex-col gap-4 mb-6 mt-4 px-2">
          <div className="relative w-full max-w-[600px] aspect-video rounded-md overflow-hidden shadow-md transition-all duration-1000">
            <video
              key={currentVideo.src}
              className="w-full h-full object-cover transition-opacity duration-1000"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              src={currentVideo.src}
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Labels (only on md and above) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">

              {/* Left Labels */}
              <div className="absolute top-1/3 left-4 flex flex-col gap-3">
                {/* Top Left Label (02) */}
                <div
                  className={`flex items-center justify-between text-xs rounded-xl mb-5 px-3 py-1 text-sm transition-all duration-700 ${leftTopLabelBg} ${leftTopLabelOpacity}`}
                >
                  <span className="text-black">{videoData[1].label}</span>
                  <span className="ml-2 text-black"></span>
                </div>

                {/* Bottom Left Label (03) with indentation */}
                <div
                  className={`ml-10 flex items-center justify-between text-xs rounded-xl px-3 py-1 text-sm  transition-all duration-700 ${leftBottomLabelBg} ${leftBottomLabelOpacity}`}
                >
                  <span className="text-black">{videoData[2].label}</span>
                  <span className="ml-2 text-black"></span>
                </div>
              </div>

              {/* Right Label (01) */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <div
                  className={`flex items-center justify-between text-xs rounded-xl px-3 py-1 text-sm transition-all duration-700 ${rightLabelBg} ${rightLabelOpacity}`}
                >
                  <span className="text-black">{videoData[0].label}</span>
                  <span className="ml-2 text-black"></span>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%] text-white text-xs sm:text-sm md:text-base leading-snug text-center transition-opacity duration-700">
              <p className="whitespace-pre-line">{currentVideo.paragraph}</p>
            </div>

            {/* CTA Button */}
            <a
              href="#appointment"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs sm:text-sm px-4 py-2 rounded mt-2 shadow hover:bg-green-700 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <p className="text-gray-800 text-sm sm:text-base max-w-3xl mx-auto mt-12 sm:mt-16 leading-relaxed px-4 text-center">
          At Dare Behavioral Health & Wellness, we provide comprehensive mental health
          services with a focus on personalized care. Our experienced team is dedicated to
          helping you achieve mental wellness through evidence-based treatments and
          compassionate support.
        </p>
      </div>
    </section>
  );
};

export default Hero;

