import React from "react";
import EventCard from "../components/EventCard";

const EventPage = () => {
  return (
    <div className="min-h-screen bg-maroon-900 text-gold-300 flex flex-col py-10 bg-maroon-700 mt-6 w-11/12 mx-auto justify-center items-center rounded-lg">
  <h1 className="text-4xl font-bold text-yellow-400 mb-6">📅 Wedding Event Schedule</h1>
  <EventCard />
</div>

  );
};

export default EventPage;
