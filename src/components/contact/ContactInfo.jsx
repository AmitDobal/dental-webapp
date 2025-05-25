import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

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
    scale: 1.02,
    boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.12)",
    transition: { type: "spring", stiffness: 180, damping: 18 },
  },
};

const ContactInfo = ({ clinicInfo }) => {
  // Early return with a placeholder if clinicInfo is not available
  if (!clinicInfo) {
    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white rounded-lg shadow-md p-6">
        <motion.h3
          variants={slideUp}
          className="text-2xl font-semibold text-gray-900 mb-6">
          Contact Information Loading...
        </motion.h3>
        <div className="animate-pulse space-y-6">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white rounded-lg shadow-md p-6">
      <motion.h3
        variants={slideUp}
        className="text-2xl font-semibold text-gray-900 mb-6">
        Contact Information
      </motion.h3>

      <div className="space-y-6">
        <motion.div
          variants={cardVariants}
          custom={0}
          className="flex items-start">
          <div className="flex-shrink-0 text-primary-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Address</h4>
            <p className="mt-1 text-gray-600">
              {clinicInfo.address || "Address information unavailable"}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          custom={1}
          className="flex items-start">
          <div className="flex-shrink-0 text-primary-600 mt-1">
            <svg
              className="w-6 h-6"
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
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Phone</h4>
            {clinicInfo.phone ? (
              <a
                href={`tel:${clinicInfo.phone}`}
                className="mt-1 text-primary-600 hover:text-primary-800 transition-colors"
                aria-label="Call us">
                {clinicInfo.phone}
              </a>
            ) : (
              <p className="mt-1 text-gray-600">
                Phone information unavailable
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          custom={2}
          className="flex items-start">
          <div className="flex-shrink-0 text-primary-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Email</h4>
            {clinicInfo.email ? (
              <a
                href={`mailto:${clinicInfo.email}`}
                className="mt-1 text-primary-600 hover:text-primary-800 transition-colors"
                aria-label="Email us">
                {clinicInfo.email}
              </a>
            ) : (
              <p className="mt-1 text-gray-600">
                Email information unavailable
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          custom={3}
          className="flex items-start">
          <div className="flex-shrink-0 text-primary-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Hours</h4>
            <div className="mt-1 text-gray-600">
              {clinicInfo.hours && clinicInfo.hours.length > 0 ? (
                clinicInfo.hours.map((day, index) => (
                  <p key={index} className="mb-1">
                    <span>{day.days}: </span>
                    <span>{day.hours}</span>
                  </p>
                ))
              ) : (
                <p>Hours information unavailable</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={cardVariants} custom={4} className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {clinicInfo.socialMedia && clinicInfo.socialMedia.length > 0 ? (
            clinicInfo.socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={`Follow us on ${social.platform}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <span className="sr-only">{social.platform}</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))
          ) : (
            <p className="text-gray-600">
              Social media information unavailable
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
