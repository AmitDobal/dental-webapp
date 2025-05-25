import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clinicInfo } from "../../data";

const ClickableMap = ({
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
  const [hasError, setHasError] = useState(false);
  const [currentEmbedUrl, setCurrentEmbedUrl] = useState(embedUrl);
  const [retryCount, setRetryCount] = useState(0);

  // Fallback URLs in order of preference
  const fallbackUrls = [
    embedUrl, // Primary URL (clinic name)
    clinicInfo.map.embedUrlCoords, // Coordinates with clinic name label
    `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${
      clinicInfo.map.coordinates.lat
    },${clinicInfo.map.coordinates.lng}+(${encodeURIComponent(
      clinicInfo.name
    )})&t=&z=15&ie=UTF8&iwloc=&output=embed`, // Coordinates with encoded name
  ];

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

  const handleIframeError = () => {
    console.log(`Map load failed for URL: ${currentEmbedUrl}`);

    // Try next fallback URL
    if (retryCount < fallbackUrls.length - 1) {
      const nextRetry = retryCount + 1;
      setRetryCount(nextRetry);
      setCurrentEmbedUrl(fallbackUrls[nextRetry]);
      setIsLoaded(false);
      setHasError(false);
      console.log(
        `Trying fallback URL ${nextRetry}: ${fallbackUrls[nextRetry]}`
      );
    } else {
      // All fallbacks failed
      setHasError(true);
      setIsLoaded(true);
      console.log("All map URLs failed, showing error state");
    }
  };

  const handleIframeLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    console.log(`Map loaded successfully with URL: ${currentEmbedUrl}`);
  };

  // Reset when embedUrl prop changes
  useEffect(() => {
    setCurrentEmbedUrl(embedUrl);
    setRetryCount(0);
    setIsLoaded(false);
    setHasError(false);
  }, [embedUrl]);

  return (
    <div className={`relative group ${className}`}>
      {/* Map Container */}
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
              {retryCount > 0 && (
                <p className="text-primary-500 text-xs mt-1">
                  Trying alternative source...
                </p>
              )}
            </div>
          </div>
        )}

        {/* Error Fallback */}
        {hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center z-10">
            <div className="text-center p-6">
              <svg
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
              </svg>
              <h3 className="text-primary-700 font-semibold mb-2">
                Map Unavailable
              </h3>
              <p className="text-primary-600 text-sm mb-2">
                Click to view our location
              </p>
              <p className="text-primary-700 font-medium text-sm mb-4">
                {clinicInfo.name}
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary-600">
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
                <span className="text-sm font-medium">Open in Google Maps</span>
              </div>
            </div>
          </div>
        )}

        {/* Embedded Map */}
        {!hasError && (
          <iframe
            key={currentEmbedUrl} // Force re-render when URL changes
            src={currentEmbedUrl}
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
        )}

        {/* Click Overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}>
          {/* Click Hint */}
          {showClickHint && !hasError && (
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

      {/* Action Buttons (Optional) */}
      <div className="mt-3 flex space-x-2">
        <button
          onClick={() => window.open(placeUrl, "_blank", "noopener,noreferrer")}
          className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2">
          <svg
            className="w-4 h-4"
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
          <span>View Location</span>
        </button>

        <button
          onClick={() =>
            window.open(directionsUrl, "_blank", "noopener,noreferrer")
          }
          className="flex-1 bg-white border border-primary-600 text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <span>Get Directions</span>
        </button>
      </div>
    </div>
  );
};

export default ClickableMap;
