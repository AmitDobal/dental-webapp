import { motion } from "framer-motion";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryImages } from "../data";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

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
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-primary-50">
      <Header />
      <main className="flex-1">
        <div className="relative w-full bg-gradient-to-b from-primary-600 to-primary-700 overflow-hidden py-20">
          <div
            className="absolute inset-0 w-full h-full bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-20 z-0"
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
            <GalleryGrid images={galleryImages} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
