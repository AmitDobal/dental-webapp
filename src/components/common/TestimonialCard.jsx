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
          <div className="flex items-center mt-2">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-1 mr-2 shadow-lg">
              <Star className="w-3 h-3 text-white" />
            </div>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="text-amber-400">
                <Star
                  className={`w-4 h-4 ${
                    i < rating ? "fill-current" : "text-gray-300"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-base leading-relaxed text-gray-600 line-clamp-3">
        "{content}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
