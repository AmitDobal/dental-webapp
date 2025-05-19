import { useState } from "react";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const clinicImageUrl = "/images/gallery/office.jpg";

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const features = [
    {
      title: "Expert Dentists",
      description:
        "Our team of experienced dentists provides exceptional care using the latest techniques and technology.",
      icon: (
        <svg
          className="w-10 h-10 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Modern Technology",
      description:
        "Our state-of-the-art clinic is equipped with advanced dental technology for precise diagnoses and treatments.",
      icon: (
        <svg
          className="w-10 h-10 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Comfort First",
      description:
        "We've created a relaxing atmosphere to make your dental visit as comfortable and stress-free as possible.",
      icon: (
        <svg
          className="w-10 h-10 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
        About <span className="text-teal-600">Our Dental Studio</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Dedicated to providing exceptional dental care with a focus on patient
        comfort and satisfaction
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Clinic Image */}
        <div className="order-2 md:order-1">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-full">
            {/* Fallback content for missing images */}
            <div
              className={`w-full h-full flex items-center justify-center ${
                imageLoaded ? "hidden" : "block"
              }`}>
              <span className="text-gray-500 text-lg">Clinic Image</span>
            </div>
            <img
              src={clinicImageUrl}
              alt="Manifest Dental Clinic"
              className={`w-full h-full object-cover ${
                imageLoaded ? "block" : "hidden"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        </div>

        {/* About Text */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">
            Welcome to Manifest Dental Studio
          </h3>
          <p className="text-gray-700 mb-6">
            At Manifest Dental Studio, we believe everyone deserves a healthy
            smile. Our experienced team uses the latest technology to provide
            comprehensive dental care in a comfortable environment. From routine
            check-ups to advanced cosmetic procedures, we're committed to
            helping you achieve and maintain optimal oral health.
          </p>
          <a
            href="#services"
            className="text-teal-600 font-medium hover:text-teal-800 inline-flex items-center">
            Explore our services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-teal-600 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
