import { useState } from "react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { galleryItems, clinicInfo } from "../data";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories from gallery images
  const categories = [
    "all",
    ...new Set(galleryItems.map((image) => image.category)),
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((image) => image.category === selectedCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = "auto";
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 text-white py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Take a look at our state-of-the-art facility, equipment, and the
              beautiful smiles we've created.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Smile Transformations"
            subtitle="Browse through our gallery to see our work and facility."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label={`Filter by ${category}`}
                tabIndex={0}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleImageClick(image)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleImageClick(image);
                  }
                }}
                aria-label={`View ${image.title}`}>
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{image.description}</p>
                  <div className="flex items-center mt-2">
                    <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No images found
              </h3>
              <p className="text-gray-500">
                No images match the selected category. Please try another
                category.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}>
          <div
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-gray-900"
                onClick={closeModal}
                aria-label="Close image"
                tabIndex={0}>
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
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
              <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mt-4">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber={clinicInfo.contact.whatsapp}
        message="Hello! I saw your gallery and I'm interested in your dental services."
      />
    </>
  );
};

export default Gallery;
