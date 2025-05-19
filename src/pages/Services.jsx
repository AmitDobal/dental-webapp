import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { services, clinicInfo } from "../utils/dummyData";

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState(null);

  // Handle hash navigation
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const service = services.find((s) => s.id === hash);
      if (service) {
        setActiveService(service);

        // Scroll to service details
        const detailsElement = document.getElementById("service-details");
        if (detailsElement) {
          detailsElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location]);

  const handleServiceClick = (service) => {
    setActiveService(service);
    // Update URL hash without reloading the page
    window.history.pushState(null, "", `#${service.id}`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 text-white py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Dental Services
            </h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              We offer a comprehensive range of dental services to meet all your
              oral health needs. From preventive care to cosmetic treatments,
              we're committed to providing exceptional dental care for you and
              your family.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Complete Dental Services"
            subtitle="Explore our wide range of dental services designed to keep your smile healthy and beautiful."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg"
                onClick={() => handleServiceClick(service)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(service);
                  }
                }}
                aria-label={`Read more about ${service.title}`}>
                <div className="mb-4 aspect-w-16 aspect-h-9 relative">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Details */}
      {activeService && (
        <section id="service-details" className="py-16 md:py-24 bg-gray-50">
          <Container>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={activeService.image}
                    alt={`${activeService.title} service`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {activeService.fullDescription}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 text-teal-600 mt-1">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8">
                    <span className="text-lg font-semibold text-gray-900">
                      Price:{" "}
                    </span>
                    <span className="text-teal-600 font-bold">
                      {activeService.price}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      as="link"
                      to="/contact"
                      variant="primary"
                      className="font-semibold"
                      aria-label={`Schedule ${activeService.title} appointment`}>
                      Schedule Appointment
                    </Button>
                    <Button
                      as="a"
                      href={`tel:${clinicInfo.contact.phone}`}
                      variant="outline"
                      aria-label="Call for more information">
                      Call for Information
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your appointment and experience our
              premium dental care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                as="link"
                to="/contact"
                className="bg-white text-teal-700 hover:bg-gray-100 font-semibold"
                size="lg"
                aria-label="Book an appointment">
                Book an Appointment
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=Hello! I would like to schedule an appointment for dental services.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="border-white hover:bg-white hover:text-teal-700 font-semibold"
                size="lg"
                aria-label="Chat on WhatsApp">
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber={clinicInfo.contact.whatsapp}
        message="Hello! I'm interested in your dental services and would like more information."
      />
    </>
  );
};

export default Services;
