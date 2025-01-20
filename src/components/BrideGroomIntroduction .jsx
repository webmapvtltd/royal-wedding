import React from "react";

const BrideGroomIntroduction = () => {
  return (
    <div className="p-6 bg-maroon-700 text-gold-300 rounded-lg shadow-lg my-10 w-11/12">
      <h2 className="text-3xl font-bold text-center mb-6">Meet the Bride & Groom</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* Bride Section */}
        <div className="flex flex-col items-center text-center sm:w-1/2 border-2 border-gold-400 rounded-lg p-6">
          <img
            src="./assets/Bride.jpg"  // Replace with the actual image path
            alt="Bride"
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold underline  underline-offset-2 p-1">Jane Doe</h3>
          <p className="text-lg">A beautiful soul with a heart full of love. Jane is known for her kindness, grace, and compassion.</p>
        </div>
        
        {/* Groom Section */}
        <div className="flex flex-col items-center text-center sm:w-1/2 border-2 border-gold-400 rounded-lg p-6">
          <img
            src="./assets/Groom.jpg"  // Replace with the actual image path
            alt="Groom"
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-bold underline  underline-offset-2 p-1">John Smith</h3>
          <p className="text-lg">John is a man of strength, integrity, and a great sense of humor. He’s the perfect match for Jane.</p>
        </div>
      </div>
    </div>
  );
};

export default BrideGroomIntroduction;
