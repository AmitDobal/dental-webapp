import Button from "./Button";
import Modal from "./Modal";
import { handleBookAppointment } from "../../utils/scrollUtils";
import { useNavigate, useLocation } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  DollarSign,
  Info,
  Check,
} from "lucide-react";

const ServiceModal = ({ service, isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Carousel setup
  const images =
    service && service.images && service.images.length > 0
      ? service.images
      : service && service.image
      ? [service.image]
      : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  if (!isOpen || !service) return null;

  const handleBookAppointmentClick = () => {
    onClose(); // Close the modal first
    // If we're on the services page, navigate to home first
    if (location.pathname === "/services") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        handleBookAppointment({ focusForm: true, focusDelay: 1000 });
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      handleBookAppointment({ focusForm: true, focusDelay: 1000 });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-t-2xl overflow-hidden flex items-center justify-center">
          {/* Carousel for images */}
          {images?.length > 0 ? (
            <div className="relative w-full h-full max-w-3xl mx-auto">
              <div ref={emblaRef} className="overflow-hidden w-full h-full">
                <div className="flex h-full justify-center">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="flex-[0_0_33.33%] w-full h-64 relative flex items-center justify-center px-2">
                      <img
                        src={img}
                        alt={service.title}
                        className="w-full h-full object-contain rounded-t-2xl z-10 border-2 border-white bg-black"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-20"
                    aria-label="Previous image"
                    tabIndex={0}>
                    <ChevronLeft className="w-6 h-6 text-primary-600" />
                  </button>
                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-20"
                    aria-label="Next image"
                    tabIndex={0}>
                    <ChevronRight className="w-6 h-6 text-primary-600" />
                  </button>
                </>
              )}
            </div>
          ) : (
            // Fallback for missing images
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
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
            aria-label="Close modal"
            tabIndex={0}>
            <X className="w-5 h-5 text-primary-600" />
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
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full p-1 mr-2 shadow-lg">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
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
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0 shadow-lg">
                    <Info className="w-3 h-3 text-white" />
                  </div>
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
                    <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-lg">
                      <Check className="w-3 h-3 text-white" />
                    </div>
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
              onClick={handleBookAppointmentClick}
              className="bg-primary-600 text-white hover:bg-primary-700 px-6">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
