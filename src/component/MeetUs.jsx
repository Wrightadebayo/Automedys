
import misterss from '../assets/mistress.png';

const MeetUs = () => {
  return (
    <section className="py-10 px-4 font-urbanist">
      <div className="max-w-[1096px] mx-auto">
        <div className="text-center mb-10">
          <h1
  className="
    font-urbanist font-medium 
    text-center 
    text-2xl md:text-[48px] 
    leading-[32px] md:leading-[58px] 
    tracking-[0] 
    px-4
  "
  style={{ color: "#2A2A2E" }}
>
  Meet Our Team
</h1>


        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-3">
<h2
  className="
    font-urbanist font-medium
    text-[#2A2A2E]
    text-[28px] sm:text-[32px] md:text-[38px]
    leading-[36px] sm:leading-[42px] md:leading-[48px]
    tracking-[0]
    break-words
  "
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
    whitespace-normal md:whitespace-nowrap
    text-center sm:text-left
    max-w-full
  "
>
  Clinical Director | Licensed Professional Counselor - Supervisor
</p>



<h3
  className="
    font-urbanist font-normal
    text-[#2A2A2E]
    text-base sm:text-lg md:text-xl
    leading-6 sm:leading-7 md:leading-8
    tracking-[0]
    text-left
    break-words whitespace-normal
    max-w-full
    pl-1 sm:pl-0
  "
>
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
