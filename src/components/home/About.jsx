import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import { aboutData } from "../../data/about";
import { clinicInfo } from "../../data/clinicInfo";

const getFeatureIcon = (icon) => {
  if (icon === "user") {
    return (
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
    );
  }
  if (icon === "chip") {
    return (
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
    );
  }
  if (icon === "home") {
    return (
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
    );
  }
  return null;
};

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageLoaded(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
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

  const iconVariants = {
    initial: { scale: 1 },
    float: {
      y: [0, -8, 0],
      transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    },
    hover: {
      scale: 1.13,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 18 },
    },
  };

  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/about/about-bg.jpg')] bg-cover bg-center opacity-30 z-0"
        aria-hidden="true"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/80 to-primary-50/80 z-10"></div>
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="py-16">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12">
            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet{" "}
              <span className="text-primary-600">{clinicInfo.doctor.name}</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {clinicInfo.doctor.specialization}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Doctor Information */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 md:order-1 flex flex-col justify-center">
              <motion.h3
                variants={textVariants}
                className="text-2xl font-semibold text-primary-600 mb-4">
                Welcome to {clinicInfo.name}
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-gray-700 mb-6 text-base sm:text-lg">
                {aboutData.aboutText}
              </motion.p>

              {/* Doctor Credentials Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-600 mb-6">
                <h4 className="text-lg font-semibold text-primary-600 mb-2">
                  {clinicInfo.doctor.name}
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  {clinicInfo.doctor.qualifications}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {clinicInfo.doctor.registration}
                </p>
                <p className="text-primary-600 font-medium text-sm">
                  {clinicInfo.doctor.specialization}
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Doctor/Clinic Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 md:order-2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full max-w-md h-[300px] sm:h-[400px] flex items-center justify-center">
                {/* Fallback content for missing images */}
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    imageLoaded ? "hidden" : "block"
                  }`}>
                  <span className="text-gray-500 text-lg">
                    Dr. Manasi's Clinic
                  </span>
                </div>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  src={aboutData.image}
                  alt={`${clinicInfo.doctor.name} - ${clinicInfo.name}`}
                  className={`w-full h-full object-cover ${
                    imageLoaded ? "block" : "hidden"
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutData.features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate="float"
                  whileHover="hover"
                  className="flex justify-center mb-4">
                  {getFeatureIcon(feature.icon)}
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
      </div>
    </div>
  );
};

export default About;
