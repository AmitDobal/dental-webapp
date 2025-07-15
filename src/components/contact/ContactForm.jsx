import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";
import emailjs from "@emailjs/browser";
import { clinicInfo } from "../../data";

const formFieldVariants = {
  hidden: { opacity: 0, y: 20, x: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  }),
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
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
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={formContainerVariants}
      className="bg-white/20 backdrop-blur-sm rounded-lg shadow-md p-6 border border-white/30">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-white mb-6">
        Send Us a Message
      </motion.h3>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className={`p-4 mb-6 rounded ${
            submitStatus.type === "success"
              ? "bg-green-100/30 text-green-100 border border-green-300/50"
              : "bg-red-100/30 text-red-100 border border-red-300/50"
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
          viewport={{ once: true }}
          whileFocus="focus">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1">
            Your Name *
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-2 bg-white/30 border border-white/50 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-white placeholder-white/60"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileFocus="focus">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1">
            Email Address *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-2 bg-white/30 border border-white/50 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-white placeholder-white/60"
            placeholder="john@example.com"
          />
        </motion.div>

        <motion.div
          custom={2}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileFocus="focus">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-2 bg-white/30 border border-white/50 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-white placeholder-white/60"
            placeholder="(123) 456-7890"
          />
        </motion.div>

        <motion.div
          custom={3}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileFocus="focus">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-white mb-1">
            Subject *
          </label>
          <motion.input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-2 bg-white/30 border border-white/50 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-white placeholder-white/60"
            placeholder="Appointment Request"
          />
        </motion.div>

        <motion.div
          custom={4}
          variants={formFieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileFocus="focus">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-1">
            Message *
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="w-full px-4 py-2 bg-white/30 border border-white/50 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-white placeholder-white/60 resize-vertical"
            placeholder="Please describe your dental concerns or appointment request..."
          />
        </motion.div>

        <motion.div
          custom={5}
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-white !text-primary-900 hover:!text-white hover:bg-gray-100 font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:ring-2">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
