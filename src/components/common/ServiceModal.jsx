import Button from "./Button";
import Modal from "./Modal";

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 rounded-t-2xl overflow-hidden flex items-center justify-center">
          {/* Fallback for missing images */}
          <div className="absolute inset-0 flex items-center justify-center text-primary-400 z-0">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span className="text-lg font-medium">{service.title}</span>
            </div>
          </div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover relative z-10"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
          aria-label="Close modal"
          tabIndex={0}>
          <svg
            className="w-5 h-5 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">
          {service.title}
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {service.longDescription}
        </p>

        {/* Pricing Section - More compact and aesthetic */}
        {service.pricing && (
          <div className="mb-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-6 border border-primary-200/50">
            <h3 className="text-lg font-semibold text-primary-700 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              Treatment Pricing
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.pricing.treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-primary-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                      {treatment.name}
                    </h4>
                    <span className="text-primary-600 font-bold text-base ml-2">
                      {treatment.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-primary-200/50">
              <p className="text-primary-800 text-sm font-medium flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                All procedures include consultation, follow-up care, and use
                high-quality materials with sterilization protocols.
              </p>
            </div>
          </div>
        )}

        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary-700 mb-4">
              Services Included:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0"
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
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-primary-200 text-primary-700 hover:bg-primary-50 px-6">
            Close
          </Button>
          <Button
            to="#contact"
            className="bg-primary-600 text-white hover:bg-primary-700 px-6"
            onClick={onClose}>
            Book Appointment
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
