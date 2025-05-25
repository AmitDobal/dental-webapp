import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const clinicImageUrl = "/images/about/clinic.jpeg";

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const features = [
    {
      title: "Expert Dentists",
      description:
        "Our team of experienced dentists provides exceptional care using the latest techniques and technology.",
      icon: (
        <svg
          className="w-10 h-10 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Modern Technology",
      description:
        "Our state-of-the-art clinic is equipped with advanced dental technology for precise diagnoses and treatments.",
      icon: (
        <svg
          className="w-10 h-10 text-primary-600"
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
      ),
    },
    {
      title: "Comfort First",
      description:
        "We've created a relaxing atmosphere to make your dental visit as comfortable and stress-free as possible.",
      icon: (
        <svg
          className="w-10 h-10 text-primary-600"
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
      ),
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div variants={slideUp} className="text-center mb-12">
        <motion.h2
          variants={textVariants}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-primary-600">Our Dental Studio</span>
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Dedicated to providing exceptional dental care with a focus on patient
          comfort and satisfaction
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Clinic Image */}
        <motion.div variants={fadeIn} className="order-2 md:order-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full">
            {/* Fallback content for missing images */}
            <div
              className={`w-full h-[300px] sm:h-[400px] flex items-center justify-center ${
                imageLoaded ? "hidden" : "block"
              }`}>
              <span className="text-gray-500 text-lg">Clinic Image</span>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              src={clinicImageUrl}
              alt="Manifest Dental Clinic"
              className={`w-full h-[300px] sm:h-[400px] object-cover ${
                imageLoaded ? "block" : "hidden"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </motion.div>
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={slideUp}
          className="order-1 md:order-2 flex flex-col justify-center">
          <motion.h3
            variants={textVariants}
            className="text-2xl font-semibold text-primary-600 mb-4">
            Welcome to Manifest Dental Studio
          </motion.h3>
          <motion.p
            variants={textVariants}
            className="text-gray-700 mb-6 text-base sm:text-lg">
            At Manifest Dental Studio, we believe everyone deserves a healthy
            smile. Our experienced team uses the latest technology to provide
            comprehensive dental care in a comfortable environment. From routine
            check-ups to advanced cosmetic procedures, we're committed to
            helping you achieve and maintain optimal oral health.
          </motion.p>
          <motion.a
            href="#services"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center group">
            Explore our services
            <motion.svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mb-4">
              {feature.icon}
            </motion.div>
            <motion.h3
              variants={textVariants}
              className="font-semibold text-xl text-primary-600 mb-3">
              {feature.title}
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="text-gray-700 text-base sm:text-lg">
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
