import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { slideUp, staggerContainer } from "../../utils/animations";
import Modal from "../common/Modal";
import TransformationDetails from "./TransformationDetails";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97, rotateY: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
  hover: {
    scale: 1.04,
    rotateY: 5,
    boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.12)",
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
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
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Unified Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"
      />
      {/* Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10" />

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16">
          <motion.h2
            variants={headerVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
            Smile <span className="text-primary-100">Transformations</span>
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-primary-200 text-center max-w-3xl mx-auto mb-12">
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
                viewport={{ once: true, amount: 0.2 }}
                className="h-full">
                <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden cursor-pointer h-full border border-white/30"
                  onClick={() => handleImageClick(item)}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <motion.div
                    className="relative h-48 bg-gray-200 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                      <span>{item.title}</span>
                    </div>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <motion.div
                    className="p-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}>
                    <h3 className="font-semibold text-lg mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-white !text-primary-900 hover:!text-white hover:bg-gray-100 font-medium px-8 py-3 rounded-lg shadow-lg hover:ring-2"
              onClick={() => navigate("/gallery")}>
              View Full Gallery
            </Button>
          </motion.div>
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
