import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.16, ease: "easeOut" } },
};

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            aria-hidden="true"
            onClick={onClose}
          />
          {/* Modal content */}
          <motion.div
            ref={modalRef}
            className="relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-primary-100"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
