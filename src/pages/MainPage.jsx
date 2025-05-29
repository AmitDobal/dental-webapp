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
import AnimatedSection from "../components/common/AnimatedSection";
import { enableSmoothScrollForAnchors } from "../utils/scrollUtils";
import { services, testimonials, transformations, clinicInfo } from "../data";

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
      <AnimatedSection id="about" direction="up" delay={0.2}>
        <About />
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        id="services"
        className="bg-primary-50"
        direction="up"
        delay={0.3}>
        <Services services={services} onServiceClick={handleServiceClick} />
      </AnimatedSection>

      {/* Smile Transformations Section */}
      <AnimatedSection id="transformations" direction="up" delay={0.3}>
        <TransformationsSection transformations={transformations} />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" direction="up" delay={0.3}>
        <Testimonials testimonials={testimonials} />
      </AnimatedSection>

      {/* Visit Our Dental Studio Section */}
      <AnimatedSection id="visit" direction="up" delay={0.3}>
        <VisitSection />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" direction="up" delay={0.3}>
        <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-white to-primary-50 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
            aria-hidden="true"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-primary-50/90 z-10"></div>

          <div className="relative z-20 container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo clinicInfo={clinicInfo} />
            </div>
          </div>
        </div>
      </AnimatedSection>
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
