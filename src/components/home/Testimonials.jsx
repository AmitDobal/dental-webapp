import { motion } from "framer-motion";
import TestimonialCard from "../common/TestimonialCard";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

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

const Testimonials = ({ testimonials }) => {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Unified Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-100 z-0"
        aria-hidden="true"></div>
      {/* Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-primary-50/90 z-10"></div>

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
            What <span className="text-primary-600">Our Patients Say</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Read testimonials from our satisfied patients about their experience
            at Manifest Dental Clinic
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="text-center mt-10">
            <Button
              to="#testimonials"
              variant="outline"
              className="text-primary-600 hover:text-primary-800 font-medium">
              Read more testimonials
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
