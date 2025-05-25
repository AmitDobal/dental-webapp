import { motion } from "framer-motion";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import {
  handleBookAppointment,
  handleConnectNow,
} from "../../utils/scrollUtils";
import FloatingImage from "../common/FloatingImage";
import { Typewriter } from "react-simple-typewriter";

const HERO_PHRASES = [
  "Your Smile, Our Passion",
  "Expert Dental Care",
  "Confident Smiles Start Here",
  "Brighten Your Smile Today",
  "Gentle Hands, Beautiful Results",
  "Where Every Smile Matters",
  "Transforming Smiles, Transforming Lives",
];

const LeftSection = () => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={staggerContainer}
    className="text-white">
    <motion.h1
      variants={slideUp}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[4.5rem]">
      <span className="text-primary-100 block">
        <Typewriter
          words={HERO_PHRASES}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1800}
        />
      </span>
    </motion.h1>
    <motion.p
      variants={slideUp}
      className="text-xl md:text-2xl text-primary-100 mb-8">
      Creating healthy, beautiful smiles for life
    </motion.p>
    <motion.div
      variants={staggerContainer}
      className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={() =>
          handleBookAppointment({ focusForm: true, focusDelay: 1000 })
        }
        size="lg"
        className="bg-white !text-primary-800 hover:bg-primary-100 hover:!text-white font-semibold"
        aria-label="Book an appointment - scroll to contact form">
        Book an Appointment Now
      </Button>
      <Button
        onClick={() => handleConnectNow({ method: "scroll" })}
        variant="outline"
        size="lg"
        className="border-white text-white hover:bg-white hover:text-primary-800"
        aria-label="Connect with us - scroll to contact section">
        Connect Now
      </Button>
    </motion.div>
    {/* Rating Section */}
    <motion.div variants={fadeIn} className="mt-12 flex items-center gap-4">
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
);

const RightSection = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative w-full flex justify-center items-center mt-8 lg:mt-0 min-h-[340px]">
    <div className="relative w-full h-[340px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Central Big Image */}
      <div className="relative z-10 w-60 h-72 sm:w-56 sm:h-80 md:w-96 md:h-[30rem] bg-gradient-to-br from-primary-700 to-primary-600 rounded-2xl shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center mx-auto">
        <img
          src="/images/hero/dental-image1.jpeg"
          alt="Main dental procedure"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      {/* Floating Card 1 - Top Left */}
      <FloatingImage
        src="/images/hero/dental-image2.jpeg"
        alt="Floating dental 1"
        className="absolute left-2 top-2 w-24 h-36 sm:w-28 sm:h-36 from-primary-600 to-primary-400"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
        zIndex="z-10"
      />
      {/* Floating Card 2 - Top Right */}
      <FloatingImage
        src="/images/hero/dental-image3.jpeg"
        alt="Floating dental 2"
        className="absolute right-2 top-6 w-20 h-24 sm:w-24 sm:h-28 from-primary-500 to-primary-300"
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        zIndex="z-10"
      />
      {/* Floating Card 3 - Bottom Left */}
      <FloatingImage
        src="/images/hero/dental-image4.jpeg"
        alt="Floating dental 3"
        className="absolute left-8 bottom-2 w-16 h-16 sm:w-20 sm:h-20 from-primary-800 to-primary-500"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        zIndex="z-10"
      />
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <LeftSection />
          <RightSection />
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
