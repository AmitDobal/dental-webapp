import { useState } from "react";
import { motion } from "framer-motion";
import { clinicInfo } from "../../data";

const getFeatureIcon = (icon) => {
  if (icon === "user") {
    return (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
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
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    );
  }
  if (icon === "heart") {
    return (
      <svg
        className="w-10 h-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {/* Header Section */}
          <motion.div className="text-center mb-12" variants={headerVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet{" "}
              <span className="text-primary-100">
                {clinicInfo.about.heading}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-primary-100 max-w-3xl mx-auto">
              {clinicInfo.about.subheading}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Doctor Information */}
            <motion.div
              className="order-2 md:order-1 flex flex-col justify-center"
              variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-primary-100 mb-4">
                Welcome to {clinicInfo.name}
              </h3>

              <p className="text-primary-200 mb-6 text-base sm:text-lg">
                {clinicInfo.about.description}
              </p>

              {/* Doctor Credentials Card */}
              <motion.div
                className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-primary-300 mb-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {clinicInfo.doctor.name}
                </h4>
                <p className="text-white/90 text-sm mb-2">
                  {clinicInfo.doctor.qualifications}
                </p>
                <p className="text-white/80 text-sm mb-1">
                  {clinicInfo.doctor.registration}
                </p>
                <p className="text-primary-200 font-medium text-sm">
                  {clinicInfo.doctor.specialization}
                </p>
              </motion.div>

              {/* Services Offered */}
              <motion.div className="mb-4" variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Our Specializations:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {clinicInfo.services.slice(0, 6).map((service, index) => (
                    <motion.div
                      key={index}
                      className="text-sm text-white/90 flex items-center"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-2"></span>
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Doctor/Clinic Image */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              variants={imageVariants}>
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg w-full max-w-md h-[300px] sm:h-[400px] flex items-center justify-center border border-white/30"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.4 }}>
                {/* Fallback content */}
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    imageLoaded ? "hidden" : "block"
                  }`}>
                  <div className="text-center">
                    <span className="text-white text-lg block mb-2">
                      {clinicInfo.doctor.name}
                    </span>
                    <span className="text-white/80 text-sm">
                      {clinicInfo.name}
                    </span>
                  </div>
                </div>

                <img
                  src={clinicInfo.about.image}
                  alt={`${clinicInfo.doctor.name} - ${clinicInfo.name}`}
                  className={`w-full h-full object-cover `}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinicInfo.about.features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                whileHover="hover"
                className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-white/30">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}>
                  {getFeatureIcon(feature.icon)}
                </motion.div>
                <h3 className="font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
