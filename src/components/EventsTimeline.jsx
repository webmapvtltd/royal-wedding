import React from "react";
import { FaRegCalendarAlt, FaUtensils, FaCamera, FaPeopleArrows } from "react-icons/fa";

const events = [
  {
    time: "10:00 AM",
    title: "Wedding Ceremony",
    description: "The sacred wedding vows are exchanged.",
    icon: <FaRegCalendarAlt />
  },
  {
    time: "01:00 PM",
    title: "Reception",
    description: "Enjoy a grand lunch with the newlyweds.",
    icon: <FaUtensils />
  },
  {
    time: "04:00 PM",
    title: "Photo Session",
    description: "Capture the beautiful moments with the couple.",
    icon: <FaCamera />
  },
  {
    time: "07:00 PM",
    title: "Evening Party",
    description: "Dance and celebrate with friends and family.",
    icon: <FaPeopleArrows />
  }
];

const EventsTimeline = () => {
  return (
    <div className="p-6 text-gold-300 bg-maroon-700 rounded-lg shadow-lg min-h-screen flex flex-col justify-center mt-5 w-11/12">
      <h2 className="text-3xl font-bold mb-6 text-center">Wedding Events Timeline</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 h-full"
          >
            <div className="flex items-center justify-center text-4xl text-maroon-700 mb-4">
              {event.icon}
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-maroon-700">{event.title}</h3>
              <p className="text-lg text-maroon-700">{event.description}</p>
            </div>
            <div className="text-xl font-semibold mt-4 bg-maroon-700 text-gold-300 px-4 py-2 rounded-lg">
              {event.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTimeline;
