import React from 'react';
// import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer color2" data-aos="zoom-out-right" data-aos-duration="2000">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>&nbsp;</h1>
              <h4 className="fontcolor3" style={{ paddingBottom: '5px' }}>References</h4>
              <p className="fontcolor2" style={{ paddingBottom: '5px' }}><b>MARK JOSEPH H.ELLORAN, MMA</b></p>
              <p className="fontcolor3" style={{ paddingBottom: '5px' }}>Mapua University, SMS Faculty Member</p>
              <p className="fontcolor3" style={{ paddingBottom: '5px' }}>mjhelloran@mapua.edu.ph</p>
            </div>
            <div className="col-lg-6">
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <p className="fontcolor2" style={{ paddingBottom: '5px' }}><b>BENNY MUNOZ, MMA</b></p>
              <p className="fontcolor3" style={{ paddingBottom: '5px' }}>Mapua University, SMS Faculty Member</p>
              <p className="fontcolor3" style={{ paddingBottom: '5px' }}>bsmunos@mapua.edu.ph</p>
            </div>
          </div>
          <h1>&nbsp;</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;