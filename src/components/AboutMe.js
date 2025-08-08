import React from 'react';
import info1Image from '../assets/photos/info1.png';
import info2Image from '../assets/photos/info2.png';
import commsImage from '../assets/photos/comms.png';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-grid">
        {/* Left Column - Rotated "About Me" text and info1.png */}
        <div className="aboutme-left-column">
          <h2 className="aboutme-title sideways-text fontcolor2">ABOUT ME</h2>
          <div className="aboutme-image-container">
            <img 
              src={info1Image} 
              alt="About Me Info 1" 
              className="aboutme-image aboutme-info1"
            />
          </div>
        </div>
        
        {/* Middle Column - info2.png */}
        <div className="aboutme-image-container">
          <img 
            src={info2Image} 
            alt="About Me Info 2" 
            className="aboutme-image aboutme-info2"
          />
        </div>
        
        {/* Right Column - comms.png */}
        <div className="aboutme-image-container" style={{ position: 'relative' }}>
          <img 
            src={commsImage} 
            alt="Communications" 
            className="aboutme-image aboutme-comms"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;