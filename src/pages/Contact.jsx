import { useState } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/common/ContactForm";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Button from "../components/common/Button";
import { clinicInfo, faqs } from "../utils/dummyData";

const Contact = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 text-white py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              We're here to answer your questions and help you schedule your
              appointment. Reach out to us through any of the methods below.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info & Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-start mb-4">
                  <div className="mr-3 text-teal-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      {clinicInfo.address.street}, {clinicInfo.address.city},{" "}
                      {clinicInfo.address.state} {clinicInfo.address.zip}
                    </p>
                    <a
                      href={clinicInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline mt-1 inline-block"
                      tabIndex={0}>
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="mr-3 text-teal-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href={`tel:${clinicInfo.contact.phone}`}
                      className="text-gray-600 hover:text-teal-600"
                      tabIndex={0}>
                      {clinicInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="mr-3 text-teal-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${clinicInfo.contact.email}`}
                      className="text-gray-600 hover:text-teal-600"
                      tabIndex={0}>
                      {clinicInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-teal-600 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${clinicInfo.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal-600"
                      tabIndex={0}>
                      Message Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Hours
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md" id="hours">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Monday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.monday}
                  </div>

                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Tuesday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.tuesday}
                  </div>

                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Wednesday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.wednesday}
                  </div>

                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Thursday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.thursday}
                  </div>

                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Friday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.friday}
                  </div>

                  <div className="border-b border-gray-100 pb-2">
                    <span className="font-semibold">Saturday</span>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    {clinicInfo.hours.saturday}
                  </div>

                  <div>
                    <span className="font-semibold">Sunday</span>
                  </div>
                  <div>{clinicInfo.hours.sunday}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Visit Our Clinic"
            subtitle="We're conveniently located and easy to find. Use the map below to get directions to our clinic."
          />

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src={clinicInfo.embedMapUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manifest Dental Clinic Location"></iframe>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to some of our most commonly asked questions."
          />

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 bg-white border border-gray-200 rounded-lg text-left font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-expanded={openFaqIndex === index}
                  tabIndex={0}>
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 border border-t-0 border-gray-200 rounded-b-lg bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-700 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier, more beautiful smile.
              Contact us today to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                as="a"
                href={`tel:${clinicInfo.contact.phone}`}
                className="bg-white !text-teal-700 hover:bg-teal-700 hover:!text-white font-semibold"
                size="lg"
                aria-label="Call us now">
                Call Us Now
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${clinicInfo.contact.whatsapp}?text=Hello! I would like to schedule an appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 font-semibold"
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
        message="Hello! I would like to schedule an appointment."
      />
    </>
  );
};

export default Contact;
