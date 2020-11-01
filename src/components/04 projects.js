import React from "react";
import line from "../assets/line.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

function Projects() {
  return (
    <div className='projects'>
      <div className='col container'>
        <div className='project-heading row'>
          <h1>PROJECTS</h1>
          <img className='row center' src={line} alt='' />
        </div>
        <div className='project-images'>
          <div className='row'>
            <div className='pi'>
              <img src={image1} alt='' />
              <div className='overlay3'></div>
            </div>
            <div className='pi'>
              <img src={image2} alt='' />
              <div className='overlay3'></div>
            </div>
            <div className='pi'>
              <img src={image3} alt='' />
              <div className='overlay3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
