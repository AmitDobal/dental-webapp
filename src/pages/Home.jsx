import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/common/ServiceCard";
import TestimonialCard from "../components/common/TestimonialCard";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { services, testimonials, clinicInfo } from "../data";

const Home = () => {
  // Get the first 3 services for the home page
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 text-white py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transform Your Smile with Premium Dental Care
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Experience the highest standard of dental care in a comfortable
            environment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              as="link"
              to="/contact"
              size="lg"
              className="font-semibold"
              aria-label="Schedule an appointment">
              Schedule Appointment
            </Button>
            <Button
              as="link"
              to="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-800 font-semibold"
              aria-label="View our services">
              Our Services
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md">
              {/* This would be an actual image in production */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Clinic Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Our Manifest Dental Clinic
              </h2>
              <p className="text-gray-700 mb-6">
                Welcome to Manifest Dental Clinic, where we combine cutting-edge
                technology with compassionate care to provide exceptional dental
                services. Our team of experienced dentists and friendly staff
                are dedicated to ensuring your comfort and satisfaction.
              </p>
              <p className="text-gray-700 mb-6">
                We believe that a healthy smile is essential for overall
                well-being, which is why we offer comprehensive dental care
                tailored to meet your specific needs. From routine check-ups to
                advanced cosmetic procedures, we're committed to helping you
                achieve and maintain optimal oral health.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="mr-2 text-teal-600">
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
                  <span>Experienced Dentists</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-teal-600">
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
                  <span>Modern Technology</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-teal-600">
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
                  <span>Comfortable Environment</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-teal-600">
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
                  <span>Personalized Care</span>
                </div>
              </div>
              <Button
                as="link"
                to="/services"
                variant="primary"
                aria-label="Explore our services">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Premium Services"
            subtitle="We offer a wide range of dental services to meet your needs and help you achieve a healthy, beautiful smile."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                altText={`${service.title} service image`}
                link={`/services#${service.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              as="link"
              to="/services"
              variant="outline"
              aria-label="View all services">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Why Choose Us"
            subtitle="Here's what sets Manifest Dental Clinic apart and makes us the preferred choice for dental care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-teal-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our dentists have years of experience and stay up-to-date with
                the latest advancements in dental care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-teal-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                State-of-the-Art Technology
              </h3>
              <p className="text-gray-600">
                We invest in the latest dental technology to provide more
                precise diagnostics and comfortable treatments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-teal-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Affordable Care
              </h3>
              <p className="text-gray-600">
                We offer competitive pricing and flexible payment options to
                make quality dental care accessible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Don't just take our word for it. Here's what our patients have to say about their experience at Manifest Dental Clinic."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and take the first step towards a
              healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                as="link"
                to="/contact"
                className="bg-white !text-teal-700 hover:bg-teal-700 hover:!text-white font-semibold"
                size="lg"
                aria-label="Book an appointment">
                Book an Appointment
              </Button>
              <Button
                as="a"
                href={`tel:${clinicInfo.contact.phone}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 font-semibold"
                size="lg"
                aria-label="Call us now">
                Call Us Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber={clinicInfo.contact.whatsapp}
        message="Hello! I would like to schedule an appointment."
      />
    </>
  );
};

export default Home;
