import { motion } from "framer-motion";
import { useState } from "react";

const TestimonialCard = ({ testimonial, onClick }) => {
  const { name, role, content, rating, image } = testimonial;
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    onClick && onClick(testimonial);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  // Generate UI Avatar URL
  const getAvatarUrl = (name) => {
    const encodedName = encodeURIComponent(name);
    return `https://ui-avatars.com/api/?name=${encodedName}&background=random&color=fff&size=64`;
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Read testimonial from ${name}`}
      className="bg-white rounded-xl p-8 min-h-[320px] flex flex-col cursor-pointer">
      <div className="flex items-start mb-6">
        <div className="flex-shrink-0">
          {!imgError && image ? (
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <img
              src={getAvatarUrl(name)}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-base leading-relaxed text-gray-600 line-clamp-3">
        "{content}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
