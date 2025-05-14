import React from 'react';
import { Button } from './button';

const Landing = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('hero-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to Our Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Experience our stunning hero gallery with beautiful scroll animations and interactive elements.
        </p>
        <Button 
          onClick={scrollToGallery}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg rounded-lg transition-colors"
        >
          View Gallery
        </Button>
      </div>
    </div>
  );
};

export default Landing; 