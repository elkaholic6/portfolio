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
                  Growing up on a farm, I learned the value of perseverance and hard work, 
                  enabling me to teach myself how to program in React, Solidity, and JavaScript.<br />
                  <br />
                  Additionally, I am a dedicated smart contract security researcher who actively 
                  engages in audits on Code4rena, individually and on teams.<br />
                  <br />
                  Building secure web3 technologies remains at the forefront of my work; 
                  however, my passion for this industry does not stop there. I am eager to lend 
                  a hand to anyone building or willing to learn more about the Ethereum ecosystem 
                  to further contribute to its overall success.
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