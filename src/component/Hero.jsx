import { useState } from "react";
import { videoData } from "../assets/data";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  const currentVideo = videoData[currentIndex];

  const paragraphParts = currentVideo.paragraphParts
    ? currentVideo.paragraphParts
    : currentVideo.paragraph
        .split(". ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part, idx, arr) =>
          idx < arr.length - 1 ? part + "." : part
        );

  const activeOpacity = "opacity-100";
  const inactiveOpacity = "opacity-50";

  const rightLabelOpacity = currentIndex === 0 ? activeOpacity : inactiveOpacity;
  const leftTopLabelOpacity = currentIndex === 1 ? activeOpacity : inactiveOpacity;
  const leftBottomLabelOpacity = currentIndex === 2 ? activeOpacity : inactiveOpacity;

  return (
    <section
      id="Home"
      className="relative flex flex-col items-center justify-center text-center px-4 pt-8 sm:pt-12 md:pt-16 pb-20 min-h-screen bg-white transition-colors duration-1000"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h1
          className="font-urbanist font-semibold leading-tight text-[#2A2A2E] text-center 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full sm:max-w-[700px] 
                     md:max-w-[900px] lg:max-w-[985px]"
        >
          Welcome to DARE Behavioral <br />
          Health & Wellness Clinic PLLC
        </h1>

        {/* Subheading */}
        <p
          className="font-urbanist font-medium text-[#58595C] mt-6 text-center px-4 sm:px-0 
                     max-w-full sm:max-w-[300px] md:max-w-[500px] text-base sm:text-lg md:text-xl 
                     leading-relaxed"
        >
          Compassionate, evidence-based mental health care tailored to your journey.
        </p>

        {/* Video Section */}
        <div className="w-full flex flex-col items-center gap-6 mt-6 mb-12 px-2 sm:px-4 md:px-0 relative">
          <div
            className="relative rounded-lg overflow-hidden shadow-md transition-all duration-1000 
                       w-full max-w-[1000px] bg-gray-100 h-[240px] md:aspect-video md:h-auto"
          >
            {/* Video element */}
            <video
              key={currentVideo.src}
              className="w-full h-full object-cover transition-opacity duration-1000 relative z-0"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              src={currentVideo.src}
            />

            {/* White gradient overlay */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1 sm:h-32 md:h-40 lg:h-50 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" /> */}


            {/* Paragraph container */}
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-white 
                         max-w-[90%] sm:max-w-[600px] px-4 font-display font-medium text-center"
              style={{
                whiteSpace: "normal",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              <div className="flex flex-col gap-2">
                {paragraphParts.map((part, idx) => (
                  <p
                    key={idx}
                    className="block w-full text-sm sm:text-base leading-relaxed break-words whitespace-normal"
                  >
                    {part}
                  </p>
                ))}
              </div>
            </div>

            {/* Book Appointment button */}
            <a
              href="#appointment"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#205C2A] 
                         text-white font-urbanist font-medium text-xs sm:text-base leading-5 
                         rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow hover:bg-green-700 transition 
                         w-[150px] flex items-center justify-center whitespace-nowrap"
            >
              Book Appointment
            </a>
  <div className="absolute bottom-0 left-0 w-full h-1 sm:h-32 md:h-40 lg:h-50 bg-gradient-to-t from-white to-transparent pointer-events-none z-18" />
            {/* Video labels (medium+ screens) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none max-w-[1008px] mx-auto px-4 z-10">
              {/* Left labels */}
              <div className="absolute top-1/3 left-4 flex flex-col gap-3">
                <div
                  className={`flex items-center justify-center text-xs rounded-xl mb-5 px-3 py-1 text-sm transition-all duration-700 ${leftTopLabelOpacity}`}
                  style={{
                    backgroundColor: "#9E9182",
                    backdropFilter: "blur(31.477787017822266px)",
                    minWidth: "fit-content",
                    maxWidth: "240px",
                  }}
                >
                  <span className="text-black font-inter whitespace-normal break-words text-center">
                    {videoData[1].label}
                  </span>
                </div>

                <div
                  className={`ml-10 flex items-center justify-center text-xs rounded-xl px-3 py-1 text-sm transition-all duration-700 ${leftBottomLabelOpacity}`}
                  style={{
                    backgroundColor: "#FFFFFF66",
                    backdropFilter: "blur(31.477787017822266px)",
                    minWidth: "fit-content",
                    maxWidth: "240px",
                  }}
                >
                  <span className="text-black font-inter whitespace-normal break-words text-center">
                    {videoData[2].label}
                  </span>
                </div>
              </div>

              {/* Right label */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <div
                  className={`flex items-center justify-center text-xs rounded-xl px-3 py-1 text-sm transition-all duration-700 ${rightLabelOpacity}`}
                  style={{
                    backgroundColor: "#8FEBBD",
                    backdropFilter: "blur(31.477787017822266px)",
                    minWidth: "fit-content",
                    maxWidth: "240px",
                  }}
                >
                  <span className="text-black font-inter whitespace-normal break-words text-center">
                    {videoData[0].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom paragraph */}
        <p
          className="font-urbanist font-normal text-[#2A2A2E] mt-10 sm:mt-14 leading-relaxed text-center mx-auto px-4
                    max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[600px] break-words whitespace-normal"
        >
          At DARE Behavioral Health & Wellness Clinic, we provide comprehensive mental health services with a focus on personalized care. Our experienced team is dedicated to helping you achieve mental wellness through evidence-based treatments and compassionate support.
        </p>

      </div>
    </section>
  );
};

export default Hero;
