import React from 'react';
import './Section_5.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Section_5 = ({bgImage,title,link}) => {

  const playVideo = () => {
    window.location.href = link;
  }

  return (
    <div className="Section_5" style={{ backgroundImage: `url('/images/${bgImage}')` }}>
      <div className="empty">

      </div>
      <div className="playButton">
        <PlayArrowIcon fontSize='large' onClick={playVideo}/>
      </div>
      <div className="text">
        <h3>Video</h3>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Section_5
