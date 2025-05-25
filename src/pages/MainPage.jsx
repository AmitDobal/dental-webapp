import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import GalleryGrid from "../components/gallery/GalleryGrid";
import TransformationsSection from "../components/gallery/TransformationsSection";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import VisitSection from "../components/contact/VisitSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ServiceModal from "../components/common/ServiceModal";
import FeaturedServiceCard from "../components/common/FeaturedServiceCard";
import AnimatedSection from "../components/common/AnimatedSection";
import AnimatedCard from "../components/common/AnimatedCard";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { transformations } from "../data/transformations";
import { clinicInfo } from "../data/clinicInfo";
import { fadeIn, staggerContainer } from "../utils/animations";

const MainPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceType) => {
    // Find the corresponding service from the services array
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

  // Define featured services with icons
  const featuredServices = [
    {
      title: "General Dentistry",
      description:
        "Regular check-ups and cleanings to maintain your oral health",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile's appearance with our aesthetic treatments",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      title: "Restorative Care",
      description:
        "Repair damaged or missing teeth with durable, natural-looking solutions",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Emergency Services",
      description:
        "Immediate care when you need it most, with prompt pain relief",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Smooth scroll behavior for anchor links
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative">
        <Hero />
      </section>

      {/* About Section */}
      <AnimatedSection id="about" direction="up" delay={0.2}>
        <div className="container mx-auto px-4">
          <About />
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection
        id="services"
        className="bg-gray-50"
        direction="up"
        delay={0.3}>
        <div className="container mx-auto px-4">
          <Services services={services} />
        </div>
      </AnimatedSection>

      {/* Complete Dental Services */}
      <AnimatedSection
        id="complete-services"
        className="py-16"
        direction="up"
        delay={0.4}>
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-3">
            Complete <span className="text-primary-600">Dental Services</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            From routine check-ups to advanced procedures, we offer
            comprehensive dental care
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <FeaturedServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onClick={() => handleServiceClick(service.title)}
                />
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Smile Transformations Section */}
      <AnimatedSection
        id="transformations"
        className="bg-gray-50"
        direction="up"
        delay={0.5}>
        <TransformationsSection transformations={transformations} />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" direction="up" delay={0.6}>
        <div className="container mx-auto px-4">
          <Testimonials testimonials={testimonials} />
        </div>
      </AnimatedSection>

      {/* Visit Our Dental Studio Section */}
      <AnimatedSection id="visit" direction="up" delay={0.7}>
        <VisitSection />
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="py-16" direction="up" delay={0.8}>
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-3">
            Frequently <span className="text-primary-600">Asked Questions</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our dental services
          </motion.p>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do you accept insurance?",
                answer:
                  "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage.",
              },
              {
                question: "How often should I visit the dentist?",
                answer:
                  "We recommend routine check-ups every six months for most patients, though some conditions may require more frequent visits.",
              },
              {
                question: "What payment options do you offer?",
                answer:
                  "We accept cash, credit cards, and offer flexible payment plans. We'll work with you to find the best option for your budget.",
              },
            ].map((faq, index) => (
              <AnimatedCard key={index} delay={1.1 + index * 0.1}>
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="bg-gray-50"
        direction="up"
        delay={1.4}>
        <div className="container mx-auto px-4 py-16">
          <motion.h2
            variants={fadeIn("up", 1.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-3">
            Ready to{" "}
            <span className="text-primary-600">Schedule an Appointment?</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Contact us today to book your visit or ask any questions about our
            services
          </motion.p>
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
