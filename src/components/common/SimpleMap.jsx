import { useState } from "react";
import { motion } from "framer-motion";

const SimpleMap = ({
  src,
  width = "100%",
  height = "450",
  title = "Location Map",
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Handle height styling
  const isFullHeight = height === "100%";
  const containerClasses = isFullHeight ? "h-full min-h-[450px]" : "";
  const mapContainerClasses = isFullHeight ? "h-full" : "";
  const mapContainerStyle = isFullHeight ? {} : { height: height };

  return (
    <div className={`relative ${className} ${containerClasses}`}>
      {/* Map Container */}
      <div
        className={`relative w-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${mapContainerClasses}`}
        style={mapContainerStyle}>
        {/* Loading Placeholder */}
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center z-10">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full mx-auto mb-3"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-600 text-sm font-medium">
                Loading map...
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Error Fallback */}
        {hasError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center z-10">
            <div className="text-center p-6">
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-12 h-12 text-primary-400 mx-auto mb-3"
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
              </motion.svg>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-700 font-semibold mb-2">
                Map Unavailable
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary-600 text-sm">
                Unable to load the map at this time
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Embedded Map */}
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          src={src}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full h-full"
        />

        {/* Subtle border overlay for better integration */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-black/5 pointer-events-none" />
      </div>
    </div>
  );
};

export default SimpleMap;
