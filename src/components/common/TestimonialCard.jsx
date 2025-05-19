const TestimonialCard = ({
  quote,
  name,
  title,
  image,
  rating = 5,
  className = "",
  ...props
}) => {
  // Generate star rating
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md ${className}`}
      {...props}>
      <div className="mb-4 flex">{renderStars(rating)}</div>
      <blockquote className="text-gray-700 mb-6 italic">"{quote}"</blockquote>
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          {title && <div className="text-gray-500 text-sm">{title}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
