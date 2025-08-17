import { useEffect, useState } from 'react';
import daily1 from '../assets/daily1.png';
import daily2 from '../assets/daily2.png';
import daily3 from '../assets/daily3.png';

const defaultImages = [
  {
    src: daily3,
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
    src: daily1,
    text: 'Corporate & School Partnership',
    subtext:
      'Customized programs and seminars on-site or virtually to promote mental health & well-being in workplace and educational settings.',
  },
];

const WellnessPage = ({ images = defaultImages }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative mx-auto bg-white rounded-lg overflow-visible w-[95%] max-w-[1320px] px-4 md:px-12 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="font-urbanist font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-tight text-[#2A2A2E] max-w-[95%] md:max-w-[1136px] mx-auto break-words">
          Wellness Programs
        </h2>
      </div>

      {/* Image Container */}
      <div className="relative w-full rounded-md overflow-hidden shadow-lg flex justify-center">
        {/* Background Image */}
        <img
          key={current}
          src={images[current].src}
          alt="Wellness"
          className="object-cover w-full md:w-[1136px] h-[320px] sm:h-[420px] md:h-[558px] rounded-lg relative z-10"
        />

        {/* Green Blur Overlay */}
        <div
          className="absolute top-0 left-0 z-20 rounded-lg pointer-events-none"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#205C2A',
            backdropFilter: 'blur(114px)',
            opacity: 0.5,
            background: 'linear-gradient(to top, rgba(32,99,22,1), rgba(32,92,42,0.3))',
          }}
        ></div>

        {/* Soft Green Background under Text */}
        <div
          className="absolute bottom-0 left-0 z-15 pointer-events-none"
          style={{
            width: '100%',
            height: '180px',
            background: 'linear-gradient(to top, rgba(32,92,42,0.6), rgba(32,92,42,0))',
            backdropFilter: 'blur(5px)',
          }}
        ></div>

        {/* Text Overlay */}
        <div
          className="absolute z-30 flex flex-col px-4 sm:px-6 md:px-10"
          style={{
            bottom: '60px',
            left: '0',
            width: '100%',
            gap: '12px',
          }}
        >
          <h1 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[36px] leading-snug sm:leading-[38px] md:leading-[46px] text-white max-w-full sm:max-w-[90%] md:max-w-[833px] break-words">
            {images[current].text}
          </h1>
          <p className="font-urbanist font-medium text-[14px] sm:text-[18px] md:text-[24px] leading-[20px] sm:leading-[26px] md:leading-[32px] text-[#F2F2F2] max-w-full sm:max-w-[90%] md:max-w-[833px] break-words mt-0">
            {images[current].subtext}
          </p>
        </div>

        {/* Horizontal Lines */}
        <div className="absolute bottom-4 left-0 right-0 flex gap-2 px-4 sm:px-6 md:px-8 z-30">
          {images.map((_, index) => (
            <div key={index} className="relative flex-1 h-1 rounded-full bg-[#32783E]">
              {index === current && (
                <div
                  className="h-full bg-[#8FEBBD] rounded-full absolute top-0 left-0 transition-all duration-500"
                  style={{ width: '50%' }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPage;
