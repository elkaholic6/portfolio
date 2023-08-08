import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='aboutme' id='home'>
      <div className='aboutme_container'>
        <div className='aboutme_wrapper'>
          <h1>Wyatt Chamberlin</h1>
        </div>
        <div className='aboutme_dev_wrapper'>
          <h5>Full-stack dev / Solidity dev</h5>
        </div>
        <div className='aboutme_background_hello'>
            <p className='shimmer background_hello'>
              hello
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;