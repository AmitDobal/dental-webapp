import { motion } from "framer-motion";

const FloatingImage = ({
  src,
  alt,
  className = "",
  initial = { y: 0, x: 0 },
  animate = { y: [0, -20, 0] },
  transition = { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 },
  zIndex = "z-10",
  onClick,
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={transition}
    onClick={onClick}
    className={`${className} ${zIndex} bg-gradient-to-br rounded-xl shadow-xl border-4 border-white overflow-hidden`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
    />
  </motion.div>
);

export default FloatingImage;
