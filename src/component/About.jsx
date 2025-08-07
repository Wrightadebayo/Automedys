import autoimage4 from "../assets/autoimage4.png";
import mistress from "../assets/mistress.png";
import china from "../assets/china.png";
import American from "../assets/American.png";
import African from "../assets/African.png";
import tower  from "../assets/tower.png"

import FeedBack from "./FeedBack";
import Footer from "./Footer";
import GetTouchPage from "./GetTouchPage";



const About = () => {
  return (
    <div className="w-full px-4 py-10 md:py-16 bg-gray-100">
      <div className="w-full max-w-[4000px] mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
          Trusted Help For <br className="hidden sm:block" />
          <span className="text-black-600">Mental Wellness.</span>
        </h1>

        {/* Image Grid */}
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 mt-10">
          {/* Text section with black background */}
          <div className="relative w-full md:w-[40%] h-[290px] rounded bg-black text-white p-4 overflow-hidden">
            <h1 className="text-xl font-bold mb-2">Our Mission & Values</h1>
            <p className="leading-snug mb-6 text-xs">
              At DARE Behavioral Health & Wellness Clinic PLLC, our mission is to 
              provide compassionate, evidence-based mental health 
              care that empowers each individual to live their fullest life. We believe in
            </p>

            <div className="absolute bottom-20 left-4 bg-white text-black px-3 py-1 rounded mb-6 shadow-md rotate-[-7deg] text-xs font-semibold">
              Respect & Dignity
            </div>
            <div className="absolute bottom-8 left-6 bg-white text-black px-3 py-1 rounded shadow-md mr-2 mb-5 rotate-[2deg] text-xs font-semibold">
              Collaboration & Partnership
            </div>
            <div className="absolute bottom-20 right-4 bg-white text-black px-3 py-1 rounded shadow-md mb-5 rotate-[7deg] text-xs font-semibold mr-3">
              Integrity & Excellence
            </div>
            <div className="absolute bottom-8 right-6 bg-white text-black px-3 py-1 rounded mt-6 ml-1 shadow-md rotate-[-17deg] text-xs font-semibold">
              Inclusivity & Accessibility
            </div>
          </div>

          {/* Image section */}
          <div className="relative w-full md:w-[40%] h-[290px] rounded-lg shadow-md overflow-hidden">
            <img
              src={autoimage4}
              alt="mission1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16 text-center bg-white px-4 py-6 rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto text-xs">
            Founded in 2015 by a multidisciplinary team of clinicians,{" "}
            <strong>DARE Behavioral Health and Wellness Clinic</strong> grew out of a shared vision to bridge gaps in mental health care by combining personalized therapy, psychiatric expertise, and innovative wellness programming.
            <br />
            From our first location in downtown [City] to our expanding satellite offices, we've remained committed to adapting our services to meet evolving community needs—all while preserving the warm, supportive environment our clients value.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Member 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={mistress}
                alt="Dr Amina Yusuf"
                className="w-full h-70 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Dr Amina Yusuf, PhD — Clinical Director
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-left">
                A licensed clinical psychologist with over 15 years of experience in trauma-informed care and resilience training.
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={china}
                alt="Dr Michael Okafor"
                className="w-full h-70 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Dr Michael Okafor, MD — Psychiatrist
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-left">
                Board-certified in Adult and Child Psychiatry, specializing in complex mood and neurodevelopmental disorders.
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={American}
                alt="Lisa Mensah"
                className="w-full h-70 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Lisa Mensah — Director of Therapy Services
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-left">
                Licensed clinical social worker leading individual, family, and group therapy programs with a strengths-based approach.
              </p>
            </div>

            {/* Member 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={African}
                alt="Jide Olawale"
                className="w-full h-70 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">
                Jide Olawale, MBA — Practice Administrator
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-left">
                Oversees operations, partnerships, and community outreach to ensure seamless access to care.
              </p>
            </div>
          </div>
        </div>

        {/* History Section with Additional Paragraph */}
        <div className="w-full px-4 py-16 bg-white mt-16 rounded-lg shadow-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                History & Accreditation
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Since opening our doors in 2015, we have earned accreditation from the Joint Commission and maintain certification in Telebehavioral Health Best Practices. Our clinic also partners with local universities to train the next generation of mental health professionals through internships and continuing-education workshops.
              </p>

              <p className="text-gray-700 text-sm text-center mt-8">
                Whether you're just beginning your mental health journey or seeking to deepen your wellness practice, our team is here to guide and support you every step of the way.
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src={tower}
                alt="tower"
                className="w-full h-auto max-h-[250px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <FeedBack />

      <div className="m-15 px-4">
        <h2 className="text-gray-1000 text-center max-w-2xl mx-auto text-base leading-relaxed">
          Whether you're just beginning your mental health journey or seeking to <br />
          deepen your wellness practice, our team is here to guide and support<br />
          you every step of the way.
        </h2>
      </div>

      <GetTouchPage />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;









