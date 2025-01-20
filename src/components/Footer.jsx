import React from "react";

const Footer = () => {
  return (
    <footer className="bg-maroon-700 text-gold-300 text-center py-4  shadow-lg w-full mt-6">
      <p className="text-lg sm:text-xl mb-2">© 2025 Royal Wedding. All rights reserved.</p>
      <p className="text-sm sm:text-base">
    Designed with ❤️ by{" "}
    <a
      href="https://webmapvtltd.github.io/main/" // Replace with your actual website URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      Webma
    </a>
  </p>
    </footer>
  );
};

export default Footer;
