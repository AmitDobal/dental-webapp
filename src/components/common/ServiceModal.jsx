import { useEffect, useRef } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.16, ease: "easeOut" } },
};

const ServiceModal = ({ service, isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      {isOpen && service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background with reduced opacity */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            aria-hidden="true"
          />
          {/* Modal content */}
          <motion.div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl border border-primary-100 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}>
            <div className="relative">
              <div className="h-56 bg-gray-100 rounded-t-2xl overflow-hidden flex items-center justify-center">
                {/* Fallback for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                  <span className="text-xl font-medium">{service.title}</span>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Close modal"
                tabIndex={0}>
                <svg
                  className="w-5 h-5 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6">{service.longDescription}</p>

              {service.features && service.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">
                    Services Included:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="border-primary-200 text-primary-700 hover:bg-primary-50">
                  Close
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  className="bg-primary-600 text-white hover:bg-primary-700"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
