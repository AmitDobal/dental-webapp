import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  return (
    <motion.p
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}>
      {text}
    </motion.p>
  );
};

export default AnimatedText;
