import React from "react";
import { FaMapMarkedAlt, FaParking, FaConciergeBell } from "react-icons/fa";

// Sample event data with real images from assets
const events = [
  {
    name: "Roka Ceremony",
    venue: "The Grand Banquet, Delhi",
    venueAddress: "123, Banquet Road, Delhi",
    venueContact: "+91-123-4567890",
    capacity: "300 People",
    amenities: ["Parking Available", "Catering", "Decorations"],
    mapLink: "https://www.google.com/maps?q=The+Grand+Banquet,Delhi",
    images: [
      "./assets/hotel.jpg",
      "./assets/hotel.jpg",
    ],
  },
  {
    name: "Haldi Ceremony",
    venue: "Bride's Home, Jaipur",
    venueAddress: "456, Bridal Lane, Jaipur",
    venueContact: "+91-987-6543210",
    capacity: "150 People",
    amenities: ["Parking Available", "Catering"],
    mapLink: "https://www.google.com/maps?q=Bride's+Home,Jaipur",
    images: [
      "./assets/hotel.jpg",
      "./assets/hotel.jpg",
    ],
  },
  {
    name: "Mehendi Ceremony",
    venue: "Family Garden, Mumbai",
    venueAddress: "789, Green Park, Mumbai",
    venueContact: "+91-555-1239870",
    capacity: "200 People",
    amenities: ["Parking Available", "Catering", "Decorations", "Sound System"],
    mapLink: "https://www.google.com/maps?q=Family+Garden,Mumbai",
    images: [
      "./assets/hotel.jpg",
      "./assets/hotel.jpg",
    ],
  },
  // Add more events here if needed...
];

const VenuePage = () => {
  return (
    <div className="flex items-center justify-center ">
    <div className="min-h-screen bg-maroon-700  flex justify-center items-center my-6 w-11/12 rounded-lg p-3">
      <div className=" mx-auto p-6 bg-white shadow-xl rounded-lg w-11/12 ">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Wedding Event Venues</h1>

        {/* Display each event with venue-specific information */}
        {events.map((event, index) => (
          <div key={index} className="bg-gray-50 p-6 mb-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">{event.name}</h2>
            </div>

            <p className="text-gray-600 mb-2"><strong>Venue:</strong> {event.venue}</p>
            <p className="text-gray-600 mb-2"><strong>Address:</strong> {event.venueAddress}</p>
            <p className="text-gray-600 mb-2"><strong>Contact:</strong> {event.venueContact}</p>
            <p className="text-gray-600 mb-4"><strong>Capacity:</strong> {event.capacity}</p>

            {/* Venue Information: Map & Amenities */}
            <div className="flex flex-wrap items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-2xl text-yellow-500" />
                <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800">
                  View on Map
                </a>
              </div>
              <div className="flex items-center">
                <FaParking className="text-2xl text-yellow-500" />
                <span className="ml-2 text-gray-600">{event.amenities.includes("Parking Available") ? "Parking Available" : "No Parking"}</span>
              </div>
              <div className="flex items-center">
                <FaConciergeBell className="text-2xl text-yellow-500" />
                <span className="ml-2 text-gray-600">{event.amenities.join(", ")}</span>
              </div>
            </div>

            {/* Venue Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {event.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Venue Image ${idx + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default VenuePage;
