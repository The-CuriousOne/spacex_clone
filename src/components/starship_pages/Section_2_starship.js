import React from 'react';
import { useState } from 'react';
import './Section_2_starship.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Section_2_dragon = ({videoLink,bgImage2,bgImage3,bgImage4,title1,slider1_desc,height1,pheight1,diameter1,pdiameter1,pcmass1,title2,slider2_desc,height2,pheight2,diameter2,pdiameter2,pcap2,ppcap2,thrust2,pthrust2,pcmass2,title3,slider3_desc,height3,pheight3,diameter3,pdiameter3,pcap3,ppcap3,thrust3,pthrust3,title4,engine1,engine2,slider4_desc,diameter4,pdiameter4,height4,pheight4,thrust4,pthrust4}) => {

  const[activeSlider, setActiveSlider] = useState('slider1');
  const[slideNumber, setSlideNumber] = useState(1);

  return (
    <div className="Section_2_dragon">
      <div className="slider">
        <div className={`sliderComponent ${activeSlider === 'slider1' ? 'active' : ''}`} id="slider1">
          <div className="videoComponent">
            <video className="video" autoPlay loop muted>
              <source src={`/images/${videoLink}`} type="video/mp4" />
            </video>
          </div>
          <div className="textComponents">
            <h1>{title1} OverView</h1>
            <p>{slider1_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {height1} m <p>/ {pheight1} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {diameter1} m <p>/ {pdiameter1} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Payload Capacity
                </div>
                <div className="value">
                  {pcmass1} t<p>/ {'(fully reusable)'} </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider2' ? 'active' : ''}`} id="slider2" style={{ backgroundImage: `url('/images/${bgImage2}')` }}>
          <div className="textComponents">
            <h1>{title2}</h1>
            <p>{slider2_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {height2} m <p>/ {pheight2} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {diameter2} m <p>/ {pdiameter2} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Propalant Capacity
                </div>
                <div className="value">
                  {pcap2} t <p>/ {ppcap2} Mlb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Thrust
                </div>
                <div className="value">
                  {thrust2} tf <p>/ {pthrust2} Mlbf</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Payload Capacity
                </div>
                <div className="value">
                  {pcmass2} t
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider3' ? 'active' : ''}`} id="slider_3" style={{ backgroundImage: `url('/images/${bgImage3}')` }}>
          <div className="textComponents">
            <h1>{title3}</h1>
            <p>{slider3_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {height3} m <p>/ {pheight3} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {diameter3} m <p>/ {pdiameter3} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Propalant Capacity
                </div>
                <div className="value">
                  {pcap3} t <p>/ {ppcap3} Mlb</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Thrust
                </div>
                <div className="value">
                  {thrust3} tf <p>/ {pthrust3} Mlbf</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`sliderComponent ${activeSlider === 'slider4' ? 'active' : ''}`} id="slider_4" style={{ backgroundImage: `url('/images/${bgImage4}')` }}>
          <div className="textComponents">
            <h1>{title4}</h1>
            <h4>{engine1} <p>| {engine2}</p></h4>
            <p>{slider4_desc}</p>
            <ul>
              <li>
                <div className="attribute">
                  Diameter
                </div>
                <div className="value">
                  {diameter4} m <p>/ {pdiameter4} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Height
                </div>
                <div className="value">
                  {height4} m <p>/ {pheight4} ft</p>
                </div>
              </li>
              <li>
                <div className="attribute">
                  Thrust
                </div>
                <div className="value">
                  {thrust4} tf <p>/ {pthrust4} Mlbf</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttonGroup">
          <ArrowBackIosNewIcon className="arrow" fontSize="large" onClick={() => {
            if (slideNumber >= 2 && slideNumber <= 4) {
              setSlideNumber(slideNumber - 1);
              setActiveSlider(`slider${slideNumber - 1}`);
            }
          }}></ArrowBackIosNewIcon>
          <div className="circles">
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===1?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===2?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===3?'100%':'50%'}`}></FiberManualRecordIcon>
            <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===4?'100%':'50%'}`}></FiberManualRecordIcon>
        </div>
          <ArrowForwardIosNewIcon className="arrow" fontSize="large" onClick={() => {
            if (slideNumber >= 1 && slideNumber <= 3) {
              setSlideNumber(slideNumber + 1);
              setActiveSlider(`slider${slideNumber + 1}`);
            }
          }}></ArrowForwardIosNewIcon>
        </div>
      </div>
    </div>
  )
}

export default Section_2_dragon
