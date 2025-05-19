/**
 * Utility function to create placeholder images
 * @param {number} width - Width of the image
 * @param {number} height - Height of the image
 * @param {string} text - Text to display on the placeholder
 * @returns {string} - URL for the placeholder image
 */
export const createPlaceholderImage = (width, height, text) => {
  return `http://placehold.co/${width}x${height}?text=${encodeURIComponent(
    text
  )}`;
};

// Service images
export const serviceImages = {
  cleaning: createPlaceholderImage(600, 400, "Teeth Cleaning"),
  rootCanal: createPlaceholderImage(600, 400, "Root Canal"),
  whitening: createPlaceholderImage(600, 400, "Teeth Whitening"),
  implants: createPlaceholderImage(600, 400, "Dental Implants"),
  orthodontics: createPlaceholderImage(600, 400, "Orthodontics"),
  cosmetic: createPlaceholderImage(600, 400, "Cosmetic Dentistry"),
};

// Gallery images
export const galleryImages = {
  treatmentRoom: createPlaceholderImage(800, 600, "Treatment Room"),
  dentalImplant: createPlaceholderImage(800, 600, "Dental Implant"),
  whiteningResults: createPlaceholderImage(800, 600, "Whitening Results"),
  reception: createPlaceholderImage(800, 600, "Reception"),
  smileMakeover: createPlaceholderImage(800, 600, "Smile Makeover"),
  equipment: createPlaceholderImage(800, 600, "Equipment"),
};

// Avatar images
export const avatarImages = {
  patient1: createPlaceholderImage(200, 200, "Patient 1"),
  patient2: createPlaceholderImage(200, 200, "Patient 2"),
  patient3: createPlaceholderImage(200, 200, "Patient 3"),
};
