import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { galleryImages } from "../data/gallery";
import { clinicInfo } from "../data/clinicInfo";

const MainPage = () => {
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
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Services services={services} />
        </div>
      </section>

      {/* Featured Services */}
      <section id="featured-services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Complete <span className="text-teal-600">Dental Services</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            From routine check-ups to advanced procedures, we offer
            comprehensive dental care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">General Dentistry</h3>
              <p className="text-sm text-gray-600">
                Regular check-ups and cleanings
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Cosmetic Dentistry</h3>
              <p className="text-sm text-gray-600">
                Enhance your smile's appearance
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Restorative Care</h3>
              <p className="text-sm text-gray-600">
                Repair damaged or missing teeth
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Emergency Services</h3>
              <p className="text-sm text-gray-600">
                Immediate care when you need it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently <span className="text-teal-600">Asked Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Do you accept insurance?
              </h3>
              <p className="text-gray-600">
                Yes, we accept most major dental insurance plans. Please contact
                our office to verify your specific coverage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                How often should I visit the dentist?
              </h3>
              <p className="text-gray-600">
                We recommend routine check-ups every six months for most
                patients, though some conditions may require more frequent
                visits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                What payment options do you offer?
              </h3>
              <p className="text-gray-600">
                We accept cash, credit cards, and offer flexible payment plans.
                We'll work with you to find the best option for your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Ready to{" "}
            <span className="text-teal-600">Schedule an Appointment?</span>
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Contact us today to book your visit or ask any questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo clinicInfo={clinicInfo} />
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
};

export default MainPage;
