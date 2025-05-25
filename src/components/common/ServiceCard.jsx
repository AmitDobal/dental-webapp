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
  pricing,
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
      className={`bg-white border border-primary-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 h-full flex flex-col group
        ${isHovered ? "shadow-lg scale-[1.02] border-primary-200" : ""} 
        ${className} 
        ${
          onClick
            ? "hover:shadow-lg cursor-pointer active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50"
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
      {/* Square Image Section */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
        {/* Fallback content for missing images */}
        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center text-primary-400 z-10">
            <div className="text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span className="text-sm font-medium">{title}</span>
            </div>
          </div>
        )}
        {!imgError && (
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
            draggable={false}
          />
        )}

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section - Optimized spacing */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center leading-tight">
          {title}
        </h3>

        {/* Pricing Information - More compact */}
        {pricing && (
          <div className="mb-2 text-center">
            <div className="text-primary-600 font-bold text-sm">
              From {pricing.startingPrice}
            </div>
            {pricing.priceRange && (
              <div className="text-gray-500 text-xs mt-1">
                {pricing.priceRange}
              </div>
            )}
          </div>
        )}

        {/* Button - Smaller and more refined */}
        {showButton && (
          <div className="mt-auto">
            <Button
              as={link ? "a" : "button"}
              href={link}
              onClick={(e) => {
                e.stopPropagation();
                onClick && !link && onClick();
              }}
              variant="outline"
              size="sm"
              className="w-full border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 focus:ring-primary-400 text-xs py-1.5 transition-all duration-200"
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
