import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, DollarSign, Heart } from "lucide-react";
import ServiceCard from "../components/common/ServiceCard";
import ServiceModal from "../components/common/ServiceModal";
import Button from "../components/common/Button";
import { services } from "../data";
import { useNavigate, useLocation } from "react-router-dom";
import { handleAnchorNavigation } from "../utils/scrollUtils";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 140,
      damping: 20,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 20px 0 rgba(16, 185, 129, 0.15)",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-10 z-0"
          aria-hidden="true"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-white">Dental Services</span>
            </h1>
            <p className="text-white text-lg sm:text-xl mb-8 leading-relaxed">
              Comprehensive dental care with transparent pricing and exceptional
              quality. From routine cleanings to advanced cosmetic procedures,
              we provide personalized treatment plans tailored to your unique
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#services"
                size="lg"
                className="bg-white !text-primary-600 hover:!text-white hover:bg-primary-50 font-medium px-8 py-3 rounded-lg shadow-lg">
                Explore Services
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg"
                onClick={(e) =>
                  handleAnchorNavigation(e, "#contact", { navigate, location })
                }>
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div id="services" className="relative w-full py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete{" "}
              <span className="text-white">Treatment Options</span>
            </h2>
            <p className="text-white max-w-3xl mx-auto mb-6">
              Dr. Manasi's Manifest Dental Studio offers a comprehensive range
              of dental services with transparent pricing and the highest
              quality standards.
            </p>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>

          {/* All Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
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
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Choose Dr. Manasi's Manifest Dental Studio?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300/50 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="font-semibold text-white mb-2">Expert Care</h4>
                <p className="text-white text-sm">
                  Dr. Manasi brings years of expertise in cosmetic dentistry and
                  root canal treatment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-amber-300/50 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Transparent Pricing
                </h4>
                <p className="text-white text-sm">
                  Clear, upfront pricing with no hidden costs. Quality care at
                  affordable rates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="bg-gradient-to-br from-rose-400 to-rose-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-rose-300/50 shadow-lg">
                  <Heart className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Patient Comfort
                </h4>
                <p className="text-white text-sm">
                  Modern techniques and a comfortable environment for
                  stress-free dental care.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto text-white border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Dental Journey?
              </h3>
              <p className="text-white mb-6 text-lg">
                Schedule a consultation with Dr. Manasi and take the first step
                towards a healthier, more beautiful smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as="a"
                  href="/"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-3 rounded-lg">
                  ← Back to Home
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  className="bg-white !text-primary-600 hover:!text-white hover:bg-primary-50 font-medium px-8 py-3 rounded-lg shadow-lg"
                  onClick={(e) =>
                    handleAnchorNavigation(e, "#contact", {
                      navigate,
                      location,
                    })
                  }>
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
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

export default ServicesPage;
