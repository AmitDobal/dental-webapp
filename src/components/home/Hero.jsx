import { useState, useEffect } from "react";
import Button from "../common/Button";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImageUrl = "/images/services/dental-hero.jpg";

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = heroImageUrl;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <section
      className={`relative ${
        imageLoaded ? "bg-cover bg-center" : "bg-gray-600"
      } text-white py-32 md:py-48`}
      style={imageLoaded ? { backgroundImage: `url(${heroImageUrl})` } : {}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Experience Modern <br />
          Dental Care
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Your journey to a perfect smile starts at Manifest Dental Studio
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            as="a"
            href="#contact"
            size="lg"
            className="bg-teal-600 text-white hover:bg-teal-700 font-medium px-8 py-3"
            aria-label="Schedule an appointment">
            Book Appointment
          </Button>
          <Button
            as="a"
            href="#services"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-800 font-medium px-8 py-3"
            aria-label="View our services">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
