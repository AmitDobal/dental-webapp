import { useState } from "react";

const GalleryGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img, i) => (
        <GalleryImageCard key={i} image={img} />
      ))}
    </div>
  );
};

const GalleryImageCard = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  const aspect = image.type === "square" ? "aspect-square" : "aspect-[4/3]";
  return (
    <div
      className={`bg-gray-100 rounded-lg overflow-hidden shadow-md ${aspect} relative`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
        </div>
      )}
      <img
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
