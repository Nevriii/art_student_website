import React from 'react';
import meImage from '../assets/photos/me.png';
import leafImage from '../assets/photos/leaf.png';

const Introduction = () => {
  return (
    <div className="introduction-container" id='home'>
      <div className="introduction-grid">
        {/* Left Column - Text Content */}
        <div className="introduction-text">
          <p className="introduction-hello">Hello,</p>
          <p className="introduction-name">I'm Rainn</p>
          <p className="introduction-name">Abrogena!</p>
          <p className="introduction-description">
            A multimedia arts student at Mapua University. She is an aspiring digital illustrator committed to her creative crafts.
          </p>
        </div>
        
        {/* Middle Column - Profile Image */}
        <div className="introduction-image-container">
          <img 
            src={meImage} 
            alt="Rainn Abrogena" 
            className="introduction-image"
          />
        </div>
        
        {/* Right Column - Leaf Image */}
        <div className="introduction-image-container">
          <img 
            src={leafImage} 
            alt="Decorative leaf" 
            className="introduction-leaf"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;