import { motion } from "framer-motion";
import { clinicInfo } from "../../data/clinicInfo";
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

const VisitSection = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="relative w-full min-h-[80vh] bg-gradient-to-b from-white to-primary-50 overflow-hidden py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-primary-50/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.h2
          variants={slideUp}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
          Visit <span className="text-primary-600">Our Dental Studio</span>
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We're conveniently located to serve your dental needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            custom={0}>
            <div className="w-full rounded-lg shadow-lg overflow-hidden">
              <iframe
                src={clinicInfo.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${clinicInfo.name} Location`}
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            custom={1}
            className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Location
              </h3>
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="flex-shrink-0 text-primary-600 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
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
                  <p className="text-gray-700">{clinicInfo.address}</p>
                </div>
              </motion.div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Office Hours
              </h3>
              <motion.div variants={fadeIn} className="space-y-2">
                {clinicInfo.hours.map((day, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-700">
                    <span className="font-medium">{day.days}:</span>
                    <span>{day.hours}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <motion.div variants={fadeIn} className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-primary-600 hover:text-primary-800 transition-colors">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 text-primary-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-primary-600 hover:text-primary-800 transition-colors">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  {clinicInfo.socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      aria-label={`Follow us on ${social.platform}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d={social.icon}
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisitSection;
