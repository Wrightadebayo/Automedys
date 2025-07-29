
const ConditionCard = ({ image, title, description }) => {
  return (
    <div className="p-9 rounded shadow text-left">
      <img src={image} alt={title} className="w-20 h-15 object-cover mb-7" />
      <h3 className="text-medium  text-gray-1100 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 ">{description}</p>
    </div>
  );
};

export default ConditionCard;

