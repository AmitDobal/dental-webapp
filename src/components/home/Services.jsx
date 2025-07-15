import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Stethoscope } from "lucide-react";
import ServiceCard from "../common/ServiceCard";
import ServiceModal from "../common/ServiceModal";
import Button from "../common/Button";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Services = ({ services }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6">
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg border-2 border-cyan-300/50">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Comprehensive dental care services to keep your smile healthy and
            beautiful.
          </p>
        </motion.div>

        {/* 4 cards per row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full">
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                altText={`${service.title} service image`}
                buttonText="View Details"
                showButton={true}
                onClick={() => handleServiceClick(service)}
                className="cursor-pointer h-full"
                pricing={service.pricing}
              />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12">
          <Button
            as="a"
            href="/services"
            variant="outline"
            size="md"
            className="bg-white border-white text-primary-900 hover:bg-gray-100 hover:border-gray-200 px-8 py-3 font-medium transition-all duration-200">
            See All Services
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Call to action section */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-sm border border-white/30 p-8 max-w-2xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold text-white mb-3">
              Ready to Transform Your Smile?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/90 mb-6">
              Schedule a consultation with Dr. Manasi and discover the perfect
              treatment for your needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Button
                as="a"
                href="#contact"
                size="lg"
                className="bg-white !text-primary-900 hover:!text-white hover:bg-gray-100 font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:ring-2">
                Schedule Consultation
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Services;
