import { useState } from "react";

const TransformationsSection = ({ transformations }) => {
  const [selectedTransformation, setSelectedTransformation] = useState(null);

  const handleImageClick = (transformation) => {
    setSelectedTransformation(transformation);
  };

  const closeModal = () => {
    setSelectedTransformation(null);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Smile <span className="text-teal-600">Transformations</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          See the amazing results we've achieved for our patients
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleImageClick(item)}>
              <div className="relative h-48 bg-gray-200">
                {/* Fallback for missing images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
                  <span>{item.title}</span>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transformation Modal */}
      {selectedTransformation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={closeModal}>
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}>
            <div className="relative p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Close modal">
                <svg
                  className="w-5 h-5 text-gray-700"
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

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedTransformation.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Before
                  </h3>
                  <div className="bg-gray-200 rounded overflow-hidden h-60">
                    <img
                      src={
                        selectedTransformation.beforeImage ||
                        selectedTransformation.image
                      }
                      alt={`Before: ${selectedTransformation.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    After
                  </h3>
                  <div className="bg-gray-200 rounded overflow-hidden h-60">
                    <img
                      src={
                        selectedTransformation.afterImage ||
                        selectedTransformation.image
                      }
                      alt={`After: ${selectedTransformation.title}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {selectedTransformation.fullDescription ||
                  selectedTransformation.description}
              </p>

              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                  onClick={closeModal}>
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransformationsSection;
