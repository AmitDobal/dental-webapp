import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";

const AnimatedContainer = ({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
}) => {
  return (
    <motion.div
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
