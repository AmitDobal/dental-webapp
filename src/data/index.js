// Centralized data exports
export { clinicInfo } from "./clinicInfo";
export { services } from "./services";
export { transformations } from "./transformations";
export { testimonials } from "./testimonials";

// Import for re-exports
import { clinicInfo } from "./clinicInfo";

// Re-export specific data for convenience
export const clinicName = clinicInfo.name;
export const doctor = clinicInfo.doctor;
export const phone = clinicInfo.phone;
export const email = clinicInfo.email;
export const address = clinicInfo.address;
export const hours = clinicInfo.hours;
export const clinicServices = clinicInfo.services;
export const aboutInfo = clinicInfo.about;

// Export commonly used data
export const doctorInfo = {
  name: clinicInfo.doctor.name,
  qualifications: clinicInfo.doctor.qualifications,
  specialization: clinicInfo.doctor.specialization,
  registration: clinicInfo.doctor.registration,
};

export const contactInfo = {
  phone: clinicInfo.phone,
  email: clinicInfo.email,
  address: clinicInfo.address,
  hours: clinicInfo.hours,
};
