import React, { useState, useEffect } from "react";

const SaveTheDate = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 100000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gold-300 text-maroon-700 p-6 rounded-lg shadow-lg text-center animate-bounce max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
        <h2 className="text-4xl font-bold">Save the Date!</h2>
        <p className="text-2xl mt-2">December 15, 2025</p>
      </div>
    </div>
  );
};

export default SaveTheDate;
