import PsychiatricTherapy from './PsychiatricTherapy';
import { servicesData } from '../assets/data.jsx'; 
import TherapyService from '../component/TherapyService';
import WellnessPage from '../component/WellnessPage';
import FAQ from './FAQ';
import Footer from './Footer';
import GetTouchPage from './GetTouchPage';

const Service = () => {
  return (
    <div className="bg-[#F9FAFA] w-full py-15">
      {/* Services Section */}
{/* Services Section */}
<div className="w-full flex justify-center px-4 py-10">
  <div className="flex flex-col lg:flex-row items-start justify-center max-w-[1080px] w-full gap-8">
    
    {/* Left Column */}
    <div className="w-full lg:w-[460px] max-w-full space-y-[32px] flex flex-col items-center lg:items-start">
      <h1
        className="text-gray-700 text-center lg:text-left"
        style={{
          fontFamily: 'Urbanist, sans-serif',
          fontWeight: 500,
          fontSize: '50px',
          lineHeight: '58px',
        }}
      >
        Our Services
      </h1>

      <p
        className="text-gray-500 text-center lg:text-left md:max-w-[440px]"
        style={{
          fontFamily: 'Urbanist, sans-serif',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '28px',
        }}
      >
        At Dare Behavioral Health & Wellness Clinic PLLC, we offer a full
        spectrum of mental health and wellness support built around your
        unique journey to healing.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full justify-items-center lg:justify-items-start">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="w-full max-w-[230px] h-[125px] bg-[#F9FAFA] border border-[#E4E4E4] rounded-[8px] p-4 flex flex-col items-center md:items-start gap-2"
          >
            {/* Icon container */}
            <div className="w-[44px] h-[44px] bg-[#CFFAE5] rounded-[6px] flex items-center justify-center mb-2">
              <service.icon />
            </div>

            {/* Title */}
            <h3
              className="text-[#2A2A2E] text-center md:text-left"
              style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '26px',
              }}
            >
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Video */}
    <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
      <video
        className="rounded-[8px] shadow-md object-cover w-full max-w-[550px] h-[280px] sm:h-[360px] lg:h-[480px]"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: 1,
          borderRadius: '8px',
        }}
      >
        <source src="/autovideo1.mp4" type="video/mp4" />
      </video>
    </div>

  </div>
</div>
      {/* Other Sections */}
      <TherapyService />
      <PsychiatricTherapy />
      <WellnessPage />
      <FAQ />
      <GetTouchPage />
      <Footer />
    </div>
  );
};

export default Service;
