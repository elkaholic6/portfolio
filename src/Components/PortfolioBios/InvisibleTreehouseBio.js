import React from 'react'

function InvisibleTreehouseBio({ projectBio, projectTitle }) {
  return (
    <div className='InvisibleTreehouseBio'>
        <div className='InvisibleTreehouseBio_title'>{projectTitle}</div><br/>
        <div className='InvisibleTreehouseBio_text'>
            {projectBio}
        </div>
    </div>
  )
}

export default InvisibleTreehouseBio