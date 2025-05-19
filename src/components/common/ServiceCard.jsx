import { Link } from "react-router-dom";
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
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col ${className}`}
      {...props}>
      {image && (
        <div className="aspect-w-16 aspect-h-9 relative">
          <img
            src={image}
            alt={altText || title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {showButton && link && (
          <div className="mt-auto pt-4">
            <Button
              as="link"
              to={link}
              variant="outline"
              size="sm"
              className="mt-auto"
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
