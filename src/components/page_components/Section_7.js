import React from 'react';
import { useState } from 'react';
import './Section_7.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';

const Section_7 = ({text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,bgImage1,bgImage2,bgImage3,bgImage4,bgImage5,bgImage6,bgImage7,bgImage8,bgImage9,bgImage10}) => {

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
      case 6:
        return text6;
      case 7:
        return text7;
      case 8:
        return text8;
      case 9:
        return text9;
      case 10:
        return text10;
      default:
        return "";
    }
  };

  return (
    <div  className="Section_7">
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
        <div className={`sliderComponent ${activePic === 'pic6' ? 'active' : ''}`} id="pic6" style={{ backgroundImage: `url('/images/${bgImage6}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic7' ? 'active' : ''}`} id="pic7" style={{ backgroundImage: `url('/images/${bgImage7}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic8' ? 'active' : ''}`} id="pic8" style={{ backgroundImage: `url('/images/${bgImage8}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic9' ? 'active' : ''}`} id="pic9" style={{ backgroundImage: `url('/images/${bgImage9}')` }}>
  
        </div>
        <div className={`sliderComponent ${activePic === 'pic10' ? 'active' : ''}`} id="pic10" style={{ backgroundImage: `url('/images/${bgImage10}')` }}>
  
        </div>
      </div>
      <div className="buttonGroup">
        <ArrowBackIosNewIcon fontSize="large" onClick={() => {
          if (picNumber >= 2 && picNumber <= 10) {
            setPicNumber(picNumber - 1);
            setActivePic(`pic${picNumber - 1}`);
          }
          else if(picNumber === 1){
            setPicNumber(10);
            setActivePic(`pic10`);
          }
        }}></ArrowBackIosNewIcon>
        <div className="textItem">
          <p>{getTextElement()}</p>
        </div>
        <ArrowForwardIosNewIcon fontSize="large" onClick={() => {
          if (picNumber >= 1 && picNumber <= 9) {
            setPicNumber(picNumber + 1);
            setActivePic(`pic${picNumber + 1}`);
          }
          else if(picNumber === 10){
            setPicNumber(1);
            setActivePic(`pic1`);
          }
        }}></ArrowForwardIosNewIcon>
      </div>
    </div>
  )
}

export default Section_7
