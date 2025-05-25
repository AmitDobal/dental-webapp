import { useState } from "react";
import { motion } from "framer-motion";

const SimpleClickableMap = ({
  embedUrl,
  directionsUrl,
  placeUrl,
  title = "Location",
  width = "100%",
  height = "400",
  className = "",
  showClickHint = true,
  openInNewTab = true,
  preferDirections = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMapClick = () => {
    const targetUrl = preferDirections ? directionsUrl : placeUrl;
    if (openInNewTab) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = targetUrl;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMapClick();
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div
        className="relative w-full rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl"
        onClick={handleMapClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        role="button"
        aria-label={`Open ${title} in Google Maps`}>
        {/* Loading Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
              <p className="text-primary-600 text-sm font-medium">
                Loading map...
              </p>
            </div>
          </div>
        )}

        {/* Embedded Map */}
        <iframe
          src={embedUrl}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full"
        />

        {/* Click Overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}>
          {/* Click Hint */}
          {showClickHint && (
            <motion.div
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-primary-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.2, type: "spring", stiffness: 200 }}>
              <div className="flex items-center space-x-2 text-primary-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium text-sm">
                  {preferDirections ? "Get Directions" : "View on Google Maps"}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Focus Ring */}
        <div className="absolute inset-0 rounded-lg ring-2 ring-primary-500 ring-opacity-0 group-focus:ring-opacity-50 transition-all duration-200 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SimpleClickableMap;
