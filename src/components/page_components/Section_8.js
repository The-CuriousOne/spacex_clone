import React from 'react';
import './Section_8.css';

const Section_8 = () => {
  return (
    <div className="Section_8">
      <div className="text">
        For information about our launch services, contact <a href="mailto:sales@spacex.com"><p>sales@spacex.com</p></a>
      </div>
      <div className="buttonGroup">
        <a href="https://www.spacex.com/media/falcon-users-guide-2021-09.pdf">
          <button>Download User Guide</button>
        </a>
        <a href="https://www.spacex.com/media/Capabilities&Services.pdf">
          <button>Capabilities and Services</button>
        </a>
      </div>
    </div>
  )
}

export default Section_8
