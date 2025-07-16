import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { clinicInfo } from "../../data";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import SimpleMap from "../common/SimpleMap";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.12)",
    transition: { type: "spring", stiffness: 180, damping: 18 },
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

const mapVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    rotateY: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const VisitSection = () => {
  // Function to get the appropriate Lucide icon based on platform
  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return Linkedin;
      case "instagram":
        return Instagram;
      case "whatsapp":
        return MessageCircle;
      default:
        return MessageCircle;
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.h2
          variants={headerVariants}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-3">
          Visit <span className="text-white">Our Dental Studio</span>
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="text-white text-center max-w-3xl mx-auto mb-12">
          We're conveniently located to serve your dental needs. Find us easily
          using the map below.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="h-full">
            <motion.div
              className="h-full bg-white/20 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-white/30"
              whileHover={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}>
              <SimpleMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3313995454405!2d73.0714861!3d19.049161599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c31c5007c729%3A0x1ff8490609dee63!2sDr.Manasi&#39;s%20Manifest%20Dental%20Studio%20Kharghar!5e0!3m2!1sen!2sin!4v1748210893318!5m2!1sen!2sin"
                title={`${clinicInfo.name} Location`}
                height="100%"
                className="h-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-md h-full flex flex-col border border-white/30">
            <motion.div className="mb-6" variants={infoItemVariants} custom={0}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Location
              </h3>
              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}>
                <div className="flex-shrink-0 text-primary-300 mt-1">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-2 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-white/90">{clinicInfo.address}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="mb-6" variants={infoItemVariants} custom={1}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Office Hours
              </h3>
              <motion.div className="space-y-2">
                {clinicInfo.hours.map((day, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between text-white/90"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 3 }}>
                    <span className="font-medium">{day.days}:</span>
                    <span>{day.hours}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1"
              variants={infoItemVariants}
              custom={2}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <motion.div className="space-y-3">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <div className="flex-shrink-0 text-primary-300 mt-1">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-white hover:text-primary-200 transition-colors">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <div className="flex-shrink-0 text-primary-300 mt-1">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-2 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-white hover:text-primary-200 transition-colors">
                      {clinicInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-6 flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  {clinicInfo.socialMedia.map((social, index) => {
                    const IconComponent = getSocialIcon(social.platform);

                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        aria-label={`Follow us on ${social.platform}`}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}>
                        <div
                          className={`
                          w-12 h-12 rounded-full 
                          flex items-center justify-center
                          transition-all duration-300
                          ${
                            social.platform.toLowerCase() === "linkedin"
                              ? "bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-400/70"
                              : ""
                          }
                          ${
                            social.platform.toLowerCase() === "instagram"
                              ? "bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-400/70"
                              : ""
                          }
                          ${
                            social.platform.toLowerCase() === "whatsapp"
                              ? "bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-400/70"
                              : ""
                          }
                        `}>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-60"></div>
                          <IconComponent className="w-6 h-6 text-white relative z-10 drop-shadow-lg" />
                        </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitSection;
