import React from 'react';
import { useState } from 'react';
import './Section_3_starship.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Section_3_starship = ({bgImage}) =>{
    return(
        <div className='Section_3_starship' style={{ backgroundImage: `url('/images/${bgImage}')` }}>
            <a href='https://youtu.be/921VbEMAwwY'><PlayArrowIcon fontSize='large'></PlayArrowIcon></a>
        </div>
    )
}

export default Section_3_starship;