import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import emailjs from "@emailjs/browser";
import { clinicInfo } from "../../data";

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
};

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      //TODO: Change the email to the actual email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_ta4mlp5",
        {
          from_name: formData.name,
          // from_email: formData.email,
          from_email: "amit.dobalwork14@gmail.com",
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: "Dr. Amit Dobal", // Replace with your name
          to_email: "amit.dobalwork14@gmail.com", // Replace with your email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later. If the problem persists, please contact us directly at " +
          clinicInfo.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white rounded-lg shadow-md p-6">
      <motion.h3
        variants={slideUp}
        className="text-2xl font-semibold text-gray-900 mb-6">
        Send Us a Message
      </motion.h3>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 mb-6 rounded ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
          {submitStatus.message}
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          custom={0}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="john@example.com"
          />
        </motion.div>

        <motion.div
          custom={2}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="(123) 456-7890"
          />
        </motion.div>

        <motion.div
          custom={3}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Appointment Request"
          />
        </motion.div>

        <motion.div
          custom={4}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Please describe your inquiry..."
          />
        </motion.div>

        <motion.div
          custom={5}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 text-white hover:bg-primary-700"
            aria-label="Submit contact form">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
