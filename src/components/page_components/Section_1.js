import React from 'react';
import './Section_1.css';
import { Description } from '@mui/icons-material';

const Section_1 = ({title,description,bgImage}) => { 
  return (
    <div className="Section_1" style={{ backgroundImage: `url('/images/${bgImage}')` }}>
      <div className="center_text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Section_1
