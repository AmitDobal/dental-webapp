import Button from "../common/Button";

const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        About <span className="text-teal-600">Our Manifest Dental Clinic</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md">
          {/* This would be an actual image in production */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Clinic Image</span>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-teal-600">
                Expert Care
              </h3>
              <p className="text-gray-700">
                Our team of experienced dentists provides exceptional care using
                the latest techniques and technology.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-teal-600">
                Modern Facilities
              </h3>
              <p className="text-gray-700">
                Our state-of-the-art clinic is equipped with advanced dental
                technology for precise diagnoses and treatments.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-teal-600">
                Comfortable Environment
              </h3>
              <p className="text-gray-700">
                We've created a relaxing atmosphere to make your dental visit as
                comfortable and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
