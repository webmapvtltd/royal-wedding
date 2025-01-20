import React, { useState, useEffect } from "react";

const EventCountdown = ({ eventTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventTime]);

  return (
    <div className="mt-2 text-center text-yellow-300">
      {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
      {timeLeft.hours > 0 && <span>{timeLeft.hours}h </span>}
      {timeLeft.minutes > 0 && <span>{timeLeft.minutes}m </span>}
      {timeLeft.seconds > 0 && <span>{timeLeft.seconds}s</span>}
    </div>
  );
};

export default EventCountdown;
