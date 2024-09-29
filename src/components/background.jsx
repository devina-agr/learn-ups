import React from 'react';

    
import video3 from '../video/video3.mp4';

function BackgroundComponent({ children }) {
  return (
    <div className="relative w-full min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover min-h-screen z-[-1]"
      >
        <source
          src={video3}
          type="video/mp4"
        />
            </video>

      <div className="relative z-10">
        {children}
      </div>

     
    </div>
  );
}


export default BackgroundComponent;

