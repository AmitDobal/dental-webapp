import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contactItemVariants = {
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ContactInfo = ({ clinicInfo }) => {
  // Early return with a placeholder if clinicInfo is not available
  if (!clinicInfo) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md p-6 border border-white/30">
        <motion.h3
          variants={headerVariants}
          className="text-2xl font-semibold text-white mb-6">
          Contact Information Loading...
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="animate-pulse space-y-6">
          <div className="h-6 bg-white/30 rounded w-3/4"></div>
          <div className="h-6 bg-white/30 rounded w-1/2"></div>
          <div className="h-6 bg-white/30 rounded w-2/3"></div>
        </motion.div>
      </motion.div>
    );
  }

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
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md p-6 border border-white/30">
      <motion.h3
        variants={headerVariants}
        className="text-2xl font-semibold text-white mb-6">
        Contact Information
      </motion.h3>

      <div className="space-y-6">
        <motion.div
          variants={contactItemVariants}
          custom={0}
          className="flex items-start">
          <motion.div
            custom={0}
            variants={iconVariants}
            whileHover="hover"
            className="flex-shrink-0 text-primary-300 mt-1">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-2 shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <motion.div
            className="ml-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}>
            <h4 className="text-lg font-medium text-white">Address</h4>
            <p className="mt-1 text-white/90">
              {clinicInfo.address || "Address information unavailable"}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactItemVariants}
          custom={1}
          className="flex items-start">
          <motion.div
            custom={1}
            variants={iconVariants}
            whileHover="hover"
            className="flex-shrink-0 text-primary-300 mt-1">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <motion.div
            className="ml-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}>
            <h4 className="text-lg font-medium text-white">Phone</h4>
            {clinicInfo.phone ? (
              <motion.a
                href={`tel:${clinicInfo.phone}`}
                className="mt-1 text-white hover:text-primary-200 transition-colors"
                aria-label="Call us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {clinicInfo.phone}
              </motion.a>
            ) : (
              <p className="mt-1 text-white/90">
                Phone information unavailable
              </p>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactItemVariants}
          custom={2}
          className="flex items-start">
          <motion.div
            custom={2}
            variants={iconVariants}
            whileHover="hover"
            className="flex-shrink-0 text-primary-300 mt-1">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-2 shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <motion.div
            className="ml-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}>
            <h4 className="text-lg font-medium text-white">Email</h4>
            {clinicInfo.email ? (
              <motion.a
                href={`mailto:${clinicInfo.email}`}
                className="mt-1 text-white hover:text-primary-200 transition-colors"
                aria-label="Email us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {clinicInfo.email}
              </motion.a>
            ) : (
              <p className="mt-1 text-white/90">
                Email information unavailable
              </p>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactItemVariants}
          custom={3}
          className="flex items-start">
          <motion.div
            custom={3}
            variants={iconVariants}
            whileHover="hover"
            className="flex-shrink-0 text-primary-300 mt-1">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-2 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <motion.div
            className="ml-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}>
            <h4 className="text-lg font-medium text-white">Hours</h4>
            <motion.div
              className="mt-1 text-white/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              {clinicInfo.hours && clinicInfo.hours.length > 0 ? (
                clinicInfo.hours.map((day, index) => (
                  <motion.p
                    key={index}
                    className="mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 3 }}>
                    <span>{day.days}: </span>
                    <span>{day.hours}</span>
                  </motion.p>
                ))
              ) : (
                <p>Hours information unavailable</p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={contactItemVariants}
          custom={4}
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}>
          <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            {clinicInfo.socialMedia && clinicInfo.socialMedia.length > 0 ? (
              clinicInfo.socialMedia.map((social, index) => {
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
              })
            ) : (
              <p className="text-primary-200">
                Social media information unavailable
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
