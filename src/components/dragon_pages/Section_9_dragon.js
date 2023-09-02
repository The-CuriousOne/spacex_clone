import React from 'react';
import { useState } from 'react';
import './Section_9_dragon.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';

const Section_9_dragon = ({text1,text2,text3,text4,text5,text6,bgImage1,bgImage2,bgImage3,bgImage4,bgImage5,bgImage6}) => {

  const[activePic, setActivePic] = useState('pic1');
  const[picNumber, setPicNumber] = useState(1);

  const getTextElement = () => {
    switch (picNumber) {
      case 1:
        return text1;
      case 2:
        return text2;
      case 3:
        return text3;
      case 4:
        return text4;
      case 5:
        return text5;
      default:
        return "";
    }
  };

  return (
    <div  className="Section_9_dragon">
      <div className="slider">
      <div className={`sliderComponent ${activePic === 'pic1' ? 'active' : ''}`} id="pic1" style={{ backgroundImage: `url('/images/${bgImage1}')` }}>
        
        </div>
        <div className={`sliderComponent ${activePic === 'pic2' ? 'active' : ''}`} id="pic2" style={{ backgroundImage: `url('/images/${bgImage2}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic3' ? 'active' : ''}`} id="pic3" style={{ backgroundImage: `url('/images/${bgImage3}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic4' ? 'active' : ''}`} id="pic4" style={{ backgroundImage: `url('/images/${bgImage4}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic5' ? 'active' : ''}`} id="pic5" style={{ backgroundImage: `url('/images/${bgImage5}')` }}>
  
        </div>
      </div>
      <div className="buttonGroup">
        <ArrowBackIosNewIcon fontSize="large" onClick={() => {
          if (picNumber >= 2 && picNumber <= 5) {
            setPicNumber(picNumber - 1);
            setActivePic(`pic${picNumber - 1}`);
          }
          else if(picNumber === 1){
            setPicNumber(5);
            setActivePic(`pic5`);
          }
        }}></ArrowBackIosNewIcon>
        <div className="textItem">
          <p>{getTextElement()}</p>
        </div>
        <ArrowForwardIosNewIcon fontSize="large" onClick={() => {
          if (picNumber >= 1 && picNumber <= 4) {
            setPicNumber(picNumber + 1);
            setActivePic(`pic${picNumber + 1}`);
          }
          else if(picNumber === 5){
            setPicNumber(1);
            setActivePic(`pic1`);
          }
        }}></ArrowForwardIosNewIcon>
      </div>
    </div>
  )
}

export default Section_9_dragon
