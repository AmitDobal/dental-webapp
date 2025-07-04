import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { useEffect } from "react";

const TestimonialModal = ({ testimonial, isOpen, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset"; // Restore scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen || !testimonial) return null;

  const { name, role, content, rating, image } = testimonial;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden border border-white/30"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-3 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Patient Testimonial</h2>
                    <p className="text-primary-100 text-sm">
                      Real experience from our patient
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="text-white hover:text-primary-200 transition-colors p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Close modal">
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center text-gray-600 relative">
                  <span className="text-lg font-medium">
                    {name?.charAt(0) || "U"}
                  </span>
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover absolute"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {name}
                  </h3>
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialModal;
