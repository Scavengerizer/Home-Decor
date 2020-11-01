import React from "react";
import about from "../assets/about_image.png";
import arrow from "../assets/arrow.svg";

function About() {
  return (
    <div className='about'>
      <div className='row container'>
        <div className='about-image'>
          <img src={about} alt='' />
          <div className='overlay2'></div>
        </div>
        <div className='about-text col'>
          <h1>ABOUT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
          <div className='our-work-btn row'>
            <a href='#'>OUR WORK</a>
            <img src={arrow} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
