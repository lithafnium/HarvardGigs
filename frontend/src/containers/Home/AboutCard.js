import React from 'react';

const AboutCard = (props) => {
    return(
        <div className = "about-card">
            <img src = {props.imgsrc}/>
            <h2 className = "about-title">{props.title}</h2>
            <p>{props.txt}</p>
        </div>
    ); 
}

export default AboutCard; 