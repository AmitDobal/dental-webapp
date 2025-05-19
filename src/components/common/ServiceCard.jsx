import { useState } from "react";
import Button from "./Button";

const ServiceCard = ({
  title,
  description,
  image,
  altText,
  link,
  showButton = true,
  buttonText = "Learn More",
  className = "",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick && onClick();
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 
        ${isHovered ? "shadow-lg transform scale-105" : ""} 
        ${className} 
        ${
          onClick
            ? "hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            : ""
        }
      `}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `View details for ${title}` : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative h-48 bg-gray-200">
        {/* Fallback content for missing images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
          <span>{title}</span>
        </div>
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-cover relative z-10"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Overlay on hover */}
        {onClick && (
          <div
            className={`absolute inset-0 bg-black z-20 transition-opacity duration-300 flex items-center justify-center
              ${isHovered ? "bg-opacity-30" : "bg-opacity-0"}
            `}>
            {isHovered && (
              <span className="text-white font-medium px-4 py-2 rounded-md bg-teal-600 bg-opacity-90">
                View Details
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {showButton && (
          <Button
            as={link ? "a" : "button"}
            href={link}
            onClick={onClick && !link ? onClick : undefined}
            variant="outline"
            size="sm"
            className="w-full"
            aria-label={`Learn more about ${title}`}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
