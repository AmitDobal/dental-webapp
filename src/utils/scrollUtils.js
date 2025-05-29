import { clinicInfo } from "../data/clinicInfo";

/**
 * Utility functions for smooth scrolling and navigation
 */

/**
 * Smoothly scrolls to a section by its ID
 * @param {string} sectionId - The ID of the target section
 * @param {Object} options - Scroll options
 * @param {string} options.behavior - Scroll behavior ('smooth', 'auto', 'instant')
 * @param {string} options.block - Vertical alignment ('start', 'center', 'end', 'nearest')
 * @param {number} options.offset - Additional offset in pixels
 */
export const scrollToSection = (sectionId, options = {}) => {
  const { behavior = "smooth", block = "start", offset = 0 } = options;

  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with ID "${sectionId}" not found`);
    return;
  }

  // If offset is provided, calculate the position manually
  if (offset !== 0) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
  } else {
    element.scrollIntoView({
      behavior,
      block,
    });
  }
};

/**
 * Scrolls to the top of the page
 * @param {Object} options - Scroll options
 */
export const scrollToTop = (options = {}) => {
  const { behavior = "smooth" } = options;

  window.scrollTo({
    top: 0,
    behavior,
  });
};

/**
 * Handles appointment booking action
 * Scrolls to contact section and optionally focuses on the form
 * @param {Object} options - Options for the booking action
 * @param {boolean} options.focusForm - Whether to focus on the contact form
 * @param {number} options.focusDelay - Delay before focusing (in ms)
 */
export const handleBookAppointment = (options = {}) => {
  const { focusForm = true, focusDelay = 1000 } = options;

  scrollToSection("contact");

  if (focusForm) {
    setTimeout(() => {
      const contactForm = document.querySelector(
        '#contact form input[type="text"], #contact form input[name="name"]'
      );
      if (contactForm) {
        contactForm.focus();
      }
    }, focusDelay);
  }
};

/**
 * Handles connect now action with multiple options
 * @param {Object} options - Connection options
 * @param {string} options.method - Connection method ('scroll', 'whatsapp', 'phone')
 * @param {string} options.phoneNumber - Phone number for direct calling
 * @param {string} options.whatsappNumber - WhatsApp number
 * @param {string} options.whatsappMessage - Default WhatsApp message
 */
export const handleConnectNow = (options = {}) => {
  const {
    method = "scroll",
    phoneNumber = clinicInfo?.phone || "",
    whatsappNumber = clinicInfo?.phone || "",
    whatsappMessage = `Hi! I'm interested in dental services at ${
      clinicInfo?.name || "your clinic"
    }.`,
  } = options;

  switch (method) {
    case "whatsapp":
      if (whatsappNumber) {
        const cleanNumber = whatsappNumber.replace(/\D/g, "");
        const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;
        window.open(url, "_blank");
      } else {
        console.warn("WhatsApp number not provided");
        scrollToSection("contact");
      }
      break;

    case "phone":
      if (phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        console.warn("Phone number not provided");
        scrollToSection("contact");
      }
      break;

    case "scroll":
    default:
      scrollToSection("contact");
      break;
  }
};

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} threshold - Percentage of element that should be visible (0-1)
 * @returns {boolean} - Whether the element is in viewport
 */
export const isElementInViewport = (element, threshold = 0.1) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

  return visibleHeight / elementHeight >= threshold;
};

/**
 * Adds smooth scroll behavior to all anchor links on the page
 * Call this in useEffect to enable smooth scrolling for hash links
 */
export const enableSmoothScrollForAnchors = () => {
  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", handleAnchorClick);
  });

  // Return cleanup function
  return () => {
    anchors.forEach((anchor) => {
      anchor.removeEventListener("click", handleAnchorClick);
    });
  };
};

/**
 * Handles mobile navigation scrolling with optimized settings
 * @param {string} sectionId - The ID of the target section
 * @param {Function} closeMenu - Function to close the mobile menu
 * @param {Object} options - Additional scroll options
 */
export const handleMobileNavigation = (sectionId, closeMenu, options = {}) => {
  const { delay = 100, offset = -80 } = options;

  // Close mobile menu first
  if (closeMenu && typeof closeMenu === "function") {
    closeMenu();
  }

  // Add delay to allow menu close animation to complete
  setTimeout(() => {
    scrollToSection(sectionId, {
      behavior: "smooth",
      block: "start",
      offset: offset, // Account for fixed header height
    });
  }, delay);
};

/**
 * Handles anchor navigation across pages (SPA)
 * Navigates to home if not already there, then scrolls to the anchor
 * @param {Event} e - The click event
 * @param {string} href - The anchor href (e.g., #contact)
 * @param {object} options - { navigate, location, offset, delay }
 */
export const handleAnchorNavigation = (
  e,
  href,
  { navigate, location, offset = -80, delay = 100 } = {}
) => {
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  const sectionId = href.substring(1);
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      scrollToSection(sectionId, {
        behavior: "smooth",
        block: "start",
        offset,
      });
    }, delay);
    return;
  }
  scrollToSection(sectionId, { behavior: "smooth", block: "start", offset });
};
