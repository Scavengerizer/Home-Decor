import React from "react";
import limage from "../assets/limage.png";

function Landing() {
  return (
    <div className='landing'>
      <div className='row'>
        <div className='text_and_scroll'>
          <div className='text-anim'>
            <div className='text'>
              <span>DESIGN</span>
            </div>
            <div className='text'>
              <span>THAT</span>
            </div>
            <div className='text'>
              <span>SPEAKS.</span>
            </div>
          </div>

          <div className='scroll col center'>
            <h6>Scroll</h6>
            <div className='arrow down'></div>
          </div>
        </div>
        <div className='landing-image image'>
          <img src={limage} alt='' />
          <div className='overlay'></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
