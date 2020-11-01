import React from 'react';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-contents container row center">
        
          <div className="footer-logo col">
            <h1><span>H</span>OME <span>D</span>ECOR</h1>
            <h3>Design That Speaks</h3>
          </div>
          <div className="footer-policies">
            <div className="row">
              <h3>Terms</h3>
              <h3>Privacy Policy</h3>
              <h3>Copyright © 2020 Reserved</h3>
            </div>

          </div>
          <div className="footer-icons">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
    </footer>
  )
}

export default Footer;