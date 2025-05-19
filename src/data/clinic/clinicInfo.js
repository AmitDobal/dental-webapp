/**
 * General information about the clinic
 * Includes contact details, address, opening hours, social media links, etc.
 */
export const clinicInfo = {
  name: "Manifest Dental Clinic",
  address: {
    street: "123 Dental Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",

    // Formatted address for display
    get formatted() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
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
