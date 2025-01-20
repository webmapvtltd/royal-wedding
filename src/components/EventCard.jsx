import React from "react";
import { FaBell, FaHandHoldingHeart, FaDrum, FaUtensils, FaCar, FaCalendarAlt, FaDownload } from "react-icons/fa";
import EventCountdown from "./EventCountdown";

const events = [
  {
    name: "Roka Ceremony",
    time: "2025-02-10T10:00:00",
    venue: "The Grand Banquet, Delhi",
    cabLink: "https://www.uber.com/in/en/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaHandHoldingHeart className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/roka-greeting.pdf",
    foodMenu: "/assets/roka-menu.pdf",
  },
  {
    name: "Haldi Ceremony",
    time: "2025-02-11T11:00:00",
    venue: "Bride's Home, Jaipur",
    cabLink: "https://www.ola.cabs.com/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaUtensils className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/haldi-greeting.pdf",
    foodMenu: "/assets/haldi-menu.pdf",
  },
  {
    name: "Mehendi Ceremony",
    time: "2025-02-12T05:00:00",
    venue: "Family Garden, Mumbai",
    cabLink: "https://www.uber.com/in/en/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaBell className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/mehendi-greeting.pdf",
    foodMenu: "/assets/mehendi-menu.pdf",
  },
  {
    name: "Sangeet Night",
    time: "2025-02-13T07:00:00",
    venue: "Taj Hotel, Bangalore",
    cabLink: "https://www.ola.cabs.com/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaDrum className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/sangeet-greeting.pdf",
    foodMenu: "/assets/sangeet-menu.pdf",
  },
  {
    name: "Wedding Ceremony",
    time: "2025-02-14T10:00:00",
    venue: "Royal Palace, Udaipur",
    cabLink: "https://www.uber.com/in/en/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaCalendarAlt className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/wedding-greeting.pdf",
    foodMenu: "/assets/wedding-menu.pdf",
  },
  {
    name: "Reception Party",
    time: "2025-02-15T08:00:00",
    venue: "The Grand Hyatt, Chennai",
    cabLink: "https://www.ola.cabs.com/",
    menu: ["Veg", "Non-Veg"],
    icon: <FaCar className="text-4xl text-yellow-400" />,
    greetingCard: "/assets/reception-greeting.pdf",
    foodMenu: "/assets/reception-menu.pdf",
  },
];

const EventCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
      {events.map((event, index) => (
        <div key={index} className="bg-maroon-700 text-gold-300 p-6 rounded-lg shadow-lg flex flex-col items-center border-2 border-yellow-500">
          {/* Icon */}
          <div className="mb-4">{event.icon}</div>

          {/* Event Name */}
          <h2 className="text-2xl font-bold mb-2">{event.name}</h2>

          {/* Countdown */}
          <EventCountdown eventTime={event.time} />

          {/* Venue & Cab Booking */}
          <p className="text-lg mt-4">{event.venue}</p>
          <a
            href={event.cabLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 mt-2 underline"
          >
            🚖 Book a Cab
          </a>

          {/* Menu */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">🍽️ Menu</h3>
            <ul className="text-lg">
              {event.menu.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Downloadable Greeting & Food Menu */}
          <div className="mt-4 flex gap-4">
            <a href={event.greetingCard} download className="flex items-center gap-2 bg-yellow-500 text-maroon-700 px-3 py-2 rounded-md hover:bg-yellow-400">
              <FaDownload /> Greeting Card
            </a>
            <a href={event.foodMenu} download className="flex items-center gap-2 bg-yellow-500 text-maroon-700 px-3 py-2 rounded-md hover:bg-yellow-400">
              <FaDownload /> Food Menu
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
