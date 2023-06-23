import React from 'react';
import './Section_6.css';

const Section_6 = () => {
  return (
    <div className="Section_6">
      <div className="textComponent">
        <h3>Engines</h3>
        <h1>Merlin</h1>
        <h4>Sea Level <p> | Vacuum</p></h4>
        <p>Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.</p>
        <ul>
          <li>
            <div className="attribute">
              Propellant
            </div>
            <div className="value">
              LOX <p>/ RP-1</p>
            </div>
          </li>
          <li>
            <div className="attribute">
              Thurst
            </div>
            <div className="value">
              845 kN <p>/ 190,000 lbf</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Section_6
