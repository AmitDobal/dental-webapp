import { useState } from "react";
import ServiceCard from "../common/ServiceCard";
import ServiceModal from "../common/ServiceModal";

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
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
        Our <span className="text-teal-600">Premium Services</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Comprehensive dental care tailored to your specific needs with a focus
        on comfort and quality
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.shortDescription}
            image={service.image}
            altText={`${service.title} service image`}
            buttonText="Learn More"
            showButton={true}
            onClick={() => handleServiceClick(service)}
            className="cursor-pointer"
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium">
          Schedule a Consultation
        </a>
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
