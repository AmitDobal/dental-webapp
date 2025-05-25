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
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick && onClick();
    }
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`bg-white border border-primary-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 
        ${isHovered ? "shadow-xl scale-105 border-primary-300" : ""} 
        ${className} 
        ${
          onClick
            ? "hover:shadow-xl cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            : ""
        }
      `}
      tabIndex={onClick ? 0 : undefined}
      onClick={handleCardClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `View details for ${title}` : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative h-48 bg-gray-100 flex items-center justify-center">
        {/* Fallback content for missing images */}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-10 bg-gray-100">
            <span className="text-lg font-medium">{title}</span>
          </div>
        )}
        {!imgError && (
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover transition-opacity duration-300 z-0"
            onError={() => setImgError(true)}
            draggable={false}
          />
        )}
        {/* Overlay on hover */}
        {/* {onClick && (
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-opacity duration-300
              ${
                isHovered
                  ? "bg-primary-600 bg-opacity-30"
                  : "bg-transparent bg-opacity-0"
              }
            `}>
            {isHovered && (
              <span className="pointer-events-auto text-white font-medium px-4 py-2 rounded-md bg-primary-600 bg-opacity-90 shadow-lg">
                View Details
              </span>
            )}
          </div>
        )} */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {showButton && (
          <Button
            as={link ? "a" : "button"}
            href={link}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click handler from firing
              onClick && !link && onClick();
            }}
            variant="outline"
            size="sm"
            className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
            aria-label={`Learn more about ${title}`}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
