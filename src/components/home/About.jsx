import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import { clinicInfo } from "../../data/clinicInfo";
import { aboutData } from "../../data/about";

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
  if (icon === "home") {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}>
          {/* Header */}
          <motion.div variants={slideUp} className="text-center mb-12">
            <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet{" "}
              <span className="text-primary-600">{clinicInfo.doctor.name}</span>
            </motion.h2>
            <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {aboutData.subheading}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Doctor Information */}
            <motion.div variants={slideUp} className="space-y-6">
              {/* Doctor Credentials */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {clinicInfo.doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {clinicInfo.doctor.qualifications}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {clinicInfo.doctor.registration}
                </p>
                <p className="text-gray-700">
                  {clinicInfo.doctor.specialization}
                </p>
              </div>

              {/* About Text */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {aboutData.aboutText}
              </p>
            </motion.div>

            {/* Doctor Image */}
            <motion.div variants={fadeIn} className="flex justify-center">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full max-w-md h-[400px] flex items-center justify-center">
                {!imageLoaded && (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-600"
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
                    </div>
                    <span className="text-gray-500 font-medium">
                      {clinicInfo.doctor.name}
                    </span>
                  </div>
                )}
                <img
                  src={aboutData.image}
                  alt={clinicInfo.doctor.name}
                  className={`w-full h-full object-cover ${
                    imageLoaded ? "block" : "hidden"
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            variants={slideUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={index}
                className="bg-white p-6 rounded-lg shadow-md border border-primary-100 text-center">
                <div className="flex justify-center mb-4">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
