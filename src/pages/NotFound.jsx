import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { fadeIn, slideUp, staggerContainer } from "../utils/animations";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const toothVariants = {
    wiggle: {
      rotate: [0, -2, 2, -2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/about/about-bg.jpg')] bg-cover bg-center opacity-10 z-0"
        aria-hidden="true"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto">
          {/* Animated 404 with Tooth-shaped 0 */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <motion.span
                variants={floatingVariants}
                animate="float"
                className="text-8xl md:text-9xl font-bold text-white">
                4
              </motion.span>

              {/* Tooth-shaped "0" */}
              <motion.div
                variants={toothVariants}
                animate="wiggle"
                className="relative">
                <span className="text-8xl md:text-9xl font-bold text-white relative">
                  0
                </span>
                {/* Small tooth icon overlay */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}>
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c-2 0-3.5 1-4 3-0.5 2-0.5 4-1 6-0.5 2 0 3 1 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1-2 0.5-4-0.5-2-0.5-4-1-6-0.5-2 2-3 4-3s4.5 1 4 3c-0.5 2-0.5 4-1 6-0.5 2 0.5 3 0.5 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1.5-2 1-4-0.5-2-0.5-4-1-6-0.5-2-2-3-4-3z" />
                  </svg>
                </motion.div>
              </motion.div>

              <motion.span
                variants={floatingVariants}
                animate="float"
                style={{ animationDelay: "0.5s" }}
                className="text-8xl md:text-9xl font-bold text-white">
                4
              </motion.span>
            </div>

            {/* Floating tooth icons around 404 */}
            <div className="relative">
              <motion.div
                className="absolute -top-8 -left-8 text-primary-300"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2c-2 0-3.5 1-4 3-0.5 2-0.5 4-1 6-0.5 2 0 3 1 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1-2 0.5-4-0.5-2-0.5-4-1-6-0.5-2 2-3 4-3s4.5 1 4 3c-0.5 2-0.5 4-1 6-0.5 2 0.5 3 0.5 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1.5-2 1-4-0.5-2-0.5-4-1-6-0.5-2-2-3-4-3z" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 text-primary-300"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2c-2 0-3.5 1-4 3-0.5 2-0.5 4-1 6-0.5 2 0 3 1 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1-2 0.5-4-0.5-2-0.5-4-1-6-0.5-2 2-3 4-3s4.5 1 4 3c-0.5 2-0.5 4-1 6-0.5 2 0.5 3 0.5 4 0.5 0.5 1 0.5 1.5 0.5s1 0 1.5-0.5c1-1 1.5-2 1-4-0.5-2-0.5-4-1-6-0.5-2-2-3-4-3z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants}>
            <motion.h1
              variants={slideUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! <span className="text-primary-200">Page Not Found</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p
              variants={slideUp}
              className="text-lg text-primary-100 mb-8 max-w-md mx-auto">
              It looks like the page you're looking for has gone missing, just
              like a tooth that needs our care!
            </motion.p>
          </motion.div>

          {/* Dental-themed message */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-8 border border-white/20">
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center mb-4">
              <div className="text-primary-200">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </motion.div>
            <motion.p variants={fadeIn} className="text-white text-center">
              Don't worry! Just like we fix smiles, we can help you find what
              you're looking for.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                as={Link}
                to="/"
                size="lg"
                className="bg-white !text-primary-800 hover:bg-primary-100 hover:!text-primary-900 font-semibold px-8 py-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Back to Home
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                as={Link}
                to="/#contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-800 font-semibold px-8 py-3">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Fun dental fact */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <motion.p
              variants={fadeIn}
              className="text-sm text-primary-100 italic">
              💡 <strong>Did you know?</strong> Just like this missing page, a
              missing tooth should be replaced quickly to maintain your oral
              health!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
