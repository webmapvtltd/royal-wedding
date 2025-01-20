import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-maroon-900 text-gold-300 text-center px-4">
      {/* Error Illustration */}
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <p className="text-2xl mt-4">Oops! The page you are looking for doesn’t exist.</p>

      {/* Image (Optional) */}
      <img
        src="/assets/404-error.svg"
        alt="Not Found"
        className="w-72 mt-6"
      />

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-500 text-maroon-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
