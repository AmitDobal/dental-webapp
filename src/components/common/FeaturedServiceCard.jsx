import { useState } from "react";

const FeaturedServiceCard = ({ title, description, icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick && onClick();
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg overflow-hidden transition-all duration-300 
        ${isHovered ? "shadow-xl transform scale-105" : "shadow-md"} 
        cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50
      `}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`Learn more about ${title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`text-teal-600 mb-4 transition-transform duration-300 ${
          isHovered ? "transform scale-110" : ""
        }`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      {isHovered && (
        <span className="text-teal-600 text-sm font-medium inline-flex items-center">
          View Details
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default FeaturedServiceCard;
