import { motion } from "framer-motion";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryImages } from "../data";
import { useLocation } from "react-router-dom";
import SEO from "../components/common/SEO";
import { clinicInfo } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const GalleryPage = () => {
  const location = useLocation();
  return (
    <>
      <SEO
        title="Dental Gallery - Before & After Transformations"
        description={`View our dental transformation gallery showcasing real patient results from ${clinicInfo.doctor.name} at Manifest Dental Studio in Kharghar, Navi Mumbai. See before and after photos of cosmetic dentistry, dental implants, and smile makeovers.`}
        keywords={`dental gallery, before after dental, smile transformations, cosmetic dentistry results, dental implants gallery, teeth whitening results, Dr. Manasi Surwade, Manifest Dental Studio, Kharghar dental clinic, dental transformation photos`}
        image="/images/gallery/1.jpeg"
        url="https://manifestdental.com/gallery"
        type="website"
        pageType="gallery"
      />
      <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="relative w-full bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden py-20">
          <div
            className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-10 z-0"
            aria-hidden="true"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Smile <span className="text-primary-200">Gallery</span>
              </h1>
              <p className="text-primary-100 text-lg sm:text-xl mb-8 leading-relaxed">
                Explore our gallery of real patient results and clinic moments.
                Images are a mix of different sizes and shapes for a dynamic
                showcase.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <GalleryGrid key={location.key} images={galleryImages} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
