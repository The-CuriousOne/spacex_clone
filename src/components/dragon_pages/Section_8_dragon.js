import React from 'react';
import './Section_8_dragon.css';

const Section_8_dragon = () => {
  return (
    <div className="Section_8_dragon">
        
        <div className="text">
            <h1>Dragon</h1>
            <h1>Parachute</h1>
            <h1>System</h1>
            <p>The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.</p>
            <a href='https://youtu.be/ulVZds71CZQ'>
                <button>Watch Video</button>
            </a>
        </div>
        <div className="image">
            <a href='https://youtu.be/ulVZds71CZQ'>
                <img src="/images/dragon/parachute.webp" alt="" />   
            </a>
        </div>
    </div>
  )
}

export default Section_8_dragon
