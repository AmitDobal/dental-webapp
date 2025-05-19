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
      title: "Expert Care",
      description:
        "Our team of experienced dentists provides exceptional care using the latest techniques and technology.",
    },
    {
      title: "Modern Facilities",
      description:
        "Our state-of-the-art clinic is equipped with advanced dental technology for precise diagnoses and treatments.",
    },
    {
      title: "Comfortable",
      description:
        "We've created a relaxing atmosphere to make your dental visit as comfortable and stress-free as possible.",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
        About <span className="text-teal-600">Our Manifest Dental Clinic</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Dedicated to providing exceptional dental care with a focus on patient
        comfort and satisfaction
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Clinic Image */}
        <div className="md:col-span-1">
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

        {/* Features */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg text-teal-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-700">
              At Manifest Dental Clinic, we believe everyone deserves a healthy
              smile. Our experienced team uses the latest technology to provide
              comprehensive dental care in a comfortable environment. From
              routine check-ups to advanced cosmetic procedures, we're committed
              to helping you achieve and maintain optimal oral health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
