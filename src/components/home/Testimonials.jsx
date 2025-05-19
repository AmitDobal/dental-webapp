import TestimonialCard from "../common/TestimonialCard";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        What <span className="text-teal-600">Our Patients Say</span>
      </h2>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Read testimonials from our satisfied patients about their experience at
        Manifest Dental Clinic
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#testimonials"
          className="text-teal-600 hover:text-teal-800 font-medium">
          Read more testimonials →
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
