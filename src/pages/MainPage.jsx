import { useState, useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import TransformationsSection from "../components/gallery/TransformationsSection";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import VisitSection from "../components/contact/VisitSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ServiceModal from "../components/common/ServiceModal";
import AnimatedSection from "../components/common/AnimatedSection";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { transformations } from "../data/transformations";
import { clinicInfo } from "../data/clinicInfo";

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
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen antialiased">
      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <AnimatedSection id="about" direction="up" delay={0.2}>
        <div className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-primary-50">
          <About />
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        id="services"
        className="bg-primary-50"
        direction="up"
        delay={0.3}>
        <div className="container mx-auto px-4 py-20">
          <Services services={services} onServiceClick={handleServiceClick} />
        </div>
      </AnimatedSection>

      {/* Smile Transformations Section */}
      <AnimatedSection
        id="transformations"
        className="bg-white"
        direction="up"
        delay={0.5}>
        <div className="container mx-auto px-4 py-20">
          <TransformationsSection transformations={transformations} />
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" direction="up" delay={0.6}>
        <div className="container mx-auto px-4 py-20 bg-primary-50">
          <Testimonials testimonials={testimonials} />
        </div>
      </AnimatedSection>

      {/* Visit Our Dental Studio Section */}
      <AnimatedSection id="visit" direction="up" delay={0.7}>
        <div className="bg-gradient-to-b from-white to-primary-50">
          <VisitSection />
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="bg-white"
        direction="up"
        delay={1.4}>
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo clinicInfo={clinicInfo} />
          </div>
        </div>
      </AnimatedSection>

      {/* WhatsApp Button */}
      <WhatsAppButton />

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
