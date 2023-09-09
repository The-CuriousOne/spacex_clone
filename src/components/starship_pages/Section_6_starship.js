import React from "react";
import './Section_6_starship.css';

const Section_6_starship = ({bgImg,title,desc,link}) =>{
    return(
        <div className="Section_5_starship" style={{backgroundImage: `url('/images/${bgImg}')`}}>
            <div className="textComponent">
                <h1>{title}</h1>
                <p>{desc}</p>
                <a href={link}><button>Watch</button></a>
            </div>
        </div>
    )
}

export default Section_6_starship;