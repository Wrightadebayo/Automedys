
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const EmergencyPage = () => {
  return (
    <section className="bg-[#EFF2F6] min-h-screen px-4 py-6 text-gray-800 text-center overflow-x-hidden">
      <div className="max-w-[794px] w-full mx-auto space-y-6">

        {/* Header */}
        <div>
         <h1 className="font-urbanist font-semibold text-[40px] md:text-[48px] leading-[48px] text-[#2A2A2E] text-center w-full mb-3 break-words">
  Emergency & Crisis Support
</h1>

         <p className="font-urbanist font-medium text-[#58595C] text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] text-center break-words w-full max-w-[794px] mx-auto">
  If you or someone you know is in immediate danger, call local emergency services (e.g., 911 in the U.S). For 24/7 crisis support:
</p>

        </div>

        {/* U.S. Suicide Lifeline */}
        <div className="rounded-md p-4 flex flex-col items-center gap-3  w-full">
         <h2 className="font-urbanist font-semibold text-[#2A2A2E] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] text-center w-full max-w-[242px] mx-auto">
  U.S. Suicide & Crisis Lifeline
</h2>


    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded w-max justify-center">
  <FaPhoneAlt className="text-black w-4 h-4" />
  <span className="font-urbanist font-medium text-[14px] md:text-sm text-[#2A2A2E] leading-[20px]">
    Dial 988
  </span>
</div>



        </div>

        {/* International Crisis Lines */}
        <div className="rounded-md p-4 flex flex-col items-center gap-3  w-full">
<h2 className="font-urbanist font-semibold text-[#2A2A2E] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] text-center w-full max-w-[314px] mx-auto break-words">
  International Crisis Lines
</h2>

<div className="flex justify-center">
  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded shadow w-max">
    <FaGlobe className="text-black w-5 h-5 flex-shrink-0" />
    <span className="font-urbanist font-medium text-[14px] md:text-sm text-[#2A2A2E] leading-[20px] break-words">
      Find yours at{' '}
      <a
        href="https://findahelpline.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 underline break-words"
      >
        https://findahelpline.com
      </a>
    </span>
  </div>
</div>



        </div>


      </div>
    </section>
  );
};

export default EmergencyPage;
