import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";

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
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-base leading-relaxed text-gray-600 line-clamp-3">
        "{content}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
