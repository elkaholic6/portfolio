import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';

function ProjectItem(props) {
    const handleLinkClick = () => {
        window.open(props.link, '_blank');
      };

  return (
    <>
        <li className='projects_item'>
            <div className='projects_item_link'>
                <figure className='projects_item_pic-wrap'>
                    <a href='#info-mobile'>
                        <img 
                        src={props.src} 
                        alt='Project' 
                        className='projects_item_img'
                        onClick={props.handleInfoClick}
                        />
                    </a>
                </figure>
                <div className='projects_item_info'>
                    <h5 className='projects_item_text' onClick={handleLinkClick}>
                        <span>{props.text}</span>
                        <BsBoxArrowUpRight className='projects_item_open_icon' />
                    </h5>
                </div>
            </div>
        </li>
    </>
  )
}

export default ProjectItem;