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
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Expert Care",
      description:
        "Our team of experienced dentists provides exceptional care using the latest techniques and technology.",
    },
    {
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Modern Facilities",
      description:
        "Our state-of-the-art clinic is equipped with advanced dental technology for precise diagnoses and treatments.",
    },
    {
      icon: (
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
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Comfortable Environment",
      description:
        "We've created a relaxing atmosphere to make your dental visit as comfortable and stress-free as possible.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
        About <span className="text-teal-600">Our Manifest Dental Clinic</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Dedicated to providing exceptional dental care with a focus on patient
        comfort and satisfaction
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-teal-600 mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose Manifest Dental Clinic?
          </h3>
          <p className="text-gray-700 mb-6">
            At Manifest Dental Clinic, we believe everyone deserves a healthy
            smile. Our team of experienced professionals uses the latest
            technology to provide comprehensive dental care in a comfortable
            environment.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-600 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Comprehensive dental services for all ages</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-600 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Personalized treatment plans</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-teal-600 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Convenient scheduling and transparent pricing</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
          {/* Fallback content for missing images */}
          <div
            className={`w-full h-80 flex items-center justify-center ${
              imageLoaded ? "hidden" : "block"
            }`}>
            <span className="text-gray-500 text-lg">Clinic Image</span>
          </div>
          <img
            src={clinicImageUrl}
            alt="Manifest Dental Clinic"
            className={`w-full h-80 object-cover ${
              imageLoaded ? "block" : "hidden"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
