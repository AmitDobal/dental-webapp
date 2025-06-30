import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";

const TestimonialModal = ({ testimonial, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { name, role, content, rating, image } = testimonial;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-xl shadow-xl z-50 p-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal">
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center text-gray-600 relative">
                <span className="text-lg font-medium">
                  {name?.charAt(0) || "U"}
                </span>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover absolute"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            </div>

            <div className="flex mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-6 h-6 ${
                    index < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 text-lg italic leading-relaxed">
              "{content}"
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TestimonialModal;
