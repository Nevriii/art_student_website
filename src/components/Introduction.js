import React, { useState, useEffect } from 'react';
import meImage from '../assets/photos/me.png';
import leafImage from '../assets/photos/leaf.png';

const Introduction = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define responsive styles
  const getResponsiveStyles = () => {
    if (windowWidth <= 499) {
      return {
        hello: {
          color: '#9c4819',
          fontSize: 'clamp(1.2rem, 6vw, 2rem)',
          fontWeight: 400,
          margin: 0
        },
        name: {
          fontSize: 'clamp(1.5rem, 7vw, 2.5rem)',
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.1
        },
        description: {
          fontSize: '0.9rem',
          lineHeight: 1.4,
          color: '#303f3c',
          margin: 0,
          marginBottom: '2rem'
        }
      };
    }
    return {};
  };

  const styles = getResponsiveStyles();

  return (
    <div className="introduction-container" id='home'>
      <div className="introduction-grid">
        {/* Left Column - Text Content */}
        <div className="introduction-text">
          <p className="introduction-hello" style={styles.hello}>Hello,</p>
          <p className="introduction-name" style={styles.name}>I'm Rainn</p>
          <p className="introduction-name" style={styles.hello}>Abrogena!</p>
          <p className="introduction-description" style={styles.description}>
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