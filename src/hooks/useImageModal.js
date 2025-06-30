import { useState } from "react";

const useImageModal = () => {
  const [imageModal, setImageModal] = useState(null);

  const openImageModal = (image, alt, title) => {
    setImageModal({ image, alt, title });
  };

  const closeImageModal = () => {
    setImageModal(null);
  };

  const isModalOpen = !!imageModal;

  return {
    imageModal,
    isModalOpen,
    openImageModal,
    closeImageModal,
  };
};

export default useImageModal;
