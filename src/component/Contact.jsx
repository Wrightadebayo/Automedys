import EmergencyPage from "./EmergencyPage";
import Footer from "./Footer";
import Formpage from "./FormPage";
import LocationPage from "./LocationPage";

const Contact = () => {
  return (
    <div className="w-full bg-[#F9FAFA] flex justify-center">
      <div className="max-w-[2560px] w-full px-4 sm:px-6 md:px-8 py-10">
        <section className="py-6">
          <Formpage />
        </section>

        <section className="py-6">
          <LocationPage />
        </section>

        <section className="py-6">
          <EmergencyPage />
       
        </section>
<section className="w-full max-w-[1440px] h-auto md:h-[308px] bg-white flex items-center justify-center mx-auto px-4">
  <p className="text-center text-[#2A2A2E] text-[24px] md:text-[28px] leading-[34px] font-urbanist font-semibold max-w-2xl">
    We look forward to connecting you and supporting <br className="hidden md:block" /> your journey to wellness.
  </p>
</section>




        <section className="py-6">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Contact;
