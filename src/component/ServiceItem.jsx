
const ServiceItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-start gap-1 bg-white p-2 rounded-md shadow-sm w-full ">
      <div className="bg-green-200 p-1 rounded">
        <img
          src={icon}
          alt={title}
          className="w-5 h-5 object-contain filter invert"
        />
      </div>
      <p className="text-gray-500 text-[10px] pt-2">{title}</p>
    </div>
  );
};



export default ServiceItem;




