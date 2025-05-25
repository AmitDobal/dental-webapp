import { motion } from "framer-motion";
import { clinicInfo } from "../../data";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-primary-100">
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-primary-300 mt-1 group-hover:text-primary-200 transition-colors">
                  <svg
                    className="w-5 h-5 mr-3"
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
                <p className="text-primary-100 leading-relaxed">
                  {clinicInfo.address}
                </p>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-primary-300 group-hover:text-primary-200 transition-colors">
                  <svg
                    className="w-5 h-5 mr-3"
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
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-primary-100 hover:text-white transition-colors font-medium">
                  {clinicInfo.phone}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-primary-300 group-hover:text-primary-200 transition-colors">
                  <svg
                    className="w-5 h-5 mr-3"
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
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-primary-100 hover:text-white transition-colors font-medium">
                  {clinicInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-primary-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#transformations", label: "Gallery" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <motion.a
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-primary-100">
              Office Hours
            </h3>
            <ul className="space-y-3">
              {clinicInfo.hours.map((day, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-2 border-b border-primary-700/30">
                  <span className="text-primary-200 font-medium">
                    {day.days}
                  </span>
                  <span className="text-primary-100 font-semibold">
                    {day.hours}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-primary-700/30">
          <div className="flex justify-center space-x-6">
            {clinicInfo.socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors p-3 rounded-full bg-primary-800/50 hover:bg-primary-700/50 backdrop-blur-sm"
                aria-label={`Follow us on ${social.platform}`}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}>
                <span className="sr-only">{social.platform}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary-800/30 backdrop-blur-sm rounded-full border border-primary-700/30">
            <p className="text-primary-200 text-sm font-medium">
              &copy; {currentYear} {clinicInfo.name}. All rights reserved.
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-primary-300 text-xs">
            Crafted with ❤️ for beautiful smiles
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
