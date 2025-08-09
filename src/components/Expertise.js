import React from 'react';
import powerImage from '../assets/photos/power.png';
import fullgirlImage from '../assets/photos/fullgirl.png';
import info3Image from '../assets/photos/info3.png';
import designImage from '../assets/photos/design.png';
import fanartImage from '../assets/photos/fanart.png';
import redgirlImage from '../assets/photos/redgirl.png';
import paperImage from '../assets/photos/paper.png';

const Expertise = () => {
  return (
    <section className="section3 color1" id='expertise'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <img 
                src={powerImage} 
                className="rounded img-fluid" 
                alt="Power" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
              <img 
                src={fullgirlImage} 
                className="rounded img-fluid" 
                alt="Full girl" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
            </div>
            <div className="col-lg-3">
              <h1>&nbsp;</h1>
              <img 
                src={info3Image} 
                className="rounded img-fluid" 
                alt="Info 3" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
              <img 
                src={designImage} 
                className="rounded img-fluid" 
                alt="Design" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
            </div>
            <div className="col-lg-3" style={{ marginTop: '15%', fontWeight: '10px' }}>
              <h1 className="fontcolor2 font-weight-bolder font1 expertiseloc" data-aos="zoom-out-left" data-aos-duration="2000">
                EXPERTISE
              </h1>
              <h1>&nbsp;</h1>
              <img 
                src={fanartImage} 
                className="rounded img-fluid" 
                alt="Fan art" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
              <img 
                src={redgirlImage} 
                className="rounded img-fluid" 
                alt="Red girl" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
            </div>
            <div className="col-lg-3" style={{ marginTop: '45%' }}>
              <img 
                src={paperImage} 
                className="rounded img-fluid" 
                alt="Paper" 
                data-aos="flip-left" 
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;