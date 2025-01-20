import React from "react";

const Venue = () => {
  const locationUrl = "https://www.google.com/maps/dir/?api=1&destination=26.912433,75.787270";

  return (
    <div className="flex flex-col sm:flex-row bg-maroon-700 text-gold-300 rounded-lg shadow-lg  m-4 p-6 items-center w-11/12 ">
      {/* Left Section - Venue Details */}
      <div className="w-full sm:w-1/2 bg-maroon-800 p-6 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold mb-4">Wedding Venue</h2>
        <p className="text-xl font-semibold mb-2">The Grand Royal Palace</p>
        <p className="text-lg mb-4">123 Royal Street, Jaipur, India</p>
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold bg-gold-500 text-maroon-900 px-4 py-2 rounded-lg shadow-md hover:bg-gold-600 transition duration-300 inline-block"
        >
          📍 Book a Cab
        </a>
      </div>

      {/* Right Section - Google Maps */}
      <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-6">
        <iframe
          className="w-full h-64 sm:h-80 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.909998765432!2d75.7872706154321!3d26.912433783110985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dbxxxxxx!2sThe+Grand+Royal+Palace!5e0!3m2!1sen!2sin!4v1639999999999"
          loading="lazy"
          title="Wedding Venue Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;
