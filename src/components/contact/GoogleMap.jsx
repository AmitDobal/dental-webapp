const GoogleMap = ({ address }) => {
  // Format the address for the Google Maps embed URL
  const formattedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&q=${formattedAddress}`;

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Manifest Dental Clinic Location"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}></iframe>
    </div>
  );
};

export default GoogleMap;
