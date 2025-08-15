import { useEffect, useState } from 'react';
import daily1 from '../assets/daily1.png';
import daily2 from '../assets/daily2.png';
import daily3 from '../assets/daily3.png';

const defaultImages = [
  {
    src: daily1,
    text: 'Mindful & Stress Management',
    subtext:
      'Workshops and guided practices that cultivate present-moment awareness, resilience, and effective stress-reduction techniques.',
  },
  {
    src: daily2,
    text: 'Workshop and Support Groups',
    subtext:
      'Educational and peer-led sessions covering topics like anxiety management, depression coping strategies, and life-skills development.',
  },
  {
    src: daily3,
    text: 'Corporate & School Partnership',
    subtext:
      'Customized programs and seminars on-site or virtually to promote mental health & well-being in workplace and educational settings.',
  },
];

const WellnessPage = ({ images = defaultImages }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative mx-auto bg-white rounded-lg overflow-visible w-[90%] max-w-[1320px] px-4 md:px-12 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="font-urbanist font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[40px] sm:leading-[44px] md:leading-[48px] text-[#2A2A2E] max-w-[1136px] mx-auto break-words">
          Wellness Programs
        </h2>
      </div>

      {/* Auto-Switching Image Box */}
      <div className="relative w-full rounded-md overflow-hidden shadow-lg flex justify-center">
        {/* Background Image */}
        <img
          key={current}
          src={images[current].src}
          alt="Wellness"
          style={{
            width: '1136px',
            height: '558px',
            opacity: 1,
            borderRadius: '8px',
          }}
          className="object-cover"
        />

        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-500/60 to-transparent opacity-90 z-10 rounded-lg" />

        {/* Text Overlay */}
        <div className="absolute bottom-6 left-4 md:left-8 z-20 text-white max-w-[90%] md:max-w-sm">
          <h1 className="text-base md:text-xl font-semibold bg-white/20 px-3 py-2 rounded break-words">
            {images[current].text}
          </h1>
          <p className="mt-2 text-xs md:text-sm bg-white/20 px-3 py-1 rounded break-words">
            {images[current].subtext}
          </p>

          {/* Carousel Indicators */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`block h-1 flex-1 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white w-8' : 'bg-white/50 w-4'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessPage;
