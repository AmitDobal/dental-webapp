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
            className="bg-white rounded-2xl shadow-2xl border border-primary-100 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10"
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

              {/* Pricing Section */}
              {service.pricing && (
                <div className="mb-6 bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-700 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    Treatment Pricing
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.pricing.treatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 border border-primary-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {treatment.name}
                          </h4>
                          <span className="text-primary-600 font-bold text-lg">
                            {treatment.price}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-primary-100 rounded-lg">
                    <p className="text-primary-800 text-sm font-medium">
                      💡 All procedures include consultation, follow-up care,
                      and use high-quality materials with sterilization
                      protocols.
                    </p>
                  </div>
                </div>
              )}

              {service.features && service.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-700 mb-3">
                    Services Included:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0"
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
                        <span className="text-gray-700 text-sm">{feature}</span>
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
