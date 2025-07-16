import { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import TransformationsSection from "../components/gallery/TransformationsSection";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import VisitSection from "../components/contact/VisitSection";
import ServiceModal from "../components/common/ServiceModal";
import { enableSmoothScrollForAnchors } from "../utils/scrollUtils";
import { services, testimonials, clinicInfo } from "../data";

const MainPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceType) => {
    const service = services.find((s) =>
      s.title.toLowerCase().includes(serviceType.toLowerCase())
    );

    if (service) {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Enable smooth scrolling for all anchor links
    const cleanup = enableSmoothScrollForAnchors();

    // Cleanup function
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen antialiased">
      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="relative">
        <Services services={services} onServiceClick={handleServiceClick} />
      </section>

      {/* Smile Transformations Section */}
      {/* <section id="transformations" className="relative">
        <TransformationsSection transformations={transformations} />
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* Visit Our Dental Studio Section */}
      <section id="visit" className="relative">
        <VisitSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
            aria-hidden="true"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10"></div>

          <div className="relative z-20 container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo clinicInfo={clinicInfo} />
            </div>
          </div>
        </div>
      </section>
      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default MainPage;
