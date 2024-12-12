"use client"
import React, { useState } from 'react';

const HomeCarousel = () => {
  const carouselImages = [
    { img: "carousel/img1.jpg" },
    { img: "carousel/img2.jpg" },
    { img: "carousel/img3.jpg" },
    { img: "carousel/img4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${carouselImages[currentIndex].img})` }}
      >
        {/* Overlay Text and Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-opacity">Your Text Here</h2>
          <button className="px-6 py-3 bg-red-600 text-white text-lg font-semibold opacity-0 animate-opacity animate-delay-500">
            Learn More
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HomeCarousel;

