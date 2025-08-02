import Hero from "./Hero";
import OurServices from "./OurServices";
import Condition from "./Condition";
import MeetUs from "./MeetUs";
import FeedBack from "./FeedBack";
import FAQ from "./FAQ";
import Latest from "./Latest";
import Footer from "./Footer";
import GetTouchPage from "./GetTouchPage";

// import Contact from "./Contact";

const Home = () => {
  return (
    <div className="w-full bg-white">
      {/* Main content container */}
      <div className="max-w-[3840px] w-full mx-auto px-4 sm:px-6 md:px-8">
        <section className="py-6 min-h-screen">
          <Hero />
        </section>

        <section className="py-6">
          <OurServices />
        </section>

        <section className="py-6">
          <Condition />
        </section>

        <section className="py-6">
          <MeetUs />
        </section>

        <section className="py-6">
          <FeedBack />
        </section>

        <section className="py-6">
          <FAQ />
        </section>

        <section className="py-6">
          <Latest />
        </section>

        <section className="py-6">
          <GetTouchPage />
        </section>
      </div>

      {/* Footer outside the max-width container for full width */}
      <section className="py-6">
        <Footer />
      </section>
    </div>
  );
};

export default Home;





