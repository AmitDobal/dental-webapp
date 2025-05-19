import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative bg-gray-500 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Transform Your Smile with Premium Dental Care
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Experience the highest standard of dental care in a comfortable
          environment
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            as="a"
            href="#contact"
            size="lg"
            className="bg-teal-600 text-white hover:bg-teal-700 font-semibold"
            aria-label="Schedule an appointment">
            Call us now
          </Button>
          <Button
            as="a"
            href="#services"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-800 font-semibold"
            aria-label="View our services">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
