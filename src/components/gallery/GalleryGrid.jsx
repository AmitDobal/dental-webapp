import { useState } from "react";

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  // Show a subset of images for the main view
  const featuredImages = images.slice(0, 6);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Smile <span className="text-teal-600">Transformations</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        See the amazing results we've achieved for our patients
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 bg-gray-200"
            onClick={() => handleImageClick(image)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleImageClick(image);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${image.title}`}>
            {/* Fallback for missing images */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              {image.title}
            </div>
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover relative z-10"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 z-20 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors"
          onClick={() => (window.location.href = "#gallery")}>
          View Full Gallery
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview">
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden absolute inset-0 bg-gray-200 items-center justify-center text-gray-500 text-xl">
              {selectedImage.title}
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={handleCloseModal}
                className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
                aria-label="Close image preview">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
