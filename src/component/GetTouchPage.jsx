import React from 'react'

const GetTouchPage = () => {
  return (
    <div>
       <div className=" py-14 px-6 md:px-12 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h1>

       <p className="text-gray-500 mb-6 max-w-xl text-sm">
         Ready to start your journey to better mental health? Contact us today to <br />
        schedule an appointment.
       </p>

       <div className="flex justify-center items-center gap-4 flex-wrap text-gray-700 mb-6">
         <p>
          <span className="font-medium text-gray-400">Phone:</span> (555) 123-4569
         </p>
        <span className="text-gray-400 hidden sm:inline">|</span>
      <p>
           <span className="font-medium text-gray-400">Email:</span> info@dareclinic.com
        </p>
       </div>

     {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="bg-green-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
           Contact Us
         </button>
        <button className="border border-black text-gray-600 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
          View Locations
        </button>
      
       </div>
     </div>
    </div>
  )
}

export default GetTouchPage
