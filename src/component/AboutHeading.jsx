import React from 'react'

import mission from "../assets/mission.jpg";
import mission1 from "../assets/mission1.jpg";
import bosslady from "../assets/bosslady.jpg";
import blackman from "../assets/blackman.jpg";
import old from "../assets/old.jpg";
import korea from "../assets/korea.jpg";
import FeedBack from "./FeedBack";
import Footer from "./Footer";
import GetTouchPage from "./GetTouchPage";



const AboutHeading = () => {
  return (
    <div className="w-full px-4 py-10 md:py-16 bg-gray-100">
      <div className="max-w-[1000px] mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">
          Trusted Help For <br className="hidden sm:block" />
          <span className="text-black-600">Mental Wellness.</span>
        </h1>

        {/* Image Grid */}
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6 mt-10">
          <div className="relative w-full md:w-[48%] h-[300px] rounded-lg shadow-md overflow-hidden">
            <img
              src={mission}
              alt="mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-semibold text-gray-800">
              Our Mission
            </div>
          </div>

          <div className="relative w-full md:w-[48%] h-[300px] rounded-lg shadow-md overflow-hidden">
            <img
              src={mission1}
              alt="mission1"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-semibold text-gray-800">
              Our Vision
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16 text-center bg-white px-4 py-6 rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
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
                src={bosslady}
                alt="Dr Amina Yusuf"
                className="w-full h-58 object-cover rounded-md mb-4"
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
                src={blackman}
                alt="Dr Michael Okafor"
                className="w-full h-58 object-cover rounded-md mb-4"
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
                src={old}
                alt="Lisa Mensah"
                className="w-full h-58 object-cover rounded-md mb-4"
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
                src={korea}
                alt="Jide Olawale"
                className="w-full h-58 object-cover rounded-md mb-4"
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

              {/* Centered Additional Paragraph */}
              <p className="text-gray-700 text-sm text-center mt-8">
                Whether you're just beginning your mental health journey or seeking to deepen your wellness practice, our team is here to guide and support you every step of the way.
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src={bosslady}
                alt="Boss Lady"
                className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      )
      }

      export default AboutHeading