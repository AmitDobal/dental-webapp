import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../common/TestimonialCard";
import TestimonialModal from "../common/TestimonialModal";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const navButtonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

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
    <div className="relative w-full min-h-[80vh] bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Unified Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-900/90 to-primary-800/90 z-10"></div>

      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16">
          <motion.div variants={headerVariants} className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg border-2 border-amber-300/50">
                <Star className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Patients Say
            </h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Real experiences from our satisfied patients who have transformed
              their smiles with us.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-6xl mx-auto">
            <div
              className="overflow-hidden"
              ref={emblaRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}>
                    <TestimonialCard
                      testimonial={testimonial}
                      onClick={handleTestimonialClick}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <motion.button
                onClick={() => emblaApi?.scrollPrev()}
                variants={navButtonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                className="pointer-events-auto bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 -translate-x-1/2"
                aria-label="Previous testimonial">
                <ChevronLeft className="w-6 h-6 text-primary-600" />
              </motion.button>
              <motion.button
                onClick={() => emblaApi?.scrollNext()}
                variants={navButtonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                className="pointer-events-auto bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 translate-x-1/2"
                aria-label="Next testimonial">
                <ChevronRight className="w-6 h-6 text-primary-600" />
              </motion.button>
            </div>
          </motion.div>
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
