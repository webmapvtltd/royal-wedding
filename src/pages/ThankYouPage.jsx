import React from "react";
import { FaHeart } from "react-icons/fa";

const ThankYouPage = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="min-h-screen flex justify-center items-center bg-maroon-700 mt-6 w-11/12 rounded-lg">
      <div className="w-11/12 p-8 bg-white rounded-lg shadow-xl text-center h-5/6">
        <div className="flex justify-center mb-6">
          <FaHeart className="text-6xl text-pink-500" />
        </div>
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Thank You for Celebrating Our Love!</h1>
        <p className="text-xl text-gray-600 mb-6">
          We are incredibly grateful for your presence and blessings on our special day. Your kind wishes mean the world to us.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          We can't wait to share the memories of our wedding with you! Stay tuned for more details about the ceremony and celebrations.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition duration-200"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-white bg-maroon-700 rounded-lg border-2 border-yellow-400 hover:bg-yellow-500 hover:text-gray-800 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThankYouPage;
