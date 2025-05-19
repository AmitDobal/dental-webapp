import { avatarImages } from "../images/placeholders";

/**
 * Patient testimonials for the dental clinic
 * Each testimonial includes id, name, title, quote, and rating
 */
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Regular Patient",
    quote:
      "I had severe dental anxiety before coming to Manifest Dental Clinic. Dr. Smith and his team have completely changed my perspective. They're gentle, patient, and truly care about my comfort.",
    image: avatarImages.patient1,
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Teeth Whitening Patient",
    quote:
      "After years of coffee stains, I finally decided to try professional teeth whitening. The results were amazing! My teeth are several shades whiter and the procedure was quick and painless.",
    image: avatarImages.patient2,
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Garcia",
    title: "Dental Implant Patient",
    quote:
      "I lost my front tooth in an accident and was devastated. Dr. Wilson recommended a dental implant, and now you can't even tell which tooth is the implant! It looks and feels completely natural.",
    image: avatarImages.patient3,
    rating: 4,
  },
];
