import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../common/TestimonialCard";
import TestimonialModal from "../common/TestimonialModal";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import { motion } from "framer-motion";

const Testimonials = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  // Auto-play functionality
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.start();
  }, [emblaApi]);

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Unified Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-100 z-0"
        aria-hidden="true"></div>
      {/* Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/90 to-primary-50/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16">
          <motion.h2
            variants={slideUp}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
            What <span className="text-primary-600">Our Patients Say</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Read testimonials from our satisfied patients about their experience
            at Manifest Dental Clinic
          </motion.p>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div
              className="overflow-hidden"
              ref={emblaRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-4">
                    <TestimonialCard
                      testimonial={testimonial}
                      onClick={handleTestimonialClick}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="pointer-events-auto bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 -translate-x-1/2"
                aria-label="Previous testimonial">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="pointer-events-auto bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 translate-x-1/2"
                aria-label="Next testimonial">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={!!selectedTestimonial}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Testimonials;
