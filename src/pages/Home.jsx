import React from "react";
import Countdown from "../components/Countdown";
import EventsTimeline from "../components/EventsTimeline";
import Venue from "../components/Venue";
// import SaveTheDate from "../components/SaveTheDate";
import BrideGroomIntroduction from "../components/BrideGroomIntroduction ";
import Prewedding from "../components/Prewedding";

const Home = () => {
  return (
    <div className="bg-gold-300 text-maroon-700 min-h-screen flex flex-col items-center">
      {/* <SaveTheDate /> */}
      <BrideGroomIntroduction />
      <Countdown />
      <EventsTimeline />
      <Venue />
      <Prewedding />
    </div>
  );
};

export default Home;
