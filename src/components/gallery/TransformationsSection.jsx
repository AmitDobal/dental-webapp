import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { slideUp, staggerContainer } from "../../utils/animations";
import Modal from "../common/Modal";
import TransformationDetails from "./TransformationDetails";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-8 py-3 rounded-lg shadow-lg"
              onClick={() => navigate("/gallery")}>
              View Full Gallery
            </Button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        <Modal isOpen={!!selectedTransformation} onClose={closeModal}>
          <TransformationDetails
            transformation={selectedTransformation}
            onClose={closeModal}
          />
        </Modal>
      </AnimatePresence>
    </div>
  );
};

export default TransformationsSection;
