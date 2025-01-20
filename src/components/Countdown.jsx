import React, { useState, useEffect } from "react";

const Countdown = () => {
  const weddingDate = new Date("2025-12-15T00:00:00").getTime(); // Set your wedding date

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 text-gold-300 bg-maroon-700 rounded-lg shadow-lg mt-5 w-11/12 ">
      <h2 className="text-3xl font-bold mb-4">Countdown to the Big Day!</h2>
      <div className="flex flex-wrap justify-center gap-6 text-2xl font-semibold">
        <div className="flex flex-col items-center">
          <span className="block text-4xl">{timeLeft.days}</span>
          <span className="text-lg">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block text-4xl">{timeLeft.hours}</span>
          <span className="text-lg">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block text-4xl">{timeLeft.minutes}</span>
          <span className="text-lg">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="block text-4xl">{timeLeft.seconds}</span>
          <span className="text-lg">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
