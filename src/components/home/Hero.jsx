import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import { handleBookAppointment } from "../../utils/scrollUtils";
import FloatingImage from "../common/FloatingImage";
import ImageModal from "../common/ImageModal";
import { Typewriter } from "react-simple-typewriter";
import Icon from "../common/Icon";
import useImageModal from "../../hooks/useImageModal";
import { clinicInfo } from "../../data";

const HERO_PHRASES = [
  "Your Smile, Our Passion",
  "Expert Dental Care",
  "Confident Smiles Start Here",
  "Brighten Your Smile Today",
  "Gentle Hands, Beautiful Results",
  "Where Every Smile Matters",
  "Transforming Smiles, Transforming Lives",
];

const LeftSection = ({ isMobile }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: isMobile ? -20 : -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        delay: isMobile ? 0.2 : 0.3,
        ease: "easeOut",
      },
    },
  };

  const ratingVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        delay: isMobile ? 0.3 : 0.4,
        ease: "easeOut",
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: isMobile ? i * 0.05 + 0.4 : i * 0.1 + 0.5,
        duration: isMobile ? 0.2 : 0.3,
        type: isMobile ? "tween" : "spring",
        stiffness: 200,
      },
    }),
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 15 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? delay + 0.5 : delay + 0.6,
        duration: isMobile ? 0.2 : 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="text-white">
      {/* Main Heading with Typewriter */}
      <motion.h1
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 min-h-[3rem] sm:min-h-[4rem] lg:min-h-[4.5rem]">
        <span className="text-white block">
          <Typewriter
            words={HERO_PHRASES}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={isMobile ? 80 : 60}
            deleteSpeed={isMobile ? 60 : 40}
            delaySpeed={isMobile ? 1500 : 1800}
          />
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
        Creating healthy, beautiful smiles for life
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={buttonsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button
          onClick={() =>
            handleBookAppointment({ focusForm: true, focusDelay: 1000 })
          }
          size="lg"
          className="bg-white !text-primary-800 hover:bg-white hover:!text-white font-semibold cursor-pointer"
          aria-label="Book an appointment - scroll to contact form">
          Book an Appointment Now
        </Button>
        <Button
          onClick={() => {
            // WhatsApp chat logic (same as WhatsAppButton)
            const phoneNumber = clinicInfo?.phone || "+91 96993 74343";
            const message = `Hello! I'd like to schedule an appointment at ${clinicInfo.name}. Please let me know your availability.`;
            const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
            const url = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
              message
            )}`;
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-primary-800 cursor-pointer flex items-center gap-2"
          aria-label="Connect with us on WhatsApp">
          Connect Now
          <Icon name="whatsapp" className="w-10 h-10 text-green-400" />
        </Button>
      </motion.div>

      {/* Rating Section */}
      <motion.div
        variants={ratingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        className="mt-8 sm:mt-12 flex items-center gap-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              variants={starVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
        <div>
          <motion.p
            variants={textFadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-base sm:text-lg font-semibold">
            5.0
          </motion.p>
          <motion.p
            variants={textFadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="text-xs sm:text-sm text-primary-200">
            Based On 50+ Reviews
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

const RightSection = ({ isMobile, onImageClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: isMobile ? 1 : 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: isMobile ? 0.4 : 0.8 }}
    className="relative w-full flex justify-center items-center mt-6 sm:mt-8 lg:mt-0 min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      {/* Central Big Image */}
      <div
        className="relative z-10 w-48 h-56 sm:w-56 sm:h-72 md:w-72 md:h-80 lg:w-96 lg:h-[30rem] bg-gradient-to-br from-primary-700 to-primary-600 rounded-2xl shadow-2xl border-4 border-white overflow-hidden flex items-center justify-center mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() =>
          onImageClick(
            "/images/hero/dental-image1.jpeg",
            "Main dental procedure"
          )
        }>
        <img
          src="/images/hero/dental-image1.jpeg"
          alt="Main dental procedure"
          className="w-full h-full object-cover rounded-2xl"
          loading={isMobile ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {/* Floating Card 1 - Top Left */}
      <FloatingImage
        src="/images/hero/dental-image2.jpeg"
        alt="Floating dental 1"
        className="absolute left-1 top-1 sm:left-2 sm:top-2 w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 from-primary-600 to-primary-400 cursor-pointer hover:scale-110 transition-transform duration-300"
        animate={
          isMobile
            ? { y: [0, -10, 0], x: [0, -8, 0] }
            : { y: [0, -20, 0], x: [0, -15, 0] }
        }
        transition={
          isMobile
            ? {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }
            : {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }
        }
        zIndex="z-10"
        onClick={() =>
          onImageClick(
            "/images/hero/dental-image2.jpeg",
            "Dental care procedure"
          )
        }
      />
      {/* Floating Card 2 - Top Right */}
      <FloatingImage
        src="/images/hero/dental-image3.jpeg"
        alt="Floating dental 2"
        className="absolute right-1 top-4 sm:right-2 sm:top-6 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 from-primary-500 to-primary-300 cursor-pointer hover:scale-110 transition-transform duration-300"
        animate={
          isMobile
            ? { y: [0, -10, 0], x: [0, 10, 0] }
            : { y: [0, -20, 0], x: [0, 20, 0] }
        }
        transition={
          isMobile
            ? {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }
            : {
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }
        }
        zIndex="z-10"
        onClick={() =>
          onImageClick("/images/hero/dental-image3.jpeg", "Dental treatment")
        }
      />
      {/* Floating Card 3 - Bottom Left */}
      <FloatingImage
        src="/images/hero/dental-image4.jpeg"
        alt="Floating dental 3"
        className="absolute left-4 sm:left-6 md:left-8 bottom-1 sm:bottom-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 from-primary-800 to-primary-500 cursor-pointer hover:scale-110 transition-transform duration-300"
        animate={
          isMobile
            ? { y: [0, 12, 0], x: [0, -5, 0] }
            : { y: [0, 25, 0], x: [0, -10, 0] }
        }
        transition={
          isMobile
            ? {
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }
            : {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
        }
        zIndex="z-10"
        onClick={() =>
          onImageClick("/images/hero/dental-image4.jpeg", "Dental consultation")
        }
      />
      {/* Floating Card 4 - Bottom Right */}
      <FloatingImage
        src="/images/hero/dental-image5.jpeg"
        alt="Floating dental 4"
        className="absolute right-4 sm:right-6 md:right-0 bottom-2 sm:bottom-4 w-24 h-16 sm:w-20 sm:h-20 md:w-36 md:h-30 from-primary-400 to-primary-200 cursor-pointer hover:scale-110 transition-transform duration-300"
        animate={
          isMobile
            ? { y: [0, 10, 0], x: [0, 8, 0] }
            : { y: [0, 20, 0], x: [0, 15, 0] }
        }
        transition={
          isMobile
            ? {
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }
            : {
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }
        }
        zIndex="z-10"
        onClick={() =>
          onImageClick("/images/hero/dental-image5.jpeg", "Dental examination")
        }
      />
    </div>
  </motion.div>
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { imageModal, isModalOpen, openImageModal, closeImageModal } =
    useImageModal();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = (image, alt) => {
    openImageModal(image, alt);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
        aria-hidden="true"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
          <LeftSection isMobile={isMobile} />
          <RightSection isMobile={isMobile} onImageClick={handleImageClick} />
        </div>
      </div>
      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeImageModal}
          image={imageModal?.image}
          alt={imageModal?.alt}
        />
      )}
    </div>
  );
};

export default Hero;
