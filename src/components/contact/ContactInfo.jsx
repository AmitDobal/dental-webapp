import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

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
            <MapPin className="w-6 h-6" />
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
            <Phone className="w-6 h-6" />
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
            <Mail className="w-6 h-6" />
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
            <Clock className="w-6 h-6" />
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
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}>
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
              clinicInfo.socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-primary-400 transition-colors"
                  aria-label={`Follow us on ${social.platform}`}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path fillRule="evenodd" d={social.icon} />
                  </svg>
                </motion.a>
              ))
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
