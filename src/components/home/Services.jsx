import { useState } from "react";
import ServiceCard from "../common/ServiceCard";
import ServiceModal from "../common/ServiceModal";
import Button from "../common/Button";
import { motion } from "framer-motion";

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
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(16, 185, 129, 0.12)",
    transition: { type: "spring", stiffness: 180, damping: 18 },
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
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-50 to-white overflow-hidden py-16">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
          Our <span className="text-primary-600">Premium Services</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Comprehensive dental care with transparent pricing and exceptional
          quality
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="h-full">
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                altText={`${service.title} service image`}
                buttonText="View Details & Pricing"
                showButton={true}
                onClick={() => handleServiceClick(service)}
                className="cursor-pointer"
                pricing={service.pricing}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="#contact"
            size="lg"
            className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-8 py-3 rounded-md shadow-lg">
            Schedule a Consultation
          </Button>
        </div>
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
