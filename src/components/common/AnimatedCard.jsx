import { motion } from "framer-motion";
import { slideUp } from "../../utils/animations";

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
