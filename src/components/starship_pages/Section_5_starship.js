import React from "react";
import './Section_5_starship.css';

const Section_5_starship = ({bgImg,vdo,title,desc}) =>{
    return(
        <div className="Section_5_starship" style={{backgroundImage: `url('/images/${bgImg}')`}}>
            <div className="videoComponent">
                <video className="video" autoPlay loop muted>
                <source src={`/images/${vdo}`} type="video/mp4" />
                </video>
            </div>
            <div className="textComponent">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Section_5_starship;