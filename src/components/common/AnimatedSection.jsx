import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  id,
}) => {
  return (
    <motion.div
      id={id}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
 