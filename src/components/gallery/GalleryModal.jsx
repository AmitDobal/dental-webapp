import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryModal = ({ images, selectedIndex, onClose, setSelectedIndex }) => {
  const modalRef = useRef();
  const image = images[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const prevImage = () => {
    setSelectedIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };
  const nextImage = () => {
    setSelectedIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ background: "rgba(0,0,0,0.7)" }}
        onClick={onClose}>
        <motion.div
          ref={modalRef}
          className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full flex flex-col items-center"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Close modal"
            tabIndex={0}>
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center w-full h-full min-h-[60vh] p-6">
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              aria-label="Previous image"
              tabIndex={0}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg"
              draggable={false}
            />
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
              aria-label="Next image"
              tabIndex={0}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="text-center p-2 text-gray-700 text-sm">
            {image.alt} ({selectedIndex + 1} / {images.length})
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
