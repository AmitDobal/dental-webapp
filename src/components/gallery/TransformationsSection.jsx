import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { slideUp, staggerContainer } from "../../utils/animations";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.12)",
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

const TransformationsSection = ({ transformations }) => {
  const [selectedTransformation, setSelectedTransformation] = useState(null);

  const handleImageClick = (transformation) => {
    setSelectedTransformation(transformation);
  };

  const closeModal = () => {
    setSelectedTransformation(null);
  };

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Unified Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-100 z-0"
        aria-hidden="true"
      />
      {/* Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-primary-50/90 z-10" />

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16">
          <motion.h2
            variants={slideUp}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            Smile <span className="text-primary-600">Transformations</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            See the amazing results we've achieved for our patients
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformations.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="h-full">
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
                  onClick={() => handleImageClick(item)}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                      <span>{item.title}</span>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedTransformation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={closeModal}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}>
              <div className="relative p-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  aria-label="Close modal">
                  <svg
                    className="w-5 h-5 text-gray-700"
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
                </motion.button>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedTransformation.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}>
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Before
                    </h3>
                    <div className="bg-gray-200 rounded overflow-hidden h-60">
                      <img
                        src={
                          selectedTransformation.beforeImage ||
                          selectedTransformation.image
                        }
                        alt={`Before: ${selectedTransformation.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}>
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      After
                    </h3>
                    <div className="bg-gray-200 rounded overflow-hidden h-60">
                      <img
                        src={
                          selectedTransformation.afterImage ||
                          selectedTransformation.image
                        }
                        alt={`After: ${selectedTransformation.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-700 mb-6">
                  {selectedTransformation.fullDescription ||
                    selectedTransformation.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end">
                  <Button
                    to="#contact"
                    onClick={closeModal}
                    className="bg-primary-600 text-white hover:bg-primary-700">
                    Book a Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransformationsSection;
