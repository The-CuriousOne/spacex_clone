import React from 'react';
import './Section_1.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section_1 = ({title,description,bgImage}) => { 
  return (
    <div className="Section_1" style={{ backgroundImage: `url('/images/${bgImage}')` }}>
      <div className="top">
        
      </div>
      <div className="center_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="bottom_button">
          <ExpandMoreIcon className="arrowButton" fontSize='large'/>
      </div>
    </div>
  )
}

export default Section_1
