import React from 'react';
import { useState } from 'react';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'


function BackgroundComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const parallaxOffset = (baseOffset) => ({
    transform: `translate(${baseOffset + mousePosition.x / 100}px, ${baseOffset + mousePosition.y / 100}px)`,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black  via-blue-800 to-black " onMouseMove={handleMouseMove}>
      
       {/* Floating Images */}
       <img
        src={image1}
        alt="Floating Icon 1"
        className="absolute top-1/4 left-1/4 w-24 h-24 transition-transform duration-0"
        style={parallaxOffset(50,5)}  // Apply slight movement
      />
      <img
        src={image2}
        alt="Floating Icon 2"
        className="absolute bottom-1/4 right-1/4 w-24 h-24 transition-transform duration-0"
        style={parallaxOffset(50,10)}  // Apply slight movement
      />
      <img
        src={image3}
        alt="Floating Icon 2"
        className="absolute bottom-1/3 left-40 w-24 h-24 transition-transform duration-0"
        style={parallaxOffset(50,10)}  // Apply slight movement
      />
      <img
        src={image4}
        alt="Floating Icon 2"
        className="absolute top-10 left-1/2 w-24 h-24 transition-transform duration-0"
        style={parallaxOffset(50,10)}  // Apply slight movement
      />
      <img
        src={image5}
        alt="Floating Icon 2"
        className="absolute top-30 left-1/3 w-24 h-24 transition-transform duration-0"
        style={parallaxOffset(50,10)}  // Apply slight movement
      />

      {/* Your content goes here */}
     
    </div>
  );
}

export default BackgroundComponent;