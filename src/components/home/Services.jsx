import ServiceCard from "../common/ServiceCard";

const Services = ({ services }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Our <span className="text-teal-600">Premium Services</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Comprehensive dental care tailored to your specific needs with a focus
        on comfort and quality
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.shortDescription}
            image={service.image}
            altText={`${service.title} service image`}
            link={`#services-${service.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
