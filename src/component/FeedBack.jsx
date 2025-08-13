
import profileicon from  '../assets/profile-icon.jpg'
import {feedbacks} from '../assets/data'

 const FeedBack = () => {
  return (
    <section className="py-10 px-4 bg-gray-50 font-urbanist">
      <div className="max-w-[1400px] mx-auto">
<h1
  className="
    font-urbanist font-medium
    text-[#2A2A2E]
    text-[32px] sm:text-[40px] md:text-[48px]
    leading-[42px] sm:leading-[50px] md:leading-[58px]
    tracking-[0]
    text-center
    max-w-full
    break-words
    px-2
    mb-8
  "
>
  What Our Patients Say
</h1>
       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1004px] mx-auto">
  {feedbacks.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-md p-4 rounded-lg border border-gray-100 flex flex-col justify-between"
    >
      <div className="space-y-4">
<h2
  className="
    font-urbanist font-semibold
    text-[#2A2A2E]
    text-[18px] sm:text-[20px]
    leading-[26px] sm:leading-[28px]
    tracking-[0]
    max-w-full
    break-words
  "
>
  {item.quote}
</h2>

        <p
  className="
    font-urbanist font-medium
    text-[#707A75]
    text-[14px] sm:text-[16px]
    leading-[20px] sm:leading-[24px]
    tracking-[0]
    max-w-full
    break-words
  "
>
  {item.comment}
</p>

      </div>

      <div className="flex items-center gap-3 mt-4">
  <img
    src={profileicon}
    alt={item.name}
    className="h-12 w-12 rounded-full object-cover" // 48px height & width
  />
  <h4
  className="
    font-urbanist font-medium
    text-[#2A2A2E]
    text-[16px]
    leading-[24px]
    tracking-[0]
    truncate
    max-w-full
  "
  title={item.name} // Shows full name on hover
>
  {item.name}
</h4>

</div>

    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FeedBack;
