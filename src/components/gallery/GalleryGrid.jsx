import { useState } from "react";
import { useLocation } from "react-router-dom";
import GalleryModal from "./GalleryModal";

const GalleryGrid = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (idx) => {
    setSelectedIndex(idx);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <GalleryImageCard
            key={i}
            image={img}
            index={i}
            onClick={handleImageClick}
          />
        ))}
      </div>
      {modalOpen && (
        <GalleryModal
          images={images}
          selectedIndex={selectedIndex}
          onClose={handleClose}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </>
  );
};

const GalleryImageCard = ({ image, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const aspect = image.type === "square" ? "aspect-square" : "aspect-[4/3]";
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/20 ${aspect} relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary-200/40`}
      onClick={() => onClick(index)}
      tabIndex={0}
      aria-label={image.alt}
      role="button"
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick(index)}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-primary-200/20" />
        </div>
      )}
      <img
        key={image.src + location.key}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default GalleryGrid;
