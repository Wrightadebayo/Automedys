
import profileicon from  '../assets/profile-icon.jpg'

const FeedBack = () => {
  const feedbacks = [
    {
      name: "Ashley M",
      quote: "I've never felt more seen and supported.",
      comment: "After struggling for years to find the right therapist, I finally found a place that truly listens. Dare changed my life.",
    },
    {
      name: "Devron T",
      quote: "The staff is warm, professional, and genuinely caring.",
      comment: "From the first phone call to my therapy sessions, I've felt nothing but compassion. They make mental health accessible and welcoming.",
    },
    {
      name: "Rachel B.",
      quote: "Telehealth made it easy for me to get help during tough times.",
      comment: "I was hesitant at first, but virtual care is seamless. My provider helped me manage my anxiety with patience and expertise.",
    },
    {
      name: "Kevin L",
      quote: "The wellness workshops helped me reconnect with myself.",
      comment: "I attended a mindfulness group and left feeling lighter, calmer, and more hopeful. Highly recommend their holistic approach.",
    },
    {
      name: "Jamila R",
      quote: "They really care about the whole person.",
      comment: "I worked with both a therapist and nutrition coach at Dare. The integrated care helped me regain balance emotionally and physically.",
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-50" >
      <h1 className="text-3xl py-3 font-bold text-gray-1000 text-center mb-8">
        What Our Patients Say
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[1000px] mx-auto">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-100 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h2 className="font-bold text-gray-800">{item.quote}</h2>
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
