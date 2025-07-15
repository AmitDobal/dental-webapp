import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
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
    <footer className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Clinic Info */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/images/dental-logo.png"
                alt="Dental Clinic Logo"
                className="h-12 w-auto mr-4"
              />
              <h3 className="text-2xl font-bold text-white">
                {clinicInfo.name}
              </h3>
            </div>
            <p className="text-white leading-relaxed mb-6 max-w-md">
              Providing exceptional dental care with advanced technology and
              compassionate service. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              {clinicInfo.socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
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
                  <svg
                    className="h-5 w-5"
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

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-white hover:text-white transition-colors font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-start group gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-white mt-1 group-hover:text-white transition-colors">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-1 shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {clinicInfo.address}
                </p>
              </motion.div>

              <motion.div
                className="flex items-center group gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-white group-hover:text-white transition-colors">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 shadow-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                </div>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-white hover:text-white transition-colors font-medium text-sm">
                  {clinicInfo.phone}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center group gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex-shrink-0 text-white group-hover:text-white transition-colors">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-1 shadow-lg ">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                </div>
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-white hover:text-white transition-colors font-medium text-sm">
                  {clinicInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Office Hours */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center mb-4">
            <h4 className="text-lg font-bold text-white mb-3">Office Hours</h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {clinicInfo.hours.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="text-white font-medium text-sm">
                    {day.days}
                  </div>
                  <div className="text-white font-semibold text-sm">
                    {day.hours}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <p className="text-white text-sm font-medium">
              &copy; {currentYear} {clinicInfo.name}. All rights reserved.
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-3 text-white text-xs">
            Crafted with ❤️ by{" "}
            <a
              href="https://www.buildmvpwithus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors font-medium text-sm underline">
              Build MVP with Us
            </a>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
