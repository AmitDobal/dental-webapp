// Instead of importing actual images (which don't exist yet),
// we'll use placeholder images from a service
const createPlaceholderImage = (width, height, text) => {
  return `http://placehold.co/${width}x${height}?text=${encodeURIComponent(
    text
  )}`;
};

// Service images
const serviceImg1 = createPlaceholderImage(600, 400, "Teeth Cleaning");
const serviceImg2 = createPlaceholderImage(600, 400, "Root Canal");
const serviceImg3 = createPlaceholderImage(600, 400, "Teeth Whitening");
const serviceImg4 = createPlaceholderImage(600, 400, "Dental Implants");
const serviceImg5 = createPlaceholderImage(600, 400, "Orthodontics");
const serviceImg6 = createPlaceholderImage(600, 400, "Cosmetic Dentistry");

// Gallery images
const galleryImg1 = createPlaceholderImage(800, 600, "Treatment Room");
const galleryImg2 = createPlaceholderImage(800, 600, "Dental Implant");
const galleryImg3 = createPlaceholderImage(800, 600, "Whitening Results");
const galleryImg4 = createPlaceholderImage(800, 600, "Reception");
const galleryImg5 = createPlaceholderImage(800, 600, "Smile Makeover");
const galleryImg6 = createPlaceholderImage(800, 600, "Equipment");

// Avatar images
const avatar1 = createPlaceholderImage(200, 200, "Patient 1");
const avatar2 = createPlaceholderImage(200, 200, "Patient 2");
const avatar3 = createPlaceholderImage(200, 200, "Patient 3");

// Services data
export const services = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    shortDescription:
      "Professional teeth cleaning to remove plaque and tartar buildup.",
    fullDescription:
      "Our professional teeth cleaning service removes plaque and tartar buildup that regular brushing and flossing cannot reach. This preventive treatment helps maintain good oral health, prevent gum disease, and keep your smile bright and healthy.",
    image: serviceImg1,
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
    image: serviceImg2,
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
    image: serviceImg3,
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
    image: serviceImg4,
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
    image: serviceImg5,
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
    image: serviceImg6,
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

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Regular Patient",
    quote:
      "I had severe dental anxiety before coming to Manifest Dental Clinic. Dr. Smith and his team have completely changed my perspective. They're gentle, patient, and truly care about my comfort.",
    image: avatar1,
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Teeth Whitening Patient",
    quote:
      "After years of coffee stains, I finally decided to try professional teeth whitening. The results were amazing! My teeth are several shades whiter and the procedure was quick and painless.",
    image: avatar2,
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Garcia",
    title: "Dental Implant Patient",
    quote:
      "I lost my front tooth in an accident and was devastated. Dr. Wilson recommended a dental implant, and now you can't even tell which tooth is the implant! It looks and feels completely natural.",
    image: avatar3,
    rating: 4,
  },
];

// Gallery images data
export const galleryImages = [
  {
    id: 1,
    image: galleryImg1,
    category: "Clinic",
    title: "Modern Treatment Room",
    description:
      "Our state-of-the-art treatment rooms are equipped with the latest dental technology.",
  },
  {
    id: 2,
    image: galleryImg2,
    category: "Treatment",
    title: "Dental Implant Procedure",
    description:
      "Before and after images of a successful dental implant procedure.",
  },
  {
    id: 3,
    image: galleryImg3,
    category: "Treatment",
    title: "Teeth Whitening Results",
    description:
      "Dramatic before and after results from our professional teeth whitening service.",
  },
  {
    id: 4,
    image: galleryImg4,
    category: "Clinic",
    title: "Reception Area",
    description:
      "Our comfortable reception area where patients can relax before their appointments.",
  },
  {
    id: 5,
    image: galleryImg5,
    category: "Treatment",
    title: "Cosmetic Dentistry",
    description:
      "Complete smile makeover with porcelain veneers and whitening.",
  },
  {
    id: 6,
    image: galleryImg6,
    category: "Clinic",
    title: "Dental Equipment",
    description:
      "We use only the highest quality dental equipment for all procedures.",
  },
];

// FAQ data
export const faqs = [
  {
    id: 1,
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend a dental check-up and professional cleaning every six months. However, some patients may need more frequent visits depending on their oral health status. Regular visits help catch problems early and maintain optimal oral health.",
  },
  {
    id: 2,
    question: "What should I do in a dental emergency?",
    answer:
      "If you're experiencing severe pain, bleeding, or have a knocked-out tooth, call our emergency line immediately. For a knocked-out tooth, gently rinse it without removing any attached tissue, keep it moist (preferably by placing it back in the socket or holding it in your cheek), and see us within 30 minutes if possible.",
  },
  {
    id: 3,
    question: "How can I improve my smile?",
    answer:
      "We offer many options to enhance your smile, including teeth whitening, veneers, bonding, orthodontics, and complete smile makeovers. During a consultation, we'll discuss your goals and recommend the most appropriate treatments for your specific situation.",
  },
  {
    id: 4,
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Our administrative team will help verify your coverage and explain your benefits before treatment. We also offer financing options and payment plans for patients without insurance or for treatments not fully covered by insurance.",
  },
  {
    id: 5,
    question: "Are dental X-rays safe?",
    answer:
      "Yes, dental X-rays are safe. We use digital X-rays, which reduce radiation exposure by up to 90% compared to traditional film X-rays. We also take precautions such as lead aprons to minimize exposure. The benefits of diagnosing potential problems far outweigh the minimal risks.",
  },
];

// Clinic information
export const clinicInfo = {
  name: "Manifest Dental Clinic",
  address: {
    street: "123 Dental Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
  contact: {
    phone: "+918077610878",
    email: "contact@manifestdental.com",
    whatsapp: "918077610878",
  },
  hours: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/manifestdental",
    twitter: "https://twitter.com/manifestdental",
    instagram: "https://instagram.com/manifestdental",
  },
  mapUrl: "https://maps.google.com/?q=123+Dental+Street+New+York+NY+10001",
  embedMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144679.93131059696!2d76.93561192898501!3d28.555962139700362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1747621977317!5m2!1sen!2sin",
};
