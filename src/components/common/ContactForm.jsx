import { useState } from "react";
import Button from "./Button";

const ContactForm = ({ className = "", ...props }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    status: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const services = [
    "General Consultation",
    "Teeth Cleaning",
    "Root Canal",
    "Teeth Whitening",
    "Dental Implants",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    try {
      // In a real application, we would send this data to a server
      // const response = await axios.post('/api/contact', formData);

      // Simulating network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        status: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md ${className}`}
      {...props}>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Send Us a Message
      </h3>

      {formStatus.status && (
        <div
          className={`mb-6 p-4 rounded text-sm ${
            formStatus.status === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
              placeholder="John Doe"
              tabIndex={0}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
              placeholder="john@example.com"
              tabIndex={0}
            />
          </div>

          <div>
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
              className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
              placeholder="(123) 456-7890"
              tabIndex={0}
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-1">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
              tabIndex={0}>
              <option value="">Please select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
              placeholder="Please let us know how we can help you"
              tabIndex={0}></textarea>
          </div>

          <div className="sm:col-span-2">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading}
              className="py-3"
              tabIndex={0}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
