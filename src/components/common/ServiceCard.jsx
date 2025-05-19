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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={altText} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {showButton && link && (
          <Button
            as="a"
            href={link}
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
