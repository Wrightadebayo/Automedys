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
    <section className="relative mx-auto bg-white rounded-lg overflow-visible w-[90%] max-w-[1320px] px-4 md:px-12 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="font-urbanist font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[40px] sm:leading-[44px] md:leading-[48px] text-[#2A2A2E] max-w-[1136px] mx-auto break-words">
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
          className="object-cover w-[1136px] h-[558px] rounded-lg relative z-10"
        />

        {/* Green Blur Overlay */}
        <div
          className="absolute top-0 left-0 z-20 rounded-lg pointer-events-none"
          style={{
            width: '1136px',
            height: '558px',
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
            height: '190px',
            background: 'linear-gradient(to top, rgba(32,92,42,0.6), rgba(32,92,42,0))',
            backdropFilter: 'blur(5px)',
          }}
        ></div>

        {/* Text Overlay */}
        <div
          className="absolute z-30 flex flex-col"
          style={{
            width: '833px',
            height: '122px',
            top: '376px',
            left: '40px',
            gap: '12px',
            opacity: 1,
          }}
        >
          <h1
            style={{
              fontFamily: 'Urbanist',
              fontWeight: 700,
              fontStyle: 'bold',
              fontSize: '36px',
              lineHeight: '46px',
              letterSpacing: '0%',
              color: '#FFFFFF',
              wordBreak: 'break-word',
            }}
          >
            {images[current].text}
          </h1>
          <p
            style={{
              fontFamily: 'Urbanist',
              fontWeight: 500,
              fontStyle: 'medium',
              fontSize: '24px',
              lineHeight: '32px',
              letterSpacing: '0%',
              color: '#F2F2F2',
              wordBreak: 'break-word',
              marginTop: '0',
            }}
          >
            {images[current].subtext}
          </p>
        </div>

        {/* Horizontal Lines */}
        <div className="absolute bottom-4 left-0 right-0 flex gap-2 px-4 md:px-8 z-30">
          {images.map((_, index) => (
            <div key={index} className="relative flex-1 h-1 rounded-full bg-[#32783E]">
              {index === current && (
                <div
                  className="h-full bg-[#8FEBBD] rounded-full absolute top-0 left-0"
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

