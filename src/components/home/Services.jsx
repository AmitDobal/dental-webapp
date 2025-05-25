import { useState } from "react";
import ServiceCard from "../common/ServiceCard";
import ServiceModal from "../common/ServiceModal";
import Button from "../common/Button";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      type: "spring",
      stiffness: 140,
      damping: 20,
    },
  }),
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 20px 0 rgba(16, 185, 129, 0.08)",
    transition: { type: "spring", stiffness: 200, damping: 20 },
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Premium Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-2">
            Comprehensive dental care with transparent pricing and exceptional
            quality
          </p>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* 4 cards per row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8">
          {services.slice(0, 4).map((service, i) => (
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
        <div className="text-center mb-12">
          <Button
            as="a"
            href="/services"
            variant="outline"
            size="md"
            className="border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 px-8 py-3 font-medium transition-all duration-200">
            See All Services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>

        {/* Call to action section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-primary-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with Dr. Manasi and discover the perfect
              treatment for your needs.
            </p>
            <Button
              as="a"
              href="#contact"
              size="lg"
              className="bg-primary-600 text-white hover:bg-primary-700 font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Schedule Consultation
            </Button>
          </div>
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
