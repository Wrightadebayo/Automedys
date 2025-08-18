import autoimage4 from "../assets/autoimage4.png";
import mistress from "../assets/mistress.png";
import china from "../assets/china.png";
import American from "../assets/American.png";
import African from "../assets/African.png";
import tower from "../assets/tower.png";

import FeedBack from "./FeedBack";
import Footer from "./Footer";
import GetTouchPage from "./GetTouchPage";

const About = () => {
  return (
    <div className="w-full px-4 py-10 md:py-16 bg-gray-100 overflow-x-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Main Heading */}
        <h1 className="font-urbanist font-medium text-[48px] md:text-[72px] leading-tight md:leading-[86px] text-center mb-6 md:mb-10 text-[#2A2A2E]">
          Trusted Help For <br />
          <span>Mental Wellness.</span>
        </h1>

        {/* Mission + Image Grid */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10">
          {/* Text Column */}
          <div className="flex-1 bg-black text-white rounded-lg p-6 flex flex-col min-h-[500px] md:min-h-[567px]">
            <h2 className="font-['Urbanist'] font-semibold text-[28px] md:text-[32px] leading-[36px] md:leading-[42px] mb-4">
              Our Mission & Values
            </h2>
            <p className="font-urbanist font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#F5F5F5] mb-6">
              At DARE Behavioral Health & Wellness Clinic PLLC, our mission is to
              provide compassionate, evidence-based mental health care that empowers
              each individual to live their fullest life. We believe in.
            </p>

            {/* Labels Grid */}
            <div className="flex flex-col justify-center flex-1 mt-4 px-2 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 w-full justify-items-center mb-10">
                <div className="bg-white text-black shadow-md rounded-[8px] px-4 py-2 md:px-6 md:py-2
                                font-urbanist font-semibold text-[16px] md:text-[18px]
                                leading-[24px] md:leading-[28px] flex items-center justify-center
                                md:rotate-[-5deg] text-center min-w-[150px] sm:min-w-[200px] max-w-[280px] mb-4 sm:mb-14">
                  Respect & Dignity
                </div>

                <div className="bg-white text-[#131313] shadow-md rounded-[8px] px-4 py-2 md:px-6 md:py-2
                                font-urbanist font-semibold text-[16px] md:text-[18px]
                                leading-[24px] md:leading-[28px] flex items-center justify-center
                                md:rotate-[5deg] text-center min-w-[150px] sm:min-w-[200px] max-w-[280px] mb-4 sm:mb-13">
                  Collaboration & Partnership
                </div>

                <div className="bg-white text-[#131313] shadow-md rounded-[8px] px-4 py-2 md:px-6 md:py-2
                                font-urbanist font-semibold text-[16px] md:text-[18px]
                                leading-[24px] md:leading-[28px] flex items-center justify-center
                                md:rotate-[5deg] text-center min-w-[150px] sm:min-w-[200px] max-w-[280px] mb-4">
                  Integrity & Excellence
                </div>

                <div className="bg-white text-[#131313] shadow-md rounded-[8px] px-4 py-2 md:px-6 md:py-2
                                font-urbanist font-semibold text-[16px] md:text-[18px]
                                leading-[24px] md:leading-[28px] flex items-center justify-center
                                md:rotate-[-5deg] text-center min-w-[150px] sm:min-w-[200px] max-w-[280px] mb-4">
                  Inclusivity & Accessibility
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-[0.75] h-[300px] md:h-[567px] rounded-lg shadow-md overflow-hidden">
            <img
              src={autoimage4}
              alt="mission1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

{/* Our Story */}
<div className="relative mt-16 flex flex-col items-center bg-white rounded-lg px-4 py-6 mx-auto w-full max-w-full md:max-w-[960px]">
  <div className="flex flex-col gap-6 w-full items-center">
    <h1 className="font-urbanist font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[48px] text-center text-[#2A2A2E]">
  Our Story
</h1>


    <div className="bg-white w-full flex items-center justify-center px-2 sm:px-4 md:px-6">
<p className="font-urbanist font-medium text-[20px] leading-[30px] text-center text-[#2A2A2E] w-full md:w-[90%]">
  Founded in 2015 by a multidisciplinary team of clinicians, DARE Behavioral Health and Wellness Clinic grew out of
  a shared vision to bridge gaps in mental health care by combining personalized therapy, psychiatric expertise, and innovative wellness
  programming. From our first location in downtown [City] to our expanding satellite offices, we've remained committed to adapting our services to
  meet evolving community needs—all while preserving the warm, supportive environment our clients value.
</p>

    </div>
  </div>
</div>

 {/* Leadership Team */}
        <div className="mt-32 w-full max-w-full md:max-w-[1136px] mx-auto flex flex-col items-center">
          <h2 className="font-urbanist font-medium text-[48px] leading-[58px] text-center text-[#2A2A2E] mb-10">
            Leadership Team
          </h2>

          <div className="bg-[#F5F5F5] py-10 w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-10 w-full mx-auto">
{[mistress, china, American, African].map((img, idx) => {
  const members = [
    {
      img: mistress,
      name: "Dr Amina Yusuf, PhD — Clinical Director",
      desc: "A licensed clinical psychologist with over 15 years of experience in trauma-informed care and resilience training.",
    },
    {
      img: china,
      name: "Dr Michael Okafor, MD — Psychiatrist",
      desc: "Board-certified in Adult and Child Psychiatry, specializing in complex mood and neurodevelopmental disorders.",
    },
    {
      img: American,
      name: "Lisa Mensah — Director of Therapy Services",
      desc: "Licensed clinical social worker leading individual, family, and group therapy programs with a strengths-based approach.",
    },
    {
      img: African,
      name: "Jide Olawale, MBA — Practice Administrator",
      desc: "Oversees operations, partnerships, and community outreach to ensure seamless access to care.",
    },
  ];
  const member = members[idx];
  return (
    <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-[280px] sm:h-[400px] md:h-[568px] object-cover rounded-md mb-4"
      />
      <h3 className="font-urbanist font-semibold text-[24px] leading-[32px] text-black">{member.name}</h3>
      <p className="font-urbanist font-medium text-[20px] leading-[30px] text-[#58595C] mt-2">{member.desc}</p>
    </div>
  );
})}

            </div>
          </div>
        </div>
{/* History Section */}
<div className="w-full px-4 py-16 bg-[#F9FAFA] mt-16 rounded-lg shadow-sm">
  <div className="max-w-[1440px] w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

    {/* Text Column */}
    <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left gap-6">
      <h1 className="font-urbanist font-semibold text-[40px] leading-[48px] text-[#2A2A2E]">
        History & Accreditation
      </h1>
      <p className="font-urbanist font-medium text-[20px] leading-[30px] text-[#2A2A2E] max-w-full md:max-w-[558px]">
        Since opening our doors in 2015, we have earned accreditation from
        the Joint Commission and maintain certification in Telebehavioral
        Health Best Practices. Our clinic also partners with local
        universities to train the next generation of mental health
        professionals through internships and continuing-education workshops. 
      </p>
    </div>

    {/* Image Column */}
    <div className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
      <img
        src={tower}
        alt="tower"
        className="w-full max-w-[515px] h-auto md:h-[467px] object-cover rounded-[8px] shadow-md"
      />
    </div>
  </div>
</div>
<div className="w-full bg-white px-4 py-12 sm:py-16 md:py-20 mt-4 flex justify-center">
  <div className="max-w-[780px] w-full">
    <p className="font-urbanist font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px] text-[#2A2A2E] text-center">
      Whether you're just beginning your mental health journey or seeking
      to deepen your wellness practice, our team is here to guide and
      support you every step of the way.
    </p>
  </div>
</div>





      {/* Feedback Section */}
      <FeedBack />

      <GetTouchPage />

      {/* Footer Section */}
      <Footer />
      </div>
    </div>
  );
};

export default About;
