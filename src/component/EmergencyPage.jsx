
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const EmergencyPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-4 py-6 text-gray-800 text-center">
      <div className="max-w-[900px] mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-3">Emergency & Crisis Support</h1>
          <p className="text-base leading-relaxed">
            If you or someone you know is in immediate danger, call local emergency<br />
            services (e.g., 911 in the U.S). For 24/7 crisis support:
          </p>
        </div>

        {/* U.S. Suicide Lifeline */}
        <div className=" rounded-md p-4 flex flex-col items-center gap-3 shadow">
          <h2 className="text-black text-sm font-semibold">U.S. Suicide & Crisis Lifeline</h2>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded shadow">
            <FaPhoneAlt className="text-black" />
            <span className="text-xs text-black">Dial 988</span>
          </div>
        </div>

        {/* International Crisis Lines */}
        <div className=" rounded-md p-4 flex flex-col items-center gap-3 shadow">
          <h2 className="text-sm text-black font-semibold">International Crisis Lines</h2>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded shadow">
            <FaGlobe className="text-black" />
            <span className="text-black text-xs">
              Find yours at{' '}
              <a
                href="https://findahelpline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                https://findahelpline.com
              </a>
            </span>
          </div>
        </div>
        <div >
      <p>We look forward to connecting with you and supporting your <br/>journey to wellness.</p>
    </div>
        
      </div>
    </section>
  );
};

export default EmergencyPage;

