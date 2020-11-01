import React from 'react';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import location from '../assets/location.svg';



function Contacts() {
  return (
    <div className="contacts">
      <div className="col container">
        <div className="contact-text col center">
          <h1>CONTACT <span>US</span></h1>
          <h4>IF YOU LIKED OUR WORK ,</h4>
          <h4> FEEL FREE TO CONTACT US.</h4>
        </div>
        <div className="contact-items">
          <div className="row">
            <div className="contact-item col center">
              <img src={phone} alt="" />
              <h4>+91 9237940203</h4>
            </div>
            <div className="contact-item col center">
              <img src={email} alt="" />
              <h4>homedecor@gmail.com</h4>
            </div>
            <div className="contact-item col center">
              <img src={location} alt="" />
              <h4>221B , Baker Street, London</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;