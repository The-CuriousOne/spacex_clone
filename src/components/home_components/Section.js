import React from 'react'
import './Section.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
const Section = ({description, title, buttonText, bgImage, link}) => {
  return (
    <div className="Section" style={{ backgroundImage: `url('/images/${bgImage}')` }}>
      <div className='top'>

      </div>
      <div className="bottom">
        <div className="text_section">
          <div className="text_element">
            <p>{description}</p> 
          </div>
          <div className="text_element">
            <h1>{title}</h1>
          </div>
          <div className="text_element">
            <a href={link}>
              <button >{buttonText}</button>
            </a>
          </div>
        </div>
        <div className="bottom_button">
          <ExpandMoreIcon className="arrowButton" fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default Section
