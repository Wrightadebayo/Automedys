
import img from '../assets/bosslady.jpg';

const MeetUs = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold md:text-3xl text-2xl text-gray-900">
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
            <p className="text-gray-400 text-xs">
              Clinical Director | Licensed Professional Counselor - Supervisor
            </p>
            <h3 className="text-gray-600 text-sm leading-relaxed">
              Dr. Amina brings over 15 years of clinical experience working with adolescents and adults.
              She is passionate about trauma recovery and guides the clinic's clinical vision with
              compassion and accountability.
            </h3>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={img}
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
