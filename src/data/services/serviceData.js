import { serviceImages } from "../images/placeholders";

/**
 * Data for dental services offered by the clinic
 * Each service includes id, title, descriptions, features, and pricing
 */
export const services = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    shortDescription:
      "Professional teeth cleaning to remove plaque and tartar buildup.",
    fullDescription:
      "Our professional teeth cleaning service removes plaque and tartar buildup that regular brushing and flossing cannot reach. This preventive treatment helps maintain good oral health, prevent gum disease, and keep your smile bright and healthy.",
    image: serviceImages.cleaning,
    features: [
      "Complete removal of plaque and tartar",
      "Polishing to remove surface stains",
      "Fluoride treatment to strengthen enamel",
      "Personalized oral hygiene instructions",
      "Recommended every 6 months",
    ],
    price: "$95",
  },
  {
    id: "root-canal",
    title: "Root Canal",
    shortDescription:
      "Pain-free root canal therapy to save your natural tooth.",
    fullDescription:
      "Our advanced root canal therapy removes infected pulp from inside your tooth, relieving pain and saving your natural tooth from extraction. Using modern techniques and anesthesia, we ensure a comfortable experience with minimal discomfort.",
    image: serviceImages.rootCanal,
    features: [
      "Advanced diagnostic imaging",
      "Comfortable local anesthesia",
      "Complete removal of infected pulp",
      "Thorough cleaning and disinfection",
      "Permanent filling and crown options",
    ],
    price: "Starting at $850",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Get a brighter, whiter smile with our professional whitening treatments.",
    fullDescription:
      "Achieve a dramatically whiter smile with our professional teeth whitening treatments. We offer both in-office and take-home options to suit your lifestyle and budget. Our treatments are safe, effective, and provide longer-lasting results than over-the-counter products.",
    image: serviceImages.whitening,
    features: [
      "In-office treatment in just 60 minutes",
      "Take-home custom whitening trays",
      "Results up to 8 shades whiter",
      "Safe for enamel and dental work",
      "Long-lasting results",
    ],
    price: "Starting at $350",
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent tooth replacement with natural-looking dental implants.",
    fullDescription:
      "Dental implants are the gold standard for replacing missing teeth. These titanium posts are surgically placed in your jawbone to act as artificial tooth roots, providing a strong foundation for permanent or removable replacement teeth that look, feel, and function like natural teeth.",
    image: serviceImages.implants,
    features: [
      "Titanium posts that fuse with jawbone",
      "Custom-made crowns that match natural teeth",
      "Preserves facial structure and prevents bone loss",
      "Over 98% success rate",
      "Can last a lifetime with proper care",
    ],
    price: "Starting at $3,000",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    shortDescription:
      "Straighten your teeth with modern orthodontic treatments.",
    fullDescription:
      "We offer a range of orthodontic treatments to straighten teeth and correct bite issues, including traditional braces, clear aligners, and more. Our customized treatment plans are designed to give you the perfect smile with minimal disruption to your lifestyle.",
    image: serviceImages.orthodontics,
    features: [
      "Traditional metal braces",
      "Clear ceramic braces",
      "Invisible aligner systems",
      "Customized treatment plans",
      "Flexible payment options",
    ],
    price: "Starting at $4,500",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Transform your smile with our comprehensive cosmetic services.",
    fullDescription:
      "Our cosmetic dentistry services can transform your smile and boost your confidence. From simple treatments like teeth whitening to complete smile makeovers, we offer a range of options to help you achieve the beautiful, natural-looking smile you deserve.",
    image: serviceImages.cosmetic,
    features: [
      "Porcelain veneers",
      "Dental bonding",
      "Teeth whitening",
      "Tooth-colored fillings",
      "Complete smile makeovers",
    ],
    price: "Consultation required",
  },
];
