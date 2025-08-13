import { useState } from "react";
import { videoData } from "../assets/data";

const Hero = () => {
  // State to track which video is currently playing
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handler triggered when a video ends.
   * Moves to the next video in the array, looping back to the start.
   */
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  // Get the current video object based on the active index
  const currentVideo = videoData[currentIndex];

  /**
   * Prepare paragraph text for overlay:
   * - If `paragraphParts` exists, use it directly
   * - Otherwise, split the paragraph into sentences and take the first 2
   */
  const paragraphParts = currentVideo.paragraphParts
    ? currentVideo.paragraphParts
    : currentVideo.paragraph
        .split(". ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part, idx, arr) =>
          idx < arr.length - 1 ? part + "." : part
        );

  /**
   * Configuration for floating labels on the video.
   * - Positions, colors, and opacity change depending on the active video
   */
  const labelConfig = [
    {
      index: 1,
      position: "top-1/3 left-2 mb-5",
      bg: "#9E9182",
      opacity: currentIndex === 1 ? "opacity-100" : "opacity-50",
    },
    {
      index: 2,
      position: "top-1/3 left-12 mt-16",
      bg: "#FFFFFF66",
      opacity: currentIndex === 2 ? "opacity-100" : "opacity-50",
    },
    {
      index: 0,
      position: "top-1/2 right-4 -translate-y-1/2",
      bg: "#8FEBBD",
      opacity: currentIndex === 0 ? "opacity-100" : "opacity-50",
    },
  ];

  return (
    <section
      id="Home"
      className="
        relative flex flex-col items-center justify-center text-center 
        px-4 pt-8 sm:pt-12 md:pt-16 pb-20 min-h-screen bg-white 
        transition-colors duration-1000
      "
    >
      {/* Container for the content with max width */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Main Heading */}
        <h1
          className="
            font-urbanist font-medium text-[#2A2A2E] text-center
            leading-[38px] sm:leading-[48px] md:leading-[60px] lg:leading-[86px]
            text-3xl sm:text-4xl md:text-5xl lg:text-[72px]
            max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-[985px]
          "
        >
          Welcome to DARE Behavioral <br />
          Health & Wellness Clinic PLLC
        </h1>

        {/* Subheading / Tagline */}
        <p
          className="
            font-urbanist font-medium text-[#58595C] text-center
            mt-6 px-4 sm:px-0
            text-[16px] sm:text-[18px] md:text-[20px]
            leading-[24px] sm:leading-[28px] md:leading-[30px]
            max-w-full sm:max-w-[300px] md:max-w-[500px]
          "
        >
          Compassionate, evidence-based mental health care tailored to your journey.
        </p>

        {/* Video Section */}
        <div className="w-full flex flex-col items-center gap-6 mt-6 mb-12 px-2 sm:px-4 md:px-0 relative">
          <div
            className="
              relative rounded-lg overflow-hidden shadow-md transition-all duration-1000 
              w-full max-w-[1000px] bg-gray-100 h-[240px] md:aspect-video md:h-auto
            "
          >
            {/* Video Player */}
            <video
              key={currentVideo.src}
              className="w-full h-full object-cover transition-opacity duration-1000 relative z-0"
              autoPlay
              muted
              playsInline
              preload="metadata"
              onEnded={handleVideoEnd}
              src={currentVideo.src}
            />

            {/* Paragraph Overlay on Video */}
<div
  className="
    absolute bottom-16 left-1/2 -translate-x-1/2 z-20
    max-w-[90%] sm:max-w-[600px] px-4 font-urbanist text-center text-white
    break-words whitespace-normal
    overflow-hidden
    lg:max-h-[calc(38px*2)] /* clamp to 2 lines on large screens */
  "
  style={{
    whiteSpace: "normal",
    overflowWrap: "break-word",
    wordBreak: "normal", // prevents splitting words
    textShadow: "0px 1px 3px rgba(0,0,0,0.6)", // text readability over video
  }}
>
  <p
    className="
      text-base font-medium font-urbanist text-white
      sm:text-lg
      md:text-[25px] md:leading-[33px]
      lg:text-[22px] lg:leading-[38px]
    "
  >
    {paragraphParts.join(" ")} {/* Join all segments into one <p> for proper line clamping */}
  </p>
</div>



            {/* "Book Appointment" Button */}
            <a
              href="#appointment"
              className="
                absolute bottom-6 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 
                bg-[#205C2A] text-white font-urbanist font-medium 
                text-xs sm:text-base leading-5 rounded-lg px-4 sm:px-6 
                py-2 sm:py-3 shadow hover:bg-green-700 transition 
                w-[150px] flex items-center justify-center whitespace-nowrap
              "
            >
              Book Appointment
            </a>

            {/* Gradient Overlay for readability */}
            <div
              className="
                absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-white/80 to-transparent 
                pointer-events-none z-10 rounded-lg
              "
              style={{ overflow: "hidden" }}
            />

            {/* Floating Labels */}
            <div className="hidden md:block absolute inset-0 pointer-events-none max-w-[1008px] mx-auto px-4 z-10">
              {labelConfig.map((label, i) => (
                <div
                  key={i}
                  className={`absolute ${label.position} flex items-center justify-center text-xs rounded-xl px-3 py-1 text-sm transition-all duration-700 ${label.opacity}`}
                  style={{
                    backgroundColor: label.bg,
                    backdropFilter: "blur(31.5px)",
                    minWidth: "fit-content",
                    maxWidth: "240px",
                  }}
                >
                  <span className="text-black font-inter whitespace-normal break-words text-center">
                    {videoData[label.index].label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Paragraph — Longer description under video */}
        <div className="w-full py-6">
          <p
            className="
              font-urbanist font-normal text-[#2A2A2E]
              text-center mx-auto px-4
              mt-10 sm:mt-14
              max-w-full
              sm:max-w-[60ch] md:max-w-[75ch] lg:max-w-[70ch]
              break-words whitespace-normal
              text-lg sm:text-xl md:text-2xl lg:text-[30px]
              leading-relaxed sm:leading-8 md:leading-[40px]
            "
          >
            At DARE Behavioral Health &amp; Wellness Clinic, we provide comprehensive
            mental health services with a focus on personalized care. Our experienced
            team is dedicated to helping you achieve mental wellness through
            evidence-based treatments and compassionate support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
