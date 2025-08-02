import { FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";



const Formpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4">
      {/* Responsive Container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Whether you're ready to schedule an appointment <br /> or have a question,
                we're here to help.<br /> Please choose the method that works best for you.
              </p>

              <div className="flex flex-col gap-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="bg-gray-100 p-2 rounded-full shadow">
                    <FaPhoneAlt className="text-black" />
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">Clinic Phone:</span><br />
                    (123) 456-7890
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="bg-gray-100 p-2 rounded-full shadow">
                    <FaEnvelope className="text-black" />
                  </span>
                  <div>
                    <span className="font-medium text-gray-900">General Email:</span><br />
                    contact@dareclinic.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-3 rounded w-full mb-4"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-3 rounded w-full mb-4"
            />

            <h3 className="mb-2 text-sm font-medium">Preferred Contact Method</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="contact-method" className="accent-blue-600" />
                Email
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="contact-method" className="accent-blue-600" />
                Phone Call
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="contact-method" className="accent-blue-600" />
                Telehealth
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Reason for enquiry"
                disabled
                className="border border-gray-300 p-3 rounded w-full bg-white cursor-default text-gray-500"
              />
              <FaChevronDown className="absolute top-3.5 right-4 text-gray-400" />
            </div>

            <textarea
              placeholder="Please type your message here"
              className="border border-gray-300 p-3 rounded w-full h-32 mb-6"
            ></textarea>

            <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formpage;

