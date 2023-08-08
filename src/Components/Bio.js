import React, { useState, useEffect, useRef } from 'react';
import './Bio.css';

function Bio() {
  const myRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      })
    }, {
      threshold: 0.1
    })
    observer.observe(myRef.current)
  }, []);



  return (
    <div className='bio' id='bio'>
        <div className='bio_container'>
            <p className='shimmer bio_wrapper'>
                bio
            </p>
            <div ref={myRef} className={`${visible ? 'bio_reveal' : 'bio_reveal_inactive'}`}>
              <div className='bio_content'>
                <p className='bio_paragraph-wrapper'>
                  Growing up on a farm, I learned the value of perseverance and hard work. Through my journey of self-guided 
                  learning, I have harnessed the knowledge of React, Solidity, and JavaScript.<br />
                  <br />
                  I am a dedicated smart contract security researcher who actively engages in audits on Code4rena individually and on teams. 
                  These challenges both teach me and keep me up-to-date on the latest smart contract best practices.<br />
                  <br />
                  My commitment to 
                  building secure web3 technologies remains at the forefront of my work. This reflects my passion 
                  for delivering high-quality and secure solutions in the blockchain space.
                </p>
                <div className='face_pic'>
                  <div className='pic_parent'>
                    <img className='pic_child' src='images/facepic2.jpeg' alt='Picture' id='img'/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Bio;