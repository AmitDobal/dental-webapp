import { motion } from "framer-motion";
import { clinicInfo } from "../../data";
import Icon from "./Icon";

const WhatsAppButton = () => {
  // Use actual clinic phone number from updated data
  const phoneNumber = clinicInfo?.phone || "+91 96993 74343";
  const message = `Hello! I'd like to schedule an appointment at ${clinicInfo.name}. Please let me know your availability.`;

  const handleClick = () => {
    // Clean phone number (remove all non-digits)
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    const url = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 cursor-pointer text-white p-1 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label={`Contact ${clinicInfo?.name || "us"} on WhatsApp`}
      title="Chat with us on WhatsApp">
      <Icon
        name="whatsapp"
        className="w-12 h-12 rounded-full text-center flex items-center justify-center"
      />
    </button>
  );
};

export default WhatsAppButton;
