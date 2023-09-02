import React from 'react';
import './Section_7_dragon.css';

const Section_7_dragon = () => {
  return (
    <div className="Section_7_dragon">
      <div className="textComponent">
        <h3>Engines</h3>
        <h1>Draco</h1>
        <h4>Draco <p> | SuperDracos</p></h4>
        <p>The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.</p>
        <ul>
          <li>
            <div className="attribute">
              Number of Engines
            </div>
            <div className="value">
              16
            </div>
          </li>
          <li>
            <div className="attribute">
              Thurst in Vacuum
            </div>
            <div className="value">
              400 kN <p>/ 90 lbf</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Section_7_dragon
