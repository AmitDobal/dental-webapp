const GoogleMap = ({ address }) => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39897.36563577033!2d77.27774518415362!3d28.62669950690019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747637967076!5m2!1sen!2sin"
        title="Manifest Dental Clinic Location"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default GoogleMap;
