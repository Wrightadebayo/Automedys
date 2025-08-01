

import PsychiatricTherapy from './PsychiatricTherapy';
import {  servicesData } from '../assets/data'; 
import TherapyService from '../component/TherapyService';
import ServiceItem from './ServiceItem';
import WellnessPage from '../component/WellnessPage'

import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import GetTouchPage from './GetTouchPage';



const Service = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div>
            <h1 className="font-semibold text-gray-700 text-3xl">Our Services</h1>
            <p className="text-gray-500 mt-2 text-sm">
              At Dare Behavioral Health & Wellness Clinic PLLC, we offer a full
              spectrum of mental health and wellness support built around your
              unique journey to healing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesData.map((service) => (
              <ServiceItem
                key={service.id}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </div>


        {/* Right Column - Video */}
        <div className="w-full lg:w-1/2">
          <video
  className="w-full h-[250px] md:h-[300px] rounded-md shadow-md opacity-90 object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/autovideo1.mp4" type="video/mp4" />
  </video>
</div>
       </div>
 <TherapyService />
 <PsychiatricTherapy/>
 <WellnessPage />
 <FAQ/>
 
 <GetTouchPage />
 <Footer/>
 
      </div>
    );
};



export default Service;





