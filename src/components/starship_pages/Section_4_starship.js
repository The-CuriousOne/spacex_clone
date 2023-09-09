import React from "react";
import { useState } from 'react';
import './Section_4_starship.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Section_4_starship = ({bgImage1,bgImage2,bgImage3,bgImage4,bgImage5,slider1_title1,slider1_title2,slider1_desc,slider2_title1,slider2_title2,slider2_desc,slider3_title1,slider3_title2,slider3_desc,slider4_title1,slider4_title2,slider4_desc,slider5_title1,slider5_title2,slider5_desc}) => {
    const[activeSlider, setActiveSlider] = useState('slider1');
    const[slideNumber, setSlideNumber] = useState(1);
    return(
        <div className="Section_4_starship">
            <div className="slider">
                <div className={`sliderComponent ${activeSlider === 'slider1' ? 'active' : ''}`} id="slider1" style={{ backgroundImage: `url('/images/${bgImage1}')` }}>
                    <div className="textComponent">
                        <h1>{slider1_title1}</h1>
                        <h1>{slider1_title2}</h1>
                        <p>{slider1_desc}</p>
                    </div>
                </div>
                <div className={`sliderComponent ${activeSlider === 'slider2' ? 'active' : ''}`} id="slider2" style={{ backgroundImage: `url('/images/${bgImage2}')` }}>
                    <div className="textComponent">
                        <h1>{slider2_title1}</h1>
                        <h1>{slider2_title2}</h1>
                        <p>{slider2_desc}</p>
                    </div>
                </div>
                <div className={`sliderComponent ${activeSlider === 'slider3' ? 'active' : ''}`} id="slider1" style={{ backgroundImage: `url('/images/${bgImage3}')` }}>
                    <div className="textComponent">
                        <h1>{slider3_title1}</h1>
                        <h1>{slider3_title2}</h1>
                        <p>{slider3_desc}</p>
                    </div>
                </div>
                <div className={`sliderComponent ${activeSlider === 'slider4' ? 'active' : ''}`} id="slider1" style={{ backgroundImage: `url('/images/${bgImage4}')` }}>
                    <div className="textComponent">
                        <h1>{slider4_title1}</h1>
                        <h1>{slider4_title2}</h1>
                        <p>{slider4_desc}</p>
                    </div>
                </div>
                <div className={`sliderComponent ${activeSlider === 'slider5' ? 'active' : ''}`} id="slider1" style={{ backgroundImage: `url('/images/${bgImage5}')` }}>
                    <div className="textComponent">
                        <h1>{slider5_title1}</h1>
                        <h1>{slider5_title2}</h1>
                        <p>{slider5_desc}</p>
                    </div>
                </div>
            </div>
            <div className="buttonGroup">
                <ArrowBackIosNewIcon className="arrow" fontSize="large" onClick={() => {
                    if (slideNumber >= 2 && slideNumber <= 5) {
                    setSlideNumber(slideNumber - 1);
                    setActiveSlider(`slider${slideNumber - 1}`);
                    }
                }}></ArrowBackIosNewIcon>
                <div className="circles">
                    <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===1?'99%':'50%'}`}></FiberManualRecordIcon>
                    <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===2?'99%':'50%'}`}></FiberManualRecordIcon>
                    <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===3?'99%':'50%'}`}></FiberManualRecordIcon>
                    <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===4?'99%':'50%'}`}></FiberManualRecordIcon>
                    <FiberManualRecordIcon fontSize="small" opacity={`${slideNumber===5?'99%':'50%'}`}></FiberManualRecordIcon>
                </div>
                <ArrowForwardIosNewIcon className="arrow" fontSize="large" onClick={() => {
                    if (slideNumber >= 1 && slideNumber <= 4) {
                    setSlideNumber(slideNumber + 1);
                    setActiveSlider(`slider${slideNumber + 1}`);
                    }
                }}></ArrowForwardIosNewIcon>
            </div>
        </div>
    )
}

export default Section_4_starship;
