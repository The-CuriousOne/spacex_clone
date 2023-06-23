import React from 'react';
import './Section_3.css'

const Section_3 = ({bgImage,description}) => {
  return (
    <div className="Section_3" style={{ backgroundImage: `url('/images/${bgImage}')` }}>
      <div className="Falcon9Description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Section_3
