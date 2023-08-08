import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav_container'>
      <div className='nav_home'>
        <a className='nav_home_link' href='#home'>Home</a>
      </div>
      <div className='nav_portfolio'>
        <a className='nav_portfolio_link' href='#portfolio'>Portfolio</a>
      </div>
      <div className='nav_bio'>
        <a className='nav_bio_link' href='#bio'>Bio</a>
      </div>
      <div className='nav_contact'>
        <a className='nav_contact_link' href='#contact'>Contact</a>
      </div>
        
    </div>
  )
}

export default Navbar