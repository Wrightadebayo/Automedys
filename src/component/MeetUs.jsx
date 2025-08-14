
import misterss from '../assets/mistress.png';

const MeetUs = () => {
  return (
    <section className="py-10 px-4 font-urbanist">
      <div className="max-w-[1010px] mx-auto">
        <div className="text-center mb-10">
          <h1
            className="
              font-urbanist font-medium
              text-center
              text-2xl md:text-[48px]
              leading-[32px] md:leading-[58px]
              tracking-[0]
              px-6 pb-6
            "
            style={{ color: "#2A2A2E" }}
          >
            Meet Our Team
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-10 md:items-stretch items-center justify-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-3 flex flex-col justify-center">
           <h2
  className="
    font-urbanist
    text-[#2A2A2E]
    tracking-[0]
    break-words
  "
  style={{
    fontWeight: 500,
    fontSize: "38px",
    lineHeight: "48px",
  }}
>
  Dr. Amina Yusuf, PhD,<br className="hidden md:block" />
  Clinical Director
</h2>

            <p
              className="
                font-urbanist font-medium italic
                text-[#707A75]
                text-[14px] sm:text-[15px] md:text-[16px]
                leading-[20px] sm:leading-[22px] md:leading-[24px]
                tracking-[0]
                whitespace-normal
                text-center sm:text-left
                max-w-full
              "
            >
              Clinical Director | Licensed Professional Counselor - Supervisor
            </p>
            <h3
              className="
                font-urbanist
                text-[#2A2A2E]
                break-words whitespace-normal
                pl-1 sm:pl-0 
              "
              style={{
                maxWidth: "466px",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 400,
              }}
            >
              Dr. Amina brings over 15 years of clinical experience working with
              adolescents and adults. She is passionate about trauma recovery
              and guides the clinic's clinical vision with compassion and
              accountability.
            </h3>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
  <img
    src={misterss}
    alt="Dr. Amina Yusuf"
    className="w-full max-w-sm rounded-lg object-cover h-72 md:h-auto md:min-h-full"
    style={{ height: "100%" }}
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default MeetUs;
