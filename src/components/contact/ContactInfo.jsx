const ContactInfo = ({ clinicInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Contact Information
      </h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 text-teal-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Address</h4>
            <p className="mt-1 text-gray-600">{clinicInfo.address}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 text-teal-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Phone</h4>
            <a
              href={`tel:${clinicInfo.phone}`}
              className="mt-1 text-teal-600 hover:text-teal-800 transition-colors"
              aria-label="Call us">
              {clinicInfo.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 text-teal-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Email</h4>
            <a
              href={`mailto:${clinicInfo.email}`}
              className="mt-1 text-teal-600 hover:text-teal-800 transition-colors"
              aria-label="Email us">
              {clinicInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 text-teal-600 mt-1">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Hours</h4>
            <div className="mt-1 text-gray-600">
              {clinicInfo.hours.map((day, index) => (
                <p key={index} className="mb-1">
                  <span>{day.days}: </span>
                  <span>{day.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {clinicInfo.socialMedia?.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
              aria-label={`Follow us on ${social.platform}`}>
              <span className="sr-only">{social.platform}</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
