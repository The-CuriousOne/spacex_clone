import React from 'react';
import { useState } from 'react';
import './Section_4_dragon.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Section_4_dragon = ({videoLink,title,bgImage1,bgImage2,height,pheight,diameter,pdiameter,cvolume,pcvolume,tvolume,ptvolume,lpmass,plpmass,rpmass,prpmass,slider2_desc1,slider2_volume,slider2_pvolume,slider3_desc1,slider3_volume,slider3_pvolume}) => {

  const[activeSlider, setActiveSlider] = useState('slider1');
  const[slideNumber, setSlideNumber] = useState(1);

  return (
    <div className="Section_4_dragon">
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
                  Capsule Volume
                </div>
                <div className="value">
                  {cvolume} m<sup>3</sup> <p>/ {pcvolume} ft<sup>3</sup></p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Trunk Volume
                </div>
                <div className="value">
                  {tvolume} m<sup>3</sup> <p>/ {ptvolume} ft<sup>3</sup></p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Launch Payload Mass
                </div>
                <div className="value">
                  {lpmass} kg <p>/ {plpmass} lb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Return Payload Mass
                </div>
                <div className="value">
                  {rpmass} kg <p>/ {prpmass} lb</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider2' ? 'active' : ''}`} id="slider2" style={{ backgroundImage: `url('/images/${bgImage1}')` }}>
          <div className="textComponents">
            <h3>{title}</h3>
            <h1>Trunk</h1>
            <p>{slider2_desc1}</p>
            <ul>
              <li>
                <div className="attribute">
                  Volume
                </div>
                <div className="value">
                {slider2_volume} m<sup>3</sup> <p>/ {slider2_pvolume} ft<sup>3</sup></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider3' ? 'active' : ''}`} id="slider_3" style={{ backgroundImage: `url('/images/${bgImage2}')` }}>
          <div className="textComponents">
            <h1>Capsule</h1>
            <h4>Overview <p>| Launch Abort | Altitude Control</p></h4>
            <p>{slider3_desc1}</p>
            <ul>
              <li>
                <div className="attribute">
                  Volume
                </div>
                <div className="value">
                {slider3_volume} m<sup>3</sup> <p>/ {slider3_pvolume} ft<sup>3</sup></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttonGroup">
          <ArrowBackIosNewIcon fontSize="large" onClick={() => {
            if (slideNumber >= 2 && slideNumber <= 3) {
              setSlideNumber(slideNumber - 1);
              setActiveSlider(`slider${slideNumber - 1}`);
            }
          }}></ArrowBackIosNewIcon>
          <div className="circles">
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===1?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===2?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===3?'100%':'50%'}`}></FiberManualRecordIcon>
        </div>
          <ArrowForwardIosNewIcon fontSize="large" onClick={() => {
            if (slideNumber >= 1 && slideNumber <= 2) {
              setSlideNumber(slideNumber + 1);
              setActiveSlider(`slider${slideNumber + 1}`);
            }
          }}></ArrowForwardIosNewIcon>
        </div>
      </div>
    </div>
  )
}

export default Section_4_dragon
