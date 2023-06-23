import React from 'react';
import { useState } from 'react';
import './Section_4.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Section_4 = ({videoLink,title,bgImage1,bgImage2,bgImage3,bgImage4,height,pheight,diameter,pdiameter,mass,pmass,ledmass,pledmass,gtomass,pgtomass,marsmass,pmarsmass,slider2_desc1,slider2_desc2,slider3_desc1,slider3_desc2,slider4_desc,num_engine,burn_time,thurst,pthurst,slider5_desc,pay_height,ppay_height,pay_diameter,ppay_diameter}) => {

  const[activeSlider, setActiveSlider] = useState('slider1');
  const[slideNumber, setSlideNumber] = useState(1);

  return (
    <div className="Section_4">
      <div className="slider">
        <div className={`sliderComponent ${activeSlider === 'slider1' ? 'active' : ''}`} id="slider1">
          <div className="videoComponent">
            <video className="video" autoPlay loop muted>
              <source src={`/images/${videoLink}`} type="video/mp4" />
            </video>
          </div>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>OverView</h1>
            <ul>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {height} m <p>/ {pheight} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {diameter} m <p>/ {pdiameter} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Mass
                </div>
                <div className="value">
                  {mass} kg <p>/ {pmass} lb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  PayLoad to LED
                </div>
                <div className="value">
                  {ledmass} kg <p>/ {pledmass} lb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Payload to GTO
                </div>
                <div className="value">
                  {gtomass} kg <p>/ {pgtomass} lb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Payload to Mars
                </div>
                <div className="value">
                  {marsmass} kg <p>/ {pmarsmass} lb</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider2' ? 'active' : ''}`} id="slider2" style={{ backgroundImage: `url('/images/${bgImage1}')` }}>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>First Stage</h1>
            <h4>Overview <p>| Engines | Landing Legs</p></h4>
            <p>{slider2_desc1}</p>
            <p>{slider2_desc2} </p>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider3' ? 'active' : ''}`} id="slider3" style={{ backgroundImage: `url('/images/${bgImage2}')` }}>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>Interstage</h1>
          <p>{slider3_desc1}</p>
            <h3>Grid Fins</h3>
            <p>{slider3_desc2}</p>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider4' ? 'active' : ''}`} id="slider4" style={{ backgroundImage: `url('/images/${bgImage3}')` }}>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>Second Stage</h1>
            <p>{slider4_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Number of Engines
                </div>
                <div className="value">
                  {num_engine}
                </div>
              </li>
              <li>
                <div className="attribute">
                  Burn Time
                </div>
                <div className="value">
                  {burn_time} sec
                </div>
              </li>
              <li>
                <div className="attribute">
                  Thurst
                </div>
                <div className="value">
                  {thurst} kN <p>/ {pthurst} lbf</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider5' ? 'active' : ''}`} id="slider5" style={{ backgroundImage: `url('/images/${bgImage4}')` }}>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>Payload</h1>
            <h4>Fairing <p> | Dragon</p></h4>
            <p>{slider5_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {pay_height} m <p> / {ppay_height} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {pay_diameter} m <p> / {ppay_diameter} ft</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttonGroup">
          <ArrowBackIosNewIcon fontSize="large" onClick={() => {
            if (slideNumber >= 2 && slideNumber <= 5) {
              setSlideNumber(slideNumber - 1);
              setActiveSlider(`slider${slideNumber - 1}`);
            }
          }}></ArrowBackIosNewIcon>
          <div className="circles">
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===1?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===2?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===3?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===4?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===5?'100%':'50%'}`}></FiberManualRecordIcon>
          </div>
          <ArrowForwardIosNewIcon fontSize="large" onClick={() => {
            if (slideNumber >= 1 && slideNumber <= 4) {
              setSlideNumber(slideNumber + 1);
              setActiveSlider(`slider${slideNumber + 1}`);
            }
          }}></ArrowForwardIosNewIcon>
        </div>
      </div>
    </div>
  )
}

export default Section_4
