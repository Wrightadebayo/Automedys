import EmergencyPage from "./EmergencyPage";
import Footer from "./Footer";
import Formpage from "./FormPage";
import LocationPage from "./LocationPage";
// import Text from './Text'


const Contact = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[4000px] w-full mx-auto px-4 sm:px-6 md:px-8 py-10">
        <section className="py-6">
          <Formpage />
        </section>

        <section className="py-6">
          <LocationPage />
        </section>

        <section className="py-6">
          <EmergencyPage />
        </section>

        {/* <section className="py-6">
          <Text />
        </section> */}

        <section className="py-6">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Contact;


