import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ganesha from "../assets/B7UGv501.svg";
import MusicPlayer from "./MusicPlayer";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-maroon-700 text-gold-400 shadow-md flex flex-col py-4 w-full">
      {/* Ganesha with Mantras */}
      <div className="flex items-center justify-center gap-6 px-6 my-1">
        {/* Left Mantra */}
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-center">
          ॐ श्री गणेशाय नमः
        </p>

        {/* Ganesha Image */}
        <img src={ganesha} alt="Ganesha" className="h-20 w-auto sm:h-24 mx-4" />

        {/* Right Mantra */}
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-center">
          वक्रतुंड महाकाय
        </p>
      </div>

      {/* Navbar & Music Player */}
      <div className="flex justify-between items-center px-6 py-4 border-t border-gold-500">
        {/* Navbar with Hamburger Menu for Small Screens */}
        <nav
  className={`flex flex-col md:flex-row md:gap-8 gap-6 text-lg font-semibold ${isMenuOpen ? "block" : "hidden"} md:flex`}
>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "text-gold-500 underline px-4 py-2"
        : "hover:text-gold-300 transition px-4 py-2"
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/events"
    className={({ isActive }) =>
      isActive
        ? "text-gold-500 underline px-4 py-2"
        : "hover:text-gold-300 transition px-4 py-2"
    }
  >
    Events
  </NavLink>
  <NavLink
    to="/venue"
    className={({ isActive }) =>
      isActive
        ? "text-gold-500 underline px-4 py-2"
        : "hover:text-gold-300 transition px-4 py-2"
    }
  >
    Venue
  </NavLink>
  <NavLink
    to="/gallery"
    className={({ isActive }) =>
      isActive
        ? "text-gold-500 underline px-4 py-2"
        : "hover:text-gold-300 transition px-4 py-2"
    }
  >
    Gallery
  </NavLink>
  <NavLink
    to="/thank-you"
    className={({ isActive }) =>
      isActive
        ? "text-gold-500 underline px-4 py-2"
        : "hover:text-gold-300 transition px-4 py-2"
    }
  >
    Thank You
  </NavLink>
  
</nav>


        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-3xl text-gold-400" />
          ) : (
            <FaBars className="text-3xl text-gold-400" />
          )}
        </div>

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </header>
  );
}
