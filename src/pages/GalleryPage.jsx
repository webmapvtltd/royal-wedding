// import React, { useState } from "react";
import {SlideshowLightbox} from 'lightbox.js-react'
import "react-lightbox-component/build/css/index.css";

const GalleryPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

  const brideImages = [
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg',
    './assets/Bride.jpg'    
];
  
  const groomImages = [
    './assets/Groom.jpg',    
    './assets/Groom.jpg',
    './assets/Groom.jpg',    
    './assets/Groom.jpg',
    './assets/Groom.jpg',    
    './assets/Groom.jpg',
    './assets/Groom.jpg',    
    './assets/Groom.jpg',
    './assets/Groom.jpg',  
];
  
  

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

  return (
    <div className="flex justify-center items-center" >
    <div className="min-h-screen text-gold-300  p-10 bg-maroon-700 mt-6 w-11/12 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">📸 Wedding Photo Gallery</h1>
      
      {/* Bride's Gallery Section */}
      <section className="w-full flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">👰 Bride's Photos</h2>
        <SlideshowLightbox className="container grid grid-cols-3 gap-3 gap-x-3 mx-auto">
          {brideImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Bride ${index + 1}`}
              className="cursor-pointer rounded-lg "
            //   onClick={() => handleImageClick(index)}
            />
          ))}
        </SlideshowLightbox>
      </section>

      {/* Groom's Gallery Section */}
      <section className="w-full flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">🤵 Groom's Photos</h2>
        <SlideshowLightbox className="container grid grid-cols-3 gap-3 mx-auto">
          {groomImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Groom ${index + 1}`}
              className="cursor-pointer rounded-lg"
            //   onClick={() => handleImageClick(index + brideImages.length)}
            />
          ))}
        </SlideshowLightbox>
      </section>

      </div>
    </div>
  );
};

export default GalleryPage;
