import { motion } from "framer-motion";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-white">
            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Think Dentistry
              <br />
              <span className="text-primary-300">Think Us</span>
            </motion.h1>

            <motion.p
              variants={slideUp}
              className="text-xl md:text-2xl text-primary-100 mb-8">
              Smile and the World Smiles with You
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-800 hover:bg-primary-100 font-semibold">
                Book an Appointment Now
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-800">
                Connect Now
              </Button>
            </motion.div>

            {/* Rating Section */}
            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg font-semibold">
                  5.0
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm text-primary-200">
                  Based On 200+ Reviews
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary-700 to-primary-600 rounded-lg shadow-2xl flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  Dental Care Image
                </span>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <span className="text-primary-800 font-bold">10+ Years</span>
                <br />
                <span className="text-gray-600">Experience</span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <span className="text-primary-800 font-bold">200+</span>
                <br />
                <span className="text-gray-600">Happy Patients</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
