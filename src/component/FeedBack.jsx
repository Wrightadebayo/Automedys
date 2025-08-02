
import profileicon from  '../assets/profile-icon.jpg'
import {feedbacks} from '../assets/data'

 const FeedBack = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h1 className="text-3xl py-3 font-bold text-gray-900 text-center mb-8">
        What Our Patients Say
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-100 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h2 className="text-gray-600">{item.quote}</h2>
              <p className="text-gray-400 text-xs">{item.comment}</p>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={profileicon}
                alt={item.name}
                className="h-7 w-7 rounded-full object-cover"
              />
              <h4 className="text-sm font-medium text-gray-700">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default FeedBack;
