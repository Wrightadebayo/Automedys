
import misterss from '../assets/mistress.png';

const MeetUs = () => {
  return (
    <section className="py-10 px-4 font-urbanist">
      <div className="max-w-[1096px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-urbanist font-medium md:text-3xl text-2xl" style={{ color: "#2A2A2E" }}>
  Meet Our Team
</h1>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Dr. Amina Yusuf, PhD,<br />
              Clinical Director
            </h2>
<p className="font-urbanist italic font-medium text-[#707A75] text-xs">
  Clinical Director | Licensed Professional Counselor - Supervisor
</p>

            <h3 className="font-urbanist font-normal text-[#2A2A2E] text-sm leading-relaxed">
  Dr. Amina brings over 15 years of clinical experience working with adolescents and adults.
  She is passionate about trauma recovery and guides the clinic's clinical vision with
  compassion and accountability.
</h3>

          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={misterss}
              alt="Dr. Amina Yusuf"
              className="w-full max-w-sm rounded-md object-cover h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUs;
