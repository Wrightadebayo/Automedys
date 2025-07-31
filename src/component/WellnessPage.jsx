import { useEffect, useState } from 'react';
import happy from '../assets/happy.jpg';
import happy1 from '../assets/happy3.jpg';
import happy3 from '../assets/happy1.jpg';

const images = [
  {
    src: happy,
    text: 'Mindful & Stress Management',
    subtext:
      'Workshops and guided practices that cultivate present-moment awareness, resilience, and effective stress-reduction techniques.',
  },
  {
    src: happy1,
    text: 'Workshop and Support Groups',
    subtext:
      'Educational and peer-led sessions covering topics like anxiety management, depression coping strategies, and life-skills development.',
  },
  {
    src: happy3,
    text: 'Corporate & School Partnership',
    subtext:
      'Customized programs and seminars on-site or virtually to promote mental health & well-being in workplace and educational settings.',
  },
];

const WellnessPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // updated to 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font semi-bold text-gray-800">Wellness Programs</h2>
        
      </div>

      {/* Auto-Switching Image Box */}
      <div className="relative w-full max-w-4xl mx-auto h-[200px] md:h-[300px] rounded-md overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          key={current}
          src={images[current].src}
          alt="Wellness"
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-500/60 to-transparent opacity-90" />

        {/* Text Overlay */}
        <div className="absolute bottom-6 left-4 md:left-8 text-white max-w-sm">
          <h1 className="text-base md:text-xl font-semibold bg-white/10 px-3 py-2 rounded">
            {images[current].text}
          </h1>
          <p className="mt-2 text-xs md:text-sm bg-white/10 px-3 py-1 rounded">
            {images[current].subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WellnessPage;




