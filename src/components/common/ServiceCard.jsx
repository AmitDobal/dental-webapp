import { useState } from "react";
import Button from "./Button";

const ServiceCard = ({
  title,
  description: _description,
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
      className={`bg-white border border-primary-100 rounded-2xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col
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
      <div className="relative aspect-square w-full bg-white h-62 flex items-center justify-center p-3">
        {/* Fallback content for missing images */}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-10 bg-gray-100">
            <span className="text-base font-medium">{title}</span>
          </div>
        )}
        {!imgError && (
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover rounded-xl transition-opacity duration-300 z-0"
            onError={() => setImgError(true)}
            draggable={false}
          />
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg text-center font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        {/* <p className="text-gray-600 mb-3 text-sm">{description}</p> */}
        {showButton && (
          <div className="mt-auto">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
