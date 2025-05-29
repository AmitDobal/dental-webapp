import { motion } from "framer-motion";
import Button from "../common/Button";

const TransformationDetails = ({ transformation, onClose }) => {
  if (!transformation) return null;
  return (
    <div className="relative p-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Close modal"
        tabIndex={0}>
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
        {transformation.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Before</h3>
          <div className="bg-gray-200 rounded overflow-hidden h-60">
            <img
              src={transformation.beforeImage || transformation.image}
              alt={`Before: ${transformation.title}`}
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
          <h3 className="text-lg font-medium text-gray-700 mb-2">After</h3>
          <div className="bg-gray-200 rounded overflow-hidden h-60">
            <img
              src={transformation.afterImage || transformation.image}
              alt={`After: ${transformation.title}`}
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
        {transformation.fullDescription || transformation.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-end">
        <Button
          to="#contact"
          onClick={onClose}
          className="bg-primary-600 text-white hover:bg-primary-700">
          Book a Consultation
        </Button>
      </motion.div>
    </div>
  );
};

export default TransformationDetails;
