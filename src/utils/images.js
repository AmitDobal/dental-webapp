/**
 * Returns the public path for an image in the /public/images directory.
 * @param {string} imageName - The image filename (e.g., "dental-image1.jpeg")
 * @returns {string} The public path to the image.
 */
export const getImagePath = (imageName) => `/images/${imageName}`;
