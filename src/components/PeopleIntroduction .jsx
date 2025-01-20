import React from "react";

const PeopleIntroduction = ({ title, people }) => {
  return (
    <div className="p-6 bg-maroon-700 text-gold-300 rounded-lg shadow-lg my-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {people.map((person, index) => (
          <div key={index} className="flex flex-col items-center text-center sm:w-1/2">
            <img
              src={person.image}
              alt={person.name}
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">{person.name}</h3>
            <p className="text-lg">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleIntroduction;
